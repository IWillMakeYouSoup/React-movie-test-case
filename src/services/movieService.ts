import creates from "./httpService";

export interface Movie {
    id: number;
    title: string;
    vote_average: number;
    vote_count: number;
    backdrop_path: string;
    overview: string;
    status: string;
    runtime: number;
    genres: Array<any>;
}

class MovieService {
    baseEndpoint = "/movie";

    getList(page: number = 1) {
        const service = creates(this.baseEndpoint);
        return service.get<Movie>(["popular"], { page });
    }
    getDetails(id: number) {
        const service = creates(this.baseEndpoint);
        return service.get<Movie>([id]);
    }
}

export default new MovieService();
