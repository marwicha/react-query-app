import {
    useQuery
  } from '@tanstack/react-query'

import {apiClient} from '../utils/api-client'

const API_URL = import.meta.env.VITE_API_URL

const useMovies = () => {
    const {data: movies, isLoading, isError} = useQuery({
        queryKey: ['movies'],
        queryFn: () => apiClient(`${API_URL}/discover/tv`)
    })

    return {movies, isLoading, isError}
}

const useMoviesSearch = (queryParams: string) => {
    //const ParamsExemple = https://api.themoviedb.org/3/search/movie?query=Pirates&include_adult=false&language=en-US&page=1
    const {data: moviesFound, isLoading: isLoadingSearch} = useQuery({
        queryKey: ['moviesSearch', {queryParams}],
        queryFn: () => apiClient(`${API_URL}/search/movie?${queryParams}&language=en-US&page=1`),
    })
    return {moviesFound, isLoadingSearch}
}

const useMovie = (movieId: number) => {
    const {data: movie, isLoading, isError} = useQuery({
        queryKey: ['movie', {movieId}],
        queryFn: () => apiClient(`${API_URL}/movie/${movieId}`),
        enabled: !!movieId
    })

    return {movie, isLoading, isError}
}

export {useMovies, useMoviesSearch, useMovie}