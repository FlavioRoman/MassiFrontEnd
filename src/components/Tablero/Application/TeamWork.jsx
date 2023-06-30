// IMAGENES
import avatar01 from "../../../assets/GroupBoard1.png";
import avatar02 from "../../../assets/GroupBoard2.png";
import avatar03 from "../../../assets/GroupBoard3.png";
import avatar04 from "../../../assets/GroupBoard4.png";
// MATERIAL UI
import { Container, Grid, Stack, Typography } from "@mui/material";

// ARRAY DE OBJETOS PARA TESTING.
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

// COMPONENTE PARA (EQUIPO DE TRABAJO).
const TeamWork = () => {
  return (
    <Container>
      {/* TITULO */}
      <Typography
        sx={{
          fontSize: "14px",
          marginTop: "10px",
          fontWeight: "300",
          fontFamily: " 'Merriweather Sans', sans-serif",
        }}
      >
        Equipo de trabajo
      </Typography>
      <Grid container direction="row">
        {/* BUCLE PARA REPERTIR 4 VECES EL LO MISMO */}
        {testing.map((value, index) => (
          <Stack
            key={index}
            direction="column"
            textAlign="center"
            alignItems="center"
            sx={{ margin: "10px" }}
          >
            <img
              alt="team"
              src={value.img}
              style={{ width: "80px", height: "80px" }}
            />
            <div>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "300",
                  fontFamily: " 'Merriweather Sans', sans-serif",
                }}
              >
                {value.job}
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "300",
                  fontFamily: " 'Merriweather Sans', sans-serif",
                }}
              >
                {value.name}
              </Typography>
            </div>
          </Stack>
        ))}
      </Grid>
    </Container>
  );
};

export default TeamWork;
