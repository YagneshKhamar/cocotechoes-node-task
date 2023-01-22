export default function setConfig(gitToken, endpoint) {
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
