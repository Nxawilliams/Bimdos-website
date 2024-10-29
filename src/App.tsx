import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { StartProject } from './pages/StartProject';

function HomePage() {
  return (
    <>
      <header className="container mx-auto px-6 py-16 md:py-32">
        <Navbar />
        <Hero />
      </header>
      <Services />
      <Process />
      <CTA />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/start-project" element={<StartProject />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;