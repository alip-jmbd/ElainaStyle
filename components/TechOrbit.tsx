
import React from 'react';
import { motion as m } from 'framer-motion';
import { SKILLS } from '../constants';

const motion = m as any;

const TechOrbit: React.FC = () => {
  return (
    <section className="py-24 px-6">
      <div className="container max-w-4xl mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-black text-zinc-900 mb-2 tracking-tighter"
          >
            Keahlian
          </motion.h2>
          <p className="text-zinc-400 text-[10px] font-black uppercase tracking-[0.4em]">Tech Stack Utama</p>
        </div>

        <div className="grid grid-cols-4 md:grid-cols-7 gap-4">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.04, duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <div className="w-14 h-14 md:w-20 md:h-20 bg-white border border-zinc-100 rounded-2xl flex items-center justify-center shadow-sm">
                <img 
                  src={`https://cdn.simpleicons.org/${skill.slug}/${skill.color}`} 
                  alt={skill.name}
                  className="w-6 h-6 md:w-8 md:h-8 object-contain"
                />
              </div>
              <span className="mt-2 text-[8px] font-bold text-zinc-400 uppercase tracking-tighter">
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
