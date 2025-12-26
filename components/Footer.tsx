
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-6 border-t border-zinc-100 text-center">
      <div className="container max-w-4xl mx-auto space-y-8">
        <div className="flex flex-col items-center gap-2">
           <p className="text-[11px] font-black uppercase tracking-[0.6em] text-zinc-400">Terima Kasih</p>
           <div className="w-12 h-[1px] bg-zinc-100 mt-2" />
        </div>
        
        <p className="text-xs font-bold text-zinc-900 uppercase tracking-widest">
          &copy; 2025 - LippWangsaff
        </p>
        
        <div className="flex flex-col items-center gap-4 pt-4">
          <div className="flex items-center gap-3 text-[10px] font-jp text-zinc-400 font-medium">
            <span className="text-zinc-900 font-bold">精神と成功</span>
            <span>( Semangat dan Sukses )</span>
          </div>
          <div className="flex items-center gap-3 text-[10px] font-jp text-zinc-300 font-medium">
            <span className="text-zinc-400 font-bold">炭化物残留物</span>
            <span>( Tetap Menjadi Karbit )</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
