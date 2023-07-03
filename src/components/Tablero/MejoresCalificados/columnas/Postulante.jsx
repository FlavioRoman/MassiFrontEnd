// :::::IMAGEN:::::
import avatar01 from "../../../../assets/GroupBoard1.png";
// :::::MATERIAL UI:::::
import { Box, Stack, Typography } from "@mui/material";

// ::::COMPONENTE PARA LA COLUMNA (POSTULANTE):::::
const Postulante = () => {
  return (
    <Box>
      <Stack direction="row" alignItems="center" spacing={2}>
        <img
          style={{ width: "100px", height: "100px" }}
          src={avatar01}
          alt="img"
        />
        <Box>
          <Typography fontSize="18px" fontWeight="400">
            Lucía Jazmin Zárate
          </Typography>
          <Typography fontSize="14px" fontWeight="300">
            Lic. en Administración
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default Postulante;
