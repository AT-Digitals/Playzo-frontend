import {
  Box,
  Button,
  CardMedia,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";

import Aboutus from "../../assets/Aboutus.svg";
import AppContainer from "../../CommonComponents/AppContainer";
import Ball4 from "../../assets/ball-4 1.png";
import Colors from "../../CommonComponents/Colors";
import CustomButton from "../../CommonComponents/CustomButton";
import EastIcon from "@mui/icons-material/East";
import Image1 from "../../assets/Rectangle 67.png";
import Image2 from "../../assets/Rectangle 669.png";
import Layer3 from "../../assets/Layer_4.png";
import TimelineComponent from "./TimelineComponent";
import ball from "../../assets/ball 3.png";
import bg from "./about-us-bg.jpg";
import group from "./Group 34245.svg";
import styled from "@emotion/styled";
import turf from "../../assets/Rectangle 12.png";
import turf1 from "../../assets/image 15.png";
import turf2 from "../../assets/image 16.png";
import turf3 from "../../assets/image 17.png";
import turf4 from "../../assets/image 18.png";
import vision from "./visibility.svg";

const StyledImage = styled.img`
  @media (min-width: 300px) {
    /* Extra small devices (phones) */
    width: 370px;
    height: 350px;
  }

  @media (min-width: 768px) {
    /* Small devices (tablets) */
    width: 370px;
    height: 350px;
  }

  @media (min-width: 992px) {
    /* Medium devices (desktops) */
    width: 370px;
    height: 350px;
  }

  @media (min-width: 1200px) {
    /* Large devices (large desktops) */
    width: 670px;
    height: 846px;
  }
`;

const StyledImage1 = styled.img`
  @media (min-width: 300px) {
    /* Extra small devices (phones) */
    width: 120px;
    height: 120px;
    position: absolute;
    transform: translate(205px, 285px);
  }

  @media (min-width: 768px) {
    /* Small devices (tablets) */
    width: 120px;
    height: 120px;
    position: absolute;
    transform: translate(205px, 285px);
  }

  @media (min-width: 992px) {
    /* Medium devices (desktops) */
    width: 120px;
    height: 120px;
    position: absolute;
    transform: translate(205px, 285px);
  }

  @media (min-width: 1200px) {
    /* Large devices (large desktops) */
    width: 300px;
    height: 310px;
    position: absolute;
    transform: translate(345px, -45px);
  }
`;
const StyledImage2 = styled.img`
  @media (min-width: 300px) {
    /* Extra small devices (phones) */
    width: 50px;
    height: 70px;
    position: absolute;
    transform: translate(81px, -27rem);
  }

  @media (min-width: 768px) {
    /* Small devices (tablets) */
    width: 50px;
    height: 70px;
    position: absolute;
    transform: translate(81px, -27rem);
  }

  @media (min-width: 992px) {
    /* Medium devices (desktops) */
    width: 50px;
    height: 70px;
    position: absolute;
    transform: translate(81px, -27rem);
  }

  @media (min-width: 1200px) {
    /* Large devices (large desktops) */
    width: 100px;
    height: 137px;
    position: absolute;
    transform: translate(475px, -18rem);
  }
`;
const StyledImage3 = styled.img`
  @media (min-width: 300px) {
    /* Extra small devices (phones) */
    width: 100%;
    margin-left: -31px;
  }

  @media (min-width: 768px) {
    /* Small devices (tablets) */
    width: 100%;
    margin-left: -31px;
  }

  @media (min-width: 992px) {
    /* Medium devices (desktops) */
    width: 100%;
    margin-left: -31px;
  }

  @media (min-width: 1200px) {
    /* Large devices (large desktops) */
    width: 100%;
    margin-left: 5px;
    height: 98%;
    opacity: 1;
    overflow: hidden;
    position: relative;
    transition: transform 0.5s ease;
  }
`;
const StyledImage4 = styled.img`
  @media (min-width: 300px) {
    /* Extra small devices (phones) */
    width: 85%;
    height: 105%;
  }

  @media (min-width: 768px) {
    /* Small devices (tablets) */
    width: 85%;
    height: 105%;
  }

  @media (min-width: 992px) {
    /* Medium devices (desktops) */
    width: 85%;
    height: 105%;
  }

  @media (min-width: 1200px) {
    /* Large devices (large desktops) */
    width: 100%;
    height: 99%;
    opacity: 1;
    overflow: hidden;
    position: relative;
    transition: transform 0.5s ease;
  }
`;

const StyledImage5 = styled.img`
  @media (min-width: 300px) {
    /* Extra small devices (phones) */
    width: 159%;
    margin-left: 37px;
    margin-top: 7px;
  }

  @media (min-width: 768px) {
    /* Small devices (tablets) */
    width: 159%;
    margin-left: 37px;
    margin-top: 7px;
  }

  @media (min-width: 992px) {
    /* Medium devices (desktops) */
    width: 159%;
    margin-left: 37px;
    margin-top: 7px;
  }

  @media (min-width: 1200px) {
    /* Large devices (large desktops) */
    width: 100%;
    margin: 1px;
    opacity: 1;
    overflow: hidden;
    position: relative;
    transition: transform 0.5s ease;
  }
`;
const StyledImage6 = styled.img`
  @media (min-width: 300px) {
    /* Extra small devices (phones) */
    position: relative;
    transform: translate(14px, 19px);
    width: 80px;
    height: 90px;
    margin-top: -74px;
    margin-left: 92px;
    transition: left 0.2s;
  }

  @media (min-width: 768px) {
    /* Small devices (tablets) */
    position: absolute;
    transform: translate(93px, -60px);
    width: 80px;
    height: 90px;
  }

  @media (min-width: 992px) {
    /* Medium devices (desktops) */
    position: absolute;
    transform: translate(93px, -60px);
    width: 80px;
    height: 90px;
  }

  @media (min-width: 1200px) {
    /* Large devices (large desktops) */
    position: relative;
    transform: translate(50px, -10px);
    width: 100px;
    height: 100px;
    transition: left 0.2s;
  }
`;

export default function AboutUs() {
  const ballRef = useRef<HTMLImageElement>(null);
  const lastScrollTop = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (ballRef.current) {
        const ball = ballRef.current;
        const scrollTop = window.scrollY || window.pageYOffset;

        if (scrollTop > lastScrollTop.current) {
          // Scrolling down
          ball.style.transform = `rotate(${scrollTop * 0.1}deg)`;
          ball.style.left = `${parseFloat(ball.style.left || "50%") + 1.3}px`;
          // Adjust the movement speed by changing the value after '-'
          if (window.innerWidth >= 600) {
            // Only adjust margins on desktop view
            ball.style.marginTop = "-92px";
          }
        } else {
          // Scrolling up
          ball.style.transform = `rotate(-${scrollTop * 0.1}deg)`;
          ball.style.left = `${parseFloat(ball.style.left || "50%") - 1.3}px`;
          // Adjust the movement speed by changing the value after '+'
          if (window.innerWidth <= 600) {
            // Only adjust margins on desktop view
            ball.style.marginTop = "-74px"; // Reset margin top
            ball.style.marginLeft = "87px";
            ball.style.width = "93px";
            ball.style.height = "93px"; // Reset margin left
          }
        }
        lastScrollTop.current = scrollTop;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [showTimeline, setShowTimeline] = useState(false);

  useEffect(() => {
    // Show the timeline component with a delay for animation effect
    const timer = setTimeout(() => {
      setShowTimeline(true);
    }, 500); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
          position: "relative",
          transition: "transform 0.3s ease",
          "&:hover": {
            transform: "scale(1.1)", // Increase scale on hover
          },
        }}
      >
        <CardMedia
          component="img"
          // height="194"
          image={Image1}
          alt="Paella dish"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover", // Make sure the image covers the entire container
          }}
        />
        <img
          src={Image2}
          alt="about dish"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            objectFit: "cover", // Make sure the image covers the entire container
          }}
        />
      </Box>
      <AppContainer>
        <Box margin="10px 20px">
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={8}
            flexDirection={{
              xs: "column-reverse",
              sm: "column-reverse",
              md: "column-reverse",
              lg: "row-reverse",
            }}
            mb={{ xs: "60px", sm: "60px", md: "60px", lg: "20px" }}
            mt={{ xs: "-44px", sm: "-44px", md: "-44px", lg: "-7px" }}
          >
            <Grid
              item
              xs={0}
              pl={{ xs: "58px", sm: "58px", md: "58px", lg: "70px" }}
              justifyContent="center"
              alignItems="center"
            >
              <Typography
                color={Colors.BLACK}
                pt={{ xs: "25px", sm: "25px", md: "25px", lg: "0px" }}
                marginRight={{ xs: "66px", sm: "66px", md: "66px", lg: "30px" }}
                fontSize={{ xs: "15px", sm: "15px", md: "15px", lg: "20px" }}
                maxWidth={{
                  xs: "298px",
                  sm: "298px",
                  md: "298px",
                  lg: "438px",
                }}
                sx={{
                  height: {
                    xs: "245px",
                    sm: "245px",
                    md: "245px",
                    lg: "320px",
                  },
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
              {/* <StyledImage1 src={Ball4} alt="ball 4" /> */}
            </Grid>
            <Grid
              item
              xs={7}
              display={{
                xs: "contents",
                sm: "contents",
                md: "contents",
                lg: "block",
              }}
            >
              <StyledImage src={Aboutus} alt={"title"} />
            </Grid>
          </Grid>
        </Box>
      </AppContainer>
      <Box
        sx={{
          background: `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)), url(${bg})`,
          backgroundSize: "cover",
          color: Colors.WHITE,
          position: "relative",
        }}
      >
        <Grid
          container
          maxWidth={1200}
          margin="auto"
          pt={{ xs: "70px", sm: "70px", md: "70px", lg: "96px" }}
          pb={{ xs: "60px", sm: "60px", md: "60px", lg: "96px" }}
          pl={{ xs: "0px", sm: "0px", md: "0px", lg: "40px" }}
          pr={{ xs: "15px", sm: "15px", md: "15px", lg: "40px" }}
          columnSpacing={4}
          flexDirection={{
            xs: "column",
            sm: "column",
            md: "column",
            lg: "row",
          }}
          gap={{ xs: "30px", sm: "30px", md: "30px", lg: "0px" }}
        >
          <Grid
            item
            xs={6}
            maxWidth={{ xs: "100%", sm: "100%", md: "100%", lg: "50%" }}
          >
            <Box>
              <Typography
                fontSize={{ xs: "20px", sm: "20px", md: "20px", lg: "32px" }}
                variant={"h4"}
                style={{
                  fontStyle: "normal",
                  fontWeight: "700",
                  marginBottom: "10px",
                }}
              >
                <img
                  src={group}
                  alt=""
                  style={{
                    maxWidth: 50,
                    width: "100%",
                    marginRight: "10px",
                  }}
                />
                Mission
              </Typography>
              <Typography
                fontSize={{ xs: "15px", sm: "15px", md: "15px", lg: "20px" }}
                style={{
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
          <Grid
            item
            xs={6}
            maxWidth={{ xs: "100%", sm: "100%", md: "100%", lg: "50%" }}
          >
            <Box>
              <Typography
                fontSize={{ xs: "20px", sm: "20px", md: "20px", lg: "32px" }}
                variant={"h4"}
                style={{
                  fontStyle: "normal",
                  fontWeight: "700",
                  marginBottom: "10px",
                }}
              >
                <img
                  src={vision}
                  alt=""
                  style={{
                    maxWidth: 50,
                    width: "100%",
                    marginRight: "10px",
                  }}
                />
                Vision
              </Typography>
              <Typography
                fontSize={{ xs: "15px", sm: "15px", md: "15px", lg: "20px" }}
                style={{
                  fontStyle: "normal",
                  fontWeight: "400",
                  marginRight: "27px",
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
            {/* <StyledImage2 src={Layer3} alt="layer3" /> */}
          </Grid>
        </Grid>
      </Box>
      <Box
        pt={{ xs: "50px", sm: "50px", md: "50px", lg: "80px" }}
        pb={{ xs: "10px", sm: "10px", md: "10px", lg: "25px" }}
        maxWidth={1200}
        margin="auto"
      >
        <Stack direction="column" spacing={4}>
          <Typography
            sx={{
              position: {
                xs: "absolute",
                sm: "absolute",
                md: "absolute",
                lg: "",
              },
              transform: {
                xs: "translate(29px, 100px)",
                sm: "translate(29px, 100px)",
                md: "translate(29px, 100px)",
                lg: "translate(-1px, -26px)",
              },
            }}
            fontSize={{ xs: "1.3rem", sm: "1.3rem", md: "1.3rem", lg: "42px" }}
            variant="h3"
            color={Colors.BUTTON_COLOR}
            fontWeight={600}
          >
            PlayZo Facilities
          </Typography>
          <Grid container>
            <Stack
              alignItems={{
                xs: "center",
                sm: "center",
                md: "center",
                lg: "normal",
              }}
              direction={{
                xs: "column",
                sm: "column",
                md: "column",
                lg: "row",
              }}
              spacing={3}
            >
              <Grid
                style={{
                  position: "relative",
                  overflow: "hidden",
                }}
                item
                xs={6}
                maxWidth={{ xs: "83%", sm: "83%", md: "83%", lg: "50%" }}
                margin={{
                  xs: "30px 30px",
                  sm: "30px 30px",
                  md: "30px 30px",
                  lg: "0px",
                }}
              >
                <img
                  style={{
                    opacity: 1,
                    width: "100%",
                    transition: "transform 0.5s ease",
                    height: "100%",
                    overflow: "hidden",
                    position: "relative",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                  src={turf}
                  alt="grid 1"
                />
              </Grid>
              <Grid
                item
                xs={6}
                style={{
                  marginTop: "3px",
                  position: "relative",
                  overflow: "hidden",
                }}
                maxWidth={{ xs: "83%", sm: "83%", md: "83%", lg: "50%" }}
              >
                <img
                  style={{
                    opacity: 1,
                    width: "100%",
                    transition: "transform 0.5s ease",
                    height: "100%",
                    overflow: "hidden",
                    position: "relative",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                  src={turf1}
                  alt="grid 2"
                />
              </Grid>
            </Stack>
          </Grid>
          <Grid container>
            <Stack
              direction="row"
              marginTop={{ xs: "-30px", sm: "-30px", md: "-30px", lg: "0px" }}
              marginBottom={{ xs: "80px", sm: "80px", md: "80px", lg: "0px" }}
              spacing={{ xs: 0, sm: 0, md: 0, lg: 3 }}
            >
              <Box
                alignItems={{
                  xs: "center",
                  sm: "center",
                  md: "center",
                  lg: "normal",
                }}
                gap={{ xs: "0px", sm: "0px", md: "0px", lg: "25px" }}
                display={{ xs: "flex", sm: "flex", md: "flex", lg: "flex" }}
                flexDirection={{
                  xs: "column",
                  sm: "column",
                  md: "column",
                  lg: "row",
                }}
              >
                <Grid
                  sx={{
                    position: "relative",
                    overflow: { xs: "", sm: "", md: "", lg: "hidden" },
                  }}
                  item
                  xs={0}
                  ml={{ xs: "19px", sm: "19px", md: "19px", lg: "0px" }}
                  width={{ xs: "75%", sm: "75%", md: "75%", lg: "37%" }}
                >
                  <StyledImage4
                    style={{}}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                    src={turf2}
                    alt="grid 3"
                  />
                </Grid>
                <Grid
                  sx={{
                    position: "relative",
                    overflow: { xs: "", sm: "", md: "", lg: "hidden" },
                  }}
                  item
                  xs={0}
                >
                  <StyledImage5
                    style={{}}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                    src={turf3}
                    alt="grid 4"
                  />
                </Grid>
              </Box>
              <Grid
                sx={{
                  position: "relative",
                  overflow: { xs: "", sm: "", md: "", lg: "hidden" },
                }}
                item
                xs={0}
                width={{ xs: "135%", sm: "135%", md: "135%", lg: "33%" }}
              >
                <StyledImage3
                  style={{}}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                  src={turf4}
                  alt="grid 5"
                />
              </Grid>
            </Stack>
          </Grid>
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            justifyContent="center"
            paddingTop={{ xs: "40px", sm: "40px", md: "40px", lg: "0px" }}
          >
            <Link
              href=""
              sx={{
                textDecoration: "none",
                color: Colors.BUTTON_COLOR,
                fontSize: { xs: "16px", sm: "16px", md: "16px", lg: "18px" },
                fontWeight: { xs: "bold", sm: "bold", md: "bold", lg: "600" },
                ".css-olvtuu-MuiTypography-root-MuiLink-root:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              <CustomButton
                style={{
                  background: Colors.WHITE,
                  color: Colors.BUTTON_COLOR,
                  textTransform: "capitalize",
                  border: "1px solid #15B5FC",
                  padding: "10px 15px",
                }}
              >
                see more services
              </CustomButton>{" "}
            </Link>
            {/* <EastIcon
              sx={{
                color: Colors.BUTTON_COLOR,
                fontSize: "35px",
                paddingRight: { xs: "9px", sm: "9px", md: "9px", lg: "0px" },
              }}
            /> */}
          </Stack>
          <Box pb={{ xs: "0px", sm: "0px", md: "0px", lg: "40px" }}>
            <Grid container spacing={5}>
              <Grid
                item
                xs={12}
                marginTop={{
                  xs: "-104px",
                  sm: "-104px",
                  md: "-104px",
                  lg: "40px",
                }}
                marginLeft={{ xs: "24px", sm: "24px", md: "24px", lg: "0px" }}
              >
                {/* <StyledImage6 src={ball} ref={ballRef} alt="grid-ball" /> */}
                <Typography
                  maxWidth={{
                    xs: "200px",
                    sm: "200px",
                    md: "200px",
                    lg: "441px",
                  }}
                  fontSize={{ xs: "15px", sm: "15px", md: "15px", lg: "20px" }}
                  variant="h6"
                  color={Colors.BLACK}
                  fontWeight={600}
                  marginTop={{ xs: "0px", sm: "0px", md: "0px", lg: "-48px" }}
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
      <Box
        style={{
          transform: showTimeline ? "translateY(-380vh)" : "translateY(100vh)", // Slide up from bottom
          transition: "transform 0.9s ease-in-out", // Smooth transition
          position: "relative",
        }}
      >
        {showTimeline && window.innerWidth >= 600 && <TimelineComponent />}
      </Box>
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
