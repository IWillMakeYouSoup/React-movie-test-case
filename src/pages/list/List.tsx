import { useState } from "react";
import Card from "../../components/shared/card/Card";
import { useMovies } from "../../hooks/useMovies";
import Paginator from "../../components/shared/paginator/Paginator";
import "./List.scss";
import Header from "../../components/header/Header";
import { Link } from "react-router-dom";
import Spinner from "../../components/shared/spinner/Spinner";
import Snackbar from "../../components/shared/snackbar/Snackbar";

export default function List() {
    const totalPages = 500;
    const [page, setCurrentPage] = useState(1);
    const { movies, loading, error } = useMovies({ page });

    return (
        <>
            <Header></Header>
            <div className="movie-list">
                {error && <Snackbar>Could not fetch movies</Snackbar>}
                {loading && <Spinner />}
                {movies &&
                    !loading &&
                    movies.map((movie: any) => (
                        <Link
                            to={"details/" + movie.id}
                            className="card-link clickable"
                            key={movie.id}
                        >
                            <Card
                                header={movie.title}
                                image={movie.backdrop_path}
                                text={movie.overview}
                                vote={movie.vote_average}
                            />
                        </Link>
                    ))}
            </div>
            <Paginator
                currentPage={page}
                totalPages={totalPages}
                onPageSelect={(page: number) => setCurrentPage(page)}
            />
        </>
    );
}
