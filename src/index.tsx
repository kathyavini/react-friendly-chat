import React from 'react';
import ReactDOM from 'react-dom/client';

import { HashRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import { Safe } from './components/Safe';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/safety" element={<Safe />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
