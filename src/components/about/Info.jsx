import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
      <i class='bx bx-award about__icon'></i>

        <h3 className="about__title">Experiencia</h3>
          <span className="about__subtitle">Prácticas: 3 meses</span>
      </div>

      <div className="about__box">
      <i class='bx bx-briefcase-alt about__icon' ></i>

        <h3 className="about__title">Proyectos realizados</h3>
          <span className="about__subtitle">+30 proyectos</span>
      </div>

      <div className="about__box">
      <i class='bx bx-support about__icon'></i>

        <h3 className="about__title">Disponibilidad</h3>
          <span className="about__subtitle">Lunes a sábado 7:00-15:00</span>
      </div>
    </div>
  )
}

export default Info