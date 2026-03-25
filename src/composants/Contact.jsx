import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";


function Contact() {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(`Merci ${nom}, votre message a été envoyé !`);

    setNom("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="contact">
      <Toaster position="top-right" />

      <h2>Contactez-moi</h2>

      <div className="contact-container">

        {/* INFOS */}
        <div className="contact-info">
          <h3>Discutons de votre projet 👋</h3>
          <p>
            Vous avez un projet web ou mobile ? Je suis disponible pour collaborer
            avec vous et créer des solutions modernes et performantes.
          </p>

          <div className="info-item">
            <FaPhone /> <span>+221 77 935 46 78</span>
          </div>

          <div className="info-item">
            <FaEnvelope /> <span>bacarythienty803@gmail.com</span>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt /> <span>Thiès, Sénégal</span>
          </div>
        </div>

        {/* FORMULAIRE */}
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            placeholder="Votre nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Votre email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <textarea
            placeholder="Votre message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>

          <button type="submit">Envoyer le message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;