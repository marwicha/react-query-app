import React from 'react';
import { useState } from 'react';
import { Button, Input } from '../../utils/styled.components';
import { updateQueryUrl } from '../../utils/helpers';

type MovieSearchForm = {
  onSearch: (queryParams: string) => void
}

const MovieSearchFormComponent = ({ onSearch } : MovieSearchForm): JSX.Element => {

  const [, setQuery] = useState<string>('');
  const [includeAdult, setIncludeAdult] = useState<boolean>(false);

  const handleSearchMovies = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    const queryParams = new URLSearchParams();
    queryParams.set('query', event.currentTarget.search?.value);
    queryParams.set('include_adult', event.currentTarget.includeAdult?.checked);

    updateQueryUrl(queryParams.toString());

    setQuery(queryParams.toString());
    onSearch(queryParams.toString());
  };

  return (
    <form onSubmit={handleSearchMovies}>
      <div>
        <label>Search by name</label>
        <Input type="search" id="search" />
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

export const MovieSearchForm =  MovieSearchFormComponent