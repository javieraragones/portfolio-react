import React, { useState } from "react";
import "./header.css";

const Header = () => {
  /*= Change Background Header =*/
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    // When the scroll is higher tham 200 viewport height, add the scroll-header class to a tag with the header class
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });
  /*= Toggle Menu =*/
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#inicio");

  return (
    <header className="header">
      <nav className="nav container">
        <a href="#inicio" className="nav__logo">
          Javier
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#inicio"
                onClick={() => setActiveNav("#inicio")}
                className={
                  activeNav === "#inicio"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-estate nav__icon"></i> Inicio
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#sobre-mi"
                onClick={() => setActiveNav("#sobre-mi")}
                className={
                  activeNav === "#sobre-mi"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-user nav__icon"></i> Sobre Mi
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#habilidades"
                onClick={() => setActiveNav("#habilidades")}
                className={
                  activeNav === "#habilidades"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-file-alt nav__icon"></i> Habilidades
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#experiencia"
                onClick={() => setActiveNav("#experiencia")}
                className={
                  activeNav === "#experiencia"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-briefcase-alt nav__icon"></i> Experiencia
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#portfolio"
                onClick={() => setActiveNav("#portfolio")}
                className={
                  activeNav === "#portfolio"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-scenery nav__icon"></i> Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#contacto"
                onClick={() => setActiveNav("#contacto")}
                className={
                  activeNav === "#contacto"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-message nav__icon"></i> Contacto
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
