import commandLineUsage from 'command-line-usage';
import {options} from './config.js';

export default function () {
    console.log(commandLineUsage([
        {
            header:  'Synopsis',
            content: '$ npm start -- <options>'
        },
        {
            header:     'Options',
            optionList: options
        },
        {
            content:    'This app supports .env file syntax.',
        },
    ]));
}
