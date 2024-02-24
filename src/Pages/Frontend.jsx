import { Footer, Header, ProjectsMold } from "../Components";
import frontEndData from "../helpers/FrontEndData.js";

export default function Frontend() {
  return (
    <div>
      <Header />
      <div>
        {
          ProjectsMold(frontEndData)
        }
      </div>
      <Footer/>
    </div>
  );
}