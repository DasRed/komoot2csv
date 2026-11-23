---
title: Configuration
description: All options and environment variables of komoot2csv with their defaults, plus the .env file for your komoot credentials and the locale used for numbers.
order: 20
slug: configuration
section: Usage
---

Every setting works as a command line option or as an environment variable. If both are set, the option wins.

## Options

| Option              | Variable                | Default        | Description                                                     |
|---------------------|-------------------------|----------------|-----------------------------------------------------------------|
| `-e`, `--email`     | `K2C_EMAIL`             | required       | Email address of the komoot account                             |
| `-p`, `--password`  | `K2C_PASSWORD`          | required       | Password of the komoot account                                  |
| `-f`, `--file`      | `K2C_FILE`              | `./output.csv` | Target file, gets overwritten                                   |
| `--filterSport`     | `K2C_FILTER_SPORT`      | all            | Only tours of this sport, e.g. `touringbicycle`                 |
| `--filterAfterDate` | `K2C_FILTER_AFTER_DATE` | all            | Only tours from this point in time, e.g. `2026-01-01T00:00:00.000Z` |
| `--locale`          | `K2C_LOCALE`            | `de-DE`        | Locale for numbers, e.g. `en-US`                                |
| `-h`, `--help`      |                         |                | Shows the help                                                  |

## .env file

If there is a `.env` in the repository folder, the tool reads it on start:

```dotenv
K2C_EMAIL=you@example.com
K2C_PASSWORD=secret
K2C_FILE=./bike-tours.csv
K2C_FILTER_SPORT=touringbicycle
K2C_LOCALE=en-US
```

> [!WARNING]
> The `.env` contains your komoot password. It is listed in `.gitignore`, but do not share it anyway.

## Locale

`--locale` only controls how numbers are written: `de-DE` gives `12,5`, `en-US` gives `12.5`. The column separator is
always a semicolon, the date always `DD.MM.YYYY hh:mm:ss`.
