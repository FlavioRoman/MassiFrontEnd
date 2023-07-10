import { styled } from "@mui/material";

export const Section = styled("section")(({ theme }) => ({
  padding: "20px",
  marginLeft: "auto",
  borderRadius: "20px",
  width: "calc(100% - 60px)",
  [theme.breakpoints.up("md")]: {
    width: "calc(100% - 240px)",
  },
}));

export const Title = styled("h1")({
  color: "#000000",
});

export const Article = styled("article")({
  color: "#000000",
});

export const SubTitle = styled("h3")({
  color: "#000000",
  marginTop: "10px",
});

export const Text = styled("p")({
  color: "#000000",
  textAlign: "justify",
});

export const List = styled("ol")({
  color: "#000000",
});

export const Item = styled("li")({
  color: "#000000",
  marginTop: "10px",
  marginLeft: "10px",
  textAlign: "justify",
});
