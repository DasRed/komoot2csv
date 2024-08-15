import 'dotenv/config'

import commandLineArgs from 'command-line-args';

export const options = [
    {name: 'email', alias: 'e', type: String, description: 'defines the email for komoot login. Env variable is K2C_EMAIL.', defaultValue: process.env.K2C_EMAIL},
    {name: 'password', alias: 'p', type: String, description: 'defines the password for komoot login. Env variable is K2C_PASSWORD.', defaultValue: process.env.K2C_PASSWORD},
    {name: 'file', alias: 'f', type: String, description: 'defines the output file. Default ./output.csv . Env variable is K2C_FILE.', defaultValue: process.env.K2C_FILE ?? './output.csv'},
    {name: 'filterSport', type: String, description: 'Filter by type sport. E.g. touringbicycle. Env variable is K2C_FILTER_SPORT.', defaultValue: process.env.K2C_FILTER_SPORT ?? undefined},
    {name: 'filterAfterDate', type: String, description: 'Filter by date and ignore all before given date. E.g. 2021-08-13T15:20:20.000Z. Env variable is K2C_FILTER_AFTER_DATE.', defaultValue: process.env.K2C_FILTER_AFTER_DATE ?? undefined},
    {name: 'locale', type: String, description: 'Locale to use for output. Default de-DE. Env variable is K2C_LOCALE.', defaultValue: process.env.K2C_LOCALE ?? 'de-DE'},
    {name: 'help', alias: 'h', type: Boolean, description: 'Shows this help'},
];

export default commandLineArgs(options);