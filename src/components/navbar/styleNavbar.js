import { styled } from "@mui/material";

/*
EL ORDEN DE LOS ESTILOS ESTA ORDENADO SEGUN EL ORDEN 
DEL LOS ELEMENTOS DECLARADOS EN EL COMPONENTE (Navbar.jsx)
*/
export const Nav = styled("nav")(({ theme }) => ({
  width: "100%",
  height: "auto",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "space-between",
  boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
  // ESTILO RESPONSIVO
  [theme.breakpoints.up("md")]: {
    height: "60px",
    padding: "0 20px",
    flexDirection: "row",
  },
}));

export const Menu = styled("div")({
  width: "100%",
  display: "flex",
  padding: "20px",
  justifyContent: "space-between",
});

export const Path = styled("ul")(({ theme }) => ({
  rowGap: "5px",
  display: "flex",
  color: "#7659A0",
  flexWrap: "wrap",
  padding: "0 10px",
  // ESTILO RESPONSIVO
  [theme.breakpoints.up("md")]: {
    marginBottom: "0px",
  },
}));

export const History = styled("li")({
  display: "flex",
  columnGap: "10px",
  alignItems: "center",
  marginRight: "12px",
});

export const MenuButton = styled("button")(({ theme }) => ({
  display: "block",
  cursor: "pointer",
  // ESTILO RESPONSIVO
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

export const InteractiveContent = styled("ul")(({ theme }) => ({
  width: "100%",
  display: "none",
  alignItems: "center",
  justifyContent: "space-between",
  position: "relative",
  padding: "10px",
  rowGap: "10px",
  // ESTILO RESPONSIVO
  [theme.breakpoints.up("md")]: {
    display: "flex",
    columnGap: "30px",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  [theme.breakpoints.down("sm")]: {
    columnGap: "30px",
    flexDirection: "column",
  },
}));

export const Proposals = styled("button")({
  display: "flex",
  alignItems: "center",
  backgroundColor: "#E25139",
  borderRadius: "10px",
  padding: "5px 10px",
  cursor: "pointer",
  color: "#fff",
});

export const Avatar = styled("div")({
  display: "flex",
  cursor: "pointer",
  columnGap: "10px",
  alignItems: "center",
});

export const MenuDropDown = styled("div")({
  display: "flex",
  cursor: "pointer",
});

export const ListMenu = styled("ul")(({ theme }) => ({
  top: "105%",
  right: "0",
  width: "100%",
  position: "absolute",
  backgroundColor: "#fff",
  boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
  // ESTILO RESPONSIVO
  [theme.breakpoints.up("md")]: {
    width: "190px",
  },
  [theme.breakpoints.up("lg")]: {
    width: "190px",
  },
}));

export const Option = styled("li")({
  display: "flex",
  cursor: "pointer",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "10px",
  width: "100%",
  ":hover": {
    backgroundColor: "#ddd",
  },
});
