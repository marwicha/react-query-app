
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom';
import { apiClient } from '../utils/api-client';
import Movies from '../features/movies/Movies'
import Movie from '../features/movies/Movie'
import MovieSearchForm from '../features/movies/MovieSearchForm';
import * as useMoviesModule from '../hooks/useMovies';
import userEvent from '@testing-library/user-event';

jest.mock('../hooks/useMovies');

jest.mock('../utils/api-client', () => ({
  apiClient: jest.fn(),
}));

/*
describe('useMovies', () => {
    it('get all movies ', async () => {
        
        useMoviesModule.useMovies.mockReturnValue({
            movies: {
              results: [
                { id: 219109, title: 'Elas por Elas'},
                { id: 72879, title: 'Tomorrow is Ours'},
              ],
            },
            isLoading: false,
            isError: false,
          });

       render(<Movies />);
  
       expect(screen.getByText('Elas por Elas')).toBeInTheDocument();
       expect(screen.getByText('Tomorrow is Ours')).toBeInTheDocument();

    });
});


describe('useMoviesSearch', () => {
    it('get movies by search query', async () => {
      
       const mockMovies = [{ id: 1178202, name: 'Loki' }];
       useMoviesModule.useMoviesSearch.mockReturnValue({ moviesFound: mockMovies, isLoadingSearch: false });
  
       render(
        <>
          <Movies />
          <MovieSearchForm onSearch={jest.fn()} />
        </>
      );

       await act(async () => {
        userEvent.click(screen.getByText('Search'));
      });

      expect(useMoviesModule.useMoviesSearch).toHaveBeenCalled();
      expect(useMoviesModule.useMoviesSearch).toHaveBeenCalledWith('Loki');
   
    });
});

describe('useMovie', () => {
    it('get a movie by id', async () => {
      const movieId = 1178202;

      const mockMovie = [{ id: 1178202, title: 'Loki' }];
      apiClient.mockResolvedValueOnce(mockMovie);
  
      let result;
      await act(async () => {
        result = render(<Movie hook={() => useMoviesModule.useMovie(movieId)} />);
      });
  
      expect(result.container).toMatchSnapshot();
    });
});
*/