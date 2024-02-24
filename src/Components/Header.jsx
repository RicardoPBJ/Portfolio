import "../Styles/Header.css"
import { NavBar } from "./";
import { BsList } from "react-icons/bs";

function Header() {
  return (
    <div className="header-container">
      <BsList size={35}/>
      <NavBar />
    </div>
  );
}

export default Header;