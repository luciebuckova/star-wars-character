import Image from "next/image";
import { generateHoverClass } from "../utils/helpers";
import Link from "next/link";

interface CardProps {
  name: string;
  species: string[];
  url: string;
}

export default function Card({ name, species, url }: CardProps) {
  const speciesUrl = species[0];
  const speciesParts = speciesUrl?.split("/");
  const speciesNumber =
    speciesParts && speciesParts.length >= 2
      ? Number(speciesParts[speciesParts.length - 2])
      : 0;
  const personParts = url.split("/");
  const personNumber = Number(personParts[personParts.length - 2]);

  const hoverClass = generateHoverClass(speciesNumber);

  return (
    <Link href={`/details/${personNumber}`}>
      <li
        className={`group flex h-60 flex-col items-center justify-between gap-4 rounded-xl border border-lime-400 p-8 text-center ${hoverClass}`}
      >
        <Image
          src={`https://i.pravatar.cc/100?img=${personNumber % 70}`}
          alt={name}
          width={100}
          height={100}
          className="mx-auto rounded-full transition-all group-hover:scale-110"
        />
        <p className="text-lg font-medium uppercase">{name}</p>
      </li>
    </Link>
  );
}
