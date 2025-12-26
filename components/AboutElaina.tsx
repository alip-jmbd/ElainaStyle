
import React from 'react';
import { motion as m } from 'framer-motion';
import { Info, Calendar, Book } from 'lucide-react';

const motion = m as any;

const AboutElaina: React.FC = () => {
  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="container max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <div>
              <p className="text-zinc-400 text-[10px] font-bold tracking-[0.3em] uppercase mb-2">Sejak 2 Oktober 2020</p>
              <h2 className="text-3xl md:text-5xl font-black text-zinc-900 leading-tight">
                Hanya Ada Satu Waifu: <br/>
                <span className="text-zinc-400">Sang Penyihir Kelabu.</span>
              </h2>
            </div>

            <p className="text-zinc-500 leading-relaxed text-sm">
              Kisah saya dimulai saat penayangan perdana anime "Majo no Tabitabi". Sejak hari itu hingga sekarang, kekaguman saya terhadap Elaina tidak pernah pudar. Kemandirian dan jiwanya yang bebas adalah inspirasi bagi saya.
            </p>

            <div className="bg-white border border-zinc-100 rounded-3xl p-8 space-y-6 shadow-sm">
              <h3 className="flex items-center gap-2 font-bold text-zinc-900 uppercase text-[10px] tracking-widest">
                <Info size={14} /> Data Istriku
              </h3>
              
              <div className="space-y-4">
                <div className="border-b border-zinc-50 pb-3">
                  <p className="text-[9px] text-zinc-400 uppercase tracking-widest mb-1 font-bold">Biographical Info</p>
                  <div className="flex justify-between items-end">
                    <span className="text-sm font-bold text-zinc-900 uppercase">Mileina Celesteria</span>
                    <div className="text-right">
                      <span className="block text-[10px] font-bold text-zinc-400">イレイナ</span>
                      <span className="block text-[8px] font-bold text-zinc-300">Ireina</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center py-1">
                  <span className="text-[10px] text-zinc-400 uppercase tracking-wider font-bold">Alias</span>
                  <span className="text-[10px] text-zinc-900 font-bold uppercase">Ashen Witch</span>
                </div>
                
                <div className="flex justify-between items-center py-1">
                  <span className="text-[10px] text-zinc-400 uppercase tracking-wider font-bold">Ulang Tahun</span>
                  <span className="text-[10px] text-zinc-900 font-bold flex items-center gap-1 uppercase">
                    <Calendar size={12} /> 17 Oktober
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Character Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative aspect-[3/4] md:aspect-square rounded-[2.5rem] overflow-hidden border border-zinc-100 shadow-2xl">
              <img 
                src="https://cdn.nefusoft.cloud/xRtlS.jpg" 
                alt="Elaina Data"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            {/* Japanese Text Decor */}
            <div className="absolute -bottom-10 -left-10 text-8xl font-black font-jp text-zinc-900/[0.03] rotate-[-15deg] pointer-events-none">
              灰
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutElaina;
