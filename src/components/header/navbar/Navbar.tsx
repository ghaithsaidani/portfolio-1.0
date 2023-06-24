import { IconButton, Tooltip, useMediaQuery, useTheme } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import NightlightOutlinedIcon from "@mui/icons-material/NightlightOutlined";
import { useDispatch, useSelector } from "react-redux";
import { changetheme, darkValue } from "../../../features/themeSlice";
import { useCallback } from "react";
import { Link } from "react-scroll";
import {Logo} from "../../../assets/images";

interface link {
  id: string;
  text: string;
}

export const Navbar = () => {
  const links: link[] = [
    {
      id: "home",
      text: "home",
    },
    {
      id: "about",
      text: "about",
    },
    {
      id: "education",
      text: "education",
    },
    {
      id: "skills",
      text: "skills",
    },
    {
      id: "projects",
      text: "projects",
    },
    {
      id: "contact",
      text: "contact",
    },
  ];
  const linksLg: link[] = [
    {
      id: "home",
      text: "home",
    },
    {
      id: "about",
      text: "about",
    },
    {
      id: "education&skills",
      text: "education & skills",
    },
    {
      id: "projects",
      text: "projects",
    },
    {
      id: "contact",
      text: "contact",
    },
  ];
  const theme = useTheme();
  const query = useMediaQuery(theme.breakpoints.up("md"));
  const darkMode: boolean = useSelector(darkValue);
  const dispatch = useDispatch();
  const handleClick = useCallback(() => dispatch(changetheme()), [darkMode]);
  return (
    <nav>
      <img src={Logo} alt={"logo"}/>
      <ul className={"list-none"}>
        {query
          ? linksLg.map((link) => (
              <li key={link.id}>
                <Link activeClass="active" smooth spy duration={0} to={link.id}>
                  {link.text}
                </Link>
              </li>
            ))
          : links.map((link) => (
              <li key={link.id}>
                <Link activeClass="active" smooth spy duration={0} to={link.id}>
                  {link.text}
                </Link>
              </li>
            ))}
        <li>
          <Tooltip
            title={darkMode ? "Turn off Dark Mode" : "Turn on Dark Mode"}
            placement={query ? "bottom" : "left"}
          >
            <IconButton onClick={handleClick}>
              {darkMode ? (
                <LightModeOutlinedIcon />
              ) : (
                <NightlightOutlinedIcon />
              )}
            </IconButton>
          </Tooltip>
        </li>
      </ul>
    </nav>
  );
};
