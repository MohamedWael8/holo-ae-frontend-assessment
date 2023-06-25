import http from "../http-common";
import {
  IGitHubUserData,
  IGitHubRepositoriesData,
} from "../types/github.types";

class GitHubDataService {
  searchRepositories(query: string) {
    return http.get<IGitHubRepositoriesData>(`/search/repositories?q=${query}`);
  }

  searchUsers(query: string) {
    return http.get<IGitHubUserData>(`/search/users?q=${query}`);
  }
}

const gitHubDataService = new GitHubDataService();

export default gitHubDataService;
