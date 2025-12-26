
import React from 'react';
import { motion as m } from 'framer-motion';
import { MapPin, GraduationCap, ChevronDown } from 'lucide-react';

const motion = m as any;

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6">
      <div className="container max-w-4xl mx-auto flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex flex-col items-center"
        >
          {/* Smaller Profile Image for Mobile */}
          <div className="relative mb-8 md:mb-12">
            <div className="relative w-32 h-32 md:w-56 md:h-56 p-1.5 md:p-2 bg-white rounded-full border border-zinc-200 shadow-sm overflow-hidden">
              <img 
                src="https://cdn.nefusoft.cloud/FyTzI.jpg" 
                alt="Alif Bilal Rozzaqi"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          <div className="text-center space-y-4">
            <motion.h1 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-7xl font-black tracking-tighter text-zinc-900 leading-none"
            >
              Alif Bilal Rozzaqi
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-base md:text-xl text-zinc-400 font-medium max-w-2xl mx-auto"
            >
              FullStack Developer & Founder <span className="text-zinc-900">NefuSoft</span>
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center justify-center gap-3 pt-4"
            >
              <div className="flex items-center gap-2 text-[9px] md:text-[10px] font-bold text-zinc-500 uppercase tracking-widest border border-zinc-100 py-1.5 px-3 md:py-2 md:px-4 rounded-xl">
                <GraduationCap size={14} className="text-zinc-900" />
                <span>SMKN 01 PABELAN</span>
              </div>
              <div className="flex items-center gap-2 text-[9px] md:text-[10px] font-bold text-zinc-500 uppercase tracking-widest border border-zinc-100 py-1.5 px-3 md:py-2 md:px-4 rounded-xl">
                <MapPin size={14} className="text-zinc-900" />
                <span>Jawa Tengah, ID</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="mt-16 md:mt-24 flex flex-col items-center gap-2 text-zinc-300"
        >
          <span className="text-[8px] font-black uppercase tracking-[0.4em]">Gulir Kebawah</span>
          <ChevronDown size={16} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
