# Packweightr

Create packing lists and manage the total gear weight for your next backpacking trip.

## Overview

Turbo monorepo with NestJS API backed by Postgres and React frontend.

## Installation

1. Install dependencies

```bash
$ npm install
```

2. Create an .env file based on .env.example file.

3. If using vscode and getting typescript errors, you may need to "use workspace" version of typescript instead of vscode:
.vscocde/settings.json with
```json
{
  "typescript.tsdk": "node_modules/typescript/lib"
}
```

## Development

Start database
```bash
$ docker-compose up -d
```

For development
```bash
$ npm run dev
```
API: http://localhost:3000/api
Frontend: http://localhost:5173

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
