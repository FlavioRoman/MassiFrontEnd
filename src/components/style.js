import { styled } from "@mui/material";

// :::::ESTILOS GLOBALES:::::
export const Container = styled("section")(({ theme }) => ({
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

export const Avatar = styled("img")({
  width: "100px",
  height: "100px",
});

export const State = styled("article")({
  color: "#fff",
  padding: "20px",
  display: "flex",
  alignItems: "center",
  backgroundColor: "#2F8D5A",
  borderRadius: "20px 20px 0 0",
  cursor: "pointer",
});

export const Flex = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
}));

// ESTILO CARD
export const Card = styled("div")({
  height: "150px",
  display: "flex",
  maxWidth: "300px",
  columnGap: "10px",
  marginTop: "10px",
  alignItems: "center",
  backgroundColor: "#F9FAFB",
  padding: "20px",
});
