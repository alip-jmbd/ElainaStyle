
import React from 'react';
import { motion as m } from 'framer-motion';
import { ELAINA_GALLERY } from '../constants';

const motion = m as any;

const ElainaGallery: React.FC = () => {
  return (
    <section className="py-32 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-6xl font-black text-zinc-900 tracking-tighter mb-4"
          >
            Album Memori Elaina
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-zinc-400 text-[11px] font-black uppercase tracking-[0.5em]"
          >
            COLLECTION OF WANDERING
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-start">
          <div className="col-span-1">
             <GalleryItem image={ELAINA_GALLERY[0]} index={1} forceAspect="aspect-[9/16]" />
          </div>
          <div className="col-span-1">
             <GalleryItem image={ELAINA_GALLERY[1]} index={2} forceAspect="aspect-[9/16]" />
          </div>

          <div className="hidden md:block col-span-2"></div>

          <div className="col-span-2 md:col-span-4">
             <GalleryItem image={ELAINA_GALLERY[2]} index={3} forceAspect="aspect-[16/9]" />
          </div>

          <div className="col-span-2 md:col-span-4">
             <GalleryItem image={ELAINA_GALLERY[3]} index={4} forceAspect="aspect-[4/5] md:aspect-[21/9]" />
          </div>

          <div className="col-span-1 md:col-span-2">
             <GalleryItem image={ELAINA_GALLERY[4]} index={5} forceAspect="aspect-square" />
          </div>
          <div className="col-span-1 md:col-span-2">
             <GalleryItem image={ELAINA_GALLERY[5]} index={6} forceAspect="aspect-square" />
          </div>
        </div>
      </div>
    </section>
  );
};

const GalleryItem = ({ image, index, forceAspect }: { image: any, index: number, forceAspect?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ 
      delay: index * 0.1, 
      duration: 1.2, 
      ease: [0.22, 1, 0.36, 1] 
    }}
    className="group relative bg-white border border-zinc-100 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 will-change-transform"
  >
    <div className={`relative overflow-hidden ${forceAspect || 'aspect-square'}`}>
      <img 
        src={image.url} 
        alt={image.alt}
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-zinc-900/0 group-hover:bg-zinc-900/10 transition-colors duration-500" />
      
      <div className="absolute bottom-6 left-6 z-10 pointer-events-none">
        <span className="text-[8px] font-black text-white uppercase tracking-[0.3em] bg-zinc-900/60 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10">
          MEMORY #{index}
        </span>
      </div>
    </div>
  </motion.div>
);

export default ElainaGallery;
