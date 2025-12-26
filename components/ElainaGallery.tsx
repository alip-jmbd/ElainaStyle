
import React, { useState } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import { X, Maximize2 } from 'lucide-react';
import { ELAINA_GALLERY } from '../constants';

const motion = m as any;

const ElainaGallery: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const gridLayout = [
    "col-span-6 md:col-span-3 aspect-[9/16]", // 1: 9:16
    "col-span-6 md:col-span-3 aspect-[9/16]", // 2: 9:16
    "col-span-12 md:col-span-6 aspect-video md:aspect-auto", // 3: Landscape
    "col-span-12 md:col-span-4 aspect-[9/16]", // 4: 9:16
    "col-span-6 md:col-span-4 aspect-square",  // 5: 1:1
    "col-span-6 md:col-span-4 aspect-square",  // 6: 1:1
  ];

  return (
    <section className="py-32 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-6 inline-block"
          >
            <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.8em] border border-zinc-100 px-6 py-2 rounded-full">
              Archives
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl font-black text-zinc-900 tracking-tighter mb-6"
          >
            旅の断片 <br/>
            <span className="text-zinc-300">Scattered Memories</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {ELAINA_GALLERY.map((image, idx) => (
            <GalleryItem 
              key={idx} 
              image={image} 
              index={idx + 1} 
              className={gridLayout[idx]} 
              onSelect={() => setSelectedImg(image.url)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImg(null)}
              className="absolute inset-0 bg-white/80 backdrop-blur-xl"
            />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0, rotate: -2 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.9, opacity: 0, rotate: 2 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-full aspect-auto bg-white rounded-[2rem] md:rounded-[3.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-zinc-100"
            >
              <img src={selectedImg} className="w-full h-full object-contain bg-zinc-50" alt="Full view" />
              
              <button 
                onClick={() => setSelectedImg(null)}
                className="absolute top-8 right-8 w-12 h-12 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center text-zinc-900 shadow-xl hover:scale-110 active:scale-90 transition-all border border-zinc-100 z-50"
              >
                <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const GalleryItem = ({ image, index, className, onSelect }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 1.2 }}
      className={`${className} relative group cursor-pointer`}
      onClick={onSelect}
    >
      <motion.div
        whileHover={{ y: -5, scale: 1.01 }}
        whileTap={{ rotate: 3, scale: 0.96, transition: { duration: 0.1 } }}
        className="w-full h-full bg-white border border-zinc-100 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-sm transition-all duration-500 will-change-transform"
      >
        <img 
          src={image.url} 
          alt={image.alt}
          className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
          <div className="w-10 h-10 bg-white/90 backdrop-blur-md rounded-xl flex items-center justify-center text-zinc-900 shadow-sm border border-zinc-100">
            <Maximize2 size={16} />
          </div>
        </div>

        <div className="absolute bottom-8 left-8 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
          <span className="text-[10px] font-black text-white uppercase tracking-[0.4em]">Memory #{index.toString().padStart(2, '0')}</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ElainaGallery;
