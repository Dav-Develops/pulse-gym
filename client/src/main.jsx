import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AppProvider from './app/provider';
import AuthInitializer from './components/common/AuthInitializer';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <AuthInitializer>
        <App />
      </AuthInitializer>
    </AppProvider>
  </React.StrictMode>
);
