---
title: Überblick
description: Kommandozeilen-Tool, das deine aufgezeichneten komoot-Touren mit Strecke, Dauer, Tempo und Höhenmetern in eine CSV-Datei schreibt.
order: 0
section: Einstieg
---

`komoot2csv` holt deine aufgezeichneten Touren von komoot und schreibt sie in eine CSV-Datei, die du direkt in Excel,
Numbers oder LibreOffice öffnen kannst. Neben den Werten jeder Tour enthält sie laufende Summen und Durchschnitte, so
siehst du ohne eigene Formeln, wie sich deine Kilometer über das Jahr entwickeln.

## Kurzbeispiel

```bash
npm start -- --email du@example.com --password geheim --filterSport touringbicycle --file ./radtouren.csv
```

```text
Requesting tours
Done
```

## Was das Tool macht

- Meldet sich mit deinem komoot-Konto an und lädt alle aufgezeichneten Touren, älteste zuerst.
- Filtert auf Wunsch nach Sportart und Startdatum.
- Schreibt je Tour eine Zeile mit Datum, Strecke, Dauer, Tempo, Höhenmetern und Startpunkt.
- Formatiert Zahlen nach deinem Gebietsschema, standardmäßig deutsch mit Komma.

Alle Einstellungen gehen per Kommandozeile, Umgebungsvariable oder `.env`-Datei, siehe
[Konfiguration](configuration.md).

> [!WARNING]
> Das Tool nutzt über [komoot-client](https://www.marco-starker.de/de/projekte/komoot-client) die interne API der
> komoot-App. Ändert komoot sie, funktioniert es nicht mehr.

## Status

Version 1.1.0 von 2024.

## Verwandte Projekte

- [komoot-client](https://www.marco-starker.de/de/projekte/komoot-client): der Client, auf dem das Tool aufbaut.
- [komoot2mqtt](https://www.marco-starker.de/de/projekte/komoot2mqtt): schickt Statistiken deiner Touren per MQTT an
  Home Assistant.
