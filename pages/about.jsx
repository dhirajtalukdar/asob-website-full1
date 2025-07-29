import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - ASoB</title>
      </Head>
      <main className="min-h-screen bg-white text-gray-800 p-8">
        <h1 className="text-4xl font-bold text-green-800">About Us</h1>
        <p className="mt-4 text-lg">The Assam Society of Bangalore is dedicated to preserving and promoting the culture and traditions of Assam.</p>
      </main>
    </>
  );
}
