'use client';

import Header from './components/Header';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import HoursTable from './components/HoursTable';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      {/* Seções da sua Single-Page Application */}
      <section id="menu">
        <MenuSection />
      </section>
      <section id="horarios">
        <HoursTable />
      </section>
      <Footer />
    </main>
  );
}