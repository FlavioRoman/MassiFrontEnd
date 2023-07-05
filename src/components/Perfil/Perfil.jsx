// :::::COMPONENTES:::::
import Chat from "../Mensajes/Chat";
import Postulante from "./Postulante";
import Etapa from "../Revision/Etapa";
import Referencias from "./Referencias";
import Informacion from "./Informacion";
// :::::ESTILO:::::
import { CustomBox } from "../style";

// :::::COMPONENTE PADRE:::::
const Perfil = () => {
  return (
    <>
      {/* :::::COMPONENTE PARA LAS ETAPAS::::: */}
      <Etapa />
      {/* :::::COMPONENTE PARA MOSTRAR PERFIL DEL POSTULANTE::::: */}
      <Postulante />
      {/* :::::COMPONENTE PARA MOSTRAR MAS INFO DEL POSTULANTE (EDUCACION,EXPERIENCA LABORAL, ETC):::::S */}
      <Informacion />
      {/* :::::COMPONENTE PARA MOSTRAR REFERENCIAS SI LAS TIENE::::: */}
      <Referencias />
      {/* :::::COMPONENTE PARA EL CHAT::::: */}
      <CustomBox>
        <Chat />
      </CustomBox>
    </>
  );
};

export default Perfil;
