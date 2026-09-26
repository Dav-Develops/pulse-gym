import React, { useEffect } from 'react';
import useAppDispatch from '../../hooks/useAppDispatch';
import { authSuccess } from '../../features/auth/authSlice';

function AuthInitializer({ children }) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    try {
      const token = localStorage.getItem('pulse_token');
      const userStr = localStorage.getItem('pulse_user');
      if (token && userStr) {
        const user = JSON.parse(userStr);
        dispatch(authSuccess({ user, token }));
      }
    } catch {
      localStorage.removeItem('pulse_token');
      localStorage.removeItem('pulse_user');
    }
  }, [dispatch]);

  return <>{children}</>;
}

export default AuthInitializer;
