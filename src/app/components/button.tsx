"use client";
import { useRouter } from "next/navigation";

type ButtonProps = {
  children: React.ReactNode;
  to?: string;
  disabled?: boolean;
  onClick?: () => void;
};

export default function Button({
  children,
  to,
  disabled = false,
  onClick,
}: ButtonProps) {
  const router = useRouter();
  const style =
    "rounded-full bg-lime-400 px-4 py-2 text-sm text-slate-950 transition-all hover:bg-lime-300 disabled:cursor-not-allowed disabled:bg-slate-400 disabled:text-slate-600";

  return (
    <button
      type="button"
      onClick={() => {
        if (!disabled) {
          router.push(to || "#");
        }
        if (onClick) {
          onClick();
        }
      }}
      disabled={disabled}
      className={style}
    >
      {children}
    </button>
  );
}
