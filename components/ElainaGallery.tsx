
import React, { useState } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import { X, Maximize2 } from 'lucide-react';
import { ELAINA_GALLERY } from '../constants';

const motion = m as any;

const ElainaGallery: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  // Sequence: 2 Port (R1), 1 Land (R2), 1 Port + 2 Square (R3)
  const gridLayout = [
    "col-span-6 md:col-span-6 aspect-[9/16]", // 1: Port
    "col-span-6 md:col-span-6 aspect-[9/16]", // 2: Port
    "col-span-12 md:col-span-12 aspect-[16/9]", // 3: Landscape
    "col-span-12 md:col-span-4 aspect-[9/16]", // 4: Port
    "col-span-6 md:col-span-4 aspect-square",  // 5: Square
    "col-span-6 md:col-span-4 aspect-square",  // 6: Square
  ];

  return (
    <section className="py-40 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <span className="text-[9px] font-black text-zinc-900 uppercase tracking-[0.8em] bg-zinc-50 border border-zinc-100 px-8 py-3 rounded-full shadow-sm">
              Collections
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-9xl font-black text-zinc-900 tracking-tighter mb-6 leading-[0.85]"
          >
            旅の記憶 <br/>
            <span className="text-zinc-200">Ashen Wanderer</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-8">
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
            className="fixed inset-0 z-[300] flex items-center justify-center p-4 md:p-12"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImg(null)}
              className="absolute inset-0 bg-white/95 backdrop-blur-3xl"
            />
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative max-w-6xl w-full h-full md:h-auto max-h-[90vh] bg-white rounded-[3rem] md:rounded-[4.5rem] overflow-hidden shadow-[0_120px_200px_-60px_rgba(0,0,0,0.15)] border border-zinc-100 flex items-center justify-center"
            >
              <img src={selectedImg} className="w-full h-full object-contain p-6 md:p-16" alt="Full view" />
              
              <button 
                onClick={() => setSelectedImg(null)}
                className="absolute top-8 right-8 md:top-12 md:right-12 w-16 h-16 bg-zinc-900 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 active:scale-90 transition-all z-[310]"
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
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.05, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: 1500 }}
      className={`${className} relative group`}
    >
      <motion.div
        whileHover={{ y: -10 }}
        whileTap={{ rotateY: 10, rotateX: -5, scale: 0.98 }}
        className="w-full h-full bg-white border border-zinc-100 rounded-[2.2rem] md:rounded-[3.2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-700 smooth-corners relative"
        style={{ transformStyle: "preserve-3d" }}
      >
        <img 
          src={image.url} 
          alt={image.alt}
          className="w-full h-full object-cover grayscale-[0.25] group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-110"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        {/* Label Bottom Left - Smaller as requested */}
        <div className="absolute bottom-10 left-10 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-3 group-hover:translate-y-0">
          <div className="flex flex-col gap-0.5">
             <span className="text-[7px] font-black text-white/50 uppercase tracking-[0.4em]">ARCHIVE_FILE</span>
             <span className="text-sm font-black text-white uppercase tracking-tighter">Elaina #{index}</span>
          </div>
        </div>

        {/* Expand Button Top Right as requested */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onSelect();
          }}
          className="absolute top-8 right-8 w-12 h-12 md:w-14 md:h-14 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center text-zinc-900 shadow-2xl opacity-0 group-hover:opacity-100 -translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-zinc-900 hover:text-white z-40"
        >
          <Maximize2 size={20} />
        </button>
      </motion.div>
    </motion.div>
  );
};

export default ElainaGallery;
