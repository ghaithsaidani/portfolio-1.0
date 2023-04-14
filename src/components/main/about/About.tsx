
import { AboutChipIcon } from "../../../assets/images";
import { Chip } from "../../../interfaces";
import { CustomChip } from "../../../theme/Muicomponents/CustomChip";
import { AboutArticle } from "./aboutarticle/AboutArticle";


export const About = () => {
  const Aboutchip: Chip = {
    avatar: {
      src: AboutChipIcon,
      alt: "About chip Avatar",
    },
    text: "ABOUT",
  };
  return (
    <section id={"about"}>
      <CustomChip avatar={Aboutchip.avatar} text={Aboutchip.text} />
      <AboutArticle/>
    </section>
  );
};
