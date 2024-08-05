import React, { useState, useEffect } from 'react';
import { FaAngleDoubleUp } from 'react-icons/fa';
import '../styles/App.css';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Función para manejar la visibilidad del botón en función del desplazamiento
  const toggleVisibility = () => {
    if (window.pageYOffset > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Función para manejar el clic en el botón que hace scroll hacia arriba
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="btn btn-yellow btn-square back-to-top"
          style={{ position: 'fixed', bottom: '5px', right: '5px', display: 'block', color:"white"}}
        >
          <FaAngleDoubleUp />
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;