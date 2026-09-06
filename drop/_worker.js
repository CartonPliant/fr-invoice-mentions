// bundled for Cloudflare Pages drop (_worker.js). Do not edit by hand.
/** Pure FR invoice/quote mention templates. No network. */

const SIRET_RE = /^\d{14}$/;
const SIREN_RE = /^\d{9}$/;

function digits(s) {
  return String(s || "").replace(/\D/g, "");
}

/** INSEE Luhn on SIRET (14). La Poste 356000000: sum % 5 === 0. */
function siretOk(raw) {
  const n = digits(raw);
  if (n.length === 9) return { ok: SIREN_RE.test(n), type: "siren", compact: n };
  if (n.length !== 14) return { ok: false, type: "unknown", compact: n };
  if (n.startsWith("356000000")) {
    const sum = [...n].reduce((a, d) => a + Number(d), 0);
    return { ok: sum % 5 === 0, type: "siret", compact: n, rule: "la-poste" };
  }
  let sum = 0;
  for (let i = 0; i < 14; i++) {
    let d = Number(n[13 - i]);
    if (i % 2 === 1) {
      d *= 2;
      if (d > 9) d -= 9;
    }
    sum += d;
  }
  return { ok: sum % 10 === 0, type: "siret", compact: n, rule: "luhn" };
}

function buildMentions(input) {
  const i = input && typeof input === "object" ? input : {};
  const missing = [];
  const name = String(i.legal_name || i.name || "").trim();
  const address = String(i.address || "").trim();
  const zip = String(i.zip || i.postcode || "").trim();
  const city = String(i.city || "").trim();
  const email = String(i.email || "").trim();
  const siretIn = i.siret || i.siren || "";
  const siret = siretOk(siretIn);
  const franchise = Boolean(i.tva_franchise_293b ?? i.franchise_tva ?? true);
  const tva = String(i.vat_number || i.tva || "").trim();
  const rcs = String(i.rcs || "").trim();
  const ape = String(i.ape || i.naf || "").trim();
  const iban = String(i.iban || "").replace(/\s+/g, "").toUpperCase();
  const ei = i.entrepreneur_individuel !== false;
  const kind = String(i.kind || "both").toLowerCase();
  const validityDays = Number(i.devis_validity_days) > 0 ? Number(i.devis_validity_days) : 30;

  if (!name) missing.push("legal_name");
  if (!address) missing.push("address");
  if (!city) missing.push("city");
  if (!siret.ok) missing.push("siret");

  const loc = [address, [zip, city].filter(Boolean).join(" ")].filter(Boolean).join(", ");
  const idLine = ei
    ? `${name}, entrepreneur individuel`
    : name;
  const siretLine = siret.ok
    ? `SIRET ${siret.compact}${siret.type === "siren" ? " (SIREN)" : ""}`
    : siret.compact
      ? `SIRET fourni non conforme (Luhn) : ${siret.compact}`
      : "SIRET manquant";
  const tvaLine = franchise
    ? "TVA non applicable, art. 293 B du CGI"
    : tva
      ? `N° TVA intracommunautaire ${tva}`
      : "N° TVA manquant (hors franchise 293 B)";
  if (!franchise && !tva) missing.push("vat_number");

  const rcsLine = rcs
    ? `RCS ${rcs}`
    : "Immatriculation RCS : à compléter si obligatoire";
  const apeLine = ape ? `Code APE ${ape}` : "";
  const mailLine = email ? `E-mail ${email}` : "";
  const ibanLine = iban ? `IBAN ${iban}` : "";

  const penalties =
    "Pénalités de retard : taux directeur de la BCE + 10 points, exigibles le jour suivant la date de règlement figurant sur la facture, sans rappel (L441-10 C. com.). Indemnité forfaitaire pour frais de recouvrement : 40 €.";

  const eInvoicing =
    "Rappel (pas un conseil juridique) : depuis le 1er septembre 2026, toute entreprise établie en France doit pouvoir recevoir une facture électronique via une plateforme agréée. L’émission pour les TPE/PME est prévue plus tard (calendrier DGFiP).";

  const identity = [idLine, loc, siretLine, tvaLine, rcsLine, apeLine, mailLine, ibanLine]
    .filter(Boolean)
    .join("\n");

  const facture = [
    "MENTIONS FACTURE",
    identity,
    penalties,
    eInvoicing,
    "Document généré à partir des faits fournis par l’agent. Vérifier L441-9 C. com. et 242 nonies A CGI avant envoi. Ceci n’est pas un avis juridique.",
  ].join("\n\n");

  const devis = [
    "MENTIONS DEVIS",
    identity,
    `Devis valable ${validityDays} jours à compter de sa date d’émission, sauf mention contraire.`,
    "Le devis n’est pas une facture. L’acceptation (signature, accord écrit) emporte commande.",
    eInvoicing,
    "Document généré à partir des faits fournis par l’agent. Ceci n’est pas un avis juridique.",
  ].join("\n\n");

  const out = {
    ok: missing.length === 0,
    missing,
    siret_check: siret,
    mentions: {},
    disclaimer:
      "Templates. Pas un avis juridique. Pas un lookup INSEE/Infogreffe. L’agent fournit les faits.",
  };
  if (kind === "facture") out.mentions.facture = facture;
  else if (kind === "devis") out.mentions.devis = devis;
  else {
    out.mentions.facture = facture;
    out.mentions.devis = devis;
  }
  return out;
}

const USDC_BASE = "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913";
const AMOUNT = "20000"; // $0.02 USDC (6 decimals)
const NETWORK = "eip155:8453";
const DEFAULT_FACILITATOR = "https://facilitator.payai.network";

function envOf(c) {
  return (c && c.env) || {};
}

function payTo(env) {
  const a = (env && env.PAY_TO) || "0xc361074554c13EEE51feab63ED180EF6b9911B3e";
  if (!/^0x[a-fA-F0-9]{40}$/.test(a)) return null;
  return a;
}

function facilitatorUrl(env) {
  return (env.FACILITATOR_URL || DEFAULT_FACILITATOR).replace(/\/$/, "");
}

function origin(req) {
  try {
    const u = new URL(req.url);
    return `${u.protocol}//${u.host}`;
  } catch {
    return "";
  }
}

function b64json(obj) {
  const s = JSON.stringify(obj);
  if (typeof btoa === "function") {
    return btoa(unescape(encodeURIComponent(s)));
  }
  return Buffer.from(s, "utf8").toString("base64");
}

function paymentRequired(req, env, resourcePath, description, bazaar) {
  const to = payTo(env);
  const url = origin(req) + resourcePath;
  const body = {
    x402Version: 2,
    error: "Payment required",
    resource: {
      url,
      description,
      mimeType: "application/json",
      serviceName: "fr-invoice-mentions",
      tags: ["france", "invoice", "mentions", "devis", "293B", "legal", "template"],
    },
    accepts: [
      {
        scheme: "exact",
        network: NETWORK,
        asset: USDC_BASE,
        amount: AMOUNT,
        payTo: to,
        maxTimeoutSeconds: 300,
        extra: { name: "USD Coin", version: "2" },
      },
    ],
    extensions: { bazaar },
  };
  return new Response("{}", {
    status: 402,
    headers: {
      "content-type": "application/json",
      "payment-required": b64json(body),
      "access-control-allow-origin": "*",
      "access-control-expose-headers": "PAYMENT-REQUIRED, PAYMENT-RESPONSE",
    },
  });
}

function paymentHeader(req) {
  return (
    req.headers.get("PAYMENT-SIGNATURE") ||
    req.headers.get("payment-signature") ||
    req.headers.get("X-PAYMENT") ||
    req.headers.get("x-payment") ||
    ""
  );
}

async function settleIfPaid(req, env, requirements) {
  const header = paymentHeader(req);
  if (!header) return { paid: false };
  const fac = facilitatorUrl(env);
  const payload = { x402Version: 2, paymentHeader: header, paymentRequirements: requirements };
  const verify = await fetch(`${fac}/verify`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload),
  });
  const verifyJson = await verify.json().catch(() => ({}));
  if (!verify.ok || verifyJson.isValid === false || verifyJson.success === false) {
    return { paid: false, error: verifyJson, status: verify.status };
  }
  const settle = await fetch(`${fac}/settle`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload),
  });
  const settleJson = await settle.json().catch(() => ({}));
  if (!settle.ok && settle.status !== 200) {
    return { paid: false, error: settleJson, status: settle.status };
  }
  return { paid: true, settlement: settleJson };
}

function json(data, status = 200, extra = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "access-control-allow-origin": "*",
      ...extra,
    },
  });
}

function llmsTxt(base) {
  return `# fr-invoice-mentions

French legal mention blocks for invoices and quotes (EI / micro, art. 293 B CGI, L441-9 / L441-10 C. com.).
The agent POSTs seller facts. We return collable text. No INSEE/Infogreffe lookup. No web scrape.

## Paid

POST ${base}/v1/mentions
x402 exact USDC on Base (eip155:8453), $0.02.

JSON body:
{
  "legal_name": "string",
  "address": "string",
  "zip": "string",
  "city": "string",
  "siret": "14 digits",
  "tva_franchise_293b": true,
  "email": "optional",
  "iban": "optional",
  "rcs": "optional",
  "ape": "optional",
  "kind": "both" | "facture" | "devis"
}

Discovery: ${base}/.well-known/x402.json
Agent card: ${base}/.well-known/agent-card.json
`;
}

function wellKnownX402(req, env) {
  const to = payTo(env);
  const base = origin(req);
  return {
    x402Version: 2,
    kind: "resource-server",
    name: "fr-invoice-mentions",
    description:
      "Collable French invoice/quote legal mentions from seller facts. Offline templates. No registry lookup.",
    resources: [
      {
        url: `${base}/v1/mentions`,
        method: "POST",
        description:
          "Generate French facture + devis mention blocks (293 B, SIRET Luhn, late-payment penalties).",
        mimeType: "application/json",
      },
    ],
    accepts: [
      {
        scheme: "exact",
        network: NETWORK,
        asset: USDC_BASE,
        amount: AMOUNT,
        payTo: to,
        extra: { name: "USD Coin", version: "2" },
      },
    ],
  };
}

function agentCard(req) {
  const base = origin(req);
  return {
    protocolVersion: "0.3.0",
    name: "fr-invoice-mentions",
    description:
      "French invoice and quote legal mention generator for agents. POST facts, get collable FR text. Paid via x402 USDC on Base.",
    url: `${base}/a2a`,
    version: "1.0.0",
    provider: {
      organization: "Yanis Monnet EI",
      url: base,
    },
    capabilities: { streaming: false, pushNotifications: false },
    defaultInputModes: ["application/json"],
    defaultOutputModes: ["application/json"],
    skills: [
      {
        id: "mentions",
        name: "French invoice mentions",
        description: "Build 293 B / L441-9 mention blocks from seller JSON. No SIRENE lookup.",
        tags: ["france", "invoice", "legal", "mentions"],
        inputModes: ["application/json"],
        outputModes: ["application/json"],
      },
    ],
  };
}

const BAZAAR_MENTIONS = {
  info: {
    input: {
      type: "http",
      method: "POST",
      body: {
        legal_name: "Yanis Monnet",
        address: "1 rue Example",
        zip: "64150",
        city: "Mourenx",
        siret: "44306184100047",
        tva_franchise_293b: true,
        kind: "both",
      },
    },
    output: {
      type: "json",
      example: {
        ok: true,
        missing: [],
        mentions: { facture: "...", devis: "..." },
      },
    },
  },
};

async function handleMentions(req, env) {
  const to = payTo(env);
  if (!to) return json({ error: "PAY_TO wallet not configured" }, 503);
  const requirements = {
    scheme: "exact",
    network: NETWORK,
    asset: USDC_BASE,
    amount: AMOUNT,
    payTo: to,
    maxTimeoutSeconds: 300,
    extra: { name: "USD Coin", version: "2" },
  };
  const paid = await settleIfPaid(req, env, requirements);
  if (!paid.paid) {
    if (paymentHeader(req)) {
      return json({ error: "payment_rejected", detail: paid.error || null }, 402);
    }
    return paymentRequired(
      req,
      env,
      "/v1/mentions",
      "French invoice/quote legal mention blocks from seller facts. Offline templates, Luhn SIRET only, no registry lookup.",
      BAZAAR_MENTIONS,
    );
  }
  let body = {};
  try {
    body = await req.json();
  } catch {
    body = {};
  }
  const result = buildMentions(body);
  const extra = {};
  if (paid.settlement) {
    extra["payment-response"] = b64json({ settlement: paid.settlement });
  }
  return json(result, 200, extra);
}

export default {
  async fetch(req, env) {
    if (req.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "access-control-allow-origin": "*",
          "access-control-allow-headers": "content-type, payment-signature, x-payment, payment-required",
          "access-control-allow-methods": "GET, POST, OPTIONS",
        },
      });
    }
    const u = new URL(req.url);
    const path = u.pathname.replace(/\/+$/, "") || "/";

    if (path === "/health" && req.method === "GET") {
      return json({ ok: true, pay_to_configured: Boolean(payTo(env)) });
    }
    if (path === "/llms.txt" && req.method === "GET") {
      return new Response(llmsTxt(origin(req)), {
        headers: { "content-type": "text/plain; charset=utf-8", "access-control-allow-origin": "*" },
      });
    }
    if (path === "/.well-known/x402.json" && req.method === "GET") {
      return json(wellKnownX402(req, env));
    }
    if (path === "/.well-known/agent-card.json" && req.method === "GET") {
      return json(agentCard(req));
    }
    if ((path === "/v1/mentions" || path === "/a2a") && req.method === "POST") {
      return handleMentions(req, env);
    }
    if (path === "/a2a" && req.method === "GET") {
      return json(agentCard(req));
    }
    if (path === "/" && req.method === "GET") {
      return json({
        name: "fr-invoice-mentions",
        paid: "POST /v1/mentions — $0.02 USDC Base x402",
        docs: "/llms.txt",
        x402: "/.well-known/x402.json",
        isolation: "Not Devis d'abord, not Fiche Pleine, not Ibis.",
      });
    }
    return json({ error: "not_found" }, 404);
  },
};
