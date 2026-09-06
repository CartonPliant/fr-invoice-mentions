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

## Live (7 sept ~00:40 CEST)

- Repo : https://github.com/CartonPliant/fr-invoice-mentions
- Tunnel **éphémère** (cette session) : `https://grateful-heard-substances-wins.trycloudflare.com`
- Wallet réception Base : `0xc361074554c13EEE51feab63ED180EF6b9911B3e` (clé privée dans `.env` gitignored — **sauvegarde**)
- a2aregistry id : `e99209c2-2334-4ce1-ab85-076aedb566da` (lié au tunnel ; à re-pointer après wrangler)

Le tunnel meurt avec la session Grok. Pour **7 jours** il faut un Worker persistant :

```bash
npx wrangler login
cd "/Users/user/Documents/Projet transverse/needmoneyasap"
npx wrangler@4 deploy
```

Puis renvoyer l’URL `*.workers.dev` — je re-register A2A / Bazaar.

## Risques déjà mesurés

Demande Bazaar FR mentions = **trou** (0 générateur, 1–3 wallets sur la *vérif*). H3 peut encore gagner à J+7. On teste au lieu de coller un slogan.
