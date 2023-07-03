// :::::COMPONENTES:::::
import Postulante from "./Postulante";
import Etapa from "../Revision/Etapa";
import Referencias from "./Referencias";
import Informacion from "./Informacion";
import Chat from "../Global/Chat";

// :::::COMPONENTE PADRE:::::
const Perfil = () => {
  return (
    <>
      <Etapa />
      <Postulante />
      <Informacion />
      <Referencias />
      <Chat />
    </>
  );
};

export default Perfil;
