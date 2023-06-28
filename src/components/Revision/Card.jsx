// ICONO
import StarIcon from "@mui/icons-material/Star";
// ESTILOS
import {
  Star,
  State,
  BoxCard,
  Statistics,
  Percentage,
  Image,
  Avatar,
  ButtonProfile,
  Name,
  Job,
} from "./styleRevision";
import avatar01 from "../../assets/GroupBoard1.png";

const Card = () => {
  return (
    <BoxCard>
      <State>Aprobado</State>
      <Statistics>
        <Star>
          <StarIcon
            style={{ fill: "#F9B438", width: "30px", height: "30px" }}
          />
          <span>4</span>
        </Star>
        <Percentage>99%</Percentage>
      </Statistics>
      <Avatar>
        <Image src={avatar01} />
        <Name>Javier Rivas</Name>
        <Job>Lic. en administración</Job>
      </Avatar>
      <ButtonProfile type="button">VER PERFIL</ButtonProfile>
    </BoxCard>
  );
};

export default Card;
