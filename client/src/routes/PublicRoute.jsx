import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../hooks/useAppDispatch';

function PublicRoute({ children }) {
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}

export default PublicRoute;
