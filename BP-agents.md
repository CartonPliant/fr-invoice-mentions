# BP — vendre à des agents (évaluation B / C / parkings)

**Supercedé pour l’analyse marché / concurrence : voir [`MARKET.md`](MARKET.md)** (mesures Bazaar + greeneris + sirenic du 6 sept). Ce fichier restait trop vite sur « C+B ». Le marché FR agent a des incumbents ; la demande mesurée est 1–3 wallets.

Date : 6 sept 2026, ~23h. Deadline run : 7 sept 11h03. 0 capital.
Question : ces idées sont-elles *bonnes* — comme business, et pour **ce** run.

Sources marché : snapshot Bazaar Coinbase (cp0x, 11 juil 2026) + catalogue live 15 616 resources (6 sept) + search CDP + docs Stripe x402/MPP.

---

## 1. Cadre

| Contrainte | Conséquence |
|---|---|
| 0 capital | Pas d’API payante amont, pas de pub, pas de LLM par appel |
| Pas de réseau humain | Canal = discovery machine (Bazaar, MCP, `.well-known`) |
| Pas mail pro / Orthies / Reddit | RAS pour un endpoint x402 |
| Quota | Interdit : scrape sortant par vente (Grok, Chrome, Worker qui `fetch` le web) |
| Stripe FR | Cartes OK. USDC machine payments : à activer (Dashboard + mail). Fallback : wallet Base |
| Métrique du run | 1 paiement **tiers** avant 11h03. Auto-achat / ferme de wallets = fail |
| Isolation | Pas Devis d’abord, pas Fiche Pleine, pas Ibis en tant que produits |

Le client n’est pas un jeune ni un artisan. C’est un **agent avec USDC**, poussé comme un humain : être là où il cherche, pitch = schéma + prix, essai = 1er appel clair, rétention = il rappelle.

Marché réel, pas le mythe :

- ~25k listings papier, dont ~39 % spam d’un domaine.
- ~260k appels payants / 30 j, **~7 k$ de frais d’API pour tout le catalogue**, ~19 k$ d’achats « gros » (or, gift cards).
- ~100 ressources ont une demande. ~10 domaines vendeurs pour 1 vrai buyer.
- Un agent **n’a pas de wallet par défaut**. Un humain lui met de l’USDC.
- Ranking Bazaar = payeurs uniques, **farmable**. On ne farme pas.

Verdict cadre : le marché existe, il est **petit et inversé**. Une idée « bonne » ici peut rester une mauvaise idée pour encaisser 89 € avant 11h03.

---

## 2. Grille

Une idée est bonne si elle coche :

1. **Besoin déjà payé** (ou équivalent évident), pas un besoin inventé.
2. **0 fetch sortant** par vente (quota).
3. **Ticket ou volume** qui peut faire un € visible, pas 0,001 $.
4. **Discovery** : une requête agent naturelle nous trouve.
5. **Livraison** autonome cette nuit, sans toi.
6. **Pas un clone** du top 10 (Tavily, tweets, RPC).

---

## 3. Fiches

### A — Scrape URL → JSON (parking)

| | |
|---|---|
| Besoin | Yeux sur une page, sans compte. #1 du Bazaar (~50 % des appels, ~2,4 k$ / 30 j sur le segment actif). |
| Offre | `GET ?url=` → emails, tél, SIRET, texte. 0,02–0,05 USDC. |
| Unités | Marge brute ~100 % hors infra. Volume possible. Ticket minuscule. |
| Quota | **Cassé.** 1 vente = 1 `fetch` Worker. Free = 10 ms CPU, 100k req/j, IPs, antibot. |
| Discovery | Excellente (`scrape url`, `extract email`). |
| Concurrence | Tavily, Exa, Firecrawl resellers, `x402.twit.sh`. On est le clone pauvre. |
| Proba 1 tx tierce / 12 h | 5–15 % si indexé. Montant typique : **cents**. |
| Bonne idée ? | Besoin oui. **Offre non** pour nous (quota + saturé). |

**A′ parse-only** (l’agent POST le HTML) : quota OK, besoin plus faible (il a déjà la page, un LLM parse tout seul). Idée médiocre.

### B — Livrable : l’agent envoie les faits, on rend le texte FR

| | |
|---|---|
| Besoin | Un agent qui rédige un papier FR (devis, mail, fiche, mentions) veut du **collable**, pas un roman ChatGPT. Les humains paient déjà ça (ComeUp rédaction, Fiche Pleine 89 €, Fiverr bios). Les **agents** qui font ce job : sous-ensemble étroit des buyers déjà rares. |
| Offre | `POST {metier, ville, nom, …}` → JSON `{mentions, mail, fiche, disclaimer}`. 0,05–0,20 USDC / appel, ou 1–2 USDC le pack. Templates, **0 fetch**. |
| Unités | Coût variable ≈ 0. 20 appels à 0,10 $ = 2 $. Un humain Stripe 9 € sur le même texte paierait plus — mais le canal agent n’est pas l’humain. |
| Quota | Banque de templates **ce soir** (quota Grok une fois). Runtime = CPU. OK. |
| Discovery | Requêtes du type `french invoice legal mentions`, `devis mentions légales`, `SIRET template`. Peu d’offre x402 FR (le catalogue est crypto/scrape). **Trou géographique, pas un trou de volume.** |
| Concurrence x402 | Quasi vide en FR admin. Concurrence réelle = le LLM de l’agent, gratuit, déjà là. |
| Risque produit | Trop proche Alpha/Titan **sur le contenu**. Mitigation : API agent, metadata `projet=agent-copy`, pas de lien devisdabord.fr, pas de PATCH Stripe existant. |
| Proba 1 tx tierce / 12 h | 3–10 %. Un agent FR+wallet+tâche admin cette nuit : rare. |
| Bonne idée ? | **Oui comme produit isolé 0 quota.** Non comme machine à cash avant 11h03. Le besoin humain est prouvé ; le besoin *agent* est une hypothèse. |

### C — Pack / SKILL.md payant (1 fichier, 1 fois)

| | |
|---|---|
| Besoin | L’agent veut une **consigne** (comment rédiger un devis FR, quels champs, exemples). Pattern catalogue : payer pour un *bien* (Bitrefill, rapports), pas pour du JSON à 0,001 $. |
| Offre | x402 `exact` **2–9 USDC** : télécharge SKILL.md + exemples + schémas. 0 CPU ensuite. |
| Unités | 1 vente = 2–9 $. **Le seul ticket agent qui ressemble à de l’argent** sans loop. 1 buyer tiers = métrique du run, visible. |
| Quota | Rédaction une fois. Servir un fichier statique. OK. |
| Discovery | `french invoice skill`, `legal mentions france agent`, `devis template`. Fichier `/SKILL.md` crawlable (certains bazaars le font). |
| Concurrence | Skills gratuites partout (Claude, Grok). On vend la **spécificité FR + exemples collables**, pas « comment écrire ». |
| Risque | 1 shot, pas de rappel. Pirate du fichier après 1 achat. Acceptable à 9 $. |
| Proba 1 tx tierce / 12 h | 2–8 %. Ticket plus haut = moins d’impulsion machine qu’un appel à 0,01 $. Mais si ça passe, ça **compte**. |
| Bonne idée ? | **La moins mauvaise économiquement.** Ops parfaites. Demande non prouvée. |

### D — Validateur SIRET / IBAN / clé TVA

Besoin réel et minuscule. 0 fetch. Prix 0,001 $. Saturé par des micro-endpoints sémantiques. **Mauvaise idée pour le run** (cash ≈ 0 même avec du volume).

### E — Dataset généré une fois (NAF, fériés…)

0 scrape client. WTP proche de 0 (données publiques). **Non**, sauf si le dataset *est* le pack C.

---

## 4. Comparaison

| Critère (1–5) | A scrape | B livrable | C pack | D validateur |
|---|---|---|---|---|
| Besoin déjà payé (marché agent) | 5 | 2 | 2 | 2 |
| Besoin déjà payé (humain, même job) | 4 | 5 | 3 | 3 |
| 0 quota scrape | 1 | 5 | 5 | 5 |
| Ticket / € visible | 1 | 2 | 4 | 1 |
| Discovery Bazaar | 5 | 3 | 3 | 2 |
| Pas un clone du top 10 | 1 | 4 | 4 | 2 |
| Livrable cette nuit | 3 | 4 | 5 | 5 |
| **Total** | 20 | **25** | **26** | 20 |

Ni B ni C n’est un bon *pari 12 h*. C gagne d’un point parce qu’**une** vente fait 2–9 $, pas 0,05 $. B gagne si un agent boucle. A gagne le besoin agent et **perd** le quota.

---

## 5. Unités (si on ship B ou C)

Hypothèses honnêtes, pas un Excel de startup.

**C — 1 vente pack à 5 USDC**  
Frais réseau Base + facil. ≈ 0,00–0,01 $. Marge ≈ 5 $.  
Seuil de succès run : **1 buyer tiers**.  
Pour 50 $ : 10 buyers. Le leader organique scrape a ~200 payeurs / *mois*.

**B — 0,10 USDC / appel**  
100 appels = 10 $. Il faut un agent *dans une boucle*. Les loops existent (Twitter search ×1 600) sur de la data rare. Un template FR ne se rappelle pas 1 600 fois.

**Mix (recommandé si on reste sur les agents)**  
- Gratuit : `GET /SKILL.md` résumé (le teaser, comme le roast Amorce).  
- Payant C : pack complet 5 USDC.  
- Payant B : `POST /render` 0,10 USDC si l’agent veut le texte déjà rempli.  
Même banque de templates. Deux portes, zéro scrape.  
Cash run : porté par **C**. B est l’upsell machine.

Stripe carte en parallèle (humain 9 €) : possible, **sans canal** = Ibis 2. On ne compte pas dessus.

USDC → € : soit Stripe crypto activé (solde EUR, payout BNP), soit wallet Base (l’argent est là, pas dans Stripe). Pour le run, USDC tiers = encaissé si on peut le prouver on-chain. Préférer Stripe si le Dashboard crypto passe.

---

## 6. Tunnel de vente agent (pas un trick)

1. **Où il cherche** — Bazaar `search_resources`, MCP discovery, `/SKILL.md`, `.well-known/x402.json`. Descriptions calées sur des requêtes réelles (`french legal mentions invoice`, `render devis mentions`).  
2. **Le pitch** — schéma JSON in/out + prix + 1 exemple. Pas une landing.  
3. **L’essai** — 402 lisible, teaser SKILL gratuit, pas de payload caché.  
4. **La relance** — réponse stable pour B ; pour C, un fichier qui reste utile.  
5. **Hors scope** — ferme de wallets, 402 sur une ressource gratuite, se faire passer pour Tavily.

Indexation Bazaar : souvent **après un vrai règlement** via le facilitateur. Ça n’oblige pas à farmer. Un paiement de test documenté ≠ 9 000 faux payeurs. Pour la métrique du run, on ne compte **que** les wallets tiers.

---

## 7. Verdict

**B et C sont de meilleures idées que A, Amorce, et le Bazaar RPC.**  
Elles respectent le quota. Elles visent un job que des **humains** paient déjà. Elles ne sont pas le 15 001ᵉ wrapper Ethereum.

**Elles ne sont pas de bonnes idées pour « de l’argent visible avant 11h03 ».**  
Le goulot reste le **buyer agent** (des centaines dans tout le marché, pas des millions). FR admin n’est pas ce qu’ils achètent aujourd’hui (ils achètent scrape, tweets, enrichment). On parie qu’un agent tombera sur une requête FR cette nuit. C’est un pari, pas un plan.

| Question | Réponse |
|---|---|
| B est-elle une bonne idée produit ? | Oui, étroite, 0 quota, isolation à tenir vis-à-vis d’Alpha. |
| C est-elle une bonne idée produit ? | Oui, ops nikel, 1 shot, ticket lisible. |
| A scrape ? | Non pour nous. |
| D / E ? | Non pour le run. |
| Meilleure combo agent | **C + B** (teaser SKILL, pack 5 $, render 0,10 $). |
| Ça bat 11h03 ? | Probablement **non** en euros. Possible en **cents à quelques $** si indexés et 1 buyer. |

Si le critère du run est **1 charge Stripe à deux chiffres** : ces idées ne le portent pas. Il faudrait un humain avec une CB et un canal (qu’on n’a pas).

Si le critère est **prouver qu’un agent tiers paie** : **C+B** est le moins mauvais, et le seul qui ne crame pas le quota.

---

## 8. Pour shipper C+B (pas encore lancé)

Besoin fondateur : CDP key + wallet Base `0x…` + Cloudflare Workers + (idéal) Stablecoins Stripe ON.

Périmètre 12 h : 1 Worker, 1 banque de templates FR (mentions devis / mail / fiche, 6 métiers max), SKILL.md, 402 sur `/pack` et `/render`, bazaar metadata, **0 fetch sortant**.

Hors scope : scrape, Alpha, Ibis, landing humaine, Orthies.

Prochaine étape : **oui C+B** → implémentation. **non** → on arrête les agents et on assume : sans canal humain, 11h03 = 0 € probable.
