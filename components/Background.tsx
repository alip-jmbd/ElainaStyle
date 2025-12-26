
import React from 'react';
import { motion as m, useScroll, useTransform } from 'framer-motion';

const motion = m as any;

const Background: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-white">
      {/* Structural Grid - High Visibility */}
      <div className="absolute inset-0 bg-grid-main opacity-40 pointer-events-none" />
      
      {/* Side Typography Decor - Vertical Alignment (Japanese Style) */}
      <div className="absolute top-0 right-8 md:right-24 h-full flex flex-col justify-between py-40 font-jp select-none pointer-events-none opacity-[0.05]">
        <motion.div style={{ y: y1 }} className="text-[15rem] md:text-[25rem] font-black leading-none flex flex-col">
          <span>魔</span>
          <span>女</span>
        </motion.div>
      </div>

      <div className="absolute top-1/4 left-8 md:left-24 h-full font-jp select-none pointer-events-none opacity-[0.03]">
        <motion.div style={{ y: y2 }} className="text-[12rem] md:text-[20rem] font-black leading-none flex flex-col">
          <span>旅</span>
          <span>人</span>
        </motion.div>
      </div>

      {/* Modern Gradient Fades */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-white via-white/80 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-white via-white/80 to-transparent" />
      </div>
    </div>
  );
};

export default Background;
