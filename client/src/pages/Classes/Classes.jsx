import React from 'react';
import { Link } from 'react-router-dom';
import useAppDispatch, { useAppSelector } from '../../hooks/useAppDispatch';
import { setClassesFilter, openBookingModal } from '../../redux/slices/uiSlice';
import BmiCalculator from '../../components/common/BmiCalculator';

function Classes() {
  const dispatch = useAppDispatch();
  const activeFilter = useAppSelector((state) => state.ui.classesFilter);

  const filterButtons = [
    { label: 'All Programs', value: 'all' },
    { label: 'High Intensity (HIIT)', value: 'high' },
    { label: 'Heavy Strength', value: 'strength' },
    { label: 'Combat & Boxing', value: 'combat' },
    { label: 'Mind & Mobility', value: 'mind' },
  ];

  const classesData = [
    {
      id: 1,
      type: 'high',
      badge: 'High Intensity',
      badgeColor: 'bg-brand-neonLime text-black',
      btnHover: 'hover:bg-brand-neonLime hover:text-black',
      title: 'Pulse Metabolic Ignition',
      desc: 'Full-body anaerobic interval training utilizing ski-ergs, assault bikes, kettlebells, and bodyweight sprints.',
      image:
        'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop',
      calories: '800-1000 Cal Burn',
      duration: '50 Mins Duration',
      defaultSchedule: 'Mon, Thu 06:00 AM',
    },
    {
      id: 2,
      type: 'strength',
      badge: 'Heavy Strength',
      badgeColor: 'bg-brand-neonCyan text-black',
      btnHover: 'hover:bg-brand-neonCyan hover:text-black',
      title: 'Compound Barbell Lab',
      desc: 'Structured powerlifting techniques covering squats, bench press, deadlifts, and military presses under elite coaching.',
      image:
        'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop',
      calories: '500-700 Cal Burn',
      duration: '75 Mins Duration',
      defaultSchedule: 'Mon, Fri 08:00 AM',
    },
    {
      id: 3,
      type: 'combat',
      badge: 'Combat',
      badgeColor: 'bg-red-500 text-black',
      btnHover: 'hover:bg-red-500 hover:text-black',
      title: 'Heavy Bag Strike Syndicate',
      desc: 'Combinations, footwork, mitt work, and heavy bag conditioning designed to sculpt upper body power and agility.',
      image:
        'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=800&auto=format&fit=crop',
      calories: '750-950 Cal Burn',
      duration: '60 Mins Duration',
      defaultSchedule: 'Tue 05:30 PM',
    },
    {
      id: 4,
      type: 'mind',
      badge: 'Mind & Body',
      badgeColor: 'bg-purple-500 text-black',
      btnHover: 'hover:bg-purple-500 hover:text-black',
      title: 'Kinetic Flow & Recovery',
      desc: 'Dynamic stretching, joint mobility work, core stabilization, and breathwork to fast-track athletic recovery.',
      image:
        'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop',
      calories: '300-400 Cal Burn',
      duration: '60 Mins Duration',
      defaultSchedule: 'Wed 07:00 AM',
    },
  ];

  const filteredClasses =
    activeFilter === 'all'
      ? classesData
      : classesData.filter((c) => c.type === activeFilter);

  return (
    <div className="py-16 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-black uppercase text-brand-neonLime tracking-widest">
            Training Programs
          </span>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white">
            EXPLORE OUR CLASSES
          </h1>
          <p className="text-gray-400 text-base">
            Filter by intensity or workout style to find the perfect session for your goals.
          </p>
        </div>

        {/* Intensity Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {filterButtons.map((btn) => (
            <button
              key={btn.value}
              onClick={() => dispatch(setClassesFilter(btn.value))}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                activeFilter === btn.value
                  ? 'bg-brand-neonLime text-black font-extrabold shadow-neon-lime'
                  : 'glass-card text-gray-300 hover:text-white'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Classes Grid Catalog */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredClasses.map((item) => (
            <div
              key={item.id}
              className="glass-card rounded-3xl overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    alt={item.title}
                  />
                  <span
                    className={`absolute top-4 right-4 ${item.badgeColor} text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full`}
                  >
                    {item.badge}
                  </span>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>

                  <div className="grid grid-cols-2 gap-2 text-xs border-t border-white/10 pt-4 text-gray-300">
                    <div>
                      <i className="fa-solid fa-fire text-brand-neonLime mr-1"></i>{' '}
                      {item.calories}
                    </div>
                    <div>
                      <i className="fa-solid fa-stopwatch text-brand-neonCyan mr-1"></i>{' '}
                      {item.duration}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 space-y-2">
                <Link
                  to="/schedule"
                  className={`block w-full text-center py-3 rounded-xl bg-white/10 font-extrabold text-xs uppercase tracking-wider transition-all ${item.btnHover}`}
                >
                  View In Schedule
                </Link>
                <button
                  onClick={() =>
                    dispatch(
                      openBookingModal({
                        classTitle: item.title,
                        classTime: item.defaultSchedule,
                      })
                    )
                  }
                  className="block w-full text-center py-2 text-[11px] font-bold uppercase tracking-wider text-gray-400 hover:text-brand-neonLime transition-colors"
                >
                  Quick Reserve &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Embedded BMI & Calorie Calculator Widget */}
        <BmiCalculator />
      </div>
    </div>
  );
}

export default Classes;
