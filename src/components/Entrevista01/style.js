import { styled } from "@mui/material";

export const About = styled("article")(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "20px",
  rowGap: "20px",
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
}));

export const People = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  columnGap: "10px",
});

export const Info = styled("div")({
  rowGap: "5px",
  display: "flex",
  flexDirection: "column",
});

export const Flex = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.up("md")]: {
    alignItems: "center",
    flexDirection: "row",
  },
}));
