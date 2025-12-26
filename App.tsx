
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
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative antialiased selection:bg-zinc-900 selection:text-white bg-white">
      <Loader isLoading={isLoading} />
      <Background />

      <main className={`${isLoading ? 'h-screen overflow-hidden opacity-0' : 'opacity-100'} transition-opacity duration-1000 relative z-10`}>
        
        <nav className="fixed top-6 md:top-8 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-5xl">
          <div className="bg-white/80 backdrop-blur-2xl border border-white/50 rounded-[2rem] md:rounded-[2.5rem] px-6 py-4 md:px-8 md:py-5 shadow-[0_20px_50px_rgba(0,0,0,0.05)] flex items-center justify-between">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3 cursor-pointer"
            >
              <div className="w-9 h-9 md:w-11 md:h-11 bg-white border border-zinc-100 rounded-xl md:rounded-2xl flex items-center justify-center shadow-sm p-1">
                <img src="https://cdn.nefusoft.cloud/7WSSJ.jpg" alt="Logo" className="w-full h-full object-contain rounded-lg" />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-zinc-900 tracking-tighter text-xs md:text-sm uppercase leading-none">LippWangsaff</span>
                <span className="text-[7px] md:text-[8px] font-black text-zinc-400 uppercase tracking-[0.2em] mt-0.5">Elaina no Kareshi</span>
              </div>
            </motion.div>

            <div className="hidden md:flex gap-10 text-[9px] font-black uppercase tracking-[0.4em] text-zinc-400">
              {['Beranda', 'Keahlian', 'Waifu', 'Anime', 'Kontak'].map(item => (
                <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-zinc-900 transition-colors relative group">
                  {item}
                  <span className="absolute -bottom-2 left-0 w-0 h-1 bg-zinc-900 transition-all group-hover:w-full rounded-full" />
                </a>
              ))}
            </div>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-zinc-900 p-2.5 bg-zinc-50 rounded-xl active:scale-90 transition-all border border-zinc-100"
            >
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-24 left-0 right-0 bg-white/95 backdrop-blur-2xl border border-white rounded-[3rem] p-10 shadow-2xl flex flex-col gap-8 text-center md:hidden"
              >
                {['Beranda', 'Keahlian', 'Waifu', 'Anime', 'Kontak'].map((link, idx) => (
                  <motion.a 
                    key={link} 
                    href={`#${link.toLowerCase()}`} 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-3xl font-black text-zinc-900 tracking-tighter hover:text-zinc-400 transition-colors"
                  >
                    {link}
                  </motion.a>
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
      </main>
    </div>
  );
};

export default App;
