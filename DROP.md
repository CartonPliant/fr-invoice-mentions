# Déployer sur Cloudflare (sans wrangler, sans domaine payant)

L’écran **Drop a folder, or a zip** = Cloudflare Drop : **statique**, preview **1 h** sauf *Claim*. Ça ne fait **pas** tourner une API x402 toute seule.

Il nous faut un Worker / Pages avec **`_worker.js`**.

## À faire (toi) — 2 minutes

1. **N’achète pas de domaine.** workers.dev / pages.dev suffisent.
2. Dashboard Cloudflare → **Workers & Pages** (pas seulement Drop anonyme).
3. **Create** → drag-and-drop / upload zip.
4. Dépose le zip :

`/Users/user/Documents/Projet transverse/needmoneyasap/fr-invoice-mentions-drop.zip`

   Dedans : `_worker.js` + `index.html` (à la racine).
5. Si on te propose **Claim**, claim **dans ton compte** (sinon ça expire).
6. Colle-moi l’URL finale (`*.workers.dev` ou `*.pages.dev`).

Si le drop n’accepte que du HTML : **Workers → Create Worker → Edit code**, colle `drop/_worker.js`, Deploy. Même chose.

## Ce que je n’ai pas besoin

- Domaine payant
- Access / Zero Trust
- AI / storage / media add-ons
