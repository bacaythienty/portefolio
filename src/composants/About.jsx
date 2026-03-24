import profil from "../assets/images/bacs2.png"
function About() {
  return (
    <section id="about" className="about">
      <h2>A Propos</h2>


      

      
      <div className="about-content">
        <img src={profil} alt="bacs2.jpg" />

        <div>
          <h3> Designer & Developpeur Web</h3>

          <ul>
            <li><b>Birthday:</b> 05/ 08/ 2002</li>
            <li><b>Telephone:</b> +221 77 935 46 78</li>
            <li><b>Ville:</b> Thiès</li>
            <li><b>Email:</b> bacarythienty803@gmail.com</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;