import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { siretOk, buildMentions } from "./mentions.js";

describe("siretOk", () => {
  it("accepts a well-known valid SIRET", () => {
    const r = siretOk("44306184100047");
    assert.equal(r.ok, true);
    assert.equal(r.type, "siret");
    assert.equal(r.compact, "44306184100047");
  });
  it("rejects a bad checksum", () => {
    assert.equal(siretOk("44306184100048").ok, false);
  });
});

describe("buildMentions", () => {
  it("builds both blocs and flags 293 B", () => {
    const r = buildMentions({
      legal_name: "Yanis Monnet",
      address: "1 rue Test",
      zip: "64150",
      city: "Mourenx",
      siret: "44306184100047",
      tva_franchise_293b: true,
      email: "x@example.com",
    });
    assert.equal(r.ok, true);
    assert.match(r.mentions.facture, /293 B/);
    assert.match(r.mentions.facture, /L441-10/);
    assert.match(r.mentions.devis, /Devis valable 30 jours/);
    assert.doesNotMatch(r.mentions.facture, /devisdabord/i);
  });
  it("lists missing fields", () => {
    const r = buildMentions({});
    assert.equal(r.ok, false);
    assert.ok(r.missing.includes("legal_name"));
    assert.ok(r.missing.includes("siret"));
  });
});
