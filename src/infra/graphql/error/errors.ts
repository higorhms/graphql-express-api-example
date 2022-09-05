import { ApolloError } from 'apollo-server-errors';

export const errors = {
  notFound: (message: string) => {
    throw new ApolloError(message, '404');
  },
  unauthorized: () => {
    throw new ApolloError('unauthorized', '401');
  },
  badRequest: (message: string) => {
    throw new ApolloError(message, '400');
  },
  forbidden: () => {
    throw new ApolloError(
      'You do not have permission to manage this resource',
      '403',
    );
  },
};
