import { useState } from "react";
import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* BOUTON HAMBURGER */}
      <div
        className={`menu-btn ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* OVERLAY */}
      <div
        className={`overlay ${open ? "active" : ""}`}
        onClick={() => setOpen(false)}
      ></div>

      {/* NAVBAR */}
      <nav className={`navbar ${open ? "active" : ""}`}>
        <h2>
          <img src={logo} alt="logo" className="logo" />
        </h2>

        <ul>
          <li><NavLink to="/" onClick={() => setOpen(false)}>Accueil</NavLink></li>
          <li><NavLink to="/about" onClick={() => setOpen(false)}>À propos</NavLink></li>
          <li><NavLink to="/projects" onClick={() => setOpen(false)}>Projets</NavLink></li>
          <li><NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink></li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;