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
    contrasena: '',
    confirmarContrasena:'',
    telefono: '',
    tipoTrabajo: [],
    //tipoUsuario: 'Trabajador'  // Define el tipo de usuario como 'trabajador'
  });

  const { nombre, apellidos, correo, contrasena, confirmarContrasena,telefono, tipoTrabajo } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onCheckboxChange = e => {
    const { value, checked } = e.target;
    setFormData(prevState => {
      if (checked) {
        // Add the checked value to the array
        return { ...prevState, tipoTrabajo: [...prevState.tipoTrabajo, value] };
      } else {
        // Remove the unchecked value from the array
        return { ...prevState, tipoTrabajo: prevState.tipoTrabajo.filter(tipo => tipo !== value) };
      }
    });
  };

  const onSubmit = async e => {
    e.preventDefault();

    if (contrasena !== confirmarContrasena) {
      alert('Las contraseñas no coinciden');
      return;
    }
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', formData);
      console.log('Usuario registrado exitosamente:', res.data);
    } catch (err) {
      console.error('Error en el registro:', err.response.data);
    }
  };

  return (
    <form onSubmit={onSubmit} className="register-worker-form">
      <h2>Registro de trabajador</h2>
      <input type="text" name="nombre" placeholder="Nombre" value={nombre} onChange={onChange} required />
      <input type="text" name="apellidos" placeholder="Apellidos" value={apellidos} onChange={onChange} required />
      <input type="email" name="correo" placeholder="Correo electrónico" value={correo} onChange={onChange} required />
      <input type="password" name="contrasena" placeholder="Contraseña" value={contrasena} onChange={onChange} required />
      <input type="password" name="confirmarContrasena" placeholder="Confirmar Contraseña" value={confirmarContrasena} onChange={onChange} required />
      <input type="text" name="telefono" placeholder="Número telefónico" value={telefono} onChange={onChange} required />
      {/* <input type="file" name="ine" onChange={handleFileChange} required />
      <input type="file" name="antecedentes" onChange={handleFileChange} required />
      <input type="file" name="responsiva" onChange={handleFileChange} required /> */}
      <h2>¿Qué tipo de trabajo realizas?</h2>
      <label>Tipo de Trabajo:</label>
        <label>
          <input
            type="checkbox"
            name="tipoTrabajo"
            value="herreria"
            checked={tipoTrabajo.includes('herreria')}
            onChange={onCheckboxChange}
          />
          Herrería
        </label>
        <label>
          <input
            type="checkbox"
            name="tipoTrabajo"
            value="plomeria"
            checked={tipoTrabajo.includes('plomeria')}
            onChange={onCheckboxChange}
          />
          Plomería
        </label>
        <label>
          <input
            type="checkbox"
            name="tipoTrabajo"
            value="carpinteria"
            checked={tipoTrabajo.includes('carpinteria')}
            onChange={onCheckboxChange}
          />
          Carpintería
        </label>
        <label>
          <input
            type="checkbox"
            name="tipoTrabajo"
            value="albanileria"
            checked={tipoTrabajo.includes('albanileria')}
            onChange={onCheckboxChange}
          />
          Albañilería
        </label>      
      {/* <select name="tipoTrabajo" value={formData.tipoTrabajo} onChange={handleChange} required>
        <option value="">¿Qué tipo de trabajo realizas?</option>
        <option value="Carpintero">Ploemeero 2</option>
        <option value="Plomero">Plomero</option>
        <option value="Herrero">Herrero</option>
        <option value="Jardinero">Jardinero</option>
      </select> */}
      <button type="submit">Registrarme ahora</button>
      <Link to="/"><button >Volver a la pagina principal</button></Link>
    </form>
    
  );
};

export default RegisterTrabajador;