import { ProjectsChipIcon } from "../../../assets/images"
import { Chip } from "../../../interfaces"
import { CustomChip } from "../../../theme/Muicomponents/CustomChip"
import { ProjectsArticle } from "./projectsarticle/ProjectsArticle"

export const Projects = () => {
  const Projectschip : Chip = {
    avatar : {
        src:ProjectsChipIcon,
        alt:"Projects chip Avatar"
    },
    text:"PROJECTS"
  }
  
  return (
    <section id={"projects"}>
      <CustomChip avatar={Projectschip.avatar} text={Projectschip.text} />
      <ProjectsArticle/>
    </section>
  )
}
