"use client";
import { useRouter } from "next/navigation";
export default function Button({
  children,
  url,
}: {
  children: React.ReactNode;
  url: string;
}) {
  const router = useRouter();
  return (
    <button
      className="rounded-full bg-lime-400 px-4 py-2 text-sm text-slate-950 transition-all hover:bg-lime-300"
      type="button"
      onClick={() => router.push(url)}
    >
      {children}
    </button>
  );
}
