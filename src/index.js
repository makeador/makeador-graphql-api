import micro from 'micro';
import cors from 'micro-cors';
import {buildSchema} from 'graphql';
import graphqlHTTP from 'express-graphql';
import makeador from 'makeador-core';

const PORT = process.env.PORT || 3000;

const schema = buildSchema(`
  type Query {
    makea: String
  }
`);

const rootValue = {
  makea: makeador
};

const graphqlHTTPHandler = graphqlHTTP({
  schema,
  rootValue,
  graphiql: true
});

const corsEnabledGraphqlHTTPHandler = cors()(graphqlHTTPHandler);

const server = micro(corsEnabledGraphqlHTTPHandler);

server.listen(PORT);

console.log(`Server listening on port ${PORT}`);
