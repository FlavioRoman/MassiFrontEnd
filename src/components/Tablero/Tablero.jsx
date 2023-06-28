// IMAGENES
import avatar01 from "../../assets/GroupBoard1.png";
import avatar02 from "../../assets/GroupBoard2.png";
import avatar03 from "../../assets/GroupBoard3.png";
import avatar04 from "../../assets/GroupBoard4.png";
// ICONOS
import PersonIcon from "@mui/icons-material/Person";
import MessageIcon from "@mui/icons-material/Message";
import AssignmentIcon from "@mui/icons-material/Assignment";
// ESTILOS
import {
  Flex,
  Item,
  List,
  Card,
  Title,
  BoxList,
  Section,
  BoxCard,
  TeamWork,
  TeamList,
  AvatarImg,
  CardContent,
  ReviewTitle,
  DocumentReview,
  ReviewSubTitle,
  TeamWorkTitle,
  CardNumber,
  CardText,
} from "./styleTablero";
import Calificados from "./Calificados";
import Puesto from "./Puesto";

const Tablero = () => {
  return (
    <Section>
      <Puesto />
      <Calificados />
    </Section>
  );
};

export default Tablero;
