export const API_URL = 'https://swapi.dev/api';

export interface Person {
  name: string;
  species: string[];
  url: string;
  height: string;
  mass: string;
  created: string;
  films: string[];
  birth_year: string;
  homeworld: string;
}

export interface Homeworld {
  name: string;
  terrain: string;
  climate: string;
  residents: string[];
}

export interface PeopleResponse {
  results: Person[];
  next: string | null;
  previous: string | null;
}

export async function getPeople(
  pageUrl: string = `${API_URL}/people`,
  query: string = ''
): Promise<PeopleResponse> {
  const url = new URL(pageUrl);
  if (query) {
    url.searchParams.set('search', query);
  }
  const res = await fetch(url.toString());

  if (!res.ok) throw new Error('Failed getting people');

  const data: PeopleResponse = await res.json();
  return data;
}

export async function getPerson(personNumber: number): Promise<Person> {
  const res = await fetch(`${API_URL}/people/${personNumber}`);
  if (!res.ok) throw new Error('Failed getting person');

  const data: Person = await res.json();
  return data;
}

export async function getHomeworld(homeworld: string): Promise<Homeworld> {
  const res = await fetch(`${homeworld}`);
  if (!res.ok) throw new Error('Failed getting homeworld');

  const data: Homeworld = await res.json();
  return data;
}
