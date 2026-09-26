import React from 'react';
import { Link } from 'react-router-dom';
import TreeScene from '../../scenes/TreeScene';

function Home() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20">
        {/* Background Video / Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1920&auto=format&fit=crop"
            className="w-full h-full object-cover filter brightness-[0.35]"
            alt="Gym Training Hero"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-brand-black/80"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-brand-neonLime/40 text-brand-neonLime text-xs font-bold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-brand-neonLime animate-ping"></span>
            Next-Gen Fitness Architecture
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-none">
            REDEFINE YOUR <br />
            <span className="text-gradient-lime">HUMAN LIMITS.</span>
          </h1>

          <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto font-normal leading-relaxed">
            Bio-hacking equipment, Olympic-level conditioning coaches, and
            hyper-energetic group atmospheres engineered to transform your body.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              to="/contact"
              className="px-8 py-4 rounded-xl bg-brand-neonLime text-black font-extrabold uppercase tracking-wider hover:bg-white hover:shadow-neon-lime transition-all"
            >
              Claim 7-Day Free Pass <i className="fa-solid fa-arrow-right ml-2"></i>
            </Link>
            <Link
              to="/classes"
              className="px-8 py-4 rounded-xl glass-card text-white font-extrabold uppercase tracking-wider hover:border-brand-neonLime/50 transition-all"
            >
              Explore All Classes
            </Link>
          </div>

          {/* Interactive 3D Emblem Scene Preview */}
          <div className="max-w-xs mx-auto pt-2">
            <TreeScene />
          </div>

          {/* Hero Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-white/10 max-w-4xl mx-auto">
            <div className="glass-card p-4 rounded-2xl">
              <div className="text-3xl font-black text-white">40,000</div>
              <div className="text-xs text-brand-neonLime font-bold uppercase mt-1">
                Sq. Ft. Facility
              </div>
            </div>
            <div className="glass-card p-4 rounded-2xl">
              <div className="text-3xl font-black text-brand-neonCyan">35+</div>
              <div className="text-xs text-gray-400 font-bold uppercase mt-1">
                Master Trainers
              </div>
            </div>
            <div className="glass-card p-4 rounded-2xl">
              <div className="text-3xl font-black text-white">60+</div>
              <div className="text-xs text-brand-neonLime font-bold uppercase mt-1">
                Weekly Classes
              </div>
            </div>
            <div className="glass-card p-4 rounded-2xl">
              <div className="text-3xl font-black text-brand-neonCyan">99.8%</div>
              <div className="text-xs text-gray-400 font-bold uppercase mt-1">
                Goal Success
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Home Preview Highlights */}
      <section className="py-20 bg-brand-dark/50 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-black uppercase text-brand-neonLime tracking-widest">
              Why Pulse Gym
            </span>
            <h2 className="text-4xl font-black uppercase tracking-tight text-white mt-1">
              BUILT FOR ATHLETIC SUPREMACY
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-3xl space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-brand-neonLime/10 text-brand-neonLime flex items-center justify-center text-2xl">
                <i className="fa-solid fa-bolt"></i>
              </div>
              <h3 className="text-2xl font-bold text-white">Hyper-Intensity Zones</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Dedicated arenas engineered for maximum caloric burn and cardiovascular
                output using live biometric tracking.
              </p>
              <Link
                to="/about"
                className="inline-block text-xs font-bold uppercase text-brand-neonLime hover:underline"
              >
                Learn About Facility &rarr;
              </Link>
            </div>

            <div className="glass-card p-8 rounded-3xl space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-brand-neonCyan/10 text-brand-neonCyan flex items-center justify-center text-2xl">
                <i className="fa-solid fa-dumbbell"></i>
              </div>
              <h3 className="text-2xl font-bold text-white">Custom Barbell & Rig Deck</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Full Eleiko weightlifting platforms, calibrated competition plates, and
                power cages for true strength athletes.
              </p>
              <Link
                to="/classes"
                className="inline-block text-xs font-bold uppercase text-brand-neonCyan hover:underline"
              >
                View Strength Program &rarr;
              </Link>
            </div>

            <div className="glass-card p-8 rounded-3xl space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-brand-neonLime/10 text-brand-neonLime flex items-center justify-center text-2xl">
                <i className="fa-solid fa-snowflake"></i>
              </div>
              <h3 className="text-2xl font-bold text-white">Bio-Recovery Spa</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Contrast cold plunge tanks, infrared saunas, red-light therapy, and
                compression boots for rapid muscle recovery.
              </p>
              <Link
                to="/membership"
                className="inline-block text-xs font-bold uppercase text-brand-neonLime hover:underline"
              >
                See VIP Benefits &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
