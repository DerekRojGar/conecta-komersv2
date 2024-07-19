// src/components/RegisterWorker.js
import React, { useState } from 'react';
import axios from 'axios';
import '../styles/RegisterTrabajador.css';
import {Link } from 'react-router-dom';

const RegisterTrabajador = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    correo: '',
    contraseña: '',
    confirmarContraseña: '',
    telefono: '',
    tipoTrabajo: '',
    ine: null,
    antecedentes: null,
    responsiva: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.contraseña !== formData.confirmarContraseña) {
      alert('Las contraseñas no coinciden');
      return;
    }

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      const response = await axios.post('/api/auth/register', data);
      alert(response.data.message);
    } catch (error) {
      console.error(error);
      alert('Error en el registro');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="register-worker-form">
      <h2>Registro de trabajador</h2>
      <input type="text" name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} required />
      <input type="text" name="apellidos" placeholder="Apellidos" value={formData.apellidos} onChange={handleChange} required />
      <input type="email" name="correo" placeholder="Correo electrónico" value={formData.correo} onChange={handleChange} required />
      <input type="password" name="contraseña" placeholder="Contraseña" value={formData.contraseña} onChange={handleChange} required />
      <input type="password" name="confirmarContraseña" placeholder="Confirmar Contraseña" value={formData.confirmarContraseña} onChange={handleChange} required />
      <input type="text" name="telefono" placeholder="Número telefónico" value={formData.telefono} onChange={handleChange} required />
      <input type="file" name="ine" onChange={handleFileChange} required />
      <input type="file" name="antecedentes" onChange={handleFileChange} required />
      <input type="file" name="responsiva" onChange={handleFileChange} required />
      <select name="tipoTrabajo" value={formData.tipoTrabajo} onChange={handleChange} required>
        <option value="">¿Qué tipo de trabajo realizas?</option>
        <option value="Carpintero">Ploemeero 2</option>
        <option value="Plomero">Plomero</option>
        <option value="Herrero">Herrero</option>
        <option value="Jardinero">Jardinero</option>
      </select>
      <button type="submit">Registrarme ahora</button>
      <Link to="/home-page"><button >Volver a la pagina principal</button></Link>
    </form>
    
  );
};

export default RegisterTrabajador;
