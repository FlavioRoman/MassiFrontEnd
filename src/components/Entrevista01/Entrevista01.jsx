// ESTILO
import { About, Info, People } from "./style";
import { Avatar, Container, Flex, State } from "../style";
// ICONO
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// COMPONENTES
import Perfil from "./Perfil";
import DetalleForm from "./DetalleForm";
import { Box, Grid } from "@mui/material";
import EvaluacionForm from "./EvaluacionForm";
import PreguntasForm from "./PreguntasForm";
import NotaForm from "./NotaForm";

const Entrevista01 = () => {
  return (
    <>
      <Box>
        <Grid container direction="row" alignItems="flext-start">
          <Grid item sm={12} lg={6}>
            <Perfil />
          </Grid>
          <Grid item sm={12} lg={6}>
            <DetalleForm />
          </Grid>
        </Grid>
      </Box>
      <EvaluacionForm />
      <PreguntasForm />
      <NotaForm />
    </>
  );
};

export default Entrevista01;
