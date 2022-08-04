import { ApolloError } from 'apollo-server-errors';

export const errors = {
  notFound: (message: string) => {
    throw new ApolloError(message, '404');
  },
};
