import { Link } from "react-router-dom";
function Hero() {
  return (
    <section id="home" className="hero">
      <div className="overlay">
        <h1>BACKISS NABASSA</h1>
        <p>Je suis Developpeur Web et Mobile</p>
           
          <Link to="/Projects"> <button class="button">
              <div>
                <div>
                  <div>Voir Mes projects</div>
               </div>
              </div>
           </button></Link>

      </div>
    </section>
  );
}

export default Hero;