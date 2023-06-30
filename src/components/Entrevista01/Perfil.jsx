// IMAGEN
import Image from "../../assets/GroupBoard1.png";
// ESTILO
import { About, Info, People } from "./style";
import { Avatar, Container, State } from "../style";
// ICONO
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, Grid, Stack } from "@mui/material";

const Perfil = () => {
  return (
    <Container>
      <State>
        Aprobado <KeyboardArrowDownIcon />
      </State>
      <Box>
        <Grid
          container
          spacing={3}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <img src={Image} alt="image" />
          </Grid>
          <Grid item>
            <Stack spacing={1}>
              <h1>Derlis Cantero</h1>
              <h5>Lic. en administración</h5>
              <h5>23 años - Asunción</h5>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Perfil;
