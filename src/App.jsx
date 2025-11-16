// src/App.jsx
import "./App.css";

import { Navbar } from "./components/Nav/Navbar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Projects } from "./components/Proyectos/Projects";
import { Skills } from "./components/Habilidades/Skills";
import { Contact } from "./components/Contacto/Contact";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
