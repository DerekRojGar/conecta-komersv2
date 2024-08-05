import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import googleIcon from '../pictures/google-icon.png'; // Asegúrate de tener el ícono de Google descargado
import '../styles/Login.css'; // Asegúrate de crear este archivo para los estilos

const Login = () => {
    const [formData, setFormData] = useState({
        correo: '',
        contrasena: ''
    });

    const navigate = useNavigate();

    const { correo, contrasena } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();

        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', {
                correo,
                contrasena
            });

            if (res.data.token) {
                console.log('Usuario autenticado:', res.data);
                alert('Inicio de sesión exitoso');

                // Guarda el token en el almacenamiento local
                localStorage.setItem('token', res.data.token);

                const { tipoUsuario } = res.data;

                if (tipoUsuario === 'Cliente') {
                    navigate('/map'); // Redirige al mapa para clientes
                } else if (tipoUsuario === 'Trabajador') {
                    navigate('/dashboard'); // Redirige al dashboard para trabajadores
                }
            } else {
                console.error('Error en el inicio de sesión:', res);
                alert('Error en el inicio de sesión');
            }
        } catch (err) {
            console.error('Error en el inicio de sesión:', err);
            alert('Error en el inicio de sesión');
        }
    };

    const onGoogleLogin = () => {
        window.location.href = 'http://localhost:5000/api/auth/google';
    };

    return (
        <div className="login-container">
            <form onSubmit={onSubmit} className="login-form">
                <h1>Iniciar sesión</h1>
                <div className="form-outline mb-4">
                    <input
                        type="email"
                        id="form2Example1"
                        name="correo"
                        className="form-control"
                        value={correo}
                        onChange={onChange}
                        placeholder="Correo electrónico"
                    />
                    <label className="form-label" htmlFor="form2Example1"></label>
                </div>

                <div className="form-outline mb-4">
                    <input
                        type="password"
                        id="form2Example2"
                        name="contrasena"
                        className="form-control"
                        value={contrasena}
                        onChange={onChange}
                        placeholder="Contraseña"
                    />
                    <label className="form-label" htmlFor="form2Example2"></label>
                </div>

                <div className="form-check mb-4">
                    <input className="form-check-input" type="checkbox" id="form2Example31" />
                    <label className="form-check-label" htmlFor="form2Example31"> Recordar </label>
                </div>

                <button type="submit" className="btn btn-primary btn-block mb-4">Iniciar sesión</button>

                <button type="button" className="google-login-button" onClick={onGoogleLogin}>
                    <img src={googleIcon} alt="Google icon" className="google-icon" />
                    Iniciar sesión con Google
                </button>

                <div className="text-center">
                    <p>¿Aún no es cliente? <a href="/register-client">Registrarse</a></p>
                </div>
            </form>
        </div>
    );
};

export default Login;
