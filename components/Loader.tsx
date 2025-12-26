
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
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
        >
          <div className="relative flex flex-col items-center max-w-xs w-full px-6">
            <motion.div
              initial={{ rotate: -12 }}
              animate={{ y: [0, -10, 0], rotate: [-12, -10, -12] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              className="mb-8"
            >
              <div className="w-20 h-20 bg-white border border-zinc-100 rounded-[1.5rem] flex items-center justify-center shadow-md p-3 overflow-hidden">
                <img src="https://cdn.nefusoft.cloud/7WSSJ.jpg" alt="Logo" className="w-full h-full object-contain rounded-lg" />
              </div>
            </motion.div>

            <div className="text-zinc-900 font-jp text-[10px] font-black uppercase tracking-[0.5em] mb-3">
              Initializing... {progress}%
            </div>

            <div className="w-full h-[1px] bg-zinc-50 rounded-full overflow-hidden mb-3">
              <motion.div
                className="h-full bg-zinc-900"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.2 }}
              />
            </div>

            <div className="text-zinc-300 text-[8px] font-bold uppercase tracking-[0.2em] text-center">
              Elaina My Wife
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
