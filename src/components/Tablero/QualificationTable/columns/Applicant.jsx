// IMAGENES
import { Box, Stack, Typography } from "@mui/material";
import avatar01 from "../../../../assets/GroupBoard1.png";
// ESTILOS

const Applicant = () => {
  return (
    <Box>
      <Stack direction="row" alignItems="center" spacing={2}>
        <img
          src={avatar01}
          alt=""
          style={{ width: "100px", height: "100px" }}
        />
        <Stack direction="column">
          <Typography sx={{ fontSize: "18px", fontWeight: "400" }}>
            Lucía Jazmin Zárate
          </Typography>
          <Typography sx={{ fontSize: "12px", fontWeight: "300" }}>
            Lic. en Administración
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Applicant;
