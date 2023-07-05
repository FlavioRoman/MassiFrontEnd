// :::::IMAGEN:::::
import Img from "../../assets/GroupBoard1.png";
import {
  Box,
  Grid,
  Select,
  MenuItem,
  Typography,
  InputLabel,
  FormControl,
  TextField,
  Stack,
} from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  DatePicker,
  LocalizationProvider,
  TimePicker,
} from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { useState } from "react";
import Perfil from "../Global/Perfil";

const DetalleEvaluacion = () => {
  const [age, setAge] = useState("");
  const [value, setValue] = useState(dayjs("2022-04-17"));

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Box
      padding="20px"
      borderRadius="20px"
      boxShadow="0 3px 10px rgb(0 0 0 / 0.2)"
    >
      {/* :::::TITULO::::: */}
      <Box>
        <Typography fontSize="16px" fontWeight="300">
          Detalle Entrevista
        </Typography>
        <Typography fontSize="14px" fontWeight="300" marginTop="20px">
          Este puesto necesita individuos con habilidades suficientes para
          menejo autónomo de excel y word.
        </Typography>
      </Box>
      <Box marginTop="30px">
        <Grid container alignItems="flex-start" justifyContent="center">
          <Grid item xs={12} sm={6}>
            <Typography fontSize="12px" fontWeight="300">
              A cargo de:
            </Typography>
            <Perfil
              foto={Img}
              nombre={"Derlis Cantero"}
              trabajo={""}
              direccion={""}
            />
          </Grid>
          <Grid item xs={12} sm={6} spacing={2}>
            <Stack spacing={2}>
              {/* :::::CAMPO METODO EVALUACION */}
              <FormControl fullWidth>
                <TextField
                  id="standard-basic"
                  label="Método de Evaluación"
                  variant="standard"
                />
              </FormControl>
              {/* :::::SELECCIONAR TIPO::::: */}
              <FormControl variant="standard" fullWidth>
                <InputLabel id="tipo">Tipo</InputLabel>
                <Select
                  labelId="tipo"
                  id="tipo"
                  value={age}
                  onChange={handleChange}
                  label="Age"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              {/* :::::SELECCIONAR MODALIDAD::::: */}
              <FormControl variant="standard" fullWidth>
                <InputLabel id="tipo">Modalidad</InputLabel>
                <Select
                  labelId="tipo"
                  id="tipo"
                  value={age}
                  onChange={handleChange}
                  label="Age"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              {/* :::::SELECCIONAR FORMATO::::: */}
              <FormControl variant="standard" fullWidth>
                <InputLabel id="tipo">Formato</InputLabel>
                <Select
                  labelId="tipo"
                  id="tipo"
                  value={age}
                  onChange={handleChange}
                  label="Age"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              {/* :::::SELECCIONAR FECHA::::: */}
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker", "DatePicker"]}>
                  <DatePicker
                    label="Fecha"
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                  />
                </DemoContainer>
              </LocalizationProvider>
              {/* :::::SELECCIONAR TIEMPO::::: */}
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["TimePicker", "TimePicker"]}>
                  <TimePicker
                    label="Uncontrolled picker"
                    defaultValue={dayjs("2022-04-17T15:30")}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default DetalleEvaluacion;
