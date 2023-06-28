import { styled } from "@mui/material";

// ESTILOS COMPONENTE TABLERO
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

export const Title = styled("h1")({
  color: "#C6351D",
  margin: "20px 0",
  fontWeight: "700",
  fontSize: "2.2rem",
});

export const List = styled("ul")(({ theme }) => ({
  gap: "5px",
  display: "flex",
  flexWrap: "wrap",
  marginTop: "10px",
  alignItems: "center",
  justifyContent: "space-between",
  [theme.breakpoints.up("md")]: {
    marginTop: "0",
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));

export const Item = styled("ul")({
  cursor: "pointer",
  padding: "10px 15px",
  borderRadius: "20px",
  border: "1px solid #EAEDF0",
  boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
});

export const DocumentReview = styled("article")({
  marginTop: "10px",
});

export const ReviewTitle = styled("h5")({
  margin: "5px 0",
  color: "#C6351D",
  fontWeight: "400",
  fontSize: "1.3rem",
});

export const ReviewSubTitle = styled("h3")({
  color: "#000000",
  fontWeight: "400",
  fontSize: "1.8rem",
});

export const BoxCard = styled("article")({
  display: "flex",
  flexWrap: "wrap",
  marginTop: "5px",
  columnGap: "10px",
  alignItems: "center",
});

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

export const CardContent = styled("div")({
  marginTop: "10px",
});

export const CardNumber = styled("h1")({
  fontSize: "2.4rem",
  fontWeight: "700",
  textAlign: "center",
});

export const CardText = styled("p")({
  fontSize: "1.2rem",
});

export const TeamWork = styled("div")({
  marginTop: "10px",
});

export const TeamWorkTitle = styled("h1")({
  fontSize: "1rem",
  fontWeight: "300",
  marginTop: "10px",
});

export const BoxList = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  columnGap: "10px",
  alignItems: "center",
  marginTop: "5px",
});

export const TeamList = styled("ul")({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
});

// ESTILO COMPONENTE CALIFICADOS
export const ButtonConvocatory = styled("button")({
  padding: "10px",
  color: " #E25139",
  fontWeight: "bold",
  marginLeft: "auto",
  borderRadius: "10px",
  border: "2px solid #E25139",
  cursor: "pointer",
  display: "block",
});

// ESTILO COLUMNAS
export const AvatarImg = styled("img")(({ theme }) => ({
  width: "80px",
  height: "80px",
}));

export const BoxApplicant = styled("div")(({ theme }) => ({
  display: "flex",
  columnGap: "10px",
  alignItems: "center",
}));

export const BoxQualification = styled("div")(({ theme }) => ({
  display: "flex",
  columnGap: "10px",
  alignItems: "center",
  fontSize: "1.5rem",
}));

export const BoxCompatibility = styled("div")(({ theme }) => ({
  display: "flex",
  columnGap: "10px",
  alignItems: "center",
  fontSize: "1.8rem",
}));

// RESPONSIVE
export const Flex = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  [theme.breakpoints.up("md")]: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));
