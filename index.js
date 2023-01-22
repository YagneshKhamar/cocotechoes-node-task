import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import * as dotenv from 'dotenv';
import { resolvers } from "./graphql-type";


dotenv.config();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  graphiql: true,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 5000 },
});

const setConfig = (gitToken, endpoint) => {
  return {
    method: "get",
    url: `https://api.github.com/${endpoint.join("/")}`,
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: gitToken,
      "X-GitHub-Api-Version": "2022-11-28",
    },
  };
};

console.log(`🚀  Server ready at: ${url}`);
