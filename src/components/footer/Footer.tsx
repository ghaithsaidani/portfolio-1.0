import { Box, Stack, Typography } from "@mui/material";
import { CustomLink } from "../../theme/Muicomponents/CustomLink";
import {
  FiGithub,
  SiCodeforces,
  SlSocialLinkedin,
} from "react-icons/all";

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
      id: "codeForces",
      icon: <SiCodeforces />,
      link: "https://codeforces.com/profile/ghaith_saidani?csrf_token=25919acae48c81c54e98870b0fc2e60c",
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
