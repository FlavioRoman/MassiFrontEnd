// ESTILO
import { Item } from "../style";
// COMPONENTES
import TeamWork from "./TeamWork";
import CardReview from "./CardReview";
// MATERIAL UI
import { Box, Grid, Stack, Typography } from "@mui/material";

// COMPONENTE PARA LA SUPERIOR
const Application = () => {
  return (
    <>
      <Box>
        <Grid
          container
          direction="row"
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
            <Stack direction="row" spacing={1}>
              <Item>Pasante</Item>
              <Item>Tiempo parcial</Item>
              <Item>Ad ho</Item>
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Typography
          sx={{
            margin: "5px 0",
            color: "#C6351D",
            fontWeight: "400",
            fontSize: "1.3rem",
          }}
        >
          Etapa 1 de 5
        </Typography>
        <Typography
          sx={{ color: "#000000", fontWeight: "400", fontSize: "1.8rem" }}
        >
          Revisión de documentos
        </Typography>
      </Box>
      <Box>
        <Grid container>
          <Grid item sm={12} md={8}>
            <CardReview />
          </Grid>
          <Grid item sm={12} md={4}>
            <TeamWork />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Application;
