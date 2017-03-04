import micro from 'micro';
import cors from 'micro-cors';
import {buildSchema} from 'graphql';
import graphqlHTTP from 'express-graphql';
import makeador from 'makeador-core';

const PORT = process.env.PORT || 8000;

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

const corsSetup = cors({origin: __DEV__ ? '*' : 'https://makeador-web.now.sh'});

const corsEnabledGraphqlHTTPHandler = corsSetup(graphqlHTTPHandler);

const server = micro(corsEnabledGraphqlHTTPHandler);

server.listen(PORT);

console.log(`Server listening localhost:${PORT}`);
