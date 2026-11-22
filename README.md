# komoot2csv

Command line tool that writes your recorded komoot tours with distance, duration, speed and elevation into a CSV file.

Documentation: https://www.marco-starker.de/en/projects/komoot2csv/docs
(Deutsch: https://www.marco-starker.de/de/projekte/komoot2csv/doku)

## Quick start

Requires Node.js 22.6 or later and Git.

```bash
git clone https://github.com/DasRed/komoot2csv.git
cd komoot2csv
npm install
npm start -- --email you@example.com --password secret --file ./tours.csv
```

All options can also be set via environment variables or a `.env` file (see `.env.example`). Show the help with:

```bash
npm start -- --help
```

## License

[MIT](LICENSE)
