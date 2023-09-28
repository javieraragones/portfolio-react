//import React from "react";

/*
const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <div className="work__img-container">
        <img src={item.image} alt="" className="work__img" />
      </div>
      <h3 className="work__title">{item.title}</h3>
      <a href={item.link} target="_blank" className="work__button">
        Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  );
};
*/
import React, { useState, useEffect } from "react";
import "./workItems.css";

const WorkItems = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  //
  useEffect(() => {
    const handleClickOutsideModal = (e) => {
      const modal = document.querySelector(".projects__modal-content");
      if (modal && !modal.contains(e.target)) {
        closeModal();
      }
    };
    document.addEventListener("mouseup", handleClickOutsideModal);
    return () => {
      document.removeEventListener("mouseup", handleClickOutsideModal);
    };
  }, []);

  //

  return (
    <div className="work__card" key={item.id}>
      <div className="work__card-modal-opener" onClick={() => openModal()}>
        <div className="work__img-container">
          <img src={item.image} alt="" className="work__img" />
        </div>
        <h3 className="work__title">{item.title}</h3>
        <a href={item.link} target="_blank" className="work__button">
          Proyecto <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
      </div>

      <div
        className={
          isModalOpen ? "projects__modal active-modal" : "projects__modal"
        }
      >
        <div className="projects__modal-content">
          <i
            onClick={() => closeModal()}
            className="uil uil-times projects__modal-close"
          ></i>

          <h3 className="projects__modal-title">{item.title}</h3>
          <p className="projects__modal-subtitle">
            {item.category
              .filter((category) => category !== "destacados")
              .join(" - ")}
          </p>
          <a href={item.link} target="_blank">
            <img
              className="projects__modal-img"
              src={item.image}
              alt="imagen proyecto"
            />
          </a>
          <p className="projects__modal-description">{item.description}</p>
          <ul className="projects__modal-projects grid">
            {item.languajes.map((language, index) => (
              <li className="projects__modal-languaje" key={index}>
                <i className="bx bxs-circle projects__modal-icon"></i>
                <p className="projects_modal info">{language}</p>
              </li>
            ))}
          </ul>
          <a
            href={item.link}
            target="_blank"
            className="projects__modal-link projects__modal-button"
          >
            Enlace a proyecto
            <i className="bx bx-right-arrow-alt projects__modal-button-icon"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkItems;
