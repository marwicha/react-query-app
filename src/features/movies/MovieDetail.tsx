import { memo } from "react";
import { useParams } from "react-router-dom";
import { useMovie } from "../../hooks/useMovies";

const MovieDetailComponent = (): JSX.Element | null => {
  const { movieId } = useParams();
  const { movie, isLoading, isError } = useMovie(Number(movieId));

  if (isLoading) {
    return <p>loading...</p>;
  }

  if (isError) {
    return <p> something went wrong... </p>;
  }

  if (!movie) {
    return null;
  }

  const { id, title, name, overview, vote_average } = movie;

  return (
    <>
      <p>{id}</p>
      <p>{title ? title : name}</p>
      <p>{overview ?? ""}</p>
      <p>{Math.floor(vote_average) ?? ""}</p>
    </>
  );
};

export const MovieDetail = memo(MovieDetailComponent);
