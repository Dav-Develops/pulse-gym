import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../hooks/useAppDispatch';

function ProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useAppSelector((state) => state.auth);

  if (loading) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center text-brand-neonLime font-bold text-sm">
        Authenticating...
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}

export default ProtectedRoute;
