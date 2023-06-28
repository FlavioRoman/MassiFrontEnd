import {
  Input,
  Select,
  MenuItem,
  IconButton,
  InputLabel,
  FormControl,
  InputAdornment,
} from "@mui/material";
import { Section, BoxFilter, Candidates, ContainerCard } from "./styleRevision";
import { useState } from "react";
import Card from "./Card";

const Filtro = () => {
  const [option, setOption] = useState("");

  const handleChange = (event) => {
    setOption(event.target.value);
  };
  return (
    <Section>
      <BoxFilter>
        <Candidates>
          <h1>92</h1>
          <p>Candidatos</p>
        </Candidates>
        <FormControl sx={{ m: 1, width: "100%" }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Buscar</InputLabel>
          <Input
            id="standard-adornment-password"
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility"></IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
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
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </BoxFilter>
      <ContainerCard>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value, index) => {
          return <Card key={index} />;
        })}
      </ContainerCard>
    </Section>
  );
};

export default Filtro;
