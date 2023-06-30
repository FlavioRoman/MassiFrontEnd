// ICONOS
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// ESTILOS
import {
  Title,
  Stages,
  Option,
  Section,
  Article,
  ListMenu,
  BoxStages,
  ButtonCloseStage,
} from "./style";
// HOOK
import { useState } from "react";
import { Link } from "react-router-dom";

const etapas = [
  { text: "Revisión de documentos", bgColor: "#055B5A", path: "#" },
  { text: "Entrevista 1", bgColor: "#E25139", path: "/revision" },
  { text: "Evaluación", bgColor: "#F9B438", path: "#" },
  { text: "Entrevista 2", bgColor: "#7659A0", path: "#" },
  { text: "Decisión Final", bgColor: "#055B5A", path: "#" },
];

const Etapa = () => {
  const [show, setShow] = useState(false);
  return (
    <Section>
      <Article>
        <Title>
          <ArrowBackIosIcon />
          Auxiliar Administrativo
        </Title>
        <button onClick={() => setShow(!show)}>
          <MoreHorizIcon />
        </button>
        {show && (
          <ListMenu>
            <Option>Configuración de convocatoria</Option>
            <Option>Cerrar etapa 1</Option>
          </ListMenu>
        )}
      </Article>
      <BoxStages>
        {etapas.map((value, index) => {
          return (
            <Link key={index} to={`${value.path}`}>
              <Stages sx={{ backgroundColor: `${value.bgColor}}` }} key={index}>
                {value.text}
              </Stages>
            </Link>
          );
        })}
      </BoxStages>
      <ButtonCloseStage>CERRAR ETAPA</ButtonCloseStage>
    </Section>
  );
};

export default Etapa;
