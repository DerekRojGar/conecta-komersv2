import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CompleteProfile = () => {
  const [formData, setFormData] = useState({
    apellidos: '',
    telefono: '',
  });

  const navigate = useNavigate();

  const { apellidos, telefono } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/auth/complete-profile', {
        userId: 'ID_DEL_USUARIO_ACTUAL', // Reemplaza con el ID del usuario actual
        apellidos,
        telefono,
      });

      if (res.data) {
        alert('Perfil completado exitosamente');
        navigate('/');
      } else {
        alert('Error al completar el perfil');
      }
    } catch (err) {
      console.error('Error al completar el perfil:', err);
      alert('Error al completar el perfil');
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>Completa tu perfil</h1>
      <div>
        <label>Apellidos</label>
        <input type="text" name="apellidos" value={apellidos} onChange={onChange} required />
      </div>
      <div>
        <label>Número telefónico</label>
        <input type="tel" name="telefono" value={telefono} onChange={onChange} required />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default CompleteProfile;
