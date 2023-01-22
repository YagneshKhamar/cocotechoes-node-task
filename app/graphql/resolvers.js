import axios from "axios";
import setConfig from "./config.axios.js";

export function resolver(gitHubToken, gitHubUser) {
  return {
    Query: {
      repos: async (obj, args, context) => {
        const { urlRoot, repoName } = args;
        const config = setConfig(gitHubToken, [
          urlRoot,
          gitHubUser,
          repoName,
        ]);
        const { data } = await axios(config);
        return data;
      },
      repoDetail: async (obj, args, context) => {
        const { urlRoot, repoName } = args;
        var config = setConfig(gitHubToken, [
          urlRoot,
          gitHubUser,
          repoName,
        ]);

        const { data } = await axios(config);
        return data;
      },
    },
  };
}
