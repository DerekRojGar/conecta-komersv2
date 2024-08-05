// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterClient from './components/RegisterClient';
import RegisterTrabajador from './components/RegisterTrabajador';
import CompleteProfile from './components/CompleteProfile';
import MapComponent from './components/MapComponent';
import Homepage from './components/Homepage';
import Inicopage from './components/Iniciopage';
import Contactopage from './components/Contactopage';
import Serviciospage from './components/Serviciospage';
import TyC from './components/TyC';
import Bienvenida from './components/Bienvenida';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import NewHome from './components/NewHome';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { AuthProvider } from './contexts/AuthContext';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/register-client" element={<RegisterClient />} />
          <Route path="/register-trabajador" element={<RegisterTrabajador />} />
          <Route path="/complete-profile" element={<CompleteProfile />} />
          <Route path="/map" element={<MapComponent />} />
          <Route path="/inicio-page" element={<Inicopage />} />
          <Route path="/contacto-page" element={<Contactopage />} />
          <Route path="/servicios-page" element={<Serviciospage />} />
          <Route path="/term-y-serv" element={<TyC />} />
          <Route path="/home-page" element={<Homepage />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/newhome" element={<NewHome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<NewHome />} />
          <Route path="/bienvenida" element={
            <ProtectedRoute>
              <Bienvenida />
            </ProtectedRoute>
          } />
          <Route path="/protected-route-example" element={
            <ProtectedRoute>
              <SomeProtectedComponent />
            </ProtectedRoute>
          } />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;