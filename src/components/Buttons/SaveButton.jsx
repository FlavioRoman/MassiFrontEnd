import { styled } from "@mui/material";

const StyleSaveButton = styled("button")({
  height: "44px",
  width: "116px",
  fontSize: "16px",
  color: "#FFFFFF",
  fontWeight: "600",
  borderRadius: "16px",
  backgroundColor: "#E25139",
  fontFamily: "'Jost', sans-serif",
  margin: "10px 0 10px auto",
  display: "block",
});

const SaveButton = ({ text }) => {
  return <StyleSaveButton>{text}</StyleSaveButton>;
};

export default SaveButton;
