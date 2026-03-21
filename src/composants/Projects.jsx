import { useState } from "react";
import proj from "../assets/images/proj.png";
import proj1 from "../assets/images/proj1.png";
import proj2 from "../assets/images/proj2.png";
import proj3 from "../assets/images/proj3.png";
import proj4 from "../assets/images/proj4.png";

function Projects() {
  const [modalImage, setModalImage] = useState(null);

  const projets = [
    { id: 1, title: "Proj", image: proj },
    { id: 2, title: "Proj1", image: proj1 },
    { id: 3, title: "Proj2", image: proj2 },
    { id: 4, title: "Proj3", image: proj3 },
    { id: 5, title: "Proj4", image: proj4 },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Portfolio</h2>

      <div className="grid">
        {projets.map((proj) => (
          <div
            key={proj.id}
            className="card"
            onClick={() => setModalImage(proj.image)}
          >
            <img src={proj.image} alt={proj.title} />
            <div className="overlay">
              <h3>{proj.title}</h3>
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