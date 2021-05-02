#!/usr/bin/env node
import { runMigrations } from './migrations';
import { populateContent } from './populateContent';
const yargs = require('yargs/yargs');

/**
 * TODO:
 * - [ ] I want to create a schema from zero
 * - [ ] I want to reset the schema
 * - [ ] I want to update an existing schema
 */

const cliArguments = yargs(process.argv.slice(2)).options({
  authToken: {
    type: 'string',
    demandOption: true,
    description: `Permanent Auth Token used to run migrations against your GraphCMS space
       please, refer to https://graphcms.com/docs/develop/management-sdk and follow the
       instructions there to get it
      `,
  },
  endpoint: {
    type: 'string',
    description: `Your environment URL / endpoint`,
  },
}).argv;

const { authToken, endpoint } = cliArguments;

if (!authToken || !endpoint) {
  throw new Error('Permanent Auth Token is required');
}

(async () => {
  await runMigrations({ authToken, endpoint });
  await populateContent({ authToken, endpoint });
})();
