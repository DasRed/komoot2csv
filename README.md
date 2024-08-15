# komoot2csv
This little app extract your made tours from komoot based on your filters into a CAV file.

## Synopsis
`$ npm start -- <options>`

## Options
| Switch                   | Env Variable          |          | Default      | Example                  | Description                                      |
|:-------------------------|-----------------------|----------|--------------|--------------------------|:-------------------------------------------------|
| -e, --email string       | K2C_EMAIL             | required |              | nuff@narf.lol            | defines the email for komoot login.              |                                
| -p, --password string    | K2C_PASSWORD          | required |              | nuffNuffNarf             | defines the password for komoot login.           |                           
| -f, --file string        | K2C_FILE              | optional | ./output.csv | ./nuff.csv               | defines the output file.                         | 
| --filterSport string     | K2C_FILTER_SPORT      | optional |              | touringbicycle           | Filter by type sport.                            | 
| --filterAfterDate string | K2C_FILTER_AFTER_DATE | optional |              | 2021-08-13T15:20:20.000Z | Filter by date and ignore all before given date. |                              
| --locale string          | K2C_LOCALE            | optional | de-DE        | en-US                    | Locale to use for output.                        |                             
| -h, --help               |                       | optional |              |                          | Shows this help                                  | 

## .env file is supported
Here is an example
```dotenv
K2C_EMAIL=nuff@narf.lol
K2C_PASSWORD=nuffNuffNarf
K2C_FILE=./nuff.csv
K2C_LOCALE=de-DE
```

