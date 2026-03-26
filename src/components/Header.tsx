import React, { useState } from 'react';
import { Settings, BookOpen, Clock, Target } from 'lucide-react';
import SettingsModal from './SettingsModal';

export default function Header() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <>
      <div className="bg-bg-surface p-5 pb-4 border-b border-border-subtle relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl -ml-10 -mb-10 pointer-events-none"></div>
        
        <div className="flex justify-between items-start relative z-10">
          <div>
            <div className="text-[10px] text-primary tracking-[3px] font-bold mb-1 uppercase">HSC 2026 · Starts March 28</div>
            <div className="text-xl font-bold text-text-main mb-3 flex items-center gap-2">
              Master Study Routine
            </div>
          </div>
          <button 
            onClick={() => setIsSettingsOpen(true)}
            className="p-2 rounded-full bg-bg-surface-hover border border-border-subtle text-text-muted hover:text-primary hover:border-primary/30 transition-all shadow-sm"
          >
            <Settings size={18} />
          </button>
        </div>
        
        <div className="flex gap-2.5 relative z-10">
          <div className="bg-bg-surface-hover rounded-xl py-2.5 px-3 flex-1 text-center border border-border-subtle shadow-sm flex flex-col items-center justify-center">
            <BookOpen size={14} className="text-red-400 mb-1 opacity-80" />
            <div className="text-xl font-bold text-red-400 leading-none">47</div>
            <div className="text-[10px] text-text-muted mt-1 font-medium">Total Classes</div>
          </div>
          <div className="bg-bg-surface-hover rounded-xl py-2.5 px-3 flex-1 text-center border border-border-subtle shadow-sm flex flex-col items-center justify-center">
            <Clock size={14} className="text-amber-400 mb-1 opacity-80" />
            <div className="text-xl font-bold text-amber-400 leading-none">141h</div>
            <div className="text-[10px] text-text-muted mt-1 font-medium">Total Hours</div>
          </div>
          <div className="bg-bg-surface-hover rounded-xl py-2.5 px-3 flex-1 text-center border border-border-subtle shadow-sm flex flex-col items-center justify-center">
            <Target size={14} className="text-emerald-400 mb-1 opacity-80" />
            <div className="text-xl font-bold text-emerald-400 leading-none">~14</div>
            <div className="text-[10px] text-text-muted mt-1 font-medium">Hours/Day</div>
          </div>
        </div>
      </div>

      <SettingsModal 
        isOpen={isSettingsOpen} 
        onClose={() => setIsSettingsOpen(false)} 
      />
    </>
  );
}
