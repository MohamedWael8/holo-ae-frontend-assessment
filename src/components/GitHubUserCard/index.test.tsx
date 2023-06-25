import renderer from "react-test-renderer";
import GitHubUserCard from "./index";

it("renders correctly", () => {
  const testUser = {
    avatar_url: "https://avatars.githubusercontent.com/u/1836624?v=4",
    events_url: "https://api.github.com/users/hello/events{/privacy}",
    followers_url: "https://api.github.com/users/hello/followers",
    following_url: "https://api.github.com/users/hello/following{/other_user}",
    gists_url: "https://api.github.com/users/hello/gists{/gist_id}",
    gravatar_id: "",
    html_url: "https://github.com/hello",
    id: 1836624,
    login: "hello",
    node_id: "MDEyOk9yZ2FuaXphdGlvbjE4MzY2MjQ=",
    organizations_url: "https://api.github.com/users/hello/orgs",
    received_events_url: "https://api.github.com/users/hello/received_events",
    repos_url: "https://api.github.com/users/hello/repos",
    score: 1,
    site_admin: false,
    starred_url: "https://api.github.com/users/hello/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/hello/subscriptions",
    type: "Organization",
    url: "https://api.github.com/users/hello",
    bio: "test bio",
    repository_count: 33,
    followers: 2,
    location: "Chicago, Il",
  };
  const tree = renderer
    .create(
      <GitHubUserCard
        key={testUser.login}
        name={testUser.login}
        url={testUser.html_url}
        ownerAvatar={testUser.avatar_url}
        bio={testUser.bio}
        location={testUser.location}
        repos={testUser.repository_count}
        followers={testUser.followers}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
