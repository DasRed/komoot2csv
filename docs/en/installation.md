---
title: Installation
description: Clone komoot2csv, install the dependencies and run the first export.
order: 10
slug: installation
section: Getting started
---

komoot2csv is not an npm package you install globally. You clone the repository and run it with `npm start`.

## Requirements

| What    | Version | Why                                                             |
|---------|---------|-----------------------------------------------------------------|
| Node.js | 22.6+   | Required in `engines`                                           |
| Git     | any     | For cloning, and because npm fetches komoot-client from GitHub |
| komoot  | account | With email address and password                                 |

## Install

```bash
git clone https://github.com/DasRed/komoot2csv.git
cd komoot2csv
npm install
```

## First run

Show the help first:

```bash
npm start -- --help
```

Then put your credentials into a `.env` (template: `.env.example`) and start the export:

```bash
cp .env.example .env
npm start
```

By default the file ends up as `output.csv` in the repository folder. Everything you can set is listed under
[Configuration](configuration.md).

> [!NOTE]
> The `--` after `npm start` is required so npm passes the following options on to the tool.
