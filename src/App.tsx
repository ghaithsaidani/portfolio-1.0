import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Grid, Stack, responsiveFontSizes } from "@mui/material";
import { useSelector } from "react-redux";
import { darkValue } from "./features/themeSlice";
import { Header } from "./components/header/Header";
import { DarkPalette, LightPalette } from "./theme/requirements/Palette";
import { Theme } from "./theme/Theme";
import { Main } from "./components/main/Main";
import { Footer } from "./components/footer/Footer";
import { Analytics } from '@vercel/analytics/react';

export const App = () => {
  const dark = useSelector(darkValue);
  return (
    
      <ThemeProvider
      theme={
        dark
          ? responsiveFontSizes(Theme(DarkPalette))
          : responsiveFontSizes(Theme(LightPalette))
      }
    >
      <CssBaseline />
      <Grid container>
        <Grid item order={{ xs: 2, md: 1 }} xs={2} md={12}>
          <Stack justifyContent={"center"} alignItems={"center"}>
            <Header />
          </Stack>
        </Grid>
        <Grid item order={{ xs: 1, md: 2 }} xs={10} md={12}>
          <Main />
        </Grid>
        <Grid item order={3} xs={12}>
          <Stack width={"100%"} position={"absolute"}>
            <Footer />
          </Stack>
        </Grid>
      </Grid>
        <Analytics />
    </ThemeProvider>
  );
};
