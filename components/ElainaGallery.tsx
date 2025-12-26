
import React, { useState } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight } from 'lucide-react';
import { ELAINA_GALLERY } from '../constants';

const motion = m as any;

const ElainaGallery: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  // Layout Sequence (Fixed 12-col grid):
  // 1 & 2: 9:16 (Portrait) -> col-span-3 each
  // 3: 16:9 (Landscape) -> col-span-6
  // 4: 9:16 (Portrait) -> col-span-4
  // 5 & 6: 1:1 (Square) -> col-span-4 each
  const gridLayout = [
    "col-span-6 md:col-span-3 aspect-[9/16]", // 1
    "col-span-6 md:col-span-3 aspect-[9/16]", // 2
    "col-span-12 md:col-span-6 aspect-video md:aspect-auto", // 3 (Landscape)
    "col-span-12 md:col-span-4 aspect-[9/16]", // 4
    "col-span-6 md:col-span-4 aspect-square",  // 5
    "col-span-6 md:col-span-4 aspect-square",  // 6
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
            <span className="text-[10px] font-black text-zinc-900 uppercase tracking-[0.8em] bg-zinc-50 border border-zinc-100 px-8 py-3 rounded-full shadow-sm">
              Collections
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl md:text-8xl font-black text-zinc-900 tracking-tighter mb-6 leading-none"
          >
            旅の記憶 <br/>
            <span className="text-zinc-200">Ashen Archives</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-10">
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
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-12"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImg(null)}
              className="absolute inset-0 bg-white/95 backdrop-blur-3xl"
            />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative max-w-6xl w-full h-full md:h-auto max-h-[90vh] bg-white rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-[0_100px_200px_-50px_rgba(0,0,0,0.15)] border border-zinc-100 flex items-center justify-center"
            >
              <img src={selectedImg} className="w-full h-full object-contain p-6 md:p-16" alt="Full view" />
              
              <button 
                onClick={() => setSelectedImg(null)}
                className="absolute top-8 right-8 md:top-12 md:right-12 w-16 h-16 bg-zinc-900 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 active:scale-90 transition-all z-[210]"
              >
                <X size={28} />
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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.08, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: 2000 }}
      className={`${className} relative group`}
    >
      <motion.div
        whileHover={{ y: -10, transition: { duration: 0.4 } }}
        whileTap={{ rotateY: 12, rotateX: -10, scale: 0.97 }}
        className="w-full h-full bg-white border border-zinc-100 rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-sm hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] transition-all duration-700 will-change-transform relative"
        style={{ 
          transformStyle: "preserve-3d",
          // Anti-aliasing corner fix
          WebkitMaskImage: "-webkit-radial-gradient(white, black)",
          backfaceVisibility: "hidden"
        }}
      >
        <img 
          src={image.url} 
          alt={image.alt}
          className="w-full h-full object-cover grayscale-[0.4] group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-105"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        <div className="absolute bottom-12 left-12 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-3 group-hover:translate-y-0">
          <div className="flex flex-col gap-1">
            <span className="text-[8px] font-black text-white/50 uppercase tracking-[0.5em]">LOG_FILE</span>
            <span className="text-md font-black text-white uppercase tracking-tighter">DATASET_{index.toString().padStart(2, '0')}</span>
          </div>
        </div>

        {/* Exclusive Expansion Button */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onSelect();
          }}
          className="absolute bottom-10 right-10 w-16 h-16 bg-white rounded-3xl flex flex-col items-center justify-center text-zinc-900 shadow-2xl opacity-0 group-hover:opacity-100 translate-y-8 group-hover:translate-y-0 transition-all duration-500 hover:bg-zinc-900 hover:text-white group/btn border border-zinc-100 z-40"
        >
          <ArrowUpRight size={24} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
          <span className="text-[7px] font-black uppercase mt-1 tracking-widest">EXPAND</span>
        </button>

        {/* Decorative Lines */}
        <div className="absolute top-12 left-12 w-10 h-[2px] bg-white/20 opacity-0 group-hover:opacity-100 transition-all duration-700" />
        <div className="absolute top-12 left-12 h-10 w-[2px] bg-white/20 opacity-0 group-hover:opacity-100 transition-all duration-700" />
      </motion.div>
    </motion.div>
  );
};

export default ElainaGallery;
