// :::::ICONOS:::::
import PersonIcon from "@mui/icons-material/Person";
import MessageIcon from "@mui/icons-material/Message";
import AssignmentIcon from "@mui/icons-material/Assignment";
// :::::MATERIAL UI:::::
import { Box, CardContent, Typography } from "@mui/material";
// :::::ESTILO:::::
import { Card } from "../../style";

// :::::ARRAY DE OBJETOS PARA TESTING:::::
const testing = [
  {
    number: "91",
    text: "Candidatos Activos",
    icon: (
      <PersonIcon style={{ fill: "#7659A0", width: "60px", height: "60px" }} />
    ),
  },
  {
    number: "3",
    text: "Mensajes Nuevos",
    icon: (
      <MessageIcon style={{ fill: "#F9B438", width: "60px", height: "60px" }} />
    ),
  },
  {
    number: "83",
    text: "Postulaciones a revisar",
    icon: (
      <AssignmentIcon
        style={{ fill: "#055B5A", width: "60px", height: "60px" }}
      />
    ),
  },
];

// :::::COMPONENTE PARA (Candidatos activos, Mensajes Nuevos, Postulaciones a revisar):::::
const CardRevision = () => {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", columnGap: "30px" }}>
      {/* :::::BLUCE PARA REPETIR 3 VECES LO MISMO::::: */}
      {testing.map((value, index) => (
        <Card key={index}>
          {value.icon}
          <CardContent>
            <Typography
              variant="h5"
              component="div"
              sx={{
                color: "#2C2D2D",
                fontWeight: "700",
                fontSize: "2.4rem",
                textAlign: "center",
              }}
            >
              {value.number}
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ fontSize: "1.2rem", textAlign: "center" }}
            >
              {value.text}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default CardRevision;
