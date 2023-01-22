import axios from "axios";

const gitHubToken = `Bearer ${process.env.GITHUB_TOKEN}`;

module.exports = {
    typeDefs,
    resolvers
}

const typeDefs = `#graphql
type Repo {
  name: String
  size: Int
  owner: Owner
}

type RepoDetail {
  name: String
  size: Int
  owner: Owner
  visibility: String
}

type Owner {
  login: String
  id: Int,
  node_id: String
  avatar_url: String
  gravatar_id: String
  url: String
  html_url: String
  followers_url: String
  following_url: String
  gists_url: String
  starred_url: String
  subscriptions_url: String
  organizations_url: String
  repos_url: String
  events_url: String
  received_events_url: String
  type: String
  site_admin: Boolean
}

type Query {
  repos: [Repo]
  repoDetail(repoName: String): RepoDetail
}
`;

export const resolvers = {
  Query: {
    repos: async () => {
      const config = setConfig(gitHubToken, [
        "users",
        "YagneshKhamar",
        "repos",
      ]);
      const { data } = await axios(config);
      return data;
    },
    repoDetail: async (obj, args, context) => {
      const { repoName } = args;
      var config = setConfig(gitHubToken, ["repos", "YagneshKhamar", repoName]);

      const { data } = await axios(config);
      return data;
    },
  },
};
