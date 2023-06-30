// MATERIAL UI
import { Box, styled } from "@mui/material";
import TextareaAutosize from "@mui/base/TextareaAutosize";
// ESTILO
import { Container } from "../style";
// COMPONENTE
import SaveButton from "../Buttons/SaveButton";

const StyledTextarea = styled(TextareaAutosize)(
  ({ theme }) => `
      width: 100%;
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.5;
      padding: 12px;
    `
);

const NotaForm = () => {
  return (
    <Container sx={{ padding: "30px" }}>
      <h5>Notas de la entrevista</h5>
      <Box sx={{ width: "100%", marginTop: "50px" }}>
        <StyledTextarea
          minRows={5}
          aria-label="minimum height"
          placeholder="Breve Descripción"
        />
        <SaveButton text={"GUARDAR"} />
      </Box>
    </Container>
  );
};

export default NotaForm;
