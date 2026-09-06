# Idées — needmoneyasap (maj 6 sept 2026 ~23h)

Contraintes : 0 capital, Stripe live, pas mail pro, pas Orthies, pas Reddit, pas carte fondateur.
Client visé (piste actuelle) : **agents avec wallet** (x402), vente = discovery / schéma / 1er appel pas cher. Pas de prompt injection.

## Parking — A. URL → JSON (scrape)

- Besoin : « yeux sur une page publique », sans compte Tavily/Firecrawl. Catégorie #1 du Bazaar (~50 % des appels).
- Offre : GET url → emails, tél, SIRET, titre, texte. 0,02–0,05 USDC.
- **Pourquoi c’est en parking :** chaque vente = un `fetch` chez nous.
  - Pas le quota Grok/Chrome (interdit de scraper pour les clients avec nos tools).
  - Quota Cloudflare Free : 100k req/jour, **10 ms CPU**, 50 subrequests. Une page lourde / JS / anti-bot = timeout, IP brûlée, ou on tape le plafond.
  - Facilitateur CDP : 1000 tx/mois gratuites puis 0,001 $.
  - On devient un proxy scrape : blocages, ToS des sites, pas 0 risque.
- Variante propre si on y revient : **parse-only** — l’agent envoie le HTML, on n’appelle personne. Plus de quota réseau. Besoin plus faible (il a déjà la page).

## Autres pistes 0 budget (pas de scrape sortant)

### B. L’agent envoie les faits, on rend un livrable (recommandé si agents)

Besoin : il a déjà métier / ville / nom. Il veut un **texte FR collable** (mentions légales devis, bio, mail, fiche). Il paie l’écriture, pas le web.
Coût variable : CPU templates, **0 fetch**.
Quota : le nôtre une fois (on rédige la banque de templates ce soir), ensuite statique.
Risque : proche Devis d’abord / Fiche Pleine sur le *contenu* — SKU isolé, API agent, pas le site Alpha.
WTP : plus haut qu’un scrape à 0,001 $ si le JSON est « prêt à coller ».

### C. Skill / pack payant (fichier, 1 fois)

Besoin : l’agent veut une **consigne** (SKILL.md, schémas, exemples FR) pour faire le boulot lui-même.
Offre : x402 `exact` 1–9 USDC, télécharge le pack. Pattern Bitrefill (bien, pas data).
0 scrape, 0 CPU par rappel.
Marketing agent : description Bazaar très précise + `/SKILL.md`.
WTP : 1 achat, pas un loop. Plus proche d’un vrai € si le pack est bon.

### D. Validateur FR (SIRET, clé TVA, IBAN)

Besoin : « ce numéro est-il bien formé / clé correcte » avant d’écrire un papier.
100 % local, 0 fetch (on ne parle pas à l’INSEE).
Saturé / trop cheap (0,001 $). Faible cash.

### E. Dataset généré une fois

On utilise le quota Grok **ce soir** pour produire un JSON (NAF, jours fériés, gabarits). Ensuite on sert le fichier, pay-per-query.
Pas de scrape client. WTP faible sauf gabarit vraiment unique.

## Hors piste (rappel)

- Amorce (jeunes / Tinder) — mis de côté par le fondateur.
- x402 RPC / convertisseurs — spam Bazaar, 0 demande réelle.
- Farm de wallets / 402 caché — interdit.
- WhatsApp warm — personne à qui écrire.

## Critère pour la suite

Choisir une idée où **1 appel payant ne déclenche pas un fetch vers le web public**, sauf si l’agent fournit lui-même le document.

Marché A–D : [`MARKET.md`](MARKET.md).  
Boucle : [`LOOP.md`](LOOP.md). P skippé. Q parkée. Agensi : [`BP-agensi.md`](BP-agensi.md) (pas P). Boucles 2–3 : **aucun survivant 11:03**. x402 médiane seller **0 $** (6 sept). Framer = 0 % + publish immédiat, métier design saturé.
