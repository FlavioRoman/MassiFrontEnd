import { styled } from "@mui/material";

export const Section = styled("section")(({ theme }) => ({
  padding: "20px",
  marginTop: "20px",
  marginLeft: "auto",
  borderRadius: "20px",
  width: "calc(100% - 60px)",
  fontFamily: "'Comfortaa', cursive",
  boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
  [theme.breakpoints.up("md")]: {
    width: "calc(100% - 240px)",
  },
}));

export const Title = styled("h1")({
  color: "#C6351D",
  margin: "20px 0",
  fontWeight: "700",
  fontSize: "2.2rem",
});

export const List = styled("ul")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: "10px",
  columnGap: "5px",
  [theme.breakpoints.up("md")]: {
    marginTop: "0",
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));

export const Item = styled("ul")(({ theme }) => ({
  cursor: "pointer",
  padding: "10px 15px",
  borderRadius: "20px",
  border: "1px solid #EAEDF0",
  boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
}));

export const DocumentReview = styled("article")(({ theme }) => ({
  marginTop: "10px",
}));

export const ReviewTitle = styled("h5")(({ theme }) => ({
  margin: "5px 0",
  color: "#C6351D",
  fontWeight: "400",
  fontSize: "1.3rem",
}));

export const ReviewSubTitle = styled("h3")(({ theme }) => ({
  color: "#000000",
  fontWeight: "400",
  fontSize: "1.8rem",
}));

export const BoxCard = styled("article")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  marginTop: "5px",
  columnGap: "10px",
  alignItems: "center",
}));

export const Card = styled("div")(({ theme }) => ({
  height: "150px",
  display: "flex",
  maxWidth: "300px",
  columnGap: "10px",
  marginTop: "10px",
  alignItems: "center",
  backgroundColor: "#F9FAFB",
  padding: "20px",
}));

export const CardContent = styled("div")(({ theme }) => ({
  marginTop: "10px",
}));

export const CardNumber = styled("h1")(({ theme }) => ({
  fontSize: "2.4rem",
  fontWeight: "700",
  textAlign: "center",
}));

export const CardText = styled("p")(({ theme }) => ({
  fontSize: "1.2rem",
}));

export const TeamWork = styled("div")(({ theme }) => ({
  marginTop: "10px",
}));

export const TeamWorkTitle = styled("h1")(({ theme }) => ({
  fontSize: "1rem",
  fontWeight: "300",
  marginTop: "10px",
}));

export const BoxList = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  columnGap: "10px",
  alignItems: "center",
  marginTop: "5px",
}));

export const TeamList = styled("ul")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
}));

export const AvatarImg = styled("img")(({ theme }) => ({
  width: "80px",
  height: "80px",
}));

// ESTILO COMPONENTE CALIFICADOS

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
