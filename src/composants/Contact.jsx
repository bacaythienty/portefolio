import { useState } from "react";
import toast from "react-hot-toast";

function Contact() {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // empêche le rechargement de la page
    toast.success(`Merci ${nom}, votre message a été envoyé !`);
    // Ici tu peux réinitialiser le formulaire
    setNom("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
}

export default Contact;