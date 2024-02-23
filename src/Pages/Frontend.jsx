import { Footer, NavBar, ProjectsMold } from "../Components";
import frontEndData from "../helpers/FrontEndData.js";

export default function Frontend() {
  return (
    <div>
      <NavBar/>
      <h1>Frontend</h1>
      <div>
        {
          ProjectsMold(frontEndData)
        }
      </div>
      <Footer/>
    </div>
  );
}