import { Stack, Typography } from "@mui/material";
import {
  Html,
  Css,
  Js,
  typeScript,
  sass,
  reactJs,
  java,
  git,
  github,
  figma,
  angular,
  clanguage,
  android,
  nodeJs,
  springBoot,
  expressJs,
  mongoDb,
  tailwind,
} from "../../../../assets/images";
import { Img } from "../../../../interfaces";

export const SkillsArticle = () => {
  const everydaySkills: Img[] = [
    {
      src: Html,
      alt: "HTML",
    },
    {
      src: Css,
      alt: "CSS",
    },
    {
      src: Js,
      alt: "JavaScript",
    },
    {
      src: typeScript,
      alt: "TypeScript",
    },
    {
      src: sass,
      alt: "Sass",
    },
    {
      src: reactJs,
      alt: "React Js",
    },
    {
      src: java,
      alt: "Java",
    },
    {
      src: git,
      alt: "Git",
    },
    {
      src: github,
      alt: "Github",
    },
    {
      src: figma,
      alt: "Figma",
    },
  ];

  //other techs
  const otherSkills: Img[] = [
    {
      src: angular,
      alt: "Angular",
    },
    {
      src: clanguage,
      alt: "C programming language",
    },
    {
      src: android,
      alt: "Android",
    },
    {
      src: nodeJs,
      alt: "Node Js",
    },
    {
      src: springBoot,
      alt: "Spring Boot",
    },
    {
      src: expressJs,
      alt: "Express Js",
    },
    {
      src: mongoDb,
      alt: "Mongo Db",
    },
    {
      src: tailwind,
      alt: "Tailwind",
    },
  ];
  return (
    <Stack
      height={"100%"}
      justifyContent={"center"}
      gap={{ xs: 50, sm: 80 }}
      paddingX={{ sm: "20%" }}
    >
      <article>
        <Typography variant="h4">
          Technologies that I&apos;m using every day
        </Typography>
        <div className="technologies">
          {everydaySkills.map((item) => (
            <img key={item.alt} src={item.src} alt={item.alt} loading="lazy" />
          ))}
        </div>
      </article>
      <article>
        <Typography variant="h4">
          Other techs which I have used in projects
        </Typography>
        <div className="technologies">
          {otherSkills.map((item) => (
            <img key={item.alt} src={item.src} alt={item.alt} loading="lazy" />
          ))}
        </div>
      </article>
    </Stack>
  );
};
