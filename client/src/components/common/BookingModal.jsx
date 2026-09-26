import React, { useState } from 'react';
import useAppDispatch, { useAppSelector } from '../../hooks/useAppDispatch';
import { closeBookingModal, showToast } from '../../redux/slices/uiSlice';
import authAPI from '../../features/auth/authAPI';

function BookingModal() {
  const dispatch = useAppDispatch();
  const { isOpen, classTitle, classTime } = useAppSelector(
    (state) => state.ui.bookingModal
  );
  const user = useAppSelector((state) => state.auth.user);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    await authAPI.bookClass({
      name: name || user?.name || 'Athlete',
      email: email || user?.email,
      classTitle,
      classTime,
    });
    dispatch(closeBookingModal());
    dispatch(showToast(`Class seat reserved for ${classTitle}!`));
    setName('');
    setEmail('');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={() => dispatch(closeBookingModal())}
    >
      <div
        className="glass-card p-8 rounded-3xl max-w-md w-full relative border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => dispatch(closeBookingModal())}
          className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <i className="fa-solid fa-xmark text-xl"></i>
        </button>

        <span className="text-xs font-black uppercase text-brand-neonLime tracking-widest">
          Reserve Class Seat
        </span>
        <h3 className="text-2xl font-black text-white mt-1">{classTitle}</h3>
        <p className="text-xs text-brand-neonCyan font-bold mt-1 mb-6">
          <i className="fa-regular fa-clock mr-1.5"></i>
          {classTime}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase text-gray-400 mb-1">
              Your Full Name
            </label>
            <input
              type="text"
              required
              defaultValue={user?.name || ''}
              value={name || user?.name || ''}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-bold focus:border-brand-neonLime"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase text-gray-400 mb-1">
              Email Address
            </label>
            <input
              type="email"
              required
              defaultValue={user?.email || ''}
              value={email || user?.email || ''}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@example.com"
              className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-bold focus:border-brand-neonLime"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3.5 rounded-xl bg-brand-neonLime text-black font-extrabold uppercase text-xs tracking-wider hover:bg-white transition-all mt-2 shadow-neon-lime"
          >
            Confirm Seat Booking
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookingModal;
