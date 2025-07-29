import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Assam Society of Bangalore</title>
        <meta name="description" content="Welcome to the Assam Society of Bangalore" />
      </Head>
      <main className="min-h-screen bg-white text-gray-800 p-8">
        <h1 className="text-4xl font-bold text-blue-900">Welcome to ASoB</h1>
        <p className="mt-4 text-lg">This is the homepage of Assam Society of Bangalore.</p>
      </main>
    </>
  );
}