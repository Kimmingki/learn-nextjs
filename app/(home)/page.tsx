import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";

export const metadata = {
    title: "Home",
};

async function getMovies() {
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    const API_URL = process.env.API_URL;
    return fetch(API_URL).then((response) => response.json());

    // const response = await fetch(API_URL);
    // const json = await response.json();
    // return json;
}

export default async function HomePage() {
    const movies = await getMovies();
    return (
        <div className={styles.container}>
            {movies.map((movie) => (
                <Movie
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    poster_path={movie.poster_path}
                />
            ))}
        </div>
    );
}
