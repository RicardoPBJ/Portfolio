import "../Styles/NavBar.css"
import { Link } from 'react-router-dom';
import { useState } from "react";

export default function NavBar(path) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <nav className="color-deco nav-class d-flex align-items-right">
      <Link to="/">Home</Link>
      <Link to="/about">Sobre</Link>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Projetos
        {isHovered ?  <section className="projects shadow-box upAnime">
          <div className="color-deco p-2-b">
            <Link to="/frontend">Front-End</Link>
          </div>
          <hr />
          <div className="color-deco p-2-t">
            <Link to="/backend">Back-End</Link>
          </div>
        </section> : null}
      </div>
    </nav>
  )
}