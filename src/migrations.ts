import { newMigration } from '@graphcms/management';

type MigrationConfigParams = {
  authToken: string;
  endpoint: string;
};
const WAIT_FOR_MIGRATION_TO_FINISH = true;
const MIGRATION_SUCCEEDED = 'SUCCESS';

async function createMyModel({ authToken, endpoint }: MigrationConfigParams) {
  const migration = newMigration({
    authToken,
    endpoint,
  });

  migration.createModel({
    apiId: 'MyModel',
    apiIdPlural: 'MyModels',
    displayName: 'MyModelDisplay',
  });

  const { errors, status, name } = await migration.run(
    WAIT_FOR_MIGRATION_TO_FINISH,
  );

  if (status !== MIGRATION_SUCCEEDED) {
    throw new Error(`Something went wrong: ${errors}`);
  }

  console.log(`Migration ${name} succeeded`);
}

export async function runMigrations({
  authToken,
  endpoint,
}: MigrationConfigParams) {
  /**
   * 1. Create the base entities
   */
  await createMyModel({ authToken, endpoint });
}
