## Installation

Create an .env file based on .env.example

```bash
$ npm install
```

### If running VS Code and there are typescript errors, you may need to run the workspace version instead of the vscode version.
In the VS Code command palette, run the TypeScript: Select TypeScript version command. Make sure you have Use Workspace version selected.

## Running the app

Start database
```bash
$ docker-compose up -d
```

For development
```bash
$ npm run dev
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
