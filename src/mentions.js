/** Pure FR invoice/quote mention templates. No network. */

const SIRET_RE = /^\d{14}$/;
const SIREN_RE = /^\d{9}$/;

export function digits(s) {
  return String(s || "").replace(/\D/g, "");
}

/** INSEE Luhn on SIRET (14). La Poste 356000000: sum % 5 === 0. */
export function siretOk(raw) {
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

export function buildMentions(input) {
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
