# Amorce — business plan (run 6 sept 22:40 → 7 sept 11:03)

Produit isolé. Pas Devis d’abord, pas Fiche Pleine, pas Ibis.

## 1. Constat

- Stripe live OK, 0 € encaissé à ce jour.
- 12 h, 0 capital, pas de pub.
- Interdit : mail pro fondateur, X Orthies, Reddit, carte fondateur, auto-achat.
- « Les jeunes paient facilement » ≠ ils sont riches. Ça veut dire : ils sortent la CB **ce soir** pour un truc d’apparence / statut / matches, pas pour un devis artisan.

Preuves de paiement déjà là :

| Ils paient déjà | Prix constaté | Pour quoi |
|---|---|---|
| Tinder Gold / Plus, 18–25 ans FR | ~10–25 € / mois | voir qui like, matcher plus |
| Photos IA dating (Narkis, Lensa, Remini, TinderProfile) | 8–29 $ | avoir l’air mieux |
| Rewrite bio Fiverr | 10–25 $ | la même bio, en mieux |
| Rizzify (app ouvreurs) | IAP ~3–8 € / semaine | le premier message |

Les générateurs de bio **gratuits** existent en anglais et sonnent ChatGPT. En français, le trou c’est la voix (pas « passionné de voyage et de bonne bouffe »).

Rentrée = nouvelles villes, nouveaux campus, reprise Tinder. Dimanche soir / lundi matin = usage réel.

## 2. Client

- 18–27 ans, France, **majeurs**.
- A déjà Tinder / Hinge / Bumble / Fruitz.
- Paie déjà l’app ou est à deux doigts de le faire.
- Douleur : « je match pas » / bio vide / bio cringe / premier message = « salut ça va ».
- Pas un artisan. Pas un indie hacker HN. Pas Orthies.

Ce qu’on ne vend pas : des matches garantis, des photos truquées de mineurs, un coaching à 200 €, un abo.

## 3. Offre

**Amorce** — ta bio actuelle, on te dit pourquoi ça passe pas. La version qui tient, plus les ouvreurs, 9 €, tout de suite.

Gratuit (l’appât, aussi le marketing) :

- Tu colles ta bio.
- Roast en français parlé, précis, partageable (screenshot).

9,00 € TTC, une fois (TVA non applicable, art. 293 B du CGI) :

- 3 bios à coller (Tinder / Hinge / Bumble), dans ta voix.
- 8 premiers messages qui commentent **leur** profil, pas « hey ».
- Ordre des 6 photos : checklist, pas de retouche (retouche = infra + risque Stripe, pas ce run).

Promesse tenue : des textes. Pas un classement Tinder (on ne le contrôle pas).

## 4. Pourquoi 9 €

- < 1 semaine de Tinder Gold jeune.
- Impulse : moins cher qu’une soirée, plus concret qu’un générateur gratuit en anglais.
- Frais Stripe ~0,40 €. Marge ~8,60 €. 1 vente = métrique du run.
- Pas 4,99 € (on a l’air d’une arnaque low-cost). Pas 29 € (ils réfléchissent).

## 5. Pourquoi ça se vend mieux qu’Ibis

Ibis = outil pour consultants, lancé sur HN, audience qui ne paie pas un one-pager à 9 €, thread mort.

Amorce = audience qui **paie déjà** l’app de rencontre. Le roast gratuit se screenshot et se forward dans les groupes. Le paiement débloque la suite, tout de suite, sur la même page.

## 6. Produit (périmètre 12 h)

- Site statique, GitHub Pages, repo neuf.
- 18+ obligatoire avant d’écrire quoi que ce soit.
- Génération **côté client** (pas d’API payante = pas de capital).
- Stripe Payment Link live, produit `amorce`, metadata isolée.
- Livraison : page succès + code, sans mail fondateur. Stripe envoie le reçu au client.
- Mentions : Yanis Monnet, EI, SIRET 933 984 056 00012, CGV, rétractation 14 j sauf accès immédiat coché.

Hors scope : upload de photos, abo, app store, anglais, mineurs, Orthies, Devis d’abord.

## 7. Acquisition (sans mail pro, sans Orthies, sans Reddit)

Sans un compte où les 18–27 ans scrollent, le site = 0 €. C’est le seul trou.

Canal utile : **TikTok et/ou Instagram perso** (même un compte mort). Videos de 8–12 s : bio nulle → roast → rewrite. Je fabrique les vidéos. Il faut pouvoir poster.

Je ne crée pas de compte qui demande un SMS sur ton tel pendant que tu dors.

Directories geeks (PH, HN) : mauvais public, on skip.

## 8. Unités

- Coût variable : ~0,40 € Stripe / vente.
- Coût fixe : 0 € (Pages + clé déjà là).
- Seuil de succès 11h03 : **1 charge live tierce**. Pas ta carte. Pas le test mode.
- Si 0 vente : le produit reste, le trou était l’accès aux 18–27 ans.

## 9. Risques

| Risque | Traitement |
|---|---|
| Mineurs | 18+ hard gate, pas de photos |
| « J’ai pas matché » | copy : on vend des textes, pas des matches |
| Chargeback dating | descripteur clair, livraison instantanée, CGV |
| KYC Stripe unverified | charges encore ON ; CNI dès que tu peux |
| Pirate du code succès | acceptable à 9 € sur 12 h |
| Compte TikTok absent | je ship, je ne vends pas |

## 10. Plan jusqu’à 11h03

1. Niche + BP (ce fichier).
2. Site + roast + paywall + Payment Link live.
3. 6–8 vidéos prêtes à poster.
4. Poster dès qu’un compte TikTok/IG est là.
5. Poll Stripe toutes les heures, livrer si quelqu’un paie.
