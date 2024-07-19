import React from 'react';
import newworker from '../pictures/newworker.png';
import lg1 from '../pictures/lg1.png';
import '../styles/Homepage.css';
import {Link } from 'react-router-dom';

const Homepage = () => {
    return (
      <><header className="header">
        <div className="logo-container">
          <img src={lg1} alt="Logo" className="logo-componentes" />
          <Link to="/"><div className="logo">CONECTA KOMERS</div></Link>
      </div>
        <nav>
          <ul>
            <li><a href="/inicio-page">INICIO</a></li>
            <li><a href="/servicios-page">SERVICIOS</a></li>
            <li><a href="/contacto-page">CONTACTO</a></li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <button className="login-button">INICIAR SESIÓN</button>
          <Link to="/register-client"><button className="register-button">REGISTRO</button></Link>
        </div>
      </header><main className="main-content">
          <section className="hero">
            <h1>TRABAJADORES A TU ALCANCE</h1>
            <h2>CONECTANDO PERSONAS</h2>
            <p>
              Ofrecemos una plataforma intuitiva y capaz que eficiente la búsqueda,
              selección y contratación de obreros calificados para diversas tareas.
            </p>
            <button className="discover-button">DESCÚBRELO</button>
          </section>
          <section className='imagen-worker'>
            <div className="hero-image">
              <img src={newworker} alt="Main" />
            </div>
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
  };
  
  export default Homepage;


