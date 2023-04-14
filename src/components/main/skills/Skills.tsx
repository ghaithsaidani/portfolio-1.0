import { CustomChip } from "../../../theme/Muicomponents/CustomChip";
import { Chip } from "../../../interfaces";
import { SkillsArticle } from "./skillsarticle/SkillsArticle";
import { SkillsChipIcon } from "../../../assets/images";

export const Skills = () => {
  //skills chip
  const Skillschip: Chip = {
    avatar: {
      src: SkillsChipIcon,
      alt: "Skills chip Avatar",
    },
    text: "SKILLS",
  };

  

  return (
    <section id={"skills"}>
      <CustomChip avatar={Skillschip.avatar} text={Skillschip.text} />
      <SkillsArticle/>
    </section>
  );
};
