---
title: Installation
description: komoot2csv klonen, Abhängigkeiten installieren und den ersten Export starten.
order: 10
slug: installation
section: Einstieg
---

komoot2csv ist kein npm-Paket, das du global installierst. Du klonst das Repository und startest es mit `npm start`.

## Voraussetzungen

| Was     | Version | Warum                                                     |
|---------|---------|-----------------------------------------------------------|
| Node.js | ab 22.6 | So steht es in `engines`                                  |
| Git     | beliebig | Zum Klonen und weil npm den komoot-client von GitHub lädt |
| komoot  | Konto   | Mit E-Mail-Adresse und Passwort                           |

## Installieren

```bash
git clone https://github.com/DasRed/komoot2csv.git
cd komoot2csv
npm install
```

## Erster Start

Zeig dir zuerst die Hilfe an:

```bash
npm start -- --help
```

Dann trägst du deine Zugangsdaten in eine `.env` ein (Vorlage: `.env.example`) und startest den Export:

```bash
cp .env.example .env
npm start
```

Die Datei landet standardmäßig als `output.csv` im Ordner des Repos. Was du alles einstellen kannst, steht unter
[Konfiguration](configuration.md).

> [!NOTE]
> Das `--` nach `npm start` ist nötig, damit npm die folgenden Optionen an das Tool weitergibt.
