import http from "../http-common";
import {
  IGitHubUserData,
  IGitHubRepositoriesData,
} from "../types/github.types";

class GitHubDataService {
  searchRepositories(name: string) {
    return http.get<Array<IGitHubRepositoriesData>>(
      `/search/repositories?q=${name}`
    );
  }

  searchUsers(name: string) {
    return http.get<Array<IGitHubUserData>>(`/search/users?q=${name}`);
  }
}

const gitHubDataService = new GitHubDataService();

export default gitHubDataService;
