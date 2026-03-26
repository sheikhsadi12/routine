import React from 'react';

interface TimelineItemProps {
  type: 'study' | 'class' | 'english' | 'arabic' | 'prayer' | 'rest' | 'break' | 'exam';
  time: string;
  duration?: string;
  label: string;
}

export default function TimelineItem({ type, time, duration, label }: TimelineItemProps) {
  const dotColors = {
    study: 'bg-primary',
    class: 'bg-purple-500',
    english: 'bg-amber-400',
    arabic: 'bg-emerald-400',
    prayer: 'bg-amber-500',
    rest: 'bg-slate-500',
    break: 'bg-amber-500',
    exam: 'bg-rose-500',
  };

  const contentStyles = {
    study: 'bg-primary/5 border-primary/10',
    class: 'bg-purple-500/10 border-purple-500/15',
    english: 'bg-amber-400/5 border-amber-400/10',
    arabic: 'bg-emerald-400/5 border-emerald-400/10',
    prayer: 'bg-bg-surface border-border-subtle',
    rest: 'bg-bg-surface border-border-subtle opacity-60',
    break: 'bg-bg-surface border-border-subtle',
    exam: 'bg-rose-500/10 border-rose-500/20',
  };

  const labelColors = {
    study: 'text-text-main',
    class: 'text-text-main',
    english: 'text-text-main',
    arabic: 'text-text-main',
    prayer: 'text-text-muted',
    rest: 'text-text-muted',
    break: 'text-text-muted',
    exam: 'text-text-main font-bold',
  };

  return (
    <div className="flex gap-4 mb-1 group">
      <div className="flex flex-col items-center w-[18px] shrink-0">
        <div className={`w-2.5 h-2.5 rounded-full shrink-0 mt-2.5 ring-4 ring-bg-base z-10 transition-transform group-hover:scale-125 ${dotColors[type]}`}></div>
        <div className="w-0.5 flex-1 bg-border-subtle min-h-[28px] -mt-1"></div>
      </div>
      <div className={`flex-1 rounded-xl py-2.5 px-3.5 mb-2 border transition-all hover:translate-x-1 ${contentStyles[type]}`}>
        <div className="flex justify-between items-center mb-1">
          <div className="text-[10px] font-bold text-primary uppercase tracking-wider">
            {time}
          </div>
          {duration && (
            <span className="text-[9px] bg-primary/10 text-primary border border-primary/20 rounded-full px-2 py-0.5 font-bold">
              {duration}
            </span>
          )}
        </div>
        <div className={`text-[13px] leading-relaxed ${labelColors[type]}`}>{label}</div>
      </div>
    </div>
  );
}
