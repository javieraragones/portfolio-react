import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section" id="trayectoria">
      <h2 className="section__title">Trayectoria</h2>
      <span className="section__subtitle">Mi Experiencia Personal</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i
              className="uil uil-graduation-cap 
                    qualification__icon"
            ></i>
            Educación
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i
              className="uil uil-briefcase-alt 
                    qualification__icon"
            ></i>{" "}
            Experiencia
          </div>

          <div
            className={
              toggleState === 3
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(3)}
          >
            <i
              className="uil uil-award
                    qualification__icon"
            ></i>{" "}
            Certificados
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Desarrollo de Aplicaciones Web
                </h3>
                <span className="qualification__subtitle">
                  Cesur Formación Profesional
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2021 - 2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Grado en Ingeniería Informática
                </h3>
                <span className="qualification__subtitle">
                  E.T.S. de Ingeniería Informática UMA
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2018 - 2021 <br />{" "}
                  (En pausa)
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Bachillerato Tecnológico
                </h3>
                <span className="qualification__subtitle">
                  I.E.S. Sierra de Mijas
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2016 - 2018
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Desarrollador Web - Prácticas
                </h3>
                <span className="qualification__subtitle">Asystem España</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Marzo 2023 - Junio
                  2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Desarrollador WordPress - Prácticas
                </h3>
                <span className="qualification__subtitle">Asystem España</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Marzo 2023 - Junio
                  2023
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Diseño y marketing - Prácticas
                </h3>
                <span className="qualification__subtitle">Asystem España</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Marzo 2023 - Junio
                  2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 3
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <a href="https://www.efset.org/cert/fkcdPh" target="_blank">
                  <h3 className="qualification__title">
                    EF SET English Certificate 64/100 (C1 Advanced)
                  </h3>
                </a>
                <span className="qualification__subtitle">
                  EF Standard English Test (EF SET){" "}
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 27 Julio 2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <a
                  href="https://freecodecamp.org/certification/fcc495d104c-4b13-49e6-9e68-dccc6e167004/quality-assurance-v7"
                  target="_blank"
                >
                  <h3 className="qualification__title">Quality Assurance</h3>
                </a>
                <span className="qualification__subtitle">freeCodeCamp</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 21 Septiembre 2023
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <a
                  href="https://freecodecamp.org/certification/fcc495d104c-4b13-49e6-9e68-dccc6e167004/back-end-development-and-apis"
                  target="_blank"
                >
                  <h3 className="qualification__title">
                    Back End Development and APIs
                  </h3>
                </a>
                <span className="qualification__subtitle">freeCodeCamp</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 28 Agosto 2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <a
                  href="https://freecodecamp.org/certification/fcc495d104c-4b13-49e6-9e68-dccc6e167004/front-end-development-libraries"
                  target="_blank"
                >
                  <h3 className="qualification__title">
                    Front End Development Libraries
                  </h3>
                </a>
                <span className="qualification__subtitle">freeCodeCamp</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 9 Agosto 2023
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <a
                  href="https://freecodecamp.org/espanol/certification/fcc495d104c-4b13-49e6-9e68-dccc6e167004/javascript-algorithms-and-data-structures"
                  target="_blank"
                >
                  <h3 className="qualification__title">
                    JavaScript Algorithms and Data Structures
                  </h3>
                </a>
                <span className="qualification__subtitle">freeCodeCamp</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 16 Julio 2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
