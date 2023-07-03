import { styled } from "@mui/material";

//:::::ESTILO GLOBAL:::::

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

//:::::ESTILO POSTULANTE:::::
export const State = styled("article")({
  color: "#fff",
  padding: "20px",
  display: "flex",
  alignItems: "center",
  backgroundColor: "#2F8D5A",
  borderRadius: "20px 20px 0 0",
  cursor: "pointer",
});

export const About = styled("article")(({ theme }) => ({
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

export const Progress = styled("div")({
  width: "120px",
  display: "flex",
  textAlign: "center",
  alignItems: "center",
  flexDirection: "column",
  rowGap: "10px",
});

export const Avatar = styled("img")({
  width: "100px",
  height: "100px",
});

export const Info = styled("div")({
  rowGap: "5px",
  display: "flex",
  flexDirection: "column",
});

export const Contact = styled("div")(({ theme }) => ({
  display: "flex",
  textAlign: "center",
  flexDirection: "column",
  rowGap: "10px",
  [theme.breakpoints.up("md")]: {
    textAlign: "right",
  },
}));

export const SocialNetwork = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.up("md")]: {
    justifyContent: "flex-end",
  },
}));

export const Link = styled("img")({
  width: "40px",
  height: "40px",
  cursor: "pointer",
});

export const Information = styled("div")({
  padding: "0 20px",
});

//:::::ESTILO INFORMACION:::::
export const ContainerCard = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  marginTop: "10px",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  gap: "10px",
  [theme.breakpoints.up("md")]: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
}));

export const Name = styled("li")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "5px",
  [theme.breakpoints.up("md")]: {
    alignItems: "start",
  },
}));

export const EducationCareer = styled("li")({
  display: "flex",
  alignItems: "center",
});

export const BoxExperience = styled("div")({
  marginTop: "20px",
});

export const ExperienceName = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const ExperienceInfo = styled("div")({
  display: "flex",
  margin: "10px 0",
  flexDirection: "column",
  rowGap: "15px",
});

export const Charge = styled("li")({
  display: "flex",
  alignItems: "center",
});

export const Function = styled("li")({
  display: "flex",
  alignItems: "flex-start",
});

export const FunctionList = styled("ul")({
  display: "flex",
  flexDirection: "column",
});

export const List = styled("ul")({
  display: "flex",
  alignItems: "center",
});

// ESTILO DOCUMENTO
export const BoxDocument = styled("div")({});

export const DocumentList = styled("ul")({
  display: "flex",
  flexDirection: "column",
});

// ESTILO SOLICITAR INFORMACION
export const BoxRequest = styled("button")({
  display: "flex",
  marginLeft: "auto",
  alignItems: "center",
  color: "#E25139",
});

// ESTILO REFERENCIA
export const BoxReference = styled("div")({
  display: "flex",
  padding: "20px",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
  gap: "20px",
});

export const Card = styled("div")({
  display: "flex",
  maxWidth: "300px",
  borderRadius: "20px",
  flexDirection: "column",
  boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
  padding: "20px",
  rowGap: "20px",
});

export const CardTitle = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const CardName = styled("div")({});

export const CardText = styled("p")({
  textAlign: "justify",
});

export const CardDate = styled("p")({
  textAlign: "right",
});

// ESTILO CHAT
export const Messages = styled("div")({
  display: "flex",
  marginTop: "20px",
  minHeight: "500px",
  alignItems: "center",
  borderRadius: "20px",
  justifyContent: "center",
  border: "1px solid #eee",
});

export const Form = styled("div")({
  width: "100%",
  height: "45px",
  display: "flex",
  marginTop: "10px",
  columnGap: "10px",
  alignItems: "center",
});

export const Message = styled("input")(({ theme }) => ({
  width: "90%",
  height: "100%",
  display: "flex",
  fontWeight: 400,
  fontSize: "18px",
  color: "#93A1AE",
  columnGap: "10px",
  alignItems: "center",
  borderBottom: "1px solid #93A1AE",
  fontFamily: "'Jost', sans-serif",
  [theme.breakpoints.up("md")]: {
    width: "90%",
  },
}));

export const Send = styled("button")(({ theme }) => ({
  height: "100%",
  display: "flex",
  minWidth: "50px",
  fontWeight: "600",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "'Jost', sans-serif",
  backgroundColor: "#E25139",
  borderRadius: "16px",
  columnGap: "10px",
  fontSize: "16px",
  color: "#fff",
  [theme.breakpoints.up("lg")]: {
    width: "10%",
  },
}));

export const SendText = styled("button")(({ theme }) => ({
  color: "#fff",
  display: "none",
  fontWeight: "500",
  fontFamily: "'Jost', sans-serif",
  [theme.breakpoints.up("lg")]: {
    display: "block",
    fontSize: "1rem",
  },
}));
