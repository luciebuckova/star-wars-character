"use client";
import { useState, useEffect } from "react";
import { getPeople, Person, API_URL } from "./services/apiStarWars";
import SearchBar from "./components/searchBar";
import { useSearchParams, useRouter } from "next/navigation";
import Card from "./components/card";

export default function Home() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const [people, setPeople] = useState<Person[]>([]);
  const [page, setPage] = useState<number>(1);
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [previousPage, setPreviousPage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const loadPeople = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await getPeople(`${API_URL}/people`, query);
        setPeople(data.results);
        setNextPage(data.next);
        setPreviousPage(data.previous);
        setPage(1); // Reset page number on new search
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    loadPeople();
  }, [query]);

  const loadNext = async () => {
    if (!nextPage) return;

    setLoading(true);
    setError(null);

    try {
      const data = await getPeople(nextPage);
      setPeople(data.results);
      setNextPage(data.next);
      setPreviousPage(data.previous);
      setPage((prevPage) => prevPage + 1);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const loadPrevious = async () => {
    if (!previousPage) return;

    setLoading(true);
    setError(null);

    try {
      const data = await getPeople(previousPage);
      setPeople(data.results);
      setNextPage(data.next);
      setPreviousPage(data.previous);
      setPage((prevPage) => prevPage - 1);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <main>
        {error && <p>Error: {error}</p>}
        <SearchBar placeholder="Search character..." />
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {people.map((person, index) => (
            <Card
              key={index}
              name={person.name}
              url={person.url}
              species={person.species}
            />
          ))}
        </ul>
        {loading && <p>Loading...</p>}
      </main>
      <footer className="mt-8">
        {!query && !loading && (
          <div className="flex items-center justify-start gap-4">
            <button
              onClick={loadPrevious}
              disabled={!previousPage}
              className="text-xl"
            >
              ⬅️
            </button>
            <span>Page {page}</span>
            <button onClick={loadNext} disabled={!nextPage} className="text-xl">
              ➡️
            </button>
          </div>
        )}
      </footer>
    </>
  );
}
