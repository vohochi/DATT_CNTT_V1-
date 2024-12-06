'use client'
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import "@/app/styles/globals.css";
import { Josefin_Sans } from "next/font/google";
import { Provider } from 'react-redux'; 
import store from "@/store";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={`${josefin.className}`}>
        <Provider store={store}>
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}