import renderer from "react-test-renderer";
import GitHubRepoCard from "./index";

it("renders correctly", () => {
  const testRepo = {
    id: 1045381,
    node_id: "MDEwOlJlcG9zaXRvcnkxMDQ1Mzgx",
    name: "phonegap-start",
    full_name: "phonegap/phonegap-start",
    private: false,
    owner: {
      login: "phonegap",
      id: 60365,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjYwMzY1",
      avatar_url: "https://avatars.githubusercontent.com/u/60365?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/phonegap",
      html_url: "https://github.com/phonegap",
      followers_url: "https://api.github.com/users/phonegap/followers",
      following_url:
        "https://api.github.com/users/phonegap/following{/other_user}",
      gists_url: "https://api.github.com/users/phonegap/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/phonegap/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/phonegap/subscriptions",
      organizations_url: "https://api.github.com/users/phonegap/orgs",
      repos_url: "https://api.github.com/users/phonegap/repos",
      events_url: "https://api.github.com/users/phonegap/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/phonegap/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/phonegap/phonegap-start",
    description: "PhoneGap Hello World app",
    fork: false,
    url: "https://api.github.com/repos/phonegap/phonegap-start",
    forks_url: "https://api.github.com/repos/phonegap/phonegap-start/forks",
    keys_url:
      "https://api.github.com/repos/phonegap/phonegap-start/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/phonegap/phonegap-start/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/phonegap/phonegap-start/teams",
    hooks_url: "https://api.github.com/repos/phonegap/phonegap-start/hooks",
    issue_events_url:
      "https://api.github.com/repos/phonegap/phonegap-start/issues/events{/number}",
    events_url: "https://api.github.com/repos/phonegap/phonegap-start/events",
    assignees_url:
      "https://api.github.com/repos/phonegap/phonegap-start/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/phonegap/phonegap-start/branches{/branch}",
    tags_url: "https://api.github.com/repos/phonegap/phonegap-start/tags",
    blobs_url:
      "https://api.github.com/repos/phonegap/phonegap-start/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/phonegap/phonegap-start/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/phonegap/phonegap-start/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/phonegap/phonegap-start/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/phonegap/phonegap-start/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/phonegap/phonegap-start/languages",
    stargazers_url:
      "https://api.github.com/repos/phonegap/phonegap-start/stargazers",
    contributors_url:
      "https://api.github.com/repos/phonegap/phonegap-start/contributors",
    subscribers_url:
      "https://api.github.com/repos/phonegap/phonegap-start/subscribers",
    subscription_url:
      "https://api.github.com/repos/phonegap/phonegap-start/subscription",
    commits_url:
      "https://api.github.com/repos/phonegap/phonegap-start/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/phonegap/phonegap-start/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/phonegap/phonegap-start/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/phonegap/phonegap-start/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/phonegap/phonegap-start/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/phonegap/phonegap-start/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/phonegap/phonegap-start/merges",
    archive_url:
      "https://api.github.com/repos/phonegap/phonegap-start/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/phonegap/phonegap-start/downloads",
    issues_url:
      "https://api.github.com/repos/phonegap/phonegap-start/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/phonegap/phonegap-start/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/phonegap/phonegap-start/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/phonegap/phonegap-start/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/phonegap/phonegap-start/labels{/name}",
    releases_url:
      "https://api.github.com/repos/phonegap/phonegap-start/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/phonegap/phonegap-start/deployments",
    created_at: "2010-11-02T17:45:54Z",
    updated_at: "2023-06-25T12:00:30Z",
    pushed_at: "2022-08-25T11:51:42Z",
    git_url: "git://github.com/phonegap/phonegap-start.git",
    ssh_url: "git@github.com:phonegap/phonegap-start.git",
    clone_url: "https://github.com/phonegap/phonegap-start.git",
    svn_url: "https://github.com/phonegap/phonegap-start",
    homepage: "",
    size: 8050,
    stargazers_count: 3414,
    watchers_count: 3414,
    language: "JavaScript",
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    has_discussions: false,
    forks_count: 6594,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 27,
    license: {
      key: "apache-2.0",
      name: "Apache License 2.0",
      spdx_id: "Apache-2.0",
      url: "https://api.github.com/licenses/apache-2.0",
      node_id: "MDc6TGljZW5zZTI=",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 6594,
    open_issues: 27,
    watchers: 3414,
    default_branch: "master",
    permissions: {
      admin: false,
      maintain: false,
      push: false,
      triage: false,
      pull: true,
    },
    score: 1,
  };
  const tree = renderer
    .create(
      <GitHubRepoCard
        key={testRepo.full_name}
        fullName={testRepo.full_name}
        name={testRepo.name}
        url={testRepo.html_url}
        ownerName={testRepo.owner.login}
        language={testRepo.language}
        description={testRepo.description}
        stars={testRepo.stargazers_count}
        forks={testRepo.forks_count}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
