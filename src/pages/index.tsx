import { Herosection } from '@/components/Landing page/Landingpage'
import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    <>
      <Head>
        <title>Gericht | HomePage </title>
      </Head>

      <main className={`min-h-screen `}>
        <Herosection />
      </main>
    </>
  )
}
