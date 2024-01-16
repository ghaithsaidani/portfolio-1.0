import {EffectCoverflow, Navigation, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import {Card, ProjectCard} from "../projectcard/ProjectCard";
import "swiper/swiper-bundle.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {Stack, useMediaQuery, useTheme} from "@mui/material";

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
            slidesPerView={lg ? 2.5 : md ? 2 : sm?1.5:1.07}
            //slidesPerView={"auto"}
            coverflowEffect={{
                rotate: 10,
                stretch: 0,
                depth: lg ? 40 : md ? 120 : 200,
                slideShadows: false,
                modifier: xl ? 4 : 2,
            }}
            pagination={{el: ".swiper-pagination"}}
            //pagination={true}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container"
        >

            {props.projects.map((project) => (
                <SwiperSlide key={project.title}>
                    <Stack className={"cards-container"} style={{paddingBottom: "1%"}}>
                        <ProjectCard {...project} />
                    </Stack>
                </SwiperSlide>
            ))}

        </Swiper>
    );
};
