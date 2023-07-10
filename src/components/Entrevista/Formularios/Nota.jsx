// :::::ESTILO:::::
import { Section } from "../../style";
// :::::IMAGENES:::::
import BotonGuardar from "../../../assets/savebutton2.png";
// :::::MATERIAL UI:::::
import { Box, styled } from "@mui/material";
import TextareaAutosize from "@mui/base/TextareaAutosize";

// :::::ESTILO PARA EL TEXTAREA:::::
const StyledTextarea = styled(TextareaAutosize)(
  () => `
      width: 100%;
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.5;
      padding: 12px;
    `
);

// :::::COMPONENTE PARA EL FORMULARIO DE (NOTA DE ENTREVISTA):::::
const NotaForm = () => {
  return (
    <Section sx={{ padding: "30px" }}>
      <h5>Notas de la entrevista</h5>
      <Box sx={{ width: "100%", marginTop: "50px" }}>
        <StyledTextarea
          sx={{ borderBottom: "1px solid #ddd" }}
          minRows={5}
          aria-label="minimum height"
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

export default NotaForm;
