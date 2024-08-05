// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../src/styles/index.css';
import RegisterClient from './components/RegisterClient';
import RegisterTrabajador from './components/RegisterTrabajador';
import MapComponent from './components/MapComponent';
import Homepage from './components/Homepage';
import Inicopage from './components/Iniciopage';
import Contactopage from './components/Contactopage';
import Serviciospage from './components/Serviciospage';
import TyC from './components/TyC';
import Bienvenida from './components/Bienvenida';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import NewHome from './components/NewHome';
import { AuthProvider } from './contexts/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Router>
    <AuthProvider>
      <Routes>
        <Route path="/home-page" element={<Homepage />} />
        <Route path="/register-client" element={<RegisterClient />} />
        <Route path="/register-trabajador" element={<RegisterTrabajador />} />
        <Route path="/map" element={<MapComponent />} />
        {/* <Route path="/" element={<RegisterClient />} /> */}
        <Route path="/inicio-page" element={<Inicopage />} />
        <Route path="/contacto-page" element={<Contactopage />} />
        <Route path="/servicios-page" element={<Serviciospage />} />
        <Route path="/term-y-serv" element={<TyC />} />
        <Route path="/bienvenida" element={<Bienvenida />} />
        <Route path="/newhome" element={<NewHome />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<NewHome />} />
      </Routes>
    </AuthProvider>
  </Router>
);