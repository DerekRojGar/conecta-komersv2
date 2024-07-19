import React from 'react';
import lg1 from '../pictures/lg1.png';
import pay from '../pictures/pay.png'
import profile from '../pictures/profile.png'
import security from '../pictures/security.png'
import '../styles/Serviciospage.css';
import service from '../pictures/service.png'
import {Link } from 'react-router-dom';

const Serviciospage = () => {
    return (
        <><header className="header">
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
        <section className="services">
            <div className="logo-container">
                <img src={service} alt="Logo" className="logo-componentes" />
                <h2>Nuestros Servicios</h2>
            </div>
                <p>Conecta Komers ofrece una amplia gama de servicios para satisfacer las diversas necesidades de nuestros usuarios. Todos nuestros trabajadores son calificados y confiables, garantizando un servicio de calidad en todo momento.</p>
                <ul>
                    <li>
                        <h3>Plomería</h3>
                        <p>Servicios de instalación, reparación y mantenimiento de sistemas de plomería en hogares y empresas.</p>
                    </li>
                    <li>
                        <h3>Carpintería</h3>
                        <p>Fabricación, reparación e instalación de muebles y estructuras de madera a medida.</p>
                    </li>
                    <li>
                        <h3>Electricidad</h3>
                        <p>Instalación, mantenimiento y reparación de sistemas eléctricos, asegurando un funcionamiento seguro y eficiente.</p>
                    </li>
                    <li>
                        <h3>Albañilería</h3>
                        <p>Construcción y reparación de estructuras, muros y otras obras de albañilería.</p>
                    </li>
                    <li>
                        <h3>Herreria</h3>
                        <p>Transformar el metal en diversas creaciones mediante el uso de herramientas y técnicas</p>
                    </li>
                </ul>
            </section>

            <section className="security">
            <div className="logo-container">
                <img src={security} alt="Logo" className="logo-componentes" />
                <h2>Seguridad</h2>
            </div>
                <p>En Conecta Komers, tomamos la seguridad muy en serio. Todos nuestros trabajadores pasan por un riguroso proceso de verificación y evaluación para garantizar que son calificados y confiables. Además, nuestras transacciones están protegidas con la última tecnología en seguridad.</p>
            </section>
            <section className="payment">
            <div className="logo-container">
                <img src={pay} alt="Logo" className="logo-componentes" />
                <h2>Forma de Pago</h2>
            </div>
                <p>Ofrecemos múltiples formas de pago para tu conveniencia, incluyendo tarjetas de crédito, débito y transferencias bancarias. Todas las transacciones son seguras y están protegidas por nuestra plataforma.</p>
            </section>
            <section className="profiles">
            <div className="logo-container">
                <img src={profile} alt="Logo" className="logo-componentes" />
                <h2>Perfiles</h2>
            </div>
                <p>Cada trabajador en nuestra plataforma tiene un perfil detallado donde puedes ver su experiencia, calificaciones y reseñas de otros usuarios. Esto te ayuda a tomar decisiones informadas y contratar al mejor profesional para tus necesidades.</p>
            </section>
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
};

export default Serviciospage;