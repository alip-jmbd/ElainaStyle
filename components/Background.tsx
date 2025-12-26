
import React from 'react';
import { motion as m, useScroll, useTransform } from 'framer-motion';

const motion = m as any;

const Background: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  // Subtler parallax effect for the grid
  const gridY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-white">
      {/* Thinner Pixel Grid with Parallax */}
      <motion.div 
        style={{ 
          y: gridY,
          backgroundImage: 'linear-gradient(#f3f3f3 0.5px, transparent 0.5px), linear-gradient(90deg, #f3f3f3 0.5px, transparent 0.5px)',
          backgroundSize: '32px 32px'
        }}
        className="absolute inset-0 opacity-80 pointer-events-none" 
      />
      
      {/* Japanese Watermarks */}
      <div className="absolute inset-0 font-jp select-none pointer-events-none overflow-hidden">
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-[10%] left-[-5%] text-[15rem] md:text-[25rem] font-black text-zinc-900/[0.02]"
        >
          魔女
        </motion.div>
        <motion.div 
          style={{ y: y2 }}
          className="absolute bottom-[10%] right-[-5%] text-[12rem] md:text-[22rem] font-bold text-zinc-900/[0.02]"
        >
          旅人
        </motion.div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] font-black text-zinc-900/[0.01]">
          自由
        </div>
      </div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-zinc-100 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-zinc-50 rounded-full blur-[120px]" />
      </div>
    </div>
  );
};

export default Background;
