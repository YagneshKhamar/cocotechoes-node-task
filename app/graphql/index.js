import { startStandaloneServer } from "@apollo/server/standalone";
import { ApolloServer } from "@apollo/server";
import { resolver } from "./resolvers.js";
import { definations } from "./definition.js";

export async function apolloServer(gitHubToken, gitHubUser, port) {
    const resolvers = resolver(gitHubToken, gitHubUser);
    const typeDefs = definations;
    const serverConfig = new ApolloServer({
        typeDefs,
        resolvers,
        graphiql: true,
    });
    return await startStandaloneServer(serverConfig, {
        listen: { port },
    });
}
