import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>FastAPI Microservices App</title>
      </Head>

      <div className="grid h-screen place-items-center">
        <h1 className="text-center text-9xl font-bold text-blue-600">
          Hello World
        </h1>
      </div>
    </>
  )
}
