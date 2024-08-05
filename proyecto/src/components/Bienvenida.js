// src/components/Bienvenida.js

import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/bienvenida.css';
import icon from '../pictures/icono-client.png';

const Bienvenida = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const params = new URLSearchParams(location.search);
    const nombre = params.get('nombre') || 'Usuario'; // Obtener el nombre de la URL o usar 'Usuario' por defecto

    useEffect(() => {
        // Redireccionar después de 3 segundos
        const timer = setTimeout(() => {
            navigate('/map'); // Redirige a Homepage
        }, 3000);

        // Limpiar el temporizador si el componente se desmonta
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="bienvenida-container">
            <div className="contenido">
                <img src={icon} alt="Icono" className="icono" />
                <h1>Bienvenido</h1>
                <p>Los servicios que buscas a tu alcance</p>
                <p className="nombre-usuario">{nombre}</p>
            </div>
        </div>
    );
};

export default Bienvenida;
