import Client from '@dasred/komoot-client';
import dayjs from 'dayjs';
import fs from 'fs';
import help from './help.js';
import config from './config.js';

if (config.help) {
    help();
    process.exit(0);
}

Number.prototype.n2s  = function() {
    return this.toLocaleString(config.locale, {minimumFractionDigits: 0, maximumFractionDigits: 12});
}

const client = new Client({...config});

console.log('Requesting tours');
const tours     = await client.toursMade({sportTypes: config.filterSport, startDate: config.filterAfterDate});

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

fs.writeFileSync(config.file, result.join('\n'), {encoding: 'utf8'});
console.log('Done');