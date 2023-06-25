import gitHubDataService from "../../services/github.service";

type searchGithHubType = {
  query: string;
  cachedSearch: any;
  type: string;
  setResults: any;
  setIsLoading: any;
};

export const searchGithHub = async ({
  query,
  cachedSearch,
  type,
  setResults,
  setIsLoading,
}: searchGithHubType) => {
  try {
    setIsLoading(true);
    if (
      query === cachedSearch?.userSlice?.query &&
      type === cachedSearch?.userSlice?.type &&
      cachedSearch?.userSlice?.results
    )
      setResults(cachedSearch?.userSlice?.results);
    else {
      const response =
        type === "users"
          ? await gitHubDataService.searchUsers(query)
          : await gitHubDataService.searchRepositories(query);
      setResults(response?.data?.items);
      console.log("response?.data?.items", response?.data?.items);
    }

    setIsLoading(false);
  } catch (err) {
    console.log(err);
    setResults([]);
    setIsLoading(false);
  }
};
