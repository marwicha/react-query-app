import { describe, it } from 'vitest';
import { render, screen, renderHook, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import {Movies} from '../features/movies/Movies'
import {Movie} from '../features/movies/Movie'
import {MovieSearchForm} from '../features/movies/MovieSearchForm';
import { renderWithClient } from './utils';

describe('Movies', () => {
  it('Renders all movies', async () => {
   
    // ARANGE
    const result = renderWithClient(<Movies />)

    // EXPECT
    expect(await result.findByText(/Elas por Elas/i)).toBeInTheDocument()
  })

})
/*
describe('useMovies', () => {
    it('get all movies ', async () => {

      const searchResults = useMoviesModule.useMoviesSearch('loki');
    
      const mockMovies = {
          results: [
            { id: 219109, title: 'Elas por Elas' },
            { id: 72879, title: 'Tomorrow is Ours' },
          ],
      };

      useMoviesModule.useMovies.mockReturnValue({
          movies: mockMovies,
          isLoading: false,
          isError: false,
      })
        
       let result;
       await act(async () => {
         result = render(<Movies/>);
       });
  
       expect(result.container).toMatchSnapshot();
       expect(screen.getByText('Elas por Elas')).toBeInTheDocument();
       expect(screen.getByText('Tomorrow is Ours')).toBeInTheDocument();

    });
});

/*
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
*/
/*
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