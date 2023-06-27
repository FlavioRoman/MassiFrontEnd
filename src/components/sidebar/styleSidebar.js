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
  backgroundColor: "#E25139",
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
  rowGap: "20px",
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
  transition: "0.2s",
  columnGap: "10px",
  padding: "10px",
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
