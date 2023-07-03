// :::::ICONO:::::
import StarIcon from "@mui/icons-material/Star";
// :::::ESTILO:::::
import { Stack, Typography } from "@mui/material";

// :::::COMPONENTE PARA LA COLUMNA (CALIFICACION):::::
const Calificacion = () => {
  return (
    <Stack
      container
      direction="row"
      alignItems="center"
      justifyContent="center"
      spacing={2}
    >
      <StarIcon style={{ fill: "#F9B438", width: "50px", height: "50px" }} />
      <Typography sx={{ fontSize: "1.3rem", fontWeight: "400" }}>6</Typography>
    </Stack>
  );
};

export default Calificacion;
