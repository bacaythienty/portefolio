import { useState } from "react";
import proj from "../assets/images/proj.png";
import proj1 from "../assets/images/proj1.png";
import proj2 from "../assets/images/proj2.png";
import proj3 from "../assets/images/proj3.png";
import proj4 from "../assets/images/proj4.png";


function Projects() {
  const [modalImage, setModalImage] = useState(null);

  const projets = [
    { id: 1, title: "Figma aplication mobile", image: proj },
    { id: 2, title: "Application Mobile", image: proj1 },
    { id: 3, title: "Dashboard Admin", image: proj2 },
    { id: 4, title: "Design photo", image: proj3 },
    { id: 5, title: "Nabassa services CV", image: proj4 },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Mes Projets</h2>

      <div className="grid">
        {projets.map((p) => (
          <div
            key={p.id}
            className="card"
            onClick={() => setModalImage(p.image)}
          >
            <img src={p.image} alt={p.title} />

            <div className="overlay">
              <h3>{p.title}</h3>
              <button>Voir</button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalImage && (
        <div className="modal" onClick={() => setModalImage(null)}>
          <span className="close">&times;</span>
          <img className="modal-content" src={modalImage} alt="Projet" />
        </div>
      )}
    </section>
  );
}

export default Projects;