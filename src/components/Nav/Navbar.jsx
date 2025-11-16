// src/components/Nav/Navbar.jsx
import "./Navbar.css";
import logo from "../../../public/Image/Logo.png"; // ⬅️ ajustá la ruta si tu logo está en otro lado

export const Navbar = () => {
  return (
    <header className="nav">
      {/* Logo que lleva al inicio */}
      <a href="#inicio" className="nav-logo" aria-label="Ir al inicio">
        <img src={logo} alt="Logo de la página" />
      </a>

      <nav className="nav-links">
        <a href="#sobre-mi">Sobre mí</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#skills">Skills</a>
        <a href="#logros">Logros</a>
        <a href="#contacto">Contacto</a>
      </nav>
    </header>
  );
};
