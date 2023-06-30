// IMAGEN
import Logo from "../../assets/whitelogo.png";
// ICONOS
import PolicyIcon from "@mui/icons-material/Policy";
import MessageIcon from "@mui/icons-material/Message";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DescriptionIcon from "@mui/icons-material/Description";
// ESTILOS
import { Aside, LogoImg, Menu, Option, Text } from "./style";
// REACT ROUTER
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Aside>
      <LogoImg src={Logo} />
      <Menu>
        <Link to="/tablero">
          <Option>
            <DashboardIcon /> <Text>Tablero</Text>
          </Option>
        </Link>
        <Link to="/mensajes">
          <Option>
            <MessageIcon /> <Text>Mensajes</Text>
          </Option>
        </Link>
        <hr />
        <Link to="/terminosCondiciones">
          <Option>
            <DescriptionIcon /> <Text>Términos y Condiciones</Text>
          </Option>
        </Link>
        <Link to="/políticasPrivacidad">
          <Option>
            <PolicyIcon /> <Text>Políticas de Privacidad</Text>
          </Option>
        </Link>
      </Menu>
    </Aside>
  );
};

export default Sidebar;
