import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';

export const metadata: Metadata = {
  title: 'Siga Seu Atleta',
  description: 'Lista de atletlas olímpicos e paraolímpicos do Brasil',
};

const darkerGrotesque = Space_Grotesk({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${darkerGrotesque.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
