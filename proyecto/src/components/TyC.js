import React from "react";
import {Link } from 'react-router-dom';
import '../styles/TyC.css';
import lg1 from '../pictures/lg1.png';

const TyC = () => {
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
            <li><a href="/servicios-page">SERVICIOS</a></li>
            <li><a href="/contacto-page">CONTACTO</a></li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <button className="login-button">INICIAR SESIÓN</button>
          <Link to="/register-client"><button className="register-button">REGISTRO</button></Link>
        </div>
      </header>
      <main>
            <div className="tyc-container">
                <h1>Términos y Condiciones de Conecta Komers</h1>

                <section>
                    <h2>1. Introducción</h2>
                    <p>
                        Bienvenido a Conecta Komers. Al acceder o utilizar nuestro sitio web y servicios, aceptas estar sujeto a estos Términos y Condiciones. Si no estás de acuerdo con alguna parte de estos términos, no debes utilizar nuestros servicios.
                    </p>

                    <h2>2. Definiciones</h2>
                    <p>
                        <strong>"Usuario"</strong>: Persona que utiliza el sitio web para buscar y contratar servicios.<br />
                        <strong>"Trabajador"</strong>: Persona que ofrece servicios a través de nuestra plataforma.<br />
                        <strong>"Sitio"</strong>: El sitio web Conecta Komers.<br />
                        <strong>"Servicios"</strong>: Los servicios ofrecidos a través del Sitio por los Trabajadores.
                    </p>

                    <h2>3. Uso del Sitio</h2>
                    <p>
                        <strong>3.1 Registro</strong>: Para utilizar ciertos servicios del Sitio, los Usuarios y Trabajadores deben registrarse y crear una cuenta. La información proporcionada debe ser precisa y actualizada.<br />
                        <strong>3.2 Acceso</strong>: Conecta Komers se reserva el derecho de restringir o terminar el acceso a cualquier Usuario o Trabajador que incumpla estos Términos y Condiciones.
                    </p>

                    <h2>4. Servicios</h2>
                    <p>
                        <strong>4.1 Promoción de la Eficiencia</strong>: Conecta Komers se compromete a optimizar el proceso de búsqueda y contratación de servicios, ahorrando tiempo y esfuerzo tanto a los Usuarios como a los Trabajadores.<br />
                        <strong>4.2 Diversidad de Oficios</strong>: El Sitio incluye una amplia gama de categorías de oficios, desde plomería y carpintería hasta jardinería y limpieza, para satisfacer las diversas necesidades de los Usuarios.
                    </p>

                    <h2>5. Obligaciones del Usuario</h2>
                    <p>
                        <strong>5.1 Veracidad de la Información</strong>: Los Usuarios deben proporcionar información precisa y completa al solicitar servicios.<br />
                        <strong>5.2 Pago de Servicios</strong>: Los Usuarios son responsables de pagar por los servicios contratados a través del Sitio según los términos acordados con el Trabajador.<br />
                        <strong>5.3 Cumplimiento de Leyes</strong>: Los Usuarios deben cumplir con todas las leyes y regulaciones aplicables al utilizar el Sitio y al contratar servicios.
                    </p>

                    <h2>6. Obligaciones del Trabajador</h2>
                    <p>
                        <strong>6.1 Calidad del Servicio</strong>: Los Trabajadores deben proporcionar servicios de alta calidad y cumplir con las expectativas establecidas en sus perfiles y descripciones de servicios.<br />
                        <strong>6.2 Veracidad de la Información</strong>: Los Trabajadores deben proporcionar información precisa y actualizada sobre sus habilidades, experiencia y disponibilidad.<br />
                        <strong>6.3 Cumplimiento de Leyes</strong>: Los Trabajadores deben cumplir con todas las leyes y regulaciones aplicables al ofrecer y prestar sus servicios.
                    </p>

                    <h2>7. Limitación de Responsabilidad</h2>
                    <p>
                        Conecta Komers actúa como un intermediario entre Usuarios y Trabajadores. No somos responsables de la calidad, seguridad o legalidad de los servicios prestados por los Trabajadores, ni de las interacciones entre Usuarios y Trabajadores.
                    </p>

                    <h2>8. Resolución de Disputas</h2>
                    <p>
                        En caso de disputa entre un Usuario y un Trabajador, Conecta Komers puede, a su discreción, mediar para ayudar a resolver la disputa, pero no está obligado a hacerlo.
                    </p>

                    <h2>9. Modificaciones a los Términos</h2>
                    <p>
                        Conecta Komers se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. Las modificaciones serán efectivas al momento de su publicación en el Sitio. El uso continuado del Sitio después de la publicación de modificaciones constituye la aceptación de los nuevos términos.
                    </p>

                    <h2>10. Política de Privacidad</h2>
                    <p>
                        El uso del Sitio también está sujeto a nuestra Política de Privacidad, que describe cómo recopilamos, utilizamos y protegemos la información personal de los Usuarios y Trabajadores.
                    </p>
                    <h2>11. Contacto</h2>
                    <p>
                        Para cualquier pregunta o comentario sobre estos Términos y Condiciones, por favor contáctanos a través de [información de contacto de la empresa].
                    </p>
                    
                </section>
                <Link to="/home-page"><button>Volver a la pagina principal</button></Link>
            </div>
        </main>
        <footer>
                <img src={lg1} alt="Logo" className="logo-componentes" />
                <h1>Conecta-KomersⓇ</h1>
                <p>Copyright 2024 por Equipo Perrón. Todos los derechos reservados.</p>
            </footer><footer className='f1'>
                <p>Conecta-KomersⓇ</p>
                <p>Conecta-Komers está optimizado para la comunicación y la formación. Los usuarios son ajenos al sitio, somos el medio de contacto y contratacion.
                    Al utilizar Conecta-Komers, usted acepta haber leído y aceptado nuestros <Link to="/term-y-serv">términos de uso, política y privacidad.</Link></p>
            </footer></>
    )
};

export default TyC;