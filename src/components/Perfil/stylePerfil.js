import { styled } from "@mui/material";

export const Section = styled("section")(({ theme }) => ({
  marginTop: "20px",
  marginRight: "1%",
  marginLeft: "auto",
  borderRadius: "20px",
  width: "calc(98% - 60px)",
  fontFamily: "'Comfortaa', cursive",
  boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
  [theme.breakpoints.up("md")]: {
    width: "calc(98% - 240px)",
  },
}));

export const State = styled("article")({
  color: "#fff",
  padding: "20px",
  display: "flex",
  alignItems: "center",
  backgroundColor: "#2F8D5A",
  borderRadius: "20px 20px 0 0",
  cursor: "pointer",
});

export const BoxPeople = styled("article")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});
