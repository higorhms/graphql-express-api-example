import { buildSchema, graphql } from 'graphql';

const user = {
  name: 'higor',
};

const schema = buildSchema(`
  type Query {
    hello: ${user}
  }
`);

const root = { hello: () => 'Hello world!' };

graphql(schema, '{ hello }', root).then(response => {
  console.log(response);
});
