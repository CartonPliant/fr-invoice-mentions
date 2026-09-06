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

## Toi (2 min)

1. `npx wrangler login` (compte Cloudflare **gratuit** — pas du capital)
2. `PAY_TO=0x… npm run deploy` (adresse dans `.env`, pas dans git)
3. On enregistre l’URL sur a2aregistry + a2a-registry (listing 0 €, instantané)

Sans URL HTTPS publique, les agents ne peuvent pas payer.

## Risques déjà mesurés

Demande Bazaar FR mentions = **trou** (0 générateur, 1–3 wallets sur la *vérif*). H3 peut encore gagner à J+7. On teste au lieu de coller un slogan.
