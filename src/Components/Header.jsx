import "../Styles/Header.css"
import { NavBar } from "./";

function Header({title}) {
  return (
    <div className="header-container">
      <NavBar />
    </div>
  );
}

export default Header;