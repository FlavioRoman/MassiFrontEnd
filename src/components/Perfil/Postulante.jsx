import CircularProgress from "@mui/material/CircularProgress";
// :::::IMAGENES:::::
import Image from "../../assets/GroupBoard1.png";
import Link01 from "../../assets/redesmod1.png";
import Link02 from "../../assets/redesmod2.png";
import Link03 from "../../assets/redemod3.png";
// :::::ICONO:::::
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// :::::ESTILOS:::::
import {
  Info,
  Link,
  About,
  State,
  Avatar,
  People,
  Contact,
  Section,
  Progress,
  Information,
  SocialNetwork,
} from "./style";
// HOOK
import { useState } from "react";
// :::::MATERIAL UI:::::
import { Typography } from "@mui/material";

const Postulante = () => {
  const [progress, setProgress] = useState(73);
  return (
    <Section>
      {/* ESTADO DE LA PERSONA */}
      <State>
        Aprobado <KeyboardArrowDownIcon />
      </State>
      {/* SOBRE LA PERSONA */}
      <About>
        <People>
          <Avatar src={Image} alt="image" />
          <Info>
            <h1>Derlis Cantero</h1>
            <h5>Lic. en administración</h5>
            <h5>23 años - Asunción</h5>
          </Info>
        </People>
        {/* PROGRESO DE COMPATIBILIDAD */}
        <Progress>
          <CircularProgress size={70} variant="determinate" value={progress} />
          <p>Compatible con el cargo</p>
        </Progress>
        {/* CONTACTOS */}
        <Contact>
          <h5>martín.caceres@gmail.com</h5>
          <h5>+595 981 343 289</h5>
          <SocialNetwork>
            <Link src={Link01} />
            <Link src={Link02} />
            <Link src={Link03} />
          </SocialNetwork>
        </Contact>
      </About>
      {/* PREFESION O CARRERA */}
      <Information>
        <h4 style={{ marginBottom: "10px" }}>Perfil profesional</h4>
        <p>
          Asistente ejecutivo con experiencia en desarrollar y mantener procesos
          administrativos y procedimientos rutinarios para reducir sobrecostes,
          mejorar la eficacia y al canzar los objetivos organizativos. Más de 8
          años de experiencia en dar apoyo a equipos directivos en la
          organización de eventos.
        </p>
      </Information>
      <Typography
        sx={{
          display: "flex",
          fontWeight: 600,
          alignItems: "center",
          justifyContent: "flex-end",
          cursor: "pointer",
          color: "#E25139",
          padding: "20px",
          gap: "10px",
        }}
      >
        DESCARGAR CV <ArrowDownwardIcon color="#E25139" />
      </Typography>
    </Section>
  );
};

export default Postulante;
