import React from 'react';

interface TabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Tabs({ activeTab, setActiveTab }: TabsProps) {
  const tabs = [
    { id: 'deadline', label: 'Deadline' },
    { id: 'daily', label: 'Daily' },
    { id: 'schedule', label: 'Schedule' },
    { id: 'progress', label: 'Progress' },
    { id: 'examday', label: 'Exam Day' },
  ];

  return (
    <div className="flex bg-bg-surface border-b border-border-subtle sticky top-0 z-40 overflow-x-auto hide-scrollbar">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex-1 min-w-[80px] py-3 px-2 border-b-2 text-[11px] sm:text-xs transition-all duration-200 whitespace-nowrap ${
            activeTab === tab.id
              ? 'text-primary font-bold border-primary bg-primary-muted'
              : 'text-text-muted font-medium border-transparent hover:text-text-main hover:bg-bg-surface-hover'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
