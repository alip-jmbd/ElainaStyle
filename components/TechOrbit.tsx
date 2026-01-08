
import React from 'react';
import { motion as m } from 'framer-motion';
import { SKILLS } from '../constants';

const motion = m as any;

const TechOrbit: React.FC = () => {
  return (
    <section className="py-32 px-6">
      <div className="container max-w-5xl mx-auto">
        <div className="flex flex-col items-center mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-6xl font-black text-zinc-900 mb-4 tracking-tighter"
          >
            Keahlian
          </motion.h2>
          <p className="text-zinc-400 text-[11px] font-black uppercase tracking-[0.5em]">TECH STACK FAVORIT (Ngeprompt Njir 😹) </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 md:gap-8">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center group"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 bg-white border border-zinc-100 rounded-3xl flex items-center justify-center shadow-sm group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-500">
                <img 
                  src={skill.iconUrl || `https://cdn.simpleicons.org/${skill.slug}/${skill.color}`} 
                  alt={skill.name}
                  className="w-8 h-8 md:w-10 md:h-10 object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <span className="mt-4 text-[9px] font-black text-zinc-400 uppercase tracking-widest group-hover:text-zinc-900 transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechOrbit;
