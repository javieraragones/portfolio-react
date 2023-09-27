import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Javier</h1>

        <ul className="footer__list">
          <li>
            <a href="#sobre-mi" className="footer__link">
              Sobre mi
            </a>
          </li>

          <li>
            <a href="#portafolio" className="footer__link">
              Proyectos
            </a>
          </li>

          <li>
            <a href="#experiencia" className="footer__link">
              Experiencia
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/javieraragonesgutierrez/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-linkedin"></i>
          </a>

          <a
            href="https://github.com/javieraragones"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-github"></i>
          </a>

          <a
            href="https://twitter.com/jaragonesdev"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-twitter"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Javier Aragonés. Todos los derechos reservados.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
