import { FaGithub, FaLinkedin } from 'react-icons/fa';

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
    <footer className="Footer">
      <h3 className="text-uppercase">Siga-me para saber mais do meu trabalho</h3>
      <div className="container">
        {linkIcon("https://github.com/RicardoPBJ", <FaGithub/>)}
        {linkIcon("https://www.linkedin.com/in/ricardo-pereira-dev/", <FaLinkedin/>)}
      </div>
    </footer>
  )
}