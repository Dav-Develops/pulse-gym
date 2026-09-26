import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAppDispatch, { useAppSelector } from '../../hooks/useAppDispatch';
import { setBillingCycle, showToast } from '../../redux/slices/uiSlice';

function Membership() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const billing = useAppSelector((state) => state.ui.billingCycle);

  const isAnnual = billing === 'annual';

  const handleSelectTier = (tierName) => {
    dispatch(showToast(`Selected ${tierName}! Redirecting to trial activation...`));
    setTimeout(() => {
      navigate('/contact');
    }, 1200);
  };

  const tiers = [
    {
      name: 'BASIC ACCESS',
      subtitle: 'Standard',
      tagColor: 'text-gray-400',
      price: isAnnual ? '$39' : '$49',
      features: [
        { text: 'Gym Floor & Weights Access', included: true },
        { text: 'Locker Room & Showers', included: true },
        { text: 'Group Fitness Classes', included: false },
        { text: 'Recovery Lounge Spa Pass', included: false },
      ],
      btnText: 'Select Plan',
      btnStyle:
        'bg-white/10 text-white hover:bg-white hover:text-black',
      popular: false,
    },
    {
      name: 'PULSE PRO',
      subtitle: 'Full Access',
      tagColor: 'text-brand-neonLime',
      price: isAnnual ? '$69' : '$89',
      features: [
        { text: 'Unlimited Floor & Weights Access', included: true },
        { text: 'Unlimited Group Fitness Classes', included: true },
        { text: 'Cold Plunge & Sauna Access', included: true },
        { text: '2 Guest Passes / Month', included: true },
      ],
      btnText: 'Select Pro Tier',
      btnStyle: 'bg-brand-neonLime text-black hover:bg-white shadow-neon-lime',
      popular: true,
    },
    {
      name: 'ULTIMATE VIP',
      subtitle: 'VIP Level',
      tagColor: 'text-brand-neonCyan',
      price: isAnnual ? '$119' : '$149',
      features: [
        { text: 'All Pro Tier Benefits', included: true },
        { text: '2x Personal Coaching Sessions', included: true },
        { text: 'Unlimited Recovery Spa Suite', included: true },
        { text: 'Permanent Private Locker', included: true },
      ],
      btnText: 'Select VIP Tier',
      btnStyle:
        'bg-white/10 text-white hover:bg-brand-neonCyan hover:text-black',
      popular: false,
    },
  ];

  return (
    <div className="py-16 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-black uppercase text-brand-neonLime tracking-widest">
            Membership Tiers
          </span>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white">
            CHOOSE YOUR ACCESS
          </h1>
          <p className="text-gray-400 text-base">
            Select the plan that matches your training frequency and recovery needs.
          </p>

          {/* Billing Toggle */}
          <div className="pt-6 inline-flex items-center p-1.5 rounded-full glass-card border border-white/10">
            <button
              onClick={() => dispatch(setBillingCycle('monthly'))}
              className={`px-6 py-2 rounded-full text-xs font-extrabold uppercase transition-all ${
                !isAnnual
                  ? 'bg-brand-neonLime text-black shadow-neon-lime'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => dispatch(setBillingCycle('annual'))}
              className={`px-6 py-2 rounded-full text-xs font-extrabold uppercase transition-all flex items-center gap-2 ${
                isAnnual
                  ? 'bg-brand-neonLime text-black shadow-neon-lime'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Annual{' '}
              <span className="bg-brand-neonCyan/20 text-brand-neonCyan text-[10px] px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Tiers Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`glass-card p-8 rounded-3xl flex flex-col justify-between relative ${
                tier.popular
                  ? 'border-2 border-brand-neonLime shadow-neon-lime'
                  : 'border border-white/10'
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-neonLime text-black font-black text-[10px] uppercase tracking-widest px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <div>
                <span
                  className={`text-xs font-black uppercase tracking-wider ${tier.tagColor}`}
                >
                  {tier.subtitle}
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">{tier.name}</h3>
                <div className="my-6">
                  <span className="text-5xl font-black text-white">{tier.price}</span>
                  <span className="text-gray-400 text-xs font-bold"> / month</span>
                </div>
                <ul className="space-y-4 text-xs text-gray-300 border-t border-white/10 pt-6">
                  {tier.features.map((feat, idx) => (
                    <li
                      key={idx}
                      className={`flex items-center gap-3 ${
                        feat.included ? 'text-gray-300' : 'text-gray-500'
                      }`}
                    >
                      {feat.included ? (
                        <i className="fa-solid fa-check text-brand-neonLime"></i>
                      ) : (
                        <i className="fa-solid fa-xmark"></i>
                      )}
                      <span>{feat.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => handleSelectTier(tier.name)}
                className={`mt-8 w-full py-3.5 rounded-xl font-extrabold text-xs uppercase tracking-wider transition-all ${tier.btnStyle}`}
              >
                {tier.btnText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Membership;
