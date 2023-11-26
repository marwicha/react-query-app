import { memo } from "react";
import { Button } from "../../utils/styled.components";

export type MovieProps = {
  id: number;
  title: string;
  name?: string;
  overview?: string;
  vote_average?: string;
  showDetails: (id: number) => void;
};

const MovieComponent = (props: MovieProps): JSX.Element => {
  const { id, title, name, overview, showDetails } = props;
  return (
    <li data-testid={`movie-${id}`}>
      <article>
        <h4 data-testid="title">title: {title ? title : name}</h4>
        <p>overview: {overview?.substring(0, 50) ?? ""}...</p>
        <Button onClick={() => showDetails(id)}>Show details</Button>
      </article>
    </li>
  );
};

export const Movie = memo(MovieComponent);
