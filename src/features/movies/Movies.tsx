import { useState } from 'react'
import { Title, MovieList } from '../../utils/styled.components'
import Loading from '../../common/Loading'
import { useMovies, useMoviesSearch } from '../../hooks/useMovies'
import { useNavigate } from "react-router-dom";
import { Movie, MovieProps } from './Movie';
import { MovieSearchForm } from './MovieSearchForm';

const MoviesComponent = () : JSX.Element => {

  /*
  const [query, setQuery] = useQueryParam(
    'query',
    StringParam
  )
  */

  const [query, setQuery] = useState("")
  const [queried, setQueried] = useState(false)
  const {movies, isLoading, isError} = useMovies()
  const {moviesFound, isLoadingSearch} = useMoviesSearch(query)
  const navigate = useNavigate();

  const handleSearchMovie = (queryParams: string) => {
      setQueried(true);
      setQuery(queryParams.toString());
  }

  const showDetails = (movieId: number) => {
    navigate(`/movie-details/${movieId}`);
  }

  if (isLoading || isLoadingSearch) {
    return <Loading path='src/assets/canal+.svg'/>
  }

  if (isError) {
    return <p> Something went wrong...</p>
  }

  const filtredMovieList =  moviesFound.results.map((movie : MovieProps) => (
    <Movie key={movie.id} {...movie} showDetails={showDetails}/>
  ))

  const moviesList = movies.results.map((movie : MovieProps)=> (
    <Movie key={movie.id} {...movie} showDetails={showDetails}/>
   ))

  return (
    <>
      <Title> Technical Test </Title>
      <MovieSearchForm onSearch={handleSearchMovie}/>

      <MovieList>
      {queried ? (moviesFound?.results.length === 0
      ? <p>No results were found...</p>
      : <>{filtredMovieList}</> )
      : <>{moviesList}</>
      }
      </MovieList>
      </>
  )
}

export const Movies = MoviesComponent

