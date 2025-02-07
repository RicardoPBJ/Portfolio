import "../Styles/projectStyle.css";

function ProjectsMold(mold) {
  return (
    mold.map(({lngName, icon, projects}) => {
      return <div className="project">
        <div className="list-title">
          <h3>{ lngName }</h3>
          <span>{ icon }</span>
        </div>
        <ul className="prjct-list">
          {
            projects.map(({ name, url }) => {
              return <li key={ name } className="list-unstyled">
                <a href={ url } target="_blank" rel="noreferrer" className="prjct-item">{ name }</a></li>
            })
          }
        </ul>
      </div>
    })
  );
}

export default ProjectsMold;