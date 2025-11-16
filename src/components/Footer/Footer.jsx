// src/components/Footer/Footer.jsx
import "./Footer.css";

export const Footer = () => {
  return (
    <footer>
      <div id="footer" className="footer-inner">
        <p className="footer-brand">Página creada por CirceHathaway</p>

        <div className="footer-row">
          <small className="copy">
            © {new Date().getFullYear()} Todos los derechos reservados.
          </small>

          <ul className="socials" aria-label="Redes sociales">
            <li>
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
            </li>

            <li>
              <a
                href="https://wa.me/5491122334455"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="social-link whatsapp"
                title="WhatsApp"
              >
                <svg viewBox="0 0 24 24" className="icon" aria-hidden="true">
                  <path d="M20.52 3.48A11.94 11.94 0 0 0 12.06 0C5.47 0 .16 5.31.16 11.88c0 2.09.55 4.1 1.6 5.9L0 24l6.4-1.66a11.78 11.78 0 0 0 5.66 1.45h.01c6.59 0 11.9-5.31 11.9-11.88 0-3.19-1.25-6.2-3.46-8.43zM12.07 21.5h-.01a9.8 9.8 0 0 1-4.99-1.37l-.36-.21-3.8.99 1.02-3.7-.23-.38a9.87 9.87 0 0 1-1.53-5.15C2.17 6.43 6.5 2.12 12.06 2.12c2.63 0 5.1 1.02 6.96 2.87a9.72 9.72 0 0 1 2.89 6.89c0 5.45-4.44 9.62-9.84 9.62zm5.7-7.35c-.31-.16-1.83-.9-2.11-1-.29-.1-.49-.16-.7.16-.2.31-.8 1-.98 1.21-.18.21-.36.24-.67.08-.31-.16-1.3-.48-2.47-1.52-.91-.79-1.53-1.76-1.71-2.07-.18-.31-.02-.48.13-.64.13-.13.31-.36.47-.54.16-.19.21-.31.31-.52.1-.21.05-.39-.02-.54-.08-.16-.7-1.68-.96-2.29-.25-.6-.51-.52-.7-.52l-.6-.01c-.2 0-.52.07-.79.39-.27.31-1.04 1-1.04 2.45s1.07 2.84 1.22 3.04c.16.21 2.1 3.2 5.08 4.49.71.31 1.27.49 1.71.63.72.23 1.37.2 1.88.12.57-.08 1.83-.75 2.09-1.48.26-.73.26-1.35.18-1.48-.08-.13-.28-.21-.6-.37z" />
                </svg>
              </a>
            </li>

            <li>
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
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
