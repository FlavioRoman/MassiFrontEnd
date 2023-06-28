import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {
  Title,
  Option,
  Stages,
  Section,
  Article,
  BoxStages,
  ButtonCloseStage,
} from "./styleRevision";

const etapas = [
  { text: "Revisión de documentos", bgColor: "#055B5A" },
  { text: "Entrevista 1", bgColor: "#E25139" },
  { text: "Evaluación", bgColor: "#F9B438" },
  { text: "Entrevista 2", bgColor: "#7659A0" },
  { text: "Decisión Final", bgColor: "#055B5A" },
];

const Etapa = () => {
  return (
    <Section>
      <Article>
        <Title>
          <ArrowBackIosIcon />
          Auxiliar Administrativo
        </Title>
        <Option>
          <MoreHorizIcon />
        </Option>
      </Article>
      <BoxStages>
        {etapas.map((value, index) => {
          return (
            <Stages sx={{ backgroundColor: `${value.bgColor}}` }} key={index}>
              {value.text}
            </Stages>
          );
        })}
      </BoxStages>
      <ButtonCloseStage>CERRAR ETAPA</ButtonCloseStage>
    </Section>
  );
};

export default Etapa;
