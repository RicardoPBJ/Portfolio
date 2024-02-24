import { Footer, Header } from "../Components";
import { homeImage } from '../images';

export default function Home() {
  return (
    <div className="">
      <Header/>
      <main>
        <div className="d-flex">
          <div className="container">
            <h3 className="text-uppercase">Olá</h3>
            <h1 className="text-uppercase">Eu sou o Ricardo Pereira</h1>
            <h5 className="text-uppercase">Desenvolvedor Junior FullStack</h5>
          </div>
          <img src={homeImage} alt="homeigm" width='300'/>
        </div>
      </main>
      <Footer/>
    </div>
  );
}