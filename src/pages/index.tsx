import { About, Awards, ChefWord, Herosection, Menu, Video, Gallery } from '@/components/Landing page/Landingpage'
import { openSans } from '@/styles/font'
import Head from 'next/head'


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
        <Awards />
        <Gallery />
      </main>
    </>
  )
}
