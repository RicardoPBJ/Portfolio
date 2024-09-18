import "../Styles/Home.css";
import { Footer, Header } from "../Components";
import { homeImage } from "../images";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main>
        <div className="container home-container">
          <div className="container home-text">
            <div className="normal-screen-text">
              <h3>Olá!</h3>
              <h1>Eu sou o</h1>
            </div>
            <div className="small-screen-text">
              <h3>Olá, eu sou o</h3>
            </div>
            <h1>Ricardo Pereira</h1>
            <h5>Desenvolvedor Web FullStack.</h5>
          </div>
          <section className="container small-screen-btns">
            <Link to="/frontend">
              <span className="prjt-link">Front-End</span>
            </Link>
            <Link to="/backend">
              <span className="prjt-link">Back-End</span>
            </Link>
            <Link to="/about">
              <span className="about-link">Sobre</span>
            </Link>
          </section>
          <img src={homeImage} alt="homeigm" className="home-img" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
