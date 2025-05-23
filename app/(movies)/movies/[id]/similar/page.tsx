import { API_URL } from "../../../../config";

async function getSimilarMovie(id: string) {
    const response = await fetch(`${API_URL}/${id}/similar`);
    return response.json();
}

export default async function SimilarMoviePage({
    params,
}: {
    params: { id: string };
}) {
    const { id } = await params;
    const similarMovie = await getSimilarMovie(id);

    return <div>{JSON.stringify(similarMovie)}</div>;
}
