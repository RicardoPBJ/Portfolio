import { Footer, NavBar } from "../Components";
import { Texts } from "../helpers";

export default function About() {
  const { about } = Texts
  return (
    <div className="about">
      <NavBar/>
      <main>
        <section className="d-flex flex-row">
          <img src='' alt='aboutImage' />
          <h1>Vamos a uma introdução sobre mim</h1>
          <div>
            <p>{about.text1}</p>
            <p>{about.text2}</p>
            <p>{about.text3}</p>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
}