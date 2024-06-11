import '@/assets/css/style.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Application from './components/application';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>
);

reportWebVitals();
