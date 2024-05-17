import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";

const roboto = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Star Wars character app",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-slate-950 text-slate-50`}>
        <div className="mx-auto max-w-6xl px-8 py-16">
          <header>
            <h1 className="mb-8 text-3xl font-bold">
              Star Wars character app 🪐
            </h1>
          </header>

          {children}
        </div>
      </body>
    </html>
  );
}
