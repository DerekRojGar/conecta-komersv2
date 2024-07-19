import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/bienvenida.css';
import icon from '../pictures/icono-client.png';



const Bienvenida = () => {
    const location = useLocation();
    const { nombre } = location.state || { nombre: 'Usuario' }; // Valor por defecto 'Usuario'

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