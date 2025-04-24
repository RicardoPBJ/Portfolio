import "../Styles/projectStyle.css";
import FrontListRender from "./FrontListRender";

function ProjectsMold(mold, isFrontend) {
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
                {isFrontend ? (
                  FrontListRender(name, url, gitUrl)
                ) : (
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="prjct-item link-hover ws-scale link-container"
                  >
                    {name}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    );
  });
}

export default ProjectsMold;
