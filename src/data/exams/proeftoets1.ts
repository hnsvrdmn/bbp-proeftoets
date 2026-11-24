import type { ExamSet } from '../../types/exam';

export const proeftoets1: ExamSet = {
  id: 'proeftoets-1',
  title: 'Proeftoets 1 — Basale Beïnvloedingsprincipes',
  shortTitle: 'Proeftoets 1',
  subtitle: '30 meerkeuzevragen (3 opties) · Les 1 t/m Les 5',
  description:
    'Volledig gebaseerd op de 5 lespresentaties (PPTX) en geverifieerd aan de Readers deel 1 (BLP) en deel 2 (BEB).',
  questions: [
    // ==================== LES 1 (vragen 1-6) ====================
    {
      id: 'pt1-q01',
      number: 1,
      topic: 'les1',
      question:
        "Op de CALO wordt bij het OPA-model uitgegaan van het relationeel bewegingsconcept van Gordijn ('alles heeft met alles te maken'). Wat wordt volgens het college bedoeld met 'het gebeuren' in het midden waar de drie cirkels van het OPA-model elkaar raken?",
      options: [
        "De complexe werkelijkheid die ontstaat uit de voortdurende wisselwerking tussen persoon, omgeving en activiteit, waarin de mens zijn wereld bewegend 'verstaat'.",
        'De specifieke leeractiviteit of werkvorm die door de begeleider centraal wordt gesteld los van de omgeving.',
        'Het innerlijke cognitieve proces van de persoon waarin gedachten, gevoelens en gedrag op elkaar worden afgestemd.',
      ],
      correctIndex: 0,
      explanation:
        "In het OPA-model (Omgeving, Persoon, Activiteit) vormt het midden waar de drie cirkels elkaar raken 'het gebeuren': een onlosmakelijke mix van persoon, omgeving en activiteit (relationeel mensbeeld van Gordijn). De andere antwoorden isoleren alleen de activiteit (A) of beschrijven het DVD-model (Denken-Voelen-Doen).",
      source: 'Les 1 (dia 7–9 + notities) · Reader deel 1, Inleiding (Algemeen kader)',
    },
    {
      id: 'pt1-q02',
      number: 2,
      topic: 'les1',
      question:
        'Een PMT-student merkt tijdens een praktijkles dat een oefening spanning oproept. Na de les denkt hij terug aan wat er precies gebeurde en analyseert hij dit aan de hand van de theorie uit de reader, om het de volgende les anders uit te proberen. Welke volgorde van fasen uit de leercyclus van Kolb doorloopt deze student?',
      options: [
        'Reflectief observeren → concreet ervaren → actief experimenteren → conceptualiseren.',
        'Concreet ervaren → reflectief observeren → conceptualiseren → actief experimenteren.',
        'Concreet ervaren → conceptualiseren → reflectief observeren → actief experimenteren.',
      ],
      correctIndex: 1,
      explanation:
        'Volgens Kolb verloopt de leercyclus in de volgorde: concreet ervaren (voelen/meemaken) → reflectief observeren (terugkijken/observeren) → conceptualiseren (denken/theorie koppelen) → actief experimenteren (doen/uitproberen). De andere volgordes verwisselen deze stappen.',
      source: 'Les 1 (dia 4 + notities)',
    },
    {
      id: 'pt1-q03',
      number: 3,
      topic: 'les1',
      question:
        'Een student weet vanuit de theorielessen precies dat regelmatig sporten gezond is en neemt zich voor om drie keer per week te trainen. Toch slaat hij trainingen steeds over omdat hij er tegenop ziet en er geen plezier aan beleeft. Welk aspect van zijn attitude heeft volgens het lesmateriaal doorgaans de overhand en verklaart dit gedrag?',
      options: [
        'Het cognitieve aspect (denken), omdat aanwezige kennis en feiten over een attitudeobject het gedrag het sterkst sturen.',
        'Het handelingsaspect (doen), omdat de gedragsintentie altijd zwaarder weegt dan wat iemand denkt of voelt.',
        'Het emotionele aspect (voelen), omdat gevoelens en ervaringen het meest centrale en doorslaggevende onderdeel van een attitude vormen.',
      ],
      correctIndex: 2,
      explanation:
        'Een attitude bestaat uit denken (cognitief), voelen (emotioneel) en doen (handelingsaspect). Volgens les 1 en de reader heeft het emotionele aspect (voelen) vaak de overhand en is dit het meest centrale en doorslaggevende aspect — vergelijk het voorbeeld van roken ondanks de kennis dat het ongezond is.',
      source: 'Les 1 (dia 15–16) · Reader deel 1, Het begrip attitude',
    },
    {
      id: 'pt1-q04',
      number: 4,
      topic: 'les1',
      question:
        'Je traint volgens schema 3 keer per week voor een 10 km-loop, maar vanavond stormt het en blijf je op de bank liggen. Je ervaart spanning door de tegenstrijdigheid tussen je voornemen en je gedrag (cognitieve dissonantie). Op welke drie manieren kan iemand volgens het college deze spanning oplossen?',
      options: [
        'Door het aanpassen van gedachten (cognitief aspect), emoties via een afweermechanisme (emotioneel aspect) of de manier van doen (handelingsaspect).',
        'Door het vermijden van de stressor (emotiegericht), het aanpassen van de fysieke omgeving (contextmanipulatie) of het zoeken van externe steun.',
        'Door het opzoeken van een identificatiefiguur, het toepassen van conditionering of het overnemen van een andere groepsnorm.',
      ],
      correctIndex: 0,
      explanation:
        'Cognitieve dissonantie roept spanning op. Volgens dia 19 van les 1 los je die spanning op door het aanpassen van je gedachten (cognitief aspect), emoties/afweermechanisme (emotioneel aspect) of manier van doen (handelingsaspect). De andere antwoorden noemen coping/contextmanipulatie of bronnen voor het ontstaan van een attitude en groepsnormen.',
      source: 'Les 1 (dia 19 + notities)',
    },
    {
      id: 'pt1-q05',
      number: 5,
      topic: 'les1',
      question: 'Welke uitspraak over een fixed mindset en een growth mindset is JUIST?',
      options: [
        'Bij een fixed mindset hebben anderen een positieve voorbeeldfunctie, terwijl de ogen van anderen bij een growth mindset juist belemmerend werken door faalangst.',
        'Bij een fixed mindset wordt inspanning gezien als een indicatie voor gebrek aan talent, terwijl inspanning bij een growth mindset als prettig en bevorderlijk voor het leren wordt gezien.',
        'Bij een growth mindset liggen capaciteiten en intelligentie vast, maar worden mislukkingen geaccepteerd als bewijs van het huidige niveau.',
      ],
      correctIndex: 1,
      explanation:
        'Bij een fixed mindset worden capaciteiten als statisch gezien en geldt inspanning als teken van gebrek aan talent; bij een growth mindset zijn activiteiten leerbaar en is inspanning prettig en bevorderlijk. De andere uitspraken draaien kenmerken van fixed en growth mindset om.',
      source: 'Les 1 (dia 25) · Reader deel 1, Growth mindset & Fixed mindset',
    },
    {
      id: 'pt1-q06',
      number: 6,
      topic: 'les1',
      question:
        'Een turnster blijft weken hangen op hetzelfde niveau bij een nieuwe sprong en raakt geïrriteerd door het gebrek aan vooruitgang. Haar begeleider laat haar vervolgens voor zich zien hoe gaaf het zou zijn als ze de sprong wél beheerst, zodat ze weer positieve energie krijgt om de uitdaging aan te gaan. Welke stap uit het model om een fixed mindset om te buigen naar een growth mindset zet zij hiermee?',
      options: [
        'Stap 2 — Frustratie: het erkennen van onvrede over het gebrek aan vooruitgang als directe motor voor gedragsverandering.',
        'Stap 4 — Focus: je richten op een haalbaar doel in kleine stapjes met het besef dat leren inspanning kost.',
        'Stap 3 — Fantasie: een beeld maken van wat je wilt leren, wat positieve energie geeft en je losmaakt van frustratie.',
      ],
      correctIndex: 2,
      explanation:
        'Het 4-stappenmodel (3 F’s) verloopt via Stap 1 Fixed mindset (blijft op hetzelfde niveau) → Stap 2 Frustratie (over gebrek aan vooruitgang) → Stap 3 Fantasie (een beeld maken van wat je wilt leren, wat positieve energie geeft en motiveert) → Stap 4 Focus (haalbaar doel in kleine stapjes).',
      source: 'Les 1 (dia 26–27) · Reader deel 1, Van een fixed mindset naar een growth mindset',
    },

    // ==================== LES 2 (vragen 7-12) ====================
    {
      id: 'pt1-q07',
      number: 7,
      topic: 'les2',
      question:
        'Wat stelt het lesmateriaal over het onderscheid tussen intrinsieke en extrinsieke motivatie en het effect op leren?',
      options: [
        'Het onderscheid is niet altijd scherp te trekken, maar de grootste kans op blijvend leerresultaat en welbevinden ontstaat wanneer iemand intrinsiek gemotiveerd is en de zinvolheid van de activiteit inziet.',
        'Intrinsieke en extrinsieke motivatie sluiten elkaar volledig uit; zodra beloningen of cijfers meespelen, is er geen leerintentie meer mogelijk.',
        'Extrinsieke motivatie geeft de grootste kans op een blijvend leerresultaat, omdat externe beloningen en straffen het gedrag directer sturen dan eigen belangstelling.',
      ],
      correctIndex: 0,
      explanation:
        'Volgens reader deel 1 is het onderscheid tussen intrinsieke en extrinsieke motivatie niet scherp te trekken, maar is de kans op blijvend leerresultaat het grootst bij intrinsieke motivatie (en het inzien van de zinvolheid). De andere uitspraken zijn te absoluut of draaien het effect om.',
      source: 'Les 2 (dia 3, 8) · Reader deel 1, Motivatie en basisbehoeften',
    },
    {
      id: 'pt1-q08',
      number: 8,
      topic: 'les2',
      question:
        'Een student vraagt tijdens een praktijkles herhaaldelijk aan de docent: "Kunt u even meekijken of ik het wel goed doe?" Welke behoefte uit de piramide van Maslow past volgens het college bij dit voorbeeld, en welk uitgangspunt hoort bij Maslows model?',
      options: [
        'De behoefte aan waardering en erkenning; volgens Maslow kunnen alle lagen van de piramide los van elkaar en in willekeurige volgorde worden vervuld.',
        'De behoefte aan veiligheid en zekerheid; de piramide is hiërarchisch opgebouwd en hetzelfde gedrag kan bij verschillende personen een andere onderliggende behoefte hebben.',
        'De behoefte aan sociaal contact; volgens Maslow verwijst identiek zichtbaar gedrag altijd naar dezelfde onderliggende behoefte.',
      ],
      correctIndex: 1,
      explanation:
        'In les 2 (dia 7) wordt het vragen of de docent wil meekijken of het goed gaat expliciet genoemd als voorbeeld bij de behoefte aan veiligheid en zekerheid. Daarnaast stelt Maslow dat de piramide hiërarchisch is (onderliggende behoeften moeten eerst vervuld zijn) en dat hetzelfde gedrag voort kan komen uit verschillende behoeften.',
      source: 'Les 2 (dia 6–7 + notities)',
    },
    {
      id: 'pt1-q09',
      number: 9,
      topic: 'les2',
      question:
        'Volgens de zelfdeterminatietheorie (Deci & Ryan) hangt welbevinden samen met de drie basisbehoeften relatie, autonomie en competentie. Waarop moet een begeleider volgens het college als eerste inzetten om het leerproces te bevorderen?',
      options: [
        'Starten vanuit het vergroten van competentie door succeservaringen, waarna autonomie en relatie vanzelf ontstaan.',
        'Starten vanuit maximale autonomie voor de deelnemer, zodat deze eerst zelf de relatie en leerdoelen kan bepalen.',
        'Starten vanuit het investeren in de relatie, en van daaruit ruimte creëren voor autonomie en competentie.',
      ],
      correctIndex: 2,
      explanation:
        'Op de slotdia van les 2 (dia 13) staat letterlijk: "Creëer ruimte voor autonomie en competentie maar start vanuit (het investeren in) de relatie." De andere antwoorden kiezen een ander vertrekpunt dan het college voorschrijft.',
      source: 'Les 2 (dia 8, 13)',
    },
    {
      id: 'pt1-q10',
      number: 10,
      topic: 'les2',
      question: 'Welke uitspraak over mastery-georiënteerd gedrag is JUIST?',
      options: [
        'Aan mastery-georiënteerd gedrag ligt de behoefte aan competentie ten grondslag; iemand wil zich iets nieuws eigen maken, durft buiten de comfortzone te treden en heeft doorgaans een interne locus of control.',
        'Bij mastery-georiënteerd gedrag staat het blijven trainen van al geleerde vaardigheden centraal om succeservaringen te garanderen.',
        'Mastery-georiënteerd gedrag kenmerkt zich door een sterke behoefte aan begeleiding op maat en komt vooral voor bij een externe locus of control.',
      ],
      correctIndex: 0,
      explanation:
        'Mastery betekent iets nieuws eigen willen maken; de behoefte aan competentie (verbreden/verhogen) ligt eraan ten grondslag, met doorgaans een interne locus of control en lef om buiten de comfortzone te treden. De andere antwoorden verwarren mastery met het blijven herhalen van bekende vaardigheden (vgl. les 4 dia 3) of horen bij een externe locus of control.',
      source: 'Les 2 (dia 10) & Les 4 (dia 3 + notities) · Reader deel 1, Mastery',
    },
    {
      id: 'pt1-q11',
      number: 11,
      topic: 'les2',
      question:
        'Een cliënt haakt bij nieuwe bewegingsopdrachten steeds direct af met de gedachte: "Het maakt toch niet uit wat ik doe, ik heb er geen grip op en het lukt mij nooit." Welke combinatie van begrippen verklaart dit patroon het best?',
      options: [
        'Een interne locus of control gecombineerd met een hoge prestatiemotivatie, waarbij de persoon zichzelf overvraagt.',
        'Een externe locus of control met het gevaar op aangeleerde hulpeloosheid, een extreme vorm van zich niet autonoom en incompetent voelen.',
        'Cognitieve dissonantie gecombineerd met de behoefte aan zelfontplooiing, waardoor de persoon de taak vermijdt.',
      ],
      correctIndex: 1,
      explanation:
        'Bij een externe locus of control denkt iemand weinig tot geen invloed op de situatie te hebben (de oorzaken liggen buiten de eigen beheersing). Dit geeft gevaar voor aangeleerde hulpeloosheid: een extreme vorm van je niet autonoom en incompetent voelen, waardoor iemand afhaakt.',
      source: 'Les 2 (dia 7 notities, dia 11–12) · Reader deel 1, Zelfbeeld en zelfvertrouwen',
    },
    {
      id: 'pt1-q12',
      number: 12,
      topic: 'les2',
      question:
        'Een trainer denkt bij zichzelf (zonder dit uit te spreken) dat een nieuwe speler weinig potentie heeft. Onbewust geeft hij deze speler minder aanwijzingen en minder speeltijd, waardoor de speler inderdaad minder goed gaat presteren. Welk begrip beschrijft specifiek dat de (impliciete) verwachting van een ander onze prestaties beïnvloedt?',
      options: [
        'De fundamentele attributiefout.',
        'Sociale facilitatie.',
        'Het Pygmalion-effect.',
      ],
      correctIndex: 2,
      explanation:
        'Het Pygmalion-effect houdt volgens les 2 (dia 11) in dat de (impliciete) verwachting die een ander over ons heeft onze prestaties beïnvloedt. De fundamentele attributiefout gaat over het verklaren van gedrag en sociale facilitatie over de invloed van de aanwezigheid van anderen op taakuitvoering.',
      source: 'Les 2 (dia 11)',
    },

    // ==================== LES 3 (vragen 13-18) ====================
    {
      id: 'pt1-q13',
      number: 13,
      topic: 'les3',
      question:
        'Volgens Nico Frijda worden emoties gekenmerkt door drie verschijnselen: subjectieve beleving, gedragsverschijnselen en fysiologische manifestaties. Wat vormt volgens Frijda het bepalende verschil tussen een emotie en een gevoel?',
      options: [
        'De aanwezigheid van actiebereidheid (gedragsverschijnselen) bij een emotie, waardoor emoties dringender zijn, voorrang nemen en waarneembaar zijn voor anderen.',
        'De subjectieve beleving, omdat alleen bij emoties — en niet bij gevoelens — sprake is van een persoonlijke ervaring van de situatie.',
        'De fysiologische manifestaties, omdat elke specifieke emotie (zoals angst of blijdschap) altijd een unieke, onmiskenbare lichamelijke reactie veroorzaakt.',
      ],
      correctIndex: 0,
      explanation:
        'Volgens Frijda hebben emoties en gevoelens de subjectieve beleving gemeenschappelijk, maar is actiebereidheid (gedragsverschijnselen zoals toenadering zoeken, fight/flight/freeze) het bepalende verschil: dat maakt emoties dringender en zichtbaar. Fysiologische reacties (zoals een verhoogde hartslag) komen bij meerdere emoties voor en zijn dus niet uniek per emotie.',
      source: 'Les 3 (dia 3–5 + notities) · Reader deel 1, Het begrip emotie (Frijda)',
    },
    {
      id: 'pt1-q14',
      number: 14,
      topic: 'les3',
      question:
        'In het diagram van Csikszentmihalyi worden vaardigheid (x-as) en uitdaging (y-as) tegen elkaar afgezet. Wat ervaart een deelnemer volgens deze theorie wanneer zijn vaardigheid laag blijft, terwijl de uitdaging van de omgeving hoog is?',
      options: [
        'Apathie (apathy) of verveling (boredom).',
        'Zorgen (worry) of angst (anxiety).',
        'Spanning (arousal) of gecontroleerd functioneren (control).',
      ],
      correctIndex: 1,
      explanation:
        'Wanneer de vaardigheid laag blijft en de uitdaging van de omgeving hoog is, ervaart de deelnemer zorgen (worry) of angst (anxiety). Apathie/verveling ontstaat bij lage uitdaging; arousal/control/flow ontstaan wanneer vaardigheid en uitdaging beide hoog zijn.',
      source: 'Les 3 (dia 8 + notities) · Reader deel 1, Flow in de theorie',
    },
    {
      id: 'pt1-q15',
      number: 15,
      topic: 'les3',
      question:
        'Welke combinatie bestaat uit de voorwaarden (aanknopingspunten voor een bewegingsbeïnvloeder) om in een staat van flow te komen, in plaats van de gevolgen van in de flow zijn?',
      options: [
        'Verlies van zelfbewustzijn, het verdwijnen van tijdsbesef en een gevoel van controle over de activiteit.',
        'Het uitschakelen van introspectie, activatie van de flow-cocktail (dopamine/endorfines) en verlies van zelfbewustzijn.',
        'Doelgerichtheid, balans tussen vaardigheid en uitdaging (in de zone van naaste ontwikkeling) en directe feedback.',
      ],
      correctIndex: 2,
      explanation:
        'In les 3 (dia 9) en reader deel 1 worden de eerste drie kenmerken onderscheiden als voorwaarden om in flow te komen: doelgerichtheid, balans tussen vaardigheid en uitdaging (in de zone van naaste ontwikkeling) en directe feedback. Verlies van zelfbewustzijn, tijdsbesef dat verdwijnt en een gevoel van controle zijn gevolgen van in flow zijn.',
      source: 'Les 3 (dia 9, 12 + notities) · Reader deel 1, Wanneer in de flow?',
    },
    {
      id: 'pt1-q16',
      number: 16,
      topic: 'les3',
      question:
        'Tijdens een beslissende wedstrijd gaat het mis bij een sporter. In plaats van met zijn taak bezig te zijn, schiet door zijn hoofd: "Als we deze wedstrijd verliezen, halen we de play-offs niet meer en wat zal iedereen daarvan denken?" In welke aandachtscirkel van Eberspächer bevindt deze sporter zich?',
      options: [
        'Cirkel 5 — consequenties van winnen of verliezen (de aandacht ligt buiten het veld).',
        'Cirkel 4 — winnen of verliezen (gedachten puur over de uitslag van de wedstrijd).',
        'Cirkel 3 — is-behoort-te-zijn vergelijking (het huidige niveau vergelijken met het gewenste niveau).',
      ],
      correctIndex: 0,
      explanation:
        'In cirkel 5 van Eberspächer denkt de sporter aan de gevolgen van winnen of verliezen (zoals de play-offs missen of reacties van anderen daarna), waardoor de aandacht buiten het veld ligt. Cirkel 4 gaat alleen over de uitslag zelf (winnen/verliezen) en cirkel 3 over het beoordelen van het eigen niveau.',
      source: 'Les 3 (dia 11 + notities) · Reader deel 1, Concentratie (Eberspächer)',
    },
    {
      id: 'pt1-q17',
      number: 17,
      topic: 'les3',
      question: 'Welke uitspraak over stress, taakbeleving en perceptie is JUIST?',
      options: [
        'Een objectief te hoge draaglast is altijd de directe oorzaak van stress, ongeacht iemands zelfbeeld en ontwikkelde competenties.',
        'Of iemand stress ervaart hangt af van de persoonlijke perceptie van de balans tussen waargenomen eigen mogelijkheden (draagkracht) en waargenomen taakeisen (draaglast).',
        'Een discrepantie tussen waargenomen draaglast en draagkracht wordt altijd negatief geïnterpreteerd en leidt per definitie tot verminderd welbevinden.',
      ],
      correctIndex: 1,
      explanation:
        'Stress ontstaat uit de persoonlijke perceptie van het evenwicht tussen waargenomen draagkracht (eigen mogelijkheden/zelfbeeld/competenties) en waargenomen draaglast (taakeisen). Een objectief te hoge draaglast is dus niet altijd de oorzaak (vgl. les 4 dia 4) en een discrepantie kan ook positief (als uitdaging/taakspanning) geïnterpreteerd worden.',
      source: 'Les 3 (dia 13–14, 16–17) & Les 4 (dia 4) · Reader deel 1, Stress en coping',
    },
    {
      id: 'pt1-q18',
      number: 18,
      topic: 'les3',
      question:
        'Een student haalt een onvoldoende voor een tentamen en ervaart stress. Hij denkt bij zichzelf: "Balen, maar ik leer ervan en zie nu hoe ik het de volgende keer anders moet aanpakken." Welke copingstijl hanteert hij hier, en wat stelt het lesmateriaal over de \'beste\' copingstijl?',
      options: [
        'Een probleemgeoriënteerde copingstijl; onderzoek bewijst eenduidig dat deze stijl altijd tot de beste schoolprestaties en stressreductie leidt.',
        'Een emotie-fysiologisch georiënteerde copingstijl; deze stijl werkt alleen op de korte termijn en is altijd minder adequaat dan de andere stijlen.',
        'Een cognitiegerichte copingstijl (anders tegen de situatie aankijken); er is geen bewijs voor één \'beste\' stijl, omdat de geschiktheid afhangt van de stressor, situatie en persoonlijke voorkeur.',
      ],
      correctIndex: 2,
      explanation:
        'Op dia 23 van les 3 wordt precies dit tentamenvoorbeeld gegeven bij de cognitiegerichte copingstijl ("anders ernaar kijken"). Op dia 24 en in de reader staat dat er geen bewijs is voor één beste stijl; de effectiviteit hangt onder meer af van de stressor, de aard van de situatie, het criterium en de persoonlijke voorkeur.',
      source: 'Les 3 (dia 20, 23–24) · Reader deel 1, Omgaan met stress; coping',
    },

    // ==================== LES 4 (vragen 19-24) ====================
    {
      id: 'pt1-q19',
      number: 19,
      topic: 'les4',
      question:
        'Op een druk station zakt iemand in elkaar, maar niemand grijpt in. Een voorbijganger twijfelt, ziet dat niemand iets doet, concludeert daaruit dat het blijkbaar niet ernstig is en loopt ook door (het omstandereffect). Van welk type sociale invloed is hier sprake, en wat is kenmerkend voor conformeren?',
      options: [
        'Informationele sociale invloed (anderen als bron van informatie in een onduidelijke situatie); conformeren leidt niet tot een duurzame attitudeverandering.',
        'Normatieve sociale invloed (normen overnemen om geaccepteerd te worden); conformeren zorgt meestal wel voor een duurzame attitudeverandering.',
        'Normatieve sociale invloed (het vermijden van buitensluiting); conformeren vindt uitsluitend plaats wanneer anderen daar expliciet om vragen.',
      ],
      correctIndex: 0,
      explanation:
        'Het omstandereffect is volgens les 4 (dia 6) het voorbeeld van informationele sociale invloed: in een onduidelijke situatie gebruik je anderen als bron van informatie. Bovendien is conformeren toegeven aan een (vermeende) norm zonder dat anderen daarom vragen en leidt het niet tot een duurzame attitudeverandering.',
      source: 'Les 4 (dia 6 + notities) · Reader deel 2, § 2 Conformisme',
    },
    {
      id: 'pt1-q20',
      number: 20,
      topic: 'les4',
      question:
        'Een student moet tijdens de les een complexe, nieuwe beweging uitvoeren terwijl de klas meekijkt en de docent zijn individuele prestatie beoordeelt. Wat voorspelt de theorie over sociale facilitatie in deze situatie, en waarin verschilt dit van social loafing?',
      options: [
        'De aanwezigheid van anderen verbetert de prestatie bij zowel eenvoudige als complexe taken; bij social loafing presteert iemand slechter door te hoge individuele beoordelingsdruk.',
        'Bij een complexe taak onder toezicht en individuele beoordeling neemt de kans op een goede uitvoering af; bij social loafing spannen mensen zich juist minder in bij eenvoudige taken wanneer hun individuele bijdrage niet beoordeeld wordt.',
        'Bij een complexe taak onder toezicht treedt automatisch social loafing op; sociale facilitatie gebeurt alleen wanneer individuele inspanningen onzichtbaar zijn in een groep.',
      ],
      correctIndex: 1,
      explanation:
        'Bij sociale facilitatie is de individuele inspanning zichtbaar en wordt deze beoordeeld: bij eenvoudige, goed aangeleerde taken verbetert de uitvoering, maar bij moeilijke/complexe taken neemt de kans op een goede uitvoering af. Bij social loafing wordt de individuele bijdrage juist niet beoordeeld, waardoor mensen bij eenvoudige taken minder inspanning leveren.',
      source: 'Les 4 (dia 9 + notities) · Reader deel 2, § 1.5 Jouw denken, voelen, doen in een groep',
    },
    {
      id: 'pt1-q21',
      number: 21,
      topic: 'les4',
      question:
        'Tijdens een samenwerking spreekt een student zijn groepsgenoot streng en confronterend aan vanuit een boven-tegen positie. Welk gedrag roept dit volgens de wetmatigheden van de Roos van Leary waarschijnlijk op bij de ander?',
      options: [
        'Boven-tegen gedrag, omdat zowel de boven/onder-dimensie als de samen/tegen-dimensie hetzelfde gedrag bij de ander oproepen.',
        'Onder-samen gedrag, omdat beide dimensies in de Roos van Leary het tegenovergestelde gedrag bij de ander oproepen.',
        'Onder-tegen gedrag, omdat boven-gedrag het tegenovergestelde (onder-gedrag) oproept en tegen-gedrag besmettelijk is (hetzelfde oproept).',
      ],
      correctIndex: 2,
      explanation:
        'Volgens les 4 (dia 13) roepen boven- en ondergedrag het tegenovergestelde gedrag bij de ander op (boven → onder), terwijl samen- en tegengedrag besmettelijk zijn en hetzelfde gedrag oproepen (tegen → tegen). Boven-tegen lokt dus onder-tegen uit.',
      source: 'Les 4 (dia 13 + notities) · Reader deel 2, § 2.3 Het vormgeven van interacties',
    },
    {
      id: 'pt1-q22',
      number: 22,
      topic: 'les4',
      question:
        'Wanneer een medestudent te laat komt bij een overleg, denkt Sanne direct: "Hij is ook altijd zo laks." Wanneer Sanne de week erna zelf te laat komt, zegt ze: "Alle stoplichten zaten tegen en de bus had vertraging." Welk begrip verklaart dit verschil?',
      options: [
        'De fundamentele attributiefout: bij het gedrag van anderen worden dispositionele (persoonlijke) factoren overschat en situationele factoren onderschat, terwijl eigen fouten eerder extern worden verklaard.',
        'De self-fulfilling prophecy: door een negatieve verwachting over de ander te vormen, wordt zijn toekomstige gedrag in die richting gestuurd.',
        'Stereotypering: het indelen van eigen en andermans gedrag in hokjes op basis van algemene groepskenmerken.',
      ],
      correctIndex: 0,
      explanation:
        'De fundamentele attributiefout is de neiging om oorzaken van andermans gedrag vooral intern/dispositioneel te verklaren ("laks") en situationele factoren te onderschatten, terwijl we eigen fouten juist extern aan de situatie ("stoplichten/bus") toeschrijven om ons zelfbeeld positief te houden.',
      source: 'Les 4 (dia 14 + notities) · Reader deel 2, § 2.4 Het verklaren van gedrag',
    },
    {
      id: 'pt1-q23',
      number: 23,
      topic: 'les4',
      question:
        'Tijdens een tikspel struikelt een kind. De stagiair gaat op zijn hurken ernaast zitten, vraagt hoe het gaat en zegt dat het kind heel stoer is. Welke hoofdcategorie en specifieke machtsbron zet de stagiair hier in, en wat kenmerkt effectief machtsgebruik?',
      options: [
        'Positie als machtsbron → beloningsmacht; effectief machtsgebruik betekent dat je positie-gebonden macht consequent boven persoonlijke kwaliteiten stelt.',
        'Persoonlijke kwaliteiten → relationele macht; effectief machtsgebruik vereist het afstemmen van meerdere machtsbronnen op omgeving, persoon en activiteit (OPA), zodat de relatie goed blijft en de invloed als legitiem wordt ervaren.',
        'Persoonlijke kwaliteiten → deskundigheidsmacht; bij effectief machtsgebruik is de wederzijdse beïnvloeding tussen begeleider en deelnemer altijd volledig in evenwicht.',
      ],
      correctIndex: 1,
      explanation:
        'In les 4 (dia 20) wordt precies dit tikspel-voorbeeld gebruikt bij persoonlijke kwaliteiten → relationele macht. Effectief machtsgebruik houdt in dat je meerdere machtsbronnen en -middelen kunt inzetten en afstemt op O, P en A, zodat de relatie goed blijft en de invloed als legitiem wordt beschouwd (bij machtsuitoefening is wederzijdse beïnvloeding juist niet in evenwicht).',
      source: 'Les 4 (dia 17, 19–21) · Reader deel 2, § 3.2 Het gebruik van macht',
    },
    {
      id: 'pt1-q24',
      number: 24,
      topic: 'les4',
      question:
        'In de trein zegt een medereiziger op geïrriteerde toon tegen twee pratende studenten: "Dit is een stiltecoupé!" Waarop heeft het appellerende aspect van deze boodschap betrekking, en op welk niveau ontstaan conflicten in communicatie volgens het lesmateriaal meestal?',
      options: [
        'Op de feitelijke mededeling dat het een stiltecoupé is; problemen en conflicten komen meestal voort uit het inhoudsniveau (wat er gezegd wordt).',
        'Op hoe de zender zichzelf presenteert aan de ander; problemen en conflicten komen meestal voort uit het zakelijke aspect van de boodschap.',
        'Op het effect dat de zender probeert te bereiken (dat de studenten stil zijn); problemen en conflicten komen meestal voort uit het betrekkingsniveau (hoe iets gezegd wordt).',
      ],
      correctIndex: 2,
      explanation:
        'Het appellerende aspect (onderdeel van het betrekkingsniveau) gaat over het effect dat de zender probeert te bereiken ("wil je stil zijn?"). Problemen en conflicten bij mensen komen meestal voort uit het betrekkingsniveau (hoe iets gezegd wordt), niet uit het inhoudsniveau (zakelijke aspect).',
      source: 'Les 4 (dia 16 notities, dia 22) · Reader deel 2, § 3.4 Communicatie',
    },

    // ==================== LES 5 (vragen 25-30) ====================
    {
      id: 'pt1-q25',
      number: 25,
      topic: 'les5',
      question:
        'Na jaren niet te hebben geschaatst, bindt iemand weer schaatsen onder en rijdt zo weg. Tegelijkertijd moet hij even nadenken waar hij zijn fiets heeft gestald en hoe de verkeersregels rond het station werken. Welke twee vormen van het langetermijngeheugen worden hier respectievelijk aangesproken?',
      options: [
        'Eerst het procedurele geheugen (onthouden van vaardigheden die bijna nooit vergeten worden) en daarna het declaratieve geheugen (onthouden van feiten, gebeurtenissen en algemene kennis).',
        'Eerst het declaratieve geheugen (opgeslagen bewegingservaringen) en daarna het sensorisch register (filteren van relevante feiten).',
        'Eerst het werkgeheugen (groeperen van bewegingen in chunks) en daarna het procedurele geheugen (bewuste route- en regelkennis).',
      ],
      correctIndex: 0,
      explanation:
        'Het procedurele geheugen bewaart aangeleerde vaardigheden (zoals schaatsen, fietsen, veters strikken) die vrijwel nooit vergeten worden. Het declaratieve geheugen slaat feiten, gebeurtenissen en algemene kennis op (zoals waar je fiets staat en verkeersregels).',
      source: 'Les 5 (dia 2, 16 notities, 22–23) · Reader deel 1, Geheugensystemen',
    },
    {
      id: 'pt1-q26',
      number: 26,
      topic: 'les5',
      question:
        'Tijdens het studeren merkt een student dat alleen de reader doorlezen niet werkt om de stof te onthouden. Hij schakelt daarom over op het maken van een samenvatting in chunks en het oefenen met casusvragen. Welke component van metacognitie past deze student hier toe?',
      options: [
        'De declaratieve component (weten welke leeractiviteiten, eigen vaardigheden en hulpmiddelen nodig zijn om te leren).',
        'De strategische component (weten wanneer je wat moet doen, een alternatief kunnen opstarten en kunnen bijsturen wanneer de oorspronkelijke aanpak niet werkt).',
        'De procedurele component (weten hoe je een gekozen leeractiviteit stap voor stap aanpakt).',
      ],
      correctIndex: 1,
      explanation:
        'Volgens les 5 (dia 3 notities en dia 7) gaat de strategische component van metacognitie over weten wanneer je wat moet doen, het kunnen opstarten van een alternatieve aanpak en kunnen bijsturen als de oorspronkelijke aanpak niet werkt. Declaratief = weten wat je moet doen/nodig hebt; procedureel = weten hoe je het aanpakt.',
      source: 'Les 5 (dia 3 notities, dia 7) · Reader deel 1, Metacognitie',
    },
    {
      id: 'pt1-q27',
      number: 27,
      topic: 'les5',
      question:
        'Welke uitspraak over de relatie tussen groepsstructuur en groepscultuur en de kenmerken van de performingfase is JUIST?',
      options: [
        'De groepscultuur bepaalt wie met wie samenwerkt en wanneer, terwijl de groepsstructuur de sfeer en normen vormt; in de performingfase staan machtsverschillen en rolverdeling centraal.',
        'Groepsstructuur en groepscultuur staan los van elkaar; in de performingfase kijken groepsleden nog de kat uit de boom en zijn ze vooral gebaat bij externe sturing.',
        'De groepsstructuur schept de voorwaarden waarin cultuur zich kan ontwikkelen en de cultuur bepaalt de effectiviteit van de structuur; in de performingfase gaan eventuele problemen over de taak en niet over onderlinge relaties.',
      ],
      correctIndex: 2,
      explanation:
        'Groepsstructuur bepaalt wie met wie samenwerkt (aan wat en wanneer) en schept de voorwaarden voor cultuur; de cultuur (normen, waarden, sfeer) bepaalt op haar beurt de effectiviteit van de structuur. In de performingfase staat het uitvoeren van de taak centraal en gaan problemen over de taak in plaats van over relaties.',
      source: 'Les 5 (dia 5 notities, dia 9, dia 13) · Reader deel 2, Thema 4 & 5',
    },
    {
      id: 'pt1-q28',
      number: 28,
      topic: 'les5',
      question:
        'Tijdens een voetbalwedstrijd rolt de bal net over de zijlijn, zonder dat de scheidsrechter het ziet. De speler stopt zelf en geeft aan dat de bal uit was — ook al zegt de scheidsrechter dat er doorgespeeld mag worden — omdat de waarheid spreken voor hem zwaarder weegt dan de spelregel om altijd de beslissing van de scheidsrechter te volgen. Welk niveau van Kohlberg past bij deze onderbouwing?',
      options: [
        'Het postconventionele niveau: er is oog voor het dilemma en er vindt een eigen afweging van voor- en tegenargumenten plaats op basis van universele principes, ook als dat afwijkt van een geldende regel.',
        'Het conventionele niveau: regels en autoriteiten worden nageleefd zodat het sociale systeem goed functioneert en om sociale waardering te behouden.',
        'Het preconventionele niveau: het naleven of overtreden van regels gebeurt op basis van externe factoren, strafvermijding en eigenbelang.',
      ],
      correctIndex: 0,
      explanation:
        'Op het postconventionele niveau van Kohlberg weegt iemand normen tegen elkaar af (hier: beslissing van de scheidsrechter accepteren vs. de waarheid spreken) en maakt een eigen onderbouwde keuze op basis van algemene principes. Op conventioneel niveau volg je de regel/autoriteit om het systeem te laten functioneren; op preconventioneel niveau speelt men door als de scheidsrechter het niet ziet.',
      source: 'Les 5 (dia 11–12) · Reader deel 2, Niveaus van moreel besef (Kohlberg)',
    },
    {
      id: 'pt1-q29',
      number: 29,
      topic: 'les5',
      question:
        'Hoe verhouden de begrippen uit Vygotsky’s theorie over de zone van de naaste ontwikkeling (ZNO) zich tot het OPA-model?',
      options: [
        'De activiteit (A) wordt aangeboden binnen de zone van actuele ontwikkeling, zodat de persoon (P) volledig zelfstandig zonder hulp uit de omgeving (O) tot leren komt.',
        'De persoon (P) heeft een eigen ontwikkelingspotentieel, de bekwame ander uit de omgeving (O) biedt gerichte ondersteuning (scaffolding), en de cultuur/sociale interactie geeft richting aan de activiteit (A) net buiten het actuele bereik.',
        'De bekwame ander (O) plaatst de activiteit (A) in de paniekzone, zodat de persoon (P) via frustratie en mislukking sneller nieuwe vaardigheden consolideert.',
      ],
      correctIndex: 1,
      explanation:
        'In les 3 (dia 10) en les 5 (dia 14) wordt Vygotsky direct gekoppeld aan het OPA-model: O = de bekwame ander die als drager van cultuur via scaffolding helpt; A = de activiteit die door sociale interactie richting krijgt in de ZNO (net/afgepast buiten bereik); P = het eigen ontwikkelingspotentieel van de persoon.',
      source: 'Les 3 (dia 10) & Les 5 (dia 14) · Reader deel 2, Thema 5 Vygotsky',
    },
    {
      id: 'pt1-q30',
      number: 30,
      topic: 'les5',
      question:
        "Een psychomotorisch therapeut vraagt een cliënt die moeite heeft met grenzen aangeven om vóór de les veel te veel zware spullen vanuit de berging naar de zaal te tillen. De therapeut benoemt niet dat het eigenlijke doel is dat de cliënt leert 'stop' te zeggen (grenshantering als onderstroom). Welke vorm van contextmanipulatie past de therapeut hier toe?",
      options: [
        'Directe materiële contextmanipulatie (een aanpassing van materiaal waarbij rechttoe-rechtaan instructie wordt gegeven naar een vooraf bekend doel).',
        'Indirecte sociale contextmanipulatie (een ingreep in de onderlinge rollen of groepssamenstelling zonder het achterliggende doel te benoemen).',
        'Indirecte materiële contextmanipulatie (een ingreep met materiaal waarbij het achterliggende gedragsdoel niet expliciet aan de deelnemer wordt benoemd).',
      ],
      correctIndex: 2,
      explanation:
        'Het inzetten van te veel spullen is een materiële ingreep (materiële contextmanipulatie). Omdat het achterliggende doel (grenshantering / "stop" zeggen) niet expliciet wordt benoemd aan de deelnemer, is dit indirecte contextmanipulatie (dia 18 + notities dia 11 van les 5).',
      source: 'Les 5 (dia 16–19 + notities dia 11) · Reader deel 2, Contextmanipulatie',
    },
  ],
};
