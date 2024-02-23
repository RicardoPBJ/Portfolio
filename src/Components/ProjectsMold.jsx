function ProjectsMold(mold) {
  return (
    mold.map(({lngName, projects}) => {
      return <div>
        <h3>{ lngName }</h3>
        <ul>
          {
            projects.map(({ name, url }) => {
              return <li key={ name }><a href={ url } target="_blank" rel="noreferrer">{ name }</a></li>
            })
          }
        </ul>
      </div>
    })
  );
}

export default ProjectsMold;