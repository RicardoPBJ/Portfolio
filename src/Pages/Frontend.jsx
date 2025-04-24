import { Footer, Header, ProjectsMold } from "../Components";
import frontEndData from "../helpers/FrontEndData.js";

export default function Frontend() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <div>{ProjectsMold(frontEndData, true)}</div>
      <Footer />
    </div>
  );
}
