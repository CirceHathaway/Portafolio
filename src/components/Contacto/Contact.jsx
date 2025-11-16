// src/components/Contacto/Contact.jsx
import "./Contact.css";

export const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xvgdbkeb", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        alert("¡Gracias por tu mensaje! 😊");
        form.reset(); 
      } else {
        alert("Hubo un problema al enviar el mensaje. Intentá de nuevo más tarde.");
      }
    } catch (error) {
      console.error(error);
      alert("Error de conexión. Verificá tu internet e intentá nuevamente.");
    }
  };

  return (
    <section id="contacto" className="section">
      <h2 className="section-title">Contacto</h2>
      <p className="section-text">
        ¿Tenés una idea, proyecto o propuesta? Escribime y conversemos ✉️
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Tu nombre"
            required
          />
        </div>

        <div className="form-row">
          <label htmlFor="email">Correo</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="tu@email.com"
            required
          />
        </div>

        <div className="form-row">
          <label htmlFor="mensaje">Mensaje</label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows="4"
            placeholder="Contame sobre tu proyecto..."
            required
          ></textarea>
        </div>

        {/* opcional: asunto del correo */}
        <input
          type="hidden"
          name="_subject"
          value="Nuevo mensaje desde el portafolio"
        />

        <button type="submit" className="btn btn-primary">
          Enviar mensaje
        </button>
      </form>
    </section>
  );
};