import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Input } from "../../utils/styled.components";
import { updateQueryUrl } from "../../utils/helpers";

type MovieSearchForm = {
  onSearch: (queryParams: string) => void;
};

const MovieSearchFormComponent = ({
  onSearch,
}: MovieSearchForm): JSX.Element => {
  const [query, setQuery] = useState<string>("");
  const [isQueried, setIsQueried] = useState(false);
  const [includeAdult, setIncludeAdult] = useState<boolean>(false);

  const handleSearchMovies = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    const searchValue = event.currentTarget.search?.value ?? "";
    const includeAdultValue = event.currentTarget.includeAdult?.checked;

    const queryParams = new URLSearchParams();
    queryParams.set("query", searchValue);
    queryParams.set("include_adult", includeAdultValue);

    updateQueryUrl(queryParams.toString());
    setQuery(queryParams.toString());
    setIsQueried(true);
    onSearch(queryParams.toString());
  };

  useEffect(() => {
    if (isQueried) updateQueryUrl(query.toString());
  }, [query, isQueried]);

  return (
    <form onSubmit={handleSearchMovies}>
      <div>
        <label>Movie name: </label>
        <Input type="search" id="search" data-testid="search-input" />
        <Button type="submit">Search</Button>
      </div>
      <br />
      <div>
        <label>include_adult</label>
        <input
          type="checkbox"
          name="includeAdult"
          onChange={() => setIncludeAdult(!includeAdult)}
          checked={includeAdult}
        />
      </div>
    </form>
  );
};

export const MovieSearchForm = MovieSearchFormComponent;
