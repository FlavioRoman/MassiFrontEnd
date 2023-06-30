// ICONO
import LinkedInIcon from "@mui/icons-material/LinkedIn";
// ESTILOS
import { Card, ContainerCard, Section } from "./style";
import { Box, CardContent, Typography } from "@mui/material";

const Referencias = () => {
  return (
    <Section sx={{ boxShadow: "none" }}>
      <h4>Referencias</h4>
      <ContainerCard>
        {[1, 2, 3].map((value, index) => (
          <Card key={index} sx={{ minWidth: 275 }}>
            <CardContent
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Box>
                <Typography
                  sx={{ fontSize: 18 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Word of the Day
                </Typography>
                <Typography
                  sx={{ fontSize: 12 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Decano FTI - UNA
                </Typography>
              </Box>
              <LinkedInIcon />
            </CardContent>
            <Typography
              sx={{ mb: 1.5, textAlign: "justify" }}
              color="text.secondary"
            >
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.”
            </Typography>
            <Typography
              gutterBottom
              color="text.secondary"
              sx={{ fontSize: 16, textAlign: "right" }}
            >
              12/06/2020
            </Typography>
          </Card>
        ))}
      </ContainerCard>
    </Section>
  );
};

export default Referencias;
