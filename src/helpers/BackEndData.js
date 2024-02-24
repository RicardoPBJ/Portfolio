import {
  TbBrandTypescript,
  TbBrandCSharp,
  TbBrandPython,
} from "react-icons/tb";
import IconRender from "./IconRender";

const backEndData = [
  {
    lngName: "Typescript",
    icon: <IconRender icon={TbBrandTypescript} size={30} />,
    projects: [
      {
        name: "Trybe Futebol Clube",
        url: "https://github.com/RicardoPBJ/Projeto_Trybe_Futebol_Clube",
      },
      {
        name: "Tryber and Dragons",
        url: "https://github.com/RicardoPBJ/trybers-and-dragons",
      },
      { name: "Blogs Api", url: "https://github.com/RicardoPBJ/blogs-api" },
    ],
  },
  {
    lngName: "Csharp",
    icon: <IconRender icon={TbBrandCSharp} size={30} />,
    projects: [
      { name: "Trybets", url: "https://github.com/RicardoPBJ/trybets" },
      { name: "Trybe Hotel", url: "https://github.com/RicardoPBJ/trybe_hotel" },
      { name: "Trybe Games", url: "https://github.com/RicardoPBJ/trybe-games" },
    ],
  },
  {
    lngName: "Python",
    icon: <IconRender icon={TbBrandPython} size={30} />,
    projects: [
      {
        name: "Restaurant Orders",
        url: "https://github.com/RicardoPBJ/Projeto_Restaurant_orders",
      },
      { name: "TING", url: "https://github.com/RicardoPBJ/ting" },
      { name: "Algoritimos", url: "https://github.com/RicardoPBJ/algoritimos" },
    ],
  },
];
export default backEndData;
