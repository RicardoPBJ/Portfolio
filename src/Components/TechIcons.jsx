import "../Styles/TechIcons.css";
import { IconRender, TechIconsArr } from "../helpers";

function TechIcons() {
  return (
    <main className="icons-list">
      {TechIconsArr.map(({ icon, name }) => {
        return (
          <div className="icon-el">
            <IconRender icon={icon} size={50} />
            <div>{name}</div>
          </div>
        );
      })}
    </main>
  );
}

export default TechIcons;
