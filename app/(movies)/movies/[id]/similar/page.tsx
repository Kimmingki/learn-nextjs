interface SimilarMovieProps {
    params: Promise<{ id: string }>;
}

async function getSimilarMovie(id: string) {
    const API_URL = process.env.API_URL;
    const response = await fetch(`${API_URL}/${id}/similar`);
    return response.json();
}

export default async function SimilarMoviePage({ params }: SimilarMovieProps) {
    const { id } = await params;
    const similarMovie = await getSimilarMovie(id);

    return <div>{JSON.stringify(similarMovie)}</div>;
}
