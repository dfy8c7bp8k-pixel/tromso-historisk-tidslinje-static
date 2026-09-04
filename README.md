# Tromsø / Romsa – historisk tidslinje

En statisk, avhengighetsfri versjon av den historiske tidslinjen. Nettstedet består bare av HTML, CSS, vanlig JavaScript og lokale bilder. Det finnes ingen installasjon, byggefase, serverkode eller betalte tjenester.

## Filstruktur

```text
/
├── index.html          # Sender besøkende videre til norsk side
├── 404.html            # Enkel feilside
├── styles.css          # Hele det visuelle uttrykket og responsiv layout
├── script.js           # Felles, avhengighetsfri visningslogikk
├── favicon.svg
├── .nojekyll           # Hindrer unødvendig Jekyll-behandling på GitHub Pages
├── no/index.html       # Norsk språk-URL
├── en/index.html       # Engelsk språk-URL / oversettelsesmal
├── sme/index.html      # Nordsamisk språk-URL / oversettelsesmal
├── data/
│   ├── no.js           # Autoritativ norsk tekst og alle kildeopplysninger
│   ├── en.js           # Norsk kildetekst klar for profesjonell oversettelse
│   └── sme.js          # Norsk kildetekst klar for profesjonell oversettelse
└── images/             # 24 lokale arkivbilder
```

## Se nettstedet lokalt

Det kreves verken Node.js eller npm. Åpne `no/index.html` direkte i en nettleser. Du kan også bruke en valgfri enkel lokal webserver hvis du allerede har en, men nettstedet er ikke avhengig av det.

## Slik fungerer språkene

Alle tre språk-URL-ene bruker samme `styles.css` og `script.js`. Hver side laster bare sin egen språkfil:

- `/no/` laster `data/no.js`
- `/en/` laster `data/en.js`
- `/sme/` laster `data/sme.js`

Språkvelgeren bruker vanlige lenker og virker med tastatur. Når JavaScript er tilgjengelig, beholder lenkene den nærmeste tidslinjeseksjonen som fragment, for eksempel `../en/#fornorsking`. Uten JavaScript viser sidene fortsatt vanlige språklenker og en forklaring.

`en.js` og `sme.js` inneholder foreløpig den fullstendige norske kildeteksten. Dette er bevisst: historisk innhold skal oversettes av profesjonelle, ikke maskinelt. Begge malene viser et tydelig varsel inntil oversettelsen er ferdig.

`sme` er prosjektets stabile mappe- og dataidentifikator for nordsamisk. Språkkoden i HTML er derimot BCP 47-koden `se`. Mens `sme`-malen inneholder norsk tekst, skal både `<html lang>` og `htmlLang` fortsatt være `nb`. Først når den profesjonelle oversettelsen er satt inn, endres begge til `se`. Språkvelgeren bruker allerede `hreflang="se"` for lenken til `/sme/`.

## Uten JavaScript

Språklenkene og en tydelig forklaring er tilgjengelige i `<noscript>`, men selve tidslinjen trenger JavaScript. Dette er et bevisst vedlikeholdsvalg.

En fullverdig reservevisning uten JavaScript ville krevd at alle 27 hendelser ble kopiert inn som statisk HTML i tillegg til språkfilene. Med tre språk ville samme innhold og kildeinformasjon fått flere parallelle vedlikeholdspunkter og større risiko for avvik. Alternativet ville vært å bygge om hele løsningen slik at HTML var hoveddatakilden, noe som ville gjort oversettelser og felles visningslogikk mer komplisert.

Den lille, lokale JavaScript-rendereren beholdes derfor som eneste innholdsrenderer. Den har ingen avhengigheter, nettverkskall eller dynamisk HTML-injisering. Dette gir én redigerbar innholdskilde per språk uten en byggefase.

## Legg inn profesjonelle oversettelser

1. Åpne `data/en.js` eller `data/sme.js`.
2. Bytt bare ut menneskelesbare tekster: titler, ingress, avsnitt, bildetekster, alternativ tekst, kreditering og grensesnitttekst.
3. Behold alle `id`-verdier, bildefilstier, kilde-URL-er, felt- og objektstruktur.
4. Når oversettelsen er kvalitetssikret:
   - sett `htmlLang` til `"en"` i `en.js` eller `"se"` i `sme.js`;
   - fjern feltet `translationNotice`;
   - oppdater `<html lang>` til `"en"` i `en/index.html` eller `"se"` i `sme/index.html`;
   - oppdater `<title>`, beskrivelsen og `<noscript>`-teksten i den tilhørende `index.html`-filen.

De identiske hendelses-ID-ene gjør at språkbytte kan beholde samme epoke eller hendelse.

## Rediger tidslinjen

Teksten ligger i `data/no.js`:

- `page` inneholder hero, introduksjon, navigasjon og bunntekst.
- `heroImage` inneholder hero-bildets tekst og kilde.
- `timelineEras` inneholder epoker og hendelser.
- Hver hendelse har `date`, `title`, `lead`, `paragraphs`, eventuelle `images` og `sources`.

For å legge til en hendelse kopierer du én eksisterende hendelse i riktig epoke, gir den en unik `id`, og endrer innholdet. Rekkefølgen i filen er rekkefølgen på nettsiden. Bildelisten nederst oppdateres automatisk.

Etter en norsk innholdsendring må tilsvarende endring sendes til de profesjonelle oversetterne for `en.js` og `sme.js`.

## Legg til bilder

1. Legg bildefilen i `images/` med et enkelt filnavn.
2. Legg til eller endre et bildeobjekt i den aktuelle hendelsen:

```js
{
  src: "images/nytt-bilde.jpg",
  alt: "Presis beskrivelse av det som er viktig i bildet",
  caption: "Bildetekst med nødvendig historisk kontekst.",
  credit: "Foto: Navn eller arkiv",
  sourceLabel: "Navn på arkiv eller institusjon",
  sourceUrl: "https://eksempel.no/kildeside"
}
```

`sourceUrl` kan utelates når originalmaterialet ikke har en nettadresse. Ikke fjern kreditering eller arkivnavn.

## Publiser gratis på GitHub Pages

1. Legg innholdet i denne mappen i roten av GitHub-repositoriet.
2. Commit og push filene til standardgrenen, vanligvis `main`.
3. Åpne **Settings → Pages** i repositoriet.
4. Velg **Deploy from a branch**, deretter `main` og mappen `/(root)`.
5. Lagre.

Ingen GitHub Actions-arbeidsflyt er nødvendig. Det ordinære nettstedet bruker relative stier og fungerer derfor under en prosjektadresse med dette mønsteret:

```text
https://<brukernavn>.github.io/<repositorium>/
```

`404.html` er et nødvendig spesialtilfelle. GitHub Pages viser filen på adressen som ikke finnes, så vanlige relative CSS- og språklenker ville feilaktig blitt beregnet fra den adressen. Feilsiden har derfor sin lille CSS innebygd. Den finner automatisk det første stisegmentet på `*.github.io` og bruker dette som repositoriemappe, også fra dypt nestede feiladresser. Ingen brukernavn, domene eller repositoriesti er hardkodet.

Øverst i skriptet nederst i `404.html` finnes én valgfri innstilling:

```js
const REPOSITORY_BASE_PATH = "";
```

La den være tom for et vanlig GitHub Pages-prosjektnettsted. Sett den til for eksempel `"/repositorium/"` hvis nettstedet senere bruker et egendefinert domene med en undermappe. Sett den til `"/"` for et GitHub Pages-bruker- eller organisasjonsnettsted som ligger direkte på domenets rot. Dette er det eneste stedet som eventuelt må konfigureres; språklenkene bygges automatisk fra verdien.

## Sikkerhet og personvern

- Ingen rammeverk eller tredjepartsbiblioteker
- Ingen runtime-avhengigheter
- Ingen byggesteg
- Ingen eksterne skript eller CDN-er
- Ingen API-kall
- Ingen informasjonskapsler eller nettleserlagring
- Ingen analyse, telemetri eller sporing
- Ingen autentisering, database, miljøvariabler, nøkler eller hemmeligheter
- Eksterne forespørsler skjer bare når en besøkende selv åpner en historisk kildelenke

JavaScript-koden bruker sikre DOM-metoder og setter tekst med `textContent`/tekstnoder. Den bruker ikke `eval`, `new Function`, `innerHTML` eller inline-hendelser.
