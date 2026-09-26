import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAppDispatch, { useAppSelector } from '../../hooks/useAppDispatch';
import { authService } from '../../features/auth/authService';

function Register() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { loading, error } = useAppSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    tier: 'Pulse Pro',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(authService.register(formData));
      navigate('/');
    } catch {
      // error handled in slice
    }
  };

  return (
    <div className="py-20 flex items-center justify-center min-h-[75vh] px-4 animate-fade-in">
      <div className="glass-card p-8 sm:p-10 rounded-3xl max-w-md w-full border border-white/10 relative">
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-xl bg-brand-neonLime flex items-center justify-center text-black font-black text-2xl mx-auto mb-3 shadow-neon-lime">
            P
          </div>
          <h2 className="text-3xl font-black text-white uppercase tracking-tight">
            Create Account
          </h2>
          <p className="text-xs text-gray-400 mt-1">
            Unlock elite coaching, bio-hacking tech, and arenas.
          </p>
        </div>

        {error && (
          <div className="mb-6 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase text-gray-400 mb-1">
              Full Name
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Marcus Sterling"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-bold focus:border-brand-neonLime"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-gray-400 mb-1">
              Email Address
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="athlete@domain.com"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-bold focus:border-brand-neonLime"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-gray-400 mb-1">
              Password
            </label>
            <input
              type="password"
              required
              minLength={6}
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              placeholder="•••••••• (min 6 characters)"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-bold focus:border-brand-neonLime"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-gray-400 mb-1">
              Preferred Membership Tier
            </label>
            <select
              value={formData.tier}
              onChange={(e) =>
                setFormData({ ...formData, tier: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl bg-[#181a20] border border-white/10 text-white text-sm font-bold focus:border-brand-neonLime"
            >
              <option value="Basic Access">Basic Access ($49/mo)</option>
              <option value="Pulse Pro">Pulse Pro ($89/mo)</option>
              <option value="Ultimate VIP">Ultimate VIP ($149/mo)</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-xl bg-brand-neonLime text-black font-extrabold uppercase text-xs tracking-wider hover:bg-white transition-all shadow-neon-lime disabled:opacity-50 mt-2"
          >
            {loading ? 'Registering...' : 'Complete Registration'}
          </button>
        </form>

        <div className="mt-6 text-center text-xs text-gray-400 border-t border-white/10 pt-4">
          Already have an account?{' '}
          <Link to="/login" className="text-brand-neonLime font-bold hover:underline">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
