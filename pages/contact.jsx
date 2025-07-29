import Head from 'next/head';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us - ASoB</title>
      </Head>
      <main className="min-h-screen bg-white text-gray-800 p-8">
        <h1 className="text-4xl font-bold text-red-800">Contact Us</h1>
        <p className="mt-4 text-lg">Reach out to us for more information or collaboration opportunities.</p>
      </main>
    </>
  );
}
