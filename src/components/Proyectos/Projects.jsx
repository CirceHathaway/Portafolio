// src/components/Proyectos/Projects.jsx
import { useState } from "react";
import "./Projects.css";

const projects = [
  {
    title: "Panaderia Cara de Alfajor Relleno",
    description:
      "Sitio web para E-commerce con uso de API propio y modo administrador.",
    tech: ["React", "JavaScript", "CSS", "HTML"],
    link: "https://mi-ecommercereact.netlify.app/",
  },
  {
    title: "Mi Biblia",
    description:
      "Aplicación web para leer la Biblia con buscador, selector de capítulos y diseño responsive.",
    tech: ["HTML", "JavaScript", "CSS"],
    link: "https://circehathaway.github.io/biblia.digital",
  },
  {
    title: "Radio Digital Nueva Vida",
    description:
      "Sitio de radio online con reproductor, integración con redes sociales y diseño moderno.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://circehathaway.github.io/radio.digital.nueva.vida",
  },
  {
    title: "Mi E-commerce",
    description:
      "E-commerce web app con productos de DummyJSON API, carrito persistente en localStorage, formulario de contacto via Formspree y reseñas de clientes.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://circehathaway.github.io/Mi_E-commerce",
  },
  {
    title: "El Diario Digital",
    description:
      "Diario digital estilo portal de noticias, con secciones y notas destacadas.",
    tech: ["React", "CSS", "Responsive"],
    link: "https://circehathaway.github.io/mi.diario.digital/index.html",
  },
];

export const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  const hasMoreProjects = projects.length > 3;

  return (
    <section id="proyectos" className="section">
      <h2 className="section-title">Proyectos destacados</h2>
      <p className="section-text">
        Algunos de los proyectos en los que he trabajado recientemente:
      </p>

      <div className="projects-grid">
        {visibleProjects.map((project) => (
          <article key={project.title} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <ul className="project-tech">
              {project.tech.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <a
              href={project.link}
              className="project-link"
              target="_blank"
              rel="noreferrer"
            >
              Ver proyecto ↗
            </a>
          </article>
        ))}
      </div>

      {hasMoreProjects && (
        <div className="projects-actions">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => setShowAll((prev) => !prev)}
          >
            {showAll ? "Ver menos" : "Ver más proyectos"}
          </button>
        </div>
      )}
    </section>
  );
};
