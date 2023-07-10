// :::::MATERIAL UI:::::
import { Box, Grid, Stack, Typography } from "@mui/material";
// :::::COMPONENTE:::::
import Estado from "../Global/Estado";
// ::::: IMAGEN :::::
import Img from "../../assets/GroupBoard1.png";
import { Imagen } from "./style";

const Perfil = () => {
  return (
    <Box
      height="100%"
      borderRadius="20px"
      boxShadow="0 3px 10px rgb(0 0 0 / 0.2)"
    >
      <Estado estado={"pendiente"} />
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        marginTop="20px"
        spacing={4}
      >
        <Grid item>
          <Imagen src={Img} />
        </Grid>
        <Grid item>
          <Stack>
            <Typography fontSize="28px" fontWeight="400">
              Derlis Cantero
            </Typography>
            <Typography fontSize="18px" fontWeight="400">
              Lic. en administración
            </Typography>
            <Typography fontSize="18px" fontWeight="400">
              23 años - Asunción
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Perfil;
