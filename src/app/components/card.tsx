import Image from 'next/image';
import { getPerson } from '../services/apiStarWars';

interface CardProps {
  name: string;
  species: string[];
  url: string;
}

export default function Card({ name, species, url }: CardProps) {
  const speciesUrl = species[0];
  const speciesParts = speciesUrl?.split('/');
  const speciesNumber =
    speciesParts && speciesParts.length >= 2
      ? Number(speciesParts[speciesParts.length - 2])
      : 0;
  const personParts = url.split('/');
  const personNumber = Number(personParts[personParts.length - 2]);
  return (
    <li>
      <Image
        src={`https://i.pravatar.cc/100?img=${personNumber % 70}`}
        alt={name}
        width={100}
        height={100}
      />
      <span>{name}</span>
      <span>{speciesNumber}</span>
      <span>{personNumber}</span>
      <button onClick={() => getPerson(personNumber)}>Read more</button>
    </li>
  );
}
