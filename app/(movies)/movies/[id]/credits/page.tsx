import { Suspense } from "react";
import MovieInfo from "../../../../../components/movie-info";

export default async function MovieCredit({
    params: { id },
}: {
    params: { id: string };
}) {
    return (
        <div>
            <Suspense fallback={<h1>Loading movie info</h1>}>
                <MovieInfo id={id} />
            </Suspense>
            <Suspense fallback={<h1>Loading movie credits</h1>}>
                <MovieInfo id={id} />
            </Suspense>
        </div>
    );
}
