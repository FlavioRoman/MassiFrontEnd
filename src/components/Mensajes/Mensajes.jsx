// :::::IMAGEN:::::
import Img from "../../assets/GroupBoard1.png";
// :::::ESTILO:::::
import { BoxChat, Section } from "../style";
// :::::ICON:::::
import SearchIcon from "@mui/icons-material/Search";
// :::::MATERIAL UI:::::
import {
  Box,
  Grid,
  Paper,
  Stack,
  InputBase,
  Typography,
  IconButton,
} from "@mui/material";
// :::::COMPONENTE:::::
import Chat from "./Chat";

const Mensajes = () => {
  return (
    <Section>
      <Typography fontSize="22px" fontWeight="700">
        Auxiliar Administrativo
      </Typography>
      <Box marginTop="50px">
        <Grid
          container
          direction="row"
          alignItems="flex-start"
          justifyContent="center"
          spacing={2}
        >
          {/* :::::BUSCADOR::::: */}
          <Grid item xs={12} sm={12} md={3}>
            <Paper sx={{ boxShadow: "none", borderBottom: "1px solid #ddd" }}>
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
              <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Buscar" />
            </Paper>
            {/* :::::LISTA DE MENSAJES */}
            <Box sx={{ overflow: "auto" }} height="70vh">
              {Array(11)
                .fill()
                .map((value, index) => (
                  <Stack
                    key={index}
                    direction="row"
                    alignItems="center"
                    padding="10px"
                    spacing={2}
                  >
                    <img
                      src={Img}
                      alt="img"
                      style={{ width: "60px", height: "60px" }}
                    />
                    <Stack direction="column" width="100%">
                      <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Typography fontSize="18px" fontWeight="400">
                          Derlis Cantero
                        </Typography>
                        <Typography
                          fontSize="12px"
                          fontWeight="300"
                          color="#93A1AE"
                        >
                          7:30
                        </Typography>
                      </Stack>
                      <Stack>
                        <Typography color="#93A1AE">
                          Es posible enviar un...
                        </Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                ))}
            </Box>
          </Grid>
          {/* :::::MENSAJE::::: */}
          <Grid item xs={12} sm={12} md={9}>
            <BoxChat sx={{ boxShadow: "none", padding: "0" }}>
              <Chat />
            </BoxChat>
          </Grid>
        </Grid>
      </Box>
    </Section>
  );
};

export default Mensajes;
