import { Box, Grid, Link, Stack, Typography } from "@mui/material";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

import Badminton from "../assets/Image (8).png";
import CardComponent from "./CardComponent";
import CardMedia from "@mui/material/CardMedia";
import CarouselComponent from "./CarouselComponent";
import Colors from "../CommonComponents/Colors";
import ComponentCarosel from "./ComponentCarosel";
import Cricket from "../assets/Image (9).png";
import CustomButton from "../CommonComponents/CustomButton";
import Image1 from "../assets/Rectangle 67.png";
import Image2 from "../assets/Rectangle 669.png";
import Layer1 from "../assets/Layer_1 (1).png";
import Layer2 from "../assets/Layer_2.png";
import Machine from "../assets/Image (7).png";
import ball from "../assets/ball 1.png";
import ball3 from "../assets/ball 3.png";
import boardGames from "../assets/board games.png";
import playstation from "../assets/playstation.png";
import styled from "@emotion/styled";
import turf from "../assets/turf.png";

const StyledTypo = styled(Typography)({
  color: Colors.WHITE,
  position: "absolute",
  top: "50px",
  fontSize: "5rem",
  textAlign: "center",
  zIndex: 1,
  overflow: "hidden", // This is added to hide the overflow during the animation
  "&:hover": {
    "& > span:first-of-type": {
      transform: "translateX(-100%)",
    },
    "& > span:last-of-type": {
      transform: "translateX(104%)",
    },
  },
  "& > span": {
    display: "inline-block",
    transition: "transform 0.8s ease", // Adjust the duration here
  },
});

const StyledImage = styled.img`
  @media (min-width: 300px) {
    /* Extra small devices (phones) */
    position: absolute;
    transform: translate(28px, -38px);
    width: 50px;
    height: 60px;
  }

  @media (min-width: 768px) {
    /* Small devices (tablets) */
    position: absolute;
    transform: translate(28px, -38px);
    width: 50px;
    height: 60px;
  }

  @media (min-width: 992px) {
    /* Medium devices (desktops) */
    position: absolute;
    transform: translate(28px, -38px);
    width: 50px;
    height: 60px;
  }

  @media (min-width: 1200px) {
    /* Large devices (large desktops) */
    position: absolute;
    transform: translate(180px, -43px);
    width: 82px;
    height: 113px;
  }
`;
const StyledImage1 = styled.img`
  @media (min-width: 300px) {
    /* Extra small devices (phones) */
    position: absolute;
    transform: translate(23rem, 49rem);
    width: 37px;
    height: 37px;
  }

  @media (min-width: 768px) {
    /* Small devices (tablets) */
    position: absolute;
    transform: translate(24rem, 49rem);
    width: 37px;
    height: 37px;
  }

  @media (min-width: 992px) {
    /* Medium devices (desktops) */
    position: absolute;
    transform: translate(24rem, 49rem);
    width: 37px;
    height: 37px;
  }

  @media (min-width: 1200px) {
    /* Large devices (large desktops) */
    position: absolute;
    transform: translate(75rem, 30rem);
    width: 37px;
    height: 37px;
  }
`;

const StyledImage2 = styled.img`
  @media (min-width: 300px) {
    /* Extra small devices (phones) */
    position: absolute;
    transform: translate(-0px, 104rem);
    width: 37px;
    height: 37px;
  }

  @media (min-width: 768px) {
    /* Small devices (tablets) */
    position: absolute;
    transform: translate(-15px, 104rem);
    width: 37px;
    height: 37px;
  }

  @media (min-width: 992px) {
    /* Medium devices (desktops) */
    position: absolute;
    transform: translate(-15px, 104rem);
    width: 37px;
    height: 37px;
  }

  @media (min-width: 1200px) {
    /* Large devices (large desktops) */
    position: absolute;
    transform: translate(-15px, 62rem);
    width: 37px;
    height: 37px;
  }
`;
const StyledImage3 = styled.img`
  @media (min-width: 300px) {
    /* Extra small devices (phones) */
    position: absolute;
    right: 147px;
    width: 80px;
    height: 80px;
  }

  @media (min-width: 768px) {
    /* Small devices (tablets) */
    position: absolute;
    right: 147px;
    width: 80px;
    height: 80px;
  }

  @media (min-width: 992px) {
    /* Medium devices (desktops) */
    position: absolute;
    right: 147px;
    width: 80px;
    height: 80px;
  }

  @media (min-width: 1200px) {
    /* Large devices (large desktops) */
    position: absolute;
    right: 275px;
    width: 100px;
    height: 100px;
  }
`;
const StyledImage4 = styled.img`
  @media (min-width: 300px) {
    /* Extra small devices (phones) */
    position: absolute;
    transform: translate(151%, 206%);
    top: 100px;
    width: 150px;
    height: 150px;
  }

  @media (min-width: 768px) {
    /* Small devices (tablets) */
    position: absolute;
    transform: translate(151%, 206%);
    top: 100px;
    width: 150px;
    height: 150px;
  }

  @media (min-width: 992px) {
    /* Medium devices (desktops) */
    position: absolute;
    transform: translate(151%, 206%);
    top: 100px;
    width: 150px;
    height: 150px;
  }

  @media (min-width: 1200px) {
    /* Large devices (large desktops) */
    position: absolute;
    transform: translate(385%, 102%);
    top: 100px;
    width: 250px;
    height: 250px;
  }
`;
const StyledImage5 = styled.img`
  @media (min-width: 300px) {
    /* Extra small devices (phones) */
    position: absolute;
    top: -172px;
    width: 1240px;
    transform: translate(${0}, ${10.5}%);
  }

  @media (min-width: 768px) {
    /* Small devices (tablets) */
    position: absolute;
    top: -172px;
    width: 1240px;
    transform: translate(${0}, ${10.5}%);
  }

  @media (min-width: 992px) {
    /* Medium devices (desktops) */
    position: absolute;
    top: -172px;
    width: 1240px;
    transform: translate(${0}, ${10.5}%);
  }

  @media (min-width: 1200px) {
    /* Large devices (large desktops) */
    position: absolute;
    width: 100%;
    transform: translate(0%, 4.7%);
  }
`;
const StyledImage6 = styled.img`

  @media (min-width: 300px) {
    /* Extra small devices (phones) */
    width: 100px;
    height: 100px;
    transform: scaleX(-1);
    position: absolute;
    left: 88px;
  }

  @media (min-width: 768px) {
    /* Small devices (tablets) */
    width: 100px;
    height: 100px;
    transform: scaleX(-1);
    position: absolute;
    left: 88px;
  }

  @media (min-width: 992px) {
    /* Medium devices (desktops) */
    width: 100px;
    height: 100px;
    transform: scaleX(-1);
    position: absolute;
    left: 88px;
  }

  @media (min-width: 1200px) {
    /* Large devices (large desktops) */
    width: 150px;
    height: 150px;
    transform: scaleX(-1);
    position: absolute;
    left: 225px;
    }}
  }
`;

const StyledButton = styled(CustomButton)({
  fontSize: "20px",
  textTransform: "none",
  fontWeight: 600,
  position: "absolute",
  top: "100px",
  padding: "10px 20px",
});

export default function HomePage() {
  const typoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = typoRef.current;
    if (element) {
      element.classList.add("start-animation");
    }
  }, []);

  const [animateOnMount, setAnimateOnMount] = useState(false);

  useLayoutEffect(() => {
    const handleAnimation = () => {
      // Trigger animation after a short delay (adjust as needed)
      const animationTimeout = setTimeout(() => {
        setAnimateOnMount(true);
      }, 500);

      // Clear the timeout to avoid memory leaks
      return () => clearTimeout(animationTimeout);
    };

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      handleAnimation();
    } else {
      // If not, wait for the window.onload event
      window.onload = handleAnimation;
    }
  }, []);

  return (
    <Box width="100%">
      <Box>
        <CardMedia
          sx={{
            height: { xs: "800px", sm: "800px", md: "800px", lg: "" },
          }}
          component="img"
          //height="194"
          image={Image1}
          alt="Paella dish"
        />
      </Box>
      <StyledImage5 src={Image2} alt="background" />

      <StyledTypo
        ref={typoRef}
        variant="h3"
        sx={{
          transform: {
            xs: "translate(13%, 438%)",
            sm: "translate(13%, 438%)",
            md: "translate(13%, 438%)",
            lg: "translate(107%, 232%)",
          },
          animation: animateOnMount ? "slide-in 0.8s ease" : "none",
        }}
        fontWeight={600}
        fontFamily="Inter"
        fontSize={{ xs: "3rem", sm: "3rem", md: "3rem", lg: "5rem" }}
      >
        <span>Play Beyond</span> <br /> <span>Boundaries</span>
      </StyledTypo>
      <StyledImage4 src={ball3} alt="banner" />
      <StyledButton
        sx={{
          backgroundColor: Colors.BUTTON_COLOR,
          fontFamily: "Inter",
          fontWeight: 600,
          color: "white",
          transform: {
            xs: "translate(74%, 1271%)",
            sm: "translate(74%, 1271%)",
            md: "translate(74%, 1271%)",
            lg: "translate(450%, -1200%)",
          },
        }}
        bgColor={Colors.BUTTON_COLOR}
        variant="contained"
        color={Colors.WHITE}
      >
        Book Now
      </StyledButton>
      <Box
        sx={{ backgroundColor: Colors.WHITE }}
        width="100%"
        maxWidth={1200}
        margin="0 auto"
        paddingTop={8}
        pb={4}
      >
        <StyledImage src={Layer2} alt="Layer2" />
        <Typography
          variant="h2"
          color={Colors.BLACK}
          textAlign="center"
          fontSize={{ xs: "18px", sm: "18px", md: "18px", lg: "32px" }}
          fontWeight={700}
          width={{ xs: "300px", sm: "300px", md: "300px", lg: "700px" }}
          margin="auto"
          sx={{ fontFamily: "Inter" }}
        >
          We offer a diverse range of{" "}
          <span style={{ color: Colors.BUTTON_COLOR }}>
            <i>services</i>
          </span>{" "}
          to cater to the varied interests of our community.
        </Typography>
      </Box>
      <Grid
        container
        width="100%"
        maxWidth={1200}
        margin="0 auto"
        spacing={3}
        pb={3}
        flexDirection={{ xs: "column", sm: "column", md: "column", lg: "row" }}
      >
        <Grid item xs={4}>
          <CardComponent
            buttonLabel="Know more.."
            title={"Turf"}
            description={
              "Kick off your sports adventure on our two top-notch turfs, perfect for football, and cricket."
            }
            image={turf}
          />
        </Grid>
        <Grid item xs={4}>
          <CardComponent
            buttonLabel="Know more.."
            title={"Play Station"}
            description={
              "Immerse yourself in the ultimate gaming experience with the latest consoles and a wide game selection."
            }
            image={playstation}
          />
        </Grid>
        <Grid item xs={4}>
          <CardComponent
            buttonLabel="Know more.."
            title={"Board Games"}
            description={
              "Explore timeless and modern board games, fostering laughter and friendly competition for a delightful time."
            }
            image={boardGames}
          />
        </Grid>
        <StyledImage1 src={Layer1} alt="layer1" />
        <StyledImage2 src={Layer1} alt="layer1" />
        <Grid item xs={4}>
          <CardComponent
            buttonLabel="Know more.."
            title={"Badminton"}
            description={
              "Ace every shot on our professional Badminton courts, where passion meets precision."
            }
            image={Badminton}
          />
        </Grid>
        <Grid item xs={4}>
          <CardComponent
            buttonLabel="Know more.."
            title={"Cricket Net"}
            description={
              "Refine your cricket prowess where every practice session is designed to elevate your game to new heights."
            }
            image={Cricket}
          />
        </Grid>
        <Grid item xs={4}>
          <CardComponent
            buttonLabel="Know more.."
            title={"Bowling Machine"}
            description={
              "Precision meets practice – polish your cricket skills with our cutting-edge Bowling Machine."
            }
            image={Machine}
          />
        </Grid>
      </Grid>
      <Box
        width="100%"
        maxWidth={1200}
        margin="0 auto"
        pb={{ xs: "32px", sm: "32px", md: "32px", lg: "50px" }}
        pt={{ xs: "32px", sm: "32px", md: "32px", lg: "50px" }}
      >
        <Stack
          marginRight={{ xs: "25px", sm: "25px", md: "25px", lg: "0px" }}
          direction="row"
          justifyContent="end"
          alignItems="center"
        >
          <StyledImage3 src={ball} alt="ball1" />
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
            see more services
          </Link>
        </Stack>
      </Box>
      <CarouselComponent />
      <Box width="100%" maxWidth={1200} margin="0 auto" paddingY={4}>
        <Stack direction="row" justifyContent="start" alignItems="center">
          <Link
            sx={{
              textDecoration: "none",
              color: Colors.BUTTON_COLOR,
              fontSize: { xs: "30px", sm: "30px", md: "30px", lg: "40px" },
              fontWeight: 500,
              marginLeft: { xs: "29px", sm: "29px", md: "29px", lg: "-81px" },
            }}
          >
            Offers
          </Link>
          <StyledImage6 src={ball} alt="ball1" />
        </Stack>
      </Box>
      <ComponentCarosel />
    </Box>
  );
}
