// :::::ESTILOS:::::
import { ContenedorEnviar } from "../style";
// :::::MATERIAL UI:::::
import { Box } from "@mui/material";

// :::::IMAGEN:::::
import ChatInit from "../../assets/chatinit.png";
import BotonEnviar from "../../assets/chatsendbutton.png";
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
        <img
          style={{
            width: "120px",
            display: "block",
            cursor: "pointer",
            margin: "5px 5px 5px auto",
          }}
          src={BotonEnviar}
        />
      </ContenedorEnviar>
    </Box>
  );
};

export default Chat;
