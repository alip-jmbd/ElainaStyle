
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
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
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
          <Loader key="loader-v2" isLoading={isLoading} />
        ) : (
          <motion.div
            key="main-v2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Background />
            <motion.main 
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10"
            >
              {/* SLIM NAVBAR */}
              <nav className="fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-[100] w-[94%] max-w-5xl">
                <div className="bg-white/70 backdrop-blur-2xl border border-zinc-100 rounded-full px-5 py-3 md:px-8 md:py-5 shadow-2xl flex items-center justify-between">
                  <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-white border border-zinc-100 rounded-xl flex items-center justify-center p-1.5 shadow-sm">
                      <img src="https://cdn.nefusoft.cloud/RWIJ1.jpg" alt="Logo" className="w-full h-full object-cover rounded-lg" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-black text-zinc-900 tracking-tighter text-[11px] md:text-sm uppercase leading-none">LippWangsaff</span>
                      <span className="hidden md:block text-[8px] font-black text-zinc-400 uppercase tracking-widest mt-1">Grey Wanderer</span>
                    </div>
                  </div>

                  <div className="hidden md:flex gap-10 text-[9px] font-black uppercase tracking-[0.4em] text-zinc-400">
                    {['Beranda', 'Keahlian', 'Waifu', 'Anime', 'Kontak'].map(item => (
                      <a 
                        key={item} 
                        href={`#${item.toLowerCase()}`} 
                        onClick={(e) => handleNavigation(e, item.toLowerCase())} 
                        className="hover:text-zinc-900 transition-colors"
                      >
                        {item}
                      </a>
                    ))}
                  </div>

                  <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2.5 bg-zinc-50 rounded-full border border-zinc-100">
                    {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
                  </button>
                </div>

                <AnimatePresence>
                  {isMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: -20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: -20 }}
                      className="absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-3xl border border-zinc-100 rounded-[2.5rem] p-12 shadow-2xl flex flex-col gap-8 text-center md:hidden"
                    >
                      {['Beranda', 'Keahlian', 'Waifu', 'Anime', 'Kontak'].map((item) => (
                        <a 
                          key={item}
                          href={`#${item.toLowerCase()}`}
                          onClick={(e) => handleNavigation(e, item.toLowerCase())}
                          className="text-4xl font-black text-zinc-900 tracking-tighter"
                        >
                          {item}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
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
