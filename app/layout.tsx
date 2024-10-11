import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import '@/app/styles/globals.css';
import { Josefin_Sans } from 'next/font/google';

import Detail from './detail/[id]';

const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: {
    template: '%s / The Wild Oasis',
    default: 'Welcome / The Wild Oasis',
  },
  description:
    'Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests',
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${josefin.className}`}>
        <Header />
        <Detail/>
        {children}
        
        <Footer />
      </body>
    </html>
  );
}
