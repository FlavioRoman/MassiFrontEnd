import {
  Paper,
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  TableContainer,
} from "@mui/material";
// COMPONENTES DE CARPETA COLUMNA
import Postulante from "./columnas/Postulante";
import Calificacion from "./columnas/Calificacion";
import Compatibilidad from "./columnas/Compatibilidad";
// ESTILOS
import { ButtonConvocatory, Flex } from "./styleTablero";
// CALENDARIO
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
// REACT ROUTER
import { Link } from "react-router-dom";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(1, 159, 6.0, 24, 4.0),
  createData(2, 237, 9.0, 37, 4.3),
  createData(3, 262, 16.0, 24, 6.0),
];

const Calificados = () => {
  return (
    <>
      <Flex>
        <TableContainer
          sx={{ marginTop: "20px", boxShadow: "none" }}
          component={Paper}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell
                  align="center"
                  sx={{
                    fontSize: "1.3rem",
                    fontWeight: "300",
                    color: "#575D64",
                  }}
                >
                  Puesto
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontSize: "1.3rem",
                    fontWeight: "300",
                    color: "#575D64",
                  }}
                >
                  Postulante
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    fontSize: "1.3rem",
                    fontWeight: "300",
                    color: "#575D64",
                  }}
                >
                  Calificación
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    fontSize: "1.3rem",
                    fontWeight: "300",
                    color: "#575D64",
                  }}
                >
                  Compatibilidad
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    align="center"
                    sx={{ fontSize: "1.5rem" }}
                    component="th"
                    scope="row"
                  >
                    {row.name}
                  </TableCell>
                  {/* POSTULANTE */}
                  <TableCell align="left">
                    <Postulante />
                  </TableCell>
                  {/* CALIFICACION */}
                  <TableCell align="left">
                    <Calificacion />
                  </TableCell>
                  {/* COMPATIBILIDAD */}
                  <TableCell align="left">
                    <Compatibilidad />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {/* AQUI VA EL CALENDARIO */}
        {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar />
        </LocalizationProvider> */}
      </Flex>
      <Link to="/revision">
        <ButtonConvocatory>VER CONVOCATORIA</ButtonConvocatory>
      </Link>
    </>
  );
};

export default Calificados;
