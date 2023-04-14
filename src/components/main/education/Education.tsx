import { EducationChipIcon } from "../../../assets/images";
import { CustomChip } from "../../../theme/Muicomponents/CustomChip";
import { Chip } from "../../../interfaces";
import { EducationArticle } from "./educationarticle/EducationArticle";

export const Education = () => {
  const Educationchip: Chip = {
    avatar: {
      src: EducationChipIcon,
      alt: "Education chip Avatar",
    },
    text: "EDUCATION",
  };
  return (
    <section id={"education"}>
      <CustomChip avatar={Educationchip.avatar} text={Educationchip.text} />
      <EducationArticle/>
    </section>
  );
};
