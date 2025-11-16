// src/components/About/About.jsx
import "./About.css";

export const About = () => {
  return (
    <section id="sobre-mi" className="section">
      <h2 className="section-title">Sobre mí</h2>
      <p className="section-text">
        Soy desarrollador web con foco en interfaces limpias, claras y
        responsivas. Disfruto trabajar con React, HTML, CSS, JavaScript,
        también juego con lenguajes como Python y hacer analisis de datos.
      </p>

      <div className="about-grid">
        <div className="about-card">
          <h3>Experiencia</h3>
          <p>
            He creado proyectos personales como sitios de radio online, diarios
            digitales y herramientas interactivas para lectura y estudio.
          </p>
        </div>
        <div className="about-card">
          <h3>Lo que busco</h3>
          <p>
            Oportunidades para construir productos web que aporten valor real a
            las personas, en equipos donde se combine tecnología y creatividad.
          </p>
        </div>
        <div className="about-card">
          <h3>Cómo trabajo</h3>
          <p>
            Código prolijo, comunicación clara y enfoque iterativo: mejorar
            un poco en cada versión, escuchando feedback.
          </p>
        </div>
      </div>
    </section>
  );
};