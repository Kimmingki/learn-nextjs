import styles from "../styles/movie-videos.module.css";

async function getVideos(id: string) {
    const API_URL = process.env.API_URL;
    const response = await fetch(`${API_URL}/${id}/videos`, {
        cache: "force-cache",
    });
    return response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
    const videos = await getVideos(id);
    return (
        <div className={styles.container}>
            {videos.map((video) => (
                <iframe
                    key={video.id}
                    src={`https://youtube.com/embed/${video.key}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                    allowFullScreen
                    title={video.name}
                />
            ))}
        </div>
    );
}
