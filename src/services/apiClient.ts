import axios from "axios";

export default axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        Accept: "application/json",
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMDY5OWZlOTg1MGU1YWFjNDZkOWViYmY0MzYwNGU3NyIsInN1YiI6IjY1YjI3OWU1MGYyZmJkMDE2MzY3MjBlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0oF22j6BHHPAKgV2xeMQfQhDoC96eNpAMnIA8UM1IGY",
    },
});
