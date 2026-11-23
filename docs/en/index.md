---
title: Overview
description: Command line tool that writes your recorded komoot tours with distance, duration, speed and elevation into a CSV file. What it does, status and related tools.
order: 0
section: Getting started
---

`komoot2csv` fetches your recorded tours from komoot and writes them into a CSV file you can open right away in Excel,
Numbers or LibreOffice. Besides the values of each tour it contains running totals and averages, so you see how your
kilometres develop over the year without writing your own formulas.

## Quick example

```bash
npm start -- --email you@example.com --password secret --filterSport touringbicycle --file ./bike-tours.csv
```

```text
Requesting tours
Done
```

## What the tool does

- Signs in with your komoot account and loads all recorded tours, oldest first.
- Optionally filters by sport and start date.
- Writes one line per tour with date, distance, duration, speed, elevation and start point.
- Formats numbers according to your locale, German with decimal comma by default.

All settings go via command line, environment variable or `.env` file, see [Configuration](configuration.md).

> [!WARNING]
> Through [komoot-client](https://www.marco-starker.de/en/projects/komoot-client) the tool uses the internal API of the
> komoot app. If komoot changes it, the tool stops working.

## Status

Version 1.1.0 from 2024.

## Related projects

- [komoot-client](https://www.marco-starker.de/en/projects/komoot-client): the client the tool is built on.
- [komoot2mqtt](https://www.marco-starker.de/en/projects/komoot2mqtt): sends statistics of your tours to Home Assistant
  via MQTT.
