import { Box, Grid, Stack, Typography } from "@mui/material";

import AppContainer from "../AppContainer";
import Colors from "../Colors";
import Divider from "@mui/material/Divider";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "../../assets/Twitter.png";
import YouTubeIcon from "@mui/icons-material/YouTube";
import logo from "../../assets/logo.png";
import routes from "../../routes/routes";
import { styled } from "@mui/system";

const StyledLink = styled(Link)({
  color: Colors.WHITE,
  fontSize: "14px",
  fontWeight: 400,
  textUnderlineOffset: "5px",
  textDecoration: "none",
  "&:hover": {
    color: Colors.WHITE,
  },
});

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
      <AppContainer p={0}>
        <Box
          maxWidth={1400}
          padding={"30px"}
          marginX="auto"
          color={Colors.WHITE}
        >
          <Link
            style={
              {
                marginBottom: 1,
              } as any
            }
            to={routes.ROOT}
          >
            <Box
              component="img"
              sx={{
                display: { xs: "block", sm: "block", md: "none", lg: "none" },
              }}
              src={logo}
              width={172}
              height={34}
            />
          </Link>
          <Grid
            alignItems="center"
            container
            spacing={4}
            textAlign={{ xs: "left", sm: "left" }}
            margin={"0 auto"}
          >
            <Grid
              pl={"10px !important"}
              display={{ xs: "none", sm: "none", md: "block" }}
              item
              xs={12}
              md={4}
              lg={4}
            >
              <Stack direction="column" spacing={4}>
                <Link to={routes.ROOT}>
                  <img src={logo} width={172} height={34} alt="22" />
                </Link>
                <Typography
                  fontSize="15px"
                  fontWeight={"400"}
                  ml="10px !important"
                >
                  At Playzo33, we extend beyond being a turf booking platform
                  we're a community-driven destination designed for sports
                  enthusiasts and those seeking recreation and entertainment.
                </Typography>
              </Stack>
            </Grid>
            <Grid
              pl={{ xs: "10px !important", md: "20px !important" }}
              item
              xs={12}
              sm={6}
              md={4}
              lg={4}
            >
              <Stack
                display={"flex"}
                justifyContent={{ xs: "left", sm: "left", md: "center" }}
                direction="row"
                spacing={{ xs: 5, sm: 16, md: 5 }}
              >
                <Stack direction="column" spacing={2}>
                  <Typography
                    fontSize={"14px"}
                    fontWeight={"400"}
                    letterSpacing={"1.6px"}
                    textTransform={"uppercase"}
                    color={Colors.BUTTON_COLOR}
                  >
                    Company
                  </Typography>
                  <StyledLink
                    sx={{
                      fontSize: "16px",
                      transition: "color 0.5s ease",
                      ":hover": {
                        color: Colors.BUTTON_COLOR,
                      },
                    }}
                    to={routes.ABOUTUS}
                  >
                    About
                  </StyledLink>
                  <StyledLink
                    sx={{
                      fontSize: "16px",
                      lineHeight: 1,
                      transition: "color 0.5s ease",
                      ":hover": {
                        color: Colors.BUTTON_COLOR,
                      },
                    }}
                    to={routes.SERVICE}
                  >
                    Services
                  </StyledLink>
                  <StyledLink
                    sx={{
                      fontSize: "16px",
                      transition: "color 0.5s ease",
                      ":hover": {
                        color: Colors.BUTTON_COLOR,
                      },
                    }}
                    to={routes.CONTACTUS}
                  >
                    Contact
                  </StyledLink>
                  {/* <StyledLink to={routes.ROOT}>My Profile</StyledLink> */}
                </Stack>
                <Stack direction="column" spacing={2}>
                  <Typography
                    fontSize={"14px"}
                    fontWeight={"400"}
                    letterSpacing={"1.6px"}
                    textTransform={"uppercase"}
                    color={Colors.BUTTON_COLOR}
                  >
                    Information
                  </Typography>
                  <StyledLink
                    sx={{
                      fontSize: "16px",
                      transition: "color 0.5s ease",
                      ":hover": {
                        color: Colors.BUTTON_COLOR,
                      },
                    }}
                    to={routes.PRIVACY_POLICY}
                  >
                    Privacy Policy
                  </StyledLink>
                  <StyledLink
                    sx={{
                      fontSize: "16px",
                      lineHeight: 1,
                      transition: "color 0.5s ease",
                      ":hover": {
                        color: Colors.BUTTON_COLOR,
                      },
                    }}
                    to={routes.TERMS_AND_CONDITIONS}
                  >
                    Terms And Conditons
                  </StyledLink>
                  <StyledLink
                    sx={{
                      fontSize: "16px",
                      lineHeight: 1,
                      transition: "color 0.5s ease",
                      ":hover": {
                        color: Colors.BUTTON_COLOR,
                      },
                    }}
                    to={routes.COOKIES_PAGE}
                  >
                    Cookies Policy
                  </StyledLink>
                  <StyledLink
                    sx={{
                      fontSize: "16px",
                      lineHeight: 1,
                      transition: "color 0.5s ease",
                      ":hover": {
                        color: Colors.BUTTON_COLOR,
                      },
                    }}
                    to={routes.CAREERS_PAGE}
                  >
                    Careers
                  </StyledLink>
                </Stack>
              </Stack>
              <Divider
                variant="fullWidth"
                color={Colors.WHITE}
                sx={{
                  marginTop: "15px",
                  marginBottom: "10px",
                  display: { xs: "block", sm: "none" },
                  width: "90%",
                }}
              />
            </Grid>

            <Grid
              pl={{ xs: "10px !important", sm: 8 }}
              item
              xs={12}
              sm={6}
              md={4}
              lg={4}
              marginTop={"13px"}
            >
              <Typography
                fontSize={"14px"}
                fontWeight={"400"}
                letterSpacing={"1.6px"}
                textTransform={"uppercase"}
                color={Colors.BUTTON_COLOR}
              >
                Contact us
              </Typography>

              <Stack spacing={2}>
                <Typography fontSize="15px" pt={"17px"} fontWeight={400}>
                  39/6 KCP Thottam, Kumalan Kuttai, Erode,
                  <br />
                  Tamil Nadu - 638011{" "}
                </Typography>
                <Typography fontSize="15px" fontWeight={400}>
                  +91 70944 60944 <br />
                  +91 91088 83555
                </Typography>
              </Stack>
            </Grid>
          </Grid>

          <Stack
            mt={3}
            display={{ xs: "block", sm: "block", md: "none" }}
            direction="column"
            spacing={4}
          >
            <Typography fontSize="16px" ml="10px !important">
              Lorem ipsum dolor sit amet consectetur dolol drakgonil adipiscing
              elit aliquam mauris
            </Typography>
          </Stack>
          <Divider
            variant="fullWidth"
            color={Colors.WHITE}
            sx={{
              marginTop: "15px",
              marginBottom: "15px",
              display: { xs: "block", sm: "none" },
            }}
          />

          {/* / */}

          <Divider
            variant="fullWidth"
            color={Colors.WHITE}
            sx={{
              marginTop: "100px",
              marginBottom: "30px",
              display: { xs: "none", sm: "block" },
            }}
          />

          <Stack
            marginTop={6}
            display={{ xs: "flex", sm: "none" }}
            justifyContent={"center"}
            alignItems={"center"}
            direction="row"
            spacing={2}
          >
            <Link to={routes.ROOT}>
              <FacebookIcon width={30} height={30} />
            </Link>

            <Link to={routes.ROOT}>
              <img src={TwitterIcon} alt="twitter" width={30} height={30} />
            </Link>
            <Link to={routes.ROOT}>
              <InstagramIcon width={30} height={30} />
            </Link>
            <Link to={routes.ROOT}>
              <YouTubeIcon width={30} height={30} />
            </Link>
          </Stack>

          <Divider
            variant="fullWidth"
            color={Colors.WHITE}
            sx={{
              marginTop: "10px",
              marginBottom: "10px",
              display: { xs: "block", sm: "none" },
            }}
          />

          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography fontSize="16px">
              Copyright © 2023 Playzo33 | All Rights Reserved
            </Typography>
            <Stack
              display={{ xs: "none", sm: "block" }}
              direction="row"
              spacing={2}
            >
              <Link to={routes.ROOT}>
                <FacebookIcon
                  sx={{
                    color: Colors.WHITE,
                    width: "25px",
                    height: "30px",
                    transition: "color 0.3s ease",
                    ":hover": {
                      color: Colors.BUTTON_COLOR,
                    },
                  }}
                />
              </Link>
              <Link to={routes.ROOT}>
                <InstagramIcon
                  sx={{
                    color: Colors.WHITE,
                    width: "25px",
                    height: "30px",
                    transition: "color 0.3s ease",
                    ":hover": {
                      color: Colors.BUTTON_COLOR,
                    },
                  }}
                />
              </Link>
              <Link to={routes.ROOT}>
                <YouTubeIcon
                  sx={{
                    color: Colors.WHITE,
                    width: "25px",
                    height: "30px",
                    transition: "color 0.3s ease",
                    ":hover": {
                      color: Colors.BUTTON_COLOR,
                    },
                  }}
                />
              </Link>
            </Stack>
          </Stack>
        </Box>
      </AppContainer>
    </Box>
  );
}
