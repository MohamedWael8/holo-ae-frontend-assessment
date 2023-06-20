type Match = { text: string; indices: Array<number> };

type TextMatches = {
  object_url: string;
  object_type: string | null;
  property: string;
  fragment: string;
  matches: Array<Match>;
};

type Item = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string | null;
  url: string;
  html_url: string;
  followers_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  received_events_url: string;
  type: string;
  score: number;
  following_url: string;
  gists_url: string;
  starred_url: string;
  events_url: string;
  public_repos?: number;
  public_gists?: number;
  followers?: number;
  following?: number;
  created_at?: string;
  updated_at?: string;
  name?: string | null;
  bio?: string | null;
  email?: string | null;
  location?: string | null;
  site_admin: boolean;
  hireable?: boolean | null;
  text_matches?: Array<TextMatches>;
  blog?: string | null;
  company?: string | null;
  suspended_at?: string | null;
};

export interface IGitHubUserData {
  total_count: number;
  incomplete_results: boolean;
  items: Array<Item>;
}

export interface IGitHubRepositoriesData {
  total_count: number;
  incomplete_results: boolean;
  items: Array<any>;
}
