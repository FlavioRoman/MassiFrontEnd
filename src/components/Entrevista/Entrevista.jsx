// :::::MATERIAL UI:::::
import { Box, Grid } from "@mui/material";
// :::::COMPONENTES:::::
import NotaForm from "./Formularios/NotaForm";
import DetalleEntrevista from "./DetalleEntrevista";
import PreguntasForm from "./Formularios/PreguntasForm";
import EvaluacionForm from "./Formularios/EvaluacionForm";
import Chat from "../Mensajes/Chat";
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
      <Chat />
      <NotaForm />
    </>
  );
};

export default Entrevista;
