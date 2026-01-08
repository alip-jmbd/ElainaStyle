
import React from 'react';
import { motion as m } from 'framer-motion';
import { Github, Globe, Phone, ArrowUpRight } from 'lucide-react';
import { SOCIALS } from '../constants';

const motion = m as any;

const ContactCard: React.FC = () => {
  return (
    <section className="py-40 px-6">
      <div className="container max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white border border-zinc-100 rounded-[4rem] p-12 md:p-24 relative overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.06)] group"
        >
          <div className="absolute bottom-[-5%] right-[-5%] p-16 opacity-[0.03] pointer-events-none select-none">
            <span className="font-jp text-[18rem] font-black">連絡</span>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row gap-24 items-center">
            <div className="flex-1 text-center md:text-left">
              <span className="text-zinc-400 text-[11px] font-black uppercase tracking-[0.8em] mb-8 block">KONEKSI</span>
              <h2 className="text-6xl md:text-8xl font-black text-zinc-900 mb-12 leading-[0.85] tracking-tighter">Ayo Berteman <br/><span className="text-zinc-300">Aku Baik 🗿.</span></h2>
              
              <motion.a 
                href="mailto:contact@nefusoft.cloud" 
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-4 bg-zinc-900 text-white px-12 py-6 rounded-[2.5rem] font-black shadow-2xl hover:bg-zinc-800 transition-all uppercase text-[10px] tracking-widest"
              >
                Kirim Email
              </motion.a>
            </div>

            <div className="w-full md:w-80 space-y-5">
              {SOCIALS.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 10 }}
                  className="flex items-center justify-between p-7 bg-zinc-50 border border-zinc-100 rounded-[2rem] hover:border-zinc-900 hover:bg-white transition-all duration-500 group/item"
                >
                  <div className="flex items-center gap-5">
                    <div className="text-zinc-900 group-hover/item:scale-110 transition-transform">
                      {social.icon === 'github' && <Github size={28} />}
                      {social.icon === 'globe' && <Globe size={28} />}
                      {social.icon === 'phone' && <Phone size={28} />}
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 group-hover/item:text-zinc-900">{social.name}</span>
                  </div>
                  <ArrowUpRight size={24} className="text-zinc-200 group-hover/item:text-zinc-900 transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCard;
