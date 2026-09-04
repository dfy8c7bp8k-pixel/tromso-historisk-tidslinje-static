const heroImage = {
  src: "images/image6.png",
  alt: "Historisk oversiktsbilde av Tromsø sett fra Storsteinen på Fløyfjellet",
  caption:
    "Tromsø sett fra Storsteinen på Fløyfjellet, trolig mellom 1886 og 1892.",
  credit: "Foto: Jørgen Wickstrøm",
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
        title: "Et levende landskap før byen",
        lead:
          "Området som i dag er Tromsø kommune har vært bebodd og brukt i svært lang tid. Samiske boplasser, flytteveier og stedsnavn vitner om en historie tett knyttet til naturen og årstidene.",
        paragraphs: [
          "Langs kysten og i fjordene kombinerte sjøsamiske samfunn fiske, jordbruk og husdyrhold. Reindriftssamer brukte kystområdene som sommerbeite og flyttet mellom kyst og innland gjennom året.",
          "Samer, nordmenn og senere kvener levde side om side. Verddeforholdet var et gjensidig og tillitsbasert bytteforhold der familier utvekslet blant annet kjøtt, fisk, skinn og tjenester.",
        ],
        images: [
          {
            src: "images/image1.png",
            alt: "Tidlig håndtegnet skisse av kjøpstaden Tromsø",
            caption:
              "Den første kjente skissen over kjøpstaden Tromsø, signert konsul Lorentz G. Skancke og trolig fra 1806.",
            credit: "Arkiv: Perspektivet Museum",
            sourceLabel: "Perspektivet Museum",
            sourceUrl:
              "https://www.flickr.com/photos/perspektivetmuseum/8118815730/in/album-72157631842542864",
          },
        ],
        sources: [
          {
            label: "Samiske veivisere – historisk tidslinje",
            url: "https://samiskeveivisere.no/tidslinje/",
          },
          { label: "Reaidu", url: "https://result.uit.no/reaidu/" },
        ],
      },
      {
        id: "lappekodisillen",
        date: "1751",
        title: "Lappekodisillen sikrer flytteretten",
        lead:
          "Da grensen mellom Danmark–Norge og Sverige ble fastsatt, ble Lappekodisillen lagt til grensetraktaten. Avtalen anerkjente samisk bruk av land og retten til å flytte med rein over landegrensene.",
        paragraphs: [
          "Mange reindriftssamer hadde vinterbeite på Finnmarksvidda eller i Sverige og sommerbeite langs kysten i Troms. Grensekryssingen var derfor avgjørende for livsformen.",
          "Kodisillen fikk senere stor betydning som dokumentasjon av samiske sedvaner og rettigheter.",
        ],
        images: [
          {
            src: "images/image7.jpeg",
            alt: "Første side av Lappekodisillen fra 1751",
            caption: "Faksimile av Lappekodisillen, første side.",
            credit: "Faksimile gjengitt i originaldokumentet",
            sourceLabel: "Store norske leksikon",
            sourceUrl: "https://snl.no/Lappekodisillen",
          },
          {
            src: "images/image8.jpeg",
            alt: "Siste side av Lappekodisillen fra 1751 med segl",
            caption: "Faksimile av Lappekodisillen, side med segl.",
            credit: "Faksimile gjengitt i originaldokumentet",
            sourceLabel: "Store norske leksikon",
            sourceUrl: "https://snl.no/Lappekodisillen",
          },
        ],
        sources: [
          {
            label: "Lappekodisillen – Store norske leksikon",
            url: "https://snl.no/Lappekodisillen",
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
        title: "Tromsø blir by",
        lead:
          "Christian 7. undertegnet resolusjonen som ga Tromsø bystatus. Rundt 80 mennesker bodde i området, og kirken lå som en egen enklave midt i byen.",
        paragraphs: [
          "Opphevelsen av handelsmonopolene i 1788 åpnet for friere handel i nord. Etter diskusjon om flere mulige steder ble Tromsø valgt som kjøpstad.",
          "Bystatusen førte gradvis til mer handel, flere innbyggere og nye administrative funksjoner, i en region der samer, kvener og nordmenn allerede levde og arbeidet.",
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
              "Litografi over Tromsø og Tromsøysundet rundt 1840, med samer og nordmenn i forgrunnen på Tromsdalssiden.",
            credit: "Etter A. Larsen, litografert av Prahl i Bergen",
            sourceLabel: "Perspektivet Museum",
            sourceUrl:
              "https://www.flickr.com/photos/perspektivetmuseum/9622988832/in/album-72157631842542864",
          },
        ],
        sources: [
          {
            label: "Det samiske Tromsø – kommunedelplan for kulturmiljø",
            url: "https://experience.arcgis.com/experience/9ccbb04a28ca4d949b9f8848d748fad1/page/kapittel_-2",
          },
        ],
      },
      {
        id: "naering-og-verdde",
        date: "1794–1930",
        title: "Fiske, jordbruk, reindrift og verdde",
        lead:
          "De fleste levde av primærnæringer og kombinerte fiske, jordbruk, fangst og reindrift. Arbeidet fulgte sesongene og bandt kyst, fjorder og innland sammen.",
        paragraphs: [
          "Sjøsamiske familier levde i stor grad på samme måte som norske naboer, med små gårder, husdyr og fiske. Båtbygging var nødvendig for både transport og næring.",
          "Reindriftssamer flyttet til sommerbeite på blant annet Kvaløya, Ringvassøya og Reinøya. Rávdnji (Rystraumen) var et viktig punkt på flytteveiene. Verddeordningen knyttet reindriften og kystbefolkningen sammen.",
          "Fra 1860 til 1930 ga storsild- og torskefisket stor aktivitet og handel. Samer, kvener og nordmenn deltok i fisket og i den voksende økonomien.",
        ],
        images: [
          {
            src: "images/image4.png",
            alt: "Seilskuter i Tromsø havn omkring 1890",
            caption: "PEM-BYM-00278, Tromsø havn omkring 1890.",
            credit: "Foto: ukjent",
            sourceLabel: "Perspektivet Museum",
            sourceUrl:
              "https://www.flickr.com/photos/perspektivetmuseum/21111228175/in/album-72177720316164826",
          },
          {
            src: "images/image5.png",
            alt: "Samisk sommerboplass med gamme og mennesker i Tromsdalen",
            caption:
              "PEM-TOI-GP00192, den samiske sommerboplassen i Tromsdalen.",
            credit: "Arkiv: Perspektivet Museum",
            sourceLabel: "Perspektivet Museum",
            sourceUrl:
              "https://www.flickr.com/photos/perspektivetmuseum/10944985194/in/album-72157650251722417",
          },
        ],
        sources: [
          {
            label: "Fisker og bonde – kommunedelplan for kulturmiljø",
            url: "https://experience.arcgis.com/experience/9ccbb04a28ca4d949b9f8848d748fad1/page/kapittel_-3/",
          },
          {
            label: "Straumhella – Lokalhistoriewiki",
            url: "https://lokalhistoriewiki.no/wiki/Straumhella_(Troms%C3%B8)",
          },
          {
            label: "Fakta om reindrift – Sametinget",
            url: "https://sametinget.no/naring/reindrift/fakta-om-reindrift/",
          },
        ],
      },
      {
        id: "pomorhandelen",
        date: "1814–1917",
        title: "Pomorhandelen binder nordområdene sammen",
        lead:
          "Russiske pomorer kom hver sommer fra områdene rundt Kvitsjøen for å bytte mel og andre varer mot fisk, skinn og lokale produkter.",
        paragraphs: [
          "Handelen var særlig viktig for nordnorske kystsamfunn og for samer som hadde etterspurte skinnprodukter. Den ga matforsyning, inntekter og kontakt over landegrenser.",
          "Pomorhandelen tok slutt etter den russiske revolusjonen i 1917. Bortfallet fikk store økonomiske konsekvenser i nord.",
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
            label: "Pomorhandelen – Museum Nord",
            url: "https://www.museumnord.no/historier/pomorhandelen-en-viktig-handel-i-nord/",
          },
        ],
      },
      {
        id: "administrasjon",
        date: "1814 / 1866",
        title: "Tromsø blir administrasjonssentrum",
        lead:
          "Amtmannen i Finmarkens amt ble flyttet til Tromsø i 1814. Da Tromsø amt ble opprettet i 1866, ble byens administrative rolle ytterligere styrket.",
        paragraphs: [
          "Forvaltning, rettsvesen og offentlige tjenester ga arbeidsplasser, tilflytting og befolkningsvekst. I 1919 ble betegnelsen amt erstattet med fylke, og området fikk navnet Troms fylke.",
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
          { label: "Amt – Store norske leksikon", url: "https://snl.no/amt" },
        ],
      },
      {
        id: "seminarium",
        date: "1824",
        title: "Tromsø seminarium åpner",
        lead:
          "Norges første offentlige lærerseminar ble opprettet i Tromsø. Fire av de ni studieplassene var for Finnmark, og halvparten av disse skulle gå til samer.",
        paragraphs: [
          "Seminaret bidro først til at samiske elever kunne møte lærere med språk- og kulturkunnskap. Senere fikk samiske lærere en vanskelig rolle da skolen ble brukt som redskap i fornorskingspolitikken.",
          "Kvinner fikk adgang i 1890. Institusjonen ble senere lærerhøgskole og inngår i dag i utdanningsmiljøet ved UiT.",
        ],
        images: [
          {
            src: "images/image13.png",
            alt: "Historisk fotografi av Tromsø seminarium og bebyggelsen rundt",
            caption:
              "PEM-BYM-00264. Tromsø seminarium er den store bygningen midt i bildet, trolig fotografert mellom 1870 og 1900.",
            credit: "Foto: ukjent",
            sourceLabel: "Perspektivet Museum",
            sourceUrl: "https://www.flickr.com/photos/perspektivetmuseum/18484059852",
          },
        ],
        sources: [
          {
            label: "Tromsø lærerhøgskole – Wikipedia",
            url: "https://no.wikipedia.org/wiki/Troms%C3%B8_l%C3%A6rerh%C3%B8gskole",
          },
        ],
      },
      {
        id: "bispesete",
        date: "1834",
        title: "Tromsø blir bispesete",
        lead:
          "Tromsø ble bispesete for Nord-Norge, og domkirken ble hovedkirke for bispedømmet. Rollen styrket byen som religiøst og administrativt sentrum.",
        paragraphs: [
          "Kirken fikk samtidig stor betydning for samene fordi den ble et redskap i fornorskingspolitikken, blant annet gjennom språk og opplæring.",
          "I 1952 ble Nord-Hålogaland bispedømme opprettet. Tromsø domkirke er fortsatt bispesete.",
        ],
        images: [
          {
            src: "images/image12.png",
            alt: "Biskop Eivind Berggrav og Kathrine Berggrav utenfor Bispegården i Tromsø",
            caption:
              "PEM-OAA-00130. Biskop Eivind Berggrav og Kathrine Berggrav ved Bispegården.",
            credit: "Foto: Olav Aasegg",
            sourceLabel: "Perspektivet Museum",
            sourceUrl: "https://www.flickr.com/photos/perspektivetmuseum/9598597998",
          },
        ],
        sources: [
          {
            label: "Tromsø domkirke – Lokalhistoriewiki",
            url: "https://lokalhistoriewiki.no/wiki/Troms%C3%B8_domkirke",
          },
        ],
      },
      {
        id: "bygrensene",
        date: "1842–1915",
        title: "Bygrensene utvides",
        lead:
          "Rask vekst gjorde det nødvendig å utvide bygrensene i 1842 og 1860. Myndighetene fikk bedre kontroll med bebyggelse, brannfare og skatteinntekter.",
        paragraphs: [
          "Bygningsloven av 1845 ga Tromsø et mer planlagt gatenett. Den tette trehusbebyggelsen som vokste fram, ofte kalt Empirebyen, preger fortsatt sentrum.",
          "Utvidelsen ga nye muligheter for handel og kontakt, men la også press på samisk arealbruk rundt byen.",
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
        title: "Turismen kommer til Tromsø",
        lead:
          "Reisende fra blant annet England, Tyskland og USA kom for å oppleve fjorder, fjell og midnattssol. Tromsø ble et viktig stoppested på reisen nordover.",
        paragraphs: [
          "Tromsdalen ble et sentralt turistmål. Besøkende møtte reindrift og samisk kultur ved sommerboplassen i Dalheim. Turismen ga inntekter og synlighet, men førte også til stereotype framstillinger og et skjevt maktforhold mellom besøkende og lokalbefolkning.",
          "Den tidlige turismen la grunnlaget for Tromsø som reisemål og viser hvordan kulturformidling både kan åpne muligheter og skape utfordringer.",
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
        title: "Bosettingen øker i fjordene",
        lead:
          "Støtteordninger lokket finske, kvenske og senere norske nybyggere nordover. Folketallet økte særlig langs kysten og i de smale jordbruksområdene mellom fjord og fjell.",
        paragraphs: [
          "Nye gårder og åkre kunne komme i konflikt med samisk reindrift og annen bruk av landskapet. I Malangen og Balsfjord var befolkningsveksten særlig sterk fram mot 1835.",
          "I mange bygder måtte samer og kvener tilpasse seg en økende norsk bosetting. Det endret både arealbruken og forholdet mellom gruppene.",
        ],
        sources: [
          {
            label: "Befolkningsutviklingen i Troms og Finnmark 1567–1930",
            url: "https://edl.no/2020/11/14/befolkningsutviklingen-i-troms-og-i-finnmark-for-perioden-1567-1930-belyst-utfra-offentlig-statistikk/",
          },
        ],
      },
      {
        id: "fornorsking",
        date: "1852–1950",
        title: "Fornorskingen blir systematisk",
        lead:
          "Staten ønsket ett språk og én kultur. Samisk og kvensk ble presset ut av skole, kirke og offentlig liv, og mange barn ble sendt til internatskoler der bare norsk var tillatt.",
        paragraphs: [
          "Finnefondet, som eksisterte fra 1852 til 1921, finansierte tiltak for å fornorske samer og kvener gjennom skolen. Språktap, skam og svekket tilhørighet fikk konsekvenser over flere generasjoner.",
          "Kaldfjordsamisk, dialekten som ble snakket på Kvaløya og Ringvassøya, forsvant allerede på 1920-tallet. Fornorskingen påvirket identitet, helse og tillit til myndighetene og er en viktig bakgrunn for dagens forsoningsarbeid.",
        ],
        images: [
          {
            src: "images/image16.png",
            alt: "Historisk gruppebilde av samiske personer foran en gamme",
            caption: "PEM-BYM-00237, gruppebilde foran en gamme.",
            credit: "Foto: ukjent",
            sourceLabel: "Perspektivet Museum",
            sourceUrl:
              "https://www.flickr.com/photos/perspektivetmuseum/11307464144/in/album-72157650251722417",
          },
        ],
        sources: [
          {
            label: "Samisk språk og språkhistorie – Samiske veivisere",
            url: "https://samiskeveivisere.no/article/samisk-sprak-og-sprakhistorie/",
          },
          { label: "Fornorsking – Store norske leksikon", url: "https://snl.no/fornorsking" },
        ],
      },
      {
        id: "jordsalgsloven",
        date: "1902–1965",
        title: "Språkkrav for jord og fornorsking av stedsnavn",
        lead:
          "Jordsalgsloven for Finnmark krevde at kjøpere kunne snakke, lese og skrive norsk og brukte språket daglig. Samer og kvener som ikke oppfylte kravene, ble utestengt fra å eie jord.",
        paragraphs: [
          "Loven gjaldt ikke direkte i Tromsø, men bygde på den samme politikken som preget området. Norske eiendomsnavn ble krevd, og samiske stedsnavn ble skrevet om eller mistet sin opprinnelige betydning.",
          "Samiske navn beskriver ofte natur, ferdsel og bruk av landskapet presist. Å ta navnene tilbake er derfor også å hente fram kunnskap og historie.",
        ],
        sources: [
          {
            label: "Samiske stedsnavn – Sametinget",
            url: "https://sametinget.no/sprak/samiske-stedsnavn/",
          },
          {
            label: "Samiske geografiske navn i Tromsø",
            url: "https://no.wikipedia.org/wiki/Samiske_geografiske_navn_i_Troms%C3%B8",
          },
        ],
      },
      {
        id: "motstand",
        date: "1904–1917",
        title: "Samisk motstand organiseres",
        lead:
          "Aviser, litteratur og politisk organisering ga fornorskingsmotstanden en tydeligere offentlig stemme.",
        paragraphs: [
          "Sagai Muittalægje ble startet i 1904 med Anders Larsen som redaktør. Isak Saba skrev Sámi soga lávlla i 1906 og ble samme år den første samiske representanten på Stortinget.",
          "Elsa Laula Renberg var blant initiativtakerne til det første samiske landsmøtet i Trondheim 6. februar 1917. Møtet la grunnlag for det samiske politiske arbeidet som fulgte.",
        ],
        sources: [
          { label: "Fornorsking – Store norske leksikon", url: "https://snl.no/fornorsking" },
        ],
      },
      {
        id: "reinbeite-1919",
        date: "1919–1939",
        title: "Flytteveier stenges",
        lead:
          "Reinbeitekonvensjonen mellom Norge og Sverige begrenset grensekryssende reindrift. Mange mistet tilgang til tradisjonelle sommerbeiter i Troms og på øyene rundt Tromsø.",
        paragraphs: [
          "I 1923 ble reindriftssamer fra Karesuando-området tvangsflyttet sørover i Sverige. Deler av Tromsdal-siidaen ble berørt, og lokalsamfunn mistet en viktig del av sin samiske befolkning.",
          "Den siste sommeren reindriftssamer fra Tromsdalen og Karesuando brukte beitene i Tromsdalen, var i 1939. Historien viser hvordan statlige avtaler brøt flytteveier og tradisjonelle livsformer.",
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
        title: "Tromsø under andre verdenskrig",
        lead:
          "Tromsø var i en kort periode hovedstad for det frie Norge. Byen ble et viktig støttepunkt i nord og tok imot mange evakuerte fra Finnmark og Nord-Troms i 1944.",
        paragraphs: [
          "Gestapo hadde hovedkvarter i byen, og okkupasjonsmakten bygde militære anlegg i regionen. Mange bygninger i sentrum ble likevel stående, og Tromsø har derfor bevart mer eldre trehusbebyggelse enn flere andre nordnorske byer.",
          "For samiske samfunn førte nedbrenningen og evakueringen til store tap av boliger, næringsgrunnlag og kulturmiljø. Belastningene kom på toppen av et allerede sterkt fornorskingspress.",
        ],
        images: [
          {
            src: "images/image19.png",
            alt: "Tyske soldater og naziflagg utenfor Gestapos hovedkvarter i Tromsø",
            caption: "Gestapos hovedkvarter i Tromsø under okkupasjonen.",
            credit: "Foto: Simon Orchard / Nådeløse nordmenn (Gestapo 1940–1945)",
            sourceLabel: "NRK Troms og Finnmark",
            sourceUrl:
              "https://www.nrk.no/tromsogfinnmark/hva-vet-du-om-andre-verdenskrig-i-nord-norge_-1.12301748",
          },
          {
            src: "images/image20.png",
            alt: "Klasserom ved Tromsø offentlige høyere almenskole merket av tyske soldater",
            caption:
              "PEM-LTH-00024. Tyske soldater satte sitt preg på et klasserom ved dagens Kongsbakken videregående skole.",
            credit: "Foto: Vilhjelm Riksheim",
            sourceLabel: "Perspektivet Museum",
            sourceUrl:
              "https://www.flickr.com/photos/perspektivetmuseum/26808339945/in/album-72157712887583482",
          },
        ],
        sources: [
          {
            label: "Andre verdenskrig – kommunedelplan for kulturmiljø",
            url: "https://experience.arcgis.com/experience/9ccbb04a28ca4d949b9f8848d748fad1/page/kapittel_-5?block_id=layout_460_block_32",
          },
        ],
      },
      {
        id: "reinbeite-1949",
        date: "1949–1950-årene",
        title: "Reindriften tilpasses nye grenser",
        lead:
          "En ny norsk-svensk reinbeitekonvensjon førte til ytterligere begrensninger. Flere områder i Troms mistet status som reinbeite, blant annet distriktet Tromsdalen tilhørte.",
        paragraphs: [
          "Fra 1950-tallet etablerte Oskal-familien reindrift med sommerbeite i Tromsdalen og vinterbeite i Mauken. Reindriften ble igjen en synlig del av landskapet rundt Tromsø.",
          "Historien viser hvordan samiske næringer har tilpasset seg omfattende inngrep og samtidig videreført kunnskap om natur, beite og flyttemønstre.",
        ],
        sources: [
          {
            label: "Norsk-svensk reinbeitekonvensjon – Sametinget",
            url: "https://sametinget.no/naring/reindrift/norsk-svensk-reinbeitekonvensjon/",
          },
          {
            label: "Kilden – reindrift",
            url: "https://kilden.nibio.no/?topic=reindrift",
          },
        ],
      },
      {
        id: "samisk-undervisning",
        date: "1959–1985",
        title: "Retten til samisk undervisning styrkes",
        lead:
          "Etter at skolen lenge hadde vært et redskap for fornorsking, begynte lovverket gradvis å åpne for samisk språk i undervisningen.",
        paragraphs: [
          "De første tilbudene om samisk opplæring i folkeskolen kom i 1967. I 1969 ble det opprettet et gymnas med samisk undervisning i Karasjok, og i 1985 ble samisk mulig som hovedspråk gjennom hele grunnskolen.",
          "Nordisk Samisk Institutt ble etablert i 1974. UiT og Gáisi språksenter har senere bidratt til å styrke språk, undervisning og kunnskapsmiljøer.",
        ],
        sources: [
          {
            label: "Retten til opplæring i og på samisk – Udir",
            url: "https://www.udir.no/laring-og-trivsel/samisk-i-skolen/retten-til-opplaring-i-og-pa-samisk/",
          },
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
          "Tromsøysund, Hillesøy og Ullsfjord ble slått sammen med Tromsø. Kommunen ble langt større i både areal og folketall.",
        paragraphs: [
          "Sammenslåingen økte også andelen samiske og kvenske innbyggere, særlig fra bygder og fjordområder. Fornorskingspolitikken var på retur, men preget fortsatt skole og samfunn.",
          "Tromsøbrua fra 1960, nye veier og boligområder la til rette for vekst. Samtidig påvirket utbyggingen arealer som tidligere hadde vært viktige for samisk næringsliv og reindrift.",
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
        title: "Universitetet i Tromsø blir til",
        lead:
          "Stortinget vedtok universitetet i 1968, og det åpnet i 1972. For første gang kunne mange ta høyere utdanning i nord uten å flytte sørover.",
        paragraphs: [
          "For samer og kvener gjorde nærheten det lettere å bevare språk, kultur og tilknytning til hjemstedet under utdanning. Universitetet bygget også opp forskning og undervisning om samiske forhold.",
          "UiT har i dag en viktig rolle i å gi samiske og kvenske perspektiver plass i forskning, undervisning og samfunnsdebatt.",
        ],
        sources: [{ label: "UiT Norges arktiske universitet", url: "https://uit.no/startsida" }],
      },
      {
        id: "bybrannen",
        date: "14. mai 1969",
        title: "Den store bybrannen",
        lead:
          "25 forretningsgårder og brygger i sentrum brant ned. Det tette kaiområdet av tre, med smale smug og brennbart avfall, gjorde slukkingen svært krevende.",
        paragraphs: [
          "Brannen startet natt til 14. mai og spredte seg raskt. Først kvart på åtte om morgenen var den under kontroll, og etterslukkingen varte i ti dager. Brannårsaken er fortsatt ukjent.",
          "Katastrofen ble et vendepunkt for byplanlegging, brannsikkerhet og byggeskikk i Tromsø sentrum.",
        ],
        images: [
          {
            src: "images/image23.png",
            alt: "Flammer og røyk i Storgata under bybrannen i Tromsø i 1969",
            caption:
              "PEM-CHA-00314. Storgata under bybrannen. Jensens Skotøimagasin i Storgata 79 ble totalskadet.",
            credit: "Foto: Olav Aasegg",
            sourceLabel: "Perspektivet Museum",
            sourceUrl:
              "https://www.flickr.com/photos/perspektivetmuseum/22716234791/in/album-72157630232354278",
          },
        ],
        sources: [
          {
            label: "Da Tromsø sto i flammer – NRK",
            url: "https://www.nrk.no/tromsogfinnmark/xl/da-tromso-sto-i-flammer-1.14550033",
          },
        ],
      },
      {
        id: "alta-og-sametinget",
        date: "1979–2005",
        title: "Økende oppmerksomhet om samiske rettigheter",
        lead:
          "Alta-aksjonen gjorde samiske rettigheter og naturinngrep til en nasjonal politisk sak og førte til et tydelig skifte i statens politikk.",
        paragraphs: [
          "Sametinget ble åpnet av kong Olav V i 1989 og ga samene et eget folkevalgt organ. Finnmarksloven fra 2005 styrket retten til medbestemmelse over land og vann i Finnmark.",
        ],
        images: [
          {
            src: "images/image24.png",
            alt: "Demonstranter i kofte ved anleggsmaskin under Alta-aksjonen i Stilla i 1981",
            caption: "Folkeaksjonen mot Altautbyggingen demonstrerer i Stilla i 1981.",
            credit: "Foto: Folkeaksjonen mot Altautbyggingen · Public domain",
            sourceLabel: "Bildekreditering i originaldokumentet",
          },
        ],
        sources: [
          { label: "Alta-saken – Store norske leksikon", url: "https://snl.no/Alta-saken" },
          { label: "Finnmarksloven – Store norske leksikon", url: "https://snl.no/Finnmarksloven" },
        ],
      },
      {
        id: "nasjonaldagen",
        date: "1992–1993",
        title: "6. februar blir samenes nasjonaldag",
        lead:
          "Den samiske konferansen i 1992 vedtok en felles nasjonaldag for samer i Norge, Sverige, Finland og Russland. Datoen viser tilbake til landsmøtet i 1917.",
        paragraphs: [
          "Nasjonaldagen ble markert første gang i 1993 og feires hvert år i Tromsø. Samme år ble FNs internasjonale urbefolkningsår åpnet i Karasjok.",
        ],
        sources: [
          {
            label: "Nasjonaldag og nasjonale symboler – Sametinget",
            url: "https://sametinget.no/om-sametinget/nasjonaldag-og-nasjonale-symboler/",
          },
        ],
      },
      {
        id: "kongens-unnskyldning",
        date: "1997",
        title: "Kong Harald ber om unnskyldning",
        lead:
          "Kong Harald V ba samene om unnskyldning for uretten staten hadde påført dem og understreket at Norge er bygd på territoriet til to folk: samene og nordmennene.",
        paragraphs: [
          "Ordene fikk stor symbolsk betydning og inngår i en lengre prosess med erkjennelse, ansvar og styrking av samiske rettigheter.",
        ],
        sources: [
          {
            label: "Kongens ord betyr mye for samene – NRK Sápmi",
            url: "https://www.nrk.no/sapmi/_-kongens-ord-betyr-mye-for-samene-1.11966176",
          },
        ],
      },
      {
        id: "samisk-i-byen",
        date: "2003–i dag",
        title: "Samisk og kvensk liv i storkommunen",
        lead:
          "Tromsø er en av norske byer med en stor samisk befolkning. Samiske språk og kultur er i dag synlige i skole, universitet, reiseliv, design, foreningsliv og byrom.",
        paragraphs: [
          "Den første samiske skoleklassen ble etablert i 2003. I dag finnes egne samiskklasser ved Prestvannet og Grønnåsen, i tillegg til opplæring ved andre skoler. Det gis også opplæring i kvensk.",
          "Rekonstruksjonen av Ullsfjordkofta viser hvordan lokale miljøer, fagkunnskap og historiske kilder kan revitalisere kulturarv. Språksentre, lag og institusjoner skaper møteplasser på tvers av generasjoner.",
          "Samtidig opplever noen fortsatt hets og diskriminering. Synlighet må derfor følges av kunnskap, respekt og likeverd.",
        ],
        sources: [
          {
            label: "Retten til opplæring i og på samisk – Udir",
            url: "https://www.udir.no/laring-og-trivsel/samisk-i-skolen/retten-til-opplaring-i-og-pa-samisk/",
          },
        ],
      },
      {
        id: "sannhetskommisjonen",
        date: "1. juni 2023",
        title: "Sannhets- og forsoningskommisjonen leverer rapporten",
        lead:
          "Kommisjonen undersøkte fornorskingspolitikken og uretten mot samer, kvener/norskfinner og skogfinner og leverte rapporten til Stortinget.",
        paragraphs: [
          "Rapporten samler kunnskap og personlige fortellinger om tap av språk, kultur og rettigheter. Den beskriver konsekvenser som fortsatt merkes og foreslår tiltak for kunnskap, språk, kultur og inkludering.",
          "Målet er å gi et felles utgangspunkt for dialog, ansvar og konkrete handlinger videre.",
        ],
        sources: [
          {
            label: "Sannhets- og forsoningskommisjonens rapport – Sametinget",
            url: "https://sametinget.no/sannhets-og-forsoningskommisjonens-rapport/",
          },
        ],
      },
      {
        id: "forsoning",
        date: "Nå og framover",
        title: "Forsoning leves i fellesskapet",
        lead:
          "Forsoning i Tromsø tar utgangspunkt i sannhet: samer og kvener har lenge vært en del av området, og fornorskingen har satt dype spor.",
        paragraphs: [
          "I praksis betyr forsoning mer kunnskap i skole og arbeidsliv, større synlighet for samisk og kvensk språk og kultur, åpne samtaler og tydelig avstand til hets.",
          "Skoler, språksentre, UiT, kulturinstitusjoner, foreninger og møteplasser gjør arbeidet konkret. Forsoning er en pågående prosess – forankret i sannhet, utviklet gjennom kunnskap og levd i fellesskapet.",
        ],
        sources: [
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
  code: "no",
  htmlLang: "nb",
  title: "Tromsø / Romsa – historisk tidslinje",
  navigationLabel: "Hovednavigasjon",
  wordmarkLabel: "Tromsø historisk tidslinje",
  imageSources: "Bildekilder",
  languageLabel: "Velg språk",
  languages: { no: "Norsk", en: "English", sme: "Davvisámegiella" },
  eyebrow: "En historisk tidslinje",
  heroTitle: ["Mange folk.", "Én felles historie."],
  heroLead:
    "Utviklingen av Tromsø / Romsa i et samisk og flerkulturelt perspektiv — fra landskapet før byen til dagens arbeid med forsoning.",
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
    "Innholdet er bearbeidet fra dokumentet «Historisk tidslinje Tromsø kommune v9» og de oppførte eksterne kildene.",
  toTop: "Til toppen",
};

window.TROMSO_TIMELINE = { page, heroImage, timelineEras, allTimelineImages };
