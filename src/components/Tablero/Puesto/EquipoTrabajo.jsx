// :::::IMAGENES:::::
import avatar01 from "../../../assets/GroupBoard1.png";
import avatar02 from "../../../assets/GroupBoard2.png";
import avatar03 from "../../../assets/GroupBoard3.png";
import avatar04 from "../../../assets/GroupBoard4.png";
// :::::MATERIAL UI:::::
import { Box, Grid, Stack, Typography } from "@mui/material";
import Perfil from "../../Global/Perfil";

// :::::ARRAY DE OBJETOS PARA TESTING:::::
const testing = [
  {
    job: "Encargado",
    img: avatar01,
    name: "Lucía Romero",
  },
  {
    job: "Colaborador",
    img: avatar02,
    name: "Andrea Chávez",
  },
  {
    job: "Colaborador",
    img: avatar03,
    name: "Luis Delgado",
  },
  {
    job: "Colaborador",
    img: avatar04,
    name: "Ariana Ramos",
  },
];

// :::::COMPONENTE PARA (EQUIPO DE TRABAJO):::::
const EquipoTrabajo = () => {
  return (
    <>
      {/* :::::TITULO::::: */}
      <Typography fontSize="14px" marginTop="10px" fontWeight="300">
        Equipo de trabajo
      </Typography>
      <Grid container direction="row">
        {/* :::::BUCLE PARA REPERTIR 4 VECES EL LO MISMO::::: */}
        {testing.map((value, index) => (
          <Stack
            key={index}
            margin="10px"
            direction="row"
            textAlign="center"
            alignItems="center"
          >
            {/* :::::DATOS DEL EQUIPO DE TRABAJO::::: */}
            <Stack direction="column" alignItems="center" spacing={1}>
              <img
                alt="img"
                src={value.img}
                style={{ width: "64px", height: "64px" }}
              />
              <Box>
                <Typography sx={{ fontSize: "18px", fontWeight: 400 }}>
                  {value.name}
                </Typography>
                <Typography sx={{ fontSize: "14px", fontWeight: 300 }}>
                  {value.job}
                </Typography>
              </Box>
            </Stack>
          </Stack>
        ))}
      </Grid>
    </>
  );
};

export default EquipoTrabajo;
