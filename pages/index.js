import Head from 'next/head'
import Header from './components/Header'
import Complaint from './Complaint';


export default function Home() {
  return (
    <div className="" >
      <Head>
        <title>Complaint App</title>
        <meta name="description" content="This is a police complaint app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Complaint/>
    </div>
  )
}