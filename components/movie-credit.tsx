interface IMovieCreditProps {
  name: string;
  popularity: number;
  profile_path: string;
  character: string;
}

export default async function MovieCredit({
  name,
  popularity,
  profile_path,
  character,
}: IMovieCreditProps) {
  return (
    <div>
      <img src={profile_path} alt={name} />
      <div>
        <h1>Character: {character}</h1>
        <h2>Acter name: {name}</h2>
        <h3>⭐ {popularity}</h3>
      </div>
    </div>
  );
}
