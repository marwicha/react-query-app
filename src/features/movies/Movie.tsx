import { memo } from "react";
import { Button } from "../../utils/styled.components";

export type MovieProps = {
    id: number;
    title: string;
    name?: string;
    overview?: string;
    vote_average?: string;
    showDetails: (id: number) => void;
}

const MovieComponent = (props: MovieProps) : JSX.Element => {
    const {id, title, name, showDetails} = props

    return (
        <>
            <p>{id}</p>
            <p>{title ? title: name}</p>
            <Button onClick={() => showDetails(id)} role="showdetails">Show details</Button>
            <br></br>
        </>
    )
}

export const Movie = memo(MovieComponent)