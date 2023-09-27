import React, { useState, useEffect } from "react";
import "./services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  //
  useEffect(() => {
    const handleClickOutsideModal = (e) => {
      const modal = document.querySelector(".services__modal");
      if (modal && !modal.contains(e.target)) {
        toggleTab(0);
      }
    };
    document.addEventListener("mouseup", handleClickOutsideModal);
    return () => {
      document.removeEventListener("mouseup", handleClickOutsideModal);
    };
  }, []);

  //
  return (
    <section className="services section" id="experiencia">
      <h2 className="section__title">Experiencia Laboral</h2>
      <span className="section__subtitle">
        Experiencia Profesional Destacada
      </span>

      <div className="services__container container grid">
        <div className="services__content hidden-content">
          <div>
            <i className="uil uil-arrow services__icon">
              <h3 className="services__title">
                Desarrollador <br /> Full Stack
              </h3>
            </i>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>
            Ver Más
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">
                Desarrollador Full Stack
              </h3>
              <p className="services__modal-description">
                Experiencia profesional como desarrollador Full Stack
                especializado en PHP, he extendido mis conocimientos a React.js
                y Node.js.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services_modal info">
                    Front End: HTML, CSS, JavaScript.
                  </p>
                </li>
              </ul>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services_modal info">
                    Back End: PHP, Node.js, Express.js.
                  </p>
                </li>
              </ul>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services_modal info">
                    Bases de Datos: MySQL, SQL Server y MongoDB.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon">
              <h3 className="services__title">
                Desarrollador <br /> Full Stack
              </h3>
            </i>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>
            Ver Más
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">
                Desarrollador Full Stack
              </h3>
              <p className="services__modal-description">
                Experiencia profesional como desarrollador Full Stack
                especializado en PHP, he extendido mis conocimientos a React.js
                y Node.js.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services_modal info">
                    Front End: HTML, CSS, JavaScript.
                  </p>
                </li>
              </ul>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services_modal info">
                    Back End: PHP, Node.js, Express.js.
                  </p>
                </li>
              </ul>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services_modal info">
                    Bases de Datos: MySQL, SQL Server y MongoDB.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-wordpress-simple services__icon">
              <h3 className="services__title">
                Desarrollador <br /> WordPress
              </h3>
            </i>
          </div>

          <span className="services__button" onClick={() => toggleTab(2)}>
            Ver Más
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">Desarrollador WordPress</h3>
              <p className="services__modal-description">
                Experiencia profesional en la creación de sitios web dinámicos y
                atractivos en la plataforma WordPress.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services_modal info">
                    Diseño y Desarrollo de sitios web.
                  </p>
                </li>
              </ul>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services_modal info">
                    Conocimiento en Elementor y Divi builder.
                  </p>
                </li>
              </ul>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services_modal info">
                    Plugins para SEO, Formularios, Traducciones y Más.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-lightbulb-alt services__icon">
              <h3 className="services__title">
                Diseño y <br /> Marketing
              </h3>
            </i>
          </div>

          <span className="services__button" onClick={() => toggleTab(3)}>
            Ver Más
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">Diseño y Marketing</h3>
              <p className="services__modal-description">
                A pesar de no contar con estudios formales en estos campos, he
                cultivado mi pasión y experiencia a lo largo de mi carrera
                profesional.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services_modal info">
                    Diseño gráfico de logotipos y publicaciones.
                  </p>
                </li>
              </ul>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services_modal info">
                    Realización de campañas de publicidad.
                  </p>
                </li>
              </ul>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services_modal info">
                    Gestión de Redes Sociales.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
