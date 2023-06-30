import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
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
import { Container } from "../style";

const DetalleForm = () => {
  const [age, setAge] = useState("");
  const [value, setValue] = useState(dayjs("2022-04-17"));

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Container>
      <Box>
        <h5>Detalle Entrevista</h5>
        <p>
          Este puesto requiere de individuos con habilidades comunicativas bien
          desarrolladas, que sean capaces de resolver problemas sobre la marcha
          y que sean team players. Esta entrevista pretende determinar estas
          tres habilidades.
        </p>
      </Box>
      <Box>
        <Grid container>
          <Grid item sm={6}>
            <h5>A cargo de:</h5>
          </Grid>
          <Grid item sm={6}>
            {/* SELECCIONAR MODALIDAD */}
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
            {/* SELECCIONAR FECHA */}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker", "DatePicker"]}>
                <DatePicker
                  label="Fecha"
                  value={value}
                  onChange={(newValue) => setValue(newValue)}
                />
              </DemoContainer>
            </LocalizationProvider>
            {/* SELECCIONAR TIEMPO */}
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
    </Container>
  );
};

export default DetalleForm;
