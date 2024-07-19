import React from 'react';
import '../styles/Iniciopage.css';
import lg1 from '../pictures/lg1.png';
import target from '../pictures/target.png';
import gears from '../pictures/gear.png';
import {Link } from 'react-router-dom';


const Inicopage = () => {
    return (
        <>
            <header className="header">
                <div className="logo-container">
                    <img src={lg1} alt="Logo" className="logo-componentes" />
                    <Link to="/home-page"><div className="logo">CONECTA KOMERS</div></Link>
                </div>
                <nav>
                    <ul>
                        <li><a href="inicio-page">INICIO</a></li>
                        <li><a href="servicios-page">SERVICIOS</a></li>
                        <li><a href="contacto-page">CONTACTO</a></li>
                    </ul>
                </nav>
                <div className="auth-buttons">
                    <button className="login-button">INICIAR SESIÓN</button>
                    <Link to="/register-client"><button className="register-button">REGISTRO</button></Link>
                </div>
            </header>
            <main className="">
                <div className="details-container">
                    <section className="details">
                        <div className="logo-container">
                            <img src={target} alt="Logo" className="logo-componentes" />
                            <h2>Objetivo del Sitio</h2>
                        </div>
                        <p>
                            Conecta Komers tiene como objetivo conectar a usuarios que requieren servicios específicos con trabajadores calificados y
                            confiables. Nuestra misión es optimizar el proceso de búsqueda y contratación de servicios, ahorrando tiempo y esfuerzo a ambas partes.
                        </p>
                        <ol>
                            <li value="1">Promover la eficiencia: Optimizar el proceso de búsqueda y contratación de
                                servicios de oficios, ahorrando tiempo y esfuerzo tanto a los usuarios como a los trabajadores.</li>
                            <br></br>
                            <li value="2">Promover la diversidad de oficios: Incluir una amplia gama de categorías de oficios, desde plomería y carpintería
                                hasta jardinería y limpieza, para satisfacer las diversas necesidades de los usuarios.</li>
                        </ol>
                        <h2>Funcionalidades</h2>
                        <ul>
                            <li>Búsqueda avanzada de trabajadores por oficio y ubicación</li>
                            <li>Perfil detallado de los trabajadores con calificaciones y reseñas</li>
                            <li>Comunicación directa entre usuarios y trabajadores</li>
                            <li>Registro y acceso sencillo para usuarios y trabajadores</li>
                        </ul>
                        <h2>Beneficios</h2>
                        <ul>
                            <li>Acceso a una amplia gama de servicios de oficio</li>
                            <li>Plataforma segura y confiable</li>
                            <li>Proceso de contratación rápido y eficiente</li>
                        </ul>
                    </section>
                    <section className="imagen-gears">
                        <div className="gears-image">
                            <img src={gears} alt="Main" />
                        </div>
                    </section>
                </div>
            </main>
            <footer>
        <img src={lg1} alt="Logo" className="logo-componentes" />
            <h1>Conecta-KomersⓇ</h1>
            <p>Copyright 2024 por Equipo Perrón. Todos los derechos reservados.</p>
          </footer>
          <footer className='f1'>
            <p>Conecta-KomersⓇ</p>
            <p>Conecta-Komers está optimizado para la comunicación y la formación. Los usuarios son ajenos al sitio, somos el medio de contacto y contratacion.
Al utilizar Conecta-Komers, usted acepta haber leído y aceptado nuestros <Link to="/term-y-serv">términos de uso, política y privacidad.</Link></p>
          </footer>
        </>
    );
}

export default Inicopage;