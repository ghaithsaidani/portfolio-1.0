import { Stack, Typography } from "@mui/material";
import Infobox from "../../interfaces/Infobox";
import { useSelector } from "react-redux";
import { darkValue } from "../../features/themeSlice";

export const InfoBox = (props: Infobox) => {
  const darkTheme=useSelector(darkValue)
  return (
    <div className="info-box">
      <div className={`info-box-icon ${!darkTheme ? "light" : ""}`}>{props.icon}</div>
      <Stack flexDirection={"column"} gap={{sm:5}}>
        <Typography variant="h4">{props.title}</Typography>
        <Typography variant="body1">{props.body}</Typography>
      </Stack>
    </div>
  )
};
