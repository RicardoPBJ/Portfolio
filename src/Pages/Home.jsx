import "../Styles/Home.css"
import { Footer, Header } from "../Components";
import { homeImage } from '../images';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main>
        <div className="container home-container">
          <div className="container home-text">
            <h3>Olá!</h3>
            <h1>Eu sou o</h1>
            <h1>Ricardo Pereira.</h1>
            <h5>Desenvolvedor Web FullStack</h5>
          </div>
          <section className="container small-screen-btns">
            <div className="prjt-link">
              <Link to="/frontend">Front-End</Link>
            </div>
            <div className="prjt-link">
              <Link to="/backend">Back-End</Link>
            </div>
            <div className="about-link">
              <Link to="/about">Sobre</Link>
            </div>
          </section>
          <img src={homeImage} alt="homeigm" className="home-img"/> 
        </div>
      </main>
      <Footer/>
    </div>
  );
}