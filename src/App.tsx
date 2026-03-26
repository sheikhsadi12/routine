/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Tabs from './components/Tabs';
import DeadlineTab from './components/DeadlineTab';
import DailyTab from './components/DailyTab';
import ScheduleTab from './components/ScheduleTab';
import ExamDayTab from './components/ExamDayTab';
import ProgressTab from './components/ProgressTab';
import SplashScreen from './components/SplashScreen';
import { useTheme } from './hooks/useTheme';

export default function App() {
  useTheme();
  const [activeTab, setActiveTab] = useState('deadline');
  const [isSplashComplete, setIsSplashComplete] = useState(false);

  return (
    <>
      {!isSplashComplete && <SplashScreen onComplete={() => setIsSplashComplete(true)} />}
      <div className={`max-w-[480px] mx-auto min-h-screen pb-20 bg-bg-base transition-colors duration-500 ${!isSplashComplete ? 'hidden' : 'block'}`}>
        <Header />
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="p-4">
          {activeTab === 'deadline' && <DeadlineTab />}
          {activeTab === 'daily' && <DailyTab />}
          {activeTab === 'schedule' && <ScheduleTab />}
          {activeTab === 'examday' && <ExamDayTab />}
          {activeTab === 'progress' && <ProgressTab />}
        </div>
      </div>
    </>
  );
}
