import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

interface IParams {
    params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: IParams) {
    const { id } = await params;
    const movie = await getMovie(id);
    return {
        title: movie.title,
    };
}

export default async function MovieDetail({ params }: IParams) {
    const { id } = await params;
    return (
        <div>
            <Suspense>
                <MovieInfo id={id} />
            </Suspense>
            <Suspense>
                <MovieVideos id={id} />
            </Suspense>
        </div>
    );
}
