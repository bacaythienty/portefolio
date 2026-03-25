import profil from "../assets/images/proj6.jpeg";
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";


function About() {
  return (
    <section id="about" className="about">
      <h2>À Propos</h2>

      <div className="about-content">
        <img src={profil} alt="Bacary Thienty" className="about-img" />

        <div className="about-info">
          <h3>Designer & Développeur Web & Mobile Freelance</h3>

          <p>
            Je suis Bacary Thienty, passionné par le développement web et mobile. 
            Je crée des sites modernes et des applications performantes, en utilisant les technologies suivantes :
          </p>

          <h4>Compétences</h4>
          <ul className="skills">
            <li>HTML, CSS, PHP, JavaScript</li>
            <li>React, Bootstrap, Laravel</li>
            <li>Développement mobile avec React Native</li>
            <li>UI/UX Design & Prototypage</li>
            <li>Gestion de projet et Freelance</li>
          </ul>

          <h4>Informations</h4>
          <ul className="personal-info">
            <li><b>Birthday:</b> 05/08/2002</li>
            <li><b>Téléphone:</b> <FaPhone /> +221 77 935 46 78</li>
            <li><b>Ville:</b> Thiès</li>
            <li><b>Email:</b> <FaEnvelope /> bacarythienty803@gmail.com</li>
          </ul>

          <div className="social-links">
            <a href="https://github.com/bacarythienty" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://linkedin.com/in/bacarythienty" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;