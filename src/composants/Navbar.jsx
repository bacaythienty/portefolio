import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png"; // <-- ton image de logo

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen(!open);

  return (
    <>
      {/* Logo */}
      

      {/* Hamburger */}
      <div className={`menu-btn ${open ? "open" : ""}`} onClick={handleToggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Overlay */}
      <div className={`menu-overlay ${open ? "active" : ""}`} onClick={handleToggle}></div>

      {/* Navbar */}
      <nav className={`navbar ${open ? "active" : ""}`}>
        
        <div className="logo">
        <NavLink to="/">
          <img src={logo} alt="Bacary Thienty Logo" style={{ width: "50px", borderRadius: "50%" }} />
        </NavLink>
      </div>
      <ul>
          <li><NavLink to="/">Accueil</NavLink></li>
          <li><NavLink to="/about">À propos</NavLink></li>
          <li><NavLink to="/projects">Projets</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
      
    </>
  );
}