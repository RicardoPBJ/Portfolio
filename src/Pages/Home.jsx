import "../Styles/Home.css"
import { Footer, Header } from "../Components";
import { homeImage } from '../images';

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <div className="container d-flex align-items-center">
          <div className="container home-text">
            <h3>Olá</h3>
            <h1>Eu sou o</h1>
            <h1>Ricardo Pereira</h1>
            <h5>Desenvolvedor Web FullStack</h5>
          </div>
          <img src={homeImage} alt="homeigm" className="home-img"/>
        </div>
      </main>
      <Footer/>
    </div>
  );
}