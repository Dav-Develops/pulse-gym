import React from 'react';
import useAppDispatch, { useAppSelector } from '../../hooks/useAppDispatch';
import { setScheduleDayFilter, openBookingModal } from '../../redux/slices/uiSlice';

function Schedule() {
  const dispatch = useAppDispatch();
  const activeDay = useAppSelector((state) => state.ui.scheduleDayFilter);

  const dayTabs = [
    { label: 'All Days', value: 'all' },
    { label: 'Mon', value: 'Mon' },
    { label: 'Tue', value: 'Tue' },
    { label: 'Wed', value: 'Wed' },
    { label: 'Thu', value: 'Thu' },
    { label: 'Fri', value: 'Fri' },
  ];

  const sessions = [
    {
      id: 1,
      day: 'Mon',
      zone: 'HIIT Zone',
      zoneBadge:
        'bg-brand-neonLime/10 text-brand-neonLime border border-brand-neonLime/30',
      time: '06:00 AM - 07:00 AM',
      title: 'Metabolic Sprint Ignition',
      instructor: 'Coach Marcus Vance • Arena 01',
      slotText: 'Monday 06:00 AM',
      btnHover: 'hover:bg-brand-neonLime hover:text-black',
    },
    {
      id: 2,
      day: 'Mon',
      zone: 'Strength Deck',
      zoneBadge:
        'bg-brand-neonCyan/10 text-brand-neonCyan border border-brand-neonCyan/30',
      time: '08:00 AM - 09:15 AM',
      title: 'Hypertrophy Power Lab',
      instructor: 'Coach Jaxson Hayes • Zone 01',
      slotText: 'Monday 08:00 AM',
      btnHover: 'hover:bg-brand-neonCyan hover:text-black',
    },
    {
      id: 3,
      day: 'Tue',
      zone: 'Combat Ring',
      zoneBadge: 'bg-red-500/10 text-red-400 border border-red-500/30',
      time: '05:30 PM - 06:45 PM',
      title: 'Heavy Bag Syndicate',
      instructor: 'Coach Elena Rostova • Arena 03',
      slotText: 'Tuesday 05:30 PM',
      btnHover: 'hover:bg-red-500 hover:text-black',
    },
    {
      id: 4,
      day: 'Wed',
      zone: 'Recovery Studio',
      zoneBadge: 'bg-purple-500/10 text-purple-400 border border-purple-500/30',
      time: '07:00 AM - 08:00 AM',
      title: 'Kinetic Flow Mobility',
      instructor: 'Coach Aria Chen • Zen Room',
      slotText: 'Wednesday 07:00 AM',
      btnHover: 'hover:bg-purple-500 hover:text-black',
    },
    {
      id: 5,
      day: 'Thu',
      zone: 'HIIT Zone',
      zoneBadge:
        'bg-brand-neonLime/10 text-brand-neonLime border border-brand-neonLime/30',
      time: '06:30 PM - 07:30 PM',
      title: 'Sleds, Ski & Engine',
      instructor: 'Coach Marcus Vance • Arena 01',
      slotText: 'Thursday 06:30 PM',
      btnHover: 'hover:bg-brand-neonLime hover:text-black',
    },
    {
      id: 6,
      day: 'Fri',
      zone: 'Strength Deck',
      zoneBadge:
        'bg-brand-neonCyan/10 text-brand-neonCyan border border-brand-neonCyan/30',
      time: '05:00 PM - 06:30 PM',
      title: 'Deadlift & PR Platform',
      instructor: 'Coach Jaxson Hayes • Zone 01',
      slotText: 'Friday 05:00 PM',
      btnHover: 'hover:bg-brand-neonCyan hover:text-black',
    },
  ];

  const filteredSessions =
    activeDay === 'all' ? sessions : sessions.filter((s) => s.day === activeDay);

  return (
    <div className="py-16 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-black uppercase text-brand-neonCyan tracking-widest">
            Interactive Calendar
          </span>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white">
            WEEKLY TIMETABLE
          </h1>
          <p className="text-gray-400 text-base">
            Filter by day or workout discipline and reserve your training slot instantly.
          </p>
        </div>

        {/* Day Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2">
          {dayTabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => dispatch(setScheduleDayFilter(tab.value))}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                activeDay === tab.value
                  ? 'bg-brand-neonLime text-black font-extrabold shadow-neon-lime'
                  : 'glass-card text-gray-300 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Timetable Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSessions.map((session) => (
            <div
              key={session.id}
              className="glass-card p-6 rounded-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span
                    className={`text-[10px] font-black uppercase px-2.5 py-1 rounded ${session.zoneBadge}`}
                  >
                    {session.zone}
                  </span>
                  <span className="text-xs font-bold text-gray-400">
                    <i className="fa-regular fa-clock mr-1"></i> {session.time}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{session.title}</h3>
                <p className="text-xs text-gray-400 mb-4">{session.instructor}</p>
              </div>
              <button
                onClick={() =>
                  dispatch(
                    openBookingModal({
                      classTitle: session.title,
                      classTime: session.slotText,
                    })
                  )
                }
                className={`w-full py-2.5 rounded-xl bg-white/5 text-xs font-extrabold uppercase transition-all ${session.btnHover}`}
              >
                Book Seat
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Schedule;
