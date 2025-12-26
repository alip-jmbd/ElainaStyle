
import React from 'react';
import { motion as m } from 'framer-motion';
import { ELAINA_GALLERY } from '../constants';

const motion = m as any;

const ElainaGallery: React.FC = () => {
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
          <p className="text-zinc-400 text-[11px] font-medium max-w-lg leading-relaxed uppercase tracking-[0.2em]">
            A curated collection of moments from the Ashen Witch's journey across the world.
          </p>
        </div>

        {/* Improved Neat Grid Layout */}
        <div className="grid grid-cols-12 gap-4 md:gap-8 auto-rows-[200px] md:auto-rows-[250px]">
          {/* Item 1: Large Feature */}
          <div className="col-span-12 md:col-span-8 row-span-2">
            <GalleryItem image={ELAINA_GALLERY[0]} index={1} />
          </div>
          
          {/* Item 2: Vertical Portrait */}
          <div className="col-span-6 md:col-span-4 row-span-2">
            <GalleryItem image={ELAINA_GALLERY[3]} index={2} />
          </div>

          {/* Item 3: Square Small */}
          <div className="col-span-6 md:col-span-3 row-span-1 md:row-span-2">
            <GalleryItem image={ELAINA_GALLERY[4]} index={3} />
          </div>

          {/* Item 4: Wide Feature */}
          <div className="col-span-12 md:col-span-9 row-span-1 md:row-span-2">
            <GalleryItem image={ELAINA_GALLERY[2]} index={4} />
          </div>

          {/* Item 5: Half Width */}
          <div className="col-span-12 md:col-span-6 row-span-2">
            <GalleryItem image={ELAINA_GALLERY[1]} index={5} />
          </div>

          {/* Item 6: Half Width */}
          <div className="col-span-12 md:col-span-6 row-span-2">
            <GalleryItem image={ELAINA_GALLERY[5]} index={6} />
          </div>
        </div>
      </div>
    </section>
  );
};

const GalleryItem = ({ image, index }: { image: any, index: number }) => {
  // Determine a random tilt direction based on index for natural feel
  const tiltDir = index % 2 === 0 ? 1 : -1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        delay: index * 0.05, 
        duration: 1.5, 
        ease: [0.16, 1, 0.3, 1] 
      }}
      style={{ perspective: 1200 }}
      className="w-full h-full"
    >
      <motion.div
        whileHover={{ 
          y: -10,
          scale: 1.01,
          transition: { duration: 0.4, ease: "easeOut" }
        }}
        whileTap={{ 
          rotateY: 15 * tiltDir, 
          rotateX: -10, 
          scale: 0.96,
          z: -50,
          transition: { duration: 0.2 } 
        }}
        className="group relative w-full h-full bg-white border border-zinc-100 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-sm hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 cursor-pointer will-change-transform"
      >
        {/* Subtle texture overlay for "printed" look */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper.png')] z-10" />

        <img 
          src={image.url} 
          alt={image.alt}
          className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Labels & Aesthetic info */}
        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
           <div className="flex flex-col items-end gap-1">
              <span className="text-[10px] font-black text-white/40 uppercase tracking-widest leading-none">Entry</span>
              <span className="text-xl font-black text-white leading-none">#{index.toString().padStart(2, '0')}</span>
           </div>
        </div>

        <div className="absolute bottom-8 left-8 z-20 pointer-events-none">
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            whileHover={{ opacity: 1, x: 0 }}
            className="flex flex-col gap-2"
          >
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-[2px] bg-white/40" />
              <span className="text-[8px] font-black text-white uppercase tracking-[0.5em]">
                POSTCARD FROM WORLD
              </span>
            </div>
            <span className="font-jp text-white text-lg font-bold tracking-tighter">
              {index % 2 === 0 ? '美しい旅人' : '灰色の魔女'}
            </span>
          </motion.div>
        </div>

        {/* Corner Stamp Effect */}
        <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-white/10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none group-hover:rotate-12 transform">
          <span className="text-[8px] font-black text-white uppercase tracking-[0.2em] text-center px-4">
            APPROVED BY <br/> ASHEN WITCH
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ElainaGallery;
