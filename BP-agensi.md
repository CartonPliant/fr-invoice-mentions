# BP — Agensi (canal), pas un SKU collé

**Date :** lun. 7 sept 2026, ~00:20 CEST.  
**Deadline run :** 11:03 CEST **ce matin** (~11 h au moment des mesures).  
**Statut :** document de décision. **0 code, 0 compte créé, 0 listing.**  
**Ce fichier n’est pas** `BP-agents.md` (trop vite sur C+B) ni `LOOP.md` (Agensi y était encore le « ClawMart sans péage » — les chiffres live **contredisent** une partie de ça).

Sources **ouvertes ce soir**, pas le blog marketing Agensi :

| Source | Quoi |
|---|---|
| `agensi.io` homepage, `/skills`, fiches individuelles | catalogue, prix, installs, reviews |
| `sitemap-skills.xml` / `sitemap-creators.xml` (6 sept) | taille réelle indexée |
| `/terms` (maj 2 sept 2026), `/stripe-terms` (24 juin) | MoR, split, refunds, MCP, crédits |
| `/learn/how-to-sell-skills-on-agensi`, payouts, pricing, security | process créateur |
| `/docs/mcp-setup` | discovery agent |
| Stripe live Yanis | `acct_1U8FhdLatodRxAhW`, KYC `failed_keyed_identity`, **0 €** de charges |

Hypothèse tuée d’entrée : « on met Evidence before ship à 9 $ sur Agensi, comme P sur ClawMart ». **Le même job est déjà gratis sur Agensi**, 3 installs en 2 mois.

---

## 0. Verdict (lire avant le reste)

Agensi est un **vrai canal** : listing 0 €, Stripe Connect, MoR (TVA acheteur gérée), MCP dans Claude, 70 % créateur, min 5 $. Ce n’est **pas** un marché du calibre ClawMart (1 393 sold mesurés sur un listing).

Trois faits qui changent LOOP.md :

1. **Le blog Agensi ment ou est périmé.** « keyword-research 89 installs » → fiche live **7**. « gtm-engine 28 » → **2**. « 5 000+ skills / 6 000 users » : le sitemap a **~5 315 fiches skill**, le browse affiche **300 skills found**. Les 5 000 existent en pages ; la vitrine n’en merchandize que 300. Les 6 000 users : **non audités**.
2. **Le job « preuve avant done » est saturé en gratuit, vide en payant.** `verify-before-shipping` = **Free, 3 installs, 2 mois**. `codex-grade-coding` = Free, **180** installs. `shipready-production-release-auditor` = Free, **0** install, listé il y a 3 jours. Vendre ça 9 $ ici, c’est taxer un bien que le magasin donne déjà.
3. **L’horloge 11:03 est perdue.** Scan auto **puis revue humaine**. Guide créateur : *most clean submissions 24–48 h*. On ne encaisse pas ce matin via Agensi.

Donc : **canal utilisable après le sprint**, pas une machine à 11:03. Le BP ci-dessous dit *comment* on l’utiliserait si tu dis oui — et **quel job on ne fait pas**.

---

## 1. Cadre (inchangé)

| Contrainte | Conséquence ici |
|---|---|
| 0 capital | Listing Agensi 0 €, 0 €/mois. Pas de plan Plus, pas de boost payant. |
| Stripe Yanis | Connect **peut** créer un compte connecté distinct. KYC identité **déjà failed** sur le compte live → risque de blocage Connect. Zoneless USDC Solana = fallback ToS, pas Stripe. |
| Pas mail pro / Orthies / Reddit / WhatsApp | Agensi doit faire la découverte **toute seule** (browse + MCP + search). On ne « lance » pas. |
| 0 scrape sortant | Interdit : clone Elementor, cinematic 4K qui fetch l’URL cliente, keyword-research Google Ads. |
| Isolation | SKU **nouveau**. Pas Devis d’abord, pas Fiche Pleine, pas Ibis, pas Alpha. Metadata / nom / repo séparés. |
| Auto-achat / ferme | Interdit. 1 vente tierce = run *après* mise en ligne. |
| 293 B | Agensi = MoR. L’acheteur paie la TVA à Agensi. Yanis encaisse une **quote-part HT**, self-bill NL → EI FR. |

Métrique honnête **post-11:03** : 1 achat **payant tiers** (pas un install gratuit, pas un crédit Agensi offert à nous-mêmes).

---

## 2. Qu’est-ce qu’Agensi, concrètement

### 2.1 Entité

- **Agensi BV i.o.**, Pays-Bas. Fondée 2026, Samuel Rose (`/about`).
- Droit applicable : **Pays-Bas**, tribunaux Amsterdam. ODR UE pour consommateurs.
- Presse homepage (Business Insider, USA Today, AP, Yahoo) : **communiqués MarketersMedia / GetNews**, pas des articles éditoriaux. On n’en tire aucune preuve de GMV.

### 2.2 Produit plateforme

Agensi vend des **fichiers SKILL.md** (zip) à des **humains** qui les collent dans Claude / Cursor / Codex / OpenClaw / Grok / etc. L’agent n’a pas de CB. L’humain paie.

Deux rails d’achat (ToS 4 et 5) :

| Rail | Qui paie | Créateur reçoit | Quand |
|---|---|---|---|
| Achat one-shot site | CB Stripe, **USD** | 70 % du **net HT** | Payout Stripe standard (blog : 2–7 j ; ToS : schedule pays) |
| Crédits (site ou **MCP**) | Abo Starter 9 $/mois (50 crédits) / Pro 19 $ (120) ou top-up. 1 $ de skill = **5 crédits** | 70 % du net | **Agrégé mensuel** puis virement Connect (ToS 7.2) |

MCP `https://mcp.agensi.io/mcp` : recherche/preview **sans auth**. Install payant = clé API + solde crédits. L’agent découvre, **l’humain** a déjà mis de l’argent sur un abo. Phrase de test officielle : *« Find me a skill that chases unpaid invoices. »* — ils croient que « facture impayée » est une requête agent.

Prix min payant : **5,00 $** (ToS 6.4). Le guide pricing parle encore de 3–9 $ : le plancher ToS prime. Crédits = prix × 5.

Agensi est **merchant of record**. Prix affichés HT ; TVA/GST calculée au checkout selon le pays **acheteur**. La TVA **n’entre pas** dans le split 70/30.

### 2.3 Listing

1. Compte + **payout** (Stripe Connect **ou** Zoneless USDC Solana). Pas de skill payante sans l’un des deux. Si les deux : Stripe prime.
2. Zip + `SKILL.md` frontmatter.
3. Scan auto 8 points (structure, types de fichiers, commandes dangereuses, secrets, env harvesting, réseau, obfuscation, prompt injection). Score 100 → Fail < 60.
4. **Revue manuelle** qualité / policy. *Most clean : 24–48 h.*
5. Live : site + MCP (opt-out MCP possible, le split ne change pas).

Fingerprinting acheteur dans le frontmatter (anti-reupload). 30 jours de refund **any reason** sur l’achat skill (ToS 5.5) — plus large que `/stripe-terms` qui dit 14 j et « not guaranteed ». En cas de conflit, l’acheteur s’appuiera sur les 30 j. **Risque de téléchargement puis refund.**

---

## 3. Marché mesuré (7 sept) vs marketing

### 3.1 Taille

| Claim homepage / blog | Mesure live |
|---|---|
| 5 000+ skills | Browse `/skills` : **300 skills found**. Sitemap : **5 315** slugs `/skills/{id}` HTTP 200 (échantillon aléatoire : pages réelles, payantes et free). |
| 6 000+ users | **Non mesuré.** Aucun 10-K, aucun dashboard public. |
| 400+ creators | Sitemap creators : **418** URLs (dont index). Ordre de grandeur **cohérent**. |
| keyword-research 89 installs × 7 $ | Fiche : **7 installs**, 0 avis, listé « 5 months ago » |
| gtm-engine 28 × 6 $ | Fiche : **2 installs**, 0 avis, 5 months |
| Board Strategy 12 × 8,99 $ | Non re-ouverte ce soir ; on ne reprend pas le chiffre blog |
| 2 000+ skills (article GPT Store, juil) | Dépassé par le sitemap, **pas** par le browse 300 |

Lecture : il y a un **catalogue long (5 k pages SEO)** et une **vitrine (300)**. Un listing neuf atterrit dans les 5 k. Être dans les 300, c’est le merchandising (Skill of the Month, trending, votes). Un inconnu = page 12 du sitemap.

Les **catégories du menu sont cassées** ce soir : `code-quality-review` (11), `testing-debugging` (14), `legal-compliance` (1) → *« No skills found »* alors que `code-reviewer` existe sur All. La découverte par rayon Engineering **ne marche pas**. Reste : All / search / MCP.

### 3.2 Ce qui s’installe (vitrine All, 7 sept)

**Gratuit — volume :**

| Skill | Prix | Installs | Avis |
|---|---|---|---|
| code-reviewer | Free | **1 331** | 4 |
| humanize-writing | Free | 391 | 2 |
| git-commit-writer | Free | 352 | 2 |
| prompt-engineer | Free | 339 | 1 |
| readme-generator | Free | 270 | 0 |
| env-doctor | Free | 207 | 0 |
| seo-optimizer | Free | 185 | 2 |
| codex-grade-coding | Free | **180** | 0 |
| pr-description-writer | Free | 176 | 1 |

**Payant — vitrine, installs > 10 :**

| Skill | Prix | Installs | GMV max *si* 1 install = 1 achat | 70 % créateur |
|---|---|---|---|---|
| clone-site-to-elementor | 5 $ | **129** | 645 $ | 452 $ |
| temporal-reasoning-sleuth | 15 $ | **118** | 1 770 $ | 1 239 $ |
| cinematic-4k-landing-page | 5 $ | 71 | 355 $ | 249 $ |
| design-philosophy (Skill of the Month) | 9,99 $ | **36** | 360 $ | 252 $ |
| business-strategist | 19 $ | 24 | 456 $ | 319 $ |
| stock-breakout-picker | 10 $ | 17 | 170 $ | 119 $ |
| Cinematic Landing Page Builder | 19 $ | 16 | 304 $ | 213 $ |
| cinematic sites | 12 $ | 10 | 120 $ | 84 $ |
| keyword-research (leur poster child) | 7 $ | **7** | 49 $ | 34 $ |
| gtm-engine | 6 $ | **2** | 12 $ | 8 $ |

\*GMV max : on **ne sait pas** si « installs » = achats payants, téléchargements post-achat, ou compteurs qui mélangent crédits / reviews / updates. Pour le gratuit, 1 331 n’est clairement **pas** du GMV. Pour le payant, 129 est le **plafond** si chaque install est un achat 5 $ — pas un plancher.

Échantillon **aléatoire hors vitrine** (sitemap) : la majorité des fiches payantes **n’affichent même pas** un nombre d’installs (0 probable). Exemples 200 OK : `teacher-aide-persona` 59 $, `dating-strategist` 7,77 $, `seo-auditor-pro` 19 $, `kostenverdeling-vastgoed` 5 $ — installs « — ».

**Ce que ça dit :** l’argent Agensi, sur ce qu’on voit, est dans **3–4 listings** (Elementor, temporal, cinematic, design). Le reste du payant est une longue traîne à 0–7. Le gratuit capte **l’usage**. Le blog « 89 × 7 $ = 436 $ » **n’est pas** le marché.

### 3.3 Demandes / bounties

`/requests` : UI *« Loading requests… »* ce soir. **0 bounty vérifiée.** On ne construit pas un BP sur le Skill Request Board tant qu’il ne charge pas.

### 3.4 ClawMart vs Agensi (pour ne pas les fusionner)

| | ClawMart (6 sept) | Agensi (7 sept) |
|---|---|---|
| Listing créateur | **Payant** → skip | **0 €** |
| Preuve d’unités | Coding Loops **1 393 sold** à 9 $ | Meilleur payant vitrine **129** installs à 5 $ |
| Acheteur | Opérateur OpenClaw qui browse un shop | Dev / opérateur multi-agents + MCP Claude |
| Job #1 payant | Engineering loops / memory | **Clone Elementor** + landing cinematic + temporal |
| Job « preuve » | Pas vu en gratuit dominant | **Déjà free**, 3 installs |

ClawMart prouve que des humains paient 9 $ un markdown Engineering. **Agensi ne le prouve pas.** Transférer P tel quel = erreur de canal.

---

## 4. Client

Pas un artisan Pau. Pas un wallet x402. Pas un jeune Tinder (Amorce parkée).

**Persona qui paie sur Agensi (inféré des listings qui ont des installs payants) :**

- Humain, anglophone (catalogue EN ; un skill NL `kostenverdeling-vastgoed` existe, 0 install visible).
- A déjà Claude / Cursor / un agent. Cherche un **workflow collé**, pas une API.
- Impulse 5–15 $ si le titre est un livrable (landing, clone WP, « world class designer »).
- Ne paie **pas** (ici) pour « sois un senior et vérifie tes tests » : il prend le gratuit, ou rien.

**Persona MCP :** l’abo 9–19 $/mois est le budget. L’agent cherche en langage naturel. 1 skill 9 $ = 45 crédits, presque tout le mois Starter (50). Un skill cher **tue** l’abo Starter. Prix 5 $ = 25 crédits = plus « MCP-friendly ».

Ce n’est **pas** le TPE qui googled « facture électronique » cette semaine. Ce TPE n’est pas sur Agensi.

---

## 5. Unités et argent (Yanis)

### 5.1 Split

ToS 6.4 / stripe-terms : **70 % créateur / 30 % plateforme, all-in** (processing inclus). Pas de 0,50 $ extra. Devise catalogue : **USD**.

Exemple **9,00 $** HT catalogue, acheteur FR :

| | |
|---|---|
| Prix catalogue | 9,00 $ |
| TVA FR 20 % (MoR, à l’acheteur) | +1,80 $ → il paie **10,80 $** |
| Base split | 9,00 $ (TVA hors split) |
| Agensi | 2,70 $ |
| Yanis | **6,30 $** |

Stripe convertit USD → EUR sur le Connect. Spread / FX : à la charge du payout, pas chiffré ici.

**5,00 $** (plancher) → Yanis **3,50 $**.  
**15,00 $** → **10,50 $**.

Refund 30 j : le 70 % revient en négatif sur le Connect. Chargeback : ToS + Stripe, compte acheteur suspendable, nous on subit le reverse.

### 5.2 Payout

- Achat direct site → Connect, calendrier Stripe **pays**. FR : souvent **hebdo**, 1er payout parfois retenu **7 j+** sur compte Connect **neuf**.
- Install via crédits/MCP → **mensuel** (ToS).
- Blog payouts « 2–7 business days » = **direct**, pas crédits.
- Zoneless : 72 h + runs intra-day, USDC **Solana**. On n’en a pas besoin si Connect marche. Wallet farms interdites : un wallet payout légitime ≠ ferme.

**Le dashboard Stripe `acct_1U8Fhd…` ne verra pas forcément la charge.** Connect Express = souvent un compte connecté **sous la plateforme Agensi**. « 0 charges » chez nous peut rester 0 alors qu’Agensi a encaissé. L’argent arrive en **payout bank**, pas en PaymentIntent sur le compte live actuel. Si l’objectif du run est *une charge sur ce compte-là*, Agensi **rate** l’objectif même après une vente.

### 5.3 KYC — risque opérationnel n°1

Compte live : identité **`failed_keyed_identity`**. Connect demandera une vérif (pièce, parfois selfie). Si Agensi OAuth le compte existant : le fail peut **bloquer** les payouts. Si Express neuf : KYC à refaire, délai. **Sans payout enabled, ToS 6.1 : pas de skill payante live.**

Ça, c’est avant la revue 24–48 h.

### 5.4 Seuil « ça vaut le coup »

| | |
|---|---|
| 1 vente 9 $ | 6,30 $ — visible, pas un run « 89 € » |
| 5 ventes | ~31,50 $ |
| 36 ventes (niveau Skill of the Month, 4 mois d’âge) | ~227 $ |
| 129 ventes (clone Elementor, 4 mois) | ~452 $ à 5 $ |

Un listing **neuf, 0 avis, 0 réseau**, rayon Engineering où le payant n’existe presque pas : **0–2 ventes / 30 j** est l’ordre de grandeur honnête. 0 est le mode.

---

## 6. Concurrence interne (le rayon où on allait se mettre)

Job P / « Evidence before ship » : l’agent n’a pas le droit d’écrire done/fixed sans commande + stdout.

**Déjà sur Agensi :**

| Listing | Prix | Installs | Âge |
|---|---|---|---|
| **verify-before-shipping** | **Free** | **3** | 2 mois. Wrapper `proof.py`, pytest/ruff, « Stop guessing ». **C’est P.** |
| **codex-grade-coding** | Free | **180** | 4 mois. Classification de tâche + verification ladder + « prove the fix ». |
| **shipready-production-release-auditor** | Free | **0** | 3 jours. Verdict SHIP / DO NOT SHIP. |
| **evidence-readiness-starter** | Free | (non affiché) | sitemap, 200 OK |
| **construction-change-evidence-packet** | 6,99 $ | (non affiché) | autre métier (chantier) |
| code-reviewer | Free | 1 331 | review, pas la preuve d’exécution |

OSS hors Agensi (même job) : skill *verification-before-completion* (Superpowers), Karpathy CLAUDE.md règle 4 (explicit verification, 101 k stars — article Agensi eux-mêmes), Legal Docs Fr n’est pas le sujet.

**Conclusion concurrence :** sur Agensi, « preuve » = **commodité gratuite**. 3 installs en 2 mois sur le clone exact de P = **pas de WTP**. ClawMart n’est pas un argument ici.

---

## 7. Concurrence externe (si on liste quand même autre chose)

| Endroit | Listing | $ | Rapport |
|---|---|---|---|
| ClawMart | payant | 1 393 sold voisin | Skip capital |
| ClawHub | gratuit | **pas de $** | Distribution only |
| skills.sh / LobeHub | gratuit | 0 | Bruit OSS |
| KissMySkills | soumission | 35 % net, payout 35 j | Tue |
| Paperclip | wallet | GMV 0 public, org lock | Tue |
| SkillShop | GitHub App | catalogue vide | Tue |
| Polar / Gumroad | 0 €/mois | 0 découverte | Checkout, pas canal |
| ComeUp | 0 € | gig, parkée | Autre forme |

Agensi gagne sur : MoR + MCP Claude + scan. Agensi perd sur : densité 5 k, vitrine 300, payant Engineering = 0 preuve.

---

## 8. Trois approches (le SKU n’est pas décidé)

On ne colle pas « Evidence 9 $ » parce que le canal s’appelle Agensi. Trois façons d’utiliser le canal, avec ce qu’on mesure.

### Approche A — Ne pas faire d’Agensi le canal cash

Agensi = éventuellement un **miroir gratuit** plus tard, Polar/Gumroad = encaissement sur **notre** Stripe si on veut une charge `acct_1U8Fhd`. Ou on lâche le sprint (H3).

- Pour : les chiffres live. Horloge. KYC. Job P déjà free.
- Contre : on n’utilise pas le seul listing 0 € avec MoR+MCP.

**C’est l’approche que les chiffres recommandent pour 11:03 et pour P.**

### Approche B — Skill **payante** dans un rayon qui *vend* déjà, 0 scrape

Les 4 listings payants qui ont des installs : Elementor clone, temporal reasoning, cinematic landing, design philosophy.

| Candidat | Pourquoi ça vend (hyp.) | Pourquoi nous | Verdict |
|---|---|---|---|
| Clone site → Elementor | 129 installs, 5 $ | **Fetch URL + screenshots + WP.** Quota + ToS sites. | **Tue** (scrape) |
| Cinematic / 4K landing | 16–71 installs | Image gen payant ou quota Grok ; 3 clones déjà | **Tue** (quota + saturé) |
| Design philosophy | 36 installs, 9,99 $, Skill of the Month, 3 avis | On a de la matière design ; **Aman Garg occupe la une** ; différenciation faible | Possible **seulement** si on a un angle **étroit** (pas « world class designer ») |
| Temporal / knowledge schema | 118 + 5–16 installs à 10–15 $ | Markdown pur, 0 fetch. Déjà 2–3 listings voisins | Possible, **sans moat** |

Un angle design **étroit** qui n’est pas un clone Aman : par ex. *« sites EI / TPE FR qui n’ont pas l’air d’un thème Shopify US »* — audience Agensi = EN, WTP FR **non mesurée**. Risque : on refait Ibis (outil consultant, 0 acheteur).

### Approche C — Skill **métier FR** pour opérateurs d’agents qui facturent (trou d’offre, trou de demande ?)

Catégorie Legal & Compliance : **1** au compteur, **0** dans le filtre (cassé). MCP officialise la query « unpaid invoices ». Yanis = EI FR, e-facture 1er sept, mentions L441-9.

Offre type (pas figée) : skill EN+FR *« French invoice / e-invoicing 2026 for agents »* — checklists réception PDP/Chorus, mentions 293 B, **sans** appeler l’INSEE (templates + règles, 0 fetch). 5–9 $.

- Pour : trou d’offre sur la vitrine ; compétence réelle ; 0 scrape ; isolé d’Alpha.
- Contre : acheteur Agensi = dev EN, pas TPE FR. Legal Docs Fr **gratis** ailleurs. greeneris fait la **vérif** entreprise côté agent x402. Demande Agensi **= 0 mesure**. Même forme que B/O tués dans MARKET.md, **autre canal**.

Preuve qui **tue** C : 0 achat 30 j après live.  
Preuve qui **garde** : ≥1 achat tiers, pas un refund 30 j.

### Recommandation

1. **Pour 11:03 :** A (pas Agensi cash). L’horloge et le KYC suffisent.
2. **Si tu veux quand même le canal Agensi *après* le sprint :** **pas P**. Choisir **C** (métier FR, trou) **ou** un design *étroit* en B — et écrire le SKILL seulement après ce choix.
3. **Free-first** (leur guide : 50 installs gratuits puis payant) : sur un job déjà free à 1 331 installs, on n’existe pas. Un free FR invoice skill peut servir de **fumée** ; ça ne paie pas.

Je ne rédige le zip **qu’après** A, B étroit, ou C.

---

## 9. Acquisition (sans Orthies, sans mail pro, sans Reddit)

Ce que Agensi dit eux-mêmes : *marketplace drives discovery, but external traffic helps* — X, GitHub, blog. **X = Orthies interdit.** Mail pro interdit. Reddit interdit.

Leviers **autorisés** et **gratuits** :

| Leviers | Effet probable |
|---|---|
| Fiche soignée (titre = job, pas la techno) | Nécessaire, pas suffisant dans 5 k |
| Tags + MCP on | L’agent peut tomber dessus si la query match (*unpaid invoices* pour C) |
| Skill of the Month / votes | On n’y a pas accès à J0 |
| GitHub CartonPliant README | Faible, autorisé |
| Compte PH / DEV.to | Pas Orthies ; **pas fait** ; PH lundi 09:01 = 2 h, déjà tué comme produit |
| Cross-list ClawHub / skills.sh **gratuit** | Découverte, 0 $ |

On **n’achète** pas de featured. On **ne** farm pas les avis (ToS + ClawMart déjà tranché).

Faiblesse structurelle : 5 k fiches, vitrine 300, catégories Engineering cassées. Un listing neuf **sans** réseau = long tail.

---

## 10. Ops, qualité, scan

Pour passer auto+humain (checklist créateur Agensi + `/security`) :

- Zip léger, `SKILL.md` + 1–3 fichiers texte. **Pas** de binaire, pas de `.exe`, pas de secrets.
- Frontmatter `name` + `description` **trigger** (quand l’activer).
- 0 URL exfil, 0 `curl | sh`, 0 lecture d’env Stripe.
- `proof.py` / scripts : Python stdlib only si on en met — le scan n’aime pas l’obscur.
- 1 exemple d’output collé dans la fiche (ils merchandizent ça).
- Tester **dans un agent** avant submit (leur guide).
- Description EN : le store est EN. Un skill FR-only se noie.

Délai : **24–48 h** après submit **et** payout enabled. Compte + KYC Connect **avant**.

Maintenance : updates gratuites pour l’acheteur (ToS 5.3). Un skill « e-facture 2026 » **pourrit** si on ne le touche plus (dates DGFiP). Coût : veille, pas du scrape.

---

## 11. Juridique / fiscal EI FR

- Acheteur : contrat avec **Agensi**, pas avec Yanis. Rétractation 14 j UE **levée** s’il consent à l’accès immédiat (stripe-terms, art. 16(m) dir. 2011/83).
- Yanis : **self-billing**. Agensi émet les factures **au nom de** Yanis pour la quote-part. Il ne refacture pas Agensi pour les mêmes montants. Dashboard = factures + relevé mensuel.
- 293 B : pas de TVA collectée par Yanis sur cette quote-part. Agensi a déjà collecté la TVA **acheteur**. Si Yanis était assujetti TVA, ToS 7.5 dit qu’il gère la TVA **sur sa quote-part** — cas 293 B : en principe non.
- Revenu BNC à déclarer (2035 / micro). Agensi **ne retient pas** l’impôt.
- Mentions : SIRET 933 984 056 00012 sur le profil créateur (ils demandent legal name, country, tax id).
- Isolation : le skill n’est pas un produit Devis d’abord. CGV Agensi, pas les nôtres, pour l’acheteur.
- Droit NL pour le store. Litige créateur ↔ plateforme : Amsterdam.

Ce n’est pas un avis d’expert-comptable. C’est ce que **leurs** ToS disent + le régime EI déjà en place.

---

## 12. Risques

| Risque | Gravité | Traitement |
|---|---|---|
| Revue 24–48 h → miss 11:03 | Certain | Accepté. Agensi ≠ sprint. |
| KYC Connect bloqué (`failed_keyed_identity`) | Haute | Toi : pièce d’identité **avant** de compter sur un listing payant. Zoneless = plan B, USDC Solana. |
| 0 vente 30 j | Haute / probable | Seuil kill. Pas d’acharnement. |
| Refund 30 j after download | Moyenne | Fingerprint ; on ne vend pas du vent ; copy honnête. |
| Installs ≠ achats | Moyenne | On ne pilote pas au GMV fantôme. |
| Payout ≠ charge `acct_1U8Fhd` | Haute si métrique = ce dashboard | Changer la métrique **ou** ne pas utiliser Agensi. |
| Catégories cassées | Moyenne | MCP + search, pas le rayon. |
| Skill P déjà free | **Décision** | On ne le liste pas en payant. |
| Qualité / reject humain | Moyenne | Checklist §10. |
| 5 k pages, 0 trafic | Haute | Inhérent. |
| FX USD | Basse | Accepté. |
| Contenu trop proche Alpha | Haute si C mal isolé | Templates **agent**, pas devisdabord.fr, pas payment link Titan. |
| Crédits mensuels vs cash | Basse | Mix imprévisible. |

---

## 13. Ce qu’on ne sait toujours pas

- GMV réel plateforme (0 10-K).
- Combien des 5 315 fiches sont **payantes avec ≥1 achat**.
- Si « installs » payant = paid.
- File d’attente réelle de la revue (24–48 h = claim blog).
- Si Connect FR + EI + identité failed **passe** en 24 h.
- Volume MCP vs web (split crédits vs direct).
- Skill Request Board (UI morte ce soir).
- Combien d’acheteurs Agensi sont en France / ont un problème e-facture.
- Payout delay **premier** virement Connect neuf FR.

Sans ça, **promettre 1 vente** est de la fanfic. On peut seulement dire : le format se vend *parfois* à 5–15 $, *surtout* design/WP/temporal, *pas* la preuve Engineering.

---

## 14. Go / no-go

**No-go 11:03 Agensi.** Horloge + KYC + revue.

**No-go SKU « Evidence before ship » 9 $ sur Agensi.** Concurrent interne free, 3 installs.

**Go canal Agensi (après sprint)** seulement si :

1. Tu assumes **0 € ce matin**.
2. Tu débloques **payout** (KYC Connect ou Zoneless).
3. Tu choisis **B étroit** ou **C**, pas P.
4. Kill : 0 achat tiers **30 j** après *live* (pas après submit).
5. Métrique cash = **payout / dashboard créateur Agensi**, pas les charges du compte live actuel — sauf si Connect atterrit vraiment dessus (à vérifier à l’onboarding).

**Go A (pas Agensi)** si tu veux encore viser une charge sur `acct_1U8Fhd` avant midi : ce n’est pas ce canal.

---

## 15. Qui fait quoi (si go B ou C, plus tard)

**Toi (humain, 0 capital) :**

1. Compte Agensi (e-mail **pas** campagne Gmail pro ; un login vendeur).
2. Stripe Connect **ou** Zoneless. Pièce d’identité. Vérifier si c’est le compte `acct_1U8Fhd` ou un Express neuf.
3. Legal name / SIRET / pays dans le profil (self-bill).
4. Oui écrit sur **B étroit** ou **C** (une phrase).

**Moi (après le oui) :**

1. SKILL.md + zip + listing EN (titre = job).
2. Exemple d’output, limitations honnêtes, 0 fetch.
3. Pack submit. Pas Orthies. Pas de farm d’avis.
4. Si reject scan : corriger. Si 0 vente 30 j : tuer, pas « itérer le slogan ».

**Hors scope :** Worker x402, Bazaar, ComeUp, PH, clone Elementor, cinematic 4K, keyword-research.

---

## 16. Scénarios 30 jours (pas 11 h)

| | Installs payants | Cash Yanis ~ | Lecture |
|---|---|---|---|
| Pessimiste (mode) | 0 | 0 | Catalogue 5 k. On tue. |
| Médian listing neuf hors une | 0–1 | 0–6 $ | Une vente impulse MCP. |
| Optimiste (on match une query MCP réelle, fiche dans les 300) | 3–10 | 20–70 $ | Pas ClawMart. |
| Skill of the Month (on n’y arrive pas J0) | 36 / 4 mois | ~250 $ | Aman Garg, pas nous. |

Aucun scénario ne sort 89 € avant 11:03.

---

## 17. Décision demandée (une)

Pas d’implémentation tant que ce n’est pas explicite.

1. **A** — Agensi n’est pas le canal cash. On arrête cette porte.
2. **B étroit** — skill payante design/UI *spécifique*, 0 scrape, après KYC. Tu précises l’angle ou tu me demandes d’en proposer **un** avec la même barre.
3. **C** — skill FR invoice / e-invoicing 2026 pour agents, 5–9 $, 0 fetch. Hypothèse de demande **faible**, kill 30 j.

P (Evidence 9 $) n’est **pas** dans la liste. Il est déjà free chez eux.

Fichiers liés : `LOOP.md` (Q parkée, boucle 2), `MARKET.md` (H3), `IDEAS.md`.
