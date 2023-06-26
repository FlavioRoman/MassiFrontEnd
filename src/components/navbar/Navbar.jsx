import { useEffect, useState } from "react";
// ICONOS
import AddIcon from "@mui/icons-material/Add";
import SendIcon from "@mui/icons-material/Send";
import MenuIcon from "@mui/icons-material/Menu";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import ArchiveIcon from "@mui/icons-material/Archive";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// ESTILOS
import {
  Nav,
  Path,
  Option,
  Avatar,
  ListMenu,
  Proposals,
  MenuButton,
  MenuDropDown,
  InteractiveContent,
  History,
  Menu,
} from "./styleNavbar";

// OBJETO ESTILO.
const iconStyle = {
  padding: "5px",
  cursor: "pointer",
  fontSize: "2.5rem",
  borderRadius: "100%",
  border: "1px solid #ddd",
  color: "#E25139",
};

const avatarStyle = {
  color: "#ddd",
  fontSize: "40px",
  borderRadius: "100%",
  border: "1px solid #E25139",
};

const Navbar = () => {
  const [show, setShow] = useState({
    menu: false,
    avatar: false,
  });
  // FUNCION PARA DESPLEGAR EL MENU
  const handleMenu = () => {
    setShow((prevState) => ({
      ...prevState,
      menu: !prevState.menu,
    }));
  };
  // FUNCION PARA DESPLEGAR EL MENU AL PRESIONAR EL AVATAR
  const handleAvatar = () => {
    setShow((prevState) => ({
      ...prevState,
      avatar: !prevState.avatar,
    }));
  };
  return (
    <Nav>
      <Menu>
        {/* AQUI MOSTRARA LA RUTA DE LA SECCION ACTUAL Y ANTERIOR */}
        <Path>
          <History>
            Tablero <ArrowForwardIosIcon />
          </History>
          <History>
            Tablero <ArrowForwardIosIcon />
          </History>
          <History>
            Tablero <ArrowForwardIosIcon />
          </History>
        </Path>
        {/* BOTON PARA DESPLEGAR EL MENU EN DISPOSITIVOS PEQUEÑOS */}
        <MenuButton onClick={() => handleMenu()}>
          <MenuIcon />
        </MenuButton>
      </Menu>
      {/* CONTENIDO DONDE EL USUARIO INTERACTUARA MÁS */}
      <InteractiveContent style={{ display: show.menu ? "flex" : "" }}>
        <Proposals>
          Nueva Convocatoria <AddIcon />
        </Proposals>
        {/* LA IMAGEN DEL AVATAR VA AQUI(TEMPORALMENTE PONDRE UN ICONO) */}
        <Avatar>
          <NotificationsIcon sx={iconStyle} />
          <AccountCircleIcon sx={avatarStyle} />
          <MenuDropDown onClick={() => handleAvatar()}>
            <span>Lucas Vera</span>
            <KeyboardArrowDownIcon />
          </MenuDropDown>
        </Avatar>
        {/* LISTA DROPDOWN */}
        {show.avatar && (
          <ListMenu>
            <Option>
              Editando <CreateIcon />
            </Option>
            <Option>
              Archivar <ArchiveIcon />
            </Option>
            <Option>
              Publicar <SendIcon />
            </Option>
            <Option>
              Descartar <DeleteIcon />
            </Option>
          </ListMenu>
        )}
      </InteractiveContent>
    </Nav>
  );
};

export default Navbar;
