import type { ExamSet } from '../../types/exam';

export const proeftoets4: ExamSet = {
  id: 'proeftoets-4',
  title: 'Proeftoets 4 — Gerichte herhaling',
  shortTitle: 'Proeftoets 4',
  subtitle:
    '30 korte meerkeuzevragen · Metacognitie, Leeractiviteiten, Attitude, Schulz von Thun, Maslow & Eberspächer',
  description:
    'Korte, snelle vragen met extra focus op de meest gemaakte verwisselingen.',
  questions: [
    // ==================== Metacognitie — 3 componenten (vragen 1-6) ====================
    {
      id: 'pt4-q01',
      number: 1,
      topic: 'les5',
      question:
        'Voordat hij een nieuwe taal gaat leren, weet Stijn dat flitskaarten, podcasts en spreekdagen mogelijke leermiddelen zijn. Welke metacognitieve component is dit?',
      options: [
        'Declaratieve component',
        'Procedurele component',
        'Strategische component',
      ],
      correctIndex: 0,
      explanation:
        'De declaratieve component draait om weten wát er bestaat: welke leeractiviteiten, vaardigheden en hulpmiddelen beschikbaar of nodig zijn om te leren.',
      source: 'Les 5 (dia 3 notities, dia 7) · Reader deel 1, Metacognitie',
    },
    {
      id: 'pt4-q02',
      number: 2,
      topic: 'les5',
      question:
        'Tijdens het leren voor anatomie merkt Vera dat teksten markeren weinig oplevert en stapt ze over op zichzelf overhoren. Welke metacognitieve component past ze toe?',
      options: [
        'Procedurele component',
        'Strategische component',
        'Declaratieve component',
      ],
      correctIndex: 1,
      explanation:
        'De strategische component gaat over weten wanneer en waarom je moet bijsturen en het opstarten van een alternatieve aanpak als de eerste niet werkt.',
      source: 'Les 5 (dia 3 notities, dia 7) · Reader deel 1, Metacognitie',
    },
    {
      id: 'pt4-q03',
      number: 3,
      topic: 'les5',
      question:
        'Daan weet precies hoe hij een tekst stapsgewijs omzet in een overzichtelijke begrippenkaart. Welke metacognitieve component laat hij zien?',
      options: [
        'Declaratieve component',
        'Strategische component',
        'Procedurele component',
      ],
      correctIndex: 2,
      explanation:
        'De procedurele component gaat over de praktische knowhow: weten hóe je een gekozen leerstrategie of activiteit stap voor stap uitvoert.',
      source: 'Les 5 (dia 3 notities, dia 7) · Reader deel 1, Metacognitie',
    },
    {
      id: 'pt4-q04',
      number: 4,
      topic: 'les5',
      question:
        'Lina weet van zichzelf welke studievaardigheden zij beheerst en welke hulpmiddelen nodig zijn voor een praktijktoets. Welke component van metacognitie is dit?',
      options: [
        'Declaratieve component',
        'Procedurele component',
        'Strategische component',
      ],
      correctIndex: 0,
      explanation:
        'Je bewust zijn van je eigen vaardigheden, werkwijzen en benodigde hulpmiddelen hoort bij de declaratieve component van metacognitie.',
      source: 'Les 5 (dia 3 notities, dia 7) · Reader deel 1, Metacognitie',
    },
    {
      id: 'pt4-q05',
      number: 5,
      topic: 'les5',
      question:
        'Bij het oefenen van een gitaarakkoord blijft Koen vastlopen met langzaam herhalen. Hij besluit de greep eerst los zonder slaghand te oefenen. Welke component zet hij in?',
      options: [
        'Procedurele component',
        'Strategische component',
        'Declaratieve component',
      ],
      correctIndex: 1,
      explanation:
        'Koen ziet dat zijn oorspronkelijke aanpak niet werkt en kiest doelgericht een alternatief. Dat bijsturen is de strategische component van metacognitie.',
      source: 'Les 5 (dia 3 notities, dia 7) · Reader deel 1, Metacognitie',
    },
    {
      id: 'pt4-q06',
      number: 6,
      topic: 'les5',
      question:
        'Welke omschrijving hoort bij de declaratieve component van metacognitie?',
      options: [
        'Weten hóe je een leeractiviteit praktisch uitvoert',
        'Weten wánneer je moet overstappen op een alternatief',
        'Weten wát je moet doen en welke middelen er zijn',
      ],
      correctIndex: 2,
      explanation:
        'Declaratief = weten wát je moet doen en welke middelen/strategieën er zijn. Procedureel = weten hóe je het uitvoert. Strategisch = weten wánneer je moet bijsturen.',
      source: 'Les 5 (dia 3 notities, dia 7) · Reader deel 1, Metacognitie',
    },

    // ==================== Leeractiviteiten (vragen 7-12) ====================
    {
      id: 'pt4-q07',
      number: 7,
      topic: 'les5',
      question:
        'Tijdens het studeren vergelijkt Roos de kenmerken van een fixed mindset met die van een growth mindset en zet de verschillen naast elkaar. Welke leeractiviteit is dit?',
      options: [
        'Cognitieve leeractiviteit',
        'Regulatieve leeractiviteit',
        'Affectieve leeractiviteit',
      ],
      correctIndex: 0,
      explanation:
        'Het inhoudelijk verwerken van leerstof — zoals relateren, analyseren en vergelijken — valt onder de cognitieve leeractiviteiten (denkactiviteiten).',
      source: 'Les 5 (dia 8) · Reader deel 1, Metacognitie (Tabel 1)',
    },
    {
      id: 'pt4-q08',
      number: 8,
      topic: 'les5',
      question:
        'Om de leerstof beter te begrijpen vat Milan drie hoofdstukken samen in één overzichtelijk schema met hoofdlijnen. Welke soort leeractiviteit voert hij uit?',
      options: [
        'Regulatieve leeractiviteit',
        'Cognitieve leeractiviteit',
        'Affectieve leeractiviteit',
      ],
      correctIndex: 1,
      explanation:
        'Structureren en samenvatten in een schema zijn gericht op het inhoudelijk ordenen en begrijpen van de stof en horen bij cognitieve leeractiviteiten (niet bij regulatief procesbewaken).',
      source: 'Les 5 (dia 8) · Reader deel 1, Metacognitie (Tabel 1)',
    },
    {
      id: 'pt4-q09',
      number: 9,
      topic: 'les5',
      question:
        'Halverwege de middag kijkt Noor op de klok om te controleren of ze haar studieplanning voor vandaag nog haalt. Welke leeractiviteit is dit?',
      options: [
        'Cognitieve leeractiviteit',
        'Affectieve leeractiviteit',
        'Regulatieve leeractiviteit',
      ],
      correctIndex: 2,
      explanation:
        'Het bewaken van je proces, plannen en controleren of je op schema ligt zijn regulatieve leeractiviteiten (sturingsactiviteiten).',
      source: 'Les 5 (dia 8) · Reader deel 1, Metacognitie (Tabel 1)',
    },
    {
      id: 'pt4-q10',
      number: 10,
      topic: 'les5',
      question:
        'Bij elk theoretisch begrip uit de les verzint Jasper een eigen praktijkvoorbeeld uit zijn sportclub. Onder welke leeractiviteit valt dit?',
      options: [
        'Cognitieve leeractiviteit',
        'Regulatieve leeractiviteit',
        'Affectieve leeractiviteit',
      ],
      correctIndex: 0,
      explanation:
        'Concretiseren (zelf voorbeelden bedenken bij de theorie) is een directe inhoudelijke verwerking van de leerstof en dus een cognitieve leeractiviteit.',
      source: 'Les 5 (dia 8) · Reader deel 1, Metacognitie (Tabel 1)',
    },
    {
      id: 'pt4-q11',
      number: 11,
      topic: 'les5',
      question:
        'Tijdens het lezen van een artikel stelt Tessa kritische vragen bij de argumenten en trekt ze haar eigen conclusies. Welke leeractiviteit laat ze zien?',
      options: [
        'Regulatieve leeractiviteit',
        'Cognitieve leeractiviteit',
        'Affectieve leeractiviteit',
      ],
      correctIndex: 1,
      explanation:
        'Kritisch verwerken en conclusies trekken gaan over het inhoudelijk doordenken van de stof en vallen onder de cognitieve leeractiviteiten.',
      source: 'Les 5 (dia 8) · Reader deel 1, Metacognitie (Tabel 1)',
    },
    {
      id: 'pt4-q12',
      number: 12,
      topic: 'les5',
      question:
        'Na een lastige les spreekt Sam zichzelf bemoedigend toe om zijn concentratie en motivatie vast te houden. Welke leeractiviteit is dit?',
      options: [
        'Cognitieve leeractiviteit',
        'Regulatieve leeractiviteit',
        'Affectieve leeractiviteit',
      ],
      correctIndex: 2,
      explanation:
        'Affectieve (emotionele) leeractiviteiten gaan over het omgaan met gevoelens tijdens het leren, zoals jezelf motiveren, concentreren en waarderen.',
      source: 'Les 5 (dia 8) · Reader deel 1, Metacognitie (Tabel 1)',
    },

    // ==================== Attitudemodel van Wijsman (DVD) (vragen 13-18) ====================
    {
      id: 'pt4-q13',
      number: 13,
      topic: 'les1',
      question:
        'Bram weet dat vroeg opstaan goed is voor zijn concentratie en zet elke avond zijn wekker op zes uur, maar blijft toch liggen omdat hij ertegenop ziet. Welk attitude-aspect geeft hier de doorslag?',
      options: [
        'Emotioneel aspect',
        'Cognitief aspect',
        'Handelingsaspect',
      ],
      correctIndex: 0,
      explanation:
        'Volgens Wijsman en het lesmateriaal is het emotionele aspect (voelen) het meest centrale en over het algemeen doorslaggevende aspect voor feitelijk gedrag, ook als denken en voornemen anders zijn.',
      source: 'Les 1 (dia 15–16) · Reader deel 1, Het begrip attitude',
    },
    {
      id: 'pt4-q14',
      number: 14,
      topic: 'les1',
      question:
        'Een fysiotherapeut legt een hardloper met biomechanische kennis uit waarom krachttraining knieblessures voorkomt, nog voordat ze gaan oefenen. Via welke ingang beïnvloedt hij de attitude?',
      options: [
        'Handelingsaspect',
        'Cognitief aspect',
        'Emotioneel aspect',
      ],
      correctIndex: 1,
      explanation:
        'Inspelen op vakkennis, feiten en inzicht vóórdat er wordt gehandeld gebruikt het cognitieve aspect (Denken) als ingang.',
      source: 'Les 1 (dia 16) · Reader deel 1, Het begrip attitude',
    },
    {
      id: 'pt4-q15',
      number: 15,
      topic: 'les1',
      question:
        'Een kliminstructeur laat een aarzelende beginner zonder lange uitleg eerst een meter omhoog klimmen, waardoor diens houding omslaat naar positief. Welke ingang zorgde voor deze verandering?',
      options: [
        'Cognitief aspect',
        'Emotioneel aspect',
        'Handelingsaspect',
      ],
      correctIndex: 2,
      explanation:
        'Door iemand gewoon te laten ervaren en doen wordt eerst het handelingsaspect (Doen) aangesproken, waarna gevoelens en gedachten bijstellen (vergelijk Mark Tuitert bij hordelopen).',
      source: 'Les 1 (dia 16, 18) · Reader deel 1, Het begrip attitude',
    },
    {
      id: 'pt4-q16',
      number: 16,
      topic: 'les1',
      question:
        'Welk van de drie aspecten van een attitude is volgens Wijsman over het algemeen het meest centraal en doorslaggevend voor gedrag?',
      options: [
        'Het emotionele aspect',
        'Het handelingsaspect',
        'Het cognitieve aspect',
      ],
      correctIndex: 0,
      explanation:
        'In les 1 en de reader staat dat het gevoelsmatige/emotionele aspect het meest centrale en daarmee doorslaggevende onderdeel van een attitude is.',
      source: 'Les 1 (dia 15) · Reader deel 1, Het begrip attitude',
    },
    {
      id: 'pt4-q17',
      number: 17,
      topic: 'les1',
      question:
        'Een docent laat studenten eerst onderzoeksresultaten lezen over het nut van slaap voor het geheugen om hun houding tegenover nachtrust te veranderen. Op welk aspect speelt zij in?',
      options: [
        'Emotioneel aspect',
        'Cognitief aspect',
        'Handelingsaspect',
      ],
      correctIndex: 1,
      explanation:
        'Onderzoeksresultaten, feiten en kennis aanreiken richt zich op het denken: het cognitieve aspect van de attitude.',
      source: 'Les 1 (dia 16–17) · Reader deel 1, Het begrip attitude',
    },
    {
      id: 'pt4-q18',
      number: 18,
      topic: 'les1',
      question:
        'Een zwemtrainer maakt de eerste lessen extra speels en gezellig zodat angstige kinderen plezier krijgen in het water. Welk attitude-aspect spreekt hij vooral aan?',
      options: [
        'Cognitief aspect',
        'Handelingsaspect',
        'Emotioneel aspect',
      ],
      correctIndex: 2,
      explanation:
        'Plezier en fijne ervaringen opbouwen richt zich rechtstreeks op het voelen: het emotionele aspect van de attitude.',
      source: 'Les 1 (dia 16) · Reader deel 1, Het begrip attitude',
    },

    // ==================== Schulz von Thun — Expressief vs. Relationeel (vragen 19-24) ====================
    {
      id: 'pt4-q19',
      number: 19,
      topic: 'les4',
      question:
        'Een trainer zucht diep, fronsend en rood aangelopen, en zegt kortaf: "Dit schiet echt niet op." Wat de trainer hiermee over zijn eigen frustratie laat zien, hoort bij welk aspect?',
      options: [
        'Expressief aspect',
        'Relationeel aspect',
        'Zakelijk aspect',
      ],
      correctIndex: 0,
      explanation:
        'Bij het expressieve aspect onthult de zender iets over zichzelf, zoals zijn emoties, humeur, irritatie of enthousiasme.',
      source: 'Les 4 (dia 16 notities) · Reader deel 2, § 3.4 Expressief aspect',
    },
    {
      id: 'pt4-q20',
      number: 20,
      topic: 'les4',
      question:
        'Een teamleider zegt streng: "Ik bepaal hier de planning, jullie voeren hem uit." Welk aspect van de boodschap toont hoe zij de verhouding tot het team ziet?',
      options: [
        'Expressief aspect',
        'Relationeel aspect',
        'Appellerend aspect',
      ],
      correctIndex: 1,
      explanation:
        'Het relationele aspect laat zien hoe de zender de onderlinge verhouding tot de ontvanger ziet en welke positie hij of zij inneemt (bijvoorbeeld autoritair of boven-positie).',
      source: 'Les 4 (dia 16 notities) · Reader deel 2, § 3.4 Relationeel aspect',
    },
    {
      id: 'pt4-q21',
      number: 21,
      topic: 'les4',
      question:
        'Tijdens een lezing straalt een spreker door zijn stemgebruik en houding veel onzekerheid uit. Via welk aspect krijgt het publiek deze indruk van hem?',
      options: [
        'Relationeel aspect',
        'Appellerend aspect',
        'Expressief aspect',
      ],
      correctIndex: 2,
      explanation:
        'Hoe de zender innerlijke gevoelens zoals enthousiasme of onzekerheid naar buiten brengt via taal, intonatie en lichaamstaal is het expressieve aspect.',
      source: 'Les 4 (dia 16 notities) · Reader deel 2, § 3.4 Expressief aspect',
    },
    {
      id: 'pt4-q22',
      number: 22,
      topic: 'les4',
      question:
        'Een oudere speler zegt op belerende toon tegen een nieuweling: "Jij bent hier net, luister eerst maar eens naar mij." Welk aspect staat hier op de voorgrond?',
      options: [
        'Relationeel aspect',
        'Expressief aspect',
        'Zakelijk aspect',
      ],
      correctIndex: 0,
      explanation:
        'Met het belerende "jij bent hier net, luister naar mij" definieert de zender de onderlinge rangorde/relatie; dat is het relationele aspect.',
      source: 'Les 4 (dia 16 notities) · Reader deel 2, § 3.4 Relationeel aspect',
    },
    {
      id: 'pt4-q23',
      number: 23,
      topic: 'les4',
      question:
        'Wat is het verschil tussen het expressieve en het relationele aspect van een boodschap?',
      options: [
        'Expressief gaat over feiten; relationeel over het gewenste effect',
        'Expressief gaat over de zender zelf; relationeel over de verhouding tot de ander',
        'Expressief gaat over de onderlinge band; relationeel over de stemming van de zender',
      ],
      correctIndex: 1,
      explanation:
        'Expressief = wat de zender over zichzelf (stemming, waarden, gevoelens) laat zien. Relationeel = hoe de zender de verhouding tot de ander ziet.',
      source: 'Les 4 (dia 16 notities) · Reader deel 2, § 3.4 De boodschap in communicatie',
    },
    {
      id: 'pt4-q24',
      number: 24,
      topic: 'les4',
      question:
        'Twee collega\'s vragen precies hetzelfde ("Kun je dit vandaag afmaken?"), maar bij de één voel je je geïrriteerd en bij de ander help je graag. Waardoor komt dit verschil meestal?',
      options: [
        'Door het zakelijke aspect',
        'Door een technische storing',
        'Door het relationele aspect',
      ],
      correctIndex: 2,
      explanation:
        'Volgens de reader roept hetzelfde appel een heel andere reactie op door hoe de relatie tussen zender en ontvanger wordt ervaren (het relationele aspect).',
      source: 'Les 4 (dia 16 notities) · Reader deel 2, § 3.4 Appellerend aspect',
    },

    // ==================== Maslow trede 4 (vragen 25-27) & Eberspächer (vragen 28-30) ====================
    {
      id: 'pt4-q25',
      number: 25,
      topic: 'les2',
      question:
        'Uit welke twee vormen bestaat de behoefte aan waardering en erkenning (trede 4) bij Maslow?',
      options: [
        'Zelfrespect door bekwaamheid en erkenning van anderen',
        'Fysieke veiligheid en vriendschap in een groep',
        'Zingeving door creativiteit en emotionele stabiliteit',
      ],
      correctIndex: 0,
      explanation:
        'De reader onderscheidt op trede 4 twee vormen van achting: zelfrespect dat bereikt wordt door bekwaamheid/taakbeheersing (intern) en de aandacht/erkenning van anderen (extern).',
      source: 'Les 2 (dia 6) · Reader deel 1, De motivatietheorie van Maslow',
    },
    {
      id: 'pt4-q26',
      number: 26,
      topic: 'les2',
      question:
        'Na maanden oefenen repareert Omar eindelijk zelfstandig een kapotte fietsmotor en voelt diep zelfrespect door zijn bekwaamheid. Welke laag van Maslow is dit?',
      options: [
        'Veiligheid en zekerheid',
        'Waardering en erkenning',
        'Sociaal contact',
      ],
      correctIndex: 1,
      explanation:
        'Zelfrespect dat ontstaat door het bekwaam beheersen van een taak is de interne vorm van Maslows vierde laag: waardering en erkenning.',
      source: 'Les 2 (dia 6) · Reader deel 1, De motivatietheorie van Maslow',
    },
    {
      id: 'pt4-q27',
      number: 27,
      topic: 'les2',
      question:
        'Tessa traint extra hard omdat ze graag bewonderd en geprezen wil worden door haar teamgenoten en publiek. Welke behoefte uit Maslows piramide drijft haar?',
      options: [
        'Zelfontplooiing',
        'Sociaal contact',
        'Waardering en erkenning',
      ],
      correctIndex: 2,
      explanation:
        'Willen dat anderen positief over je denken, aandacht geven en je waarderen is de externe kant van Maslows laag waardering en erkenning.',
      source: 'Les 2 (dia 6–7 + notities) · Reader deel 1, De motivatietheorie van Maslow',
    },
    {
      id: 'pt4-q28',
      number: 28,
      topic: 'les3',
      question:
        'Tijdens een praktijktoets schiet door Lotties hoofd: "Als ik dit verpest, mis ik mijn studiepunten en loop ik studievertraging op." In welke aandachtscirkel zit zij?',
      options: [
        'Cirkel 5: consequenties van winst of verlies',
        'Cirkel 3: is-behoort-te-zijn vergelijking',
        'Cirkel 4: winnen of verliezen',
      ],
      correctIndex: 0,
      explanation:
        'Bezig zijn met de gevolgen ná de prestatie (zoals studiepunten missen of studievertraging) hoort bij cirkel 5: consequenties van winst of verlies. Cirkel 3 gaat over het beoordelen van het eigen handelingsniveau.',
      source: 'Les 3 (dia 11 + notities) · Reader deel 1, Concentratie (Eberspächer)',
    },
    {
      id: 'pt4-q29',
      number: 29,
      topic: 'les3',
      question:
        'Tijdens een badmintonwedstrijd blijft Bram elke slag kritisch beoordelen: "Mijn smash hoort veel harder te zijn dan dit." In welke aandachtscirkel bevindt hij zich?',
      options: [
        'Cirkel 5: consequenties van winst of verlies',
        'Cirkel 3: is-behoort-te-zijn vergelijking',
        'Cirkel 2: directe afleidingen',
      ],
      correctIndex: 1,
      explanation:
        'In cirkel 3 vergelijk je voortdurend je huidige niveau met het niveau dat je zou moeten halen en beoordeel je elke actie kritisch.',
      source: 'Les 3 (dia 11 + notities) · Reader deel 1, Concentratie (Eberspächer)',
    },
    {
      id: 'pt4-q30',
      number: 30,
      topic: 'les3',
      question:
        'Tijdens een finale denkt een turner: "Als ik nu val, verlies ik mijn sponsor en wat zal de club wel niet zeggen?" In welke aandachtscirkel zit hij?',
      options: [
        'Cirkel 4: winnen of verliezen',
        'Cirkel 6: zinsvraag',
        'Cirkel 5: consequenties van winst of verlies',
      ],
      correctIndex: 2,
      explanation:
        'Gedachten over de gevolgen van winst of verlies buiten de wedstrijd zelf (zoals sponsorverlies of reputatieschade bij de club) horen in cirkel 5.',
      source: 'Les 3 (dia 11 + notities) · Reader deel 1, Concentratie (Eberspächer)',
    },
  ],
};
