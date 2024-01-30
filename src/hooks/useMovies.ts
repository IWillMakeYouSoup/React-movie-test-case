import { useEffect, useState } from "react";
import { Movie } from "../services/movieService";
import MovieService from "../services/movieService";
import { AxiosError } from "axios";

interface ListProps {
    page: number;
}

export const useMovies = ({
    page,
}: ListProps): {
    movies: Movie[];
    loading: boolean;
    error: AxiosError | null;
} => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        let { request, cancel } = MovieService.getList(page);
        request
            .then((res: any) => {
                setMovies(res?.data?.results);
                setError(null);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [page]);
    return { loading, movies, error };
};

interface DetailsProps {
    id: number;
}

export const useMovieDetails = ({
    id,
}: DetailsProps): {
    movie: Movie | null;
    error: AxiosError | null;
    loading: boolean;
} => {
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let { request, cancel } = MovieService.getDetails(id);
        request
            .then((res: any) => {
                setMovie(res?.data);
                setError(null);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);
    return { loading, movie, error };
};
