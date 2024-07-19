import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../src/styles/index.css';
import RegisterClient from './components/RegisterClient';
import RegisterTrabajador from './components/RegisterTrabajador';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Router>
    <Routes>
      <Route path="/register-client" element={<RegisterClient />} />
      <Route path="/register-trabajador" element={<RegisterTrabajador />} />
      <Route path="/" element={<RegisterClient />} />
      
      
    </Routes>
  </Router>
);

