.env variables are as follows
PORT = 5000

GITHUB_TOKEN = git hub token
GIT_OWNER = git hub owner

Apolo GraphQl QUERY
Repo Details

query ExampleQuery($urlRoot: String, $repoName: String) {
  repos(urlRoot: $urlRoot, repoName: $repoName) {
    name
    owner {
      avatar_url
      events_url
      followers_url
      url
      type
      subscriptions_url
      starred_url
      site_admin
      repos_url
      received_events_url
      organizations_url
      node_id
      id
      login
      html_url
      gravatar_id
      gists_url
      following_url
    }
    size
  }
}


Variables 
{
 "urlRoot": "users",
  "repoName": "repos"
}



================================================================

Repo Details

query RepoDetail($urlRoot: String, $repoName: String) {
  repoDetail(urlRoot: $urlRoot, repoName: $repoName) {
    visibility
    full_name
    size
    owner {
      login
      url
      type
      id
    }
    name
  }
}

Arguments
{
  "urlRoot": "repos",
  "repoName": "GreenridgeApp-1"
}

================================================================

Get YML / ReadMe File
getContent true to read the file, false to skip read
query RepoReadFile($urlRoot: String, $repoName: String, $getContent: Boolean) {
  repoReadFile(urlRoot: $urlRoot, repoName: $repoName, getContent: $getContent) {
    download_url
    git_url
    file_content
  }
}

Arguments Readme
{
  "urlRoot": "repos",
  "repoName": "GreenridgeApp-1/contents/README.md",
  "getContent": true
}

Arguments to Read YML file
{
  "urlRoot": "repos",
  "repoName": "GreenridgeApp-1/contents/12213213/url/.travis.yml",
  "getContent": true
}