
import React from 'react';
import { motion as m } from 'framer-motion';
import { Star, Tv, BookOpen, Quote } from 'lucide-react';

const motion = m as any;

const AnimeSection: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-zinc-950 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 p-12 opacity-[0.03] font-jp text-[12rem] font-bold select-none pointer-events-none">
        魔女
      </div>

      <div className="container max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full md:w-[28rem] flex-shrink-0"
          >
            <div className="relative group">
              <div className="absolute -inset-10 bg-white/5 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity" />
              <img 
                src="https://cdn.nefusoft.cloud/IlX8o.jpg" 
                alt="Wandering Witch Poster"
                className="w-full rounded-[3rem] shadow-2xl border-4 border-white/10 relative z-10"
              />
            </div>
          </motion.div>

          <div className="flex-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-zinc-600 text-[10px] font-black tracking-[0.5em] uppercase mb-4 block">Anime Favorit</span>
              <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter leading-[0.9]">Wandering Witch: <br/><span className="text-zinc-500">The Journey of Elaina</span></h2>
              
              <div className="flex flex-wrap items-center gap-6 text-zinc-400 text-xs font-bold uppercase tracking-wider">
                <span className="flex items-center gap-1.5 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-full">
                  <Star size={14} className="text-yellow-500 fill-yellow-500" /> 7.56
                </span>
                <span className="flex items-center gap-1.5 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-full">
                  <Tv size={14} /> 12 Eps
                </span>
                <span className="flex items-center gap-1.5 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-full">
                  <BookOpen size={14} /> Light Novel
                </span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <Quote size={40} className="absolute -top-6 -left-8 text-zinc-800 opacity-20" />
              <p className="text-zinc-400 leading-relaxed text-sm md:text-base font-medium italic">
                Terpukau oleh kisah Niké, seorang penyihir yang menjelajahi dunia, Elaina kemudian bertekad untuk melakukan hal yang serupa. Tekadnya dalam mempelajari buku dan sihir membuat Elaina menjadi penyihir termuda yang lulus dari akademi. Namun, untuk menjadi penyihir resmi dia harus menerima pelatihan dari penyihir senior, dan banyak dari para penyihir tersebut yang tidak percaya diri untuk menerimanya, karena dia memiliki bakat yang luar biasa. Begitulah hingga dia bertemu Fran, seorang "Penyihir Debu Bintang", dan ia menerimanya. Setelah Elaina mendapatkan gelarnya, "Penyihir Kelabu", dia kemudian memulai perjalanannya ke seluruh dunia, mengunjungi dan menghadapi semua jenis orang dan tempat.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="p-5 bg-white/5 rounded-3xl border border-white/10 group hover:border-white/30 transition-colors">
                <p className="text-[9px] text-zinc-500 uppercase font-black tracking-widest mb-1">Studio</p>
                <p className="text-sm font-bold">C2C</p>
              </div>
              <div className="p-5 bg-white/5 rounded-3xl border border-white/10 group hover:border-white/30 transition-colors">
                <p className="text-[9px] text-zinc-500 uppercase font-black tracking-widest mb-1">Genre</p>
                <p className="text-sm font-bold">Adventure, Fantasy</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AnimeSection;
