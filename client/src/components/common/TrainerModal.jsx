import React from 'react';
import useAppDispatch, { useAppSelector } from '../../hooks/useAppDispatch';
import { closeTrainerModal } from '../../redux/slices/uiSlice';

function TrainerModal() {
  const dispatch = useAppDispatch();
  const { isOpen, name, role, bio } = useAppSelector(
    (state) => state.ui.trainerModal
  );

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={() => dispatch(closeTrainerModal())}
    >
      <div
        className="glass-card p-8 rounded-3xl max-w-md w-full relative border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => dispatch(closeTrainerModal())}
          className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <i className="fa-solid fa-xmark text-xl"></i>
        </button>

        <h3 className="text-2xl font-black text-white">{name}</h3>
        <span className="text-xs font-bold text-brand-neonLime uppercase tracking-wider block mt-1">
          {role}
        </span>
        <div className="w-12 h-1 bg-brand-neonLime my-4 rounded-full"></div>
        <p className="text-xs text-gray-300 leading-relaxed mt-4">{bio}</p>
        
        <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={() => dispatch(closeTrainerModal())}
            className="px-5 py-2 rounded-xl bg-white/10 text-white font-bold text-xs uppercase hover:bg-white/20 transition-all"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default TrainerModal;
