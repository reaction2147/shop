import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Card from '../components/Card'

const Index = ({notes}) => {
  return (
    <>
      <Head>
        <title>To Do List</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className="max-w-7xl mx-auto py-40">
          <div className="flex flex-col sm:flex-row flex-wrap justify-center">
         
                <Card notes={notes} />  
          </div>
        </div>
      </>
  )
}

Index.getInitialProps = async () => {
  const res = await fetch("http://localhost:3000/api/notes");
  const {data} = await res.json();
  return {
      notes: data
  }
}

export default Index;