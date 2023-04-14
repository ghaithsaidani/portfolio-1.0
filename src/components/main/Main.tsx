import { Grid } from "@mui/material";
import { About, Home, Education, Skills, Contact, Projects } from ".";

export const Main = () => {
  return (
    <main className={"col-span-5 col-start-1"}>
      <Home/>
      <About />
      <Grid container id="education&skills">
        <Grid item xs={12} md={6}>
          <Education />
        </Grid>
        <Grid item xs={12} md={6}>
          <Skills />
        </Grid>
      </Grid>
      <Projects />
      <Contact />
    </main>
  );
};
