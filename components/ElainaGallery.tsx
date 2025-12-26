
import React from 'react';
import { motion as m } from 'framer-motion';
import { ELAINA_GALLERY } from '../constants';

const motion = m as any;

const ElainaGallery: React.FC = () => {
  return (
    <section className="py-24 px-6">
      <div className="container max-w-5xl mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl font-black text-zinc-900 tracking-tighter mb-2"
          >
            Album Memori Elaina
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-zinc-400 text-[10px] font-black uppercase tracking-[0.4em]"
          >
            Collection of Wandering
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 items-start">
          {/* Row 1: 2 Portrait 9:16 */}
          <div className="col-span-1">
             <GalleryItem image={ELAINA_GALLERY[0]} index={1} forceAspect="aspect-[9/16]" />
          </div>
          <div className="col-span-1">
             <GalleryItem image={ELAINA_GALLERY[1]} index={2} forceAspect="aspect-[9/16]" />
          </div>

          {/* Row 2: 1 Landscape */}
          <div className="col-span-2">
             <GalleryItem image={ELAINA_GALLERY[2]} index={3} forceAspect="aspect-[16/9]" />
          </div>

          {/* Row 3: 1 Portrait */}
          <div className="col-span-2">
             <GalleryItem image={ELAINA_GALLERY[3]} index={4} forceAspect="aspect-[3/4]" />
          </div>

          {/* Row 4: 2 Squares */}
          <div className="col-span-1">
             <GalleryItem image={ELAINA_GALLERY[4]} index={5} forceAspect="aspect-square" />
          </div>
          <div className="col-span-1">
             <GalleryItem image={ELAINA_GALLERY[5]} index={6} forceAspect="aspect-square" />
          </div>
        </div>
      </div>
    </section>
  );
};

const GalleryItem = ({ image, index, forceAspect }: { image: any, index: number, forceAspect?: string }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: false }}
    transition={{ 
      delay: index * 0.1, 
      duration: 1.2, 
      ease: [0.16, 1, 0.3, 1] 
    }}
    className="group relative bg-white border border-zinc-100 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-700"
  >
    <div className={`relative overflow-hidden ${forceAspect || (
      image.type === 'landscape' ? 'aspect-[16/9]' : 
      image.type === 'portrait' ? 'aspect-[3/4]' : 'aspect-square'
    )}`}>
      <img 
        src={image.url} 
        alt={image.alt}
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-zinc-900/[0.03] group-hover:bg-transparent transition-colors duration-500" />
    </div>
    <div className="absolute bottom-4 left-4 z-10">
      <span className="text-[7px] font-black text-white uppercase tracking-widest bg-zinc-900/40 backdrop-blur-md px-2.5 py-1.5 rounded-xl border border-white/10">
        Memory #{index}
      </span>
    </div>
  </motion.div>
);

export default ElainaGallery;
