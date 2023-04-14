import { useSelector } from "react-redux";
import { ContactChipIcon } from "../../../assets/images";
import { darkValue } from "../../../features/themeSlice";
import { CustomChip } from "../../../theme/Muicomponents/CustomChip";
import { Chip } from "../../../interfaces";
import {ToastContainer} from "react-toastify"
import {ContactArticle} from "./contactarticle/ContactArticle"
import 'react-toastify/dist/ReactToastify.css';


export const Contact = () => {
  const dark=useSelector(darkValue)
  const Conatactchip: Chip = {
    avatar: {
      src: ContactChipIcon,
      alt: "Contact chip Avatar",
    },
    text: "CONTACT",
  };
  return (
    <section id={"contact"} className="gap-0">
      <ToastContainer position="top-center" limit={1} theme={dark ? "dark":"light"}/>
      <CustomChip avatar={Conatactchip.avatar} text={Conatactchip.text} />
      <ContactArticle/>
    </section>
    
  );
};
