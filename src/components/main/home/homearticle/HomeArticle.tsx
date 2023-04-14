import { Box, Stack, Typography } from "@mui/material";
import { FaHackerrank } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { SiCodeforces } from "react-icons/si";
import { SlSocialLinkedin } from "react-icons/sl";
import { Programmer } from "../../../../assets/images";
import { CustomLink } from "../../../../theme/Muicomponents/CustomLink";

export const HomeArticle = () => {
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
    {
      id: "hackerRank",
      icon: <FaHackerrank />,
      link: "https://www.hackerrank.com/ghaith_saidani",
    }
  ];
  return (
    <article>
      <Box
        display={"flex"}
        height={"100%"}
        flexDirection={{ xs: "column", md: "row-reverse" }}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        width={{ md: "80%" }}
        marginX={"auto"}
      >
        <Stack flex={{ md: 1.5 }}>
          <img src={Programmer} alt={"Developer"} />
        </Stack>
        <Stack
          flex={{ sm: 2, md: 1 }}
          gap={{ xs: 80, md: 10 }}
          justifyContent={"center"}
        >
          <Stack>
            <div className={"name mb-6"}>
              <Typography variant={"h4"} textAlign={{ md: "left" }}>
                HI, I&apos;M
              </Typography>
              <Typography variant={"h2"} textAlign={{ md: "left" }}>
                GHAITH
              </Typography>
            </div>
            <Typography
              variant={"h1"}
              paddingX={{ sm: "10%", md: 0 }}
              textAlign={{ md: "left" }}
            >
              i&apos;m a web developer
            </Typography>
          </Stack>
          <Stack
            gap={25}
            flexDirection={"row"}
            justifyContent={{ xs: "center", md: "start" }}
          >
            {socialMedias.map((social) => (
              <CustomLink
                variant="inherit"
                key={social.id}
                href={social.link}
                target="_blank"
              >
                {social.icon}
              </CustomLink>
            ))}
          </Stack>
        </Stack>
      </Box>
    </article>
  );
};
