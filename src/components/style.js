import { styled } from "@mui/material";

// :::::ESTILOS GLOBALES:::::
export const Section = styled("section")(({ theme }) => ({
  padding: "20px",
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

export const CustomBox = styled("div")(({ theme }) => ({
  padding: "20px",
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

// :::::ESTILO CARD:::::
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

// :::::ESTILO CHAT BOTON:::::
export const BoxChat = styled("div")(({ theme }) => ({
  padding: "20px",
  marginTop: "20px",
  marginRight: "1%",
  marginLeft: "auto",
  borderRadius: "20px",
  fontFamily: "'Comfortaa', cursive",
  boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
}));

export const ContenedorEnviar = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
}));

export const Boton = styled("button")(({ theme }) => ({
  color: "#fff",
  display: "flex",
  fontSize: "1rem",
  alignItems: "center",
  borderRadius: "16px",
  backgroundColor: "#E25139",
  padding: "12px 16px 12px 16px",
  gap: "10px",
}));

export const BotonTexto = styled("p")(({ theme }) => ({
  color: "#fff",
  display: "none",
  fontSize: "1rem",
  alignItems: "center",
  borderRadius: "16px",
  backgroundColor: "#E25139",
  gap: "10px",
  [theme.breakpoints.up("md")]: {
    display: "block",
  },
}));

export const BotonIcono = styled("span")(({ theme }) => ({
  color: "#fff",
}));

// :::::ESTILO CIRCULO PROGRESO:::::
export const Progress = styled("div")({
  width: "120px",
  display: "flex",
  textAlign: "center",
  alignItems: "center",
  flexDirection: "column",
  rowGap: "10px",
});
