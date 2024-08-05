import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import '../styles/Dashboard.css'; // Asegúrate de tener este archivo CSS

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('inicio');

  const handleLogout = () => {
    // Aquí podrías añadir lógica para cerrar sesión
    navigate('/newhome');
  };

  return (
    <div className="dashboard">
      <div className="sidebar">
        <h2>Dashboard</h2>
        <ul>
          <li className={activeTab === 'inicio' ? 'active' : ''} onClick={() => setActiveTab('inicio')}>
            <Link to="/dashboard/inicio">Inicio</Link>
          </li>
          <li className={activeTab === 'reportes' ? 'active' : ''} onClick={() => setActiveTab('reportes')}>
            <Link to="/dashboard/reportes">Reportes</Link>
          </li>
          <li className={activeTab === 'configuracion' ? 'active' : ''} onClick={() => setActiveTab('configuracion')}>
            <Link to="/dashboard/configuracion">Configuración</Link>
          </li>
          <li onClick={handleLogout}>
            <button className="btn-yellow">Cerrar sesión</button>
          </li>
        </ul>
      </div>
      <div className="content">
        <Routes>
          <Route path="inicio" element={<Inicio />} />
          <Route path="reportes" element={<Reportes />} />
          <Route path="configuracion" element={<Configuracion />} />
        </Routes>
      </div>
    </div>
  );
};

const Inicio = () => (
  <div className="section">
    <h2>Resumen de Cuenta</h2>
    {/* Aquí puedes añadir detalles del trabajador */}
    <p>Nombre: Juan Pérez</p>
    <p>Correo: juan.perez@example.com</p>
    <p>Teléfono: +1234567890</p>
  </div>
);

const Reportes = () => (
  <div className="section">
    <h2>Reportes</h2>
    {/* Aquí puedes añadir una tabla con los reportes */}
    <table>
      <thead>
        <tr>
          <th>Solicitud</th>
          <th>Estado</th>
          <th>Fecha</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Solicitud 1</td>
          <td>En proceso</td>
          <td>01/08/2024</td>
        </tr>
        {/* Más filas */}
      </tbody>
    </table>
  </div>
);

const Configuracion = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    telefono: ''
  });

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    // Aquí puedes añadir la lógica para actualizar los datos del trabajador
    alert('Datos actualizados');
  };

  return (
    <div className="section">
      <h2>Configuración</h2>
      <form onSubmit={onSubmit}>
        <label>Nombre</label>
        <input type="text" name="nombre" value={formData.nombre} onChange={onChange} />
        
        <label>Apellidos</label>
        <input type="text" name="apellidos" value={formData.apellidos} onChange={onChange} />
        
        <label>Teléfono</label>
        <input type="text" name="telefono" value={formData.telefono} onChange={onChange} />
        
        <button type="submit" className="btn-yellow">Confirmar</button>
      </form>
    </div>
  );
};

export default Dashboard;
