import React, { useState } from 'react';
import axios from 'axios';
import '../styles/RegisterClient.css';
import { useNavigate, Link } from 'react-router-dom';
import googleIcon from '../pictures/google-icon.png'; // Asegúrate de tener el ícono de Google descargado

const RegisterCliente = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellidos: '',
        correo: '',
        contrasena: '',
        confirmarContraseña: '',
        telefono: ''
    });

    const navigate  = useNavigate();

    const { nombre, apellidos, correo, contrasena, confirmarContraseña, telefono } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();

        if (contrasena !== confirmarContraseña) {
            alert('Las contraseñas no coinciden');
            return;
        }

        try {
            const res = await axios.post('http://localhost:5000/api/auth/register', {
                nombre,
                apellidos,
                correo,
                contrasena,
                telefono,
                tipoUsuario: 'cliente'
            });

            if (res.data) {
                console.log('Usuario registrado:', res.data);
                alert('Usuario registrado exitosamente');
                navigate('/bienvenida', {state: {nombre}});
            } else {
                console.error('Error en el registro:', res);
                alert('Error en el registro');
            }
        } catch (err) {
            console.error('Error en el registro:', err);
            alert('Error en el registro');
        }
    };

    const onGoogleLogin = () => {
        window.location.href = 'http://localhost:5000/api/auth/google';
    };


    return (
        <form onSubmit={onSubmit} className="register-client-form">
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
                <input type="password" name="contrasena" value={contrasena} onChange={onChange} required />
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
            <button type="button" className="google-login-button" onClick={onGoogleLogin}>
                <img src={googleIcon} alt="Google icon" />
                Iniciar sesión con Google
            </button>
            <div className="text-link">
                <span>¿Eres un trabajador? </span>
                <Link to="/register-trabajador">REGISTRO PARA TRABAJADOR</Link>
            </div>
            <br></br>
            <Link to="/home-page"><button >Volver a la pagina principal</button></Link>
        </form>
    );
};

export default RegisterCliente;
