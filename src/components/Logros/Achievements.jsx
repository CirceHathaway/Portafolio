// src/components/Logros/Achievements.jsx
import "./Achievements.css";

export const Achievements = () => {
  return (
    <section id="logros" className="section">
      <h2 className="section-title">Logros</h2>

      <div className="achievements-grid">
        <div className="achievements-card">
          <h3> Curso de Front - End JS en TalentoTech.</h3>
          <p>
            El curso tiene como objetivo proporcionar a los estudiantes una
            base sólida en HTML, CSS y JS + frameworks para crear interfaces modernas, 
            interactivas y accesibles. Responde a la alta demanda laboral en desarrollo web.
          </p>
          <a
              href="https://drive.google.com/file/d/1CAkJLKhC3XIfNxSV0jyMOmArvxczwaTl/view?usp=drive_link"
              className="project-link"
              target="_blank"
              rel="noreferrer"
            >
              Ver certificado ↗
            </a>
        </div>
        <div className="achievements-card">
          <h3>Curso de React JS en TalentoTech</h3>
          <p>
            El curso tiene como objetivo proporcionar a los estudiantes los
            conocimientos y habilidades necesarios para desarrollar aplicaciones web
            interactivas utilizando ReactJS para la creación de un proyecto funcional, 
            como un e-commerce, que integre la gestión de estado, autenticación de usuarios, 
            CRUD de productos, y rutas protegidas.
          </p>
          
        </div>
        <div className="achievements-card">
          <h3>Curso Big Data y Base de Datos en Fundación Movistar</h3>
          <p>
            El curso tiene como objetivo proporcionar a los estudiantes los
            conocimientos y habilidades necesarios para dominar SQL + Python + Big Data concepts y 
            poder extraer, limpiar y analizar datos reales.
          </p>
          <a
              href="https://drive.google.com/file/d/1MoAUS0MBpdgR14H_KCexnkxifAnq04RA/view?usp=drive_link"
              className="project-link"
              target="_blank"
              rel="noreferrer"
            >
              Ver certificado ↗
            </a>
        </div>
      </div>
    </section>
  );
};