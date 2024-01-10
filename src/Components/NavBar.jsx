import "../Styles/NavBar.css"
import { Link } from 'react-router-dom';
import { useState } from "react";

export default function NavBar(path) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <nav className="nav-class d-flex align-items-right">
      <Link to="/">Home</Link>
      <Link to="/about">Sobre</Link>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Projetos
        {isHovered ?  <div className="hidden-buttons">
          <Link to="/frontend">Front End</Link>
          <Link to="/backend">Back End</Link>
        </div> : null}
      </div>
    </nav>
  )
}