
import * as dotenv from 'dotenv';
import { apolloServer } from "./app/graphql/index.js";

dotenv.config();

const PORT = process.env.PORT || 5000;
const GIT_TOKEN = process.env.GITHUB_TOKEN;
const GIT_OWNER = process.env.GIT_OWNER;

const { url } = await apolloServer(GIT_TOKEN, GIT_OWNER,PORT);

console.log(`🚀  Server ready at: ${url}`);
