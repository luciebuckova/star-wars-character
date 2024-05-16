import type { Metadata } from 'next';
import { Roboto_Mono } from 'next/font/google';

const roboto = Roboto_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Star Wars character app',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
