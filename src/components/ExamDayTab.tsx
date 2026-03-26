import React from 'react';
import { Lightbulb, Clock, CheckCircle2, Heart, Coffee, Moon, Sun, BookOpen, PenTool, MapPin } from 'lucide-react';
import InfoBox from './InfoBox';
import TimelineItem from './TimelineItem';

export default function ExamDayTab() {
  return (
    <div className="animate-in fade-in duration-300 space-y-6">
      <InfoBox type="green" title="পরীক্ষার দিনের নিয়ম">
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <Lightbulb className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
            <span className="text-xs leading-relaxed">সকালে শুধু quick revision — নতুন কিছু পড়বে না</span>
          </div>
          <div className="flex items-start gap-2">
            <Heart className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
            <span className="text-xs leading-relaxed">পরীক্ষার আগে calm থাকো, দোয়া করো</span>
          </div>
          <div className="flex items-start gap-2">
            <Coffee className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
            <span className="text-xs leading-relaxed">পরীক্ষার পরে বিশ্রাম নিয়ে পরের subject এর class</span>
          </div>
        </div>
      </InfoBox>

      <div className="space-y-1">
        <h3 className="text-[11px] font-bold text-text-muted uppercase tracking-widest mb-3 px-1 flex items-center gap-2">
          <Clock className="w-3 h-3" />
          Timeline
        </h3>
        <div className="space-y-1">
          <TimelineItem type="study" time="৬:০০ AM" label="🌅 উঠো, ফজর পড়ো, দোয়া করো" />
          <TimelineItem type="study" time="৬:৩০ AM" label="⚡ Quick revision — শুধু key formulas, definitions, important points" />
          <TimelineItem type="english" time="৯:০০ AM" label="🎯 পড়া বন্ধ। Pen, admit card, ID রেডি করো।" />
          <TimelineItem type="prayer" time="৯:৩০ AM" label="🚶 রওয়ানা দাও — আল্লাহর উপর ভরসা রেখে" />
          <TimelineItem type="exam" time="১০:০০ AM" label="📝 পরীক্ষা শুরু ✍️" />
          <TimelineItem type="arabic" time="১২:০০ PM" label="✅ পরীক্ষা শেষ — আলহামদুলিল্লাহ" />
          <TimelineItem type="prayer" time="১২:৩০ PM" label="🍽️ বাসায় ফিরে খাও, বিশ্রাম নাও" />
          <TimelineItem type="class" time="৪:০০ PM" label="🎬 পরের subject এর class শুরু করো" />
          <TimelineItem type="rest" time="১১:০০ PM" label="🌙 Isha + ঘুমাও" />
        </div>
      </div>

      <div className="bg-primary/5 border border-primary/10 rounded-2xl p-5 text-center relative group transition-all hover:bg-primary/10">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-bg-base px-3 py-1 border border-primary/20 rounded-full">
          <span className="text-[10px] font-bold text-primary uppercase tracking-tighter">Dua</span>
        </div>
        <div className="text-xl text-primary font-serif mb-2 tracking-wide">رَبِّ زِدْنِي عِلْمًا 🤲</div>
        <div className="text-[11px] text-text-muted font-medium italic">"রব্বি যিদনী ইলমা" — পরীক্ষায় বসার আগে পড়ো</div>
      </div>
    </div>
  );
}
