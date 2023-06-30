import { Paper, styled } from "@mui/material";

// ESTILOS Puesto
export const Item = styled(Paper)(({ theme }) => ({
  cursor: "pointer",
  padding: "10px 15px",
  borderRadius: "20px",
  border: "1px solid #EAEDF0",
  boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
}));

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

export const DocumentReview = styled("article")({
  marginTop: "10px",
});

export const BoxCard = styled("article")({
  display: "flex",
  flexWrap: "wrap",
  marginTop: "5px",
  columnGap: "10px",
  alignItems: "center",
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
export const AvatarImg = styled("img")({
  width: "80px",
  height: "80px",
});

export const BoxApplicant = styled("div")({
  display: "flex",
  columnGap: "10px",
  alignItems: "center",
});

export const BoxQualification = styled("div")({
  display: "flex",
  columnGap: "10px",
  alignItems: "center",
  fontSize: "1.5rem",
});

export const BoxCompatibility = styled("div")({
  display: "flex",
  columnGap: "10px",
  alignItems: "center",
  fontSize: "1.8rem",
});

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
