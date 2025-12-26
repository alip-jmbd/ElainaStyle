
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
          return prev + Math.floor(Math.random() * 8) + 1;
        });
      }, 30);
      return () => clearInterval(interval);
    }
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
        >
          <div className="relative flex flex-col items-center max-w-xs w-full px-6">
            <motion.div
              initial={{ rotate: -12, scale: 0.8 }}
              animate={{ y: [0, -15, 0], rotate: [-12, -8, -12], scale: 1 }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="mb-10"
            >
              <div className="w-24 h-24 bg-white border border-zinc-100 rounded-[2rem] flex items-center justify-center shadow-xl p-4 overflow-hidden">
                <img src="https://cdn.nefusoft.cloud/RWIJ1.jpg" alt="Logo" className="w-full h-full object-cover rounded-xl" />
              </div>
            </motion.div>

            <div className="text-zinc-900 font-jp text-[10px] font-black uppercase tracking-[0.5em] mb-4">
              LOADING... {progress}%
            </div>

            <div className="w-full h-[2px] bg-zinc-50 rounded-full overflow-hidden mb-4">
              <motion.div
                className="h-full bg-zinc-900"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            <div className="text-zinc-300 text-[9px] font-bold uppercase tracking-[0.3em] text-center">
              Elaina My Wife
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;