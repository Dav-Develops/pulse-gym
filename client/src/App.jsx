import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import PageFooter from './components/layout/PageFooter';
import AppRoutes from './routes/AppRoutes';
import BookingModal from './components/common/BookingModal';
import TrainerModal from './components/common/TrainerModal';
import Toast from './components/common/Toast';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col justify-between bg-[#08080a] text-gray-100 selection:bg-brand-neonLime selection:text-black">
        {/* Navigation Header */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow pt-20">
          <AppRoutes />
        </main>

        {/* Global Page Footer */}
        <PageFooter />

        {/* Interactive Modals */}
        <BookingModal />
        <TrainerModal />

        {/* Action Feedback Toast */}
        <Toast />
      </div>
    </BrowserRouter>
  );
}

export default App;
