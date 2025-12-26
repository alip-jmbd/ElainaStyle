
import React from 'react';
import { motion as m, useScroll, useTransform } from 'framer-motion';

const motion = m as any;

const Background: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  const gridY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-white">
      <motion.div 
        style={{ 
          y: gridY,
          backgroundImage: 'linear-gradient(#f7f7f7 1px, transparent 1px), linear-gradient(90deg, #f7f7f7 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
        className="absolute inset-0 opacity-100 pointer-events-none" 
      />
      
      <div className="absolute inset-0 font-jp select-none pointer-events-none overflow-hidden">
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-[5%] left-[-10%] text-[20rem] md:text-[35rem] font-black text-zinc-900/[0.02]"
        >
          魔女
        </motion.div>
        <motion.div 
          style={{ y: y2 }}
          className="absolute bottom-[5%] right-[-10%] text-[18rem] md:text-[30rem] font-black text-zinc-900/[0.02]"
        >
          旅人
        </motion.div>
      </div>

      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-white to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-white to-transparent" />
      </div>
    </div>
  );
};

export default Background;
