// :::::MATERIAL UI:::::
import { Box, Grid, Stack, Typography } from "@mui/material";
import Estado from "../Global/Estado";
import { Imagen } from "./style";
// ::::: IMAGEN :::::
import Img from "../../assets/GroupBoard1.png";
import BotonCalificar from "../../assets/qualification.png";
import CircularProgress from "@mui/material/CircularProgress";
import { useState } from "react";
import { Progress } from "../style";

const PerfilEvaluacion = () => {
  const [progress, setProgress] = useState(73);
  return (
    <Box
      height="100%"
      borderRadius="20px"
      boxShadow="0 3px 10px rgb(0 0 0 / 0.2)"
    >
      <Estado estado={"pendiente"} />
      <Grid
        container
        height="100%"
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={4}
      >
        <Grid item>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Imagen src={Img} />
            <Stack>
              <Typography fontSize="28px" fontWeight="400">
                Derlis Cantero
              </Typography>
              <Typography fontSize="18px" fontWeight="400">
                Lic. en administración
              </Typography>
              <Typography fontSize="18px" fontWeight="400">
                23 años - Asunción
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        {/* :::::CIRCULO PROGRESO::::: */}
        <Grid item>
          <Progress>
            <CircularProgress
              size={70}
              variant="determinate"
              value={progress}
            />
            <Typography fontSize="18px" fontWeight="400">
              Calificación
            </Typography>
          </Progress>
        </Grid>
        {/* :::::BOTON CALIFICAR::::: */}
        <Grid item alignSelf="flex-end">
          <img
            style={{
              width: "101px",
              height: "44px",
              display: "block",
              cursor: "pointer",
              margin: "5px 5px 5px auto",
            }}
            src={BotonCalificar}
            alt="qualification.png"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default PerfilEvaluacion;
