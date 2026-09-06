# Semaine agents — fr-invoice-mentions

Cadre au 7 sept 2026 ~00:40 CEST. Horloge 11:03 **relâchée**. Sprint : **live aujourd’hui** + **7 jours** pour 1 paiement agent tiers.

## Produit

HTTP **x402** `POST /v1/mentions`. L’agent envoie les faits vendeur (nom, SIRET, ville, 293 B…). On rend des blocs mentions facture/devis **collables**. **0 fetch.** Luhn SIRET local, pas INSEE, pas greeneris.

- Prix : **0,02 USDC** sur Base (`eip155:8453`)
- Facilitateur prod : PayAI `https://facilitator.payai.network` (x402.org/facilitator = testnet only)
- Isolation : pas Devis d’abord, pas Fiche Pleine, pas Ibis
- Discovery : `/.well-known/x402.json`, `llms.txt`, A2A card, extension Bazaar dans le 402

C’est le test **H1** de `MARKET.md` avec 7 j d’indexation pull (pas 11 h).

## Kill / garde (14 sept 2026 00:40 CEST)

| | |
|---|---|
| **Tue** | 0 paiement **tiers** (hors nos tests / farm 1:1) |
| **Garde** | ≥1 wallet tiers, ratio appels/payeur ≥ 2 (loop, pas un ping d’index) |

Auto-achat, ferme de wallets, carte fondateur = fail.

## Live (7 sept ~00:57 CEST)

- **URL persistante** : https://fr-invoice-mentions.monnet-yanis1.workers.dev
- Repo : https://github.com/CartonPliant/fr-invoice-mentions
- Wallet réception Base : `0xc361074554c13EEE51feab63ED180EF6b9911B3e` (clé privée dans `.env` gitignored — **sauvegarde**)
- Smoke (curl, 6 sept 22:57 UTC) : `GET /health` 200 `pay_to_configured:true` ; `POST /v1/mentions` **402** ; amount `20000` ; network `eip155:8453` ; asset USDC Base ; payTo ci-dessus
- a2aregistry **live** : `96e192b8-f33d-4544-9a99-c60cd7c7c23a` → workers.dev (smoke 402, attendu : skill payante)
- a2aregistry **tunnel** (périmé dès que la session meurt) : `e99209c2-2334-4ce1-ab85-076aedb566da`

`compatibility_date` wrangler = `2025-09-01` (Cloudflare refuse une date « future » ; leurs horloges étaient encore au 6 sept UTC).

## Risques déjà mesurés

Demande Bazaar FR mentions = **trou** (0 générateur, 1–3 wallets sur la *vérif*). H3 peut encore gagner à J+7. On teste au lieu de coller un slogan.
