import { getPerson, getHomeworld } from "../../services/apiStarWars";
import { heightToMetres, formatDate } from "../../utils/helpers";
import Button from "@/app/components/button";

export default async function Detail({ params }: { params: { slug: string } }) {
  const person = await getPerson(Number(params.slug));
  const home = await getHomeworld(person.homeworld);

  return (
    <main>
      <h2 className="mb-4 text-xl font-bold">{person.name}</h2>
      <p>Height: {heightToMetres(Number(person.height))} m</p>
      <p>Mass: {person.mass} kg</p>
      <p>Date of adding to the API: {formatDate(person.created)}</p>
      <p>Number of films: {person.films.length}</p>
      <p>Birth year: {person.birth_year}</p>
      <h3 className="mb-2 mt-4 text-lg font-medium">{home.name}</h3>
      <p>Terrain: {home.terrain}</p>
      <p>Climate: {home.climate}</p>
      <p className="mb-4">Amount of residents: {home.residents.length}</p>
      <Button url="/">Back</Button>
    </main>
  );
}
