import React, { useState, useEffect, useRef } from 'react';
import { EXAMS, PLANS, BN_DAYS, BN_MONTHS } from './data';

const START_DATE = new Date('2026-04-02');
const END_DATE = new Date('2026-05-01');

function dateKey(d: Date) {
  return d.toISOString().slice(0, 10);
}

function bnDate(d: Date) {
  const bnd = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  const n = d.getDate().toString().split('').map(x => bnd[parseInt(x)]).join('');
  return n + ' ' + BN_MONTHS[d.getMonth()] + ', ' + BN_DAYS[d.getDay()];
}

function daysUntil(dateStr: string) {
  const d = new Date(dateStr);
  d.setHours(0, 0, 0, 0);
  const t = new Date();
  t.setHours(0, 0, 0, 0);
  return Math.ceil((d.getTime() - t.getTime()) / 86400000);
}

export default function App() {
  const [currentDate, setCurrentDate] = useState(() => {
    let d = new Date();
    d.setHours(0, 0, 0, 0);
    if (d < START_DATE) d = new Date(START_DATE);
    if (d > END_DATE) d = new Date(END_DATE);
    return d;
  });

  const stripRef = useRef<HTMLDivElement>(null);

  const key = dateKey(currentDate);
  const plan = PLANS[key];
  const exam = EXAMS[key];

  const todayKey = dateKey(new Date());
  const isToday = key === todayKey;

  const prevDate = new Date(currentDate);
  prevDate.setDate(prevDate.getDate() - 1);
  const nextDate = new Date(currentDate);
  nextDate.setDate(nextDate.getDate() + 1);

  const canGoPrev = prevDate >= START_DATE;
  const canGoNext = nextDate <= END_DATE;

  const changeDay = (delta: number) => {
    const d = new Date(currentDate);
    d.setDate(d.getDate() + delta);
    if (d >= START_DATE && d <= END_DATE) {
      setCurrentDate(d);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const jumpTo = (k: string) => {
    setCurrentDate(new Date(k));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const activePill = stripRef.current?.querySelector('.active');
    if (activePill) {
      activePill.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [currentDate]);

  // Touch swipe
  useEffect(() => {
    let tx = 0;
    const handleTouchStart = (e: TouchEvent) => {
      tx = e.touches[0].clientX;
    };
    const handleTouchEnd = (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - tx;
      if (Math.abs(dx) > 60) changeDay(dx < 0 ? 1 : -1);
    };

    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentDate]);

  const allDates = Object.keys(EXAMS).sort();
  const upcoming = allDates.filter(d => new Date(d) >= currentDate).slice(0, 3);

  const renderStrip = () => {
    const pills = [];
    const d = new Date(START_DATE);
    while (d <= END_DATE) {
      const k = dateKey(d);
      const isExam = !!EXAMS[k];
      const isTd = k === todayKey;
      const day = d.getDate();
      const mon = BN_MONTHS[d.getMonth()].slice(0, 3);
      let cls = 'day-pill';
      if (isExam) cls += ' exam-p';
      if (isTd) cls += ' today-p';
      if (k === key) cls += ' active';

      pills.push(
        <div key={k} className={cls} onClick={() => jumpTo(k)}>
          {day} {mon}
        </div>
      );
      d.setDate(d.getDate() + 1);
    }
    return pills;
  };

  return (
    <>
      <div className="orb orb1"></div>
      <div className="orb orb2"></div>
      <div className="wrap">
        <div className="hdr">
          <div className="hdr-logo">📅 Daily Plan</div>
          <div className="today-chip">
            {isToday ? '📍 আজকে' : bnDate(new Date())}
          </div>
        </div>

        <div className="day-strip" ref={stripRef}>
          {renderStrip()}
        </div>

        <div className="day-nav">
          <button className="nav-btn" disabled={!canGoPrev} onClick={() => changeDay(-1)}>‹</button>
          <div className="day-info">
            <div className="day-date">
              {currentDate.getDate()} {BN_MONTHS[currentDate.getMonth()]} {currentDate.getFullYear()}
            </div>
            <div className="day-bn">
              {BN_DAYS[currentDate.getDay()]} {isToday ? ' • আজকে' : ''}
            </div>
          </div>
          <button className="nav-btn" disabled={!canGoNext} onClick={() => changeDay(1)}>›</button>
        </div>

        {!plan ? (
          <div className="status-bar free">📅 এই তারিখের জন্য পরিকল্পনা নেই।</div>
        ) : (
          <>
            <div className={`status-bar ${plan.type === 'exam' ? 'exam' : plan.type === 'prep' ? 'prep' : 'today'}`}>
              {plan.type === 'exam' ? '📝 ' : plan.type === 'prep' ? '⚡ ' : '📌 '}
              {plan.note}
            </div>

            <div className="next-exam-row">
              {upcoming.map(d => {
                const du = daysUntil(d);
                const label = du === 0 ? 'আজকে' : du === 1 ? 'আগামীকাল' : du + ' দিন পর';
                return (
                  <div key={d} className="next-chip">
                    📅 <span>{EXAMS[d].s}</span> — {label}
                  </div>
                );
              })}
            </div>

            <div>
              {plan.exam && EXAMS[plan.exam] && (
                <div className="exam-card-special">
                  <div className="exam-big">📝 পরীক্ষার দিন</div>
                  <div style={{ fontSize: '17px', fontWeight: 700, color: 'var(--text)', margin: '8px 0 4px' }}>
                    {EXAMS[plan.exam].s}
                  </div>
                  <div className="exam-sub">
                    📖 {EXAMS[plan.exam].t} {EXAMS[plan.exam].m ? '• ' + EXAMS[plan.exam].m + ' নম্বর' : ''} {EXAMS[plan.exam].time ? '• ' + EXAMS[plan.exam].time : ''}
                  </div>
                  <div className="exam-note">Bismillah বলে শুরু করো — তুমি পারবে 🌟</div>
                </div>
              )}

              {plan.sessions?.map((s: any, i: number) => (
                <div key={i} className="session-card" style={{ animationDelay: `${0.05 + i * 0.05}s` }}>
                  <div className="session-head">
                    <div className={`session-icon ${s.si}`}>{s.icon}</div>
                    <div style={{ flex: 1 }}>
                      <div className="session-time">{s.time}</div>
                      <div className="session-label">{s.label}</div>
                    </div>
                  </div>
                  <div className="session-body">
                    <div className="session-subject">{s.sub}</div>
                    {s.topic && <div className="session-topic">▸ {s.topic}</div>}
                    <div className="session-detail">{s.detail}</div>
                  </div>
                </div>
              ))}
            </div>

            {plan.motto && (
              <div className="day-motto" dangerouslySetInnerHTML={{ __html: plan.motto }}></div>
            )}
          </>
        )}
      </div>
    </>
  );
}
