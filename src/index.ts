#!/usr/bin/env node
/**
 * TODO:
 * - [ ] I want to create a schema from zero
 * - [ ] I want to reset the schema
 * - [ ] I want to update an existing schema
 */
const yargs = require('yargs/yargs');

const cliArguments = yargs(process.argv.slice(2)).options({
  pat: {
    type: 'string',
    alias: 'permanentAuthToken',
    demandOption: true,
    description: `Permanent Auth Token used to run migrations against your GraphCMS space
       please, refer to https://graphcms.com/docs/develop/management-sdk and follow the
       instructions there to get it
      `,
  },
}).argv;

if (!cliArguments.pat) {
  throw new Error('Permanent Auth Token is required');
}

console.log(`pat: ${cliArguments.pat}`);
