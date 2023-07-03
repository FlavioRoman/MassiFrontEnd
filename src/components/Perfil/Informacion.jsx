// ICONO
import InfoIcon from "@mui/icons-material/Info";
// ESTILOS
import { BoxRequest, Section } from "./style";
import { Box, Grid } from "@mui/material";

export const Education = () => {
  return (
    <>
      <h5 style={{ margin: "20px 0" }}>Educación</h5>
      <Box>
        <Grid container spacing={2} direction="row" alignItems="center">
          <Grid item sm={6}>
            <h3>Universidad Nacional del Este</h3>
            <p>Licenciado en Administración</p>
          </Grid>
          <Grid item sm={6} sx={{ textAlign: "right" }}>
            <p>2007 - 2009</p>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export const Experience = () => {
  return (
    <>
      <h5>Experiencia laboral</h5>
      <Box sx={{ marginTop: "10px" }}>
        <Grid container direction="row" alignItems="center">
          <Grid item sm={6}>
            <h3>Datapar S.A.</h3>
          </Grid>
          <Grid item sm={6} sx={{ textAlign: "right" }}>
            <p>2007 - 2009</p>
          </Grid>
        </Grid>
        <Box>
          <Grid container sx={{ marginTop: "10px" }}>
            <Grid item sm={2} sx={{ textAlign: "left" }}>
              Cargo
            </Grid>
            <Grid item sm={10} sx={{ textAlign: "left" }}>
              Asistente Ejecutivo
            </Grid>
          </Grid>
          <Grid container sx={{ marginTop: "10px" }}>
            <Grid item sm={2} sx={{ textAlign: "left" }}>
              Funciones
            </Grid>
            <Grid item sm={10} sx={{ textAlign: "left" }}>
              <ul>
                <li>
                  - Distribución de comunicaciones internas en la empresa.
                </li>
                <li>
                  - Creación y actualización de hojas de cálculo para el
                  seguimiento, análisis y comunicación sobre rendimientos y
                  datos comerciales.
                </li>
              </ul>
            </Grid>
          </Grid>
          <Grid container sx={{ marginTop: "10px" }}>
            <Grid item sm={2} sx={{ textAlign: "left" }}>
              Contacto
            </Grid>
            <Grid item sm={10} sx={{ textAlign: "left" }}>
              +595 61 560 1000
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export const Documents = () => {
  return (
    <>
      <Box sx={{ marginTop: "10px" }}>
        <h5>Documentos</h5>
        <ul>
          <li style={{ margin: "10px 0" }}>copiadeCedula.pdf</li>
          <li style={{ margin: "10px 0" }}>FotoCarnet.jpg</li>
          <li style={{ margin: "10px 0" }}>copiaRegistroConducir.pdf</li>
        </ul>
      </Box>
    </>
  );
};

const Informacion = () => {
  return (
    <Section sx={{ padding: "20px", boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)" }}>
      {/* :::::TITULO::::: */}
      <h5 style={{ margin: "20px 0" }}>Información del postulante</h5>
      {/* :::::COMPONENTE EDUCACION::::: */}
      <Education />
      {/* :::::COMPONENTE EXPERENCIA::::: */}
      <Experience />
      {/* :::::COMPONENTE DOCUMENTOS::::: */}
      <Documents />
      {/* :::::SOLICITAR INFORMACION::::: */}
      <BoxRequest>
        SOLICITAR INFORMACIÓN <InfoIcon color="#E25139" />
      </BoxRequest>
    </Section>
  );
};

export default Informacion;
