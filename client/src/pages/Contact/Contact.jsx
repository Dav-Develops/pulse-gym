import React, { useState } from 'react';
import useAppDispatch from '../../hooks/useAppDispatch';
import { showToast } from '../../redux/slices/uiSlice';
import authAPI from '../../features/auth/authAPI';

function Contact() {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [activeFaq, setActiveFaq] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await authAPI.submitTrialPass(formData);
    dispatch(showToast('7-Day Pass activated! Check your inbox.'));
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  const faqs = [
    {
      q: 'What do I need to bring for my 7-day trial?',
      a: 'Just a photo ID, workout attire, and athletic footwear. We provide complimentary towels, locks, and full locker room & shower access.',
    },
    {
      q: 'Are group classes included in the trial?',
      a: 'Yes! Your 7-day pass gives you full access to all group classes, strength arenas, and biometric cardio decks.',
    },
    {
      q: 'Is there a long-term contract requirement?',
      a: 'No long-term lock-ins. All monthly memberships can be paused or cancelled anytime with a simple 30 days notice.',
    },
    {
      q: 'Can I bring a training partner?',
      a: 'Pulse Pro and VIP memberships include complimentary guest passes every month. Trial pass holders can also bring a friend for their first workout!',
    },
  ];

  return (
    <div className="py-16 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-black uppercase text-brand-neonLime tracking-widest">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white">
            CONTACT & FREE TRIAL
          </h1>
          <p className="text-gray-400 text-base">
            Claim your 7-day complimentary pass or send a message to our support team.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <div className="glass-card p-8 rounded-3xl border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6 uppercase">
              Claim 7-Day Free Pass
            </h3>
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
                  placeholder="Alex Mercer"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-brand-neonLime text-sm font-bold"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-400 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="alex@domain.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-brand-neonLime text-sm font-bold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-400 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="(555) 000-1234"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-brand-neonLime text-sm font-bold"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-gray-400 mb-1">
                  Message / Note
                </label>
                <textarea
                  rows="3"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell us about your fitness targets..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-brand-neonLime text-sm font-bold"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-brand-neonLime text-black font-extrabold uppercase text-xs tracking-wider hover:bg-white transition-all shadow-neon-lime"
              >
                Activate 7-Day Trial Pass
              </button>
            </form>
          </div>

          {/* Location Info & FAQ Accordion */}
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-3xl space-y-4 border border-white/10">
              <h3 className="text-xl font-bold text-white uppercase">
                Location & Operating Hours
              </h3>
              <div className="space-y-3 text-xs text-gray-300">
                <p className="flex items-center">
                  <i className="fa-solid fa-location-dot text-brand-neonLime mr-3 text-base"></i>
                  742 Performance Way, Metro Fitness District
                </p>
                <p className="flex items-center">
                  <i className="fa-solid fa-phone text-brand-neonCyan mr-3 text-base"></i>
                  +1 (800) 555-PULSE
                </p>
                <p className="flex items-center">
                  <i className="fa-solid fa-clock text-brand-neonLime mr-3 text-base"></i>
                  Open 24/7 For All Members (Staffed 6am - 10pm)
                </p>
              </div>
            </div>

            {/* FAQ Accordion */}
            <div className="glass-card p-8 rounded-3xl space-y-4 border border-white/10">
              <h3 className="text-xl font-bold text-white uppercase mb-4">
                Frequently Asked Questions
              </h3>

              <div className="space-y-3">
                {faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="border-b border-white/10 pb-3 last:border-b-0 cursor-pointer"
                    onClick={() => toggleFaq(idx)}
                  >
                    <div className="flex items-center justify-between text-sm font-bold text-white hover:text-brand-neonLime transition-colors py-1">
                      <span>{faq.q}</span>
                      <i
                        className={`fa-solid ${
                          activeFaq === idx ? 'fa-chevron-up text-brand-neonLime' : 'fa-chevron-down text-gray-400'
                        } text-xs ml-2 transition-transform`}
                      ></i>
                    </div>
                    {activeFaq === idx && (
                      <p className="text-xs text-gray-400 mt-2 leading-relaxed animate-fade-in">
                        {faq.a}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
