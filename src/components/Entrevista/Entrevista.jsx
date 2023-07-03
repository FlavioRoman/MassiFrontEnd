// :::::MATERIAL UI:::::
import { Box, Grid } from "@mui/material";
// :::::COMPONENTES:::::
import Chat from "../Global/Chat";
import Estado from "../Global/Estado";
import NotaForm from "./Formularios/NotaForm";
import DetalleEntrevista from "./DetalleEntrevista";
import PreguntasForm from "./Formularios/PreguntasForm";
import EvaluacionForm from "./Formularios/EvaluacionForm";
import Perfil from "./Perfil";

const Entrevista = () => {
  return (
    <>
      <Box>
        <Grid container direction="row">
          <Grid item sm={12} lg={6}>
            <Perfil />
          </Grid>
          <Grid item sm={12} lg={6}>
            <DetalleEntrevista />
          </Grid>
        </Grid>
      </Box>
      <EvaluacionForm />
      <PreguntasForm />
      <NotaForm />
      <Chat />
    </>
  );
};

export default Entrevista;
