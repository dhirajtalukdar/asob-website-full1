import Link from 'next/link';

export default function Hero() {
  const heroStyle = {
    backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.2)), url('https://i.ibb.co/bF9gPzV/asob-event-crowd.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <section id="home" style={heroStyle} className="min-h-screen flex items-center justify-center text-white pt-20">
      <div className="text-center px-4">
        <h1 className="font-bangla text-6xl md:text-8xl font-bold drop-shadow-lg">অসম ছ'চাইটি অব বাংগালুৰু</h1>
        <h2 className="text-4xl md:text-6xl font-bold mt-2 mb-4 drop-shadow-md">Assam Society of Bangalore</h2>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 drop-shadow-sm">Fostering Assamese culture, community, and social harmony in Bangalore since 1982.</p>
        <div className="space-x-4">
          <Link href="#events" className="btn-primary">Upcoming Events</Link>
          <Link href="#get-involved" className="btn-secondary">Get Involved</Link>
        </div>
      </div>
    </section>
  );
}