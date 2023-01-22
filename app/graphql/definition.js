export const definations = `#graphql
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
  repos(urlRoot: String, repoName: String): [Repo]
  repoDetail(urlRoot: String, repoName: String): RepoDetail
}
`;