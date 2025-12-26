
import React from 'react';
import { motion as m } from 'framer-motion';
import { Github, Globe, Phone, ArrowUpRight } from 'lucide-react';
import { SOCIALS } from '../constants';

const motion = m as any;

const ContactCard: React.FC = () => {
  return (
    <section className="py-32 px-6">
      <div className="container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="bg-white border border-zinc-200 rounded-[4rem] p-10 md:p-20 relative overflow-hidden shadow-2xl shadow-zinc-200/50 group"
        >
          {/* Background decoration */}
          <div className="absolute bottom-[-5%] right-[-5%] p-12 opacity-[0.03] pointer-events-none select-none">
            <span className="font-jp text-[15rem] font-black">連絡</span>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row gap-20 items-center">
            <div className="flex-1 text-center md:text-left">
              <span className="text-zinc-400 text-[10px] font-black uppercase tracking-[0.6em] mb-6 block">Koneksi</span>
              <h2 className="text-5xl md:text-7xl font-black text-zinc-900 mb-10 leading-[0.9] tracking-tighter">Mari Bicara <br/><span className="text-zinc-300">Tentang Proyek.</span></h2>
              
              <motion.a 
                href="mailto:contact@nefusoft.cloud" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-zinc-900 text-white px-10 py-5 rounded-[2rem] font-black shadow-2xl hover:bg-zinc-800 transition-all uppercase text-xs tracking-widest"
              >
                Kirim Email
              </motion.a>
            </div>

            <div className="w-full md:w-80 space-y-4">
              {SOCIALS.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 20 }}
                  viewport={{ once: false }}
                  className="flex items-center justify-between p-6 bg-zinc-50 border border-zinc-100 rounded-3xl hover:border-zinc-900 transition-all duration-500 group/item"
                >
                  <div className="flex items-center gap-4">
                    {/* SVG Contact Icons are Monochrome (Black) */}
                    <div className="text-zinc-900 group-hover/item:scale-110 transition-transform">
                      {social.icon === 'github' && <Github size={24} />}
                      {social.icon === 'globe' && <Globe size={24} />}
                      {social.icon === 'phone' && <Phone size={24} />}
                    </div>
                    <span className="text-xs font-black uppercase tracking-widest text-zinc-500 group-hover/item:text-zinc-900">{social.name}</span>
                  </div>
                  <ArrowUpRight size={20} className="text-zinc-200 group-hover/item:text-zinc-900 transition-colors" />
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
