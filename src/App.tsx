import React, { useState, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Metrics } from './components/Metrics';
import { AboutUs } from './components/AboutUs';
import { SolutionsShowcase } from './components/SolutionsShowcase';
import { DesktopSimulator } from './components/DesktopSimulator';
import { Testimonials } from './components/Testimonials';
import { Partners } from './components/Partners';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import type { Language } from './constants/languages';


export const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('pt');

  const handleOpenDemo = useCallback(() => {
    const contactElem = document.getElementById('contato');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] font-sans selection:bg-emerald-500/20 selection:text-emerald-300">
      <Navbar currentLang={lang} onChangeLang={setLang} onOpenDemo={handleOpenDemo} />

      <main>
        <Hero onOpenDemo={handleOpenDemo} />
        <Metrics />
        <AboutUs currentLang={lang} />
        <SolutionsShowcase />
        <DesktopSimulator />
        <Testimonials />
        <Partners />
        <CtaSection />
      </main>

      <Footer currentLang={lang} />
    </div>
  );
};

export default App;
