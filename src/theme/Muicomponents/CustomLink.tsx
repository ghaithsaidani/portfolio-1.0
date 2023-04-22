import {Link, styled} from "@mui/material";

export const  CustomLink = styled(Link)(({theme})=> ({
        '&.MuiTypography-h4':{
            fontSize:"20px",
            "& svg":{
                color:theme.palette?.common.white,
                "&:hover":{
                    color:theme.palette?.common.black
                }
            }
        },
        '&.MuiTypography-inherit':{
            fontSize:"25px",
            "& svg":{
                color:theme.palette?.primary.main,
                "&:hover":{
                    color:theme.palette?.text?.primary
                }
            }
        },
        [theme.breakpoints.up('md')]: {
            '&.MuiTypography-h5':{
                '&:before':{
                    content: "''",
                    position: "absolute",
                    left:"0",
                    bottom:"-6px",
                    width: "100%",
                    height: "3px",
                    transform: "scale(0)",
                    transition: "transform .5s"
                },
                '&:hover:before':{
                    transform: "scale(1)",
                }
            },
          },
}))

