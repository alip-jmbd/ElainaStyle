
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
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, path: string, id: string) => {
    e.preventDefault();
    window.history.pushState({}, '', path);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'Beranda', path: '/', id: 'beranda' },
    { label: 'Keahlian', path: '/skills', id: 'keahlian' },
    { label: 'Waifu', path: '/waifu', id: 'waifu' },
    { label: 'Anime', path: '/anime', id: 'anime' },
    { label: 'Kontak', path: '/contact', id: 'kontak' }
  ];

  return (
    <div className="relative antialiased selection:bg-zinc-900 selection:text-white bg-white overflow-x-hidden">
      <Loader isLoading={isLoading} />
      <Background />

      <AnimatePresence>
        {!isLoading && (
          <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10"
          >
            <nav className="fixed top-6 md:top-8 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-5xl">
              <div className="bg-white/90 backdrop-blur-3xl border border-zinc-100 rounded-[2.5rem] px-6 py-4 md:px-8 md:py-5 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] flex items-center justify-between">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-3 cursor-pointer"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  <div className="w-10 h-10 md:w-11 md:h-11 bg-white border border-zinc-100 rounded-2xl flex items-center justify-center shadow-sm p-1.5 overflow-hidden">
                    <img src="https://cdn.nefusoft.cloud/RWIJ1.jpg" alt="Logo" className="w-full h-full object-cover rounded-lg" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-black text-zinc-900 tracking-tighter text-xs md:text-sm uppercase leading-none">LippWangsaff</span>
                    <span className="text-[7px] md:text-[8px] font-black text-zinc-400 uppercase tracking-[0.2em] mt-0.5">Elaina no Kareshi</span>
                  </div>
                </motion.div>

                <div className="hidden md:flex gap-10 text-[9px] font-black uppercase tracking-[0.4em] text-zinc-400">
                  {navItems.map(item => (
                    <a 
                      key={item.label} 
                      href={item.path} 
                      onClick={(e) => handleNavigation(e, item.path, item.id)}
                      className="hover:text-zinc-900 transition-colors relative group"
                    >
                      {item.label}
                      <span className="absolute -bottom-2 left-0 w-0 h-1 bg-zinc-900 transition-all group-hover:w-full rounded-full" />
                    </a>
                  ))}
                </div>

                <button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="md:hidden text-zinc-900 p-2.5 bg-zinc-50 rounded-2xl active:scale-90 transition-all border border-zinc-100"
                >
                  {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>

              <AnimatePresence>
                {isMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -20 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute top-24 left-0 right-0 bg-white/95 backdrop-blur-3xl border border-zinc-100 rounded-[3rem] p-12 shadow-2xl flex flex-col gap-10 text-center md:hidden"
                  >
                    {navItems.map((item, idx) => (
                      <motion.a 
                        key={item.label} 
                        href={item.path} 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        onClick={(e) => handleNavigation(e, item.path, item.id)}
                        className="text-4xl font-black text-zinc-900 tracking-tighter hover:text-zinc-500 transition-colors"
                      >
                        {item.label}
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
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;