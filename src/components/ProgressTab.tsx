import React from 'react';
import { CheckCircle2, Circle, Clock, Target, Trophy, TrendingUp } from 'lucide-react';
import InfoBox from './InfoBox';

export default function ProgressTab() {
  const subjects = [
    { name: 'পদার্থবিজ্ঞান ১ম পত্র', total: 10, completed: 8, color: 'bg-blue-500' },
    { name: 'পদার্থবিজ্ঞান ২য় পত্র', total: 11, completed: 5, color: 'bg-indigo-500' },
    { name: 'রসায়ন ১ম পত্র', total: 5, completed: 4, color: 'bg-emerald-500' },
    { name: 'রসায়ন ২য় পত্র', total: 5, completed: 2, color: 'bg-teal-500' },
    { name: 'উচ্চতর গণিত ১ম পত্র', total: 10, completed: 7, color: 'bg-amber-500' },
    { name: 'উচ্চতর গণিত ২য় পত্র', total: 10, completed: 4, color: 'bg-orange-500' },
    { name: 'বাংলা', total: 15, completed: 12, color: 'bg-rose-500' },
    { name: 'English', total: 12, completed: 6, color: 'bg-pink-500' },
  ];

  const totalChapters = subjects.reduce((acc, curr) => acc + curr.total, 0);
  const completedChapters = subjects.reduce((acc, curr) => acc + curr.completed, 0);
  const overallProgress = Math.round((completedChapters / totalChapters) * 100);

  return (
    <div className="animate-in fade-in duration-300 space-y-4">
      {/* Overall Progress Card */}
      <div className="bg-bg-surface border border-border-subtle rounded-2xl p-5 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-text-main font-bold text-lg flex items-center gap-2">
              <Trophy size={20} className="text-primary" />
              Overall Progress
            </h3>
            <p className="text-text-muted text-sm mt-1">HSC 2025 Preparation</p>
          </div>
          <div className="w-16 h-16 rounded-full border-4 border-primary/20 flex items-center justify-center relative">
            <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-primary"
                strokeDasharray={`${overallProgress}, 100`}
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
              />
            </svg>
            <span className="text-text-main font-bold text-lg">{overallProgress}%</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-bg-surface-hover rounded-xl p-3 border border-border-subtle">
            <div className="flex items-center gap-2 text-text-muted text-xs mb-1">
              <Target size={14} />
              <span>Total Chapters</span>
            </div>
            <div className="text-text-main font-bold text-xl">{totalChapters}</div>
          </div>
          <div className="bg-primary-muted rounded-xl p-3 border border-primary/20">
            <div className="flex items-center gap-2 text-primary text-xs mb-1">
              <CheckCircle2 size={14} />
              <span>Completed</span>
            </div>
            <div className="text-primary font-bold text-xl">{completedChapters}</div>
          </div>
        </div>
      </div>

      <InfoBox type="blue" title="Keep it up!">
        You are making great progress. Focus on the subjects where you are lagging behind.
      </InfoBox>

      {/* Subject Progress List */}
      <div className="space-y-3">
        <h3 className="text-text-main font-bold text-base flex items-center gap-2 px-1">
          <TrendingUp size={18} className="text-text-muted" />
          Subject-wise Progress
        </h3>
        
        {subjects.map((subject, idx) => {
          const progress = Math.round((subject.completed / subject.total) * 100);
          
          return (
            <div key={idx} className="bg-bg-surface border border-border-subtle rounded-xl p-4 shadow-sm">
              <div className="flex justify-between items-center mb-3">
                <h4 className="text-text-main font-semibold text-sm">{subject.name}</h4>
                <span className="text-text-muted text-xs font-medium bg-bg-surface-hover px-2 py-1 rounded-md">
                  {subject.completed} / {subject.total}
                </span>
              </div>
              
              <div className="relative h-2.5 bg-bg-surface-hover rounded-full overflow-hidden border border-border-subtle/50">
                <div 
                  className={`absolute top-0 left-0 h-full rounded-full transition-all duration-1000 ease-out ${subject.color}`}
                  style={{ width: `${progress}%` }}
                />
              </div>
              
              <div className="flex justify-between items-center mt-2">
                <span className="text-text-muted text-[10px] font-medium">{progress}% Complete</span>
                {progress === 100 ? (
                  <span className="text-emerald-500 text-[10px] font-bold flex items-center gap-1">
                    <CheckCircle2 size={12} /> Done
                  </span>
                ) : progress > 50 ? (
                  <span className="text-primary text-[10px] font-medium flex items-center gap-1">
                    <Clock size={12} /> On Track
                  </span>
                ) : (
                  <span className="text-amber-500 text-[10px] font-medium flex items-center gap-1">
                    <Circle size={12} /> Needs Focus
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
