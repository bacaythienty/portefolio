import { Link } from "react-router-dom";
import heroImg from "../assets/images/bacs.png"; // ton image


function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-container">

        {/* TEXTE */}
        <div className="hero-text">
          <h1>
            Bonjour, je suis <span>BACKISS NABASSA</span>
          </h1>

          <p>Développeur Web & Mobile Freelance</p>

          <Link to="/projects">
            <button className="hero-btn">
              Voir mes projets
            </button>
          </Link>
        </div>

        {/* IMAGE */}
        <div className="hero-image">
          <img src={heroImg} alt="profil" />
        </div>

      </div>

    </section>
  );
}

export default Hero;