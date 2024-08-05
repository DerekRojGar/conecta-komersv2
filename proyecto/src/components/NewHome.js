import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import 'react-multi-carousel/lib/styles.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/Newhome.css';
import BackToTopButton from './BackToTopButton';
import c1 from '../pictures/ncar1.jpg'
import c2 from '../pictures/newca2.jpg'
import logoc from '../pictures/conectakomers.png'
import servi1 from '../pictures/ns1.jpg'
import servi2 from '../pictures/servicio2.jpg'
import servi3 from '../pictures/servicio3.jpg'
import newplomeria from '../pictures/newplomeria.jpg'
import newcarp from '../pictures/newcarp.jpg'
import newalb from '../pictures/alba.jpg'
import client1 from '../pictures/testimonial1.jpg'
import client2 from '../pictures/testimonial2.jpg'
import client3 from '../pictures/testimonial3.jpeg'
import g1 from '../pictures/gallery1.jpg'
import g2 from '../pictures/gallery2.jpg'
import g3 from '../pictures/gallery3.jpg'
import g4 from '../pictures/gallery4.jpg'
import g5 from '../pictures/gallery5.jpg'
import g6 from '../pictures/gallery6.jpg'
import team1 from '../pictures/team1.jpg'
import team2 from '../pictures/team2.jpg'
import team3 from '../pictures/team3.jpg'

  const NewHome = () => {
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 200) {
          setIsNavbarVisible(true);
        } else {
          setIsNavbarVisible(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    useEffect(() => {
      const links = document.querySelectorAll('.navbar-nav a, .btn-scroll');
      links.forEach(link => {
        link.addEventListener('click', function(event) {
          if (this.hash !== "") {
            event.preventDefault();
            
            document.querySelector(this.hash).scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
            
            if (this.closest('.navbar-nav')) {
              document.querySelectorAll('.navbar-nav .active').forEach(el => el.classList.remove('active'));
              this.classList.add('active');
            }
          }
        });
      });
  
      return () => {
        links.forEach(link => {
          link.removeEventListener('click', () => {});
        });
      };
    }, []);
  
    const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };
  
    return (
      <>
        <body style={{ backgroundColor: 'black', color: 'black', margin: 0, padding: 0 }}>
          {/* Barra de navegación */}
          <Navbar 
      fixed="top" 
      className={`shadow-sm navbar-expand-lg bg-black navbar-dark py-1 py-lg-0 ${isNavbarVisible ? 'd-flex' : 'd-none'}`}
      expand="lg"
    >
      <Container>
        <Navbar.Brand href="/" className="d-block d-lg-none">
          <h1 className="display-5 text-white text-uppercase m-0">Conecta Komers</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarCollapse" />
        <Navbar.Collapse id="navbarCollapse">
          <Nav className="mr-auto py-0">
            <Nav.Link href="#home" className="text-white">Inicio</Nav.Link>
            <Nav.Link href="#about" className="text-white">Acerca de</Nav.Link>
            <Nav.Link href="#service" className="text-white">Servicios</Nav.Link>
            <Nav.Link href="#project" className="text-white">Proyecto</Nav.Link>
          </Nav>
          <Navbar.Brand href="/newhome" className="mx-auto d-none d-lg-block">
            <h1 className="display-4 text-yellow text-uppercase m-0">Conecta Komers</h1>
          </Navbar.Brand>
          <Nav className="ml-auto py-0">
            <Nav.Link href="#team" className="text-white">Equipo</Nav.Link>
            <Nav.Link href="#faqs" className="text-white">FAQs</Nav.Link>
            <Nav.Link href="#testimonial" className="text-white">Testimonios</Nav.Link>
            <Nav.Link href="/login" className="text-white">Iniciar sesión</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
          {/* Fin Barra de navegación */}
  
    {/* Carrusel */}
    <div className="container-fluid p-0 mb-5 pb-5" id="home">
      <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="3000">
        <div className="carousel-inner">
          <div className="carousel-item active" style={{ height: '100vh', minHeight: '400px' }}>
            <img
              className="d-block w-100"
              src={c1}
              alt="Slide 1"
              style={{ objectFit: 'cover' }}/>
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div className="p-3" style={{ maxWidth: '900px' }}>
              <h4 className="text-white text-uppercase mb-4" style={{ letterSpacing: '3px' }}>
                TRABAJADORES A TU ALCANCE
              </h4>
              <h3 className="display-2 font-secondary text-white mb-4" style={{ letterSpacing: '3px', fontWeight: 'bold' }}>
                ¿Necesitas ayuda? Busca a un experto!
              </h3>
                <a
                  className="btn font-weight-bold py-3 px-5 mt-2"
                  href="/login"
                  style={{ backgroundColor: 'yellow', color: 'black' }}>
                  Iniciar sesión
                </a>
              </div>
            </div>
          </div>
            <div className="carousel-item" style={{ height: '100vh', minHeight: '400px' }}>
              <img
                className="d-block w-100"
                src={c2}
                alt="Slide 2"
                style={{ objectFit: 'cover' }}/>
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: '900px' }}>
                  <h4 className="text-white text-uppercase mb-4" style={{ letterSpacing: '3px' }}>
                    COMPARTE TU TRABAJO
                  </h4>
                  <h3 className="display-2 font-secondary text-white mb-4" style={{ letterSpacing: '3px', fontWeight: 'bold' }}>
                    ¡Ofrece tus servicios y experiencia!
                  </h3>
                  <a
                    className="btn font-weight-bold py-3 px-5 mt-2"
                    href="/register-trabajador"
                    style={{ backgroundColor: 'yellow', color: 'black' }}>
                    Registro para trabajador
                  </a>
                  </div>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#header-carousel" role="button" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Anterior</span>
            </a>
            <a className="carousel-control-next" href="#header-carousel" role="button" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Siguiente</span>
          </a>
      </div>
    </div>
    {/* Final Carrusel */}

    {/* Sobre nosotros */}
    <div className="container-fluid py-5" id="about">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <img className="img-fluid mb-4 mb-lg-0" src={logoc} alt="About Us" />
          </div>
          <div className="col-lg-7">
            <h6 className="text-uppercase mb-3" style={{ letterSpacing: '3px', color: 'white' }}>
              Sobre nosotros
            </h6>
            <h1 className="display-7 mb-3" style={{ color: 'white' }}>
              <span style={{ color: 'white' }}>Conectando Personas</span> en la industria del empleo
            </h1>
              <p style={{ color: 'white' }}>
                Brindamos una plataforma intuitiva y capaz que eficiente la búsqueda,
                selección y contratación de obreros calificados para diversas tareas. Ofrecer una amplia gama de servicios 
                para satisfacer las diversas necesidades de nuestros usuarios. 
                Todos nuestros trabajadores son calificados y confiables, garantizando un servicio de calidad en todo momento.
              </p>
                <button 
                  className="btn font-weight-bold py-3 px-5 mt-2"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModalLong"
                  style={{ backgroundColor: 'yellow', color: 'black' }}>
                  Leer más
                </button>
          </div>
        </div>
      </div>
    </div>
    {/* Final Sobre nosotros */}

    {/* Servicios */}
    <div className="container-fluid py-5" id="service">
  <div className="container py-5">
    <div className="section-title position-relative text-center">
      <h6 className="text-uppercase mb-3" style={{ letterSpacing: '3px', color: 'white' }}>
        Servicios
      </h6>
      <h1 className="font-secondary display-4" style={{ color: 'white' }}>¿Qué estas buscando?</h1>
    </div>

    <div className="row justify-content-center">
      <div className="col-lg-4 mb-4">
        <div className="product-item h-100 d-flex flex-column justify-content-between">
          <div className="product-img">
            <img className="img-fluid w-100" src={servi1} alt="Plomería" />
          </div>
          <div className="text-center p-4" style={{ backgroundColor: 'yellow', color: 'black' }}>
            <h3 type="button" data-bs-toggle="modal" data-bs-target="#modalplomeria" className="m-0">Plomería</h3>
          </div>
        </div>
      </div>

      <div className="col-lg-4 mb-4">
        <div className="product-item h-100 d-flex flex-column justify-content-between">
          <div className="product-img">
            <img className="img-fluid w-100" src={servi2} alt="Carpintería" />
          </div>
          <div className="text-center p-4" style={{ backgroundColor: 'yellow', color: 'black' }}>
            <h3 type="button" data-bs-toggle="modal" data-bs-target="#modalcarpi" className="m-0">Carpintería</h3>
          </div>
        </div>
      </div>

      <div className="col-lg-4 mb-4">
        <div className="product-item h-100 d-flex flex-column justify-content-between">
          <div className="product-img">
            <img className="img-fluid w-100" src={servi3} alt="Albañilería" />
          </div>
          <div className="text-center p-4" style={{ backgroundColor: 'yellow', color: 'black' }}>
            <h3 type="button" data-bs-toggle="modal" data-bs-target="#modalalb" className="m-0">Albañilería</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    {/*  Final Servicios*/}

    {/* Galeria */}
    <div className="container-fluid bg-gallery" id="project" style={{ padding: '120px 0', margin: '90px 0' }}>
      <div className="section-title position-relative text-center" style={{ marginBottom: '120px' }}>
        <h6 className="text-uppercase mb-3" style={{ letterSpacing: '3px', color: 'white' }}>
          Proyecto
        </h6>
        <h1 className="font-secondary display-4 text-white">Galeria del Proyecto</h1>
      </div>

      <Carousel className="d-flex justify-content-center">
        <Carousel.Item>
          <div className="gallery-item d-flex justify-content-center">
            <img 
              className="img-fluid" 
              src={g1} 
              alt="Gallery 1" 
              style={{ width: '400px', height: '400px', objectFit: 'cover' }} 
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="gallery-item d-flex justify-content-center">
            <img 
              className="img-fluid" 
              src={g2} 
              alt="Gallery 2" 
              style={{ width: '400px', height: '400px', objectFit: 'cover' }} 
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="gallery-item d-flex justify-content-center">
            <img 
              className="img-fluid" 
              src={g3} 
              alt="Gallery 3" 
              style={{ width: '400px', height: '400px', objectFit: 'cover' }} 
            />
          </div>
        </Carousel.Item>
        {/* Agrega más <Carousel.Item> según sea necesario */}
      </Carousel>
    </div>
        {/* Final Galeria */}

        {/* Equipo */}
        <div className="container-fluid py-5" id="team">
  <div className="container py-5">
    <div className="section-title position-relative text-center mb-5">
      <h6 className="text-uppercase mb-3" style={{ letterSpacing: '3px', color: 'white' }}>
        Equipo de Desarrollo
      </h6>
      <h1 className="font-secondary display-4" style={{ color: 'white' }}>Conoce al equipo</h1>
    </div>

    <div className="row justify-content-center m-0 mb-4 pb-2">
      <div className="col-lg-6 d-flex align-items-center justify-content-center">
        <div className="row m-0 w-100">
          <div className="col-sm-6 p-0 text-center">
            <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-4 text-white">
              <h5 className="mb-2">Derek Rojas</h5>
              <p className="text-muted font-italic mb-2">CEO & Especialista en Seguridad</p>
              <p>Texto Perron de Derek</p>
              <div className="d-flex justify-content-center mb-2">
                <a className="btn mx-1" style={{ backgroundColor: 'yellow', color: 'black' }} href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                <a className="btn mx-1" style={{ backgroundColor: 'yellow', color: 'black' }} href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                <a className="btn mx-1" style={{ backgroundColor: 'yellow', color: 'black' }} href="https://mx.linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
          <div className="col-sm-6 p-0" style={{ minHeight: '300px' }}>
            <img src={team1} style={{ objectFit: 'cover', width: '100%', height: '100%' }} alt="Derek Rojas" />
          </div>
        </div>
      </div>
    </div>

    <div className="row justify-content-center m-0 mb-4 pb-2">
      <div className="col-lg-6 d-flex align-items-center justify-content-center">
        <div className="row m-0 w-100">
          <div className="col-sm-6 p-0" style={{ minHeight: '300px' }}>
            <img src={team2} style={{ objectFit: 'cover', width: '100%', height: '100%' }} alt="Anahi Jara" />
          </div>
          <div className="col-sm-6 p-0 text-center">
            <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-4 text-white">
              <h5 className="mb-2">Anahi Jara</h5>
              <p className="text-muted font-italic mb-2">Desarrolladora Backend</p>
              <p>Texto Perron de Anahi</p>
              <div className="d-flex justify-content-center mb-2">
                <a className="btn mx-1" style={{ backgroundColor: 'yellow', color: 'black' }} href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                <a className="btn mx-1" style={{ backgroundColor: 'yellow', color: 'black' }} href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                <a className="btn mx-1" style={{ backgroundColor: 'yellow', color: 'black' }} href="https://mx.linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="row justify-content-center m-0 mb-4 pb-2">
      <div className="col-lg-6 d-flex align-items-center justify-content-center">
        <div className="row m-0 w-100">
          <div className="col-sm-6 p-0 text-center">
            <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-4 text-white">
              <h5 className="mb-2">Luis Sanchez</h5>
              <p className="text-muted font-italic mb-2">Diseñador UX/UI</p>
              <p>Texto Perron de Luis</p>
              <div className="d-flex justify-content-center mb-2">
                <a className="btn mx-1" style={{ backgroundColor: 'yellow', color: 'black' }} href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                <a className="btn mx-1" style={{ backgroundColor: 'yellow', color: 'black' }} href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                <a className="btn mx-1" style={{ backgroundColor: 'yellow', color: 'black' }} href="https://mx.linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
          <div className="col-sm-6 p-0" style={{ minHeight: '300px' }}>
            <img src={team3} style={{ objectFit: 'cover', width: '100%', height: '100%' }} alt="Luis Sanchez" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        {/* Final Equipo */}

        {/* FAQS */}
            <div className="container-fluid py-5" id="faqs">
      <div className="container py-5">
        <div className="section-title position-relative text-center">
          <h6 className="text-uppercase mb-3" style={{ letterSpacing: '3px', color: 'white'}}>
            FAQs
          </h6>
          <h1 className="display-4" style={{ color: 'white'}}>Usted debe saber</h1>
        </div>
        <div className="row">
          <div className="col-md-6 border-right border-primary">
            <div className="text-center text-md-right mr-md-3 mb-4 mb-md-0" style={{ letterSpacing: '3px', color: 'white'}}>
              <h3 className="mb-4">¿Comó promociono mi trabajo?</h3>
              <h5 className="mb-3">
                <i className="fa fa-check text-success float-md-right mr-2 mr-md-0 ml-md-2"></i>
                ¡Registrate con nosotros y espera a recibir ofertas!  Una vez registrado los usuarios podran ver tu especialidad 
              </h5>
              <h5 className="mb-3">
                <i className="fa fa-check text-success float-md-right mr-2 mr-md-0 ml-md-2"></i>
                ¡Comparte tus conocimientos! - Recibe ofertas de trabajo y espera a que se comparta tu experiencia
              </h5>
              <h5 className="mb-0">
                <i className="fa fa-check text-success float-md-right mr-2 mr-md-0 ml-md-2"></i>
                ¡Tu haces el cambio! - Al ofrecer un trabajo de calidad, ayudas a tus clientes y a ti mismo
              </h5>
            </div>
          </div>
          <div className="col-md-6">
            <div className="text-center text-md-left ml-md-3" style={{ letterSpacing: '3px', color: 'white'}}>
              <h3 className="mb-4">¿Porque usar el sitio?</h3>
              <h5 className="mb-3">
                <i className="fa fa-check text-success mr-2"></i>
                Seguridad - Todos nuestros trabajadores pasan por un riguroso proceso de verificación y evaluación para garantizar que son calificados y confiables.
              </h5>
              <h5 className="mb-3">
                <i className="fa fa-check text-success mr-2"></i>
              </h5>
              <h5 className="mb-3">
                <i className="fa fa-check text-success mr-2"></i>
                Mira las especialidades - Esto te ayuda a tomar decisiones informadas y contratar al mejor profesional para tus necesidades.
              </h5>
              <h5 className="mb-0">
                <i className="fa fa-check text-success mr-2"></i>
                ¡Apoya a los oficios! 
              </h5>
            </div>
          </div>
          <div className="col-md-12 text-center pt-3">
            <a className="btn font-weight-bold py-3 px-5 mt-4 btn-scroll" href="/register-client" style={{ backgroundColor: 'yellow', color: 'black' }}>
              Obten tu cuenta
            </a>
          </div>
        </div>
      </div>
    </div>
        {/* Final FAQS */}

        {/* Testimonios */}
        <div className="container-fluid py-5" id="testimonial">
      <div className="container py-5">
        <div className="section-title position-relative text-center" style={{ marginBottom: '120px' }}>
          <h6 className="text-uppercase mb-3" style={{ letterSpacing: '3px', color: 'white' }}>
            Testimonios
          </h6>
          <h1 className="display-4" style={{ letterSpacing: '3px', color: 'white' }}>Nuestros usuarios dicen</h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <Carousel>
              <Carousel.Item>
                <div className="text-center">
                  <img
                    className="img-fluid mx-auto mb-3"
                    src={client1}
                    alt="Client 1"
                    style={{ width: '100px' }}
                  />
                  <p style={{ fontSize: '22px', color:'white' }}>
                  "Registrarme en Conecta Komers fue súper sencillo, y desde entonces he conseguido varios trabajos en mi área. 
                  La plataforma es clara, y la comunicación directa con los clientes me permite organizar mejor mi tiempo y ofrecer un mejor 
                  servicio."
                  </p>
                  <h4 style={{ color: 'white' }}>Jesus Rojas</h4>
                  <span style={{ color: 'white' }}>Electricista</span>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="text-center">
                  <img
                    className="img-fluid mx-auto mb-3"
                    src={client2}
                    alt="Client 1"
                    style={{ width: '100px' }}
                  />
                  <p style={{ fontSize: '22px', color:'white' }}>
                  "Conecta Komers me ha facilitado muchísimo la vida. Antes perdía horas buscando un buen plomero, 
                  pero ahora con solo unos clics encuentro a alguien confiable y disponible en mi zona. ¡La eficiencia es increíble!"
                  </p>
                  <h4 style={{ color: 'white' }}>Dilan Palafox</h4>
                  <span style={{ color: 'white' }}>Usario</span>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="text-center">
                  <img
                    className="img-fluid mx-auto mb-3"
                    src={client3}
                    alt="Client 1"
                    style={{ width: '100px' }}
                  />
                  <p style={{ fontSize: '22px', color:'white' }}>
                    "Necesitaba un carpintero para un proyecto en casa, y me sorprendió la cantidad de opciones que encontré en Conecta Komers. 
                    Hay una gran variedad de oficios y profesionales disponibles. 
                    Definitivamente recomendaría esta plataforma a cualquiera que necesite contratar servicios."
                  </p>
                  <h4 style={{ color: 'white' }}>Cheems</h4>
                  <span style={{ color: 'white' }}>Usuario</span>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>

{/* Footer */}
<div className="container-fluid bg-dark text-white py-5 px-sm-3 px-lg-5" style={{ marginTop: '90px' }}>
  <div className="row pt-5">
    <div className="col-12 mb-4 px-4">
      <div className="row mb-5 p-4" style={{ background: 'rgba(256, 256, 256, .05)' }}>
        <div className="col-md-4">
          <div className="text-md-center">
            <h5 className="text-uppercase mb-2" style={{ letterSpacing: '5px', color:'white' }}>Nuestra oficina</h5>
            <p className="mb-4 m-md-0">Antiguo Camino a La Resurrección 1002 - A, Zona Industrial, 72300 Heroica Puebla de Zaragoza, Pue.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="text-md-center">
            <h5 className="text-uppercase mb-2" style={{ letterSpacing: '5px', color:'white'}}>Nuestro Email</h5>
            <p className="mb-4 m-md-0">utp0141854@alumno.utpuebla.edu.mx</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="text-md-center">
            <h5 className="text-uppercase mb-2" style={{ letterSpacing: '5px', color:'white' }}>Llamanos</h5>
            <p className="m-0">+52 2211498090</p>
          </div>
        </div>
      </div>
    </div>
    <div className="col-lg-7 col-md-12">
      <div className="row">
        <div className="col-md-6 mb-5">
          <p>
            Conecta-Komers está optimizado para la comunicación y la formación. Los usuarios son ajenos al sitio, somos el medio de contacto y contratación.
            Al utilizar Conecta-Komers, usted acepta haber leído y aceptado nuestros <Link to="/term-y-serv">términos de uso, política y privacidad.</Link>
          </p>
          <div className="d-flex justify-content-start mt-4">
            <a className="btn btn-lg btn-outline-light btn-lg-square mr-2" href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a className="btn btn-lg btn-outline-light btn-lg-square mr-2" href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a className="btn btn-lg btn-outline-light btn-lg-square mr-2" href="https://mx.linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
            <a className="btn btn-lg btn-outline-light btn-lg-square" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <div className="col-md-6 mb-5">
          <h5 className="text-primary text-uppercase mb-4" style={{ letterSpacing: '5px'}}>Nosotros</h5>
          <div className="d-flex flex-column justify-content-start">
            <a className="text-white btn-scroll mb-2" href="#about"><i className="fa fa-angle-right mr-2"></i>Objetivo</a>
            <a className="text-white btn-scroll mb-2" href="#service"><i className="fa fa-angle-right mr-2"></i>Servicios</a>
            <a className="text-white btn-scroll mb-2" href="#project"><i className="fa fa-angle-right mr-2"></i>Proyecto</a>
            <a className="text-white btn-scroll mb-2" href="#faqs"><i className="fa fa-angle-right mr-2"></i>FAQs</a>
            <a className="text-white btn-scroll mb-2" href="#testimonial"><i className="fa fa-angle-right mr-2"></i>Testimonios</a>
          </div>
        </div>
      </div>
    </div>
    <div className="col-lg-5 col-md-12 mb-5">
      <h5 className="text-primary text-uppercase mb-4" style={{ letterSpacing: '5px' }}>Boletin informativo</h5>
      <p>Si quieres recibir las ultimas novedades o contactar con el equipo, ingresa tu correo; Te enviaremos un correo 
        donde podras conversar con nosotros, tambien te mantendremos informado sobre actualizaciones en el sitio
      </p>
      <div className="w-100">
        <div className="input-group">
          <input type="text" className="form-control border-light" style={{ padding: '30px' }} placeholder="Tu correo electronico" />
          <div className="input-group-append">
            <button className="btn btn-primary px-4" style={{ marginLeft: '10px' }}>Enviar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* Final Footer */}

        {/* Modal */}
        <div className="modal fade" id="exampleModalLong" tabIndex="-1" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content bg-dark text-white">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">Conecta Komers</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
            <div className="modal-body">
              <img className="img-fluid mb-4" src={c1} alt="Solar Energy" />
              <p>Conecta Komers tiene como objetivo conectar a usuarios que requieren servicios específicos con trabajadores calificados y confiables. 
                Nuestra misión es optimizar el proceso de búsqueda y contratación de servicios, ahorrando tiempo y esfuerzo a ambas partes.</p>
                <br></br>
              <p>1.- Promover la eficiencia: Optimizar el proceso de búsqueda y contratación de servicios de oficios, ahorrando tiempo y esfuerzo tanto a los usuarios como a los trabajadores.</p>
              <p>2.- Promover la diversidad de oficios: Incluir una amplia gama de categorías de oficios, desde plomería y carpintería hasta jardinería y limpieza, para satisfacer las diversas necesidades de los usuarios.</p>
              <p>Funcionalidades
                <ul>
                  <li>Búsqueda avanzada de trabajadores por oficio y ubicación</li>
                  <li>Registro y acceso sencillo para usuarios y trabajadores</li>
                  <li>Comunicación directa entre usuarios y trabajadores</li>
                </ul>
              </p>
              </div>
            </div>
          </div>
        </div>
      {/* Final modal */}

      {/* Modales Servicios */}
      <div className="modal fade" id="modalplomeria" tabIndex="-1" aria-labelledby="modalplomeria" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content bg-dark text-white">
              <div className="modal-header">
                <h5 className="modal-title" id="modalplomeria">Plomería</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
            <div className="modal-body">
              <img className="img-fluid mb-4" src={newplomeria} alt="Solar Energy" />
              <p>Servicios de instalación, reparación y mantenimiento de sistemas de plomería en hogares y empresas. 
                La fontanería, plomería o gasfitería es la actividad relacionada con la instalación y mantenimiento de redes de tuberías 
                para el abastecimiento de agua potable y evacuación de aguas residuales, 
                así como las instalaciones de calefacción en edificaciones y otras construcciones.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="modalcarpi" tabIndex="-1" aria-labelledby="modalcarpi" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content bg-dark text-white">
              <div className="modal-header">
                <h5 className="modal-title" id="modalcarpi">Carpintería</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
            <div className="modal-body">
              <img className="img-fluid mb-4" src={newcarp} alt="Solar Energy" />
              <p>Elaborar, montar y reparar puertas, ventanas y realizar revestimientos de paredes y techos, escaleras y mobiliario propio 
                de la carpintería a medida, en el taller o "in situ" atendiendo a la información técnica o instrucciones recibidas, desarrollar el 
                proyecto de realización y presupuesto, seleccionando para ello, previamente, las materias primas necesarias, 
                cumpliendo los criterios de calidad establecidos y la reglamentación vigente sobre prevención, seguridad y salud laboral.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="modalalb" tabIndex="-1" aria-labelledby="modalalb" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content bg-dark text-white">
              <div className="modal-header">
                <h5 className="modal-title" id="modalalb">Albañilería</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
            <div className="modal-body">
              <img className="img-fluid mb-4" src={newalb} alt="Solar Energy" />
              <p>Organizar y realizar los trabajos de albañilería, obra de fábrica, cubiertas cerámicas y 
                revestimientos con morteros y pastas, siguiendo las directrices establecidas en la 
                documentación técnica y la normativa vigente. Interpretar planos de cimentación, para hacer los replanteos de su competencia y 
                señalar los trabajos diarios de acuerdo con la documentación técnica.
                Rellenar con hormigón las zanjas y pozos, dejándolas bien enrasados en su coronación, para facilitar el arranque de los muros y pilares.
                Construir soleras de hormigón para las tuberías de evacuación, arquetas y pozos de registro.</p>
              </div>
            </div>
          </div>
        </div>
        <BackToTopButton/>
        </body>
        {/* <!-- Scroll to Bottom --> */}
        <i class="fa fa-2x fa-angle-down text-white scroll-to-bottom"></i>
    </>
  )
}

export default NewHome;

