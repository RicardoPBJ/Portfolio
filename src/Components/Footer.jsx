import "../Styles/Footer.css"
import { FaGithub, FaLinkedin, FaWhatsappSquare } from 'react-icons/fa';

export default function Footer() {
  const linkIcon = (link, icon) => {
    return (
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        {icon}
      </a>
    )
  }
  return (
    <footer className="footer">
      <h4  className="text-uppercase">Siga-me para saber mais do meu trabalho</h4>
      <span>Email: rbrumjunio@gmail.com</span>
      <div className="footer-icons">
        {linkIcon("https://wa.me/qr/P2CKMBS3GLO7M1", <FaWhatsappSquare />)}
        {linkIcon("https://github.com/RicardoPBJ", <FaGithub/>)}
        {linkIcon("https://www.linkedin.com/in/ricardo-pereira-dev/", <FaLinkedin/>)}
      </div>
    </footer>
  )
}