import { Footer, Header, ProjectsMold } from "../Components";
import backEndData from "../helpers/BackEndData.js";

export default function Backend() {
  return (
    <div>
      <Header  />
      <div>
        {
          ProjectsMold(backEndData)
        }
      </div>
      <Footer/>
    </div>
  );
}