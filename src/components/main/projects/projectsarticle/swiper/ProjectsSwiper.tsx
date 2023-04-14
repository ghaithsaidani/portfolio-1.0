import { EffectCoverflow, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card, ProjectCard } from "../projectcard/ProjectCard";
import "swiper/swiper-bundle.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useMediaQuery, useTheme } from "@mui/material";

export const ProjectsSwiper = (props: { projects: Card[] }) => {
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.up("xs"));
  const sm = useMediaQuery(theme.breakpoints.up("sm"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  const xl = useMediaQuery(theme.breakpoints.up("xl"));
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      loop={false}
      slidesPerView={xl ? 4 : lg ? 3 : md ? 2.5 : sm ? 1.2 : 1}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: xs ? 40 : xl ? 200: 150,
        slideShadows: false,
        modifier: xl ? 4  : 2,
      }}
      pagination={{ el: ".swiper-pagination", clickable: true }}
      
      modules={[EffectCoverflow, Pagination, Navigation]}
      className="swiper_container"
    >
      {props.projects.map((project) => (
        <SwiperSlide key={project.title}>
          <ProjectCard {...project} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
