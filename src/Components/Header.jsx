import "../Styles/Header.css"
import { NavBar } from "./";
import { logo } from "../images";

function Header() {
  return (
    <div className="header-container">
      <div className="header-logo">
        <img src={logo} alt="logo" />
        <span>Ricardo Pereira</span>
      </div>
      <NavBar />
    </div>
  );
}

export default Header;