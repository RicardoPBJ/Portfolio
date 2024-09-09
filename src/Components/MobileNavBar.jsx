import "../Styles/MobileNavBar.css"
import { Link } from "react-router-dom";
import { IconRender }from "../helpers"
import { FiAlignJustify } from "react-icons/fi";
import { useState } from "react";

function MobileNavBar() {
  const [ isMenuOn, setIsMenuOn ] = useState(false);

  return (
    <main className="mob-nav">
      <button onClick={() => setIsMenuOn(!isMenuOn)}>
        <IconRender icon={FiAlignJustify} size={55} />
      </button>
      {isMenuOn && <nav className="mob-nav-menu">
        <ul className="menu-list">
          <li><Link to="/frontend">Front-End</Link></li>
          <li><Link to="/backend">Back-End</Link></li>
          <li><Link to="/about">Sobre</Link></li>
        </ul>
      </nav>}
    </main>
  )
};

export default MobileNavBar;