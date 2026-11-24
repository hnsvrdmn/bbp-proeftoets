import type { ExamSet } from '../../types/exam';

export const proeftoets2: ExamSet = {
  id: 'proeftoets-2',
  title: 'Proeftoets 2 — Basale Beïnvloedingsprincipes',
  shortTitle: 'Proeftoets 2',
  subtitle: '30 korte meerkeuzevragen · Extra focus op coping, conformeren & metacognitie',
  description:
    'Nieuwe casussen met korte antwoordopties en extra aandacht voor copingstijlen, sociale invloed en metacognitie.',
  questions: [
    // ==================== LES 1 (vragen 1-5) ====================
    {
      id: 'pt2-q01',
      number: 1,
      topic: 'les1',
      question:
        "Daan groeit op met ouders die elke zondag wielrennen en ontwikkelt dezelfde liefde voor de sport. Waardoor ontstaat zo'n attitude?",
      options: [
        'Aangeleerd via ervaringen en voorbeeldfiguren',
        'Erfelijke aanleg van beide ouders',
        'Een aangeboren fixed mindset',
      ],
      correctIndex: 0,
      explanation:
        'Ouders en kinderen hebben vaak dezelfde attitude, maar attitudes zijn niet erfelijk. Ze worden aangeleerd door ervaringen, conditionering, informatievoorziening en identificatie-/voorbeeldfiguren.',
      source: 'Les 1 (dia 17, 20) · Reader deel 1, Het begrip attitude',
    },
    {
      id: 'pt2-q02',
      number: 2,
      topic: 'les1',
      question:
        'Noor vindt dierenwelzijn belangrijk en eet daarom geen vlees, maar op een barbecue pakt ze toch een hamburger en voelt zich ongemakkelijk. Tussen welke aspecten ontstaat hier cognitieve dissonantie?',
      options: [
        'Conditionering en perceptie',
        'Gedachten en handelen',
        'Autonomie en competentie',
      ],
      correctIndex: 1,
      explanation:
        'Cognitieve dissonantie ontstaat hier binnen de attitude tussen haar gedachten/opvattingen (dierenwelzijn belangrijk vinden) en haar handelen (toch vlees eten), wat innerlijke spanning oproept.',
      source: 'Les 1 (dia 19)',
    },
    {
      id: 'pt2-q03',
      number: 3,
      topic: 'les1',
      question:
        'Tijdens zijn eerste les denkt Bram dat de groep hem niet serieus neemt. Hij wordt gespannen en gaat daardoor zachter en sneller praten. Welk model brengt deze samenhang in kaart?',
      options: [
        'Het OPA-model',
        'De leercyclus van Kolb',
        'Het DVD-model',
      ],
      correctIndex: 2,
      explanation:
        'Het DVD-model (Denken–Voelen–Doen) brengt de verbinding tussen gedachten, gevoelens en gedrag van een persoon in kaart en maakt zichtbaar hoe deze elkaar beïnvloeden.',
      source: 'Les 1 (dia 5–6 + notities)',
    },
    {
      id: 'pt2-q04',
      number: 4,
      topic: 'les1',
      question:
        'Na een lastig pianostuk zegt de docent: "Ik zie dat je door veel te oefenen steeds vloeiender speelt." Welk effect heeft deze feedback?',
      options: [
        'Bevordert een growth mindset',
        'Versterkt een fixed mindset',
        'Wekt cognitieve dissonantie op',
      ],
      correctIndex: 0,
      explanation:
        'Feedback die gericht is op inzet, proces en vooruitgang ("het kost tijd om te verbeteren en ik zie je vooruitgang") stuurt aan op een growth mindset, omdat vaardigheden als leerbaar worden gezien.',
      source: 'Les 1 (dia 28)',
    },
    {
      id: 'pt2-q05',
      number: 5,
      topic: 'les1',
      question: 'Wat is het verschil tussen een attitude en een mindset?',
      options: [
        'Attitude is tijdelijk, mindset is erfelijk',
        'Mindset is specifiek je houding t.o.v. leren',
        'Mindset is voelen, attitude is alleen denken',
      ],
      correctIndex: 1,
      explanation:
        'Een attitude is een duurzame persoonlijke houding ten opzichte van een willekeurig onderwerp (denken, voelen en doen). Mindset is specifiek de attitude — en het handelen naar die overtuigingen — ten opzichte van je leervermogen en ontwikkeling.',
      source: 'Les 1 (dia 15, 21, 28)',
    },

    // ==================== LES 2 (vragen 6-10) ====================
    {
      id: 'pt2-q06',
      number: 6,
      topic: 'les2',
      question:
        'Tim doet alleen mee aan een hardloopwedstrijd voor de medaille; zonder medaille stopt hij direct met trainen. Welke motivatie stuurt Tim?',
      options: [
        'Intrinsieke motivatie',
        'Mastery-georiënteerde motivatie',
        'Extrinsieke motivatie',
      ],
      correctIndex: 2,
      explanation:
        'Bij extrinsieke motivatie wordt iemand van buitenaf aangespoord (bijvoorbeeld door een beloning zoals een medaille, geld of cijfer) en niet vanuit plezier of belangstelling voor de activiteit zelf.',
      source: 'Les 2 (dia 3–4) · Reader deel 1, Motivatie en basisbehoeften',
    },
    {
      id: 'pt2-q07',
      number: 7,
      topic: 'les2',
      question:
        'Lisa is nieuw bij de handbalclub en past haar kleding aan om bij de vriendinnengroep te horen. Welke laag uit Maslows piramide staat hier centraal?',
      options: [
        'Sociaal contact',
        'Zelfontplooiing',
        'Veiligheid en zekerheid',
      ],
      correctIndex: 0,
      explanation:
        'Bij de behoefte aan sociaal contact wil iemand ergens bij horen en zich geaccepteerd en geliefd voelen. Zelfontplooiing draait om groei/zingeving en veiligheid om stabiliteit en bescherming.',
      source: 'Les 2 (dia 6–7 + notities)',
    },
    {
      id: 'pt2-q08',
      number: 8,
      topic: 'les2',
      question:
        'Een therapeut laat een cliënt zelf kiezen in welke volgorde zij drie oefeningen uitvoeren. Op welke basisbehoefte van Deci en Ryan speelt de therapeut in?',
      options: [
        'Competentie',
        'Autonomie',
        'Relatie',
      ],
      correctIndex: 1,
      explanation:
        'Autonomie betekent zelf invloed kunnen uitoefenen en keuzes kunnen maken. Competentie gaat over geloven in eigen kunnen en relatie over gezien worden en erbij horen.',
      source: 'Les 2 (dia 8)',
    },
    {
      id: 'pt2-q09',
      number: 9,
      topic: 'les2',
      question:
        'Na een verloren zwemwedstrijd concludeert Sara dat haar keerpunt te traag was en plant ze extra training in. Wat laat zij zien?',
      options: [
        'Externe locus of control',
        'Aangeleerde hulpeloosheid',
        'Interne locus of control',
      ],
      correctIndex: 2,
      explanation:
        'Bij een interne locus of control ervaart iemand dat de oorzaak en controle binnen de eigen invloedssfeer liggen, wat leidt tot zelfredzaamheid en actief initiatief nemen.',
      source: 'Les 2 (dia 11–12) · Reader deel 1, Zelfbeeld en zelfvertrouwen',
    },
    {
      id: 'pt2-q10',
      number: 10,
      topic: 'les2',
      question:
        'Mila is vooraf overtuigd dat ze zal zakken voor haar rijexamen. Door die overtuiging verkrampt ze en maakt ze inderdaad fatale fouten. Welk principe is dit?',
      options: [
        'Self-fulfilling prophecy',
        'Pygmalion-effect',
        'Fundamentele attributiefout',
      ],
      correctIndex: 0,
      explanation:
        'Een self-fulfilling prophecy is een zichzelf waarmakende voorspelling: door iemands eigen verwachting richten denken, voelen en doen zich daarop en komt de voorspelling uit. Het Pygmalion-effect gaat over de verwachting die een ander over ons heeft.',
      source: 'Les 2 (dia 11) · Reader deel 1, Zelfbeeld en zelfvertrouwen',
    },

    // ==================== LES 3 (vragen 11-17, extra focus Copingstijlen) ====================
    {
      id: 'pt2-q11',
      number: 11,
      topic: 'les3',
      question:
        'Jesse heeft stress door een chaotisch werkrooster in een café. Hij plant een gesprek met zijn manager om samen een vaste planning te maken. Welke copingstijl gebruikt hij?',
      options: [
        'Cognitiegerichte copingstijl',
        'Probleemgeoriënteerde copingstijl',
        'Emotie-fysiologisch georiënteerde copingstijl',
      ],
      correctIndex: 1,
      explanation:
        'Bij een probleemgeoriënteerde copingstijl pak je actief de stressbron zelf aan ("mouwen opstropen"), bijvoorbeeld door het probleem op te lossen via een gesprek of de situatie concreet te veranderen.',
      source: 'Les 3 (dia 20–21) · Reader deel 1, Omgaan met stress; coping',
    },
    {
      id: 'pt2-q12',
      number: 12,
      topic: 'les3',
      question:
        'Lotte wordt niet gekozen voor een solo bij het orkest en voelt stress. Ze denkt: "Zo houd ik tijd over om mijn techniek te verbeteren." Welke copingstijl past ze toe?',
      options: [
        'Probleemgeoriënteerde copingstijl',
        'Emotie-fysiologisch georiënteerde copingstijl',
        'Cognitiegerichte copingstijl',
      ],
      correctIndex: 2,
      explanation:
        'Bij een cognitiegerichte copingstijl los je de spanning intern op door anders tegen de situatie aan te kijken (omdenken/herinterpreteren), zonder de feitelijke situatie zelf direct te veranderen.',
      source: 'Les 3 (dia 20, 23) · Reader deel 1, Omgaan met stress; coping',
    },
    {
      id: 'pt2-q13',
      number: 13,
      topic: 'les3',
      question:
        'Na een felle discussie op haar bijbaan gaat Eva een uur boksen om stoom af te blazen en huilt daarna uit bij een vriendin. Welke copingstijl is dit?',
      options: [
        'Emotie-fysiologisch georiënteerde copingstijl',
        'Probleemgeoriënteerde copingstijl',
        'Cognitiegerichte copingstijl',
      ],
      correctIndex: 0,
      explanation:
        'De emotie-fysiologisch georiënteerde copingstijl is gericht op het verminderen of uiten van de ervaren spanning door sporten, ademhalen, huilen, een goed gesprek of vermijding — niet op het wegnemen van de bron zelf.',
      source: 'Les 3 (dia 20, 22) · Reader deel 1, Omgaan met stress; coping',
    },
    {
      id: 'pt2-q14',
      number: 14,
      topic: 'les3',
      question:
        'Een collega loopt zonder te groeten langs. Koen denkt "hij is boos op mij", voelt onrust en ontwijkt hem de hele dag, waardoor de sfeer verslechtert. Welk model ordent dit patroon?',
      options: [
        'De aandachtscirkels van Eberspächer',
        'Het 5G-schema',
        'De piramide van Maslow',
      ],
      correctIndex: 1,
      explanation:
        'Het 5G-schema (Gebeurtenis → Gedachte → Gevoel → Gedrag → Gevolg) ordent precies hoe een gebeurtenis via een gedachte leidt tot een gevoel, gedrag en consequentie.',
      source: 'Les 3 (dia 6)',
    },
    {
      id: 'pt2-q15',
      number: 15,
      topic: 'les3',
      question:
        'Welke emotie hoort NIET bij de vier basisemoties (4 B’s), maar bij de complexere emoties?',
      options: [
        'Angst',
        'Verdriet',
        'Schaamte',
      ],
      correctIndex: 2,
      explanation:
        'De 4 B’s (basisemoties) zijn Blij/Vreugde, Boos, Bedroefd/Verdriet en Bang/Angst. Verbazing/verrassing, schaamte, schuld en walging worden genoemd als overige, complexere emoties.',
      source: 'Les 3 (dia 2)',
    },
    {
      id: 'pt2-q16',
      number: 16,
      topic: 'les3',
      question:
        'Een ervaren pianist moet tijdens een les steeds een heel eenvoudig kinderliedje herhalen. Welke toestand uit het flow-diagram past hierbij?',
      options: [
        'Verveling of ontspanning',
        'Apathie',
        'Angst of zorgen',
      ],
      correctIndex: 0,
      explanation:
        'Wanneer de vaardigheid hoog is maar de uitdaging laag blijft, ervaart iemand verveling (boredom) of ontspanning (relaxation). Apathie hoort bij lage vaardigheid en lage uitdaging; angst/zorgen bij lage vaardigheid en hoge uitdaging.',
      source: 'Les 3 (dia 8 + notities) · Reader deel 1, Flow in de theorie',
    },
    {
      id: 'pt2-q17',
      number: 17,
      topic: 'les3',
      question:
        'Bij een grote achterstand tijdens een tennispartij denkt Kasper: "Wat doe ik hier eigenlijk? Ik kan hier helemaal niets." In welke aandachtscirkel zit hij?',
      options: [
        'Cirkel 3: is-behoort-te-zijn vergelijking',
        'Cirkel 6: zinsvraag',
        'Cirkel 2: directe afleidingen',
      ],
      correctIndex: 1,
      explanation:
        'In cirkel 6 (de buitenste aandachtscirkel) stelt de sporter de zinsvraag ("Wat doe ik hier?") en denkt hij bij een achterstand niets meer te kunnen uitrichten.',
      source: 'Les 3 (dia 11 + notities) · Reader deel 1, Concentratie (Eberspächer)',
    },

    // ==================== LES 4 (vragen 18-24, extra focus Sociale invloed & conformeren) ====================
    {
      id: 'pt2-q18',
      number: 18,
      topic: 'les4',
      question:
        'Op zijn eerste werkdag lacht Sem mee om flauwe grappen die hij niet leuk vindt, omdat hij graag bij het team wil horen. Welke sociale invloed speelt hier?',
      options: [
        'Informationele sociale invloed',
        'Deskundigheidsmacht',
        'Normatieve sociale invloed',
      ],
      correctIndex: 2,
      explanation:
        'Bij normatieve sociale invloed pas je je gedrag aan groepsnormen aan om aardig gevonden en geaccepteerd te worden en buitensluiting te voorkomen (gebaseerd op de basisbehoefte aan relatie).',
      source: 'Les 4 (dia 6 + notities) · Reader deel 2, § 2 Conformisme',
    },
    {
      id: 'pt2-q19',
      number: 19,
      topic: 'les4',
      question:
        'Op een chique diner weet Tessa niet welk bestek ze bij het voorgerecht moet gebruiken. Ze kijkt wat de andere gasten pakken en doet hen na. Welke sociale invloed is dit?',
      options: [
        'Informationele sociale invloed',
        'Normatieve sociale invloed',
        'Relationele macht',
      ],
      correctIndex: 0,
      explanation:
        'Bij informationele sociale invloed gebruik je anderen in een onduidelijke situatie als bron van accurate informatie om je eigen gedrag richting te geven.',
      source: 'Les 4 (dia 6 + notities) · Reader deel 2, § 2 Conformisme',
    },
    {
      id: 'pt2-q20',
      number: 20,
      topic: 'les4',
      question: 'Welke uitspraak over conformeren is juist?',
      options: [
        'Het treedt alleen op als anderen er expliciet om vragen',
        'Het verandert gedrag, zonder duurzame attitudeverandering',
        'Het leidt vrijwel altijd tot een duurzame attitudeverandering',
      ],
      correctIndex: 1,
      explanation:
        'Conformeren is toegeven aan een (vermeende) norm van anderen zonder dat die anderen daarom vragen. Je kunt daarbij vanbinnen je eigen mening behouden: er is sprake van gedragsbeïnvloeding zonder duurzame attitudeverandering.',
      source: 'Les 4 (dia 6) · Reader deel 2, § 2 Conformisme',
    },
    {
      id: 'pt2-q21',
      number: 21,
      topic: 'les4',
      question:
        'Tijdens een storing raken vijf vreemden in een lift twintig minuten met elkaar aan de praat, zonder daarna contact te houden. Hoe heet deze vorm van samenzijn?',
      options: [
        'Referentiegroep',
        'Sociale categorie',
        'Togetherness',
      ],
      correctIndex: 2,
      explanation:
        'Togetherness is een groep mensen die een poosje samen is met directe interactie en enige gezamenlijke betrokkenheid, maar zonder blijvende groepsvorming. Sociale categorieën hebben nauwelijks interactie; een referentiegroep fungeert als langdurig oriëntatiekader.',
      source: 'Les 4 (dia 7–8)',
    },
    {
      id: 'pt2-q22',
      number: 22,
      topic: 'les4',
      question:
        'Een fysiotherapeut ziet iemand op straat mank lopen en vermoedt direct een kuitblessure, terwijl er slechts een steentje in de schoen zit. Welke perceptiefactor speelt hier een rol?',
      options: [
        "Vakkennis en geheugenschema's",
        'De eerste indruk',
        'Normen, waarden en taal',
      ],
      correctIndex: 0,
      explanation:
        'Door deskundigheidskennis en eerder opgedane ervaringen die in het geheugen zijn opgeslagen, ontstaat gerichtheid op bepaalde signalen (en soms tunnelvisie). In de reader wordt dit vakkennis en geheugenschema’s genoemd.',
      source: 'Les 3 (dia 17–18 notities) · Reader deel 2, § 2.2 Factoren bij waarneming',
    },
    {
      id: 'pt2-q23',
      number: 23,
      topic: 'les4',
      question:
        'Een diëtist stelt op basis van haar opleiding en ervaring een nieuw voedingsplan op, waarna de sporter haar advies opvolgt. Welke machtsbron zet zij in?',
      options: [
        'Legitieme macht',
        'Deskundigheidsmacht',
        'Relationele macht',
      ],
      correctIndex: 1,
      explanation:
        'Bij deskundigheidsmacht zet de beïnvloeder persoonlijke kennis en vaardigheden in om de ander te overtuigen of sturen. Legitieme macht komt voort uit een formele functie/positie; relationele macht uit de opgebouwde band.',
      source: 'Les 4 (dia 19–20) · Reader deel 2, § 3.2 Het gebruik van macht',
    },
    {
      id: 'pt2-q24',
      number: 24,
      topic: 'les4',
      question:
        'Een dirigent zegt op autoritaire toon tegen het koor: "Nu stil, ik begin." Ze maakt daarmee duidelijk dat zij boven de groep staat. Welk aspect van de boodschap is dit?',
      options: [
        'Zakelijk aspect',
        'Expressief aspect',
        'Relationeel aspect',
      ],
      correctIndex: 2,
      explanation:
        'Met het relationele aspect (op betrekkingsniveau) maakt de zender duidelijk hoe hij of zij de onderlinge verhouding ziet (hier: boven-positie). Het zakelijke aspect betreft de feiten; het expressieve aspect hoe iemand zichzelf presenteert.',
      source: 'Les 4 (dia 16 notities, dia 22) · Reader deel 2, § 3.4 Communicatie',
    },

    // ==================== LES 5 (vragen 25-30, extra focus Metacognitie) ====================
    {
      id: 'pt2-q25',
      number: 25,
      topic: 'les5',
      question:
        'Voordat ze begint voor haar rijtheorie weet Amber precies welke oefenapps, samenvattingen en studievaardigheden daarvoor nodig zijn. Welke component van metacognitie is dit?',
      options: [
        'Declaratieve component',
        'Procedurele component',
        'Strategische component',
      ],
      correctIndex: 0,
      explanation:
        'De declaratieve component van metacognitie gaat over weten wát je moet doen en je bewust zijn van de vaardigheden, werkwijzen en hulpmiddelen die nodig zijn om iets te leren.',
      source: 'Les 5 (dia 3 notities, dia 7) · Reader deel 1, Metacognitie',
    },
    {
      id: 'pt2-q26',
      number: 26,
      topic: 'les5',
      question:
        'Bas weet precies hoe hij stap voor stap een overzichtelijke mindmap opbouwt met hoofdtakken en kernwoorden. Welke component van metacognitie laat hij zien?',
      options: [
        'Declaratieve component',
        'Procedurele component',
        'Strategische component',
      ],
      correctIndex: 1,
      explanation:
        'De procedurele component gaat over de knowhow: weten hóe je een gekozen leeractiviteit uitvoert en aanpakt.',
      source: 'Les 5 (dia 3 notities, dia 7) · Reader deel 1, Metacognitie',
    },
    {
      id: 'pt2-q27',
      number: 27,
      topic: 'les5',
      question:
        "Tijdens het oefenen van een dans merkt Noor dat alleen video's kijken niet werkt. Ze schakelt over op hardop tellend oefenen voor de spiegel. Welke component van metacognitie past ze toe?",
      options: [
        'Procedurele component',
        'Declaratieve component',
        'Strategische component',
      ],
      correctIndex: 2,
      explanation:
        'De strategische component draait om bijsturen en een alternatieve leeractiviteit opstarten wanneer de oorspronkelijke aanpak niet blijkt te werken.',
      source: 'Les 5 (dia 3 notities, dia 7) · Reader deel 1, Metacognitie',
    },
    {
      id: 'pt2-q28',
      number: 28,
      topic: 'les5',
      question:
        'Tijdens een projectweek bewaakt Ruben het leerproces, toetst hij tussentijds zijn voortgang en stuurt hij zijn planning bij. Onder welke leeractiviteiten valt dit?',
      options: [
        'Regulatieve leeractiviteiten',
        'Cognitieve leeractiviteiten',
        'Affectieve leeractiviteiten',
      ],
      correctIndex: 0,
      explanation:
        'Regulatieve (sturings)activiteiten zijn gericht op het in goede banen leiden van het leerproces, zoals oriënteren, plannen, proces bewaken, tussentijds toetsen, bijsturen en evalueren.',
      source: 'Les 5 (dia 8) · Reader deel 1, Metacognitie (Tabel 1)',
    },
    {
      id: 'pt2-q29',
      number: 29,
      topic: 'les5',
      question:
        'Om een telefoonnummer van tien cijfers te onthouden, deelt Mila het op in drie groepjes. Hoe heet deze strategie en welk geheugen wordt daarmee ontlast?',
      options: [
        'Consolideren, voor het sensorisch register',
        'Chunking, voor het werkgeheugen',
        'Constructie, voor het procedurele geheugen',
      ],
      correctIndex: 1,
      explanation:
        'Door informatie te groeperen in betekenisvolle eenheden (chunks) ontlast je het werkgeheugen/kortetermijngeheugen, dat slechts ongeveer zeven (5 tot 7) losse elementen tegelijk kan vasthouden.',
      source: 'Les 5 (dia 22) · Reader deel 1, Geheugensystemen',
    },
    {
      id: 'pt2-q30',
      number: 30,
      topic: 'les5',
      question:
        'Een basketbalcoach vertelt het team dat hij de twee sterkste spelers over aparte teams verdeelt, zodat de rest meer aan de bal komt. Welke vorm van contextmanipulatie is dit?',
      options: [
        'Indirecte sociale contextmanipulatie',
        'Directe materiële contextmanipulatie',
        'Directe sociale contextmanipulatie',
      ],
      correctIndex: 2,
      explanation:
        'Het verdelen van spelers over teams is een sociale ingreep (onderlinge relaties/groepssamenstelling). Omdat de coach het doel expliciet aan het team benoemt, is het directe sociale contextmanipulatie.',
      source: 'Les 5 (dia 16–19) · Reader deel 2, Contextmanipulatie',
    },
  ],
};
