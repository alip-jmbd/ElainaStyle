
import React from 'react';
import { motion as m } from 'framer-motion';
import { Star, Tv, BookOpen, Quote } from 'lucide-react';

const motion = m as any;

const AnimeSection: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-zinc-950 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 p-12 opacity-[0.02] font-jp text-[15rem] font-black select-none pointer-events-none">
        魔女
      </div>

      <div className="container max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="w-full md:w-[30rem] flex-shrink-0"
          >
            <div className="relative group">
              <div className="absolute -inset-10 bg-white/5 blur-[120px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <img 
                src="https://cdn.nefusoft.cloud/IlX8o.jpg" 
                alt="Wandering Witch Poster"
                className="w-full rounded-[4rem] shadow-3xl border-4 border-white/10 relative z-10"
              />
            </div>
          </motion.div>

          <div className="flex-1 space-y-10">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-zinc-600 text-[11px] font-black tracking-[0.6em] uppercase mb-5 block">ANIME FAVORIT</span>
              <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-[0.85]">Wandering Witch: <br/><span className="text-zinc-500">The Journey of Elaina</span></h2>
              
              <div className="flex flex-wrap items-center gap-4 text-zinc-400 text-[10px] font-black uppercase tracking-widest">
                <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-5 py-2.5 rounded-full">
                  <Star size={16} className="text-yellow-500 fill-yellow-500" /> 7.56
                </span>
                <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-5 py-2.5 rounded-full">
                  <Tv size={16} /> 12 EPS
                </span>
                <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-5 py-2.5 rounded-full">
                  <BookOpen size={16} /> LIGHT NOVEL
                </span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 1 }}
              className="relative"
            >
              <Quote size={50} className="absolute -top-8 -left-10 text-white opacity-[0.03]" />
              <p className="text-zinc-400 leading-relaxed text-base md:text-lg font-medium italic">
                Terpukau oleh kisah Niké, seorang penyihir yang menjelajahi dunia, Elaina kemudian bertekad untuk melakukan hal yang serupa. Tekadnya dalam mempelajari buku dan sihir membuat Elaina menjadi penyihir termuda yang lulus dari akademi. Namun, untuk menjadi penyihir resmi dia harus menerima pelatihan dari penyihir senior. Setelah Elaina mendapatkan gelarnya, "Penyihir Kelabu", dia kemudian memulai perjalanannya ke seluruh dunia, mengunjungi dan menghadapi semua jenis orang dan tempat.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 1 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="p-8 bg-white/5 rounded-[2.5rem] border border-white/10 group hover:border-white/30 transition-all duration-500">
                <p className="text-[10px] text-zinc-500 uppercase font-black tracking-widest mb-2">STUDIO</p>
                <p className="text-lg font-black tracking-tight">C2C</p>
              </div>
              <div className="p-8 bg-white/5 rounded-[2.5rem] border border-white/10 group hover:border-white/30 transition-all duration-500">
                <p className="text-[10px] text-zinc-500 uppercase font-black tracking-widest mb-2">GENRE</p>
                <p className="text-lg font-black tracking-tight">ADVENTURE, FANTASY</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AnimeSection;
