import IconRender from "./IconRender";
import { GrReactjs } from "react-icons/gr";
import { TbBrandNextjs } from "react-icons/tb";

const frontEndData = [
  {
    lngName: "Next",
    icon: <IconRender icon={TbBrandNextjs} size={30} />,
    projects: [
      { name: "Vemynd", url: "https://vemynd.vercel.app/", gitUrl: "" },
    ],
  },
  {
    lngName: "React",
    icon: <IconRender icon={GrReactjs} size={30} />,
    projects: [
      {
        name: "Trivia",
        url: "https://trivia-react-redux-pied.vercel.app/",
        gitUrl: "",
      },
      {
        name: "Testes em React",
        url: "https://react-testing-library-indol.vercel.app/",
        gitUrl: "",
      },
      {
        name: "Recipes App",
        url: "https://recipes-app-gamma-snowy.vercel.app/",
        gitUrl: "",
      },
      {
        name: "Front-end online store",
        url: "https://frontend-online-store-rho.vercel.app/",
        gitUrl: "",
      },
      {
        name: "Trybe Wallet",
        url: "https://trybe-wallet-iota-woad.vercel.app/",
        gitUrl: "",
      },
      {
        name: "Star Wars Context and Hooks",
        url: "https://github.com/RicardoPBJ/starwars_planets_search",
        gitUrl: "",
      },
    ],
  },
];
export default frontEndData;
