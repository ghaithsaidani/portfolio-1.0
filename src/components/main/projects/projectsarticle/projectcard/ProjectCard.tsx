import { Button, Typography } from "@mui/material";
import { Img } from "../../../../../interfaces";
import { HiOutlineArrowUpRight } from "react-icons/all";

export interface Card {
  title: string;
  usedTechs: Img[];
  date:number,
  img: Img;
  link: string;
}

export const ProjectCard = (props: Card) => {
  return (
    <div className="card">
      <Typography variant="h3">{props.title}</Typography>
      <div className="techs-date">
        <div className="used-techs">
          {props.usedTechs.map((tech: Img) => (
            <img key={tech.alt} src={tech.src} alt={tech.alt} />
          ))}
        </div>
        <div className="date">{props.date}</div>
      </div>
      <img className="project-img" src={props.img.src} alt={props.img.alt} />
      <Button href={props.link} target="_blank">
        visit
        <HiOutlineArrowUpRight />
      </Button>
    </div>
  );
};
