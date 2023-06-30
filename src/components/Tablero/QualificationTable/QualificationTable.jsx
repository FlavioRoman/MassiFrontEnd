// MATERIAL UI
import {
  Paper,
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  TableContainer,
  Grid,
} from "@mui/material";

// COMPONENTES
import Applicant from "./columns/Applicant";
import ViewButton from "../../Buttons/ViewButton";
import Qualification from "./columns/Qualification";
import Compatibility from "./columns/Compatibility";

// REACT ROUTER
import { Link } from "react-router-dom";

// CALENDARIO
// import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(1, 159, 6.0, 24, 4.0),
  createData(2, 237, 9.0, 37, 4.3),
  createData(3, 262, 16.0, 24, 6.0),
];

// COMPONENTE PARA LA TABLA DE CALIFICADOS.
const QualificationTable = () => {
  return (
    <>
      <Grid container>
        <TableContainer
          component={Paper}
          sx={{ marginTop: "20px", boxShadow: "none" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
                  align="left"
                  sx={{
                    fontSize: "1.2rem",
                    fontWeight: "300",
                    color: "#575D64",
                  }}
                >
                  Calificación
                </TableCell>
                <TableCell
                  align="left"
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
                    <Applicant />
                  </TableCell>
                  {/* CALIFICACION */}
                  <TableCell align="left">
                    <Qualification />
                  </TableCell>
                  {/* COMPATIBILIDAD */}
                  <TableCell align="left">
                    <Compatibility />
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
      </Grid>
      <Link to="/revision">
        <ViewButton text={"VER CONVOCATORIA"} />
      </Link>
    </>
  );
};

export default QualificationTable;
