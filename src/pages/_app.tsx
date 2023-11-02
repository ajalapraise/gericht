import "@/styles/globals.css";
import Layout from '@/components/Layout/Layout';
import type { AppProps } from "next/app";
import { Open_Sans } from "next/font/google";
import Navbar from "@/components/NavBar/Navbar";


const openSans = Open_Sans({
  variable: '--openSans',
  subsets: ["latin"],
  display: "swap",
  weight: "300",
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <Layout>
      <Navbar />
      <main className={`  ${openSans.className}`}>
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}
