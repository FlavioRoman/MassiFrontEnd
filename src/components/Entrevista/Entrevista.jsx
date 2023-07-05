// :::::MATERIAL UI:::::
import { Grid } from "@mui/material";
// :::::COMPONENTES:::::
import Perfil from "./Perfil";
import Chat from "../Mensajes/Chat";
import NotaForm from "./Formularios/NotaForm";
import DetalleEntrevista from "./DetalleEntrevista";
import PreguntasForm from "./Formularios/PreguntasForm";
import EvaluacionForm from "./Formularios/EvaluacionForm";
// :::::ESTILO:::::
import { CustomBox, Section } from "../style";

// :::::COMPONENTE PADRE DE ESTA LA CARPETA (Entrevista):::::
const Entrevista = () => {
  return (
    <>
      <Section sx={{ boxShadow: "none", padding: "0" }}>
        <Grid container direction="row" spacing={2}>
          <Grid item sm={12} lg={4}>
            <Perfil />
          </Grid>
          <Grid item sm={12} lg={8}>
            <DetalleEntrevista />
          </Grid>
        </Grid>
      </Section>
      {/* ::::COMPONENTES FORMULARIOS::::: */}
      <EvaluacionForm />
      <PreguntasForm />
      <NotaForm />
      <CustomBox>
        <Chat />
      </CustomBox>
    </>
  );
};

export default Entrevista;
