// :::::ESTILOS:::::
import {
  Boton,
  BotonIcono,
  BotonTexto,
  ContenedorEnviar,
  CustomBox,
} from "../style";
// :::::MATERIAL UI:::::
import { Box } from "@mui/material";
// :::::ICONO:::::
import SendIcon from "@mui/icons-material/Send";
// :::::IMAGEN:::::
import ChatInit from "../../assets/chatinit.png";
// :::::LIBRERIA PARA EMOJIS:::::
import InputEmoji from "react-input-emoji";

const Chat = () => {
  return (
    <Box>
      {/* :::::MENSAJES::::: */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          borderRadius: "32px",
          justifyContent: "center",
          border: "1px solid #eee",
          marginBottom: "20px",
          height: "100%",
        }}
      >
        {true && <img src={ChatInit} style={{ maxWidth: "400px" }} />}
      </Box>
      {/* :::::ENVIAR MENSAJE::::: */}
      <ContenedorEnviar>
        <InputEmoji cleanOnEnter placeholder="Redactar mensaje" />
        <Boton type="button">
          <BotonTexto>Enviar</BotonTexto>
          <BotonIcono>
            <SendIcon />
          </BotonIcono>
        </Boton>
      </ContenedorEnviar>
    </Box>
  );
};

export default Chat;
