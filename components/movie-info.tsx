import styles from "../styles/movie-info.module.css";
import { API_URL } from "../app/(home)/page";

export async function getMovie(id: string) {
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
    const movieInfo = await getMovie(id);
    return (
        <div className={styles.container}>
            <img
                src={movieInfo.poster_path}
                alt={movieInfo.title}
                className={styles.poster}
            />
            <div className={styles.info}>
                <h1 className={styles.title}>{movieInfo.title}</h1>
                <h3>⭐ {movieInfo.vote_average.toFixed(1)}</h3>
                <p>{movieInfo.overview}</p>
                <a href={movieInfo.homepage} target={"_blank"}>
                    Homepage &rarr;
                </a>
                <a href={`${id}/credits`}>Credit &rarr;</a>
                <a href={`${id}/providers`}>Providers &rarr;</a>
                <a href={`${id}/similar`}>Similar &rarr;</a>
            </div>
        </div>
    );
}
