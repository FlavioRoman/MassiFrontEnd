// :::::HOOK:::::
import { useState } from "react";
// :::::MATERIAL UI:::::
import {
  Box,
  Grid,
  Stack,
  Input,
  Select,
  MenuItem,
  IconButton,
  InputLabel,
  FormControl,
  InputAdornment,
} from "@mui/material";
// :::::ESTILOS:::::
import { Section, Candidates, ContainerCard } from "./style";
// :::::COMPONENTE:::::
import Card from "./Card";
import CardEvaluacion from "../Cards/CardEvaluacion";

// :::::COMPONENTE PARA EL FILTRO DE BUSQUEDA:::::
const Filtro = () => {
  const [option, setOption] = useState("");

  const handleChange = (event) => {
    setOption(event.target.value);
  };
  return (
    <Section>
      {/* :::::FILTRO PARA BUSCAR A LOS CANDIDATOS::::: */}
      <Box sx={{ marginBottom: "20px" }}>
        <Grid container direction="row" alignItems="center" spacing={2}>
          {/* :::::CANTIDAD DE CANDIDATOS::::: */}
          <Grid item xs={12} sm={12} md={1}>
            <Candidates>
              <h1>92</h1>
              <p>Candidatos</p>
            </Candidates>
          </Grid>
          <Grid item xs={12} sm={12} md={9}>
            <FormControl sx={{ m: 1, width: "100%" }} variant="standard">
              <InputLabel htmlFor="standard-adornment-password">
                Buscar
              </InputLabel>
              <Input
                id="standard-adornment-password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton aria-label="toggle password visibility"></IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          {/* :::::SELECCION DE ORDEN::::: */}
          <Grid item xs={12} sm={12} md={2}>
            <FormControl variant="standard" sx={{ m: 1, width: "100%" }}>
              <InputLabel id="demo-simple-select-standard-label">
                Ordenar
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={option}
                onChange={handleChange}
                label="option"
              >
                <MenuItem value={10}>Compatibilidad</MenuItem>
                <MenuItem value={20}>Calificación</MenuItem>
                <MenuItem value={30}>Nombre (A-Z)</MenuItem>
                <MenuItem value={40}>Estado</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Box>
      {/* :::::RESULTADO DE FILTRO DE BUSQUEDA::::: */}
      <Box>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          sx={{ marginBottom: "30px" }}
          spacing={2}
        >
          <Stack direction="column" alignItems="center">
            <span>Todo</span> <p>(92)</p>
          </Stack>
          <Stack direction="column" alignItems="center">
            <span>Pendiente</span> <p>(3)</p>
          </Stack>
          <Stack direction="column" alignItems="center">
            <span>Aprobado</span> <p>(6)</p>
          </Stack>
          <Stack direction="column" alignItems="center">
            <span>No aprobado</span> <p>(86)</p>
          </Stack>
        </Stack>
      </Box>
      {/* :::::AQUI RENDERIZA LOS CANDIDATOS (APRODADOS, PENDIENTES Y NO APROBADO)::::: */}
      <ContainerCard>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value, index) => {
          // return <Card key={index} />;
          return <CardEvaluacion key={index} />;
        })}
      </ContainerCard>
    </Section>
  );
};

export default Filtro;
