## Installation

Create an .env file based on .env.example

```bash
$ npm install
```

## Running the app

Start database
```bash
$ docker-compose up -d
```

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Database admin

Use postgres admin at http://localhost:5050 with credentials from env file.
