// IMAGEN
import ChatInit from "../../assets/chatinit.png";
// ICONO
import SendIcon from "@mui/icons-material/Send";
// ESTILOS
import { Section, Messages, Form, Message, Send, SendText } from "./style";

const Chat = () => {
  return (
    <Section style={{ padding: "20px" }}>
      <h4>Chat</h4>
      <Messages>
        {true && <img src={ChatInit} style={{ maxWidth: "400px" }} />}
      </Messages>
      <Form>
        <Message type="text" placeholder="Redactar mensaje" />
        <Send type="button">
          <SendText>Enviar</SendText> <SendIcon />
        </Send>
      </Form>
    </Section>
  );
};

export default Chat;
