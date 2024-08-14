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
]);
if (options.filterAfterDate !== undefined) {
    options.filterAfterDate = new Date(options.filterAfterDate);
}

const client = new Client({...options});

console.log('Requesting tours');
const tours       = await client.toursMade();
let speedTotal    = 0;
let distanceTotal = 0;
let durationTotal = 0;

const result = [
    [
        'Id', 'Name', 'Date',

        'Speed', 'Ø Speed',
        'Total Distance (km)', 'Ø Distance (km)', 'Distance (km)',
        'Total Duration (h)', 'Ø Duration (h)', 'Duration (h)', 'Duration with Pause (h)',

        'Sport',
        'Elevation Up (m)', 'Elevation Down (m)',
        'Latitude', 'Longitude', 'Altitude'
    ].join(';')
].concat(
    tours
        .filter((tour) => {
            if (options.filterSport !== undefined && tour.sport !== options.filterSport) {
                return false;
            }

            return !(options.filterAfterDate !== undefined && tour.date < options.filterAfterDate);
        })
        .sort((a, b) => a.date - b.date)
        .map((tour, index) => {
            const distance          = tour.distance / 1000;
            const duration          = (tour.duration.inMotion ?? tour.duration.total) / 60 / 60;
            const durationWithPause = tour.duration.total / 60 / 60;
            const speed             = distance / duration;

            speedTotal += speed;
            distanceTotal += distance;
            durationTotal += duration;

            return [
                tour.id, tour.name, dayjs(tour.date).format('DD.MM.YYYY HH:mm:ss'),

                speed, speedTotal / (index + 1),
                distanceTotal, distanceTotal / (index + 1), distance,
                durationTotal, durationTotal / (index + 1), duration, durationWithPause,

                tour.sport,
                tour.elevation.up, tour.elevation.down,
                tour.startPoint.lat, tour.startPoint.lng, tour.startPoint.alt,
            ].join(';');
        })
);

fs.writeFileSync(options.file, result.join('\n'), {encoding: 'utf8'});
console.log('Done');