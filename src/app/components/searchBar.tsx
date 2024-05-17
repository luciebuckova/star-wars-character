import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function SearchBar({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }
  return (
    <input
      placeholder={placeholder}
      onChange={(e) => {
        handleSearch(e.target.value);
      }}
      defaultValue={searchParams.get("query")?.toString()}
      className="mb-8 w-96 rounded-xl border border-lime-400 bg-transparent px-2 py-1 text-sm placeholder:text-slate-400 focus:outline-none focus:ring focus:ring-lime-300 active:outline-none active:ring active:ring-lime-300"
    />
  );
}
