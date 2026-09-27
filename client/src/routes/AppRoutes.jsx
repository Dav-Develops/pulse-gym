import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Classes from '../pages/Classes/Classes';
import Schedule from '../pages/Schedule/Schedule';
import Membership from '../pages/Membership/Membership';
import Contact from '../pages/Contact/Contact';
import Login from '../pages/Authentication/Login';
import Register from '../pages/Authentication/Register';
import PublicRoute from './PublicRoute';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        {/* Catch-all redirect */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
