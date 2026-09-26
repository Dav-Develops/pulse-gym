import React from 'react';
import useAppDispatch from '../../hooks/useAppDispatch';
import { openTrainerModal } from '../../redux/slices/uiSlice';

function About() {
  const dispatch = useAppDispatch();

  const trainers = [
    {
      name: 'Marcus Vance',
      role: 'Head of Conditioning',
      specialty: 'Ex-Olympic S&C Coach specializing in high-output metabolic conditioning.',
      bio: 'Ex-Olympic Strength & Conditioning Coach with over 12 years of experience developing high-output metabolic routines and professional athlete speed protocols.',
      image:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop',
      accentColor: 'hover:bg-brand-neonLime hover:text-black',
      tagColor: 'text-brand-neonLime',
    },
    {
      name: 'Jaxson Hayes',
      role: 'Power & Hypertrophy',
      specialty: 'Powerlifting champion focused on biomechanics and safe PR progression.',
      bio: 'Competitive powerlifter with a 750lb deadlift record. Certified CSCS expert specializing in structural alignment and muscle hypertrophy.',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
      accentColor: 'hover:bg-brand-neonCyan hover:text-black',
      tagColor: 'text-brand-neonCyan',
    },
    {
      name: 'Elena Rostova',
      role: 'Combat & Striking',
      specialty: 'Professional Muay Thai fighter bringing ring agility and core power.',
      bio: '15-0 professional kickboxing veteran. Master of heavy bag technique, footwork balance, and high-intensity striker conditioning.',
      image:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop',
      accentColor: 'hover:bg-red-400 hover:text-black',
      tagColor: 'text-red-400',
    },
    {
      name: 'Aria Chen',
      role: 'Mobility & Yoga',
      specialty:
        'Kinetic movement specialist dedicated to joint longevity and injury prevention.',
      bio: 'Specialist in functional kinetic movement and decompression. Helps heavy weightlifters and endurance runners unlock deep joint mobility.',
      image:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
      accentColor: 'hover:bg-purple-400 hover:text-black',
      tagColor: 'text-purple-400',
    },
  ];

  return (
    <div className="py-16 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Header Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-black uppercase text-brand-neonLime tracking-widest">
            Our Legacy & Mission
          </span>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white">
            THE PULSE PHILOSOPHY
          </h1>
          <p className="text-gray-400 text-lg">
            We stripped away unnecessary gym fluff and focused on pure performance
            engineering, elite coaching, and undeniable results.
          </p>
        </div>

        {/* Brand Story Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-3xl overflow-hidden glass-card p-2">
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop"
              className="w-full h-[450px] object-cover rounded-2xl"
              alt="Gym Floor"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-black uppercase text-white">
              WHERE ATHLETES ARE FORGED
            </h2>
            <p className="text-gray-300 leading-relaxed text-sm">
              Founded in 2020, PULSE PERFORMANCE was built on a simple premise:
              everyday individuals deserve access to the same training protocols,
              recovery technology, and elite coaching used by professional sports teams.
            </p>
            <p className="text-gray-300 leading-relaxed text-sm">
              Our 40,000 sq ft state-of-the-art facility integrates high-velocity
              strength arenas, specialized combat sports rings, cardio matrix decks,
              and a world-class recovery spa.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="border-l-2 border-brand-neonLime pl-4">
                <h4 className="font-bold text-white uppercase text-sm">
                  Scientific Training
                </h4>
                <p className="text-xs text-gray-400">
                  Data-backed progressive overload programming.
                </p>
              </div>
              <div className="border-l-2 border-brand-neonCyan pl-4">
                <h4 className="font-bold text-white uppercase text-sm">
                  Unmatched Culture
                </h4>
                <p className="text-xs text-gray-400">
                  A community that pushes you beyond average.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trainers Team Section */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-black uppercase text-brand-neonCyan tracking-widest">
              Master Instructors
            </span>
            <h2 className="text-4xl font-black uppercase tracking-tight text-white mt-1">
              MEET YOUR COACHES
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {trainers.map((t) => (
              <div
                key={t.name}
                className="glass-card rounded-2xl overflow-hidden group flex flex-col justify-between"
              >
                <div>
                  <img
                    src={t.image}
                    className="w-full h-72 object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    alt={`Trainer ${t.name}`}
                  />
                  <div className="p-5">
                    <h4 className="text-xl font-bold text-white">{t.name}</h4>
                    <span
                      className={`text-xs font-bold uppercase ${t.tagColor} tracking-wide`}
                    >
                      {t.role}
                    </span>
                    <p className="text-xs text-gray-400 mt-2">{t.specialty}</p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    onClick={() =>
                      dispatch(
                        openTrainerModal({
                          name: t.name,
                          role: t.role,
                          bio: t.bio,
                        })
                      )
                    }
                    className={`w-full py-2 rounded-lg bg-white/5 font-bold text-xs uppercase transition-all ${t.accentColor}`}
                  >
                    View Full Bio
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
