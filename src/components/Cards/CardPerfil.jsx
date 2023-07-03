// :::::IMAGEN:::::
import avatar01 from "../../assets/GroupBoard1.png";
// :::::ICONO:::::
import StarIcon from "@mui/icons-material/Star";
// :::::ESTILOS:::::

// :::::REACT ROUTER:::::
import { Link } from "react-router-dom";
import {
  BoxCard,
  ButtonProfile,
  Estado,
  Image,
  Img,
  Job,
  Name,
  Percentage,
  Star,
  State,
  Statistics,
} from "./style";
import { Avatar, Box, Stack, Typography } from "@mui/material";

const CardPerfil = () => {
  return (
    <Box
      minWidth="250px"
      borderRadius="20px"
      boxShadow="0 3px 10px rgb(0 0 0 / 0.2)"
    >
      <Estado sx={{ textAlign: "center" }}>Aprobado</Estado>
      <Box padding="20px">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack direction="row" alignItems="center">
            <StarIcon
              style={{ fill: "#F9B438", width: "30px", height: "30px" }}
            />
            <Typography
              fontSize="18px"
              fontWeight="400"
              fontFamily="'Comfortaa', cursive"
            >
              4
            </Typography>
          </Stack>
          <Typography
            fontSize="28px"
            fontWeight="400"
            fontFamily="'Comfortaa', cursive"
          >
            99%
          </Typography>
        </Stack>
        <Stack>
          <Img src={avatar01} />
          <Typography
            color="#2C2D2D"
            fontSize="18px"
            fontWeight="400"
            textAlign="center"
            fontFamily="'Jost', sans-serif"
          >
            Javier Rivas
          </Typography>
          <Typography
            color="#2C2D2D"
            fontSize="18px"
            fontWeight="300"
            textAlign="center"
            fontFamily="'Jost', sans-serif"
          >
            Lic. en administración
          </Typography>
        </Stack>
      </Box>
      <Link to="/perfil">
        <Typography
          padding="20px"
          color="#E25139"
          fontWeight="600"
          textAlign="center"
          fontFamily="'Jost', sans-serif"
        >
          VER PERFIL
        </Typography>
      </Link>
    </Box>
  );
};

export default CardPerfil;
