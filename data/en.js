/*
 * ENGLISH TRANSLATION TEMPLATE
 *
 * This file intentionally contains the complete Norwegian source text.
 * A professional translator should replace the human-readable strings while
 * keeping ids, image paths, source URLs and object structure unchanged.
 * When finished, set htmlLang to "en" and remove translationNotice below.
 */

const heroImage = {
  src: "images/image6.png",
  alt: "Historisk oversiktsbilde av Tromsø sett fra Storsteinen på Fløyfjellet",
  caption:
    "Bildet er trolig tatt fra Storsteinen på Fløyfjellet i årene mellom 1886 og 1892.",
  credit: "Fotograf: Jørgen Wickstrøm.",
  sourceLabel: "Perspektivet Museum",
  sourceUrl:
    "https://www.flickr.com/photos/perspektivetmuseum/11336158196/in/album-72177720330686852",
};

const timelineEras = [
  {
    id: "for-byen",
    label: "Før byen",
    title: "Landet, havet og flytteveiene",
    intro:
      "Tromsøområdet var et levende samisk landskap lenge før kjøpstaden ble tegnet inn på kartet.",
    accent: "ochre",
    events: [
      {
        id: "for-1794",
        date: "Før 1794",
        title: "Historisk tidslinje",
        lead:
          "Området som i dag er Tromsø kommune har vært bebodd i svært lang tid, lenge før byen ble etablert i 1794. Samene levde her og brukte landskapet aktivt til fiske, jakt, fangst og reindrift. Spor etter dette finnes fortsatt i naturen, i gamle boplasser og i samiske stedsnavn over hele regionen – på øyer som Kvaløya og Ringvassøya, og i fjordene og dalene rundt.",
        paragraphs: [
          "Langs kysten og i fjordene levde mange av det som ofte omtales som sjøsamisk kultur. De kombinerte fiske med jordbruk og husdyrhold, på samme måte som mange norske bosettere senere gjorde. I tillegg brukte reindriftssamer områdene rundt Tromsø som sommerbeite, og flyttet mellom kysten og innlandet gjennom året.",
          "Folk med ulik bakgrunn levde tett på hverandre. Samer, nordmenn og etter hvert kvener hadde kontakt og samarbeid, blant annet gjennom det som kalles verddeforhold. Dette var et gjensidig bytteforhold, der man delte ressurser og tjenester – for eksempel kjøtt, fisk og materialer.",
          "Allerede før byen ble grunnlagt, var området en del av større handels- og kontaktnettverk. Ressursene i havet og naturen gjorde området viktig, og folk flyttet på seg etter sesonger og behov. Samtidig var bosettingen spredt, med små gårder og boplasser langs fjorder og strender.",
          "Før 1794 fantes det altså ikke en by i Tromsø, men et levende og sammensatt samfunn. Området var preget av samisk tilstedeværelse, samarbeid mellom ulike grupper og en livsform tett knyttet til naturen og årstidene. Dette la grunnlaget for utviklingen som senere førte til at Tromsø ble etablert som by.",
          "Følg den historiske tidslinjen for samer fra år 800 og fram til i dag:"
        ],
        images: [
          {
            src: "images/image1.png",
            alt: "Tidlig håndtegnet skisse av kjøpstaden Tromsø",
            caption:
              "I Perspektivet Museums arkiv ligger den første kjente skissen over kjøpstaden Tromsø.\n\nTegningen er signert konsul Lorentz G. Skancke og er trolig fra 1806.",
            credit: "Arkiv: Perspektivet Museum",
            sourceLabel: "Perspektivet Museum",
            sourceUrl:
              "https://www.flickr.com/photos/perspektivetmuseum/8118815730/in/album-72157631842542864",
          },
        ],
        sources: [
          {
            label: "Tidslinje - Samiske veivisere",
            url: "https://samiskeveivisere.no/tidslinje/"
          },
          {
            label: "https://result.uit.no/reaidu/",
            url: "https://result.uit.no/reaidu/"
          }
        ],
      },
      {
        id: "lappekodisillen",
        date: "1751",
        title: "Lappekodisillen (1751)",
        lead:
          "Noen reindriftssamer hadde vinterbeite på Finnmarksvidda eller i områder i Sverige, og sommerbeite langs kysten, blant annet i områdene rundt Tromsø. For å kunne flytte med reinflokkene mellom disse områdene, var de avhengige av å krysse landegrenser.",
        paragraphs: [
          "I 1751 ble grensen mellom Danmark-Norge og Sverige fastsatt. Samtidig ble det inngått et tillegg til grensetraktaten, kalt Lappekodisillen. Denne avtalen skulle sikre at samene fortsatt kunne krysse grensen med reinflokkene sine, slik de hadde gjort i lang tid.",
          "Lappekodisillen er derfor en viktig avtale, fordi den anerkjente samisk bruk av land og retten til å flytte med rein over landegrensene.",
          // Inger Lise har oppgitt bokhenvisningen. Fullstendig bibliografisk referanse og eventuelle sidetall avventes.
          "Kilde: Samenes historie fra 1751–2010 (Andersen, Evjen og Ryymin, 2021)."
        ],
        images: [
          {
            src: "images/lappekodisillen-forste-side.jpg",
            alt: "Første side av Lappekodisillen fra 1751",
            caption: "Faksimile av Lappekodisillen, første side.",
            credit: "Nasjonalarkivet, via Digitalarkivet/Wikimedia Commons. Public domain.",
            sourceLabel: "Wikimedia Commons",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Lappekodisillen.pdf",
          },
        ],
        sources: [
          {
            label: "Lappekodisillen – Store norske leksikon",
            url: "https://snl.no/Lappekodisillen",
          },
          {
            label: "Lappekodisillen – Norgeshistorie",
            url: "https://www.norgeshistorie.no/kilder/enevelde/K1221-lappekodisillen.html",
          },
        ],
      },
    ],
  },
  {
    id: "1794-1850",
    label: "1794–1850",
    title: "Kjøpstaden vokser fram",
    intro:
      "Handel, administrasjon, kirke og utdanning gjorde den lille kjøpstaden til et sentrum i nord.",
    accent: "blue",
    events: [
      {
        id: "grunnleggelsen",
        date: "20. juni 1794",
        title: "Etableringen av Tromsø som by",
        lead:
          "På slutten av 1700-tallet skjedde det viktige endringer i Norge som også fikk betydning for Nord-Norge. I 1788 ble handelsmonopolene i Trondheim og Bergen opphevet. Dette gjorde det mulig med friere handel, særlig i de nordlige områdene som lenge hadde hatt dårlig tilgang på varer.",
        paragraphs: [
          "Samme år ble byene Hammerfest og Vardø grunnlagt. Myndighetene ønsket også å etablere en by i Troms, men det var først usikkert hvor den skulle ligge. Det var særlig diskusjon mellom steder som Gibostad og Kjøtta, men til slutt ble Tromsø valgt.",
          "Den 20. juni 1794 ble Tromsø offisielt grunnlagt som by. Resolusjonen ble underskrevet av Christian 7., konge av Danmark-Norge. På dette tidspunktet bodde det rundt 80 mennesker i området.",
          "Byen var liten, og hadde en annen utforming enn i dag. Kirken var ikke innlemmet i selve byen, men lå som en egen «øy» midt i byområdet.",
          "Etableringen av Tromsø markerer starten på en ny utvikling. Med bystatus kom økt handel, flere innbyggere og nye funksjoner som administrasjon og kirke. Samtidig var Tromsø fra starten av en del av et større samfunn der samer, kvener og nordmenn levde og arbeidet i regionen.",
          "Tromsø vokste gradvis fram som et viktig sentrum i Nord-Norge, og grunnleggelsen i 1794 ble et viktig vendepunkt i denne utviklingen.",
          "Styresettet i Danmark – Norge var bygd opp rundt monopoler og sterk statlig styring (merkantilisme). Monopolene Oslo, Trondheim og Bergen klarte ikke å forsyne den nordlige landsdelen med nødvendige varer.",
          "På slutten av 1700-tallet vokste det fram nye ideer om fri handel, der varer kunne omsettes uten slike begrensninger. Myndighetene ønsket å prøve ut dette i de nordlige områdene, og valgte derfor Troms og Finnmark som et sted for å teste mer åpen handel.",
          "Folketellingen fra 1769 viste at halvparten av befolkningen i Tromsø prestegjeld var samer. Den samiske befolkningen økte jevnt frem til 1805, mens den norske befolkningen gikk jevnt tilbake."
        ],
        images: [
          {
            src: "images/image2.png",
            alt: "Kart over Tromsøs bygrenser fra 1794 til 1842",
            caption:
              "Bygrensene 1794–1842. Prestegården lå som en enklave som ikke inngikk i byen.",
            credit: "Kilde: Byarkivet i Tromsø",
            sourceLabel: "Byarkivet i Tromsø",
          },
          {
            src: "images/image3.png",
            alt: "Litografi av Tromsø og Tromsøysundet omkring 1840",
            caption:
              "Litografi med oversikt over Tromsø og Tromsøysundet fra rundt 1840. Samer og nordmenn i forgrunnen på Tromsdalssiden.\n\nUnder bildet står følgende tekst: \"Tromsöe. Optaget efter Naturen af A. Larsen. Lith af Prahl i Bergen. Cap af H.C. Knudsen\".",
            credit: "Etter A. Larsen, litografert av Prahl i Bergen",
            sourceLabel: "Perspektivet Museum",
            sourceUrl:
              "https://www.flickr.com/photos/perspektivetmuseum/9622988832/in/album-72157631842542864",
          },
        ],
        sources: [
          {
            label: "kapittel. 2 | Det samiske Tromsø Kommunedelplan for kulturmiljø 2023-2032",
            url: "https://experience.arcgis.com/experience/9ccbb04a28ca4d949b9f8848d748fad1/page/kapittel_-2#widget_807=active_datasource_id:dataSource_19,center:654200.0350654175%2C7737166.1694830945%2C25833,scale:315893.5948921374,level:7.025665031924142,rotation:0,viewpoint:%7B%22rotation%22%3A0%2C%22scale%22%3A315893.5948921374%2C%22targetGeometry%22%3A%7B%22spatialReference%22%3A%7B%22latestWkid%22%3A25833%2C%22wkid%22%3A25833%7D%2C%22x%22%3A654200.0350654175%2C%22y%22%3A7737166.1694830945%7D%7D"
          }
        ],
      },
      {
        id: "naering-og-verdde",
        date: "1794–1930",
        title: "Næringsliv da Tromsø ble by",
        lead:
          "Da Tromsø fikk bystatus i 1794, levde de fleste av det vi kaller primærnæringer. Det vil si jordbruk, fiske, fangst og reindrift. Livet var tett knyttet til naturen og årstidene, og mange kombinerte flere næringer for å klare seg gjennom året.",
        paragraphs: [
          "Jordbruk og fiske:",
          "De fleste bodde på små gårder eller bruk langs kysten og i fjordene. Her dyrket de jorda og holdt husdyr som sau, kyr, gris og høns. Noen sjøsamer hadde også rein. Samtidig var fiske en viktig del av livsgrunnlaget. Mange kombinerte jordbruk og fiske, noe som var vanlig i hele Nord-Norge. Ved sjøen var både hjemmefiske, fjordfiske og deltakelse i de sesongmessige fiskeriene en mulighet. Det har i perioder vært kvotereguleringer som har gitt kystfiskere og sjøsamiske fiskere store utfordringer.",
          "Båtbygging var også en viktig aktivitet, fordi gode båter var nødvendige for fiske og transport. Sjøsamene levde i stor grad på samme måte som sine norske naboer, med en kombinasjon av jordbruk og fiske. Dette var en stabil og tilpasset måte å leve på i et område med skiftende naturforhold.",
          "Reindrift:",
          "Reindrift var en annen viktig næring i området. Reindriftssamene flyttet med reinflokkene mellom ulike beiteområder gjennom året. Om vinteren var de ofte på Finnmarksvidda eller i områder i Sverige, mens de om sommeren hadde beite langs kysten, blant annet i områdene rundt Tromsø.",
          "Det var tett kontakt mellom reindriftssamene og kystbefolkningen. De utviklet et samarbeid som på samisk kalles verddeforhold – et gjensidig og tillitsbasert bytteforhold. Reindriftssamene kunne for eksempel levere kjøtt og skinn, og fikk til gjengjeld fisk og andre varer.",
          "Verdde er et samisk begrep som beskriver forholdet mellom fastboende sjøsamer og reindriftssamer som kom til kysten med reinflokkene om sommeren. Verddeforholdet var en form for bytteordning. I stedet for kjøp og salg utvekslet man tjenester og varer. Relasjonene gikk ofte i arv mellom familier. Kjernen i verddeordningen var gjensidig hjelp, tillit og forpliktelse.",
          "Noen bodde i gammer i utkanten av det som senere ble byområdet. Reindriftssamene flyttet med reinflokkene til sommerbeite på øyene rundt Tromsøya (Romssasuolu), blant annet til Kvaløya (Sállir), Malangshalvøya (Málatvuotna), Ringvassøya (Ráneš) og Reinøya (Ráidna).",
          "Reinen ble blant annet ført over Rávdnji (Rystraumen). Denne strømmen har gitt navn til landskapet rundt, både på samisk og norsk: Rávdnjeluokta (Straumsbukta), Rávdnjevággi (Straumsdalen) og Rávdnjemuotki (Straumseidet). Straumhella var et sentralt punkt langs denne flytteveien. Det finnes fortsatt reindrift i disse områdene i dag.",
          "Gjennom verddeforholdet leverte reindriftssamene kjøtt og skinnprodukter, og fikk til gjengjeld fisk og andre varer fra kystbefolkningen. I dette området levde sjøsamer, kvener og nordmenn side om side og utnyttet ressursene i naturen sammen.",
          "Senere, særlig i perioden fra 1860 til 1930, var det stor aktivitet i fisket. Storsildfiske og torskefiske i Finnmark, Troms og Lofoten førte til omfattende handel sørover. Norske, sjøsamer og kvener deltok i fisket. Seilskuter fra Sør-Norge kom nordover for å kjøpe fisk, noe som ga gode inntekter og førte til vekst i både bygder og byer, inkludert Tromsø."
        ],
        images: [
          {
            src: "images/image4.png",
            alt: "Seilskuter i Tromsø havn omkring 1890",
            caption: "PEM-BYM-00278 Tromsø Havn ca. 1890",
            credit: "Foto: ukjent",
            sourceLabel: "Perspektivet Museum",
            sourceUrl:
              "https://www.flickr.com/photos/perspektivetmuseum/21111228175/in/album-72177720316164826",
          },
          {
            src: "images/image5.png",
            alt: "Samisk sommerboplass med gamme og mennesker i Tromsdalen",
            caption:
              "PEM-TOI-GP00192 \"Lappeleiren\" i Tromsdalen\n\nDen samiske sommerboplassen i Tromsdalen var et svært populært mål for turistene. For mange turister var det også den viktigste grunnen til å gjøre et stopp i Tromsø. Sommerboplassen i Tromsdalen var en vanlig sommerboplass. Den utgjorde dermed en autentisk sameleir i motsetning til kunstige leire bare opprettet for å trekke turister.\n\nI leiren i Tromsdalen sto det i 1850-årene to gammer, og fra 1860-årene tre gammer. Det var også reingjerder som ble brukt under melking av reinen, som var vanlig fram til 1880-årene. Rundt århundreskiftet var melking av rein nesten opphørt, men gjerdene ble likevel stående. Dit hentet samene reinen ned fra fjellet til glede for turistene.",
            credit: "Arkiv: Perspektivet Museum",
            sourceLabel: "Perspektivet Museum",
            sourceUrl:
              "https://www.flickr.com/photos/perspektivetmuseum/10944985194/in/album-72157650251722417",
          },
        ],
        sources: [
          {
            label: "Straumhella (Tromsø) – lokalhistoriewiki.no",
            url: "https://lokalhistoriewiki.no/wiki/Straumhella_(Troms%C3%B8)"
          },
          {
            label: "kapittel. 3 | Fisker og bonde – livet for de fleste Kommunedelplan for kulturmiljø 2023-2032",
            url: "https://experience.arcgis.com/experience/9ccbb04a28ca4d949b9f8848d748fad1/page/kapittel_-3/#widget_807=active_datasource_id:dataSource_19,center:654200.0350654175%2C7737166.1694830945%2C25833,scale:315893.5948921374,level:7.025665031924142,rotation:0,viewpoint:%7B%22rotation%22%3A0%2C%22scale%22%3A315893.5948921374%2C%22targetGeometry%22%3A%7B%22spatialReference%22%3A%7B%22latestWkid%22%3A25833%2C%22wkid%22%3A25833%7D%2C%22x%22%3A654200.0350654175%2C%22y%22%3A7737166.1694830945%7D%7D"
          },
          {
            label: "https://nordligefolk.no/vinterfiske/",
            url: "https://nordligefolk.no/vinterfiske/"
          },
          {
            label: "Fakta om reindrift - Sametinget",
            url: "https://sametinget.no/naring/reindrift/fakta-om-reindrift/"
          },
          {
            label: "Inngrepskartlegging for reindrifta i Troms fylke – Nasjonalt vitenarkiv",
            url: "https://hdl.handle.net/11250/2649699"
          },
          {
            label: "Kilden - reindrift",
            url: "https://kilden.nibio.no/?topic=reindrift&zoom=3.4&x=741601.53&y=7707479.34&bgLayer=graatone&layers=reindrift_reinbeitedistrikt,reindrift_reinbeitedistriktgrenser,reindrift_distriknavn&layers_opacity=0.75,0.75,0.75&layers_visibility=true,true,true"
          },
          {
            label: "Polarhistorie | Visit Tromsø",
            url: "https://www.visittromso.no/no/polarhistorie"
          },
          {
            label: "Trollfjordslaget - fra en som opplevde hendelsen – NRK",
            url: "https://www.nrk.no/video/trollfjordslaget---fra-en-som-opplevde-hendelsen_37798"
          }
        ],
      },
      {
        id: "pomorhandelen",
        date: "1814–1917",
        title: "Pomorhandelen",
        lead:
          "Pomorhandelen var svært viktig for folk i Nord-Norge, og særlig for sjøsamene. Dette var handel mellom nordnorske kystsamfunn og russiske handelsmenn fra områdene rundt Kvitsjøen. Hver sommer kom pomorene med skip til kysten for å bytte varer.",
        paragraphs: [
          "For Tromsø og områdene rundt fikk denne handelen stor betydning, spesielt fra 1814 og utover. Mye av melet som ble brukt i Nord-Norge, kom gjennom pomorhandelen. I tillegg solgte folk fisk, skinn og andre produkter til pomorene.",
          "Særlig samene hadde varer som var etterspurt, blant annet skinnprodukter. Rundt 1820 var prisene svært høye. For eksempel kunne et reveskinn byttes mot store mengder mel, og et svartrevskinn hadde enda høyere verdi.",
          "Pomorhandelen tok slutt i 1917, som følge av den russiske revolusjonen. Dette fikk store konsekvenser for økonomien i Nord-Norge, spesielt for kystsamfunnene som var avhengige av denne handelen. Pomorhandelen hadde konservert fleksibiliteten i den sjøsamiske økonomien med byttehandel som en av bærebjelkene. Overgangen til en sterkere penge- og markedsøkonomi ble vanskelig.",
          "Etter hvert økte også handelen sørover. Kjøpmenn fra Sør-Norge kom nordover for å kjøpe fisk. Dette førte til økt velstand og befolkningsvekst i Tromsø og andre steder i Nord-Norge."
        ],
        images: [
          {
            src: "images/image9.png",
            alt: "Tre russiske pomorer om bord på et seilskip før 1917",
            caption: "Russiske pomorer om bord på et skip, fotografert før 1917.",
            credit: "Foto: Yakov Leuzinger · Public domain",
            sourceLabel: "Bildekreditering i originaldokumentet",
          },
        ],
        sources: [
          {
            label: "Pomorhandelen - en viktig handel i nord –",
            url: "https://www.museumnord.no/historier/pomorhandelen-en-viktig-handel-i-nord/"
          },
          {
            label: "Pomorhandel – Wikipedia",
            url: "https://no.wikipedia.org/wiki/Pomorhandel"
          }
        ],
      },
      {
        id: "administrasjon",
        date: "1814 / 1866",
        title: "Tromsø amt",
        lead:
          "Et amt var en administrativ enhet i Norge fra 1662 til 1918, tilsvarende dagens fylker, og ble ledet av en amtmann, som var statens øverste representant i området.",
        paragraphs: [
          "Selv om Tromsø amt først ble opprettet i 1866, fikk Tromsø en viktig administrativ rolle tidligere. Allerede i 1814 ble amtmannen i Finmarkens amt flyttet fra Alta til Tromsø, da Johan Caspar Krogh ble utnevnt til amtmann.",
          "Tromsø amt ble opprettet i 1866 og bestod av områdene Tromsø og Senja, som tidligere hadde vært en del av Finmarkens amt. Opprettelsen av amtet gjorde Tromsø til et viktig administrasjonssenter i regionen. Med administrasjonen fulgte det arbeidsplasser innen forvaltning, rettsvesen og offentlige tjenester. Dette bidro til økt tilflytting og befolkningsvekst.",
          "Fra 1. januar 1919 ble betegnelsen «amt» erstattet med «fylke», og Tromsø amt fikk navnet Troms fylke.",
          "Amtene var inndelt i fogderier."
        ],
        images: [
          {
            src: "images/image10.png",
            alt: "Historisk kart over Tromsø amt",
            caption: "Historisk kart over Tromsø amt.",
            credit: "Kilde: Kartverket",
            sourceLabel: "Kartverket – historiske kart",
            sourceUrl:
              "https://www.kartverket.no/om-kartverket/historie/historiske-kart/soketreff/mitt-kart?mapId=179",
          },
        ],
        sources: [
          {
            label: "Amt – Wikipedia",
            url: "https://no.wikipedia.org/wiki/Amt"
          },
          {
            label: "fogderier",
            url: "https://snl.no/fogderi"
          },
          {
            label: "Amt – Store norske leksikon",
            url: "https://snl.no/amt"
          }
        ],
      },
      {
        id: "seminarium",
        date: "1824",
        title: "Tromsø seminarium",
        lead:
          "Tromsø seminarium ble opprettet i 1824 og var en forløper til dagens lærerutdanning, høgskole og universitet. Det var det første offentlige lærerseminaret i Norge.",
        paragraphs: [
          "Seminaret hadde få studieplasser – bare ni – og fire av disse var for Finnmark. Av disse plassene skulle halvparten gå til samer. Dette gjorde seminaret viktig for utdanning av samiske lærere i Nord-Norge.",
          "I starten bidro utdanningen til at samiske elever kunne få undervisning av lærere med kjennskap til språk og kultur. Dette var viktig for å kunne gi opplæring som var tilpasset elevenes hverdag.",
          "Utover 1800-tallet endret dette seg. Med fornorskingspolitikken ble skolen et viktig redskap for å fremme norsk språk og kultur. Samiske lærere fikk en krevende rolle, der de ofte måtte undervise på norsk, selv om mange elever hadde samisk som morsmål. Dette førte til tap av språk og kultur i flere generasjoner.",
          "I dag er denne historien en viktig del av arbeidet med forsoning. Skolen har gått fra å være et redskap for fornorsking til å bli en arena for å styrke samisk språk, kultur og identitet. Lærerutdanningen i Tromsø har i dag et ansvar for å gi kunnskap om samiske forhold til alle lærere, og for å utdanne lærere som kan undervise i og på samisk.",
          "Kvinner fikk adgang til utdanningen i 1890, noe som var et viktig steg for utviklingen av skole og samfunn.",
          "I 1902 skiftet seminaret navn til Tromsø offentlige lærerskole. I 1980 ble det til Tromsø lærerhøgskole, og i 1994 ble det en del av Høgskolen i Tromsø som avdeling for lærerutdanning."
        ],
        images: [
          {
            src: "images/image13.png",
            alt: "Historisk fotografi av Tromsø seminarium og bebyggelsen rundt",
            caption:
              "PEM-BYM-00264 Tromsø Seminarium i Tromsø\n\nTromsø Seminarium er den store bygningen midt i bildet. Foran på plassen, til venstre og innenfor gjerdet ligger Tyholdts gård. Til høyre for den, ned mot sundet, ligger Seilmaker Simonsens gård. Johnsgaards verft med seilskuter ligger bak plankegjerdet til høyre. Det lille huset midt på bildet med to vinduer i første etasje og ett i andre etasje, er fra omlag 1850. Dette er i dag å finne i Arktisk-alpin Botanisk hage i Tromsø. Huset ble istandsatt i 2002 og er i bruk som møtelokale for universitetet og Botanisk hages venner, samt kaffe- og hvilested for besøkende i sesongen.\n\nBildet er trolig tatt mellom 1870-1900. Bygningen brant i 1977.",
            credit: "Foto: Ukjent fotograf.",
            sourceLabel: "Perspektivet Museum",
            sourceUrl: "https://www.flickr.com/photos/perspektivetmuseum/18484059852",
          },
        ],
        sources: [
          {
            label: "Tromsø lærerhøgskole – Wikipedia",
            url: "https://no.wikipedia.org/wiki/Troms%C3%B8_l%C3%A6rerh%C3%B8gskole"
          },
          {
            label: "Lærerutdanning, Historie | Lærerutdanningen i Tromsø jubilerer",
            url: "https://www.nordnorskdebatt.no/larerutdanningen-i-tromso-jubilerer/o/5-124-403009"
          }
        ],
      },
      {
        id: "bispesete",
        date: "1834",
        title: "Tromsø blir bispesete",
        lead:
          "I 1834 ble Tromsø bispesete for Nord-Norge. Tromsø domkirke ble da hovedkirke for bispedømmet. Ved en utvidelse av bygrensene i 1860 ble kirken innlemmet i byen.",
        paragraphs: [
          "Tromsø hadde denne rollen fram til 1952. Da ble Nord-Hålogaland bispedømme opprettet. Dette bispedømmet omfatter menighetene i Troms og Finnmark, samt Svalbard, som hører til Tromsø domprosti. Tromsø domkirke er fortsatt bispesete.",
          "Dette styrket Tromsø som religiøst og administrativt sentrum i nord, samtidig som det fikk betydning for samene ved at kirken ble et viktig redskap i fornorskingspolitikken, blant annet gjennom språk og opplæring."
        ],
        images: [
          {
            src: "images/image12.png",
            alt: "Biskop Eivind Berggrav og Kathrine Berggrav utenfor Bispegården i Tromsø",
            caption:
              "PEM-OAA-00130 Biskop Eivind Berggrav og hustru Kathrine Berggrav (f. Seip)\n\nBildet er tatt ved Bispegården i Conrad Holmboes vei i Tromsø.",
            credit: "Foto: Olav Aasegg.",
            sourceLabel: "Perspektivet Museum",
            sourceUrl: "https://www.flickr.com/photos/perspektivetmuseum/9598597998",
          },
        ],
        sources: [
          {
            label: "Nord-Hålogaland bispedømme – Wikipedia",
            url: "https://no.wikipedia.org/wiki/Nord-H%C3%A5logaland_bisped%C3%B8mme"
          },
          {
            label: "Tromsø domprosti – Wikipedia",
            url: "https://no.wikipedia.org/wiki/Troms%C3%B8_domprosti"
          },
          {
            label: "Tromsø domkirke – lokalhistoriewiki.no",
            url: "https://lokalhistoriewiki.no/wiki/Troms%C3%B8_domkirke"
          },
          {
            label: "Likeverdig tilkomst i Bispegården - Riksantikvaren",
            url: "https://riksantikvaren.no/eksempelsamling/universell-utforming/likeverdig-tilkomst-i-bispegarden/"
          }
        ],
      },
      {
        id: "bygrensene",
        date: "1842–1915",
        title: "Utvidelse av bygrensene i 1842 og 1860",
        lead:
          "Tromsø vokste raskt på 1800-tallet, og det ble etter hvert behov for å utvide bygrensene. De viktigste utvidelsene skjedde i 1842 og 1860.",
        paragraphs: [
          "Det var flere grunner til dette. Mange bygde hus tett opp mot bygrensen, og det ble behov for bedre regulering, blant annet for å redusere brannfare. Samtidig hadde enkelte velstående borgere bygget hus utenfor bygrensen for å unngå å betale skatt. Ved å utvide grensene fikk myndighetene bedre kontroll med både bebyggelse og skatteinntekter.",
          "I denne perioden startet også den første systematiske byplanleggingen i Tromsø. Bygningsloven av 1845 førte til at byen fikk et mer planlagt gatenett, blant annet med tverrgater som skulle gjøre byen tryggere mot brann.",
          "På midten av 1800-tallet vokste det fram en tett trehusbebyggelse, ofte kalt «Empirebyen». Husene var som regel i én til tre etasjer, og mange av dem står fortsatt i dag. Rundt 1865 var denne bystrukturen i hovedsak på plass.",
          "Senere kom nye tiltak for å gjøre byen tryggere og mer moderne. Etter bybrannen i Ålesund i 1904 ble det innført krav om murbygg i deler av Tromsø sentrum for å redusere brannfaren.",
          "For å sikre rent drikkevann ble Prestvannet demmet opp og tatt i bruk som vannkilde for byen på 1800-tallet. Dette var et viktig tiltak for helse og utvikling i en voksende by.",
          "Utvidelsen av bygrensene og utviklingen av byen hang tett sammen med Tromsøs rolle som handelssted, bispesete (fra 1834) og senere administrasjonssenter (fra 1866). Til sammen bidro dette til å forme Tromsø til en av de viktigste byene i Nord-Norge.",
          "For den samiske befolkningen ga utvidelsen av Tromsø nye muligheter for handel og kontakt, men førte også til økt press på samisk arealbruk og kultur. For mange samer innebar dette en gradvis endring i hvordan de kunne leve og bruke området rundt Tromsø."
        ],
        images: [
          {
            src: "images/image11.png",
            alt: "Kart over Tromsøs bygrense fra 1860 til 1872",
            caption: "Bygrensen 1860–1872. Prestegården og kirken ble innlemmet i 1860.",
            credit: "Kilde: Byarkivet i Tromsø",
            sourceLabel: "Byarkivet i Tromsø",
          },
          {
            src: "images/image17.png",
            alt: "Kart over Tromsøs bygrense fra 1872 til 1915",
            caption: "Bygrensen 1872–1915 på et kart fra 1876.",
            credit: "Kilde: Norges geografiske oppmåling",
            sourceLabel: "Norges geografiske oppmåling",
          },
          {
            src: "images/image18.png",
            alt: "Detaljert kart over Tromsø fra 1918 med bygrense",
            caption: "Bygrensen 1915–1955 på et kart fra 1918.",
            credit: "Kilde: Kartverket i Tromsø",
            sourceLabel: "Kartverket i Tromsø",
          },
        ],
        sources: [
          {
            label: "Kommunedelplan for kulturmiljø 2023–2032",
            url: "https://experience.arcgis.com/experience/9ccbb04a28ca4d949b9f8848d748fad1/",
          },
        ],
      },
    ],
  },
  {
    id: "1850-1919",
    label: "1850–1919",
    title: "Vekst, møter og hardere grenser",
    intro:
      "Tromsø vokste som reisemål og handelssentrum, samtidig som fornorskingspolitikken grep stadig sterkere inn i språk og hverdagsliv.",
    accent: "red",
    events: [
      {
        id: "turisme",
        date: "Fra midten av 1800-tallet",
        title: "Turisme",
        lead:
          "Fra midten av 1800-tallet begynte de første turistene å komme til Tromsø, særlig fra England, Tyskland og USA. De reiste nordover for å oppleve naturen, med fjorder, fjell og midnattssol, som ble sett på som noe spesielt og eksotisk. Mange kom med større turistskip, og Tromsø ble etter hvert et viktig stoppested på reisen i nord.",
        paragraphs: [
          "Tromsdalen utviklet seg tidlig til et sentralt turistmål. Her kunne besøkende komme tett på naturen, men også møte samisk kultur. Det var etablert en sameleir i Dalheim, som mange turister besøkte. De ønsket å se hvordan samene bodde, og oppleve reindrift på nært hold. Reinen ble vist fram i inngjerdinger, og både mennesker, gammer og dyr ble ofte fotografert. For mange turister var møtet med samisk kultur en viktig del av reisen.",
          "Turismen fikk flere konsekvenser for samene. På den ene siden ga den nye muligheter for inntekt og kontakt med omverdenen. Samer kunne selge produkter, vise fram kultur og delta i en voksende økonomi knyttet til reiseliv. Dette kunne bidra til økt synlighet og verdsetting av samisk kultur.",
          "Samtidig hadde turismen også negative sider. Samisk kultur ble i noen sammenhenger fremstilt som en attraksjon for besøkende, der hverdagsliv og tradisjoner ble vist fram på en måte som ikke alltid var på egne premisser. Dette kunne føre til forenklede eller stereotype bilder av samisk liv. Det var også en ubalanse i maktforholdet mellom turister og lokalbefolkning, der det ofte var turistens blikk og forventninger som styrte hvordan kulturen ble presentert.",
          "I 1912 åpnet Sportskaféen i Tromsdalen. Den ble et populært samlingssted for både turister og lokalbefolkning, særlig for dem som var på tur eller på ski. Kafeen var i drift i mange år, men ble lagt ned på 1970-tallet. Selv om bygningen senere ble fjernet, lever minnene om stedet videre som en del av Tromsøs tur- og reiselivshistorie.",
          "Den tidlige turismen i Tromsø la grunnlaget for byen som reisemål, men viser også hvordan møtet mellom besøkende og lokal kultur kunne gi både nye muligheter og nye utfordringer."
        ],
        images: [
          {
            src: "images/image14.png",
            alt: "Turistskipet M/Y Stella Polaris i en nordnorsk fjord",
            caption: "Turistskipet M/Y Stella Polaris.",
            credit: "Kilde oppgitt av rettighetshaver: Tromsøs bildearkiv",
            sourceLabel: "Tromsøs bildearkiv",
          },
          {
            src: "images/image15.png",
            alt: "Stor reinflokk og mennesker i Tromsdalen",
            caption: "Rein og mennesker ved sommerboplassen i Tromsdalen.",
            credit: "Arkiv: Perspektivet Museum",
            sourceLabel: "Perspektivet Museum",
            sourceUrl:
              "https://www.flickr.com/photos/perspektivetmuseum/10943199245/in/album-72157650251722417",
          },
        ],
        sources: [
          {
            label: "Polarhistorie – Visit Tromsø",
            url: "https://www.visittromso.no/no/polarhistorie",
          },
        ],
      },
      {
        id: "befolkningsvekst",
        date: "1800–1835",
        title: "Befolkningsvekst",
        lead:
          "Mot slutten av 1700-tallet gikk den norske delen av befolkningen i Nord-Norge ned. For å øke bosettingen ble det innført støtteordninger som skulle tiltrekke seg finske og kvenske innvandrere. Mange av dem slo seg ned i elvedaler og langs kysten, der det var mulig å drive jordbruk og fiske.",
        paragraphs: [
          "Senere ble det også innført tiltak for å få flere nordmenn til å flytte nordover. Blant annet kunne nybyggere få opptil 15 års skattefritak. Dette gjorde det mer attraktivt å bosette seg i området.",
          "Befolkningen økte særlig langs kysten og i fjordene i Troms. Her finnes det smale områder med dyrkbar jord mellom fjord og fjell. Når nye områder ble ryddet til jordbruk, førte det ofte til konflikter med sjøsamer som allerede bodde i disse områdene, som drev jordbruk og fiske. De hadde behov for beiteområder. Det skapte også problemer for reindriftssamer som kom med reinflokken til kysten om sommeren.",
          "I mange bygder måtte samer og kvener tilpasse seg en økende norsk bosetting. Dette endret både bruken av landskapet og forholdet mellom ulike grupper i området.",
          "Malangen og Balsfjord er eksempler på denne utviklingen. I Malangen økte folketallet fra 110 til 655, og i Balsfjord fra 45 til 1362 fram mot 1835. Allerede i 1801 var det lite ledig plass langs strandlinjen.",
          "Langs de smale områdene mellom fjord og fjell, der det var mulig å dyrke jord, ble det ryddet nye gårder og åkre. Dette var områder som reindriftssamene tidligere hadde brukt fritt til flytting av rein. Når disse områdene ble tatt i bruk til jordbruk, oppsto det konflikter.",
          "Den samme utviklingen skjedde også andre steder, blant annet i Lakselvbukt og i Ullsfjord.",
          "Kilde: Samenes historie (Andersen, Evjen og Ryymin)"
        ],
        sources: [
          {
            label: "Befolkningsutviklingen i Troms og i Finnmark for perioden 1567 – 1930, belyst utfra offentlig statistikk | EDL",
            url: "https://edl.no/2020/11/14/befolkningsutviklingen-i-troms-og-i-finnmark-for-perioden-1567-1930-belyst-utfra-offentlig-statistikk/"
          }
        ],
      },
      {
        id: "fornorsking",
        date: "1852–1950",
        title: "Fornorsking og assimilering",
        lead:
          "Fornorskingen tok til fra midten av 1800-tallet. Nasjonalismen var en viktig drivkraft i denne perioden. Det var en utbredt tanke at alle i landet skulle snakke samme språk og ha samme kultur.",
        paragraphs: [
          "Tidligere hadde undervisning og opplæring mange steder foregått på samisk, helt siden 1600-tallet. Prester og lærere brukte samisk språk både i skole og kirke gjennom 1700-tallet og tidlig på 1800-tallet. Utover 1800-tallet endret dette seg. Staten ønsket sterkere kontroll, og samisk språk og kultur ble i økende grad sett ned på.",
          "Fornorskingen ble etter hvert mer systematisk. Fra siste del av 1800-tallet og særlig etter 1900 ble det innført tiltak for å gjøre samer og kvener mer «norske». Samisk språk ble fjernet fra skolen, og det ble ikke lenger tillatt å bruke samisk i undervisning eller i gudstjenester. Også i det offentlige, som hos lensmenn og i kommuner, skulle norsk være eneste språk.",
          "Et viktig virkemiddel var Finnefondet, som eksisterte fra 1852 til 1921. Fondet skulle støtte arbeidet med å fornorske samer og kvener, blant annet gjennom skolen.",
          "Mange barn som bodde langt fra skolen, ble sendt til internatskoler. Der bodde de store deler av året. På internatene var det bare lov å snakke norsk. For mange førte dette til at de mistet språket sitt og fikk svekket tilknytning til egen kultur.",
          "Etter hvert fikk fornorskingen konsekvenser, og mange samer sluttet å overføre språket sitt til barna. Et eksempel er folketellingen i 1930, der over halvparten av innbyggerne i Kvænangen oppga samisk eller finsk som hjemmespråk. I 1950 var det bare én person som oppga at de snakket samisk, og én som oppga finsk.",
          "Samisk språk forsvant fra store områder. For eksempel forsvant kaldfjordsamisk, dialekten som ble snakket på Kvaløya og Ringvassøya i Troms, allerede på 1920-tallet.",
          "Fornorskingspolitikken førte ikke bare til tap av språk, men påvirket også identitet, oppvekst og livsvilkår for mange samer og kvener. Mange mistet muligheten til å bruke eget språk, og flere opplevde skam knyttet til egen bakgrunn. Dette har også hatt betydning for helse, tilhørighet og tillit til myndighetene. Konsekvensene av fornorskingen strekker seg derfor over flere generasjoner, og er fortsatt en del av bakgrunnen for arbeidet med forsoning i dag.",
          "Kilde: Samenes historie (Andersen, Evjen og Ryymin)",
          {
            type: "document",
            label: "Åpne Livet på gården i Lakselvbukt (PDF)",
            src: "documents/livet-pa-garden-i-lakselvbukt.pdf",
          }
        ],
        images: [
          {
            src: "images/image16.png",
            alt: "Historisk gruppebilde av samiske personer foran en gamme",
            caption: "PEM-BYM-00237 Gruppebilde foran gamme",
            credit: "Foto: Ukjent fotograf.",
            sourceLabel: "Perspektivet Museum",
            sourceUrl:
              "https://www.flickr.com/photos/perspektivetmuseum/11307464144/in/album-72157650251722417",
          },
        ],
        sources: [
          {
            label: "Samisk språk og språkhistorie - Samiske veivisere",
            url: "https://samiskeveivisere.no/article/samisk-sprak-og-sprakhistorie/#Utrydding-av-samisk"
          },
          {
            label: "Fornorsking av samer – Wikipedia",
            url: "https://no.wikipedia.org/wiki/Fornorsking_av_samer"
          },
          {
            label: "Fornorskinga av samene",
            url: "https://gtsvn.uit.no/freecorpus/orig/nob/facta/skuvlahistorja1/minde_n.html"
          },
          {
            label: "Fornorsking – Store norske leksikon",
            url: "https://snl.no/fornorsking"
          }
        ],
      },
      {
        id: "jordsalgsloven",
        date: "1902–1965",
        title: "Jordloven av 1902 og fornorsking av stedsnavn",
        lead:
          "Jordsalgsloven for Finnmark fra 1902 var et viktig virkemiddel i fornorskingspolitikken. Loven bestemte at bare personer som kunne snakke, lese og skrive norsk, og som brukte språket til daglig, kunne kjøpe jord.",
        paragraphs: [
          "I praksis betydde dette at mange samer og kvener ble utestengt fra å eie jord, fordi de ikke oppfylte språkkravene. Loven stilte også krav om at eiendommer skulle ha norske navn.",
          "Loven gjaldt fra 1902 til 1965. Den førte til at mange mistet muligheten til å eie og bruke land på samme måte som før. For mange samer innebar dette at de måtte gi opp språk og identitet for å få tilgang til jord.",
          "Selv om jordsalgsloven av 1902 ikke gjaldt i Tromsø, påvirket den samme politikken og tankegangen også utviklingen der.",
          "Arbeidet med å fornorske samiske stedsnavn startet allerede før 1902. I 1876 kom det en bestemmelse knyttet til jordsalg i Finnmark som åpnet for å endre samiske navn til norske. Senere ble denne praksisen videreført og forsterket.",
          "Kartlegging og navnearbeid ble ofte gjort ved at navn ble skrevet ned slik de ble oppfattet av norskspråklige. Dette førte til at mange navn ble endret eller mistet sin opprinnelige betydning og tilknytning til landskapet.",
          "Fra gammelt av har det vært vanlig å gi navn til steder ut fra hvordan naturen ser ut, hvilke funksjoner stedet har, eller hvem som har vært knyttet til området. Når man ferdes i naturen, er det viktig å bruke riktige ord for å kunne forklare hvor man er.",
          "Også i byer finnes det mye natur. Samiske stedsnavn beskriver ofte naturen på en presis måte og gir informasjon om hvordan landskapet ser ut der man befinner seg."
        ],
        sources: [
          {
            label: "Samiske stedsnavn - Samiske veivisere",
            url: "https://samiskeveivisere.no/article/samiske-stedsnavn/"
          },
          {
            label: "Samiske stedsnavn - Sametinget",
            url: "https://sametinget.no/sprak/samiske-stedsnavn/"
          },
          {
            label: "Samiske geografiske navn i Tromsø – Wikipedia",
            url: "https://no.wikipedia.org/wiki/Samiske_geografiske_navn_i_Troms%C3%B8"
          }
        ],
      },
      {
        id: "motstand",
        date: "1904–1917",
        title: "Økende motstand mot fornorskingspolitikken",
        lead:
          "Motstanden mot fornorskingspolitikken vokste gradvis utover slutten av 1800-tallet og begynnelsen av 1900-tallet. Flere samer begynte å organisere seg og arbeide for språk, kultur og rettigheter.",
        paragraphs: [
          "Et viktig vendepunkt var det første samiske landsmøtet, som ble holdt i Trondheim 6. februar 1917. Elsa Laula Renberg var en av initiativtakerne. Møtet samlet samer fra flere områder og tok opp saker som rettigheter, skole og levekår. Denne organiseringen la grunnlaget for det samiske politiske arbeidet vi ser i dag.",
          "Allerede i 1904 ble avisen Sagai Muittalægje startet. Anders Larsen var redaktør, og han samarbeidet blant annet med Isak Saba. Avisen formidlet nyheter og bidro til kunnskap og bevissthet i den samiske befolkningen.",
          "I 1906 skrev Isak Saba diktet Sámi soga lávlla, som senere ble samenes nasjonalsang. Samme år ble han valgt inn på Stortinget som den første samiske representanten, og han satt der fram til 1912. Saba arbeidet hele livet for samiske rettigheter.",
          "Denne tidlige motstanden er en viktig del av grunnlaget for dagens forsoningsarbeid. Den viser at samer selv tok initiativ til å bevare språk, kultur og rettigheter, til tross for sterkt press fra staten.",
          "I dag bygger samisk politisk arbeid videre på denne historien. Opprettelsen av Sametinget i 1989 og styrkingen av samiske rettigheter er resultat av en lang kamp for språk, kultur og selvbestemmelse. Forsoning handler både om å erkjenne at samer har blitt utsatt for urett, og om å anerkjenne den motstanden og det arbeidet samer selv har stått for. Det betyr å gi denne historien en tydelig plass, lytte til samiske erfaringer og sørge for at samiske perspektiver blir en naturlig del av samfunnet i dag.",
          "I 1912 ga Anders Larsen ut den første samiske romanen, Beaiveálgu («Dagen gryr»). Romanen beskriver hvilke konsekvenser fornorskingspolitikken hadde for det samiske språket og for samenes selvbilde. Målet med boka var å motvirke følelsen av mindreverd mange samer opplevde i møte med det norske samfunnet, og å protestere mot forakten som fantes mot samer.",
          "I 1920 skrev han i avisen Nuorttanaste:«Ofte er det slik at mennesker som vet lite og bare kjenner sitt eget språk, mener at andre språk er stygge. Det er dumt å skamme seg over å snakke samisk.»"
        ],
        sources: [
          {
            label: "fornorsking – Store norske leksikon",
            url: "https://snl.no/fornorsking"
          },
          {
            label: "Alta-saken – politisk konflikt 1968-1982 – Store norske leksikon",
            url: "https://snl.no/Alta-saken"
          }
        ],
      },
      {
        id: "reinbeite-1919",
        date: "1919–1939",
        title: "Reinbeitekonvensjonen av 1919",
        lead:
          "Reinbeitekonvensjonen mellom Norge og Sverige fra 1919 fikk store konsekvenser for reindriftssamene i Troms. Avtalen begrenset retten til å flytte rein over grensen, og mange mistet tilgangen til de tradisjonelle sommerbeitene på norsk side, blant annet på øyene i Tromsøområdet.",
        paragraphs: [
          "Tidligere hadde reindriftssamene flyttet mellom vinterbeite i Sverige og sommerbeite langs kysten i Troms. Etter konvensjonen ble denne flyttingen i stor grad stanset. Flyttleiene, blant annet over Rávdnji (Rystraumen), ble ikke lenger brukt.",
          "I 1923 ble det gjennomført omfattende tvangsflyttinger. Reindriftssamer fra Karesuando-området, som hadde brukt sommerbeiter i Troms, ble flyttet sørover i Sverige. Også deler av Tromsdal-siidaen ble berørt. Dette førte til store endringer for både samene og lokalsamfunnene, og flere områder mistet en viktig del av sin samiske befolkning.",
          "Noen familier ble værende på norsk side, men måtte da gå over til helårs reindrift. I 1925 ble det innført sanksjoner mot dem som ikke hadde flyttet, og noen måtte betale bøter og slakte rein for å klare det.",
          "Den siste gangen reindriftssamer fra Tromsdalen og Karesuando-området brukte sommerbeitene i Tromsdalen, var i 1939.",
          "Denne historien er viktig i arbeidet med forsoning i dag. Den viser hvordan statlige beslutninger førte til tap av leveområder, tvangsflytting og brudd i tradisjonelle livsformer. Forsoning handler derfor også om å gjøre denne historien kjent, forstå konsekvensene den fikk for mennesker og lokalsamfunn, og anerkjenne at slike inngrep fortsatt påvirker samiske liv og rettigheter i dag.",
          {
            type: "document",
            label: "Åpne Tromsdalen siida (PDF)",
            src: "documents/tromsdalen-siida.pdf",
          }
        ],
        sources: [
          {
            label: "Norsk-svensk reinbeitekonvensjon – Sametinget",
            url: "https://sametinget.no/naring/reindrift/norsk-svensk-reinbeitekonvensjon/",
          },
        ],
      },
    ],
  },
  {
    id: "1919-1964",
    label: "1919–1964",
    title: "Krig, gjenreisning og nye rammer",
    intro:
      "Krigsårene og nye statsavtaler formet både byen og de samiske næringene rundt den.",
    accent: "green",
    events: [
      {
        id: "andre-verdenskrig",
        date: "1940–1945",
        title: "Andre verdenskrig",
        lead:
          "Under andre verdenskrig (1940–1945) fikk Tromsø en viktig rolle i Nord-Norge. Da Tyskland angrep Norge i april 1940, ble Tromsø i en kort periode brukt som hovedstad for det frie Norge. Kongen og regjeringen oppholdt seg i området før de måtte flykte videre til Storbritannia.",
        paragraphs: [
          "Troms og områdene rundt var også viktige i krigshandlingene i nord. Norske og allierte styrker kjempet mot tyske styrker, blant annet i kampene om Narvik våren 1940. Tromsø fungerte som et viktig støttepunkt i denne perioden.",
          "Under krigen ble mange bygninger i Tromsø sentrum bevart, blant annet fordi tyskerne ønsket å bruke byen videre og ikke ødelegge den. Dette gjør at Tromsø i dag har flere eldre trehus enn mange andre byer i nord.",
          "Mot slutten av krigen, høsten 1944, gjennomførte tyskerne en tvangsevakuering og nedbrenning av Finnmark og Nord-Troms. Mange mennesker flyktet sørover, og Tromsø tok imot et stort antall evakuerte. Byen ble preget av trangboddhet og mangel på ressurser, men også av hjelp og samarbeid.",
          "For samene fikk krigen også store konsekvenser. Mange samiske områder ble ødelagt under nedbrenningen, og både bosetting, næring og kulturgrunnlag ble rammet. Nazistenes syn på samer var preget av raseideologi. Samer ble sett på som en «lavere» folkegruppe, men samtidig ikke oppfattet som en direkte trussel. Derfor ble de ikke systematisk forfulgt på samme måte som for eksempel jøder. Likevel bidro krigen og den tyske politikken til store tap og belastninger for samiske samfunn.",
          "Kongen og kronprinsen oppholdt seg i en hytte i Takelvdalen i Balsfjord, mens generalstaben hadde base på Nordmo gård i Målselv. Regjeringen oppholdt seg både i Balsfjord og i Tromsø.",
          "Under resten av krigen var den tyske okkupasjonsmakten svært aktiv i nord. Gestapo hadde sitt hovedkvarter i Tromsø, det ble opprettet en fangeleir i området, og det ble bygget kystfort blant annet på Trondenes."
        ],
        images: [
          {
            src: "images/image19.png",
            alt: "Tyske soldater og naziflagg utenfor Gestapos hovedkvarter i Tromsø",
            caption: "Gestapos hovedkontor i Tromsø. Her sleit nazistene mer enn ellers med å finne lokalbefolkning som ville jobbe for dem.",
            credit: "Foto: Simon Orchard/Nådeløse nordmenn (Gestapo 1940-1945)",
            sourceLabel: "NRK Troms og Finnmark",
            sourceUrl:
              "https://www.nrk.no/tromsogfinnmark/hva-vet-du-om-andre-verdenskrig-i-nord-norge_-1.12301748",
          },
          {
            src: "images/image20.png",
            alt: "Klasserom ved Tromsø offentlige høyere almenskole merket av tyske soldater",
            caption:
              "PEM-LTH-00024 Tyske soldater har satt sitt preg på veggen i Tromsø offentlige høiere almenskole\n\n\"Wir sind die herren der Well\" (Vi er verdens herrer) stod det skrevet på veggen i et av klasserommene på Tromsø offentlige høiere almenskole (i dag Kongsbakken videregående skole). Bildet er tatt av skolens rektor, Vilhjelm Riksheim, da tyskerene gav elevene fri julen 1940.",
            credit: "Foto: Vilhjelm Riksheim",
            sourceLabel: "Perspektivet Museum",
            sourceUrl:
              "https://www.flickr.com/photos/perspektivetmuseum/26808339945/in/album-72157712887583482",
          },
        ],
        sources: [
          {
            label: "kapittel. 5 | 2. verdenskrig Kommunedelplan for kulturmiljø 2023-2032",
            url: "https://experience.arcgis.com/experience/9ccbb04a28ca4d949b9f8848d748fad1/page/kapittel_-5?block_id=layout_460_block_32#widget_807=active_datasource_id:dataSource_19,center:654200.0350654175%2C7737166.1694830945%2C25833,scale:315893.5948921374,level:7.025665031924142,rotation:0,viewpoint:%7B%22rotation%22%3A0%2C%22scale%22%3A315893.5948921374%2C%22targetGeometry%22%3A%7B%22spatialReference%22%3A%7B%22latestWkid%22%3A25833%2C%22wkid%22%3A25833%7D%2C%22x%22%3A654200.0350654175%2C%22y%22%3A7737166.1694830945%7D%7D"
          },
          {
            label: "Flere bilder fra andre verdenskrig: https://www.flickr.com/photos/perspektivetmuseum/albums/72157712887583482/with/27115927150/",
            url: "https://www.flickr.com/photos/perspektivetmuseum/albums/72157712887583482/with/27115927150/"
          }
        ],
      },
      {
        id: "reinbeite-1949",
        date: "1949–1950-årene",
        title: "Reinbeitekonvensjonen av 1949",
        lead:
          "Reinbeitekonvensjonen fra 1919 ble senere revidert. Etter forhandlinger mellom Norge og Sverige ble en ny avtale inngått 14. desember 1949.",
        paragraphs: [
          "Den nye konvensjonen førte til ytterligere begrensninger i reindriften i Troms. Flere områder mistet status som reinbeite. I Troms gjaldt dette blant annet flere distrikter, deriblant distrikt 9, som Tromsdalen var en del av. Dette distriktet lå langt fra riksgrensen, og hadde i perioder ikke vært brukt av svensk reindrift, blant annet som følge av andre verdenskrig.",
          "Konsekvensen var at tradisjonell bruk av disse områdene ble redusert eller opphørte. Dette førte til store endringer i reindriften og i hvordan landskapet ble brukt.",
          "Fra 1950-tallet etablerte Oskal-familien reindrift i Troms, med sommerbeite i Tromsdalen og vinterbeite i Mauken. Dette fikk stor betydning for området, fordi reindriften igjen ble en synlig og aktiv del av landskapet rundt Tromsø. Oskal-familien bidro til å videreføre samisk kunnskap om natur, beite og flyttemønstre, tilpasset nye rammer etter at grensekryssende reindrift i stor grad opphørte.",
          "Reindriften som ble etablert etter krigen viser hvordan samiske næringer har tilpasset seg store inngrep og endringer, samtidig som tradisjoner er blitt videreført. Dette er også en viktig del av historien om samisk tilstedeværelse i Tromsøområdet i nyere tid."
        ],
        sources: [
          {
            label: "Norsk-svensk reinbeitekonvensjon - Sametinget",
            url: "https://sametinget.no/naring/reindrift/norsk-svensk-reinbeitekonvensjon/"
          },
          {
            label: "Kilden - reindrift",
            url: "https://kilden.nibio.no/?topic=reindrift&zoom=3.4&x=741601.53&y=7707479.34&bgLayer=graatone&layers=reindrift_reinbeitedistrikt,reindrift_reinbeitedistriktgrenser,reindrift_distriknavn&layers_opacity=0.75,0.75,0.75&layers_visibility=true,true,true"
          },
        ],
      },
      {
        id: "samisk-undervisning",
        date: "1959–1985",
        title: "Rett til samisk undervisning",
        lead:
          "Fram til 1959 var det lovfestet at all undervisning skulle foregå på norsk. På 1960-tallet begynte dette å endre seg. I 1967 kom de første tilbudene om samisk opplæring i folkeskolen.",
        paragraphs: [
          "I 1969 ble det opprettet et gymnas med samisk undervisning i Karasjok. I 1985 ble det mulig å ha samisk som hovedspråk i hele grunnskolen.",
          "I 1974 ble Nordisk Samisk Institutt etablert i Kautokeino. Universitetet i Tromsø har siden starten hatt fagmiljøer innen samisk språk og kultur. I Tromsø finnes også Gáisi språksenter, som arbeider med å styrke samisk språk."
        ],
        sources: [
          {
            label: "Retten til opplæring i og på samisk | udir.no",
            url: "https://www.udir.no/regelverk-og-tilsyn/skole-og-opplaring/retten-opplaring-samisk/"
          }
        ],
      },
    ],
  },
  {
    id: "1964-i-dag",
    label: "1964–i dag",
    title: "Storkommune, rettigheter og forsoning",
    intro:
      "Den moderne kommunen vokser fram samtidig som samiske språk, rettigheter og perspektiver får en tydeligere plass.",
    accent: "violet",
    events: [
      {
        id: "kommunegrensene",
        date: "1964",
        title: "Tromsø får dagens kommunegrenser",
        lead:
          "I 1964 fikk Tromsø kommune sine nåværende grenser. Da ble kommunene Tromsøysund, Hillesøy og Ullsfjord slått sammen med Tromsø. Dette gjorde kommunen mye større, både i areal og i folketall.",
        paragraphs: [
          "Sammenslåingen førte også til at andelen samiske og kvenske innbyggere i kommunen økte. Mange av disse bodde i bygder og fjordområder som nå ble en del av Tromsø kommune.",
          "Dette skjedde i en periode der fornorskingspolitikken var i ferd med å avta, men fortsatt preget samfunnet. Mange samer og kvener hadde opplevd nedvurdering av språk og kultur. I skolen var det fortsatt vanlig at undervisningen foregikk kun på norsk, og mange barn fikk ikke opplæring i eget språk.",
          "Samtidig var Tromsø i sterk utvikling. Allerede fra begynnelsen av 1960-tallet startet en mer omfattende byplanlegging. Et viktig tiltak var åpningen av Tromsøbrua i 1960, som knyttet Tromsøya sammen med fastlandet og gjorde det lettere å bo og arbeide i ulike deler av kommunen.",
          "Utbygging av veier, boliger og infrastruktur førte til videre vekst. Samtidig påvirket dette bruken av natur og områder som tidligere hadde vært viktige for samisk næringsliv, blant annet reindrift.",
          "I dag er denne historien viktig i arbeidet med forsoning. Den viser hvordan politiske beslutninger og samfunnsutvikling har påvirket samiske og kvenske samfunn. Forsoning handler derfor både om å kjenne denne historien og om å sørge for at samisk og kvensk språk, kultur og rettigheter får en tydelig plass i Tromsø i dag."
        ],
        images: [
          {
            src: "images/image21.png",
            alt: "Kart over Tromsøs kommunegrense fra 1955 til 1964",
            caption: "Kommunegrensen 1955–1964.",
            credit: "Kilde: Byarkivet i Tromsø",
            sourceLabel: "Byarkivet i Tromsø",
          },
          {
            src: "images/image22.png",
            alt: "Kart over Tromsø kommune etter sammenslåingen i 1964",
            caption: "Kommunegrensen 1964–2008, med senere fradelt område markert i rødt.",
            credit: "Kilde: Byarkivet i Tromsø",
            sourceLabel: "Byarkivet i Tromsø",
          },
        ],
        sources: [
          {
            label: "Kommunedelplan for kulturmiljø 2023–2032",
            url: "https://experience.arcgis.com/experience/9ccbb04a28ca4d949b9f8848d748fad1/",
          },
        ],
      },
      {
        id: "universitetet",
        date: "1968 / 1972",
        title: "Universitetet i Tromsø",
        lead:
          "Universitetet i Tromsø ble vedtatt opprettet i 1968 og åpnet i 1972. Det ble lagt til Tromsø blant annet for å styrke utdanning og kompetanse i Nord-Norge, særlig innen yrker som lege, lærer og prest. Tromsø hadde allerede forskningsmiljøer gjennom Tromsø Museum og Nordlysobservatoriet.",
        paragraphs: [
          "Etableringen av universitetet fikk stor betydning for hele landsdelen. For første gang ble det mulig å ta høyere utdanning i nord uten å flytte sørover. Dette gjorde utdanning mer tilgjengelig for mange.",
          "For samer og kvener var dette spesielt viktig. Flere kunne ta utdanning nær hjemstedet, noe som gjorde det lettere å bevare språk, kultur og tilknytning til egne områder. Etter hvert førte dette til at flere tok høyere utdanning og deltok i yrker som lærer, forsker og helsearbeider.",
          "Universitetet har også bidratt til å bygge opp kunnskap om samiske forhold. Forskning og undervisning innen samisk språk, kultur og samfunn har vært viktig for å styrke samisk identitet og rettigheter.",
          "I dag er dette en viktig del av forsoningsarbeidet. Utdanning og kunnskap gjør det mulig å forstå historien, inkludert fornorskingen og konsekvensene den har hatt. Samtidig gir universitetet rom for samiske og kvenske perspektiver i forskning, undervisning og samfunnsdebatt.",
          "Forsoning handler ikke bare om å se tilbake, men også om å bygge et samfunn der flere stemmer blir hørt. Universitetet i Tromsø spiller en viktig rolle i dette arbeidet, ved å utdanne nye generasjoner med kunnskap om historie, språk og kultur i nord."
        ],
        images: [
          {
            src: "images/University_of_Tromso_Breivika_campus.jpeg",
            alt: "Bygninger rundt et grønt uteområde med gangveier og trær.",
            caption: "Universitetet i Tromsø, campus i Breivika.",
            credit: "Edricson, via Wikimedia Commons",
            sourceLabel: "CC BY-SA 3.0",
            sourceUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
          },
        ],
        sources: [
          {
            label: "UiT Norges arktiske universitet | UiT",
            url: "https://uit.no/startsida"
          }
        ],
      },
      {
        id: "bybrannen",
        date: "14. mai 1969",
        title: "Den store bybrannen i 1969",
        lead:
          "Den store bybrannen i Tromsø skjedde natt til 14. mai 1969. Hele 25 forretningsgårder og brygger i sentrum brant ned.",
        paragraphs: [
          "Området langs kaia bestod av mange gamle trebygninger. Gjennom rundt 150 år hadde det utviklet seg til et tett og uoversiktlig område med smale smug og passasjer mellom brygger, lager og boliger. Gatene var så trange at biler knapt kunne komme fram.",
          "Mellom bygningene lå det mye papp og papirsøppel. Sammen med trehusene gjorde dette området svært brannfarlig. Forholdene var derfor blant de mest utsatte for en storbrann.",
          "Natt til 14. mai var det stille og rolig i byen. To studenter gikk langs kaiområdet da brannen startet. I løpet av kort tid spredte ilden seg raskt i det tette og brannfarlige miljøet.",
          "Brannen førte til store ødeleggelser, men ble også et vendepunkt. Etter brannen ble det gjort endringer i byplanlegging, brannsikkerhet og byggeskikk i Tromsø sentrum.",
          "Nrk skriver følgende om bybrannen: Klokken 02.30 natt til 14. mai 1969 rykker fire mann fra brannvesenet i Tromsø ut. Det er brann i en av de gamle bryggene på sørsiden av Torget. De gamle bryggene står tett, og for de fire brannmennene viser det seg fort å være en umulig oppgave å få kontroll over flammene.",
          "Klokken ti på halv seks uler Sivilforsvarets sirener over Tromsø. Lytt på radio, NRK går på lufta med instrukser til byens befolkning.",
          "Brannen utvikler seg etter hvert i en uhyggelig retning, og en kraftig eksplosjon i et lager av maling og andre kjemikalier på vestsida av Storgata øker dramatisk omfanget av brannen.",
          "Først klokken kvart på åtte om morgenen er brannen under kontroll. Etterslukkingen varte i hele ti dager, brannårsaken er fortsatt ukjent."
        ],
        images: [
          {
            src: "images/image23.png",
            alt: "Flammer og røyk i Storgata under bybrannen i Tromsø i 1969",
            caption:
              "PEM-CHA-00314 Storgata under bybrannen i 1969\n\nJensens Skotøimagasin A/S lå i Storgata 79 og var et av flere bygg som ble totalskadet under bybrannen i 1969.",
            credit: "Foto: Olav Aasegg",
            sourceLabel: "Perspektivet Museum",
            sourceUrl:
              "https://www.flickr.com/photos/perspektivetmuseum/22716234791/in/album-72157630232354278",
          },
        ],
        sources: [
          {
            label: "Da Tromsø sto i flammer – Troms og Finnmark",
            url: "https://www.nrk.no/tromsogfinnmark/xl/da-tromso-sto-i-flammer-1.14550033"
          },
          {
            label: "https://www.flickr.com/photos/perspektivetmuseum/albums/72157630232354278/",
            url: "https://www.flickr.com/photos/perspektivetmuseum/albums/72157630232354278/"
          },
          {
            label: "Kilde: www.nrk.no/kanal/nrk_gull/1.6605468",
            url: "http://www.nrk.no/kanal/nrk_gull/1.6605468"
          }
        ],
      },
      {
        id: "alta-og-sametinget",
        date: "1979–2005",
        title: "Økende oppmerksomhet for det samiske",
        lead:
          "Alta-aksjonen rundt 1979 førte til en viktig endring i norsk politikk overfor samene. Aksjonen skapte stor debatt om samiske rettigheter og naturinngrep, og førte til økt politisk oppmerksomhet.",
        paragraphs: [
          "I 1989 ble Sametinget åpnet av kong Olav V. Dette ga samene et eget folkevalgt organ. I 2005 kom Finnmarksloven, som gir samene rett til medbestemmelse over bruk av land og vann i Finnmark."
        ],
        images: [
          {
            src: "images/alta-stilla.jpg",
            alt: "Demonstranter i kofte ved anleggsmaskin under Alta-aksjonen i Stilla.",
            caption: "Folkeaksjonen mot Altautbyggingen demonstrerer i Stilla.",
            credit: "Riksarkivet, via Wikimedia Commons. Arkivreferanse: Kripos_Uc2_108. Ingen kjente opphavsrettslige begrensninger.",
            sourceLabel: "Wikimedia Commons",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Folkeaksjonen_mot_Altautbyggingen_(6263033681).jpg",
          },
        ],
        sources: [
          {
            label: "Alta-saken – politisk konflikt 1968-1982 – Store norske leksikon",
            url: "https://snl.no/Alta-saken"
          },
          {
            label: "Finnmarksloven – Store norske leksikon",
            url: "https://snl.no/Finnmarksloven"
          }
        ],
      },
      {
        id: "nasjonaldagen",
        date: "1992–1993",
        title: "Samenes nasjonaldag",
        lead:
          "På samenes konferanse i 1992 ble det bestemt at 6. februar skal være felles nasjonaldag for samene i Norge, Sverige, Finland og Russland. Datoen er valgt fordi det første samiske landsmøtet ble holdt 6. februar 1917 i Trondheim.",
        paragraphs: [
          "Nasjonaldagen ble markert for første gang i 1993 og blir feiret i Tromsø hvert år. Samme år ble FNs internasjonale urbefolkningsår åpnet i Karasjok."
        ],
        sources: [
          {
            label: "Nasjonaldag og nasjonale symboler - Sametinget",
            url: "https://sametinget.no/om-sametinget/nasjonaldag-og-nasjonale-symboler/"
          },
          {
            label: "samenes nasjonaldag – Store norske leksikon",
            url: "https://snl.no/samenes_nasjonaldag"
          }
        ],
      },
      {
        id: "kongens-unnskyldning",
        date: "1997",
        title: "Kong Harald ber om unnskyldning",
        lead:
          "I 1997 ba kong Harald V om unnskyldning til samene for den urett staten hadde påført dem. Han understreket at Norge er bygd på territoriet til to folk: samene og nordmennene.",
        paragraphs: [],
        sources: [
          {
            label: "– Kongens ord betyr mye for samene – NRK Sápmi - samiske nyheter, kultur og underholdning",
            url: "https://www.nrk.no/sapmi/_-kongens-ord-betyr-mye-for-samene-1.11966176"
          }
        ],
      },
      {
        id: "samisk-i-byen",
        date: "2003–i dag",
        title: "Tromsø – «hovedstad» i Nord-Norge",
        lead:
          "Tromsø har gjennom sin utvikling blitt et viktig sentrum i Nord-Norge, og omtales ofte som landsdelens «hovedstad». Byen har hatt sterk befolkningsvekst og tiltrekker seg mennesker fra hele regionen.",
        paragraphs: [
          "Tromsø er også en av byene i Norge med en stor samisk befolkning. I dag bor mange samer i by, og begrepet «bysame» brukes om dette. Urbaniseringen har endret forståelsen av hva det vil si å være same, og samiske språk og kultur er i dag synlige også i bymiljøet.",
          // Inger Lise oppgir Prestvannet skole i Tromsø som kilde til elevtallet. Skoleår og om tallet omfatter både første- og andrespråkselever, avventes.
          "I Tromsø er det rundt 330 elever i grunnskolen som får opplæring i samisk. Den første samiske klassen ble etablert i 2003, og tilbudet har vokst jevnt siden. I dag finnes det egne samiskklasser ved Prestvannet skole (1.–7. trinn) og Grønnåsen skole (8.–10. trinn). I tillegg får flere elever samiskopplæring ved andre skoler i byen.",
          "Det er positivt at stadig flere velger samisk språk i skolen. Dette bidrar til å styrke språket, identiteten og kunnskapen om samisk kultur hos nye generasjoner.",
          "Det tilbys også opplæring i kvensk språk, noe som er viktig for å bevare og utvikle kvensk språk og kultur i regionen. Kvenene har vært en viktig del av bosetting, arbeid og kulturliv i Tromsø og regionen rundt. De slo seg særlig ned i fjord- og dalområdene, og bidro til utviklingen av jordbruk, fiske og handel. I dag er kvener anerkjent som en nasjonal minoritet i Norge. Likevel er kunnskapen om kvensk språk og kultur ofte mindre enn kunnskapen om samisk. For å få en mer helhetlig forståelse av Tromsøs historie, er det derfor viktig å synliggjøre også den kvenske tilstedeværelsen og erfaringene.",
          "I dag er rettighetene til både samer og kvener forankret i Grunnloven, sameloven og i internasjonale avtaler, blant annet gjennom FN. Dette gir et viktig grunnlag for videre utvikling av språk, kultur og deltakelse i samfunnet.",
          "På mange områder går Tromsø foran i denne utviklingen, og viser hvordan styrking av samisk og kvensk språk og kultur er en viktig del av det konkrete forsoningsarbeidet i dag."
        ],
        sources: [
          {
            label: "Retten til opplæring i og på samisk – Udir",
            url: "https://www.udir.no/regelverk-og-tilsyn/skole-og-opplaring/retten-opplaring-samisk/",
          },
        ],
      },
      // Word-dokumentet oppgir ikke et årstall for «Lagarbeid».
      {
        id: "lagarbeid",
        date: "",
        title: "Lagarbeid",
        lead: "Utviklingen av Tromsø fra en liten kjøpstad til dagens kommune har vært et felles arbeid. Mennesker fra hele kommunen, med ulik bakgrunn og erfaring, har bidratt til å bygge byen slik den er i dag. Underveis har det vært både framgang og utfordringer for mange.",
        paragraphs: [
          "Alle som bor i Tromsø, tar med seg sin kultur og sine verdier. Fellesskapet bygger på at byen er mangfoldig, og at alle har de samme rettighetene og mulighetene til å leve gode liv, uavhengig av bakgrunn. Dette er også en grunnleggende menneskerett.",
          "Selv om noen unge samer fortsatt opplever at det ikke alltid er like lett å være synlig med språk og kultur i byen, har situasjonen endret seg mye. I dag har mange unge samer større frihet til å definere sin egen identitet og uttrykke hva det vil si å være same. Samtidig er det viktig at hele samfunnet bidrar til å skape rom for dette, slik at framtiden formes i fellesskap.",
          "I Tromsø blir samisk tilstedeværelse stadig tydeligere. Dette vises blant annet gjennom reiseliv, der samisk kultur og historie formidles, og gjennom økt interesse for kortreist mat basert på tradisjonelle råvarer som rein, fisk og bær. Det finnes også butikker og designere som tilbyr samiske klær og produkter, inspirert av tradisjonelt håndverk som duodji.",
          "Etter hvert som interessen for og tilknytningen til samisk kultur vokste i bygdene, oppsto et tydelig behov for å gjenskape den lokale kofte-tradisjonen. Dette la grunnlaget for arbeidet med å rekonstruere Ullsfjordkofta, et plagg med sterk kulturell og historisk forankring i området.",
          "Arbeidet var et strukturert samarbeid mellom Språksenteret, Husflidslaget og Lakselvbukt sameforening. Det ble etablert en egen arbeidsgruppe, som også mottok økonomisk støtte fra Sametinget for å gjennomføre prosjektet.",
          "Målet var å ferdigstille en prototype av Ullsfjordkofta tidlig på 2000-tallet. Rekonstruksjonen bygget på et grundig kildearbeid: gjennomgang av historiske dokumenter, intervjuer med tidsvitner og analyse av eldre fotografier. På bakgrunn av dette materialet ble det til slutt gjort faglig funderte valg som fastsatte koftas utforming, og dermed bidro til å revitalisere en viktig del av den lokale samiske kulturarven.",
          "Det arbeides aktivt med å ta vare på og løfte fram kulturminner som har samisk tilknytning. Dette kan være spor etter gammer, flyttleier for rein, boplasser, stedsnavn og andre tegn på hvordan området har vært brukt gjennom generasjoner. Ved å synliggjøre samisk tilstedeværelse og historie i et område mange bruker i dag, bidrar prosjektet til økt kunnskap, anerkjennelse og respekt for samisk kultur og bruk av naturen.",
          "I tillegg finnes det mange samiske og kvenske foreninger, lag og institusjoner i Tromsø. Disse arbeider med språk, kultur, kunst, ungdomsarbeid og møteplasser for ulike generasjoner. Eksempler er språksentre, kulturorganisasjoner og interessegrupper som bidrar til å holde språk og tradisjoner levende.",
          "Denne utviklingen er viktig i forsoningsarbeidet. Når samisk og kvensk språk og kultur får være synlig og en naturlig del av bylivet, bidrar det til økt kunnskap, respekt og likeverd."
        ],
        images: [
          {
            src: "images/ullsfjordkoftegutt.png",
            alt: "Barn i blå kofte med røde og hvite detaljer står ved vannet.",
            caption: "Gutt i Ullsfjordkofte.",
            credit: "Learnlab",
          },
        ],
        sources: []
      },
      {
        id: "sannhetskommisjonen",
        date: "1. juni 2023",
        title: "Sannhets- og forsoningskommisjonen",
        lead:
          "Sannhets- og forsoningskommisjonen ble opprettet for å undersøke fornorskingspolitikken og uretten mot samer, kvener/norskfinner og skogfinner. Kommisjonen samlet inn kunnskap og personlige fortellinger om hvordan språk, kultur og rettigheter ble svekket. Rapporten viser hvilke konsekvenser dette har hatt, både for enkeltmennesker og samfunn. Den peker også på at mange fortsatt opplever utenforskap og diskriminering. Kommisjonen foreslår tiltak for å styrke språk, kultur og kunnskap.",
        paragraphs: [
          "Målet er å legge grunnlag for forsoning og et mer inkluderende samfunn. Ved å dokumentere både urett og erfaringer gir rapporten et felles utgangspunkt for dialog, ansvar og konkrete tiltak videre.",
          "Kommisjonen avga sin rapport til Stortinget 1. juni 2023."
        ],
        sources: [
          {
            label: "Sannhets- og forsoningskommisjonens rapport - Sametinget",
            url: "https://sametinget.no/sannhets-og-forsoningskommisjonens-rapport/"
          }
        ],
      },
      {
        id: "forsoning",
        date: "Nå og framover",
        title: "Forsoning i Tromsø – hva betyr det, og hvordan gjør vi det?",
        lead:
          "Forsoning i Tromsø tar utgangspunkt i sannhet. Historien viser at samer og kvener har vært en del av området i lang tid, og at fornorskingspolitikken fikk store konsekvenser for språk, kultur og livsgrunnlag. Å kjenne denne historien gir et felles grunnlag for å forstå dagens situasjon og relasjoner.",
        paragraphs: [
          "I dag beskrives Tromsø ofte som en mangfoldig by, der mange har positive holdninger til samer og kvener. Selv om mange i Tromsø har positive holdninger til samer og kvener, forekommer det fortsatt hets og diskriminering. Dette kan skje både i hverdagslivet, i skolen, på arbeidsplasser, i det offentlige rom og på nett. Særlig personer som er synlige som samer, for eksempel gjennom språk eller bruk av kofte, kan oppleve negative kommentarer eller holdninger. Dette viser at historiske holdninger fortsatt kan påvirke dagens samfunn, og at arbeidet med respekt og likeverd ikke er avsluttet.",
          "Det finnes også forestillinger om at samer har «særrettigheter». I praksis handler dette om at samer, som urfolk, har rettigheter som er annerledes forankret enn majoritetens. Det er rettigheter som er tilpasset en annen historisk og rettslig posisjon.",
          "Forsoning kan forstås som en prosess der majoritetssamfunnet i større grad tar inn over seg denne historien og disse perspektivene. Samtidig skjer forsoning i møte mellom mennesker – gjennom kunnskap, dialog og erfaringer i hverdagen. Undersøkelser viser at økt kunnskap ofte henger sammen med mer nyanserte og positive holdninger.",
          "Kvenene, som nasjonal minoritet, er også en del av dette bildet. De er ofte mindre synlige i offentligheten, og mange har begrenset kunnskap om kvensk historie og kultur. En bredere forståelse av både samiske og kvenske erfaringer kan bidra til et mer helhetlig forsoningsarbeid.",
          "I praksis kan forsoning i Tromsø komme til uttrykk gjennom:",
          "økt kunnskap i skole, arbeidsliv og offentlighet",
          "større synlighet av samisk og kvensk språk og kultur",
          "åpne samtaler om historie, erfaringer og samtid",
          "tydelig avstand til hets og nedsettende ytringer",
          "Forsoning handler også om hvordan man ser framover. Tromsø har lange tradisjoner som møteplass mellom ulike folk og kulturer. I dag kan dette mangfoldet forstås som en ressurs, der flere historier og identiteter får plass side om side.",
          "I dag finnes det mange arenaer i Tromsø som bidrar til å styrke samisk og kvensk språk og kultur. Dette gjelder blant annet skoler, språksentre, universitetet, kulturinstitusjoner, foreninger og ulike møteplasser. Her arbeides det med språk, kunst, historieformidling og identitet. Slike arenaer er viktige i forsoningsarbeidet, fordi de skaper synlighet, kunnskap og fellesskap. Gjennom dette arbeidet utvikles Tromsø videre som en by der ulike historier og perspektiver får plass side om side.",
          "Forsoning i Tromsø kan dermed forstås som en pågående prosess – forankret i sannhet, utviklet gjennom kunnskap, og levd i fellesskapet."
        ],
        images: [
          {
            src: "images/forsoning.png",
            alt: "Snødekt havneområde med båter, bro og en opplyst bygning foran en fjellside.",
            caption: "",
            credit: "Adobe Stock · Filnr. 318703415",
          },
        ],
        sources: [
          // Uavklart: «Rapport-2026-2-Undersokelse-om-samehets-og-holdninger-til-samer-og-kvener-norskfinner.pdf» har bare en lokal filadresse i Word.
          {
            label: "Sannhets- og forsoningskommisjonens rapport – Sametinget",
            url: "https://sametinget.no/sannhets-og-forsoningskommisjonens-rapport/",
          },
        ],
      },
    ],
  },
];

const allTimelineImages = [
  heroImage,
  ...timelineEras.flatMap((era) =>
    era.events.flatMap((event) => event.images ?? []),
  ),
];

const page = {
  openImage: "Forstørr bilde",
  imageDialogTitle: "Bildeforstørrelse",
  closeImage: "Lukk",
  openImageFile: "Åpne bildefilen i ny fane",
  code: "en",
  htmlLang: "nb",
  title: "Tromsø / Romsa – English translation template",
  navigationLabel: "Hovednavigasjon",
  wordmarkLabel: "Tromsø historisk tidslinje",
  imageSources: "Bildekilder",
  languageLabel: "Velg språk",
  languages: { no: "Norsk", en: "English", sme: "Davvisámegiella" },
  translationNotice:
    "The professional English translation has not yet been inserted. This page currently shows the Norwegian source text.",
  eyebrow: "En historisk tidslinje",
  heroTitle: ["Mange folk.", "Én felles historie."],
  heroLead:
    "Samer i Tromsø i et historisk perspektiv",
  explore: "Utforsk tidslinjen",
  jumpLabel: "Hopp til",
  north: "69° nord",
  introductionLead:
    "Tromsø begynte ikke i 1794. Før kjøpstaden kom et landskap av boplasser, stier, fjorder, fiskeplasser og flytteveier.",
  introductionParagraphs: [
    "Samer, kvener og nordmenn har brukt og formet området på ulike måter. Historien rommer handel og lagarbeid, men også fornorsking, tap og konflikt.",
    "Denne tidslinjen samler {count} vendepunkter fra det historiske grunnlaget til dagens arbeid for språk, kultur, rettigheter og forsoning.",
  ],
  details: "Fordypning og kilder",
  reconciliationLabel: "Forsoning er ikke et sluttpunkt",
  reconciliationLines: [
    "Forankret i sannhet.",
    "Utviklet gjennom kunnskap.",
    "Levd i fellesskapet.",
  ],
  documentation: "Dokumentasjon",
  imageSourcesIntro:
    "Kilden står også direkte under hvert bilde. Der originaldokumentet ikke inneholder en nettadresse, er arkivnavnet fra bildeteksten gjengitt. Bildene publiseres på grunnlag av oppgitte delingsrettigheter.",
  timelineName: "Historisk tidslinje",
  footerText:
    "Historisk innhold fra dokumentet «Historisk tidslinje revidert 1» og de oppførte kildene.",
  toTop: "Til toppen",
};

window.TROMSO_TIMELINE = { page, heroImage, timelineEras, allTimelineImages };
