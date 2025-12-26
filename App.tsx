
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
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader-comp" isLoading={isLoading} />
        ) : (
          <motion.div
            key="main-content"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <Background />
            <motion.main className="relative z-10">
              <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-5xl">
                <div className="bg-white/80 backdrop-blur-3xl border border-zinc-100 rounded-[3rem] px-8 py-5 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] flex items-center justify-between">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-4 cursor-pointer"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    <div className="w-12 h-12 bg-white border border-zinc-100 rounded-2xl flex items-center justify-center shadow-sm p-2 overflow-hidden">
                      <img src="https://cdn.nefusoft.cloud/RWIJ1.jpg" alt="Logo" className="w-full h-full object-cover rounded-lg" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-black text-zinc-900 tracking-tighter text-sm uppercase leading-none">LippWangsaff</span>
                      <span className="text-[8px] font-black text-zinc-400 uppercase tracking-[0.2em] mt-1">Elaina no Kareshi</span>
                    </div>
                  </motion.div>

                  <div className="hidden md:flex gap-12 text-[10px] font-black uppercase tracking-[0.5em] text-zinc-400">
                    {navItems.map(item => (
                      <a 
                        key={item.label} 
                        href={item.path} 
                        onClick={(e) => handleNavigation(e, item.path, item.id)}
                        className="hover:text-zinc-900 transition-colors relative group"
                      >
                        {item.label}
                        <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-zinc-900 transition-all group-hover:w-full rounded-full" />
                      </a>
                    ))}
                  </div>

                  <button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden text-zinc-900 p-3 bg-zinc-50 rounded-2xl border border-zinc-100 active:scale-90 transition-all"
                  >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                  </button>
                </div>

                <AnimatePresence>
                  {isMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: -20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -20 }}
                      className="absolute top-28 left-0 right-0 bg-white/95 backdrop-blur-3xl border border-zinc-100 rounded-[3.5rem] p-16 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] flex flex-col gap-12 text-center md:hidden"
                    >
                      {navItems.map((item, idx) => (
                        <motion.a 
                          key={item.label} 
                          href={item.path} 
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          onClick={(e) => handleNavigation(e, item.path, item.id)}
                          className="text-5xl font-black text-zinc-900 tracking-tighter hover:text-zinc-400 transition-colors"
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
