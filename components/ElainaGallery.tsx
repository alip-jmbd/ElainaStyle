
import React, { useState } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight } from 'lucide-react';
import { ELAINA_GALLERY } from '../constants';

const motion = m as any;

const ElainaGallery: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const gridLayout = [
    "col-span-6 md:col-span-3 aspect-[9/16]",
    "col-span-6 md:col-span-3 aspect-[9/16]",
    "col-span-12 md:col-span-6 aspect-video md:aspect-auto",
    "col-span-12 md:col-span-4 aspect-[9/16]",
    "col-span-6 md:col-span-4 aspect-square",
    "col-span-6 md:col-span-4 aspect-square",
  ];

  return (
    <section className="py-32 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <span className="text-[9px] font-black text-zinc-400 uppercase tracking-[0.8em] border border-zinc-100 px-8 py-3 rounded-full">
              Archives
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-8xl font-black text-zinc-900 tracking-tighter mb-6 leading-none"
          >
            旅の断片 <br/>
            <span className="text-zinc-200">Scattered Memories</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-12 gap-5 md:gap-10">
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
            className="fixed inset-0 z-[200] flex items-center justify-center p-6 md:p-12"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImg(null)}
              className="absolute inset-0 bg-white/95 backdrop-blur-3xl"
            />
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 35, stiffness: 350 }}
              className="relative max-w-6xl w-full max-h-full bg-white rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-[0_100px_150px_-40px_rgba(0,0,0,0.1)] border border-zinc-100"
            >
              <img src={selectedImg} className="w-full h-full object-contain p-4 md:p-12" alt="Full view" />
              
              <button 
                onClick={() => setSelectedImg(null)}
                className="absolute top-6 right-6 md:top-10 md:right-10 w-12 h-12 md:w-16 md:h-16 bg-zinc-900 rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 active:scale-95 transition-all z-50"
              >
                <X size={24} />
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
      transition={{ delay: index * 0.05, duration: 1 }}
      style={{ perspective: 1200 }}
      className={`${className} relative group`}
    >
      <motion.div
        whileHover={{ y: -8 }}
        whileTap={{ rotateY: 10, rotateX: -5, scale: 0.98 }}
        className="w-full h-full bg-white border border-zinc-100 rounded-[2rem] md:rounded-[3.5rem] overflow-hidden transition-all duration-700 smooth-corners relative"
        style={{ transformStyle: "preserve-3d" }}
      >
        <img 
          src={image.url} 
          alt={image.alt}
          className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-110"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Label Left Bottom */}
        <div className="absolute bottom-10 left-10 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-3 group-hover:translate-y-0">
          <span className="text-xl font-black text-white uppercase tracking-tighter">Elaina #{index}</span>
        </div>

        {/* Expand Button Right Bottom (Separated from text) */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onSelect();
          }}
          className="absolute bottom-8 right-8 w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-zinc-900 shadow-2xl opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-zinc-900 hover:text-white z-30"
        >
          <ArrowUpRight size={24} />
        </button>
      </motion.div>
    </motion.div>
  );
};

export default ElainaGallery;
