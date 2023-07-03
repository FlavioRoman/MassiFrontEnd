// :::::ESTILO:::::
import { Section } from "../style";
// :::::COMPONENTES:::::
import Puesto from "./Puesto/Puesto";
import MejoresCalificados from "./MejoresCalificados/MejoresCalificados";

// :::::COMPONENTE TABLERO EN DONDE MUESTRA LA PARTE SUPERIO (TITULO Y DEMAS) Y LA PARA INFERIOR (TABLA DE CALIFICADOS):::::
const Tablero = () => {
  return (
    <Section>
      <Puesto />
      <MejoresCalificados />
    </Section>
  );
};

export default Tablero;
