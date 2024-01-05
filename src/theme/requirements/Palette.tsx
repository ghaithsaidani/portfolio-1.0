import { PaletteOptions } from "@mui/material/styles"

const colors = {
    purple:{
        1000: "#6747ED",
        800: "rgba(103, 71, 237, 0.8)",
        500: "rgba(103, 71, 237, 0.5)",
        200: "rgba(103, 71, 237, 0.2)",
        100: "rgba(103, 71, 237, 0.1)",
    },
    white: "#ffffff",
    black: "#090e16",
    grey: {
        dark: "#232E35",
        light: "#656D72",
    }
}


const Primary={
    main:colors.purple[1000],
    light:colors.purple[100]
}

export const LightPalette:PaletteOptions=({
    mode:"light",
    primary:Primary,
    background:{
        default:colors.white,
    },
    text:{
        primary:colors.black,
        secondary:colors.grey.light,
        disabled:colors.grey.dark
    },
    common:{
        white:colors.white,
        black:colors.black
    }
})


export const DarkPalette:PaletteOptions=({
        mode:"dark",
        primary:Primary,
        background:{
            default:colors.black,
        },
        text:{
            primary:colors.white,
            secondary:colors.grey.light,
            disabled:colors.grey.dark
        }
})