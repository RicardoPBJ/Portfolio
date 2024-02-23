import { Footer, NavBar, ProjectsMold } from "../Components";
import backEndData from "../helpers/BackEndData.js";

export default function Backend() {
  return (
    <div className="home">
      <NavBar/>
      <h1>Backend</h1>
      <div>
        {
          ProjectsMold(backEndData)
        }
      </div>
      <Footer/>
    </div>
  );
}