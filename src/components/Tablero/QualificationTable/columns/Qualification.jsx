// ICONO
import StarIcon from "@mui/icons-material/Star";
// ESTILO
import { Grid, Typography } from "@mui/material";
const Qualification = () => {
  return (
    <Grid container flexDirection="row" alignItems="center" spacing={2}>
      <StarIcon style={{ fill: "#F9B438", width: "50px", height: "50px" }} />
      <Typography sx={{ fontSize: "18px", fontWeight: "400" }}>6</Typography>
    </Grid>
  );
};

export default Qualification;
