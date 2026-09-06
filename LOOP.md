# Boucle d’idées hors A–D — même barre que MARKET.md

Date : 6–7 sept 2026. Barre : besoin mesuré, concurrents nommés, demande chiffrée, 0 scrape sortant, canal accessible sans carnet d’adresses, livrable cette nuit.

A–D : voir `MARKET.md`. Ici on tue F→O, on garde **une** idée qui passe la barre.

---

## Tués (mesures)

### F — Se faire embaucher (molty.cash / bounties x402)

- molty.cash « Available to Hire » : #1 = **14,85 $** de earnings cumulés (homepage, 6 sept).
- Bazaar `hire agent job bounty` : 1–6 payeurs, tickets 0,006–2 $. `gofrantic.com/v1/hire` 1p 5c à 2 $.
- **Tue.** Marché tip, pas un run. En plus ça demande un X (Orthies interdit).

### G — Produit « quelle PDP / facture électronique »

- Besoin humain **réel et daté** : économie.gouv.fr 6 sept 2026 — depuis le **1er sept**, toutes les entreprises doivent *recevoir* via une plateforme agréée. Tolérance jusqu’à fin 2026 (pas de sanction immédiate).
- Offre déjà saturée : 113–148 PA comparées (comparatif-facture-electronique.fr, comparateur-efacturation). **Tiime / Indy / Chorus Pro = gratuit.**
- Côté agent : sirenic `facturation-prep` 21 appels / **1 payeur** ; greeneris `invoice-ready` 1/1 ; `api.eucompliance.tools` Factur-X 1/1.
- On ne peut pas être une PA (agrément DGFiP).
- **Tue** comme produit 12 h. Le besoin existe ; le canal est Google, déjà pris ; le substitut est 0 €.

### H — Clone StableEnrich (wrapper Exa/Firecrawl/Apollo)

- x402scan 30 j : StableEnrich **~2,7 k$ / 100 k tx / 540 buyers**. Modèle qui *marche*.
- Coût amont : ces APIs sont payantes → **capital**.
- **Tue** (0 capital).

### I — Screenshot / browser session

- 8 endpoints Bazaar, 1–3 payeurs, 0,01–0,05 $.
- 1 vente = headless Chrome **chez nous** (quota, pire que le scrape page).
- **Tue.**

### J — WHOIS / DNS

- `dns.use.x402atlas.com/whois` : 8p 45c à 0,005 $. greeneris a déjà rdap/dns.
- **Tue** (commodity, cents).

### K — Rapport de recherche LLM

- Bazaar : 1–7 payeurs. `win.oneshotagent.com` person-research 3p **630c** (un loop).
- Chaque vente = **quota modèle**.
- **Tue.**

### L — PDF facture générique from JSON

- stackbill / relaystation : 1 payeur. Pas FR.
- **Tue.**

### M — PDF « How to hire an AI » à 29 $ (modèle Felix)

- Felix Craft : ~41 k$ sur ce PDF — **avec l’audience X de Nat Eliason**.
- Le marché OpenClaw est ensuite devenu un catalogue (ClawMart 2 000+ listings).
- Sans audience : Ibis 2.
- **Tue** en standalone (le *canal* ClawMart est une autre idée).

### N — Molty / X posting for hire

- Voir F. **Tue.**

### O — Mentions légales FR en x402 (ex-B/C)

- Déjà tué dans MARKET.md : 1–3 wallets, greeneris/sirenic sur la vérif, Legal Docs Fr gratuit sur le texte.
- **Tue.**

---

## Survivant : P — skill payante sur ClawMart (fichier, Stripe, inbound)

### 1. Marché (mesuré, homepage ClawMart 6 sept 2026)

| Signal | Chiffre | Source |
|---|---|---|
| Listings | 2 000+ | shopclawmart.com |
| « earned by creators » | 100 000 $+ | homepage (claim plateforme, pas un 10-K) |
| Newsletter | 4,8 k | homepage |
| Coding Agent Loops | **1 393 sold**, 9 $, 6 avis | listing homepage |
| Three-Tier Memory | **163 sold**, 9 $ | idem |
| X/Twitter Agent | **96 sold**, 9 $ | idem |
| Email Fortress | **68 sold**, 9 $ | idem |
| Autonomy Ladder | **62 sold**, 5 $ | idem |
| Nightly Self-Improvement | **60 sold**, 9 $ | idem |
| Agent Blueprint persona | **40 sold**, 89 $ | idem |
| Felix Craft (créateur) | **3 202 sales** | fiche créateur |
| Carson | 311 sales | fiche créateur |
| Cette semaine, plus d’installs | skills **gratuites** (Content Idea Generator, De-AI-ify) | merchandising homepage |

Ce n’est **pas** le Bazaar 1-payeur. Des humains paient 5–99 $ en Stripe pour des fichiers markdown qui rendent un agent OpenClaw/Claude/Cursor utilisable. Le #1 engineering a **quatre chiffres** d’unités.

### 2. Client

Opérateur d’agent (OpenClaw, Claude Code, Cursor). Anglophone. Déjà en train d’acheter des skills sur ce site. Pas un artisan Pau. Pas un wallet x402 farm.

### 3. Concurrent

| Listing | Prix | Sold | Job |
|---|---|---|---|
| Coding Agent Loops (Felix) | 9 $ | **1393** | boucles de code persistantes (tmux / Ralph) |
| Claude Code Mastery | 9 $ | 8 | « partner not generator » |
| Claw Score | 20 $ | 4 | audit d’archi |
| Prompt Engineering | 5 $ | 3 | prompts |
| Stripe Ops | ? | 0 avis | CLI Stripe |
| Payment Integration Patterns | ? | 0 avis | Stripe/PayPal/x402 patterns |
| Agent Revenue OS | 14 $ | 9 | « make agent earn » |
| Local Business Website Generator | 29 $ | 6 | sites locaux + outreach |
| De-AI-ify | **0 $** | most-installed semaine | enlever le ton IA |

On **ne** clone pas Coding Loops. On se met **à côté** : le pain documenté par ClawMart eux-mêmes (blogs *Fixing Agent Loops*, *Permission Denied*) — l’agent **affirme** que c’est vert sans coller la sortie de commande.

### 4. Offre (une, pas cinq)

**« Evidence before ship »** — skill Engineering, **9 $**, one-shot.

Règle unique : l’agent n’a pas le droit d’écrire « done / fixed / tests pass / shipped » sans coller la commande + le stdout. Worktree isolé optionnel. Fichiers : `SKILL.md` + 1 checklist + 3 contre-exemples.

- 0 fetch, 0 API payante, 0 quota scrape.
- Isolation : pas Alpha, pas Ibis, pas Titan.
- Paiement : **Stripe ClawMart** (l’acheteur paie sur leur checkout). Yanis encaisse via le payout créateur (à confirmer à l’inscription : Stripe).

### 5. Unités

- 1 vente = 9 $ − commission ClawMart (non publiée précisément ; hypothese 10–20 % type Felix/Paperclip → ~7–8 $).
- Seuil run : **1 vente tierce**.
- 1393 ventes sur le voisin = le rayon a des acheteurs. Un listing neuf n’en capte pas 1393 le lundi matin. Ordre de grandeur honnête : 0–3 ventes en 12 h si le titre est dans Engineering et le copy est précis.

### 6. Canal / « marketing agent » au sens vente

Pas du Bazaar sémantique. **Vitrine avec search + merchandising.** L’acheteur humain browse, paie, donne le fichier à son agent.

Pousser sans Orthies / mail pro / Reddit :

- Listing soigné (titre = douleur, pas la techno).
- API créateur ClawMart (ils le disent : l’agent peut publier).
- Pas de farm d’avis.

Faiblesse : 2 000 listings, Felix capte l’attention, le merchandising pousse le **gratuit** cette semaine. Un inconnu peut rester page 12.

### 7. Quota / 0 capital

Rédiger un markdown. Compte créateur ClawMart (e-mail — pas une campagne depuis le Gmail pro ; un compte vendeur). Pas de Worker, pas de CDP, pas de scrape.

### 8. Risques

| Risque | Traitement |
|---|---|
| 0 vente en 12 h (découverte) | Réel. Moins pire que x402 FR à 1 wallet. |
| Trop proche Coding Loops | Job différent (preuve vs persistance). Le dire dans le listing. |
| Gratuit De-AI-ify vole le « writing » | On n’est pas sur le writing. |
| Payout ≠ Stripe Yanis | Vérifier à l’inscription ; sinon c’est quand même de l’argent. |
| Claim « 100 k$ earned » plateforme | On s’appuie sur les **sold** des listings, pas sur ce claim. |

### 9. Pourquoi ça passe la barre (et A–O non)

- Demande **d’unités payantes** mesurée (1393, 163, 96…), pas 1 payeur Bazaar.
- Ticket 9 $ = visible.
- 0 scrape.
- Canal inbound, pas WhatsApp.
- Concurrents nommés, job distinct.

Ce n’est **pas** une machine à 89 € avant 11h03. C’est la première idée dont le marché **achète déjà le format** (skill 9 $) sur un site où on peut se lister ce soir.

---

## Runner-up (si ClawMart est non)

ComeUp : presta rédaction / « je te branche sur Tiime/Indy » 29–49 €. Acheteurs FR, e-facture de la semaine. **Pas mesuré en unités ce soir** (pas de « 1393 sold » public). Compte vendeur + 20 % commission. Moins propre que ClawMart sur la preuve.

---

## Pour shipper P

1. Compte **créateur ClawMart** (5 min, Stripe payout).
2. Oui sur le job **Evidence before ship** / veto pour un autre job Engineering avec autant de sold sur le rayon.
3. Je rédige le SKILL.md + listing, je publie, je ne touche pas Orthies.

Sans le compte créateur, l’idée est bonne sur le papier et **invendable**.

---

## P skippé (6 sept, soir)

Compte créateur ClawMart **payant** → capital. **Skip.**

---

## Contacter les agents « en direct » ?

Pas comme un humain (pas de DM, pas d’annuaire d’e-mails).

| Mode | C’est quoi | On peut ? |
|---|---|---|
| **Pull (ils viennent)** | Bazaar search, MCP registry (Smithery/Glama **listing gratuit**), `/.well-known/agent-card.json` (A2A), `llms.txt` | Oui, **ils** nous appellent |
| **Push (on leur écrit)** | AgentMail = boîte mail *d’un* agent. Il faut **connaître l’adresse**. Pas d’annuaire public exploitable. | Non, pas à l’échelle, et pas avec le Gmail pro |
| **A2A** | POST sur *leur* endpoint après avoir lu *leur* Agent Card | Seulement si on a l’URL. On n’a pas la liste |
| **X / Discord** | Comptes agents publics (Felix, etc.) | Orthies interdit ; pas d’autre X |

MCP : l’agent **installe** un serveur. Smithery Hobby = **gratuit** pour publier une URL ; **pas de payout** (on encaisse nous, x402/Stripe). Glama : lister un repo GitHub = gratuit. PulseMCP : soumissions **fermées** (pause ingestion).

Donc : on ne « contacte » pas. On se **met où leur outil de discovery cherche**. C’est le tunnel de vente machine, pas un cold call.

---

## Next : Q — ComeUp (inscription vendeur **gratuite**)

### Marché

- comeup.com/fr/become-seller : « Proposez **gratuitement** ». Commission **20 % HT** sur l’offre gratuite ; Plus à 12 €/mois = capital, on n’y touche pas.
- Acheteurs FR déjà là (rédaction, logo, site). Catégorie rédaction = historiquement la plus commandée (5euros, 2021 : 6k commandes / mois sur la cat. — chiffre vieux, le *fait* « les gens commandent de la rédac » tient).
- Cette semaine : obligation **réception** facture élec. (economie.gouv.fr 6 sept 2026). Les TPE cherchent « quoi faire ». Substituts **gratuits** : Tiime, Indy, Chorus. ComeUp vend du **fait pour toi**, pas un comparateur SEO.

### Concurrent ComeUp (pas re-compté listing par listing ce soir)

- Des centaines de gigs logo / site / rédac. Un vendeur **neuf** = 0 avis. Premier ordre possible, pas garanti en 12 h.
- Pas Devis d’abord (autre canal, autre SKU).

### Offre (une)

**« Textes de fiche Google + pied de facture EI, 29 €, 24 h »** — livré par moi dans le chat ComeUp (pas le Gmail pro). 0 scrape (sources : leur fiche publique + templates). TVA 293 B, SIRET Yanis.

Job : coller des textes. ComeUp a des acheteurs pour ça. Ticket 29 € − 20 % ≈ **23 €**. 1 commande = run.

### Canal

Inbound search ComeUp. Toi : compte vendeur **gratuit** (identité). Moi : fiche + livraison.

### Pourquoi pas A–P

Gratuit à l’entrée (contrairement ClawMart). Acheteur humain avec CB (contrairement Bazaar 1 wallet). 0 scrape. Pas de réseau WhatsApp.

### Risques

| Risque | |
|---|---|
| 0 commande 12 h (nouveau vendeur) | Réel. Mieux que x402 FR. |
| Modération ComeUp | Délai d’approbation fiche — peut manger la nuit. |
| Payout ≠ Stripe | ComeUp wallet puis virement. Argent quand même. |
| Trop proche Fiche Pleine | SKU ComeUp isolé, pas le payment link Titan. |

### Pour shipper Q

Compte ComeUp vendeur (gratuit) + go sur **29 € textes fiche + mentions**. Sans le compte, next encore.

---

## Q parkée (7 sept, ~00:08 CEST)

Pas tuée. Juste **pas le défaut**. Demande : reboucler **ailleurs**, et **innovant**. ComeUp reste un gig marketplace (même forme que Fiverr/Codeur). La barre A–D s’applique telle quelle.

Horloge : lun. 7 sept 2026 **00:08 CEST** → deadline **11:03 CEST** (~11 h). Product Hunt du lundi ouvre à **09:01 CEST** (12:01 AM PT) → overlap utile **2 h**.

---

## Boucle 2 — R→AM, hors ComeUp (mesuré 7 sept)

Barre identique : besoin chiffré, concurrent nommé, 0 scrape sortant, canal sans carnet, **livrable et vendable avant 11:03**, 0 capital.

### Tués

### R — On *est* l’agent A2A (inverser « contacter les agents »)

Deux annuaires, listing **gratuit**, live immédiat.

| Source | Mesure (7 sept 00:07 CEST) |
|---|---|
| `a2aregistry.org/api/stats` | **373** agents, 359 healthy, **118** new / 7 j, 2066 skills. Trending : selftest / orchestration / llm-client / crypto — **pas** FR legal |
| `a2a-registry.org` homepage | **216** agents, +29 / 7 j, 54 verified, **183 k** « recommendations served » |

Pattern qui *rank* : **OptionsAhoy Equity Planner** — 3562 suggestions, maths financières **déterministes**, API **keyless**. Pictomancer (image A2A) 1749 suggestions, **payant** (PulseMCP : paid, x402). Emboss (PDF fill) listé 31 août, **0** suggestion. Discover API `a2a-registry` = token obligatoire (on n’a pas fouillé FR en sémantique live).

Discovery ≠ encaissement. Le #1 du registry est **gratis**. FR legal déjà chez greeneris/sirenic (1–3 wallets, `MARKET.md`). Worker Free **10 ms CPU** : on ne clone ni Pictomancer ni Emboss.

**Tue** comme SKU cash 11:03. Utile plus tard comme *couche* de listing si on a déjà un endpoint qui encaisse.

### S — Cloudflare Pay Per Crawl / Monetization Gateway

Docs CF : payout Stripe Connect, **mensuel**, solde publisher pas visible. Check-in 2026 (somethinginc.com, 28 juil) : même un site mid-size illustratif à 500 k crawls/mois × 0,001 $ = 500 $ **avant** que la majorité des crawlers déclinent le 402. On n’a **pas** de zone avec du trafic crawler (devisdabord.fr interdit de pousser ; workers.dev ≠ zone publisher). Beta historique, chicken-egg.

**Tue.**

### T — npm Factur-X payant

`@stackforge-eu/factur-x` ~**50 706** downloads **gratis**. Un fork payant se bat contre ça.

**Tue.**

### U — Gumroad Discover (seul)

0 €/mois. Direct ~10 % + 0,50 $ ; Discover **30 %** flat (sources juil 2026). Sans audience = **Ibis 2** (payment link, 0 charge). Des gens vendent des skills Claude via articles DEV.to — canal = écrire en public, trop lent, et on n’a pas X/Reddit.

**Tue** en standalone. Reste un *checkout* si un autre canal amène l’humain.

### V — Telegram Stars / bot

Pas de groupes, spam. Interdit de facto (même classe que WhatsApp cold).

**Tue.**

### W — Product Hunt lundi 09:01 CEST

Launch **gratuit**. Journée PH = minuit–minuit PT. Aujourd’hui lundi = engagement **faible** vs mar–jeu. Conversion PH→payant citée **1–3 %** sur une *journée* complète, 500–1 500 visites « average » — et ça suppose un réseau de makers ( Orthies / mail pro = non ). Notre fenêtre jusqu’à 11:03 = **2 h**. Les front pages PH poussent le **gratuit**.

**Tue comme produit.** Loterie optionnelle, pas un survivant (voir plus bas).

### X — API liste PA/PDP cachée

Listes officielles **gratuites**. Comparateurs + greeneris/sirenic déjà là. 1 payeur Bazaar sur le voisin.

**Tue.**

### Y — Farcaster frames / Base mini-app

Compte + crypto UX + 0 audience. Même classe que molty/X.

**Tue.**

### Z — Stripe App Marketplace

Docs Stripe : review **4 business days** après submit. Listings **anglais only**. Distribution réelle (Dashboard des merchants) — **hors horloge**.

**Tue pour 11:03.** Parking J+4.

### AA — Agensi (skill payante, listing 0 €) — *clock kill*

Le substitut ClawMart **sans** compte créateur payant. **BP complet :** [`BP-agensi.md`](BP-agensi.md) (7 sept ~00:20). Les chiffres blog ≠ fiches live.

| Signal | Chiffre | Source (7 sept) |
|---|---|---|
| Listing | **0 €**, 0 €/mois | agensi.io creator guide |
| Split | **70 %** du net HT (MoR, TVA acheteur hors split) | ToS 6.4 / stripe-terms |
| Poster child blog | keyword-research « 89 installs » | article monetize — **périmé / faux** |
| Fiches live | keyword-research **7** ; gtm-engine **2** ; clone-elementor **129** × 5 $ ; design-philosophy **36** × 9,99 $ | fiches 7 sept |
| Catalogue | Browse **300** ; sitemap **~5 315** fiches 200 ; creators sitemap **418** | `/skills` + sitemaps |
| Job P déjà là | `verify-before-shipping` **Free, 3 installs, 2 mois** | fiche live |
| Review | scan auto 8 points **puis revue manuelle. Most clean : 24–48 h** | how-to-sell-skills-on-agensi |

Demande d’unités **réelle mais mince**, et **pas** sur le job Engineering « preuve ». 24–48 h → live après 11:03.

**Tue pour 11:03.** Post-sprint : voir BP (pas P).

### AB — OpenClawBundles

Homepage « by the numbers » : **0** bundles, **0** creators, **0** installs. Listings vitrine à 0 install. 1er publish = review humaine **< 24 h**. Marché vide.

**Tue.**

### AC — Remote OpenClaw marketplace

Claim : listing gratuit, 10 %, Stripe Connect, review **48 h**. Page marketplace = checkpoint Vercel (non vérifiable live). 48 h rate l’horloge de toute façon.

**Tue.**

### AD — KissMySkills créateur

Ils amènent le trafic. Créateur = **35 %** du net sur un skill 14,99 $ (~5 $). Payout **35 jours** après vente.

**Tue** (split + délai cash).

### AE — PromptBase

Listing 0 €, 20 % marketplace. Médiane listing **5,99 $** (échantillon 188, juil 2026). Prompts saturés ; une source payout Stripe = compte **≥ 30 jours**. Pas notre job.

**Tue.**

### AF — Notion Marketplace

Waitlist + revue Notion + Stripe. On a le MCP Notion — ça n’ouvre pas la waitlist. Hors horloge.

**Tue pour 11:03.**

### AG — Etsy fichier FR (mentions / facture / kit e-facture)

Search **réelle** : « gestion auto entrepreneur » **694** résultats ; « facture professionnel » **958**. Un template facture FR : **184 avis**, ~5–10 €. Canal humain, cette semaine (réception e-facture au 1er sept).

Tue quand même : (1) listing **0,20 $** = capital strict ; (2) boutique neuve 0 avis ; (3) saturé Excel/Canva ; (4) substituts **0 €** (Tiime/Indy/Chorus) — même raison que **G**. Fichier ≠ ComeUp, mais pas un trou.

**Tue** (capital + saturé + gratuit officiel).

### AH — SkillShop.sh

Permissionless : GitHub App + `SKILL.md` + wallet/PayPal. Live scrape 7 sept : catalogue **« NO SKILLS AVAILABLE »**, buyer app **« COMING SOON »**. Token $SKILLSHOP à ~0,0001 $ (Virtuals) — trop proche ferme/memecoin, même sans qu’on y touche.

**Tue** (marché vide + odeur token).

### AI — Paperclip Skills

80/20 USDC Base, x402, publish wallet. Homepage : **« Built for Paperclip organizations »** — écosystème fermé (paste URL au « CEO agent »). 0 GMV public. Un skill mis en avant est **gratis**.

**Tue** (demande non mesurée + lock-in org).

### AJ — Polar.sh checkout GitHub

Starter **0 €/mois**, 5 % + 50 ¢. Livraison fichier / repo privé. **Pas de vitrine** qui amène l’inconnu. Checkout, pas un canal.

**Tue** standalone.

### AK — Clone Pictomancer (compute image A2A)

Incumbent listé, payant, 1749 suggestions. Notre quota CPU Worker = non.

**Tue.**

### AL — Clone Emboss (PDF fill A2A)

Listé il y a 7 j, 0 suggestion. PDF ≠ 10 ms CPU.

**Tue.**

### AM — Clone OptionsAhoy : calculettes EI / URSSAF / L441-10 / TVA en A2A+x402

Le pattern A2A qui *rank* est le calculateur déterministe. Le leader est **gratis**. Bazaar `calculator tax invoice` sort **jpverify** (facture JP) + `agentstools.dev` tax US + stackbill PDF — **stats payeurs absentes** sur ce search (null), et le créneau FR est déjà greeneris. URSSAF a le simulateur officiel **0 €**.

**Tue** comme cash. (Magnétique free → skill payante = funnel trop long pour 11 h.)

---

## Matrice horloge (ce qui tue vraiment)

| Idée | Unités payantes mesurées | Listing 0 € | Live avant 11:03 | 0 scrape | Verdict 11:03 |
|---|---|---|---|---|---|
| R A2A hired | 0 $ (recs ≠ $) | oui | oui | oui si calculette | tue |
| S Pay Per Crawl | hypothèse, pas nous | compte CF | non (0 crawl) | n/a | tue |
| U Gumroad seul | 0 chez nous (Ibis) | oui | oui | oui | tue |
| W Product Hunt | trafic générique, pas le nôtre | oui | **2 h** | oui | loterie, pas survivant |
| Z Stripe App | marketplace réelle | oui | **+4 j** | oui | tue clock |
| AA Agensi | **129 × 5 $** max vitrine (Elementor) ; P déjà **free 3 inst.** | oui | **+24–48 h** | oui | tue clock |
| AB OpenClawBundles | **0** install | oui | review 24 h | oui | tue |
| AH SkillShop | catalogue vide | oui | oui | oui | tue |
| AG Etsy | 184 avis voisin | **0,20 $** | boutique ? | oui | tue capital |
| Q ComeUp | cat. rédac, pas nos unités | oui | modération fiche | oui | parkée |
| P ClawMart | **1393** sold | **non** (créateur payant) | skip | oui | skip |

---

## Survivant 11:03

**Aucun.** Même barre que A–D : dès qu’on exige *à la fois* des unités payantes *et* un listing gratuit *et* un go-live ce matin, l’ensemble est vide.

Ça renforce **H3** (`MARKET.md`) : pas de produit 0-budget défendable *pour ce sprint*. ClawMart a des sold (1393) mais listing payant. Agensi a un listing 0 € mais le job P y est **gratis** et le poster child « 89 installs » est **7** en live. Les canaux instantanés n’ont pas d’acheteurs mesurés pour nous.

---

## File (après 11:03, si on lâche le sprint)

**AA — Agensi comme canal, pas le SKU P.** Voir [`BP-agensi.md`](BP-agensi.md).

- 0 capital, 70 %, MoR, MCP — **vrai**. Revue 24–48 h, KYC Connect, catalogue 5 k / vitrine 300.
- P (`verify-before-shipping`) est **déjà free**, 3 installs. On ne le revend pas.
- Poster child 89 installs = **7** en live. L’argent vitrine est Elementor / cinematic / temporal, pas la preuve Engineering.

---

## Loterie (si tu *exiges* un euro avant 11:03)

**W + Polar/Gumroad** : skill 9 $ en checkout 0 €/mois, launch PH à 09:01, 2 h de fenêtre, lundi, 0 réseau. Espérance honnête : **0 vente**. Ce n’est pas un survivant. C’est pile ou face avec une pièce pipée. Je ne le pousse pas.

---

## Ce qui était innovant et vrai — et ne paie pas ce matin

1. **Inverser le contact** : on ne DM pas les agents ; on se liste où *leur* `discover` cherche (A2A, 183 k recs). Ça marche pour la *découverte*. Le #1 ne facture pas.
2. **Pay Per Crawl** : l’acheteur est le crawler. Sans archive déjà crawlée = 0.
3. **Calculette déterministe** (OptionsAhoy / jpverify) : le pattern x402/A2A « pays-spécifique + facture » existe. La France est **prise** (greeneris 96 endpoints) ; le leader A2A est free.
4. **Stripe Apps** : vrai canal merchants. Review 4 j.

Innover n’a pas créé d’acheteur avec CB avant 11 h.

---

## Pour avancer (toi, un go, pas du code)

Trois portes, une seule :

1. **File AA** — compte Agensi (gratuit) + Stripe Connect déjà live. J’écris le skill *après* ton oui. Live probable **8–9 sept**, pas 11:03.
2. **Loterie W** — PH 09:01 + Gumroad/Polar. J’écris skill + page PH *après* ton oui. Cash 11:03 = improbable.
3. **Reboucler encore** — d’accord, mais la barre ne bougera pas toute seule : il manque un canal inbound **gratuit + instantané + avec des sold**. ComeUp est toujours parkée si tu changes d’avis sur la forme gig.

0 implémentation tant que tu n’as pas choisi.

---

## Boucle 3 — AN→AV (7 sept ~00:30 CEST)

Demande : continuer à chercher. Hors ComeUp-par-défaut, hors P-sur-Agensi. Même barre. Horloge **~10 h 30**.

### Tués

### AN — Affiliation Indy / Tiime / Pennylane

Besoin humain **réel cette semaine** (réception e-facture 1er sept). Des sites comparateurs **affichent** déjà des liens d’affiliation Indy/Pennylane (freelance-solution.fr, comparateur-notes-de-frais.fr).

Tue : (1) Tiime **et** le palier réception Indy sont **0 €** → pas de commission sur l’inscription gratuite. (2) Pennylane « partenaires » = **ISV / cabinets**, pas un indie avec un lien. (3) Canal = SEO Google = **G** déjà tué. Sans trafic, 0 clic, 0 €.

**Tue.**

### AO — Cours Udemy « e-facture TPE 2026 »

Listing formateur **0 €**. Search Udemy existe. Review officielle **2 j ouvrés** (parfois 3–5). Minimum **30 min de vidéo** + 5 leçons + **vérif d’identité** formateur. Premium instructor pour le payant.

Tue : horloge (review + 24 h d’index search) ; prod vidéo ≠ markdown cette nuit ; saturé « auto-entrepreneur ».

**Tue.**

### AP — Leboncoin Services

30 M visites/mois, search locale Pau/Mourenx. Dépôt **particulier** gratuit hors auto/immo. **Pro + catégorie Services = dépôt payant (FIM)** → capital. Yanis = EI : lister en particulier = zone grise ToS. Forme = gig local = **Q ComeUp**.

**Tue** (capital pro / ToS / même forme que Q).

### AQ — n8n Markets / templates n8n

Claim : 2 000 workflows, 50 k visites/mois, listing 0 €, 10 %, Paddle, min payout **50 $** / hold 7 j. Leaderboard live : **aucun vendeur, aucun chiffre de sold** — copy marketing, même odeur qu’OpenClawBundles. Bibliothèque **officielle** n8n = templates **gratis** + affiliation Cloud 30 % (il faut envoyer des gens vers n8n Cloud). On n’a pas de workflow n8n de référence.

**Tue** (marché fantôme + official = free).

### AR — Framer Marketplace

Le plus **proche** d’un canal clock-compatible non encore vu : depuis 2026, **plus de revue humaine** (UX Collective, août) ; **0 %** de commission sur le template payant ; payout Stripe ; 3 000+ templates ; claim « 753 k$ versés aux creators en novembre ». Un créateur a vendu en **quelques heures** en 2023 ; en 2026 les vannes sont ouvertes = plus de bruit. Referrals : min **200 $** + 30 j (Felix Substack) → pas du cash 11:03.

Tue comme sprint : (1) métier **design SaaS/portfolio**, pas le nôtre ; (2) 2 700 clones dark-hero ; (3) un template EI/devis = **Ibis** (one-pager, 0 acheteur Framer pour ça) ; (4) trop proche visuellement d’Alpha si on fait « site TPE FR ».

**Tue pour 11:03.** Parking « Yanis devient vendeur de templates » = autre business.

### AS — Raycast Store

3 000+ extensions, **toutes gratuites**, licence **MIT**, PR GitHub, review. **Pas de $.**

**Tue.**

### AT — RapidAPI Hub

Listing 0 €, ~4 M devs claim, **25 %** de fee (maj nov 2025). Payout : mois M encaissé **début M+2** (sept → novembre). Il faut **héberger** l’API (Worker). Un validateur FR / Factur-X = **D/T** déjà tués (Luhn local, npm 50 k gratis, greeneris).

**Tue** (payout trop tard + API commodity).

### AU — x402 « utilitaire 0-fetch » (QR, timezone, JSON Schema)

Bazaar search 7 sept : timezone-convert **2p/3c**, QR **2p/3c** et **1p/3c**, json-schema-infer **1p/4c**. Commodity, cents, incumbents x402atlas/openverbs.

**Tue.**

### AV — x402 « le marché a changé, réessaie »

x402-list / claudevsite.uk, **recalculé 6 sept 2026 06:10 UTC**, 234 sellers curatés :

| | |
|---|---|
| Médiane 30 j | **0,00 $** |
| Exactement 0 $ | **73,5 %** |
| ≥ 10 $/mois | **2,1 %** |
| ≥ 1 000 $/mois | **0,0 %** |
| Top 10 | **97 %** du volume mesuré |

#1 curaté hors farm : `scvd.store` 771 $ / 13 buyers (observatoire x402 — pas nous). Onyx Bazaar : StableEnrich / twit.sh / Exa / Tavily / onesource — scrape, enrich, RPC, **capital amont** ou farm.

**Tue** la thèse « un Worker x402 quelconque encaisse ce matin ». Ça **ferme** R/AU et le reste x402 pour ce sprint.

---

## Matrice boucle 3

| Idée | Unités payantes | Listing 0 € | Live 11:03 | 0 scrape | Verdict |
|---|---|---|---|---|---|
| AN affiliation PA | 0 sans SEO | oui | n/a | oui | tue |
| AO Udemy | search réelle | oui | **+2–5 j** + 30 min vidéo | oui | tue |
| AP LBC Services | locale FR | particulier oui / **pro non** | oui | oui | tue / = Q |
| AQ n8n Markets | **0 sold public** | oui | ? | oui | tue |
| AR Framer | payouts plateforme claim | oui + **0 %** | **oui (plus de revue)** | oui | tue craft/foule |
| AS Raycast | 0 $ | oui | review PR | n/a | tue |
| AT RapidAPI | 4 M devs claim | oui | listing oui | si 0-fetch | tue payout M+2 |
| AU QR/tz/schema | **1–2 payeurs** | oui | oui | oui | tue |
| AV x402 générique | médiane **0 $** | oui | oui | variable | tue |

---

## Survivant 11:03 (boucle 3)

**Toujours aucun.**

Ce que la boucle 3 ajoute : même les canaux « innovants » restants cassent soit sur **l’horloge** (Udemy, RapidAPI), soit sur **le capital** (LBC pro), soit sur **l’absence de sold** (n8n Markets), soit sur **le métier** (Framer), soit sur **la médiane 0 $** (x402). Affiliation = G avec un lien.

H3 tient. Le trou n’est plus « on n’a pas d’idée » : c’est **inbound gratuit + instantané + avec des unités**, et ça n’existe pas dans le périmètre 0 capital / 0 réseau / 0 scrape.

---

## Pour avancer (inchangé, plus honnête)

1. **Lâcher 11:03** comme métrique, garder un canal **post-sprint** (Agensi **sans P**, ou Q ComeUp si tu acceptes la forme gig).
2. **Loterie PH 09:01** — toujours pas poussée.
3. **Reboucler** : possible, mais la contrainte manquante ne bougera pas toute seule. Dire *où* on a le droit de relâcher la barre (horloge ? forme gig ? 0,20 $ Etsy ? LinkedIn perso ?) change l’ensemble. Sans ça, la prochaine boucle tuera le même objet sous un autre nom.

0 code.

---

## Boucle 4 — en attendant Cloudflare (7 sept ~00:46 CEST)

Cadre : horloge **7 j**, agents qui paient, CF **disponible** (dashboard Drop / domaine / protect). SKU H1 déjà écrit. On ne rachète pas un produit.

### AW — Cloudflare Drop (le zip de l’écran d’accueil)

Mesuré : changelog 8 juil 2026. Drop = **assets statiques**, preview **60 min** sauf Claim. **Pas** de compute Worker sauf si le zip contient `_worker.js` **et** qu’on passe par Workers & Pages (Pages drag-drop **supporte** `_worker.js` ; le Drop anonyme cloudflare.com/drop, lui, est HTML/CSS/JS).

Zip préparé : `fr-invoice-mentions-drop.zip` (`_worker.js` + `index.html`). Voir `DROP.md`.

**Pas une idée produit.** C’est le **déploiement**. Domaine payant = capital → **non**.

### AX — Acheter un domaine chez CF

Free DNS une fois le domaine **à nous**. Acheter = capital.

**Tue.** `*.workers.dev` / `*.pages.dev` suffisent.

### AY — Smithery `mcp publish <url>`

Listing **gratuit**. Smithery ~446 k visites/mois (source secondaire). Il faut un MCP **Streamable HTTP** (`/mcp`). On n’a que HTTP x402 pour l’instant.

**Park.** Dès qu’on a une URL persistante : ajouter `/mcp` (outil `mentions` qui 402), puis `smithery mcp publish`. 0 payout Smithery — on encaisse x402.

### AZ — Glama « Add Server » (repo GitHub)

Gratuit. ~83 k MCP indexés (6 sept). Bruit énorme. Indexe un **repo**, pas forcément l’endpoint payant.

**Park + 1 clic toi** : https://glama.ai → Add Server → `https://github.com/CartonPliant/fr-invoice-mentions`. Découverte, pas d’encaissement.

### BA — mcp.so / mcpservers.org / registry officielle MCP

Listings 0 €, trafic réel (sources secondaires). Même prérequis que AY : un MCP.

**Park** avec AY.

### BB — 2e et 3e routes **sur le même Worker** (pas un 2e produit)

Toujours 0 fetch, même `PAY_TO` :

| Route | Job | Concurrent |
|---|---|---|
| `POST /v1/echeance` | date d’échéance L441-10 + 40 € + taux BCE+10 | greeneris `business_days_fr` |
| `POST /v1/einvoice-who` | réception obligatoire dès 1er sept 2026 vs émission TPE 2027, arbre statique | comparateurs + Tiime **gratis** côté humain ; côté agent = trou |

Ça **multiplie les queries Bazaar** (« french payment deadline », « e-invoice 2026 france ») sans nouveau compte. Risque : toujours 1–3 wallets FR.

**Garde en file** dès que l’URL persistante est up. Pas avant (sinon on code dans le vide).

### BC — « Markdown for Agents » (carte CF post-claim)

CF propose d’exposer le site en markdown pour les crawlers. Utile **après** Claim. Pas un SKU. **On coche** quand le Worker est claimé.

---

## Ce que j’attends de toi (oui / non)

| # | Demande | Reco |
|---|---|---|
| 1 | Déployer `fr-invoice-mentions-drop.zip` via **Workers & Pages** (pas d’achat de domaine). Coller l’URL. | **Oui** — sinon le tunnel meurt |
| 2 | Acheter un domaine | **Non** |
| 3 | Activer Access / Zero Trust | **Non** (bloque les agents) |
| 4 | Glama Add Server (1 clic GitHub) | **Oui** si tu as 30 s, sinon plus tard |
| 5 | Routes BB (`echeance` / `einvoice-who`) dès l’URL up | Dis-moi oui/non |

Je ne code BB et je n’ouvre pas Smithery tant que (1) n’est pas **oui** + URL.

