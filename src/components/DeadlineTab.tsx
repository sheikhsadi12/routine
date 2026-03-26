import React from 'react';
import InfoBox from './InfoBox';
import { Calendar, Clock, AlertTriangle, AlertCircle, CheckCircle2, Clock3 } from 'lucide-react';

export default function DeadlineTab() {
  const deadlines = [
    {
      subject: 'পদার্থ ১ → অধ্যায় ৬,৭',
      urgency: 'এখনই',
      type: 'critical',
      tags: ['২ class', '~৬ ঘন্টা'],
      exam: '৩০ মার্চ',
      deadline: '২৯ মার্চ',
      note: 'আজকেই শুরু করো!',
    },
    {
      subject: 'রসায়ন ২ → অধ্যায় ২',
      urgency: 'এখনই',
      type: 'critical',
      tags: ['১৪ class', '~৪২ ঘন্টা'],
      exam: '১৩ এপ্রিল',
      deadline: '১২ এপ্রিল',
      note: 'সবচেয়ে বড় load — প্রতিদিন ১টা করে, কিছু দিন double',
    },
    {
      subject: 'গণিত ১ → অধ্যায় ৩,১০',
      urgency: 'জরুরি',
      type: 'high',
      tags: ['৪ class', '~১২ ঘন্টা'],
      exam: '০৬ এপ্রিল',
      deadline: '০৫ এপ্রিল',
      note: '০২ এপ্রিলের মধ্যে শেষ করো',
    },
    {
      subject: 'পদার্থ ২ → অধ্যায় ৪,৫',
      urgency: 'জরুরি',
      type: 'high',
      tags: ['৫ class', '~১৫ ঘন্টা'],
      exam: '১১ এপ্রিল',
      deadline: '১০ এপ্রিল',
      note: 'রসায়ন ২ এর ফাঁকে ফাঁকে করো',
    },
    {
      subject: 'English Grammar',
      urgency: 'মাঝারি',
      type: 'medium',
      tags: ['৩ class', '~৯ ঘন্টা'],
      exam: '১৭ এপ্রিল',
      deadline: '১৬ এপ্রিল',
      note: 'রসায়ন ২ শেষ হলেই শুরু করো',
    },
    {
      subject: 'গণিত ২ → অধ্যায় ৮,৯',
      urgency: 'মাঝারি',
      type: 'medium',
      tags: ['৬ class', '~১৮ ঘন্টা'],
      exam: '১৯ এপ্রিল',
      deadline: '১৮ এপ্রিল',
      note: 'English Grammar এর পর শুরু',
    },
    {
      subject: 'পদার্থ ১ → অধ্যায় ৮,৯',
      urgency: 'সময় আছে',
      type: 'low',
      tags: ['৪ class', '~১২ ঘন্টা'],
      exam: '২৪ এপ্রিল',
      deadline: '২৩ এপ্রিল',
      note: 'ধীরে চলো, সময় আছে',
    },
    {
      subject: 'পদার্থ ২ → অধ্যায় ৭,৯',
      urgency: 'সময় আছে',
      type: 'low',
      tags: ['৬ class', '~১৮ ঘন্টা'],
      exam: '০২ মে',
      deadline: '০১ মে',
      note: 'সময় আছে',
    },
    {
      subject: 'গণিত ১ → অধ্যায় ৪,৯',
      urgency: 'সময় আছে',
      type: 'low',
      tags: ['৬ class', '~১৮ ঘন্টা'],
      exam: '১০ মে',
      deadline: '০৯ মে',
      note: 'সবচেয়ে বেশি সময় আছে',
    },
  ];

  const typeStyles = {
    critical: {
      card: 'bg-red-500/5 border-red-500/20 hover:border-red-500/40',
      urgency: 'text-red-500',
      date: 'text-red-500',
      icon: <AlertCircle size={14} className="text-red-500" />
    },
    high: {
      card: 'bg-orange-500/5 border-orange-500/20 hover:border-orange-500/40',
      urgency: 'text-orange-500',
      date: 'text-orange-500',
      icon: <AlertTriangle size={14} className="text-orange-500" />
    },
    medium: {
      card: 'bg-amber-500/5 border-amber-500/20 hover:border-amber-500/40',
      urgency: 'text-amber-500',
      date: 'text-amber-500',
      icon: <Clock3 size={14} className="text-amber-500" />
    },
    low: {
      card: 'bg-emerald-500/5 border-emerald-500/20 hover:border-emerald-500/40',
      urgency: 'text-emerald-500',
      date: 'text-emerald-500',
      icon: <CheckCircle2 size={14} className="text-emerald-500" />
    },
  };

  return (
    <div className="animate-in fade-in duration-300">
      <InfoBox type="red" title="সবচেয়ে জরুরি নিয়ম">
        প্রতিটা subject এর class অবশ্যই exam এর <strong className="font-bold">২ দিন আগে</strong> শেষ করতে হবে।<br />
        Exam এর আগের দিন = শুধু revision, কোনো class না।
      </InfoBox>

      <div className="space-y-3">
        {deadlines.map((item, idx) => (
          <div
            key={idx}
            className={`rounded-xl p-4 border transition-all duration-200 shadow-sm ${typeStyles[item.type as keyof typeof typeStyles].card}`}
          >
            <div className="flex justify-between items-start mb-3">
              <div className="text-sm font-bold text-text-main flex-1 mr-3 leading-tight">{item.subject}</div>
              <div className={`flex items-center gap-1.5 text-xs font-semibold whitespace-nowrap bg-bg-surface px-2 py-1 rounded-md border border-border-subtle shadow-sm ${typeStyles[item.type as keyof typeof typeStyles].urgency}`}>
                {typeStyles[item.type as keyof typeof typeStyles].icon}
                {item.urgency}
              </div>
            </div>
            
            <div className="flex gap-2 mb-3">
              {item.tags.map((tag, i) => (
                <span key={i} className="bg-bg-surface border border-border-subtle rounded-md py-1 px-2.5 text-xs font-medium text-text-muted shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex justify-between items-center mb-2 bg-bg-surface/50 rounded-lg p-2 border border-border-subtle/50">
              <div className="flex items-center gap-1.5 text-xs text-text-muted">
                <Calendar size={14} />
                <span>Exam: <span className={`font-semibold ${typeStyles[item.type as keyof typeof typeStyles].date}`}>{item.exam}</span></span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-text-muted">
                <Clock size={14} />
                <span>শেষ: <span className="text-primary font-semibold">{item.deadline}</span></span>
              </div>
            </div>
            
            <div className="text-xs text-text-muted italic flex items-start gap-1.5 mt-2">
              <span className="text-primary/70 font-bold mt-0.5">💡</span> {item.note}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
