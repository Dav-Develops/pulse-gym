import React, { useEffect } from 'react';
import useAppDispatch, { useAppSelector } from '../../hooks/useAppDispatch';
import { hideToast } from '../../redux/slices/uiSlice';

function Toast() {
  const dispatch = useAppDispatch();
  const { isOpen, message } = useAppSelector((state) => state.ui.toast);

  useEffect(() => {
    if (!isOpen) return;
    const timer = setTimeout(() => {
      dispatch(hideToast());
    }, 3500);
    return () => clearTimeout(timer);
  }, [isOpen, dispatch]);

  if (!isOpen) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 right-6 z-50 glass-card border border-brand-neonLime text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 animate-fade-in"
    >
      <i className="fa-solid fa-circle-check text-brand-neonLime text-lg"></i>
      <span className="text-xs font-bold">{message}</span>
      <button
        onClick={() => dispatch(hideToast())}
        className="ml-3 text-gray-400 hover:text-white"
        aria-label="Close notification"
      >
        <i className="fa-solid fa-xmark text-sm"></i>
      </button>
    </div>
  );
}

export default Toast;
