import { useState } from "react";
import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2>
        <img src={logo} alt="logo" className="logo" />
      </h2>

      {/* Bouton menu mobile */}
      <div className="menu-toggle" onClick={() => setOpen(!open)}>
        ☰
      </div>

      <ul className={open ? "nav-links active" : "nav-links"}>
        <li><NavLink to="/">Accueil</NavLink></li>
        <li><NavLink to="/about">À propos</NavLink></li>
        <li><NavLink to="/projects">Projets</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;