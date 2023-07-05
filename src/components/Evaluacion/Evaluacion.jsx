// :::::MATERIAL UI:::::
import { Grid } from "@mui/material";
// :::::ESTILO:::::
import { CustomBox, Section } from "../style";
import PerfilEvaluacion from "./PerfilEvaluacion";
import DetalleEvaluacion from "./DetalleEvaluacion";
import NotaEvaluacion from "./Formularios/NotaEvaluacion";
import EvaluacionCompetencia from "./Formularios/EvaluacionCompetencia";

// :::::COMPONENTE PADRE DE ESTA LA CARPETA (Evaluacion):::::
const Evaluacion = () => {
  return (
    <>
      <Section sx={{ boxShadow: "none", padding: "0" }}>
        <Grid container direction="row" spacing={2}>
          <Grid item xs={12} sm={12} lg={4}>
            <PerfilEvaluacion />
          </Grid>
          <Grid item xs={12} sm={12} lg={8}>
            <DetalleEvaluacion />
          </Grid>
        </Grid>
      </Section>
      <EvaluacionCompetencia />
      <NotaEvaluacion />
    </>
  );
};

export default Evaluacion;
