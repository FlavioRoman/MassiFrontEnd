// MATERIAL UI
import { Box, styled } from "@mui/material";
import TextareaAutosize from "@mui/base/TextareaAutosize";
// ESTILO
import { Container } from "../style";
// COMPONENTE
import SaveButton from "../Buttons/SaveButton";

const StyledTextarea = styled(TextareaAutosize)({
  width: "100%",
  padding: "12px",
  fontWeight: "400",
  lineHeight: "1.5",
  fontSize: "0.875rem",
});

const PreguntasForm = () => {
  return (
    <Container sx={{ padding: "30px" }}>
      <h5>Preguntas</h5>
      <Box sx={{ width: "100%", marginTop: "50px" }}>
        <h3>1. ¿Qué hace que un equipo funcione bien?</h3>
        <StyledTextarea
          minRows={5}
          aria-label="minimum height"
          placeholder="Breve Descripción"
        />
        <SaveButton text={"GUARDAR"}></SaveButton>
      </Box>
      <Box sx={{ width: "100%" }}>
        <h3>2. ¿Qué pasos tomás antes de tomar una desición importante?</h3>
        <StyledTextarea
          minRows={5}
          aria-label="minimum height"
          placeholder="Breve Descripción"
        />
        <SaveButton text={"GUARDAR"}></SaveButton>
      </Box>
    </Container>
  );
};

export default PreguntasForm;
