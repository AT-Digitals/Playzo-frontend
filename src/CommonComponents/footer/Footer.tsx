import { Box, Grid, Link, Typography } from "@mui/material";

import AppContainer from "../AppContainer";
import Colors from "../Colors";
import logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <Box  borderBottom={`1px solid ${Colors.SHADOW}`}
    bgcolor={Colors.BLACK}
    top={0}
    zIndex={1000}
    padding={3} height={"456px"} >
      <AppContainer>
      <Box maxWidth={1400} padding={2} marginX="auto" color={Colors.WHITE}>
        <Grid
          alignItems="flex-start"
          container
          spacing={4}
          textAlign={{ xs: "center", sm: "left" }}
        >
          <Grid item xs={12} sm={6} md={3}>
            <Box>
                        <Link>
                            <img width={172} height={34} src={logo} alt="alterknit" />
                        </Link>
                    </Box>
                    <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur dolol drakgonil adipiscing elit aliquam mauris

        </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur dolol drakgonil adipiscing elit aliquam mauris

        </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body1">
             text

        </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
       
             <Typography variant="body1">
             text

        </Typography>
          </Grid>
        </Grid>
      </Box>
      </AppContainer>
    </Box>
  );
}
