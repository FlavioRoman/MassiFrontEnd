// IMAGENE
import avatar01 from "../../../../assets/GroupBoard1.png";
// MATERIAL UI
import { Stack } from "@mui/material";
// :::::COMPONENTE:::::
import Perfil from "../../../Global/Perfil";

// ::::COMPONENTE PARA LA COLUMNA (POSTULANTE):::::
const Postulante = () => {
  return (
    <Stack direction="row" alignItems="center" spacing={3}>
      <Perfil
        foto={avatar01}
        nombre={"Lucía Jazmin Zárate"}
        trabajo={"Lic. en Administración"}
        direccion={""}
        horizontal={true}
      />
    </Stack>
  );
};

export default Postulante;
