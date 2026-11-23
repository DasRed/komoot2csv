---
title: Konfiguration
description: Alle Optionen und Umgebungsvariablen von komoot2csv mit Standardwerten, dazu die .env-Datei für die komoot-Zugangsdaten und das Gebietsschema für Zahlen.
order: 20
slug: konfiguration
section: Nutzung
---

Jede Einstellung geht als Option auf der Kommandozeile oder als Umgebungsvariable. Die Option gewinnt, wenn beides
gesetzt ist.

## Optionen

| Option                    | Variable                | Standard       | Beschreibung                                               |
|---------------------------|-------------------------|----------------|------------------------------------------------------------|
| `-e`, `--email`           | `K2C_EMAIL`             | Pflicht        | E-Mail-Adresse des komoot-Kontos                           |
| `-p`, `--password`        | `K2C_PASSWORD`          | Pflicht        | Passwort des komoot-Kontos                                 |
| `-f`, `--file`            | `K2C_FILE`              | `./output.csv` | Zieldatei, wird überschrieben                              |
| `--filterSport`           | `K2C_FILTER_SPORT`      | alle           | Nur Touren dieser Sportart, z. B. `touringbicycle`         |
| `--filterAfterDate`       | `K2C_FILTER_AFTER_DATE` | alle           | Nur Touren ab diesem Zeitpunkt, z. B. `2026-01-01T00:00:00.000Z` |
| `--locale`                | `K2C_LOCALE`            | `de-DE`        | Gebietsschema für Zahlen, z. B. `en-US`                    |
| `-h`, `--help`            |                         |                | Zeigt die Hilfe                                            |

## .env-Datei

Liegt im Ordner des Repos eine `.env`, liest das Tool sie beim Start ein:

```dotenv
K2C_EMAIL=du@example.com
K2C_PASSWORD=geheim
K2C_FILE=./radtouren.csv
K2C_FILTER_SPORT=touringbicycle
K2C_LOCALE=de-DE
```

> [!WARNING]
> Die `.env` enthält dein komoot-Passwort. Sie steht in `.gitignore`, gib sie trotzdem nicht weiter.

## Gebietsschema

`--locale` bestimmt nur, wie Zahlen geschrieben werden: `de-DE` ergibt `12,5`, `en-US` ergibt `12.5`. Das
Trennzeichen zwischen den Spalten ist immer das Semikolon, das Datum immer `TT.MM.JJJJ hh:mm:ss`.
