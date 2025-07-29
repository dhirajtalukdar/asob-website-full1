import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import WhatWeDo from '@/components/WhatWeDo';
import Events from '@/components/Events';
import Gallery from '@/components/Gallery';
import GetInvolved from '@/components/GetInvolved';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Modals from '@/components/Modals';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <WhatWeDo />
        <Events />
        <Gallery />
        <GetInvolved />
        <Contact />
      </main>
      <Footer />
      <Modals />
    </>
  );
}