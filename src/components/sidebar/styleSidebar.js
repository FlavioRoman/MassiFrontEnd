import Image01 from "../../assets/Vector.png";
import Image02 from "../../assets/Vector-1.png";
import Image03 from "../../assets/Vector-2.png";

import { styled } from "@mui/material";

export const Aside = styled("aside")(({ theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  bottom: 0,
  width: "60px",
  height: "100%",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  backgroundPosition: "top",
  backgroundColor: "#E25139",
  backgroundRepeat: "no-repeat",
  backgroundImage: `url(${Image01})`,
  [theme.breakpoints.up("md")]: {
    minWidth: "240px",
  },
}));

export const LogoImg = styled("img")({
  height: "80px",
  margin: "50px 0",
  maxWidth: "260px",
});

export const Menu = styled("ul")({
  width: "100%",
  display: "flex",
  flexDirection: "column",
});

export const Option = styled("li")(({ theme }) => ({
  color: "#fff",
  display: "flex",
  cursor: "pointer",
  fontSize: "1.1rem",
  alignItems: "center",
  justifyContent: "center",
  padding: "25px 10px",
  transition: "0.2s",
  columnGap: "10px",
  ":hover": {
    backgroundColor: "#fff5",
  },
  [theme.breakpoints.up("md")]: {
    justifyContent: "flex-start",
  },
}));

export const Text = styled("p")(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("md")]: {
    display: "initial",
  },
}));
