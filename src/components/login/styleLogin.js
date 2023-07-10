import { styled } from "@mui/material";
import LeftImg from "../../assets/Izquierda.jpg";

export const Section = styled("section")(({ theme }) => ({
  margin: "auto",
  display: "flex",
  maxWidth: "500px",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  minHeight: "100vh",
  padding: "10px",
  [theme.breakpoints.up("lg")]: {
    padding: "0",
    display: "grid",
    maxWidth: "none",
    gridTemplateColumns: "1fr 1fr",
  },
}));

export const Ilustration = styled("article")(({ theme }) => ({
  height: "100%",
  display: "none",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundImage: `url(${LeftImg})`,
  [theme.breakpoints.up("lg")]: {
    display: "block",
  },
}));

export const Content = styled("article")(({ theme }) => ({
  margin: "auto",
  display: "flex",
  maxWidth: "500px",
  borderRadius: "10px",
  alignItems: "center",
  flexDirection: "column",
  boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
  padding: "30px",
  gap: "5px",
  [theme.breakpoints.up("md")]: {
    margin: "auto",
    maxWidth: "500px",
  },
}));

export const Logo = styled("img")({
  margin: "auto",
  maxWidth: "500px",
});

export const Welcome = styled("div")({
  margin: "50px 0",
});

export const Title = styled("h1")(({ theme }) => ({
  color: "#E25139",
  fontSize: "2rem",
  fontWeight: "400",
  textAlign: "center",
  [theme.breakpoints.up("lg")]: {
    fontSize: "3rem",
  },
}));

export const Message = styled("p")(({ theme }) => ({
  fontWeight: "400",
  fontSize: "1.5rem",
  textAlign: "center",
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.5rem",
  },
}));
