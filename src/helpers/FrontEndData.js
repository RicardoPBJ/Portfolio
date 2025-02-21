import IconRender from "./IconRender";
import { GrReactjs } from "react-icons/gr";
import { TbBrandNextjs } from "react-icons/tb";

const frontEndData = [
  {
    lngName: "Next",
    icon: <IconRender icon={TbBrandNextjs} size={30} />,
    projects: [{ name: "Vemynd", url: "https://vemynd.vercel.app/" }],
  },
  {
    lngName: "React",
    icon: <IconRender icon={GrReactjs} size={30} />,
    projects: [
      { name: "Trivia", url: "https://trivia-react-redux-pied.vercel.app/" },
      {
        name: "Testes em React",
        url: "https://react-testing-library-indol.vercel.app/",
      },
      {
        name: "Recipes App",
        url: "https://recipes-app-gamma-snowy.vercel.app/",
      },
      {
        name: "Front-end online store",
        url: "https://frontend-online-store-rho.vercel.app/",
      },
      {
        name: "Trybe Wallet",
        url: "https://trybe-wallet-iota-woad.vercel.app/",
      },
      {
        name: "Star Wars Context and Hooks",
        url: "https://github.com/RicardoPBJ/starwars_planets_search",
      },
    ],
  },
];
export default frontEndData;
