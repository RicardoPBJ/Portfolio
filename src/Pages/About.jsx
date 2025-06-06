import "../Styles/About.css";
import { aboutImage } from "../images";
import { Footer, Header, TechIcons } from "../Components";
import { Texts } from "../helpers";

export default function About() {
  const { about } = Texts;
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main>
        <section className="about-container">
          <img src={aboutImage} className="home-img" alt="aboutImage" />
          <div className="text-container">
            <h2>Vamos a uma introdução sobre mim</h2>
            <div className="about-texts">
              <p>{about.text1}</p>
              <p dangerouslySetInnerHTML={{ __html: about.text2 }} />
              <p>{about.text3}</p>
            </div>
            <TechIcons />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
