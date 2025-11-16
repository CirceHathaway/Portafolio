// src/components/Habilidades/Skills.jsx
import "./Skills.css";

export const Skills = () => {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills</h2>

      <div className="skills-grid">
        <div className="skills-group">
          <h3>Frontend</h3>
          <ul>
            <li>React</li>
            <li>HTML5 / CSS3</li>
            <li>JavaScript (ES6+)</li>
            <li>Responsive Design</li>
          </ul>
        </div>
        <div className="skills-group">
          <h3>Backend / Datos</h3>
          <ul>
            <li>Node.js (básico)</li>
            <li>APIs REST</li>
            <li>Python para análisis de datos</li>
          </ul>
        </div>
        <div className="skills-group">
          <h3>Herramientas</h3>
          <ul>
            <li>Git y GitHub</li>
            <li>VS Code</li>
            <li>Figma / diseño básico</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
