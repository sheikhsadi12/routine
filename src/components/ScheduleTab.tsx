import React from 'react';
import { Calendar, CheckCircle2, AlertCircle, Trophy, Star } from 'lucide-react';

export default function ScheduleTab() {
  const schedule = [
    { type: 'today', date: '২৫ মার্চ ← আজ', day: 'বুধ', morning: '📖 বাংলা পদ্য পড়া শুরু', morningType: 'normal-text', evening: '🎬 পদার্থ ১ → C1 (অধ্যায় ৬)', eveningType: 'critical' },
    { type: 'normal', date: '২৬ মার্চ', day: 'বৃহঃ', morning: '📖 বাংলা পদ্য চালিয়ে যাও', morningType: 'normal-text', evening: '🎬 রসায়ন ২ → C1 (অধ্যায় ২ শুরু)', eveningType: 'critical' },
    { type: 'normal', date: '২৭ মার্চ', day: 'শুক্র', morning: '📖 ⚠️ বাংলা ONLY revision', morningType: 'warning', evening: '🎬 পদার্থ ১ → C2 (অধ্যায় ৭) ✅', eveningType: 'critical' },
    { type: 'exam', date: '২৮ মার্চ', day: 'শনি', morning: '📖 🎯 EXAM: বাংলা ১ম পত্র', morningType: 'exam', evening: '🎬 রসায়ন ২ → C2', eveningType: 'critical' },
    { type: 'normal', date: '২৯ মার্চ', day: 'রবি', morning: '📖 ⚠️ পদার্থ ১ ONLY revision', morningType: 'warning', evening: '🎬🎬 রসায়ন ২ → C3 + পদার্থ ২ → C1', eveningType: 'critical', double: true },
    { type: 'exam', date: '৩০ মার্চ', day: 'সোম', morning: '📖 🎯 EXAM: পদার্থবিজ্ঞান ১ম পত্র', morningType: 'exam', evening: '🎬 রসায়ন ২ → C4', eveningType: 'critical' },
    { type: 'normal', date: '৩১ মার্চ', day: 'মঙ্গল', morning: '📖 ⚠️ রসায়ন ১ ONLY revision', morningType: 'warning', evening: '🎬 পদার্থ ২ → C2 (অধ্যায় ৪)', eveningType: 'high' },
    { type: 'exam', date: '০১ এপ্রিল', day: 'বুধ', morning: '📖 🎯 EXAM: রসায়ন ১ম পত্র', morningType: 'exam', evening: '🎬 রসায়ন ২ → C5', eveningType: 'critical' },
    { type: 'normal', date: '০২ এপ্রিল', day: 'বৃহঃ', morning: '📖 English Writing + Rearrange', morningType: 'normal-text', evening: '🎬🎬 গণিত ১ → C1 + রসায়ন ২ → C6', eveningType: 'high', double: true },
    { type: 'normal', date: '০৩ এপ্রিল', day: 'শুক্র', morning: '📖 ⚠️ English ONLY revision', morningType: 'warning', evening: '🎬 গণিত ১ → C2 (অধ্যায় ১০)', eveningType: 'high' },
    { type: 'exam', date: '০৪ এপ্রিল', day: 'শনি', morning: '📖 🎯 EXAM: ইংরেজি ১ম পত্র', morningType: 'exam', evening: '🎬 গণিত ১ → C3 ✅', eveningType: 'high' },
    { type: 'normal', date: '০৫ এপ্রিল', day: 'রবি', morning: '📖 ⚠️ গণিত ১ ONLY revision', morningType: 'warning', evening: '🎬 পদার্থ ২ → C3 (অধ্যায় ৫)', eveningType: 'high' },
    { type: 'exam', date: '০৬ এপ্রিল', day: 'সোম', morning: '📖 🎯 EXAM: উচ্চতর গণিত ১ম পত্র', morningType: 'exam', evening: '🎬 রসায়ন ২ → C7', eveningType: 'critical' },
    { type: 'normal', date: '০৭ এপ্রিল', day: 'মঙ্গল', morning: '📖 ⚠️ Bio ১ + Stat ১ ONLY revision', morningType: 'warning', evening: '🎬 পদার্থ ২ → C4', eveningType: 'high' },
    { type: 'exam', date: '০৮ এপ্রিল', day: 'বুধ', morning: '📖 🎯 EXAM: জীববিজ্ঞান + পরিসংখ্যান ১ম পত্র', morningType: 'exam', evening: '🎬 রসায়ন ২ → C8', eveningType: 'critical' },
    { type: 'normal', date: '০৯ এপ্রিল', day: 'বৃহঃ', morning: '📖 ⚠️ বাংলা ২য় ONLY revision', morningType: 'warning', evening: '🎬 পদার্থ ২ → C5 ✅', eveningType: 'high' },
    { type: 'exam', date: '১০ এপ্রিল', day: 'শুক্র', morning: '📖 🎯 EXAM: বাংলা ২য় পত্র', morningType: 'exam', evening: '🎬 রসায়ন ২ → C9', eveningType: 'critical' },
    { type: 'normal', date: '১১ এপ্রিল', day: 'শনি', morning: '📖 ⚠️ পদার্থ ২ ONLY revision', morningType: 'warning', evening: '🎬🎬 রসায়ন ২ → C10 + C11', eveningType: 'critical', double: true },
    { type: 'exam', date: '১২ এপ্রিল', day: 'রবি', morning: '📖 🎯 EXAM: পদার্থবিজ্ঞান ২য় পত্র', morningType: 'exam', evening: '🎬🎬 রসায়ন ২ → C12 + C13', eveningType: 'critical', double: true },
    { type: 'normal', date: '১৩ এপ্রিল', day: 'সোম', morning: '📖 ⚠️⚠️ রসায়ন ২ ONLY revision — সারাদিন', morningType: 'warning', evening: '🎬 রসায়ন ২ → C14 ✅ শেষ!', eveningType: 'critical' },
    { type: 'exam', date: '১৪ এপ্রিল', day: 'মঙ্গল', morning: '📖 🎯 EXAM: রসায়ন ২য় পত্র', morningType: 'exam', evening: '🎬 English Grammar → C1 😮‍💨 বিশাল load শেষ!', eveningType: 'medium' },
    { type: 'normal', date: '১৫ এপ্রিল', day: 'বুধ', morning: '📖 English Grammar revision + Writing', morningType: 'normal-text', evening: '🎬 English Grammar → C2', eveningType: 'medium' },
    { type: 'normal', date: '১৬ এপ্রিল', day: 'বৃহঃ', morning: '📖 ⚠️ English ২য় ONLY revision', morningType: 'warning', evening: '🎬 English Grammar → C3 ✅', eveningType: 'medium' },
    { type: 'exam', date: '১৭ এপ্রিল', day: 'শুক্র', morning: '📖 🎯 EXAM: ইংরেজি ২য় পত্র', morningType: 'exam', evening: '🎬 গণিত ২ → C1 (অধ্যায় ৮)', eveningType: 'medium' },
    { type: 'normal', date: '১৮ এপ্রিল', day: 'শনি', morning: '📖 ⚠️ গণিত ২ ONLY revision', morningType: 'warning', evening: '🎬 গণিত ২ → C2', eveningType: 'medium' },
    { type: 'exam', date: '১৯ এপ্রিল', day: 'রবি', morning: '📖 🎯 EXAM: উচ্চতর গণিত ২য় পত্র', morningType: 'exam', evening: '🎬 পদার্থ ১ → C3 (অধ্যায় ৮)', eveningType: 'low' },
    { type: 'normal', date: '২০-২১ এপ্রিল', day: 'সোম-মঙ্গল', morning: '📖 Bio ২ + Stat ২ revision / EXAM', morningType: 'normal-text', evening: '🎬 গণিত ২ → C3-C4', eveningType: 'low' },
    { type: 'normal', date: '২২-২৩ এপ্রিল', day: 'বুধ-বৃহঃ', morning: '📖 ⚠️ পদার্থ ১ পত্র-৩ revision', morningType: 'warning', evening: '🎬🎬 পদার্থ ১ → C4-C5 ✅ + গণিত ২ → C5-C6 ✅', eveningType: 'low' },
    { type: 'normal', date: '২৪ এপ্রিল — ১২ মে', day: 'শেষ ধাপ', morning: '📖 বাকি exams — রসায়ন, গণিত পত্র-৩,৪', morningType: 'normal-text', evening: '🎬 Revision only — সব class শেষ! ✅', eveningType: 'done' },
  ];

  const cardStyles = {
    today: 'bg-primary/10 border-primary/30',
    exam: 'bg-rose-500/10 border-rose-500/20',
    normal: 'bg-bg-surface border-border-subtle',
  };

  const dateStyles = {
    today: 'text-primary',
    exam: 'text-rose-400',
    normal: 'text-text-muted',
  };

  const morningStyles = {
    'normal-text': 'text-text-muted',
    warning: 'text-amber-400',
    exam: 'text-rose-400',
  };

  const eveningStyles = {
    critical: 'text-rose-400',
    high: 'text-orange-400',
    medium: 'text-amber-400',
    low: 'text-emerald-400',
    done: 'text-emerald-500',
  };

  return (
    <div className="animate-in fade-in duration-300">
      <div className="flex gap-4 mb-4 flex-wrap">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-primary"></div>
          <span className="text-[11px] text-text-muted font-medium">আজ</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-rose-500"></div>
          <span className="text-[11px] text-text-muted font-medium">পরীক্ষা</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-purple-500"></div>
          <span className="text-[11px] text-text-muted font-medium">ডাবল ক্লাস</span>
        </div>
      </div>

      <div className="space-y-2">
        {schedule.map((item, idx) => (
          <div key={idx} className={`rounded-xl py-3 px-4 border transition-colors ${cardStyles[item.type as keyof typeof cardStyles]}`}>
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2">
                {item.type === 'today' && <Calendar className="w-3.5 h-3.5 text-primary" />}
                {item.type === 'exam' && <AlertCircle className="w-3.5 h-3.5 text-rose-400" />}
                <div className={`text-xs font-bold tracking-tight ${dateStyles[item.type as keyof typeof dateStyles]}`}>{item.date}</div>
              </div>
              <div className="text-[11px] text-text-muted font-medium uppercase tracking-wider">{item.day}</div>
            </div>
            
            <div className={`text-xs mb-2 leading-relaxed flex items-start gap-2 ${morningStyles[item.morningType as keyof typeof morningStyles]}`}>
              <span className="mt-0.5 opacity-70">•</span>
              {item.morning}
            </div>
            
            <div className={`text-xs leading-relaxed pt-2 border-t border-border-subtle flex items-start gap-2 ${eveningStyles[item.eveningType as keyof typeof eveningStyles]}`}>
              <span className="mt-0.5 opacity-70">•</span>
              <div className="flex-1">
                {item.evening}
                {item.double && (
                  <span className="inline-flex items-center gap-1 text-[10px] bg-purple-500/10 text-purple-400 rounded-full px-2 py-0.5 ml-2 font-medium border border-purple-500/20">
                    <Star className="w-2.5 h-2.5" />
                    Double
                  </span>
                )}
              </div>
              {item.eveningType === 'done' && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 bg-emerald-500/10 rounded-2xl p-6 border border-emerald-500/20 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500/30"></div>
        <Trophy className="w-8 h-8 text-emerald-500 mx-auto mb-3" />
        <div className="text-lg font-bold text-emerald-500">১২ মে — শেষ পরীক্ষা!</div>
        <div className="text-sm text-emerald-400/80 mt-1 font-medium italic">ইনশাআল্লাহ তুমি পারবে 💪</div>
      </div>
    </div>
  );
}
