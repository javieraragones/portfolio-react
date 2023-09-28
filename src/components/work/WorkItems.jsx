import React from "react";

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <div className="work__img-container">
        <img src={item.image} alt="" className="work__img" />
      </div>
      <h3 className="work__title">{item.title}</h3>
      <a href="#" className="work__button">
        Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  );
};

export default WorkItems;
