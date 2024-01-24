import { Box, Grid, Stack, Typography } from "@mui/material";

import AppContainer from "../AppContainer";
import Colors from "../Colors";
import logo from "../../assets/logo.png";
import CustomButton from "../CustomButton";
import CustomTextField from "../CustomTextField";
import Divider from '@mui/material/Divider';
import FacebookIcon from "../../assets/Facebook.png";
import TwitterIcon from "../../assets/Twitter.png";
import InstaIcon from "../../assets/Instagram.png";
import LinkedinIcon from "../../assets/LinkedIn.png";
import YoutubeIcon from "../../assets/YouTube.png";
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import routes from "../../routes/routes";

const StyledLink = styled(Link)({
  color: Colors.WHITE,
  fontSize: "14px",
  fontWeight: 400,
  textUnderlineOffset: "5px",
  textDecoration: "none",
  "&:hover": {
    color: Colors.WHITE,
  },
})

export default function Footer() {
  return (
    <Box
      borderBottom={`1px solid ${Colors.SHADOW}`}
      bgcolor={Colors.BLACK}
      top={0}
      zIndex={1000}
      paddingX={3}
      paddingY={4}
    //height={"456px"}
    >
      <AppContainer>
        <Box maxWidth={1400} padding={2} marginX="auto" color={Colors.WHITE}>
          <Grid
            alignItems="center"
            container
            spacing={8}
            textAlign={{ xs: "center", sm: "left" }}

          >
            <Grid item xs={12} md={5}>
              <Stack direction="column" spacing={4}>
                <Link to={routes.ROOT}>
                  <img src={logo} width={172} height={34} />
                </Link>
                <Typography fontSize="16px" ml="10px !important">
                  Lorem ipsum dolor sit amet consectetur dolol drakgonil
                  adipiscing elit aliquam mauris
                </Typography>
                <CustomTextField
                  placeholder="Enter your email"
                  sx={{
                    backgroundColor: Colors.WHITE,
                    borderRadius: "50px",
                    ".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
                      padding: "20px 30px",
                    },
                    "::-moz-placeholder": {
                      color: Colors.BLACK,
                    },
                    marginLeft: "10px",
                  }}
                />
                <CustomButton
                  bgColor={Colors.BUTTON_COLOR}
                  color={Colors.WHITE}
                  sx={{
                    width: "100%",
                    maxWidth: "30px",
                    padding: "10px 20px",
                    textTransform: "none",
                    fontSize: "16px",
                    fontWeight: 600,
                    marginLeft: "10px !important",
                  }}
                >
                  Subscribe
                </CustomButton>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6} md={7}>
              <Grid container marginX={15}>
                <Grid item xs={5}>
                  <Stack direction="row" spacing={5} >
                    <Stack direction="column" spacing={2} >
                      <StyledLink to={routes.ROOT}>About Us</StyledLink>
                      <StyledLink to={routes.ROOT}>Services</StyledLink>
                      <StyledLink to={routes.ROOT}>Offers</StyledLink>
                      <StyledLink to={routes.ROOT}>My Profile</StyledLink>
                    </Stack>
                    <Stack direction="column" spacing={2} >
                      <StyledLink to={routes.ROOT} >Privacy Policy</StyledLink>
                      <StyledLink to={routes.ROOT}>Terms of Service</StyledLink>
                      <StyledLink to={routes.ROOT}>FAQ</StyledLink>
                      <StyledLink to={routes.ROOT}>Careers</StyledLink>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item xs={6}>
                  <Typography sx={{ fontSize: "16px", fontWeight: 600, paddingBottom: "15px" }}>Contact Us</Typography>
                  <Stack direction="row" spacing={5} >
                    <Typography fontSize="14px" fontWeight={400}>
                      39/6 KCP Thottam,<br /> Kumalan Kuttai,<br />
                      Erode, Tamil Nadu <br /> 638011
                    </Typography>
                    <Typography fontSize="14px" fontWeight={400}>70944 60944 <br />
                      91088 83555</Typography>

                  </Stack>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Divider variant="fullWidth" color={Colors.WHITE} sx={{ marginTop: "100px", marginBottom: "30px" }} />
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography fontSize="16px">Copyright © 2023 Playzo33 | All Rights Reserved</Typography>
            <Stack direction="row" spacing={2}>
              <Link to={routes.ROOT}><img src={FacebookIcon} alt="facebook" width={30} height={30} /></Link>
              <Link to={routes.ROOT}><img src={TwitterIcon} alt="twitter" width={30} height={30} /></Link>
              <Link to={routes.ROOT}><img src={InstaIcon} alt="insta" width={30} height={30} /></Link>
              <Link to={routes.ROOT}><img src={LinkedinIcon} alt="linkedIn" width={30} height={30} /></Link>
              <Link to={routes.ROOT}><img src={YoutubeIcon} alt="youtube" width={30} height={30} /></Link>
            </Stack>
          </Stack>
        </Box>
      </AppContainer>
    </Box>
  );
}
