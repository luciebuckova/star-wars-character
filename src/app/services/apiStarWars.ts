export const API_URL = 'https://swapi.dev/api';

export interface Person {
  name: string;
  species: string[];
  url: string;
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

export async function getPerson(personNumber: number) {
  const res = await fetch(`${API_URL}/people/${personNumber}`);
  if (!res.ok) throw new Error('Failed getting person');
  const data = await res.json();
  console.log(data);
  return data;
}
