import React from 'react';
import ReactDOM from 'react-dom/client';
import './app.scss';
import App from './App';
import { CustomContextProvider } from '@/Provider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CustomContextProvider>
      <App />
    </CustomContextProvider>
  </React.StrictMode>
);
