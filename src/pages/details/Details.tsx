import { Link, useParams } from "react-router-dom";
import { useMovieDetails } from "../../hooks/useMovies";
import "./Details.scss";
import Rating from "../../components/shared/rating/Rating";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import Snackbar from "../../components/shared/snackbar/Snackbar";
import Spinner from "../../components/shared/spinner/Spinner";

export default function Details() {
    let { id } = useParams() as { id: string };
    let { movie, loading, error } = useMovieDetails({ id: parseInt(id) });

    return (
        <>
            <div className="details-wrapper">
                <Link to={"/"}>
                    <IoChevronBackCircleOutline
                        size={50}
                        className="-back clickable"
                    />
                </Link>
                {error && <Snackbar>Could not fetch movies</Snackbar>}
                {loading && <Spinner />}
                {movie && (
                    <div className="-header">
                        <div
                            className="-image"
                            style={{
                                backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})`,
                            }}
                        ></div>
                        <h2>{movie.title}</h2>
                        <div className="-details">
                            <div className="-left">
                                <span className="-text">
                                    Rating:{" "}
                                    {Math.floor(movie.vote_average * 10) / 10} (
                                    {movie.vote_count} votes)
                                </span>
                                <Rating value={movie.vote_average}></Rating>
                            </div>
                            <div className="-middle">
                                <b>Genres:</b>
                                <br />
                                {movie.genres
                                    .map((genre) => genre.name)
                                    .join(", ")}
                            </div>
                            <div className="-right">
                                <span className="-text">Length:</span>
                                <br />
                                <span className="-runtime">
                                    {Math.floor(movie.runtime / 60)} h{" "}
                                    {movie.runtime % 60} m
                                </span>
                            </div>
                        </div>
                        <div className="-description">{movie.overview}</div>
                    </div>
                )}
            </div>
        </>
    );
}
