import React from 'react';
import { Link } from 'react-router-dom';

function PageFooter() {
  return (
    <footer className="bg-brand-black border-t border-white/10 py-12 text-gray-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-brand-neonLime flex items-center justify-center text-black font-black text-xl">
              P
            </div>
            <span className="text-xl font-black text-white tracking-wider">
              PULSE<span className="text-brand-neonLime">.</span>
            </span>
          </Link>

          {/* Footer Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 font-bold uppercase tracking-wider text-[11px]">
            <Link to="/" className="hover:text-brand-neonLime transition-colors">
              Home
            </Link>
            <Link to="/about" className="hover:text-brand-neonLime transition-colors">
              About
            </Link>
            <Link to="/classes" className="hover:text-brand-neonLime transition-colors">
              Classes
            </Link>
            <Link to="/schedule" className="hover:text-brand-neonLime transition-colors">
              Schedule
            </Link>
            <Link to="/membership" className="hover:text-brand-neonLime transition-colors">
              Membership
            </Link>
            <Link to="/contact" className="hover:text-brand-neonLime transition-colors">
              Contact
            </Link>
          </div>

          {/* Socials */}
          <div className="flex gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full glass-card flex items-center justify-center hover:text-brand-neonLime hover:border-brand-neonLime transition-colors"
              aria-label="Instagram"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full glass-card flex items-center justify-center hover:text-brand-neonLime hover:border-brand-neonLime transition-colors"
              aria-label="YouTube"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full glass-card flex items-center justify-center hover:text-brand-neonLime hover:border-brand-neonLime transition-colors"
              aria-label="X Twitter"
            >
              <i className="fa-brands fa-x-twitter"></i>
            </a>
          </div>
        </div>

        <div className="text-center text-gray-500 border-t border-white/5 pt-6">
          &copy; {new Date().getFullYear()} PULSE PERFORMANCE GYM. All Rights Reserved. Built for high achievers.
        </div>
      </div>
    </footer>
  );
}

export default PageFooter;
