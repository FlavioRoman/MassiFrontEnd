import { styled } from "@mui/material";

const StyleViewButton = styled("button")({
  height: "44px",
  fontSize: "14px",
  minWidth: "180px",
  fontWeight: "600",
  borderRadius: "32px",
  fontFamily: "'Jost', sans-serif",
  border: "2px solid #E25139",
  margin: "20px 0 10px auto",
  display: "block",
  color: "#E25139",
  ":hover": {
    color: "#fff",
    backgroundColor: "#E25139",
  },
});

const ViewButton = ({ text }) => {
  return <StyleViewButton>{text}</StyleViewButton>;
};

export default ViewButton;
