// :::::IMAGEN:::::
import avatar01 from "../../assets/GroupBoard1.png";
// :::::ICONO:::::
import StarIcon from "@mui/icons-material/Star";
// :::::ESTILOS:::::
import {
  Job,
  Star,
  Name,
  State,
  Image,
  Avatar,
  BoxCard,
  Statistics,
  Percentage,
  ButtonProfile,
} from "./style";
// :::::REACT ROUTER:::::
import { Link } from "react-router-dom";

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
      <Link to="/perfil">
        <ButtonProfile type="button">VER PERFIL</ButtonProfile>
      </Link>
    </BoxCard>
  );
};

export default Card;
