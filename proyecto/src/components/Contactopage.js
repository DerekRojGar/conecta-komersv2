import React from 'react';
import lg1 from '../pictures/lg1.png';
import contact from '../pictures/contact.png'
import '../styles/Contactopage.css'
import {Link } from 'react-router-dom';

const Contactopage = () => {
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
        <main className="">
        <section className="contact-description">
        <div className="logo-container">
                <img src={contact} alt="Logo" className="logo-componentes" />
                <h2>Contacto</h2>
            </div>
                <p>Puedes contactarnos en los siguientes medios para cualquier consulta, sugerencia o asistencia. 
                    Nuestro guapo, poderoso y asombroso equipo de 3 personas está disponible para ayudarte y resolver cualquier inquietud que puedas tener:</p>
                <ul>
                    <li>Correo Electrónico: utp0141854@alumno.utpuebla.edu.mx</li>
                    <li>Teléfono: +52 22 11 49 80 90</li>
                    <li>Dirección: Antiguo Camino a La Resurrección 1002 - A, Zona Industrial, 72300 Heroica Puebla de Zaragoza, Pue.</li>
                    <li>Redes Sociales:
                        <ul>
                            <li>Facebook: @ConectaKomers</li>
                            <li>Twitter: @ConectaKomers</li>
                            <li>Instagram: @ConectaKomers</li>
                        </ul>
                    </li>
                </ul>
                <p>Nuestro horario de atención es de lunes a viernes, de 9:00 AM a 6:00 PM. También puedes usar nuestras redes sociales para enviarnos un 
                    mensaje directamente. Nos comprometemos a responder en un plazo de 24 a 48 horas.</p>
                <p>Agradecemos tu interés en Conecta Komers y esperamos poder asistirte con todas tus necesidades de servicios profesionales.</p>
            </section>
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

export default Contactopage;