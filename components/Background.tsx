
import React from 'react';
import { motion as m, useScroll, useTransform } from 'framer-motion';

const motion = m as any;

const Background: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  // High contrast movement
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-white pointer-events-none">
      {/* Structural Grid */}
      <div className="absolute inset-0 bg-grid-main opacity-[0.25]" />
      
      {/* Kanji Sidebars - Positioned to always be visible */}
      <div className="absolute top-0 right-4 md:right-16 h-full flex flex-col justify-start pt-40 md:pt-64 font-jp opacity-[0.06] z-10">
        <motion.div style={{ y: y1 }} className="text-[12rem] md:text-[22rem] font-black leading-[0.85] flex flex-col">
          <span>魔</span>
          <span>女</span>
        </motion.div>
      </div>

      <div className="absolute top-1/3 left-4 md:left-16 h-full font-jp opacity-[0.04] z-10">
        <motion.div style={{ y: y2 }} className="text-[10rem] md:text-[18rem] font-black leading-[0.85] flex flex-col">
          <span>旅</span>
          <span>人</span>
        </motion.div>
      </div>

      {/* Modern Gradient Fades */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-white via-white/40 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-white via-white/40 to-transparent" />
      </div>
    </div>
  );
};

export default Background;
