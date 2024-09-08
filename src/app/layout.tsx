import type { Metadata } from 'next';
import { Darker_Grotesque } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: 'Siga Seu Atleta',
  description: 'Lista de atletlas olímpicos e paraolímpicos do Brasil',
};

const darkerGrotesque = Darker_Grotesque({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${darkerGrotesque.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
