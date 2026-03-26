import React from 'react';
import InfoBox from './InfoBox';
import TimelineItem from './TimelineItem';
import { Clock, BookOpen, MonitorPlay, Coffee, Moon, Sun, BookMarked, Languages } from 'lucide-react';

export default function DailyTab() {
  return (
    <div className="animate-in fade-in duration-300">
      <InfoBox type="blue" title="মোট পড়ার সময়">
        <div className="flex justify-between items-center py-2 border-b border-border-subtle">
          <span className="text-xs text-primary font-medium flex items-center gap-1.5">
            <BookOpen size={12} /> Block 1 (Exam subject) <span className="text-[10px] text-text-muted ml-1">(৬:০০–৯:০০)</span>
          </span>
          <span className="text-xs font-bold text-text-main">৩ ঘন্টা</span>
        </div>
        <div className="flex justify-between items-center py-2 border-b border-border-subtle">
          <span className="text-xs text-amber-500 font-medium flex items-center gap-1.5">
            <Languages size={12} /> English + Arabic <span className="text-[10px] text-text-muted ml-1">(৯:০০–১০:০০)</span>
          </span>
          <span className="text-xs font-bold text-text-main">১ ঘন্টা</span>
        </div>
        <div className="flex justify-between items-center py-2 border-b border-border-subtle">
          <span className="text-xs text-primary font-medium flex items-center gap-1.5">
            <BookOpen size={12} /> Block 2 (Exam subject) <span className="text-[10px] text-text-muted ml-1">(১০:১৫–১:৩০)</span>
          </span>
          <span className="text-xs font-bold text-text-main">৩ ঘন্টা ১৫ মি</span>
        </div>
        <div className="flex justify-between items-center py-2 border-b border-border-subtle">
          <span className="text-xs text-primary font-medium flex items-center gap-1.5">
            <BookOpen size={12} /> Block 3 (Exam subject) <span className="text-[10px] text-text-muted ml-1">(৪:০০–৬:৩০)</span>
          </span>
          <span className="text-xs font-bold text-text-main">২ ঘন্টা ৩০ মি</span>
        </div>
        <div className="flex justify-between items-center py-2">
          <span className="text-xs text-purple-500 font-medium flex items-center gap-1.5">
            <MonitorPlay size={12} /> Block 4+5 (Future CLASS) <span className="text-[10px] text-text-muted ml-1">(৬:৪৫–১১:০০)</span>
          </span>
          <span className="text-xs font-bold text-text-main">৩ ঘন্টা ৪৫ মি</span>
        </div>
        <div className="flex justify-between mt-3 pt-3 border-t border-primary/20 bg-primary-muted -mx-3 -mb-3 p-3 rounded-b-xl">
          <span className="text-primary font-bold text-sm flex items-center gap-1.5">
            <Clock size={16} /> মোট পড়া
          </span>
          <span className="text-emerald-500 font-bold text-[15px]">~১৩ ঘন্টা ৩০ মিনিট</span>
        </div>
      </InfoBox>

      <InfoBox type="purple" title="সন্ধ্যার CLASS নিয়ম">
        <ul className="space-y-1.5 mt-1">
          <li className="flex items-start gap-2">
            <span className="text-purple-500 mt-0.5">•</span>
            <span>Block 4+5 = ভবিষ্যৎ subject এর class দেখো</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-500 mt-0.5">•</span>
            <span>প্রতিদিন ১টা class (৩ ঘন্টা)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-500 mt-0.5">•</span>
            <span><strong className="font-bold text-text-main">Double class দিন</strong> schedule এ চিহ্নিত আছে</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-500 mt-0.5">•</span>
            <span>Exam এর আগের দিন = class বন্ধ</span>
          </li>
        </ul>
      </InfoBox>

      <div className="mt-6 pl-1">
        <TimelineItem type="prayer" time="৫:৩০ AM" label="সেহরি + ফজর" />
        <TimelineItem type="study" time="৬:০০ AM" duration="৩ ঘন্টা" label="Block 1 — Exam subject revision/পড়া" />
        <TimelineItem type="english" time="৯:০০ AM" duration="৩০ মি" label="English 1st Grammar/Writing" />
        <TimelineItem type="arabic" time="৯:৩০ AM" duration="৩০ মি" label="Arabic — regular পড়া" />
        <TimelineItem type="break" time="১০:০০ AM" duration="১৫ মি" label="নাস্তা + বিশ্রাম" />
        <TimelineItem type="study" time="১০:১৫ AM" duration="৩ ঘন্টা ১৫ মি" label="Block 2 — Exam subject revision/পড়া" />
        <TimelineItem type="prayer" time="১:৩০ PM" label="Zuhr + দুপুরের খাবার" />
        <TimelineItem type="rest" time="২:০০ PM" duration="২ ঘন্টা" label="ঘুম / বিশ্রাম" />
        <TimelineItem type="study" time="৪:০০ PM" duration="২ ঘন্টা ৩০ মি" label="Block 3 — Exam subject revision/পড়া" />
        <TimelineItem type="prayer" time="৬:৩০ PM" label="Asr + হালকা বিরতি" />
        <TimelineItem type="class" time="৬:৪৫ PM" duration="১ ঘন্টা ১৫ মি" label="Block 4 — ভবিষ্যৎ subject CLASS" />
        <TimelineItem type="prayer" time="৮:০০ PM" label="Maghrib + রাতের খাবার" />
        <TimelineItem type="class" time="৮:৩০ PM" duration="২ ঘন্টা ৩০ মি" label="Block 5 — ভবিষ্যৎ subject CLASS" />
        <TimelineItem type="rest" time="১১:০০ PM" label="Isha + ঘুম" />
      </div>
    </div>
  );
}
