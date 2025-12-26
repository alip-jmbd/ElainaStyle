
import React from 'react';
import { motion as m, useScroll, useTransform } from 'framer-motion';

const motion = m as any;

const Background: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  // Parallax with subtle values to prevent sudden disappearing
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-white">
      {/* Structural Grid - High Contrast */}
      <div className="absolute inset-0 bg-grid-main opacity-[0.25] pointer-events-none" />
      
      {/* Fixed Sidebar Elements for reliable visibility */}
      <div className="absolute top-0 right-12 h-full flex flex-col justify-between py-64 font-jp select-none pointer-events-none opacity-[0.06]">
        <motion.div style={{ y: y1 }} className="text-[18rem] md:text-[22rem] font-black leading-none flex flex-col">
          <span>魔</span>
          <span>女</span>
        </motion.div>
      </div>

      <div className="absolute top-1/4 left-12 h-full font-jp select-none pointer-events-none opacity-[0.04]">
        <motion.div style={{ y: y2 }} className="text-[15rem] md:text-[18rem] font-black leading-none flex flex-col">
          <span>旅</span>
          <span>人</span>
        </motion.div>
      </div>

      {/* Aesthetic Top/Bottom Fades */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-white via-white/40 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-white via-white/40 to-transparent" />
      </div>
    </div>
  );
};

export default Background;
