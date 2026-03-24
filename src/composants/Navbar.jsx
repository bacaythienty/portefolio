import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen(!open);

  const handleLinkClick = (id) => {
    setOpen(false); // ferme le menu mobile
    if(id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" }); // revient en haut
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
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
        <ul>
          <li><a onClick={() => handleLinkClick("home")}>Accueil</a></li>
          <li><a onClick={() => handleLinkClick("about")}>À propos</a></li>
          <li><a onClick={() => handleLinkClick("projects")}>Projets</a></li>
          <li><a onClick={() => handleLinkClick("contact")}>Contact</a></li>
        </ul>
      </nav>
    </>
  );
}