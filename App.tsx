
import React, { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Background from './components/Background';
import Hero from './components/Hero';
import TechOrbit from './components/TechOrbit';
import AboutElaina from './components/AboutElaina';
import ElainaGallery from './components/ElainaGallery';
import AnimeSection from './components/AnimeSection';
import ContactCard from './components/ContactCard';
import Footer from './components/Footer';
import { motion as m, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const motion = m as any;

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Ensuring DOM is fully ready before lifting curtain
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, path: string, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="relative antialiased selection:bg-zinc-900 selection:text-white bg-white overflow-x-hidden min-h-screen">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader" isLoading={isLoading} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <Background />
            <motion.main 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10"
            >
              <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-5xl">
                <div className="bg-white/80 backdrop-blur-3xl border border-zinc-100 rounded-[3rem] px-8 py-5 shadow-xl flex items-center justify-between">
                  <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <div className="w-12 h-12 bg-white border border-zinc-100 rounded-2xl flex items-center justify-center p-2">
                      <img src="https://cdn.nefusoft.cloud/RWIJ1.jpg" alt="Logo" className="w-full h-full object-cover rounded-lg" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-black text-zinc-900 tracking-tighter text-sm uppercase leading-none">LippWangsaff</span>
                      <span className="text-[8px] font-black text-zinc-400 uppercase tracking-widest mt-1">Grey Wanderer</span>
                    </div>
                  </div>

                  <div className="hidden md:flex gap-12 text-[10px] font-black uppercase tracking-[0.5em] text-zinc-400">
                    <a href="#beranda" onClick={(e) => handleNavigation(e, '/', 'beranda')} className="hover:text-zinc-900 transition-colors">Beranda</a>
                    <a href="#keahlian" onClick={(e) => handleNavigation(e, '/', 'keahlian')} className="hover:text-zinc-900 transition-colors">Keahlian</a>
                    <a href="#waifu" onClick={(e) => handleNavigation(e, '/', 'waifu')} className="hover:text-zinc-900 transition-colors">Waifu</a>
                    <a href="#anime" onClick={(e) => handleNavigation(e, '/', 'anime')} className="hover:text-zinc-900 transition-colors">Anime</a>
                    <a href="#kontak" onClick={(e) => handleNavigation(e, '/', 'kontak')} className="hover:text-zinc-900 transition-colors">Kontak</a>
                  </div>

                  <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-3 bg-zinc-50 rounded-2xl">
                    {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                  </button>
                </div>
              </nav>

              <div id="beranda"><Hero /></div>
              <div id="keahlian"><TechOrbit /></div>
              <div id="waifu">
                <AboutElaina />
                <ElainaGallery />
              </div>
              <div id="anime"><AnimeSection /></div>
              <div id="kontak"><ContactCard /></div>
              <Footer />
            </motion.main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
