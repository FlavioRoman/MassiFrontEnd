// IMAGENES
import avatar01 from "../../../assets/GroupBoard1.png";
// ESTILOS
import { AvatarImg, BoxApplicant } from "../styleTablero";

const Postulante = () => {
  return (
    <>
      <BoxApplicant>
        <AvatarImg src={avatar01} alt="" />
        <div>
          <h1>Lucía Jazmin Zárate</h1>
          <p>Lic. en Administración</p>
        </div>
      </BoxApplicant>
    </>
  );
};

export default Postulante;
