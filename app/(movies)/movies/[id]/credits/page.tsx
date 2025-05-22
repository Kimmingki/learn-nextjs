import { Suspense } from "react";
import { API_URL } from "../../../../(home)/page";
import MovieCredit from "../../../../../components/movie-credit";
import styles from "../../../../../styles/movie-credit.module.css";

async function getMovieCredits(id: string) {
  const response = await fetch(`${API_URL}/${id}/credits`);
  return response.json();
}

export default async function MovieCreditPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const movieCredits = await getMovieCredits(id);
  return (
    <div className={styles.container}>
      <Suspense fallback={<h1>Loading movie credits</h1>}>
        {movieCredits.map((credit) => (
          <MovieCredit
            key={credit.id}
            name={credit.name}
            popularity={credit.popularity}
            profile_path={credit.profile_path}
            character={credit.character}
          />
        ))}
      </Suspense>
    </div>
  );
}
