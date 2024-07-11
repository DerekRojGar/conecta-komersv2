import React, { useState } from 'react';
import axios from 'axios';
import '../styles/RegisterClient.css';
import { useNavigate, Link } from 'react-router-dom';

const RegisterCliente = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellidos: '',
        correo: '',
        contraseña: '',
        confirmarContraseña: '',
        telefono: ''
    });

    const navigate  = useNavigate();

    const { nombre, apellidos, correo, contraseña, confirmarContraseña, telefono } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();

        if (contraseña !== confirmarContraseña) {
            alert('Las contraseñas no coinciden');
            return;
        }

        try {
            const res = await axios.post('http://localhost:5000/api/auth/register', {
                nombre,
                apellidos,
                correo,
                contraseña,
                telefono,
                tipoUsuario: 'cliente'
            });

            if (res.data) {
                console.log('Usuario registrado:', res.data);
                alert('Usuario registrado exitosamente');
                // Redirigir al inicio de sesión o a la página principal después del registro
                navigate('/login');
            } else {
                console.error('Error en el registro:', res);
                alert('Error en el registro');
            }
        } catch (err) {
            console.error('Error en el registro:', err);
            alert('Error en el registro');
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <h1>Registro de usuario</h1>
            <div>
                <label>Nombre</label>
                <input type="text" name="nombre" value={nombre} onChange={onChange} required />
            </div>
            <div>
                <label>Apellidos</label>
                <input type="text" name="apellidos" value={apellidos} onChange={onChange} required />
            </div>
            <div>
                <label>Correo electrónico</label>
                <input type="email" name="correo" value={correo} onChange={onChange} required />
            </div>
            <div>
                <label>Contraseña</label>
                <input type="password" name="contraseña" value={contraseña} onChange={onChange} required />
            </div>
            <div>
                <label>Confirmar contraseña</label>
                <input type="password" name="confirmarContraseña" value={confirmarContraseña} onChange={onChange} required />
            </div>
            <div>
                <label>Número telefónico</label>
                <input type="tel" name="telefono" value={telefono} onChange={onChange} required />
            </div>
            <button type="submit">REGISTRARME AHORA</button>
            <div className="text-link">
                <span>¿Eres un trabajador? </span>
                <Link to="/register-trabajador">REGISTRO PARA TRABAJADOR</Link>
            </div>
        </form>
    );
};

export default RegisterCliente;
