import Head from 'next/head'
import Header from './components/Header'


export default function Home() {
  return (
    <div className="" >
      <Head>
        <title>Complaint App</title>
        <meta name="description" content="This is a police complaint app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </div>
  )
}
