// ::::::MATERIAL UI::::::
import {
  Grid,
  Paper,
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  TableContainer,
} from "@mui/material";

// ::::::COMPONENTES::::::
import Postulante from "./columnas/Postulante";
import ViewButton from "../../Buttons/ViewButton";
import Calificacion from "./columnas/Calificacion";
import Compatibilidad from "./columnas/Compatibilidad";

// ::::::REACT ROUTER::::::
import { Link } from "react-router-dom";

// ::::::CALENDARIO::::::
// import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(1, 159, 6.0, 24, 4.0),
  createData(2, 237, 9.0, 37, 4.3),
  createData(3, 262, 16.0, 24, 6.0),
];

// :::::COMPONENTE PARA LA TABLA DE CALIFICADOS:::::
const MejoresCalificados = () => {
  return (
    <>
      <Grid container>
        <TableContainer
          component={Paper}
          sx={{ marginTop: "20px", boxShadow: "none" }}
        >
          <Table sx={{ width: "100%" }} size="small" aria-label="simple table">
            {/* :::::TIULOS DE LAS COLUMNAS::::: */}
            <TableHead>
              <TableRow>
                <TableCell
                  align="center"
                  sx={{
                    fontSize: "1.2rem",
                    fontWeight: "300",
                    color: "#575D64",
                  }}
                >
                  Puesto
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontSize: "1.2rem",
                    fontWeight: "300",
                    color: "#575D64",
                  }}
                >
                  Postulante
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontSize: "1.2rem",
                    fontWeight: "300",
                    color: "#575D64",
                  }}
                >
                  Calificación
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontSize: "1.2rem",
                    fontWeight: "300",
                    color: "#575D64",
                  }}
                >
                  Compatibilidad
                </TableCell>
              </TableRow>
            </TableHead>
            {/* :::::CONTENIDO DE LAS COLUMNAS::::: */}
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
                  <TableCell align="center">
                    <Postulante />
                  </TableCell>
                  {/* CALIFICACION */}
                  <TableCell align="center">
                    <Calificacion />
                  </TableCell>
                  {/* COMPATIBILIDAD */}
                  <TableCell align="center">
                    <Compatibilidad />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {/* ::::: AQUI VA EL CALENDARIO:::::  */}
        {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar />
          </LocalizationProvider> */}
      </Grid>
      {/* :::::BOTON PARA VER LA CONVOCAROTIA::::: */}
      <Link to="/revision">
        <ViewButton text={"VER CONVOCATORIA"} />
      </Link>
    </>
  );
};

export default MejoresCalificados;
