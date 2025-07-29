import Head from 'next/head';

export default function Events() {
  return (
    <>
      <Head>
        <title>Events - ASoB</title>
      </Head>
      <main className="min-h-screen bg-white text-gray-800 p-8">
        <h1 className="text-4xl font-bold text-purple-800">Events</h1>
        <p className="mt-4 text-lg">Stay updated with our upcoming cultural and community events.</p>
      </main>
    </>
  );
}
