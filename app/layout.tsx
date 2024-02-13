import '@/app/ui/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | Tournament',
    default: 'Tournament',
  },
  description: 'Tournament Wep App, Create, Manage or Join online tournaments',
  metadataBase: new URL('https://github.com/Simon-Fontaine/tournament'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
