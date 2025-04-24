import { Footer, Header, ProjectsMold } from "../Components";
import backEndData from "../helpers/BackEndData.js";

export default function Backend() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <div>{ProjectsMold(backEndData, false)}</div>
      <Footer />
    </div>
  );
}
