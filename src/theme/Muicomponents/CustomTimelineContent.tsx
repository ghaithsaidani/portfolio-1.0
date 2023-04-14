import TimelineContent from "@mui/lab/TimelineContent/TimelineContent";
import { styled } from "@mui/material";

export const  CustomTimelineContent = styled(TimelineContent)(({theme})=> ({
    display:"flex",
    flexDirection:"column",
    gap:"10px",
    marginBottom:"60px",
    '.MuiTypography-h4':{
        fontSize:"16px",
        fontFamily:"Blackpast DEMO",
    },
    '.MuiTypography-h5':{
        fontSize:"16px",
        fontFamily:"Inter",
        color:theme.palette.text.secondary,
    },
    '.MuiTypography-h6':{
        fontSize:"16px",
        fontFamily:"Inter",
        color:theme.palette.text.disabled,
    }
}))