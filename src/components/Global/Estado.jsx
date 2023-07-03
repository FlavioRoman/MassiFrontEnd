// :::::MATERIAL UI:::::
import { Box, Typography } from "@mui/material";

// :::::OBJETO ESTILO:::::
const estilo = {
  width: "100%",
  height: "50px",
  color: "#ffff",
  textAlign: "center",
  padding: "15px 10px",
  backgroundColor: "#F9B438",
  borderTopLeftRadius: "20px",
  borderTopRightRadius: "20px",
  boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
};

const Estado = ({ estado }) => {
  return (
    <Box sx={estilo}>
      <Typography>{estado}</Typography>
    </Box>
  );
};

export default Estado;
