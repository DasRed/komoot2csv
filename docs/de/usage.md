---
title: Verwendung
description: Touren mit komoot2csv exportieren, filtern und die Spalten der CSV-Datei richtig lesen.
order: 30
slug: verwendung
section: Nutzung
---

## Alle Touren exportieren

```bash
npm start
```

Mit Zugangsdaten in der `.env` reicht das. Ohne `.env` gibst du sie mit:

```bash
npm start -- -e du@example.com -p geheim
```

## Nur eine Sportart ab einem Datum

```bash
npm start -- --filterSport touringbicycle --filterAfterDate 2026-01-01T00:00:00.000Z --file ./rad-2026.csv
```

Laufende Summen und Durchschnitte beziehen sich dann nur auf die gefilterten Touren. So bekommst du zum Beispiel deine
Jahresbilanz auf dem Rad.

## Die Spalten

Die Datei beginnt mit einer Kopfzeile, danach folgt eine Zeile je Tour, älteste zuerst. Strecke in Kilometern, Dauer
in Stunden, Tempo in km/h, Höhen in Metern. Dauer und Tempo zählen nur die Zeit in Bewegung.

| Spalte                 | Inhalt                                                  |
|------------------------|---------------------------------------------------------|
| `Id`                   | ID der Tour bei komoot                                  |
| `Name`                 | Name der Tour                                           |
| `Date`                 | Startzeitpunkt, `TT.MM.JJJJ hh:mm:ss`                   |
| `Ø Speed`              | Durchschnitt der Tempi aller Touren bis hierhin         |
| `Speed`                | Tempo dieser Tour                                       |
| `Total Distance (km)`  | Summe der Strecke bis hierhin                           |
| `Ø Distance (km)`      | Durchschnittliche Strecke bis hierhin                   |
| `Distance (km)`        | Strecke dieser Tour                                     |
| `Total Duration (h)`   | Summe der Dauer bis hierhin                             |
| `Ø Duration (h)`       | Durchschnittliche Dauer bis hierhin                     |
| `Duration (h)`         | Dauer dieser Tour                                       |
| `Sport`                | Sport-Schlüssel von komoot                              |
| `Elevation Up (m)`     | Höhenmeter bergauf                                      |
| `Elevation Down (m)`   | Höhenmeter bergab                                       |
| `Elevation Normalized` | siehe Warnung unten                                     |
| `Latitude`             | Breitengrad des Startpunkts                             |
| `Longitude`            | Längengrad des Startpunkts                              |
| `Altitude`             | Höhe des Startpunkts                                    |

Die Werte mit „bis hierhin“ laufen mit: In der letzten Zeile stehen die Gesamtsumme und der Durchschnitt über alle
exportierten Touren.

> [!WARNING]
> In Version 1.1.0 hat die Kopfzeile 18 Spalten, die Datenzeilen aber nur 17: Der Wert für `Elevation Normalized`
> fehlt. Ab dieser Spalte steht deshalb alles eine Spalte zu weit links – unter `Elevation Normalized` der
> Breitengrad, unter `Latitude` der Längengrad, unter `Longitude` die Höhe, `Altitude` bleibt leer.

## Einschränkungen

- **Namen werden nicht maskiert.** Enthält ein Tourname ein Semikolon oder einen Zeilenumbruch, verrutschen die
  Spalten dieser Zeile.
- **Die Zieldatei wird ohne Rückfrage überschrieben.**
- **Das Datum** wird in der Zeitzone des Rechners ausgegeben, auf dem das Tool läuft.
