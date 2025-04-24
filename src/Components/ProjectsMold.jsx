import "../Styles/projectStyle.css";
import { BsGithub } from "react-icons/bs";
import { IconRender } from "../helpers";
import React, { useState, useEffect } from "react";

function ProjectsMold(mold, isFrontend) {
  const [larguraTela, setLarguraTela] = useState(window.innerWidth);
  const [tamanhoGitIcone, setTamanhoGitIcone] = useState("");

  useEffect(() => {
    const lidarComRedimensionamento = () => {
      setLarguraTela(window.innerWidth);
    };

    window.addEventListener("resize", lidarComRedimensionamento);

    // Limpeza do listener quando o componente for desmontado
    return () => {
      window.removeEventListener("resize", lidarComRedimensionamento);
    };
  }, []); // O array de dependências vazio garante que o efeito rode apenas na montagem e desmontagem

  useEffect(() => {
    if (larguraTela < 768) {
      setTamanhoGitIcone(12);
    } else if (larguraTela <= 1368) {
      setTamanhoGitIcone(17);
    } else {
      setTamanhoGitIcone(27);
    }
  }, [larguraTela]); // Roda sempre que a larguraTela mudar

  return mold.map(({ lngName, icon, projects }) => {
    return (
      <div className="project">
        <div className="list-title">
          <h3>{lngName}</h3>
          <span>{icon}</span>
        </div>
        <ul className="prjct-list">
          {projects.map(({ name, url, gitUrl }) => {
            return (
              <li key={name} className="list-unstyled">
                <div className="link-container d-flex justify-content-between">
                  <button
                    onClick={() => window.open(url, "_blank")}
                    className="website-button link-hover ws-scale"
                  >
                    {name}
                  </button>
                  {isFrontend && (
                    <button
                      onClick={() => window.open(gitUrl, "_blank")}
                      className="github-button link-hover git-scale"
                    >
                      <div className=" d-flex flex-column align-items-center">
                        <IconRender icon={BsGithub} size={tamanhoGitIcone} />
                        Github
                      </div>
                    </button>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  });
}

export default ProjectsMold;
