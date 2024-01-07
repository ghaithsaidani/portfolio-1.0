import {createTheme, PaletteOptions} from "@mui/material";
import {TypographyStyle} from "./requirements/TypographyStyle";
import type {} from '@mui/lab/themeAugmentation';

export const Theme = (palette: PaletteOptions) => createTheme(
    {
        palette:{...palette},
        spacing: (factor:number) => `${factor}px`,
        breakpoints: {
            values: {
              xs: 0,
              sm: 600,
              md: 850,
              lg: 1200,
              xl: 1536,
            },
        },
        typography:{...TypographyStyle},
        components:{
            MuiCssBaseline: {
                styleOverrides: (theme) => ({
                    "html":{
                        background:theme.palette.background.default,
                    },
                    "::-webkit-scrollbar-track ":{
                        bgColor: theme.palette.background.default,
                        
                    },
                    "header":{
                        background:theme.palette.background.default,
                        "a":{
                            color:theme.palette.text.primary
                        }
                    },
                }),
            },
            MuiButton:{
                styleOverrides: {
                    root: ({ theme }) =>
                        theme.unstable_sx({
                            borderRadius: 2,
                            paddingBlock : "10px",
                        }),
                },
            },
            MuiTimelineItem:{
                styleOverrides:{
                    root: {
                        ":last-child":{
                            ".MuiTimelineContent-positionRight":{
                                marginBottom:"0"
                            }
                        }
                    }
                }
            },
            MuiTimelineDot:{
                styleOverrides:{
                    root: ({ theme }) =>
                        theme.unstable_sx({
                            background:theme.palette.primary.main,
                            scale:"1.5"
                        }),
                },
            },
            MuiTimelineConnector:{
                styleOverrides:{
                    root: ({ theme }) =>
                        theme.unstable_sx({
                            background:theme.palette.primary.main
                        }),
                },
            },
        }
    }
)



