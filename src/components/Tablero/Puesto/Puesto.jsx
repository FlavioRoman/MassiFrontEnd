// :::::ESTILO:::::
import { Item } from "../style";
// :::::COMPONENTES:::::
import CardRevision from "./CardRevision";
import EquipoTrabajo from "./EquipoTrabajo";
// :::::MATERIAL UI:::::
import { Box, Grid, Stack, Typography } from "@mui/material";

// :::::COMPONENTE PARA LA SUPERIOR:::::
const Puesto = () => {
  return (
    <>
      {/* :::::TITULO CON INFO SOBRE EL PUESTO::::: */}
      <Box>
        <Grid
          container
          direction="row"
          sx={{ padding: "0 20px" }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item sm={12} lg={6}>
            <Typography
              variant="h1"
              sx={{
                color: "#C6351D",
                margin: "20px 0",
                fontWeight: "700",
                fontSize: "2.2rem",
                fontFamily: "'Comfortaa', cursive",
              }}
            >
              Auxiliar Administrativo
            </Typography>
          </Grid>
          <Grid item sm={12} lg={6}>
            <Stack direction="row" justifyContent="flex-end" spacing={1}>
              <Item>Pasante</Item>
              <Item>Tiempo parcial</Item>
              <Item>Ad ho</Item>
            </Stack>
          </Grid>
        </Grid>
      </Box>
      {/* :::::ETAPAS::::: */}
      <Box>
        <Typography
          sx={{
            padding: "0 20px",
            margin: "5px 0",
            color: "#C6351D",
            fontWeight: "400",
            fontSize: "1.3rem",
          }}
        >
          Etapa 1 de 5
        </Typography>
        <Typography
          sx={{
            color: "#000000",
            fontWeight: "400",
            fontSize: "1.8rem",
            padding: "0 20px",
          }}
        >
          Revisión de Documentos
        </Typography>
      </Box>
      {/* :::::REVISION DE DOCUMENTOS (CANDIDATOS ACTIVOS, MENSAJES NUEVOS Y POSTULACIONES A REVISAR) Y (EQUIPO DE TRABAJO)::::: */}
      <Box>
        <Grid container>
          <Grid item sm={12} md={8}>
            <CardRevision />
          </Grid>
          <Grid item sm={12} md={4}>
            <EquipoTrabajo />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Puesto;
