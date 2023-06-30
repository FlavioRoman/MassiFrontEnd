// COMPONENTES
import Etapa from "../Revision/Etapa";
import Chat from "./Chat";
import Informacion from "./Informacion";
import Postulante from "./Postulante";
import Referencias from "./Referencias";

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
