import { gql, GraphQLClient } from 'graphql-request';

type MigrationConfigParams = {
  authToken: string;
  endpoint: string;
};

// @ts-ignore
export async function populateContent({
  authToken,
  endpoint,
}: MigrationConfigParams) {
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${authToken}`,
    },
  });

  const createDrafts = gql`
    mutation populateMyModel($title: String) {
      createMyModel(data: { title: $title }) {
        id
        title
      }
    }
  `;

  const createDraftPromises = ['title-1', 'title-2', 'title-3'].map(title =>
    graphQLClient.request(createDrafts, { title }),
  );

  await Promise.all(createDraftPromises);

  const publishDrafts = gql`
    mutation populateMyModel {
      publishManyMyModelsConnection {
        edges {
          node {
            id
            title
          }
        }
      }
    }
  `;

  graphQLClient.request(publishDrafts);
}
