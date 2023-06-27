import Logo from "../../assets/whitelogo.png";
// ICONOS
import PolicyIcon from "@mui/icons-material/Policy";
import MessageIcon from "@mui/icons-material/Message";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DescriptionIcon from "@mui/icons-material/Description";
import { Aside, LogoImg, Menu, Option, Text } from "./styleSidebar";

const Sidebar = () => {
  return (
    <Aside>
      <LogoImg src={Logo} />
      <Menu>
        <Option>
          <DashboardIcon /> <Text>Tablero</Text>
        </Option>
        <Option>
          <MessageIcon /> <Text>Mensajes</Text>
        </Option>
        <hr />
        <Option>
          <DescriptionIcon /> <Text>Términos y Condiciones</Text>
        </Option>
        <Option>
          <PolicyIcon /> <Text>Políticas de Privacidad</Text>
        </Option>
      </Menu>
    </Aside>
  );
};

export default Sidebar;
