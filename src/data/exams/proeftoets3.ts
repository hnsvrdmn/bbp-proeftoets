import type { ExamSet } from '../../types/exam';

export const proeftoets3: ExamSet = {
  id: 'proeftoets-3',
  title: 'Proeftoets 3 — Motivatie, Emotie/Stress, Maslow & Communicatie',
  shortTitle: 'Proeftoets 3',
  subtitle:
    '30 korte meerkeuzevragen · Focus op Maslow, LOC, Emotie/Flow/Stress & 4-aspectenmodel',
  description:
    'Gerichte toets met nieuwe voorbeelden op Les 2 (Maslow, motivatie, LOC), Les 3 (emotie, flow, stress) en het vier-aspectenmodel van Schulz von Thun.',
  questions: [
    // ==================== LES 2: Piramide van Maslow, Motivatie & LOC (vragen 1-10) ====================
    {
      id: 'pt3-q01',
      number: 1,
      topic: 'les2',
      question:
        'Joris heeft door nachtdiensten amper geslapen en kan zich tijdens een cursusdag totaal niet concentreren op nieuwe leerstof. Welk principe van Maslow verklaart dit?',
      options: [
        'Lichamelijke behoeften gaan vóór hogere behoeften',
        'Waardering is belangrijker dan fysieke rust',
        'Behoeften werken los van een vaste volgorde',
      ],
      correctIndex: 0,
      explanation:
        'De piramide van Maslow is hiërarchisch opgebouwd: zolang een onderliggende behoefte (zoals slaap en rust bij de lichamelijke behoeften) niet is vervuld, komt iemand niet toe aan hogere behoeften zoals leren en zelfontplooiing.',
      source: 'Les 2 (dia 6–7 + notities) · Reader deel 1, De motivatietheorie van Maslow',
    },
    {
      id: 'pt3-q02',
      number: 2,
      topic: 'les2',
      question:
        "Fleur werkt hard aan een lastig ontwerp omdat ze trots wil zijn op haar eigen vakmanschap én graag complimenten van collega's krijgt. Welke laag van Maslow past hierbij?",
      options: [
        'Veiligheid en zekerheid',
        'Waardering en erkenning',
        'Sociaal contact',
      ],
      correctIndex: 1,
      explanation:
        'De laag waardering en erkenning kent twee kanten: zelfrespect door het beheersen van een taak en de waardering/aandacht van anderen. Veiligheid gaat over stabiliteit; sociaal contact over ergens bij horen.',
      source: 'Les 2 (dia 6–7 + notities) · Reader deel 1, De motivatietheorie van Maslow',
    },
    {
      id: 'pt3-q03',
      number: 3,
      topic: 'les2',
      question:
        'Na jaren in een vaste baan begint Bram in zijn vrije tijd met beeldhouwen om zijn creativiteit en volle potentieel te ontwikkelen. Welke behoefte van Maslow stuurt hem?',
      options: [
        'Waardering en erkenning',
        'Sociaal contact',
        'Zelfontplooiing',
      ],
      correctIndex: 2,
      explanation:
        'Zelfontplooiing (zelfrealisatie) is de bovenste laag van Maslow en draait om groeien in je mogelijkheden, zingeving, creativiteit en het benutten van je volle potentieel.',
      source: 'Les 2 (dia 6–7 + notities) · Reader deel 1, De motivatietheorie van Maslow',
    },
    {
      id: 'pt3-q04',
      number: 4,
      topic: 'les2',
      question:
        'Twee cursisten blijven na de training hangen: één zoekt bevestiging dat ze het veilig uitvoert, de ander wil extra tips voor persoonlijke groei. Wat illustreert dit volgens Maslow?',
      options: [
        'Hetzelfde gedrag kan verschillende onderliggende behoeften hebben',
        'Zichtbaar gedrag wijst altijd op dezelfde laag in de piramide',
        'Alleen de bovenste laag bepaalt het zichtbare gedrag',
      ],
      correctIndex: 0,
      explanation:
        'In les 2 (dia 7) wordt benadrukt dat hetzelfde zichtbare gedrag een heel andere onderliggende behoefte als grondslag kan hebben (bijvoorbeeld veiligheid en zekerheid versus zelfontplooiing).',
      source: 'Les 2 (dia 7)',
    },
    {
      id: 'pt3-q05',
      number: 5,
      topic: 'les2',
      question:
        'Wat is volgens de reader het verschil tussen zelfbeeld en zelfvertrouwen?',
      options: [
        'Zelfbeeld gaat over anderen; zelfvertrouwen alleen over prestaties',
        'Zelfbeeld is wat je van jezelf weet; zelfvertrouwen is de waarderende kant',
        'Zelfbeeld is tijdelijk; zelfvertrouwen is erfelijk bepaald',
      ],
      correctIndex: 1,
      explanation:
        'Volgens de reader gaat het zelfbeeld om datgene wat iemand van zichzelf weet (hoe je over jezelf denkt), terwijl zelfvertrouwen gaat over de waarderende kant van het zelfbeeld (het vertrouwen en de waardering die je eraan geeft).',
      source: 'Reader deel 1, Zelfbeeld en zelfvertrouwen',
    },
    {
      id: 'pt3-q06',
      number: 6,
      topic: 'les2',
      question:
        'Na een mislukte sollicitatie zegt Tom: "Ik had gewoon pech, zulke dingen overkomen mij altijd en ik heb er geen invloed op." Waarop wijst deze uitspraak?',
      options: [
        'Interne locus of control',
        'Mastery-georiënteerd gedrag',
        'Externe locus of control',
      ],
      correctIndex: 2,
      explanation:
        'Bij een externe locus of control legt iemand de oorzaken van gebeurtenissen buiten de eigen beheersing en denkt hij weinig tot geen invloed te hebben op de gang van zaken.',
      source: 'Les 2 (dia 11–12) · Reader deel 1, Zelfbeeld en zelfvertrouwen',
    },
    {
      id: 'pt3-q07',
      number: 7,
      topic: 'les2',
      question: 'Welk kenmerk hoort bij een interne locus of control?',
      options: [
        'Verhoogde zelfredzaamheid en optimisme',
        'Sterke afhankelijkheid van begeleiders',
        'Grote kans op aangeleerde hulpeloosheid',
      ],
      correctIndex: 0,
      explanation:
        'Een interne locus of control zorgt volgens les 2 (dia 12) voor meer autonomie, verhoogde zelfredzaamheid, zelfwaardering, zelfvertrouwen, optimisme en een growth mindset. Afhankelijkheid en aangeleerde hulpeloosheid horen juist bij een externe locus of control.',
      source: 'Les 2 (dia 12)',
    },
    {
      id: 'pt3-q08',
      number: 8,
      topic: 'les2',
      question:
        'Een cursist stopt direct bij elke nieuwe opdracht omdat hij denkt dat inzet toch geen verschil maakt en er geen verband is tussen zijn gedrag en het resultaat. Hoe heet dit?',
      options: [
        'Cognitieve dissonantie',
        'Aangeleerde hulpeloosheid',
        'Social loafing',
      ],
      correctIndex: 1,
      explanation:
        'Aangeleerde hulpeloosheid is een extreme vorm van je niet autonoom en incompetent voelen: iemand ervaart geen oorzaak-gevolgrelatie tussen eigen inzet en uitkomst, denkt geen grip te hebben en haakt af.',
      source: 'Les 2 (dia 7 notities, dia 12) · Reader deel 1, Zelfbeeld en zelfvertrouwen',
    },
    {
      id: 'pt3-q09',
      number: 9,
      topic: 'les2',
      question:
        'Een ervaren badmintonner stapt over op padel en laat bewust oude slaggewoonten los om de nieuwe techniek goed onder de knie te krijgen. Welk gedrag vertoont zij?',
      options: [
        'Extrinsiek gemotiveerd gedrag',
        'Emotiegericht copinggedrag',
        'Mastery-georiënteerd gedrag',
      ],
      correctIndex: 2,
      explanation:
        'Mastery-georiënteerd gedrag betekent iets nieuws eigen willen maken vanuit de behoefte aan competentie, buiten de comfortzone treden en indien nodig eerder geleerde gewoonten loslaten om een nieuwe taak te beheersen.',
      source: 'Les 2 (dia 10) · Reader deel 1, Mastery',
    },
    {
      id: 'pt3-q10',
      number: 10,
      topic: 'les2',
      question:
        'Na weken oefenen lukt het Kim eindelijk om een lastige klimroute zelfstandig uit te klimmen, waardoor ze trots is en meer gelooft in haar eigen kunnen. Welke basisbehoefte is hier vervuld?',
      options: [
        'Competentie',
        'Autonomie',
        'Relatie',
      ],
      correctIndex: 0,
      explanation:
        'Competentie gaat over trots kunnen zijn en geloven in eigen kunnen ("ik kan het"). Autonomie gaat over invloed en keuzes hebben; relatie over erbij horen en gezien worden.',
      source: 'Les 2 (dia 8)',
    },

    // ==================== LES 3: Emotie, Flow & Stress (vragen 11-20) ====================
    {
      id: 'pt3-q11',
      number: 11,
      topic: 'les3',
      question: 'Wat onderscheidt volgens het college een emotie van een gevoel?',
      options: [
        'Gevoel is altijd zichtbaar voor anderen; emotie blijft altijd onzichtbaar',
        'Emotie is een uiterlijke reactie met actiebereidheid; gevoel is de innerlijke beleving',
        'Emoties zijn aangeleerd door cultuur; gevoelens zijn puur cognitief',
      ],
      correctIndex: 1,
      explanation:
        'Volgens Frijda en les 3 (dia 3–5) hebben emotie en gevoel de subjectieve beleving gemeen, maar is een emotie een beweging naar buiten met actiebereidheid (waarneembaar en dringend), terwijl gevoel de innerlijke beleving/interpretatie is.',
      source: 'Les 3 (dia 3–5 + notities) · Reader deel 1, Het begrip emotie (Frijda)',
    },
    {
      id: 'pt3-q12',
      number: 12,
      topic: 'les3',
      question:
        'Waarom zijn lichamelijke reacties zoals zweten of een snelle hartslag volgens Frijda op zichzelf niet genoeg om een emotie te duiden?',
      options: [
        'Lichamelijke reacties komen alleen voor bij negatieve emoties',
        'Fysiologische manifestaties horen bij gevoelens en niet bij emoties',
        'Dezelfde lichamelijke reacties treden bij meerdere emoties op',
      ],
      correctIndex: 2,
      explanation:
        'Fysiologische manifestaties (hartslag, adrenaline, zweten) treden bij verschillende emoties op — bijvoorbeeld zowel bij stress/angst als bij opwinding en blijdschap — en maken dus geen eenduidig onderscheid mogelijk.',
      source: 'Les 3 (dia 5) · Reader deel 1, Het begrip emotie (Frijda)',
    },
    {
      id: 'pt3-q13',
      number: 13,
      topic: 'les3',
      question:
        'Een spreker raakt steeds gespannen voor een zaal door de overtuiging dat hij zal dichtslaan. Op welke G uit het 5G-schema richt emotiemanagement zich primair om dit patroon te doorbreken?',
      options: [
        'Gedachte',
        'Gebeurtenis',
        'Gevolg',
      ],
      correctIndex: 0,
      explanation:
        'In het 5G-schema (Gebeurtenis, Gedachte, Gevoel, Gedrag, Gevolg) kun je door je gedachte te veranderen invloed uitoefenen op het gevoel, het gedrag en daarmee de uiteindelijke gevolgen.',
      source: 'Les 3 (dia 6) · Reader deel 1, Het reguleren van emoties (5 G’s)',
    },
    {
      id: 'pt3-q14',
      number: 14,
      topic: 'les3',
      question:
        'Een stagiair moet enveloppen dichtplakken; het werk daagt niet uit en ze voelt zich lusteloos en onverschillig. Welke toestand uit het flow-diagram is dit?',
      options: [
        'Angst',
        'Apathie',
        'Controle',
      ],
      correctIndex: 1,
      explanation:
        'Wanneer zowel de vereiste vaardigheid als de uitdaging van de omgeving laag is, ontstaat volgens Csikszentmihalyi apathie: lusteloos en onverschillig zijn.',
      source: 'Les 3 (dia 8 + notities) · Reader deel 1, Flow in de theorie',
    },
    {
      id: 'pt3-q15',
      number: 15,
      topic: 'les3',
      question:
        'Welke functie schakelt in het brein juist UIT wanneer iemand in een staat van flow zit?',
      options: [
        'Creatieve zelfexpressie',
        'Scherpte van de zintuigen',
        'Introspectie en besef van tijd',
      ],
      correctIndex: 2,
      explanation:
        'In het brein gaan tijdens flow creatieve zelfexpressie en zintuigen aan, terwijl introspectie (zelfreflectie), impulsbeheersing voor afleiding en besef van tijd juist uitschakelen.',
      source: 'Les 3 (dia 12 + notities)',
    },
    {
      id: 'pt3-q16',
      number: 16,
      topic: 'les3',
      question:
        'Tijdens een intense bergwandeling in flow merkt een wandelaar een schaafwond pas achteraf op. Welke stof uit de flow-cocktail onderdrukt pijn?',
      options: [
        'Endorfine',
        'Serotonine',
        'Norepinephrine',
      ],
      correctIndex: 0,
      explanation:
        'In de flow-cocktail onderdrukt endorfine pijn. Dopamine hoort bij beloning/risico, norepinephrine bij concentratie en serotonine bij ontspanning en stemming.',
      source: 'Les 3 (dia 12)',
    },
    {
      id: 'pt3-q17',
      number: 17,
      topic: 'les3',
      question:
        'Een nieuwe teamleider weegt af of haar eigen vaardigheden voldoende zijn om de hoge werkdruk van het team aan te kunnen. Welk beoordelingsproces van Lazarus is dit?',
      options: [
        'Primary appraisal',
        'Secondary appraisal',
        'Re-appraisal',
      ],
      correctIndex: 1,
      explanation:
        'Bij secondary appraisal vergelijk je de waargenomen taakeisen (draaglast) met je eigen mogelijkheden om ermee om te gaan (draagkracht). Primary appraisal beoordeelt of iets positief, neutraal of bedreigend is; re-appraisal is de hertaxatie achteraf.',
      source: 'Reader deel 1, Stress schematisch bekeken (Lazarus)',
    },
    {
      id: 'pt3-q18',
      number: 18,
      topic: 'les3',
      question:
        'Een jonge kok krijgt een pittige opdracht voor een vol restaurant. Zijn hartslag stijgt, maar hij ziet het als een mooie kans om zijn kunnen te tonen. Welke appraisal is dit?',
      options: [
        'Neutrale appraisal',
        'Negatieve appraisal',
        'Positieve appraisal',
      ],
      correctIndex: 2,
      explanation:
        'Bij een positieve appraisal wordt de discrepantie tussen draaglast en draagkracht positief geïnterpreteerd: de fysiologische opwinding wordt ervaren als een uitdaging (taakspanning) en kans om te laten zien wat je kunt.',
      source: 'Reader deel 1, Interactiemodel; persoon en omgeving',
    },
    {
      id: 'pt3-q19',
      number: 19,
      topic: 'les3',
      question:
        'Een afdeling moet binnen één week verplicht overstappen op een compleet nieuw registratiesysteem, wat veel stress veroorzaakt. Onder welke categorie stressoren valt dit?',
      options: [
        'Tempo van een verandering',
        'Fysieke omgeving',
        'Sociale omgeving',
      ],
      correctIndex: 0,
      explanation:
        'De vier categorieën stressoren zijn: fysieke omgeving, sociale omgeving, werkbelasting en het tempo van een verandering (zoals een snelle, gedwongen overstap naar een nieuwe werkwijze).',
      source: 'Reader deel 1, Oorzaken en gevolgen van stress; stressoren',
    },
    {
      id: 'pt3-q20',
      number: 20,
      topic: 'les3',
      question:
        'Wat is volgens het lesmateriaal een langetermijn-stressgevolg, en dus geen kortdurend stressverschijnsel?',
      options: [
        'Een droge mond en zweten',
        'Hoge bloeddruk en burn-out',
        'Plotselinge spierkramp en irritatie',
      ],
      correctIndex: 1,
      explanation:
        'Kortdurende stressverschijnselen zijn onder meer een droge mond, zweten, spierkramp en irritatie. Wanneer stress langdurig aanhoudt en de coping niet volstaat, ontstaan stressgevolgen zoals hoge bloeddruk, hoog cholesterol, ziekteverzuim, depressie en burn-out.',
      source: 'Les 3 (dia 19) · Reader deel 1, Van stressverschijnsel naar stressgevolg',
    },

    // ==================== LES 4: Vier-aspectenmodel van Schulz von Thun & Communicatie (vragen 21-26) ====================
    {
      id: 'pt3-q21',
      number: 21,
      topic: 'les4',
      question:
        'Welke drie aspecten vormen samen het betrekkingsniveau van een boodschap in het vier-aspectenmodel?',
      options: [
        'Zakelijk, relationeel en appellerend',
        'Zakelijk, expressief en relationeel',
        'Expressief, relationeel en appellerend',
      ],
      correctIndex: 2,
      explanation:
        'Een boodschap bestaat uit een inhoudsniveau (het zakelijke aspect: wat er gezegd wordt) en een betrekkingsniveau (hoe iets gezegd wordt), dat bestaat uit het expressieve, relationele en appellerende aspect.',
      source: 'Les 4 (dia 16 notities, dia 22) · Reader deel 2, § 3.4 De boodschap in communicatie',
    },
    {
      id: 'pt3-q22',
      number: 22,
      topic: 'les4',
      question:
        'Een trainer meldt aan de groep: "De sporthal sluit vanavond om negen uur." Welk aspect van het vier-aspectenmodel betreft puur deze feitelijke informatie?',
      options: [
        'Zakelijk aspect',
        'Appellerend aspect',
        'Expressief aspect',
      ],
      correctIndex: 0,
      explanation:
        'Het zakelijke aspect vormt het inhoudsniveau van de boodschap: de feiten waar het gesprek over gaat, los van intonatie, bedoeling of onderlinge relatie.',
      source: 'Les 4 (dia 16 notities) · Reader deel 2, § 3.4 Zakelijk aspect',
    },
    {
      id: 'pt3-q23',
      number: 23,
      topic: 'les4',
      question:
        'Tijdens een kennismakingsgesprek spreekt Eva met enthousiaste intonatie en open houding, waardoor de ander merkt hoeveel zin ze in de functie heeft. Welk aspect is dit?',
      options: [
        'Relationeel aspect',
        'Expressief aspect',
        'Zakelijk aspect',
      ],
      correctIndex: 1,
      explanation:
        'Bij het expressieve aspect geeft de zender via presentatie, taalgebruik en lichaamstaal informatie over zichzelf (innerlijke gevoelens, houding, enthousiasme).',
      source: 'Les 4 (dia 16 notities) · Reader deel 2, § 3.4 Expressief aspect',
    },
    {
      id: 'pt3-q24',
      number: 24,
      topic: 'les4',
      question:
        'Een ervaren collega zegt op neerbuigende toon tegen een stagiair: "Laat mij het maar doen, dat gaat sneller." Welk aspect maakt hier duidelijk hoe zij hun verhouding ziet?',
      options: [
        'Zakelijk aspect',
        'Appellerend aspect',
        'Relationeel aspect',
      ],
      correctIndex: 2,
      explanation:
        'Met het relationele aspect laat de zender merken hoe hij of zij de onderlinge relatie ziet (bijvoorbeeld een boven-positie ten opzichte van de ander).',
      source: 'Les 4 (dia 16 notities) · Reader deel 2, § 3.4 Relationeel aspect',
    },
    {
      id: 'pt3-q25',
      number: 25,
      topic: 'les4',
      question:
        'Een huisgenoot kijkt naar het overvolle aanrecht en zegt: "De vaatwasser is nog niet uitgeruimd." Hij hoopt dat de ander dit gaat doen. Welk aspect staat hier centraal?',
      options: [
        'Appellerend aspect',
        'Expressief aspect',
        'Zakelijk aspect',
      ],
      correctIndex: 0,
      explanation:
        'Het appellerende aspect draait om het effect of de actie die de zender bij de ontvanger probeert te bereiken ("ruim jij hem even uit?").',
      source: 'Les 4 (dia 16 notities) · Reader deel 2, § 3.4 Appellerend aspect',
    },
    {
      id: 'pt3-q26',
      number: 26,
      topic: 'les4',
      question:
        'Niels is zelf onzeker over zijn presentatie en gaat er daarom automatisch van uit dat zijn stille collega ook erg zenuwachtig is. Welke communicatiestoring is dit?',
      options: [
        'Technische storing',
        'Projectie van eigen gevoelens',
        'Stereotypering',
      ],
      correctIndex: 1,
      explanation:
        'Projectie van eigen gevoelens is aannemen dat de ander zich net zo voelt als jijzelf, waardoor boodschappen of signalen vervormd worden geïnterpreteerd.',
      source: 'Reader deel 2, § 3.4 Storingen in de communicatie',
    },

    // ==================== LES 1 (vragen 27-28) & LES 5 (vragen 29-30) ====================
    {
      id: 'pt3-q27',
      number: 27,
      topic: 'les1',
      question:
        'Na een periode van frustratie kiest een cursist één haalbaar doel en oefent elke dag tien minuten met het besef dat verbeteren tijd kost. Welke stap naar een growth mindset is dit?',
      options: [
        'Fantasie',
        'Frustratie',
        'Focus',
      ],
      correctIndex: 2,
      explanation:
        'Focus (stap 4) betekent je richten op een haalbaar doel in kleine stapjes, met het besef dat het inspanning kost. Dit volgt op fixed mindset, frustratie en fantasie.',
      source: 'Les 1 (dia 26–27) · Reader deel 1, Van een fixed mindset naar een growth mindset',
    },
    {
      id: 'pt3-q28',
      number: 28,
      topic: 'les1',
      question:
        'Sanne denkt positief over bloed doneren, voelt er trots bij en meldt zich daarom aan als donor. Welk aspect van haar attitude is het aanmelden?',
      options: [
        'Handelingsaspect',
        'Cognitief aspect',
        'Emotioneel aspect',
      ],
      correctIndex: 0,
      explanation:
        'Het daadwerkelijke gedrag of de gedragsintentie ("doen") hoort bij het handelingsaspect van een attitude. Gedachten zijn cognitief; gevoelens en waarden zijn emotioneel.',
      source: 'Les 1 (dia 16) · Reader deel 1, Het begrip attitude',
    },
    {
      id: 'pt3-q29',
      number: 29,
      topic: 'les5',
      question:
        'Een fietser wacht midden in de nacht voor een leeg rood stoplicht omdat het volgens hem een chaos wordt als iedereen verkeersregels negeert. Welk niveau van Kohlberg is dit?',
      options: [
        'Preconventioneel niveau',
        'Conventioneel niveau',
        'Postconventioneel niveau',
      ],
      correctIndex: 1,
      explanation:
        'Op het conventionele niveau leeft iemand regels na zodat systemen en de samenleving blijven functioneren (en niet uit pure angst voor een boete of vanuit een persoonlijk gewetensdilemma).',
      source: 'Les 5 (dia 11) · Reader deel 2, Niveaus van moreel besef (Kohlberg)',
    },
    {
      id: 'pt3-q30',
      number: 30,
      topic: 'les5',
      question:
        "Een tennisleraar legt de groep openlijk uit dat ze vandaag met zachtere ballen spelen zodat rally's langer duren. Welke vorm van contextmanipulatie is dit?",
      options: [
        'Indirecte materiële contextmanipulatie',
        'Directe sociale contextmanipulatie',
        'Directe materiële contextmanipulatie',
      ],
      correctIndex: 2,
      explanation:
        'Het aanpassen van de ballen is een materiële ingreep, en doordat de leraar het doel openlijk aan de groep uitlegt, is er sprake van directe materiële contextmanipulatie.',
      source: 'Les 5 (dia 16–19) · Reader deel 2, Contextmanipulatie',
    },
  ],
};
