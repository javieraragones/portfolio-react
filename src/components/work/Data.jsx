import Work1 from "../../assets/work1.jpg";
import Work2 from "../../assets/work2.jpg";
import Work3 from "../../assets/work3.jpg";
import Work4 from "../../assets/work4.jpg";
import Work5 from "../../assets/work5.jpg";
import calculadora from "../../assets/calculadora.png";
import microservicios from "../../assets/cubo.png";
import sudoku from "../../assets/sudoku.png";
import problema from "../../assets/educacion.png";
import tecnicaPomodoro from "../../assets/cronografo.png";
import traductor from "../../assets/traductor.png";

export const projectsData = [
  {
    id: 1,
    image: calculadora,
    title: "Calculadora - React",
    category: ["front End", "destacados"],
    link: "https://codepen.io/jaragones/full/XWyQKrP",
    description:
      "Esta calculadora web interactiva ha sido construida utilizando React y JavaScript para realizar operaciones matemáticas básicas. Puedes realizar sumas, restas, multiplicaciones, divisiones y más con facilidad. La calculadora muestra tanto la expresión matemática completa como el resultado en tiempo real en su pantalla.",
    languajes: ["CSS", "HTML", "JavaScript", "React.js"],
  },
  {
    id: 2,
    image: tecnicaPomodoro,
    title: "Reloj Pomodoro - React",
    category: ["front End", "destacados"],
    link: "https://codepen.io/jaragones/full/NWEmErj",
    description:
      "Este proyecto implementa un temporizador Pomodoro con una duración configurable de sesiones y pausas. Los usuarios pueden ajustar la longitud de las sesiones y las pausas, iniciar, pausar y reiniciar el temporizador, y recibir una señal de alarma al final de cada ciclo. Es una herramienta útil para gestionar el tiempo y mejorar la productividad en tareas y actividades diarias.",
    languajes: ["CSS", "HTML", "JavaScript", "React.js"],
  },
  {
    id: 3,
    image: microservicios,
    title: "Microservicios - Node.js",
    category: ["back", "otros", "destacados"],
    link: "../work/microservicios.jsx",
    description:
      "Estos proyectos exploraron el desarrollo back-end y la creación de APIs, utilizando tecnologías como Node.js, Express.js, MongoDB y Mongoose. Se crearon cinco microservicios distintos, cada uno con su funcionalidad única, consolidando así habilidades en el ámbito del desarrollo back-end y API.",
    languajes: ["Express.js", "JavaScript", "Mongoose", "MongoDB", "Node.js"],
  },
  {
    id: 4,
    image: sudoku,
    title: "Resolutor de Sudoku - Node.js",
    category: ["full stack", "destacados", "testing"],
    link: "https://boilerplate-project-sudoku-solver.javieraragones.repl.co/",
    description:
      "Aplicación Full Stack que resuelve y valida puzzles de Sudoku, ofreciendo a los usuarios una forma sencilla de interactuar con estos desafiantes rompecabezas. La aplicación ha sido sometida a pruebas exhaustivas utilizando Chai para garantizar su funcionamiento correcto.",
    languajes: ["Chai", "Express.js", "JavaScript", "Node.js"],
  },
  {
    id: 5,
    image: problema,
    title: "Rastreador de Problemas - Node.js",
    category: ["full stack", "destacados", "testing"],
    link: "https://boilerplate-project-issuetracker.javieraragones.repl.co/",
    description:
      "Aplicación que gestiona problemas o incidencias en proyectos específicos. Permite a los usuarios agregar, actualizar, eliminar y obtener información detallada sobre problemas. La aplicación utiliza una base de datos MongoDB y se ha sometido a pruebas con Chai para garantizar su funcionamiento correcto.",
    languajes: [
      "Chai",
      "Express.js",
      "JavaScript",
      "Mongoose",
      "MongoDB",
      "Node.js",
      "npm",
    ],
  },
  {
    id: 6,
    image: traductor,
    title: "Traductor Americano/Británico",
    category: ["full stack", "destacados", "testing"],
    link: "https://boilerplate-project-american-british-english-translator.javieraragones.repl.co/",
    description:
      "La aplicación permite la traducción entre inglés británico e inglés americano. Utiliza reglas y diccionarios para identificar y reemplazar palabras, así como para ajustar formatos de tiempo. Los usuarios pueden ingresar texto en inglés y elegir su preferencia de localización para obtener una traducción adecuada, con resaltado de las diferencias. La aplicación se ha probado exhaustivamente con Chai para garantizar su funcionamiento correcto.",
    languajes: ["Chai", "Express.js", "JavaScript", "Node.js"],
  },
];

export const projectsNav = [
  {
    name: "destacados",
  },
  {
    name: "full stack",
  },
  {
    name: "front End",
  },
  {
    name: "otros",
  },
  {
    name: "todo",
  },
];
