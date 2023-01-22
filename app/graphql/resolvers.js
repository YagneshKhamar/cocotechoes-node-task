import axios from "axios";
import setConfig from "./config.axios.js";
import https from 'https';

export function resolver(gitHubToken, gitHubUser) {
  return {
    Query: {
      repos: async (obj, args, context) => {
        const { urlRoot, repoName } = args;
        const config = setConfig(gitHubToken, [urlRoot, gitHubUser, repoName]);
        const { data } = await axios(config);
        return data;
      },
      repoDetail: async (obj, args, context) => {
        const { urlRoot, repoName } = args;
        var config = setConfig(gitHubToken, [urlRoot, gitHubUser, repoName]);

        const { data } = await axios(config);
        return data;
      },

      repoReadFile: async (obj, args, context) => {
        const { urlRoot, repoName, getContent } = args;
        var config = setConfig(gitHubToken, [urlRoot, gitHubUser, repoName]);

        let { data } = await axios(config);

        if (getContent && data.url) {
         let resp = await axios.get(data.url, {
            headers: {
              Accept: "application/vnd.github.raw, application/vnd.github.object, application/vnd.github.html, text/html,application/xhtml+xml",
              Authorization: gitHubToken,
              "X-GitHub-Api-Version": "2022-11-28",
            }
          });

          
          data["file_content"] = resp.data?.toString();
          return data;

        } else {
          return data;
        }
      },
    },
  };
}
