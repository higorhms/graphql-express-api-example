import { ApolloServer, gql } from 'apollo-server';

const myGraphqlSchema = gql`
  type User {
    name: String
    email: String
  }

  type Mutation {
    addUser(name: String, email: String): User
  }

  type Query {
    users: [User]
  }
`;

const users = [
  {
    name: 'Higor',
    email: 'higor@higor.com',
  },
  {
    name: 'John',
    email: 'John@john.com',
  },
];

const resolvers = {
  Query: {
    users: () => users,
  },
};

const mutations = {
  addUser: ({ name, email }: { name: string; email: string }) => {
    users.push({ name, email });
    console.log(users);
    return { name, email };
  },
};

const server = new ApolloServer({
  typeDefs: myGraphqlSchema,
  resolvers,
  rootValue: mutations,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
