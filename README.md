# Basale Beïnvloedingsprincipes (BBP) — Proeftoets App

Interactieve proeftoets-applicatie voor het PMT-vak **Basale Beïnvloedingsprincipes**, gebaseerd op de 5 lespresentaties (PPTX) en Readers deel 1 (BLP) & deel 2 (BEB) in `mat/`.

## Kenmerken
- **30 meerkeuzevragen met 3 opties (A/B/C)** in Proeftoets 1 (6 vragen per les).
- **Twee toetsmodi**:
  - *Oefenmodus*: directe feedback, uitleg en bronvermelding na elke vraag.
  - *Tentamenmodus*: eerst alle vragen maken, daarna de volledige uitslag en nabespreking.
- **Analyse per onderdeel (Les 1 t/m Les 5)**: zie direct per les je score, percentage en status (*Sterk*, *Redelijk*, *Extra oefenen*) en start met één klik gericht oefenen voor een zwakker onderdeel of alleen je foute vragen.

## Starten & bouwen

```bash
npm install
npm run dev
```

Voor een los te openen productie-build (`dist/index.html`):

```bash
npm run build
```

## Nieuwe proeftoetsen toevoegen (Proeftoets 2, 3, ...)

1. Maak een nieuw bestand aan in `src/data/exams/`, bijvoorbeeld `src/data/exams/proeftoets2.ts`, met het type `ExamSet`.
2. Gebruik voor elke vraag het `ExamQuestion`-format met strikt 3 opties (`options: [string, string, string]`), `correctIndex: 0 | 1 | 2`, `explanation` en `source`.
3. Importeer en voeg de nieuwe toets toe aan `EXAM_SETS` in `src/data/exams/index.ts`. De app toont de nieuwe toets direct in de bovenbalk.
