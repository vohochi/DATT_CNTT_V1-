import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
// import Myaccount from '@/app/components/Myaccount';
import '@/app/styles/globals.css';
import { Josefin_Sans } from 'next/font/google';

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
      <head>
        {/* <script src="https://code.iconify.design/3/3.1.0/iconify.min.js"></script> */}
      </head>
      <body className={`${josefin.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
