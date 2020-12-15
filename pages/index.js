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
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
