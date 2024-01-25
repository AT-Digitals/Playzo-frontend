import { Box, CardMedia, Grid, Link, Stack, Typography } from "@mui/material";

import Aboutus from "../../assets/Aboutus.svg";
import Colors from "../../CommonComponents/Colors";
import AppContainer from "../../CommonComponents/AppContainer";
import Ball4 from "../../assets/ball-4 1.png";
import turf from "../../assets/Rectangle 12.png";
import turf1 from "../../assets/image 15.png";
import turf2 from "../../assets/image 16.png";
import turf3 from "../../assets/image 17.png";
import turf4 from "../../assets/image 18.png";
import EastIcon from "@mui/icons-material/East";
import ball from "../../assets/ball 3.png";
import Layer3 from "../../assets/Layer_4.png";
import Image1 from "../../assets/about-banner.png";
import TimelineComponent from "./TimelineComponent";
import Image2 from "../../assets/Rectangle 669.png";


export default function AboutUs() {
  return (
    <>
      <Box>
        <CardMedia
          component="img"
          //height="194"
          image={Image1}
          alt="Paella dish"
        />
        <img src={Image2} alt="about dish" style={{ width: "100%", position: "absolute", transform: `translate(0px, -100%)` }} />
      </Box>
      <AppContainer>
        <Box margin="10px 20px">
          <Grid
            container
            paddingY={2}
            justifyContent="center"
            alignItems="center"
            spacing={8}
          >
            <Grid item xs={5} justifyContent="center" alignItems="center">
              <Typography
                style={{
                  maxWidth: "438px",
                  height: "284px",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: "700",
                }}
              >
                At Playzo33, we extend beyond being a turf booking platform;
                we're a community driven destination designed for sports
                enthusiasts and those seeking the perfect blend of recreation
                and entertainment. Our journey commenced with a simple dream: to
                establish a haven where people could gather, connect, and stay
                active.
              </Typography>
              <img
                src={Ball4}
                height={310}
                width={300}
                alt="ball 4"
                style={{
                  position: "absolute",
                  transform: `translate(345px, -45px)`,
                }}
              />
            </Grid>
            <Grid item xs={7}>
              <img
                height="846px"
                style={{ width: "100%", minWidth: "670px" }}
                src={Aboutus}
                alt={"title"}
              />
            </Grid>
          </Grid>
        </Box>
      </AppContainer>
      <Box
        style={{
          backgroundColor: Colors.BACK_BLACK,
          color: Colors.WHITE,
        }}
      >
        <Grid
          container
          maxWidth={1200}
          margin="auto"
          paddingY={12}
          paddingX={5}
          columnSpacing={4}
        >
          <Grid item xs={6}>
            <Box>
              <Typography
                variant={"h4"}
                style={{
                  fontSize: "32px",
                  fontStyle: "normal",
                  fontWeight: "700",
                  marginBottom: "10px",
                }}
              >
                Mission
              </Typography>
              <Typography
                style={{
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  marginRight: "20px",
                }}
                variant={"body1"}
              >
                At Playzo33, our mission is to cultivate a vibrant community by
                providing premier sports and recreation facilities. We aim to
                nurture a passion for physical activity and social interaction,
                where individuals and groups can come together, stay active, and
                enjoy memorable experiences.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <Typography
                variant={"h4"}
                style={{
                  fontSize: "32px",
                  fontStyle: "normal",
                  fontWeight: "700",
                  marginBottom: "10px",
                }}
              >
                Vision
              </Typography>
              <Typography
                style={{
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  marginRight: "20px",
                }}
                variant={"body1"}
              >
                We envision Playzo33 as the premier choice for individuals and
                groups in search of top-quality turf, sports, and entertainment
                services. Our vision is to set the standard in providing
                outstanding facilities, establishing a dynamic environment where
                the delight of sports and recreation is within everyone's reach.
              </Typography>
            </Box>
            <img
              src={Layer3}
              width={100}
              height={137}
              alt="layer3"
              style={{
                position: "absolute",
                transform: `translate(475px, -18rem)`,
              }}
            />
          </Grid>
        </Grid>
      </Box>
      <Box paddingY={10} maxWidth={1200} margin="auto">
        <Stack direction="column" spacing={4}>
          <Typography variant="h3" color={Colors.BUTTON_COLOR} fontWeight={600}>
            PlayZo Facilities
          </Typography>
          <Grid container>
            <Stack direction="row" spacing={3}>
              <Grid item xs={6}>
                <img src={turf} alt="grid 1" style={{ width: "100%" }} />
              </Grid>
              <Grid item xs={6}>
                <img src={turf1} alt="grid 2" style={{ width: "100%" }} />
              </Grid>
            </Stack>
          </Grid>
          <Grid container>
            <Stack direction="row" spacing={3}>
              <Grid item xs={3}>
                <img src={turf2} alt="grid 3" style={{ width: "100%" }} />
              </Grid>
              <Grid item xs={5}>
                <img src={turf3} alt="grid 4" style={{ width: "100%" }} />
              </Grid>
              <Grid item xs={4}>
                <img src={turf4} alt="grid 5" style={{ width: "100%" }} />
              </Grid>
            </Stack>
          </Grid>
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            justifyContent="end"
          >
            <Link
              href=""
              sx={{
                textDecoration: "none",
                color: Colors.BUTTON_COLOR,
                fontSize: "18px",
                fontWeight: 600,
                ".css-olvtuu-MuiTypography-root-MuiLink-root:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              see all images
            </Link>
            <EastIcon sx={{ color: Colors.BUTTON_COLOR, fontSize: "35px" }} />
          </Stack>
          <Box paddingY={5}>
            <Grid container spacing={5}>
              <Grid item xs={12}>
                <img
                  src={ball}
                  width={132}
                  height={132}
                  alt="grid-ball"
                  style={{
                    position: "absolute",
                    transform: `translate(135px, -85px)`,
                  }}
                />
                <Typography
                  variant="h6"
                  color={Colors.BUTTON_COLOR}
                  fontWeight={600}
                >
                  Ready to play? <br /> Let's make every moment count at
                  Playzo33!
                </Typography>
                {/* <PopupCarousel /> */}
              </Grid>
            </Grid>
          </Box>
        </Stack>
      </Box>
      <TimelineComponent />
      {/* <Box paddingY={10} maxWidth={1200} margin="auto">


        <Stack direction="column" spacing={2} >
          <Box>
            <Typography variant="body1">Lorem ipsum</Typography>
            <Typography variant="h4">2020</Typography>
          </Box>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </Typography>
        </Stack>
      </Box> */}

    </>
  );
}
