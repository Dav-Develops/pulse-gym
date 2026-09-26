import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import useAppDispatch, { useAppSelector } from '../../hooks/useAppDispatch';
import { authService } from '../../features/auth/authService';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { isAuthenticated, user } = useAppSelector((state) => state.auth);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Classes', path: '/classes' },
    { name: 'Schedule', path: '/schedule' },
    { name: 'Membership', path: '/membership' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleLogout = () => {
    dispatch(authService.logoutUser());
    navigate('/');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-brand-neonLime flex items-center justify-center text-black font-black text-2xl tracking-tighter transform group-hover:rotate-6 transition-transform shadow-neon-lime">
            P
          </div>
          <span className="text-2xl font-black tracking-wider uppercase text-white">
            PULSE<span className="text-brand-neonLime">.</span>
          </span>
        </Link>

        {/* Desktop Multi-Page Nav Tabs */}
        <nav className="hidden md:flex items-center space-x-6 text-xs font-extrabold uppercase tracking-widest">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `py-2 transition-colors nav-link ${
                  isActive
                    ? 'text-brand-neonLime border-b-2 border-brand-neonLime font-black'
                    : 'text-gray-300 hover:text-brand-neonLime'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* CTA Call to action & Auth Status */}
        <div className="hidden sm:flex items-center gap-3">
          {isAuthenticated ? (
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-300 font-bold hidden lg:inline">
                Hi, <span className="text-brand-neonLime">{user?.name || 'Athlete'}</span>
              </span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-full font-bold text-xs tracking-wider uppercase bg-white/10 text-gray-200 hover:bg-red-500/20 hover:text-red-400 transition-all border border-white/10"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="px-4 py-2 rounded-full font-bold text-xs tracking-wider uppercase text-gray-300 hover:text-brand-neonLime hover:bg-white/5 transition-all"
            >
              Sign In
            </Link>
          )}

          <Link
            to="/contact"
            className="px-5 py-2.5 rounded-full font-bold text-xs tracking-wider uppercase bg-brand-neonLime text-black hover:bg-white hover:shadow-neon-lime transition-all transform hover:-translate-y-0.5"
          >
            Free 7-Day Pass
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-300 hover:text-white focus:outline-none p-2"
            aria-label="Toggle navigation menu"
          >
            <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-brand-dark border-b border-white/10 px-6 py-6 space-y-4 animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-300 hover:text-brand-neonLime font-extrabold uppercase tracking-wider text-sm"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2 border-t border-white/10 space-y-3">
            {isAuthenticated ? (
              <button
                onClick={() => {
                  handleLogout();
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-center py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-white/10 text-red-400"
              >
                Sign Out ({user?.name || 'User'})
              </button>
            ) : (
              <Link
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-white/5 text-gray-200"
              >
                Sign In
              </Link>
            )}
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider bg-brand-neonLime text-black"
            >
              Claim Free 7-Day Pass
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
