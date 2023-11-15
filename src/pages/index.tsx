import Button from '@/components/Button/Button'
import { About, ChefWord, Herosection, Menu, Video } from '@/components/Landing page/Landingpage'
import { openSans } from '@/styles/font'
import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    <>
      <Head>
        <title>Gericht | HomePage </title>
      </Head>

      <main className={`min-h-screen ${openSans.className} `}>
        <Herosection />
        <About />
        <Menu />
        <ChefWord />
        <Video />
      </main>
    </>
  )
}
