// :::::ESTILO:::::
import { Section } from "../style";
// :::::COMPONENTES:::::
import Puesto from "./Puesto/Puesto";
import MejoresCalificados from "./MejoresCalificados/MejoresCalificados";

// :::::COMPONENTE PADRE:::::
const Tablero = () => {
  return (
    <Section>
      <Puesto />
      <MejoresCalificados />
    </Section>
  );
};

export default Tablero;
