import { makeExecutableSchema } from '@graphql-tools/schema';
import { loadFilesSync } from '@graphql-tools/load-files';
import { GraphQLSchema } from 'graphql';

import { todoResolver } from './resolvers/todo.resolver';
import { loginResolver } from './resolvers/login.resolver';

const typeDefs = loadFilesSync('src/**/*.graphql');

const resolver = {
  Query: { ...todoResolver.Query },
  Mutation: { ...loginResolver.Mutation, ...todoResolver.Mutation },
};

const schema: GraphQLSchema = makeExecutableSchema({
  resolvers: resolver,
  typeDefs,
});

export default schema;
