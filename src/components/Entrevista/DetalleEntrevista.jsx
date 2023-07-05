// :::::IMAGEN:::::
import Img from "../../assets/GroupBoard1.png";
// :::::MATERIAL UI:::::
import {
  Box,
  Grid,
  Select,
  MenuItem,
  Typography,
  InputLabel,
  FormControl,
} from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  DatePicker,
  LocalizationProvider,
  TimePicker,
} from "@mui/x-date-pickers";
import dayjs from "dayjs";
// :::::HOOK:::::
import { useState } from "react";
// :::::ESTILO:::::
import { Section } from "../style";
// :::::COMPONENTE:::::
import Perfil from "../Global/Perfil";

const DetalleForm = () => {
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
          Este puesto requiere de individuos con habilidades comunicativas bien
          desarrolladas, que sean capaces de resolver problemas sobre la marcha
          y que sean team players. Esta entrevista pretende determinar estas
          tres habilidades.
        </Typography>
      </Box>
      <Box marginTop="30px">
        <Grid container>
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
          <Grid item xs={12} sm={6}>
            {/* :::::SELECCIONAR MODALIDAD::::: */}
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">
                Modalidad
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
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
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default DetalleForm;
