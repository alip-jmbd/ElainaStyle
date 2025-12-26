
import React, { useState, useEffect } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';

const motion = m as any;

interface LoaderProps {
  isLoading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          const jump = Math.floor(Math.random() * 8) + 1;
          return Math.min(prev + jump, 100);
        });
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader-screen"
          initial={{ y: 0 }}
          exit={{ 
            y: "-100%", 
            transition: { duration: 1, ease: [0.85, 0, 0.15, 1] } 
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white overflow-hidden"
        >
          <div className="absolute inset-0 bg-grid-main opacity-20" />
          
          <div className="relative z-10 flex flex-col items-center w-64">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-10 w-24 h-24 bg-white border border-zinc-100 rounded-3xl p-3 shadow-xl overflow-hidden"
            >
              <img src="https://cdn.nefusoft.cloud/RWIJ1.jpg" alt="Logo" className="w-full h-full object-cover rounded-xl" />
            </motion.div>

            <div className="w-full space-y-4">
              <div className="flex justify-between items-end px-1">
                <span className="text-[9px] font-black text-zinc-900 uppercase tracking-[0.4em]">Memulai Perjalanan</span>
                <span className="text-[12px] font-black text-zinc-900">{progress}%</span>
              </div>
              <div className="h-1.5 w-full bg-zinc-50 border border-zinc-100 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-zinc-900" 
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>

          <div className="absolute bottom-10 font-jp text-[8px] font-black uppercase tracking-[0.6em] text-zinc-300">
            TRAVELING WITCH • ALIF BILAL
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
