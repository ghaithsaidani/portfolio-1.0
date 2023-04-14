import { Card } from "./projectcard/ProjectCard";
import {
  android,
  angular,
  e_commerce,
  expressJs,
  firebase,
  hotel,
  java,
  mongoDb,
  municipality,
  mySql,
  nodeJs,
  oracle,
  reactJs,
  springBoot,
  tennisApp,
} from "../../../../assets/images";
import { ProjectsSwiper } from "./swiper/ProjectsSwiper";
import { useMediaQuery, useTheme } from "@mui/material";

export const ProjectsArticle = () => {
  const myprojects: Card[] = [
    {
      title: "Desktop application for Municipality management",
      usedTechs: [
        {
          src: java,
          alt: "Java",
        },
        {
          src: oracle,
          alt: "Oracle",
        },
      ],
      date: 2021,
      img: {
        src: municipality,
        alt: "application for Municipality management",
      },
      link: "https://github.com/ghaithsaidani/Municipality-management",
    },
    {
      title: "E-Commerce android application",
      usedTechs: [
        {
          src: android,
          alt: "Android",
        },
        {
          src: firebase,
          alt: "Firebase",
        },
      ],
      date: 2021,
      img: { src: e_commerce, alt: "E-Commerce application" },
      link: "https://github.com/ghaithsaidani/E-commerce_Android_App",
    },
    {
      title: "Complaints management of an Hotel",
      usedTechs: [
        {
          src: angular,
          alt: "Angular",
        },
        {
          src: springBoot,
          alt: "SpringBoot",
        },
        {
          src: mySql,
          alt: "MySql",
        },
      ],
      date: 2022,
      img: { src: hotel, alt: "Complaints management app of an Hotel" },
      link: "https://github.com/ghaithsaidani/complaints-management-for-a-hotel/tree/main/WEB",
    },
    {
      title: "Web application for Tennis Club",
      usedTechs: [
        {
          src: mongoDb,
          alt: "MongoDB",
        },
        {
          src: expressJs,
          alt: "ExpressJs",
        },
        {
          src: reactJs,
          alt: "ReactJs",
        },
        {
          src: nodeJs,
          alt: "NodeJs",
        },
      ],
      date: 2022,
      img: { src: tennisApp, alt: "application for Tennis Club" },
      link: "https://github.com/ghaithsaidani/Tennis-marsa",
    },
  ];
  const theme = useTheme();
  const query = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <article>
      {query ? (
        <div className="projects">
          <ProjectsSwiper projects={myprojects} />
        </div>
      ) : (
        <div className="projects">
          <ProjectsSwiper projects={myprojects.slice(0, 2)} />
          <ProjectsSwiper projects={myprojects.slice(2, 4)} />
        </div>
      )}
    </article>
  );
};
