// :::::IMAGENES:::::
import BotonGuardar from "../../../assets/savebutton2.png";
// :::::ESTILO:::::
import { Section } from "../../style";
// :::::MATERIAL UI:::::
import { Box, styled } from "@mui/material";
import TextareaAutosize from "@mui/base/TextareaAutosize";
// :::::ESTILO PARA EL TEXTAREA:::::
const StyledTextarea = styled(TextareaAutosize)({
  width: "100%",
  padding: "12px",
  fontWeight: "400",
  lineHeight: "1.5",
  fontSize: "0.875rem",
});

// :::::COMPONENTE PARA EL FORMULARIO DE (PREGUNTAS):::::
const PreguntasForm = () => {
  return (
    <Section sx={{ padding: "30px" }}>
      <h5>Preguntas</h5>
      <Box sx={{ width: "100%", marginTop: "50px" }}>
        <h3>1. ¿Qué hace que un equipo funcione bien?</h3>
        <StyledTextarea
          minRows={5}
          sx={{ borderBottom: "1px solid #ddd" }}
          aria-label="minimum height"
          placeholder="Breve Descripción"
        />
        <img
          style={{
            width: "120px",
            display: "block",
            cursor: "pointer",
            margin: "5px 5px 5px auto",
          }}
          src={BotonGuardar}
        />
      </Box>
      <Box sx={{ width: "100%" }}>
        <h3>2. ¿Qué pasos tomás antes de tomar una desición importante?</h3>
        <StyledTextarea
          minRows={5}
          sx={{ borderBottom: "1px solid #ddd" }}
          aria-label="minimum height"
          placeholder="Breve Descripción"
        />
        <img
          style={{
            width: "120px",
            display: "block",
            cursor: "pointer",
            margin: "5px 5px 5px auto",
          }}
          src={BotonGuardar}
        />
      </Box>
    </Section>
  );
};

export default PreguntasForm;
