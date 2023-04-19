import { Box, Button, Stack, Typography } from "@mui/material";
import { AboutPhotoDark, AboutPhotoLight } from "../../../../assets/images";
import { useSelector } from "react-redux";
import { darkValue } from "../../../../features/themeSlice";
import { HiOutlineDocumentDownload } from "react-icons/hi";

export const AboutArticle = () => {
  const dark = useSelector(darkValue);
  return (
    <article className="flex h-full">
      <Box
        display={"flex"}
        flexDirection={{ xs: "column", md: "row" }}
        alignItems={"center"}
        justifyContent={"space-evenly"}
        height={"100%"}
        width={{ md: "90%", lg: "80%" }}
      >
        {dark ? (
          <img src={AboutPhotoDark} alt="Me" />
        ) : (
          <img src={AboutPhotoLight} alt="Me" />
        )}
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          gap={{ xs: 15, md: 50 }}
          paddingX={{ sm: "3%", xl: "45px" }}
        >
          <Typography variant={"body1"}>
            I&apos;m a student with a multitude of talents, I have a strong
            passion for web development and UI/UX design. My focus on creating
            user-centered digital experiences is coupled with a keen eye for
            design aesthetics. I strive to blend technical skills and artistic
            sensibilities to bring innovative ideas to life. My portfolio
            showcases my work and highlights the hard work and dedication that
            goes into each project. I hope that you enjoy exploring my portfolio
            and get a sense of the creativity and excitement that I bring to
            every project I undertake.
          </Typography>
            <Button variant={"contained"} endIcon={<HiOutlineDocumentDownload />} target="_blank" href="https://public.db.files.1drv.com/y4mtJfugpRNgZ8L2dYPheQhaIePDila3mh2DkSDdl6IoksKaw888ncbNxqsf44jZ_y0Z1Wg8WTGK5XeV2VrKxSN9z2ypq-j0_N9BaO4vuIq06mPWbd9-CZFdtCse2tNC0uqpbMDTh6z72gbhYXc-p3kUqwsVgxB2PiJNXIEDWstNM2JjmMUxP_aNd8kryZ66Xn71O9xopuTDExP9_hdNAnjfIfwcN3nI-NBOk10dtXwou0?AVOverride=1">
              download cv
            </Button>
        </Stack>
      </Box>
    </article>
  );
};
