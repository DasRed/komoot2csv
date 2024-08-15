import 'dotenv/config'
import Client from '@dasred/komoot-client';
import commandLineArgs from 'command-line-args';
import dayjs from 'dayjs';
import fs from 'fs';

const options = commandLineArgs([
    {name: 'email', alias: 'e', type: String, defaultValue: process.env.K2C_EMAIL},
    {name: 'password', alias: 'p', type: String, defaultValue: process.env.K2C_PASSWORD},
    {name: 'file', alias: 'f', type: String, defaultValue: process.env.K2C_FILE},
    {name: 'filterSport', type: String, description: 'Filter by type sport. E.g. touringbicycle', defaultValue: process.env.K2C_FILTER_SPORT ?? undefined},
    {name: 'filterAfterDate', type: String, description: 'Filter by date and ignore all before given date. E.g. 2021-08-13T15:20:20.000Z', defaultValue: process.env.K2C_FILTER_AFTER_DATE ?? undefined},
    {name: 'locale', type: String, description: 'Locale to use for output. Default de-DE', defaultValue: process.env.K2C_LOCALE ?? 'de-DE'},
]);

Number.prototype.n2s  = function() {
    return this.toLocaleString(options.locale, {minimumFractionDigits: 0, maximumFractionDigits: 12});
}

const client = new Client({...options});

console.log('Requesting tours');
const tours     = await client.toursMade({sportTypes: options.filterSport, startDate: options.filterAfterDate});

let speedTotal    = 0;
let distanceTotal = 0;
let durationTotal = 0;

const result = [
    [
        'Id', 'Name', 'Date',

        'Ø Speed', 'Speed',
        'Total Distance (km)', 'Ø Distance (km)', 'Distance (km)',
        'Total Duration (h)', 'Ø Duration (h)', 'Duration (h)',

        'Sport',
        'Elevation Up (m)', 'Elevation Down (m)', 'Elevation Normalized',
        'Latitude', 'Longitude', 'Altitude'
    ].join(';')
].concat(tours.map((tour, index) => {
    speedTotal += tour.speed.inMotion;
    distanceTotal += tour.distance;
    durationTotal += tour.duration.inMotion;

    return [
        tour.id, tour.name, dayjs(tour.date).format('DD.MM.YYYY HH:mm:ss'),

        (speedTotal / (index + 1)).n2s(), tour.speed.inMotion.n2s(),
        distanceTotal.n2s(), (distanceTotal / (index + 1)).n2s(), tour.distance.n2s(),
        durationTotal.n2s(), (durationTotal / (index + 1)).n2s(), tour.duration.inMotion.n2s(),

        tour.sport,
        tour.elevation.up.n2s(), tour.elevation.down.n2s(),
        tour.startPoint.lat.n2s(), tour.startPoint.lng.n2s(), tour.startPoint.alt.n2s(),
    ].join(';');
}));

fs.writeFileSync(options.file, result.join('\n'), {encoding: 'utf8'});
console.log('Done');