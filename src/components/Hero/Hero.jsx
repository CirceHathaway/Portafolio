// src/components/Hero/Hero.jsx
import "./Hero.css";

export const Hero = () => {
  return (
    <section className="hero" id="inicio">
      <div className="hero-content">
        <p className="hero-greeting">Hola, soy</p>
        <h1 className="hero-title">Esteban Gatica</h1>
        <p className="hero-subtitle">Desarrollador web & creador digital</p>
        <p className="hero-text">
          Me encanta construir experiencias digitales: webs, apps y herramientas
          interactivas, cuidando tanto el código como el diseño.
        </p>

        <div className="hero-buttons">
          <a href="#proyectos" className="btn btn-primary">
            Ver proyectos
          </a>
          <a href="#contacto" className="btn btn-secondary">
            Contactarme
          </a>

          <a
                href="https://github.com/CirceHathaway"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="social-link github"
                title="GitHub"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="icon"
                  aria-hidden="true"
                  focusable="false"
                >
                  {/* círculo de fondo */}
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  {/* símbolo simple de código </> */}
                  <path
                    d="M9 9.5L6.5 12 9 14.5M15 9.5L17.5 12 15 14.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <line
                    x1="11"
                    y1="8.5"
                    x2="13"
                    y2="15.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="social-link linkedin"
                title="LinkedIn"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="icon"
                  aria-hidden="true"
                  focusable="false"
                >
                  {/* recuadro */}
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="3"
                    ry="3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  {/* barra izquierda */}
                  <rect x="7" y="10" width="2" height="7" rx="1" ry="1" />
                  {/* círculo arriba izquierda */}
                  <circle cx="8" cy="7" r="1.2" />
                  {/* barra derecha + techo curvo */}
                  <path d="M15 10c-1.4 0-2.3.9-2.3 2.5V17h2.1v-3.7c0-.7.4-1.2 1.1-1.2.7 0 1.1.5 1.1 1.2V17H19v-4c0-1.6-.9-3-2.7-3z" />
                </svg>
              </a>
        </div>
      </div>

      <div className="hero-avatar">
        <div className="avatar-circle">
          <span>EG</span>
        </div>
      </div>
    </section>
  );
};