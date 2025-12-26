
import React from 'react';
import { motion as m } from 'framer-motion';
import { Info, Calendar } from 'lucide-react';

const motion = m as any;

const AboutElaina: React.FC = () => {
  return (
    <section className="py-32 px-6 overflow-hidden">
      <div className="container max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-10"
          >
            <div>
              <p className="text-zinc-400 text-[11px] font-bold tracking-[0.4em] uppercase mb-3">SEJAK 2 OKTOBER 2020</p>
              <h2 className="text-4xl md:text-6xl font-black text-zinc-900 leading-[0.9] tracking-tighter">
                Hanya Ada Satu Waifu: <br/>
                <span className="text-zinc-400">Sang Penyihir Kelabu.</span>
              </h2>
            </div>

            <p className="text-zinc-500 leading-relaxed text-base font-medium">
              Kisah saya dimulai saat penayangan perdana anime "Majo no Tabitabi". Sejak hari itu hingga sekarang, kekaguman saya terhadap Elaina tidak pernah pudar. Kemandirian dan jiwanya yang bebas adalah inspirasi bagi saya dalam berkarya.
            </p>

            <div className="bg-white border border-zinc-100 rounded-[2.5rem] p-10 space-y-8 shadow-xl shadow-zinc-100/50">
              <h3 className="flex items-center gap-3 font-bold text-zinc-900 uppercase text-[11px] tracking-widest">
                <Info size={16} /> DATA ISTRIKU
              </h3>
              
              <div className="space-y-6">
                <div className="border-b border-zinc-50 pb-5">
                  <p className="text-[10px] text-zinc-400 uppercase tracking-widest mb-2 font-bold">BIOGRAPHICAL INFO</p>
                  <div className="flex justify-between items-end">
                    <span className="text-lg font-black text-zinc-900 uppercase tracking-tighter">Mileina Celesteria</span>
                    <div className="text-right">
                      <span className="block text-[11px] font-bold text-zinc-400 font-jp">イレイナ</span>
                      <span className="block text-[9px] font-bold text-zinc-300">Ireina</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center py-1">
                  <span className="text-[11px] text-zinc-400 uppercase tracking-wider font-bold">Alias</span>
                  <span className="text-[11px] text-zinc-900 font-black uppercase">Ashen Witch</span>
                </div>
                
                <div className="flex justify-between items-center py-1">
                  <span className="text-[11px] text-zinc-400 uppercase tracking-wider font-bold">Ulang Tahun</span>
                  <span className="text-[11px] text-zinc-900 font-black flex items-center gap-2 uppercase">
                    <Calendar size={14} /> 17 OKTOBER
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] md:aspect-square rounded-[3rem] overflow-hidden border border-zinc-100 shadow-3xl group">
              <img 
                src="https://cdn.nefusoft.cloud/xRtlS.jpg" 
                alt="Elaina Data"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60" />
            </div>
            <div className="absolute -bottom-12 -left-12 text-[10rem] font-black font-jp text-zinc-900/[0.04] rotate-[-12deg] pointer-events-none select-none">
              灰
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutElaina;
