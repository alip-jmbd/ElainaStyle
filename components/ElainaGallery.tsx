
import React, { useState } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Maximize2 } from 'lucide-react';
import { ELAINA_GALLERY } from '../constants';

const motion = m as any;

const ElainaGallery: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  // Penataan Tetap Sesuai Permintaan:
  // 1 & 2: 9:16 (Portrait)
  // 3: Landscape
  // 4: 9:16 (Portrait)
  // 5 & 6: 1:1 (Square)
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
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImg(null)}
              className="absolute inset-0 bg-white/90 backdrop-blur-2xl"
            />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-full bg-white rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-[0_80px_150px_-30px_rgba(0,0,0,0.2)] border border-zinc-100 flex items-center justify-center"
            >
              <img src={selectedImg} className="max-w-full max-h-[85vh] object-contain p-4 md:p-8" alt="Full view" />
              
              <button 
                onClick={() => setSelectedImg(null)}
                className="absolute top-6 right-6 md:top-10 md:right-10 w-12 h-12 md:w-16 md:h-16 bg-zinc-900 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 active:scale-95 transition-all z-50"
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
      transition={{ delay: index * 0.05, duration: 1.2 }}
      style={{ perspective: 1500 }}
      className={`${className} relative group`}
    >
      <motion.div
        whileHover={{ y: -8 }}
        whileTap={{ rotateY: 12, rotateX: -8, scale: 0.96, transition: { duration: 0.2 } }}
        className="w-full h-full bg-white border border-zinc-100 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-sm hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 will-change-transform relative"
        style={{ 
          transformStyle: "preserve-3d",
          // Trik agar corner tetap halus saat transformasi 3D di Chrome/Safari
          WebkitMaskImage: "-webkit-radial-gradient(white, black)"
        }}
      >
        <img 
          src={image.url} 
          alt={image.alt}
          className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
        />
        
        {/* Dark Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Label Pojok Kiri Bawah */}
        <div className="absolute bottom-8 left-8 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
          <div className="flex flex-col">
            <span className="text-[8px] font-black text-white/60 uppercase tracking-[0.4em] mb-1">COLLECTION</span>
            <span className="text-xs font-black text-white uppercase tracking-widest">MEM-0{index}</span>
          </div>
        </div>

        {/* Tombol Panah (Pemicu PopUp) */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onSelect();
          }}
          className="absolute bottom-6 right-6 w-14 h-14 bg-white rounded-2xl flex flex-col items-center justify-center text-zinc-900 shadow-xl opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-zinc-900 hover:text-white group/btn border border-zinc-100"
        >
          <ArrowUpRight size={20} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          <span className="text-[7px] font-black uppercase mt-1">OPEN</span>
        </button>

        {/* Decorative Tag Pojok Atas */}
        <div className="absolute top-8 left-8 w-1 h-8 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700" />
      </motion.div>
    </motion.div>
  );
};

export default ElainaGallery;
