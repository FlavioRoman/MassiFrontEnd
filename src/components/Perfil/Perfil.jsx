// :::::COMPONENTES:::::
import Chat from "../Mensajes/Chat";
import Postulante from "./Postulante";
import Etapa from "../Revision/Etapa";
import Referencias from "./Referencias";
import Informacion from "./Informacion";
import { CustomBox, Section } from "../style";

// :::::COMPONENTE PADRE:::::
const Perfil = () => {
  return (
    <>
      <Etapa />
      <Postulante />
      <Informacion />
      <Referencias />
      <CustomBox>
        <Chat />
      </CustomBox>
    </>
  );
};

export default Perfil;
