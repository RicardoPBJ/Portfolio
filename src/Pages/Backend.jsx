import { Footer, Header, ProjectsMold } from "../Components";
import backEndData from "../helpers/BackEndData.js";

export default function Backend() {
  return (
    <div className="home">
      <Header/>
      <div>
        {
          ProjectsMold(backEndData)
        }
      </div>
      <Footer/>
    </div>
  );
}