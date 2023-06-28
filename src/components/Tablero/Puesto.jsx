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
  BoxCard,
  BoxList,
  Card,
  Flex,
  Item,
  List,
  Title,
  TeamList,
  TeamWork,
  CardText,
  AvatarImg,
  CardNumber,
  CardContent,
  ReviewTitle,
  TeamWorkTitle,
  DocumentReview,
  ReviewSubTitle,
} from "./styleTablero";

const Puesto = () => {
  return (
    <>
      <Flex>
        <Title>Auxiliar Administrativo</Title>
        <List>
          <Item>Pasante</Item>
          <Item>Tiempo parcial</Item>
          <Item>Ad ho</Item>
        </List>
      </Flex>
      <Flex>
        <DocumentReview>
          <ReviewTitle>Etapa 1 de 5</ReviewTitle>
          <ReviewSubTitle>Revisión de documentos</ReviewSubTitle>
          <BoxCard>
            <Card>
              <PersonIcon
                style={{ fill: "#7659A0", width: "60px", height: "60px" }}
              />
              <CardContent>
                <CardNumber>91</CardNumber>
                <CardText>Candidatos Activos</CardText>
              </CardContent>
            </Card>
            <Card>
              <MessageIcon
                style={{ fill: "#F9B438", width: "60px", height: "60px" }}
              />
              <CardContent>
                <CardNumber>3</CardNumber>
                <CardText>Mensajes Nuevos</CardText>
              </CardContent>
            </Card>
            <Card>
              <AssignmentIcon
                style={{ fill: "#055B5A", width: "60px", height: "60px" }}
              />
              <CardContent>
                <CardNumber>83</CardNumber>
                <CardText>Postulaciones a revisar</CardText>
              </CardContent>
            </Card>
          </BoxCard>
        </DocumentReview>
        <TeamWork>
          <TeamWorkTitle>Equipo de trabajo</TeamWorkTitle>
          <BoxList>
            <TeamList>
              <AvatarImg src={avatar01} alt="team" />
              <span>Encargado</span>
              <p>Lucía Romero</p>
            </TeamList>
            <TeamList>
              <AvatarImg src={avatar02} alt="team" />
              <span>Colaborador</span>
              <p>Andrea Chávez</p>
            </TeamList>
            <TeamList>
              <AvatarImg src={avatar03} alt="team" />
              <span>Colaborador</span>
              <p>Luis Delgado</p>
            </TeamList>
            <TeamList>
              <AvatarImg src={avatar04} alt="team" />
              <span>Colaborador</span>
              <p>Ariana Ramos</p>
            </TeamList>
          </BoxList>
        </TeamWork>
      </Flex>
    </>
  );
};

export default Puesto;
