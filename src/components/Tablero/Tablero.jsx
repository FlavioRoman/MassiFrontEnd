// ESTILOS
import { Section } from "./style";
// COMPONENTES
import Application from "./Application/Application";
import QualificationTable from "./QualificationTable/QualificationTable";

const Tablero = () => {
  return (
    <Section>
      <Application />
      <QualificationTable />
    </Section>
  );
};

export default Tablero;
