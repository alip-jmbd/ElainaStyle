
import React from 'react';
import { motion as m } from 'framer-motion';
import { MapPin, GraduationCap, ChevronDown } from 'lucide-react';

const motion = m as any;

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6">
      <div className="container max-w-4xl mx-auto flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex flex-col items-center"
        >
          <div className="relative mb-10 md:mb-14">
            <div className="relative w-36 h-36 md:w-64 md:h-64 p-2 md:p-3 bg-white rounded-full border border-zinc-200 shadow-xl overflow-hidden will-change-transform">
              <img 
                src="https://cdn.nefusoft.cloud/FyTzI.jpg" 
                alt="Alif Bilal Rozzaqi"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
              className="absolute -inset-4 border border-dashed border-zinc-100 rounded-full pointer-events-none"
            />
          </div>

          <div className="text-center space-y-6">
            <motion.h1 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-8xl font-black tracking-tighter text-zinc-900 leading-[0.85]"
            >
              Alif Bilal Rozzaqi
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 1 }}
              className="text-lg md:text-2xl text-zinc-400 font-medium max-w-2xl mx-auto"
            >
              FullStack Developer & Founder <span className="text-zinc-900">NefuSoft</span>
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 1 }}
              className="flex flex-wrap items-center justify-center gap-4 pt-6"
            >
              <div className="flex items-center gap-2.5 text-[10px] md:text-[11px] font-bold text-zinc-500 uppercase tracking-widest border border-zinc-100 py-2.5 px-5 rounded-2xl bg-white shadow-sm">
                <GraduationCap size={16} className="text-zinc-900" />
                <span>SMKN 01 PABELAN</span>
              </div>
              <div className="flex items-center gap-2.5 text-[10px] md:text-[11px] font-bold text-zinc-500 uppercase tracking-widest border border-zinc-100 py-2.5 px-5 rounded-2xl bg-white shadow-sm">
                <MapPin size={16} className="text-zinc-900" />
                <span>Jawa Tengah, ID</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="mt-20 md:mt-28 flex flex-col items-center gap-3 text-zinc-300 cursor-pointer"
          onClick={() => {
            window.history.pushState({}, '', '/skills');
            const el = document.getElementById('keahlian');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-[9px] font-black uppercase tracking-[0.5em]">Explore</span>
          <ChevronDown size={18} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
