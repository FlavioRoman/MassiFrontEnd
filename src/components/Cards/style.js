import { styled } from "@mui/material";

// :::::CARD EVALUACION ESTILO:::::
export const Estado = styled("div")({
  color: "#ffff",
  padding: "15px 10px",
  backgroundColor: "#F9B438",
  borderTopLeftRadius: "20px",
  borderTopRightRadius: "20px",
  boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
});

export const Img = styled("img")({
  margin: "auto",
  maxWidth: "120px",
  minHeight: "120px",
  marginBottom: "10px",
});

// :::::CARD PERFIL ESTILO:::::
export const ContainerCard = styled("div")(({ theme }) => ({
  margin: "auto",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  gap: "10px",
}));

export const BoxCard = styled("div")(({ theme }) => ({
  minWidth: "250px",
  borderRadius: "20px",
  boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
}));

export const State = styled("div")(({ theme }) => ({
  color: "#ffff",
  textAlign: "center",
  padding: "15px 10px",
  backgroundColor: "#F9B438",
  borderTopLeftRadius: "20px",
  borderTopRightRadius: "20px",
  boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
}));

export const Statistics = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "10px",
}));

export const Star = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

export const Percentage = styled("div")(({ theme }) => ({
  fontWeight: "500",
  fontSize: "1.5rem",
}));

export const Avatar = styled("div")(({ theme }) => ({
  display: "flex",
  textAlign: "center",
  flexDirection: "column",
  justifyContent: "center",
  marginBottom: "40px",
}));

export const Name = styled("h4")(({ theme }) => ({
  color: "#2C2D2D",
}));

export const Job = styled("p")(({ theme }) => ({
  color: "#575D64",
  fontSize: "0.9rem",
}));

export const Image = styled("img")(({ theme }) => ({
  margin: "auto",
  maxWidth: "120px",
  minHeight: "120px",
  marginBottom: "10px",
}));

export const ButtonProfile = styled("button")(({ theme }) => ({
  margin: "auto",
  color: "#E25139",
  display: "block",
  fontWeight: "bold",
  marginBottom: "40px",
}));
