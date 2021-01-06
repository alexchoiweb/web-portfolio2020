import Head from 'next/head'
import Nav from '@components/Nav'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>alexchoiweb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Nav title="Welcome to my portfolio!" />
        <div className="info">
          Hi :) I'm Alex. Nice to meet you. I make things for the <a href="/work">[web]</a>. And here's a little <a href="/about">[about me].</a>
        </div>
      </main>
    </div>
  )
}
