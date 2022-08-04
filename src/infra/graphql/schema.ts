import { makeExecutableSchema } from '@graphql-tools/schema';
import { loadFilesSync } from '@graphql-tools/load-files';
import { GraphQLSchema } from 'graphql';

import { zipCodeResolver } from './resolvers/zipcode-lookup.resolver';

const typeDefs = loadFilesSync('src/**/*.graphql');

const schema: GraphQLSchema = makeExecutableSchema({
  resolvers: zipCodeResolver,
  typeDefs,
});

export default schema;
