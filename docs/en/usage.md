---
title: Usage
description: Export tours with komoot2csv, filter them and read the columns of the CSV file correctly.
order: 30
slug: usage
section: Usage
---

## Export all tours

```bash
npm start
```

With credentials in the `.env` that is all. Without a `.env`, pass them along:

```bash
npm start -- -e you@example.com -p secret
```

## One sport from a given date

```bash
npm start -- --filterSport touringbicycle --filterAfterDate 2026-01-01T00:00:00.000Z --file ./bike-2026.csv
```

Running totals and averages then refer to the filtered tours only. That gives you, for example, your yearly cycling
summary.

## The columns

The file starts with a header line, followed by one line per tour, oldest first. Distance in kilometres, duration in
hours, speed in km/h, elevation in metres. Duration and speed only count the time in motion.

| Column                 | Contents                                           |
|------------------------|----------------------------------------------------|
| `Id`                   | ID of the tour at komoot                           |
| `Name`                 | Name of the tour                                   |
| `Date`                 | Start time, `DD.MM.YYYY hh:mm:ss`                  |
| `Ø Speed`              | Average of the speeds of all tours so far          |
| `Speed`                | Speed of this tour                                 |
| `Total Distance (km)`  | Sum of the distance so far                         |
| `Ø Distance (km)`      | Average distance so far                            |
| `Distance (km)`        | Distance of this tour                              |
| `Total Duration (h)`   | Sum of the duration so far                         |
| `Ø Duration (h)`       | Average duration so far                            |
| `Duration (h)`         | Duration of this tour                              |
| `Sport`                | komoot sport key                                   |
| `Elevation Up (m)`     | Elevation gain                                     |
| `Elevation Down (m)`   | Elevation loss                                     |
| `Elevation Normalized` | see warning below                                  |
| `Latitude`             | Latitude of the start point                        |
| `Longitude`            | Longitude of the start point                       |
| `Altitude`             | Altitude of the start point                        |

The "so far" values are running: the last line holds the overall total and the average across all exported tours.

> [!WARNING]
> In version 1.1.0 the header has 18 columns but the data lines only 17: the value for `Elevation Normalized` is
> missing. From that column on everything sits one column too far left – latitude under `Elevation Normalized`,
> longitude under `Latitude`, altitude under `Longitude`, and `Altitude` stays empty.

## Limitations

- **Names are not escaped.** If a tour name contains a semicolon or a line break, the columns of that line shift.
- **The target file is overwritten without asking.**
- **The date** is written in the time zone of the machine the tool runs on.
