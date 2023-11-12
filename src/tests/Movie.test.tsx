import { describe, expect, it, vi } from 'vitest';
import { fireEvent, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom';
import {Movie} from '../features/movies/Movie'
import { renderWithClient } from './utils';
import { Movies } from '../features/movies/Movies';
import * as useMoviesHooks from '../hooks/useMovies';
import { MovieSearchForm } from '../features/movies/MovieSearchForm';


describe("Movies", () => {
  it("it should display all movies", async () => {
    
    // ARANGE
    const useMoviesSpy = vi.spyOn(useMoviesHooks, 'useMovies');

    const mockMovies = {
      results: [
        { id: 219109, title: 'Land of Desire' },
        { id: 72879, title: 'Tomorrow is Ours' },
      ]
    };

    vi.mock('react-query', () => ({
      useQuery: vi.fn().mockReturnValue(({ movies: mockMovies.results, isLoading: false, isError: false }))
    }));

    // ACT
    const { getByTestId } = renderWithClient(<Movies />);

    // EXPECT
    await waitFor(() => {
      expect(useMoviesSpy).toHaveBeenCalled()
      expect(getByTestId("movies-list")).toBeInTheDocument()
    })
  })

  it("it should render a search form movie with prop", async () => {
    
    // ARANGE
    const onSearchMock = vi.fn()

    // ACT
    const { getByText, getByTestId } = renderWithClient(<MovieSearchForm onSearch={onSearchMock}/>);
    const button = getByText(/Search/i);
    const input = getByTestId('search-input');
    fireEvent.click(button);

    // EXPECT
    await waitFor(() => {
      expect(button).toBeInTheDocument()
      expect(input).toBeInTheDocument()
      expect(onSearchMock).toHaveBeenCalledTimes(1);
    })
  })
 
  it("it should search a movie", async () => {
    
    // ARANGE
    const useMoviesSearchSpy = vi.spyOn(useMoviesHooks, 'useMoviesSearch');
    const query = "query=Fuzue&include_adult=false"

    const mockMovies = {
      results: [
       { id: 213026, title: 'Fuzue' },
      ]
    };

    vi.mock('react-query', () => ({
      useQuery: vi.fn().mockReturnValue((
        { moviesFound: mockMovies.results,
          isLoading: false,
          isError: false
         }))
    }));
  
    // ACT
    const { getByTestId } = renderWithClient(<Movies />);

    // EXPECT
    await waitFor(() => {
      expect(useMoviesSearchSpy).toHaveBeenCalled()
      expect(getByTestId("movies-list")).toBeInTheDocument()
      expect(getByTestId('movie-213026')).toBeInTheDocument()
    })
  })

  it("it should display a movie by id", async () => {

    // ARANGE
    const mockId = 1;
    const mockTitle = 'The Pirates';
    const mockShowDetails =  vi.fn();

    // ACT
    const {getByText, getByTestId} = renderWithClient(<Movie id={mockId} title={mockTitle} showDetails={mockShowDetails} />)
    const button = getByText(/Show details/i);
    fireEvent.click(button);

    // EXPECT
    expect(getByTestId(`title`)).toBeInTheDocument();
    expect(mockShowDetails).toHaveBeenCalledTimes(1);
    expect(mockShowDetails).toHaveBeenCalledWith(mockId);
 })

})
