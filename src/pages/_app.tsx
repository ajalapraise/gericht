import "@/styles/globals.css";
import Layout from '@/components/Layout/Layout';
import type { AppProps } from "next/app";
import { Open_Sans } from "next/font/google";
import Navbar from "@/components/NavBar/Navbar";
import { openSans } from "@/styles/font";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <Layout>
      <Navbar />
      <main >
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}
