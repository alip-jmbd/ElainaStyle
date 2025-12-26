
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
          return prev + Math.floor(Math.random() * 12) + 1;
        });
      }, 40);
      return () => clearInterval(interval);
    }
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader-curtain"
          initial={{ y: 0 }}
          exit={{ 
            y: "-100%", 
            transition: { 
              duration: 1.2, 
              ease: [0.77, 0, 0.175, 1] // Strong Expo ease for "Slide Up"
            } 
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
        >
          <div className="absolute inset-0 bg-grid-main opacity-40 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center max-w-xs w-full px-6">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <div className="w-28 h-28 bg-white border border-zinc-100 rounded-[2.5rem] flex items-center justify-center shadow-2xl p-4 overflow-hidden">
                <img src="https://cdn.nefusoft.cloud/RWIJ1.jpg" alt="Logo" className="w-full h-full object-cover rounded-2xl" />
              </div>
            </motion.div>

            <div className="text-zinc-900 font-jp text-[12px] font-black uppercase tracking-[0.6em] mb-4">
              旅の準備... {progress}%
            </div>

            <div className="w-full h-[4px] bg-zinc-50 rounded-full overflow-hidden mb-6 border border-zinc-100">
              <motion.div
                className="h-full bg-zinc-900"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.2 }}
              />
            </div>

            <div className="text-zinc-300 text-[10px] font-bold uppercase tracking-[0.4em] text-center">
              Wandering in Code
            </div>
          </div>

          {/* Decorative Kanji in Loader */}
          <div className="absolute bottom-12 right-12 text-zinc-100 font-jp font-black text-8xl pointer-events-none">
            魔女
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
