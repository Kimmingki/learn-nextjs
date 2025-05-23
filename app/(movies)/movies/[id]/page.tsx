import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
import LoadingSpinner from "../../../../components/loadingSpinner";

interface IParams {
    params: { id: string };
}

export async function generateMetadata(props: IParams) {
    const { params } = props;
    const { id } = await params;
    const movie = await getMovie(id);
    return {
        title: movie.title,
    };
}

export default async function MovieDetail(props: IParams) {
    const { params } = props;
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
