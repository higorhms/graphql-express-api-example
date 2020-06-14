import express from 'express';
import { buildSchema } from 'graphql';
import graphqlHTTP from 'express-graphql';

const schema = buildSchema(`
  type Query {
    name: String
  }
`);

const Controller = {
  name: () => 'aaa',
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
