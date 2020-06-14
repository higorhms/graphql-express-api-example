import express from 'express';
import { buildSchema } from 'graphql';
import graphqlHTTP from 'express-graphql';

const user = { name: 'Higor', email: 'higor@higor.com', password: '123456' };

const schema = buildSchema(`
  type Query {
    users: User
  }

  type User {
    name: String
    email: String
    password: String
  }
`);

const Controller = {
  users: {
    name: () => user.name,
    email: () => user.email,
    password: () => user.password,
  },
};

const app = express();
app.use(express.json());

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: Controller,
    graphiql: true,
  }),
);

app.listen(3333, () => {
  console.log('Server started on port 3333');
});
