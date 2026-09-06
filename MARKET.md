# Marché + concurrence — agents payants (mesuré 6 sept 2026)

Le BP-agents.md a collé une offre trop tôt. Ici : ce qui est **mesuré**, ce qui est **cité**, ce qui reste une **hypothèse**. Pas de produit figé à la fin.

Outils : `GET` Bazaar CDP (catalogue + search), `llms.txt` / `agent-status` greeneris, docs Stripe x402, analyse cp0x (snapshot 11 juil 2026).

---

## 1. Deux marchés distincts (ne pas les fusionner)

| | A. Agents (x402 / MCP) | B. Humains FR (facture / devis / entreprise) |
|---|---|---|
| Qui paie | Wallet USDC, souvent provisionné par un humain | CB, abonnement SaaS |
| Qu’est-ce qui se vend | Accès web, data on-chain, vérif, parfois un *bien* | Conformité, gain de temps, peur de l’amende |
| Taille vue | Catalogue CDP **15 616** resources (6 sept, `pagination.total`) | Marché SaaS FR établi (Pennylane, Indy, Pappers…) |
| Preuve de volume | cp0x juil 2026 : ~260k appels / 30 j, **~7 k$** de frais d’API **tout catalogue** | Pappers : 99 % free, 1 % paie l’API (source secondaire, 2026) |

On ne peut pas dire « les agents paient les mentions de devis » parce que les artisans paient Pennylane. Ce sont deux acheteurs.

---

## 2. Côté agents — ce qui est mesuré ce soir

### 2.1 Catalogue

- Total : **15 616** endpoints indexés (CDP, 6 sept 2026).
- Les 15 premières lignes **par payeurs** dans les 500 premiers résultats = **toutes** `api.onesource.io` (RPC Ethereum).
- Exemple : `erc20-balance` — **1147 payeurs / 1153 appels / 30 j**, 0,003 $. Ratio appels/payeur ≈ **1,0**.
- Même pattern que cp0x (juil) : ranking = payeurs uniques, **farmable** (1 tx / wallet). On ne traite pas ce top comme de la demande organique.

cp0x (11 juil, 25 443 resources alors) : ~100 resources avec vraie demande ; search+scrape ~50 % des appels du segment actif ; Twitter search d’un seul vendor = 64k appels. **Demande #1 = yeux sur le web**, pas la data crypto, malgré le bruit RPC.

Limite : on n’a pas re-paginé les 15k ce soir. Le top « payeurs » du début de liste est du farm. Les vrais leaders scrape (Tavily, twit.sh) sont ailleurs dans l’index — vus chez cp0x, pas re-comptés ici.

### 2.2 Search Bazaar — requêtes du *besoin FR / facture / scrape*

Search sémantique CDP, 6 sept, `limit=8`. Qualité = `l30DaysUniquePayers` / `l30DaysTotalCalls`.

**`french company siret vat invoice`**

| Endpoint | Appels / payeurs 30 j | Dernier appel |
|---|---|---|
| greeneris `/v1/fr/invoice-ready` | 1 / 1 | 27 août |
| sirenic `/entreprise/:siren/facturation-prep` | 21 / 1 | 4 sept |
| vat.openverbs `/v1/france` | 4 / 1 | **6 sept** |
| sirenic `/facture/verifier` | 9 / 1 | 4 sept |
| sirenic `/etablissements` | 23 / 1 | 4 sept |
| greeneris `/v1/fr/siret-check` | 1 / 1 | 27 août |

**`legal mentions france invoice`** — **aucun** générateur de mentions. Que de la vérif / prep / BODACC (sirenic, greeneris). 1–2 payeurs.

**`verify french company`** — greeneris `/v1/fr/company` (1/1), strale SIRENE (2/1), sirenic profil **33 appels / 3 payeurs** (le moins « 1:1 » du lot), openverbs TVA.

**`extract email from website scrape`** — delx extract-emails 1/1 ; agentutility scrape-website 4/1 (dernier **6 sept**) ; agent402 extract-entities 4/1. Pas Tavily/Firecrawl dans le top 8 de cette query.

**`skill french freelance documents`** — documents INPI sirenic, skills génériques agent402 (document-brief). Pas de skill « devis FR ».

Lecture : le **créneau FR facture/entreprise pour agents existe comme offre**. La **demande mesurée est 1 à 3 wallets**. Ratio souvent 1 appel / payeur (indexation, pas un loop).

### 2.3 Incumbent FR agent : eu-verify (greeneris)

Mesuré live `https://data.greeneris.io/agent-status` (6 sept) :

- `status: online`, `paid_endpoints: 96`, MCP streamable HTTP, x402 USDC Base.
- Outils FR : `verify_supplier_fr`, `lookup_company_fr`, `invoice_ready_fr`, `validate_siret_fr`, `check_insolvency_fr`, `business_days_fr`, sanctions, VIES, etc.
- Docs agent : `/llms.txt`, `/openapi.json`, `/.well-known/x402`.
- `uptime_s`: 562 050 ≈ **6,5 jours** de process up.
- Prix affichés : siret-check **0,001 $**, company **0,005 $**, invoice-ready **0,02 $**, supplier-risk **0,05 $**.

C’est exactement le job « agent FR + entreprise + facture » — **vérifier**, pas rédiger le pied de page.

Sirenic.eu : prep / vérif e-facture 2026, documents INPI, 1–3 payeurs, dizaines d’appels (un client qui teste en boucle, ou un farm étroit).

---

## 3. Côté humains FR — même *job* papier (pour ne pas inventer un besoin)

Mentions de facture : obligation (L441-9 C. com., 242 nonies A CGI). Amende fiscale **15 € / mention manquante** (source : guides 2026 type factureproforma.fr — à recouper Code ; l’ordre de grandeur est connu des experts-comptables).

Qui vend déjà ça aux humains :

| Acteur | Quoi | Prix (ordre) | Pour un agent ? |
|---|---|---|---|
| Pennylane, Indy, Freebe, Dougs | Facture + mentions | abo 10–40 €/mois | Non, compte humain |
| Devis d’abord (Alpha) | Devis dépannage 9 €/mois | Interdit de pousser | — |
| ComeUp rédaction / logo | Presta 5–150 € | Humain, marketplace | — |
| Pappers API | Fiche entreprise | 30 €/mois le palier 500 crédits ; 100 crédits offerts | Clé API, pas x402 |
| INSEE SIRENE / recherche-entreprises.api.gouv.fr | Data officielle | **Gratuit** | C’est ce que greeneris wrappe |
| Infogreffe Kbis | Document certifié | ~3–4 € | Humain |
| Légifrance API | Textes | Gratuit (compte) | Skill OpenLegi gratuite |

99 % Pappers consultent gratis (article 2026, pas un 10-K). Les gens paient l’**agrégation / le PDF / l’API**, pas « une mention 293 B ».

---

## 4. Skills payantes (idée C)

Marché skills 2026 (sources secondaires, pas re-comptées) :

- Claude Skills / Vercel skills.sh : surtout **gratuit / OSS** (Vercel : 600k skills OSS cités).
- LobeHub : vitrine **333k** skills.
- Monetization native skills Anthropic : **pas** un 402 intégré (Totalum, juin 2026).
- Payant agent : SkillShop (`skillshop.sh/agent.md`, achat x402 + repo GitHub privé), Paperclip (80/20 USDC), MarketNow (Stripe humain + x402 agent, 0,99–9,99 $).

Concurrent **gratuit et on-topic** : skill **Legal Docs Fr** (Skills Directory) — génère CGV, mentions, contrat, devis HTML, Python stdlib, **gratis**.

Donc C (vendre un SKILL.md devis FR à 5 $) se bat contre : le LLM, Legal Docs Fr, OpenLegi, 300k+ skills free. Les marketplaces payantes existent ; on n’a **aucune** preuve qu’un skill « mentions devis » s’y vende.

---

## 5. Scrape (idée A, parking)

Concurrent humains/agents « yeux web » : Tavily, Exa, Firecrawl, Parallel, Brave, Bright Data — plans 16–83 $/mois, MCP, parfois x402 (Exa via Nevermined, Firecrawl listé AgentMuxer).

Sur Bazaar, la query scrape/email sort des **petits** (1–4 appels, 1 payeur), pas les marques. Soit elles ne sont pas indexées sous ces mots, soit le trafic scrape x402 organique est ailleurs (cp0x : twit.sh, Tavily).

Quota : Worker Free 100k req/j, **10 ms CPU**, 50 subrequests. 1 vente scrape = 1 `fetch` chez nous. **Toujours un non** pour A sortant.

Parse-only (HTML en POST) : concurrent delx/agent402 à 0,001 $, 1 payeur. Besoin faible.

---

## 6. Tableau concurrence vs nos brouillons

| Notre brouillon | Concurrent direct mesuré | Substitut gratuit | Demande agent mesurée | Verdict |
|---|---|---|---|---|
| A scrape URL | Tavily/Exa/Firecrawl (hors Bazaar top) ; micro x402 1 payeur | `fetch` de l’agent | Forte *en général* (cp0x), nulle *pour les clones* vus ce soir | Besoin vrai, **on ne peut pas le servir** (quota + incumbents) |
| B texte mentions / livrable FR | **Personne** sur la query « legal mentions » (trou d’offre) | LLM + Legal Docs Fr | **1–3 wallets** sur le voisin (vérif), 0 sur la génération | Trou d’offre, **trou de demande aussi** |
| C pack SKILL | SkillShop / Paperclip (générique) ; Legal Docs Fr **free** | 300k skills OSS | 0 hit « skill freelance FR » utile | Ticket plus lisible, demande nulle |
| D validateur SIRET | greeneris 0,001 $ ; openverbs TVA | algo Luhn local | 1 payeur | Commodity, déjà soldé |
| KYB / e-facture (on n’y a pas proposé) | **greeneris 96 endpoints**, **sirenic**, strale | API gouv gratuite + clé | 1–3 payeurs | Incumbents, data amont ≠ 0 capital propre |

---

## 7. Ce qu’on ne sait toujours pas

- Combien de wallets **tiers** paient greeneris/sirenic (1–3 peut être du self-index).
- Si Tavily/Firecrawl sont dans le Bazaar sous d’autres URLs (cp0x dit oui pour Tavily).
- Volume SkillShop/Paperclip (pas de GMV public trouvé).
- Combien d’agents ont un budget USDC **en France** / tâche admin FR un dimanche soir.

Sans ça, **définir « le » produit est de la fanfic.**

---

## 8. Hypothèses de produit (pas une décision)

À tuer ou garder avec un test, pas avec un slogan.

**H1 — Générer le bloc mentions** (ex-B).  
Preuve qui tue : 0 appel en 7 j après indexation Bazaar + MCP.  
Preuve qui garde : ≥1 wallet tiers, ratio appels/payeur ≥ 5 (loop, pas index).  
Risque : le LLM le fait gratis ; Legal Docs Fr existe.

**H2 — Pack skill 5 $** (ex-C).  
Tuer : 0 achat SkillShop/Bazaar en 7 j.  
Garde : 1 achat tiers.  
Risque : OSS gratuit.

**H3 — On n’a pas de produit agent 0-budget défendable** face à greeneris (data) + LLM (texte) + quota (scrape).  
C’est l’hypothèse **la plus cohérente avec les chiffres de ce soir.**

Pas de go-ship tant que tu n’as pas choisi : tester H1/H2 (accepter cents + 0 € probable à 11h03) ou **lâcher les agents** et chercher un acheteur humain avec un canal.

Fichiers liés : `IDEAS.md` (parking), `BP-agents.md` (trop vite — s’appuyer sur **ce** fichier, pas sur son verdict C+B).
