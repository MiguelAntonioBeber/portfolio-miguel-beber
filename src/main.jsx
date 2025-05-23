import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import HomePage from './pages/HomePage.jsx';
import ContatoPage from './pages/ContatoPage.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contato" element={<ContatoPage />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
);
