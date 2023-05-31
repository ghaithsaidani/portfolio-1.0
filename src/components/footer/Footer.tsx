import { Box, Stack, Typography } from "@mui/material";
import { CustomLink } from "../../theme/Muicomponents/CustomLink";
import {
  FiGithub,
  SiCodeforces,
  SlSocialLinkedin,
} from "react-icons/all";
import {SiLeetcode} from "react-icons/si";

export const Footer = () => {
  const socialMedias = [
    {
      id: "linkedin",
      icon: <SlSocialLinkedin />,
      link: "https://www.linkedin.com/in/ghaith-saidani-9230571b2/",
    },
    {
      id: "github",
      icon: <FiGithub />,
      link: "https://github.com/ghaithsaidani",
    },
    {
      id: "leetCode",
      icon: <SiLeetcode/>,
      link: "https://leetcode.com/ghaith_saidani/",
    },
  ];
  return (
    <footer>
      <Box
        display={"flex"}
        alignItems={"center"}
        color={"primary"}
        paddingX={{xs:"5%",md:0}}
        paddingY={{xs:15,md:20}}
        position={"relative"}
        bgcolor={"primary.main"}
        zIndex={99}
      >
        <Typography variant="h6" color={"common.white"} marginLeft={{md:25}}>Copyright © Ghaith Saidani · 2023</Typography>
        <Stack
          gap={25}
          flexDirection={"row"}
          flex={1}
          width="100%"
          justifyContent={{xs:"end",md:"center"}}
          position={{md:"absolute"}}
        >
          {socialMedias.map((social) => (
            <CustomLink
              variant="h4"
              key={social.id}
              href={social.link}
              target="_blank"
            >
              {social.icon}
            </CustomLink>
          ))}
        </Stack>
      </Box>
    </footer>
  );
};
