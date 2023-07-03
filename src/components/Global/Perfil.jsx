// :::::MATERIAL UI:::::
import { Box, Stack, Typography } from "@mui/material";

// :::::COMPONENTE PARA EL PERFIL (PARA PODER REUTILIZAR):::::
const Perfil = ({ foto, trabajo, nombre, direccion, horizontal }) => {
  return (
    <Box>
      <Stack
        direction={horizontal ? "row" : "column"}
        alignItems="center"
        spacing={2}
      >
        <img style={{ width: "100px", height: "100px" }} src={foto} alt="img" />
        <Box>
          <Typography sx={{ fontSize: "18px", fontWeight: 400 }}>
            {nombre}
          </Typography>
          {trabajo.length > 0 && (
            <Typography sx={{ fontSize: "14px", fontWeight: 300 }}>
              {trabajo}
            </Typography>
          )}
          {direccion.length > 0 && <Typography>{trabajo}</Typography>}
        </Box>
      </Stack>
    </Box>
  );
};

export default Perfil;
