import "../Styles/About.css"
import { aboutImage } from '../images';
import { Footer, Header } from "../Components";
import { Texts } from "../helpers";

export default function About() {
  const { about } = Texts
  return (
    <div className="about">
      <Header />
      <main>
        <section className="about-container">
          <img src={aboutImage}  className="home-img" alt='aboutImage' />
          <div className="text-container">
            <h2>Vamos a uma introdução sobre mim</h2>
            <div className="about-texts">
              <p>{about.text1}</p>
              <p>{about.text2}</p>
              <p>{about.text3}</p>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
}