import React from 'react';
import { AlertCircle, CheckCircle2, Info, Sparkles } from 'lucide-react';

interface InfoBoxProps {
  type: 'red' | 'green' | 'purple' | 'blue';
  title: string;
  children: React.ReactNode;
}

export default function InfoBox({ type, title, children }: InfoBoxProps) {
  const styles = {
    red: 'bg-red-500/10 border-red-500/20',
    green: 'bg-emerald-500/10 border-emerald-500/20',
    purple: 'bg-purple-500/10 border-purple-500/20',
    blue: 'bg-primary-muted border-primary/20',
  };

  const titleStyles = {
    red: 'text-red-500',
    green: 'text-emerald-500',
    purple: 'text-purple-500',
    blue: 'text-primary',
  };

  const textStyles = {
    red: 'text-red-500/80',
    green: 'text-emerald-500/80',
    purple: 'text-purple-500/80',
    blue: 'text-text-main',
  };

  const icons = {
    red: <AlertCircle size={16} className="text-red-500" />,
    green: <CheckCircle2 size={16} className="text-emerald-500" />,
    purple: <Sparkles size={16} className="text-purple-500" />,
    blue: <Info size={16} className="text-primary" />,
  };

  return (
    <div className={`rounded-xl p-3.5 mb-4 border shadow-sm ${styles[type]}`}>
      <div className={`text-sm font-bold mb-1.5 flex items-center gap-2 ${titleStyles[type]}`}>
        {icons[type]}
        {title}
      </div>
      <div className={`text-xs leading-relaxed ${textStyles[type]}`}>{children}</div>
    </div>
  );
}
