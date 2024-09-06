import "../Styles/Header.css"
import { NavBar, MobileNavBar } from "./";
import { useNavigate } from "react-router-dom";
import { logo } from "../images";

function Header() {

  const history = useNavigate();

  return (
    <div className="header-container">
      <div className="link-logo">
        <div className="header-logo" onClick={() => history("/")}>
          <img src={logo} alt="logo" />
          <span>Ricardo Pereira</span>
        </div>
      </div>
      <NavBar />
      <MobileNavBar />
    </div>
  );
}

export default Header;