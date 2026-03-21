import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2><img src={logo} alt="logo" className="logo" /></h2>

      <ul>
        <li>
          <NavLink to="/">Accueil</NavLink>
        </li>
        <li>
          <NavLink to="/about">À propos</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projets</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;