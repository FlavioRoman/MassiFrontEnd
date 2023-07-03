// :::::ESTILOS:::::
import { Estado, Img } from "./style";
// :::::REACT ROUTER:::::
import { Link } from "react-router-dom";
// :::::IMAGEN:::::
import avatar01 from "../../assets/GroupBoard1.png";
// :::::MATERIAL UI:::::
import { Box, Stack, Typography } from "@mui/material";

const CardEvaluacion = () => {
  return (
    <Box
      sx={{
        minWidth: "250px",
        borderRadius: "20px",
        boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
      }}
    >
      {/* :::::ESTADO::::: */}
      <Estado sx={{ textAlign: "left" }}>Aprobado</Estado>
      {/* :::::SOBRE LA PERSONA::::: */}
      <Stack
        padding="20px"
        direction="column"
        alignItem="center"
        justifyContent="center"
      >
        <Img src={avatar01} />
        <Typography
          color="#2C2D2D"
          fontSize="18px"
          fontWeight="400"
          textAlign="center"
        >
          Javier Rivas
        </Typography>
        <Typography
          color="#2C2D2D"
          fontSize="12px"
          fontWeight="300"
          textAlign="center"
        >
          Lic. en administración
        </Typography>
      </Stack>
      {/* :::::COMPATIBILIDAD::::: */}
      <Stack padding="10px" direction="row" justifyContent="center" spacing={2}>
        <Stack width="100px">
          <Typography
            color="#2C2D2D"
            fontSize="28px"
            fontWeight="400"
            textAlign="center"
          >
            84%
          </Typography>
          <Typography
            color="#2C2D2D"
            fontSize="12px"
            fontWeight="300"
            textAlign="center"
          >
            Compatibilidad con el cargo
          </Typography>
        </Stack>
        <Stack width="100px">
          <Typography
            color="#2C2D2D"
            fontSize="28px"
            fontWeight="400"
            textAlign="center"
          >
            0
          </Typography>
          <Typography
            color="#2C2D2D"
            fontSize="12px"
            fontWeight="300"
            textAlign="center"
          >
            Calificación Grupal
          </Typography>
        </Stack>
      </Stack>
      {/* :::::BOTON PARA VER LA POSTULACION::::: */}
      <Link to="/perfil">
        <Typography
          padding="20px"
          color="#E25139"
          fontWeight="600"
          textAlign="center"
        >
          VER POSTULACION
        </Typography>
      </Link>
    </Box>
  );
};

export default CardEvaluacion;
