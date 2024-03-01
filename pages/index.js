import Head from 'next/head';

// Components
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Experiences from '../components/Experiences';
import Works from '../components/Works';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Particle from '../components/Particles';

export default function Home() {
  return (
    <div className="p-2">
      <Head>
        <title>Sanjan Vadi - Software Developer</title>
        <meta 
          name="description" 
          content="Software developer portfolio using Next.js & tailwind CSS." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-7xl m-auto">
        <Particle />
        <Navbar />
        <Hero />
        <Experiences />
        <Skills />
        <Education />
        <Works />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
