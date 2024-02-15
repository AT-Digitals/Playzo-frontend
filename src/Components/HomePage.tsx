import {
  Box,
  Button,
  Grid,
  Link,
  Stack,
  Typography,
  css,
  keyframes,
} from "@mui/material";
import { useEffect, useState } from "react";

import Badminton from "../assets/Image (8).png";
import CardComponent from "./CardComponent";
import CardMedia from "@mui/material/CardMedia";
import CarouselComponent from "./CarouselComponent";
import Colors from "../CommonComponents/Colors";
import ComponentCarosel from "./ComponentCarosel";
import Cricket from "../assets/Image (9).png";
import CustomButton from "../CommonComponents/CustomButton";
import Image2 from "../assets/Rectangle 669.png";
import Image3 from "../assets/pexels-guduru-ajay-bhargav-863988.jpg";
import Image4 from "../assets/pexels-pixabay-209977.jpg";
import Image5 from "../assets/pexels-pixabay-46798.jpg";
import Machine from "../assets/Image (7).png";
import boardGames from "../assets/board games.png";
import playstation from "../assets/playstation.png";
import styled from "@emotion/styled";
import turf from "../assets/turf.png";

// import Layer1 from "../assets/Layer_1 (1).png";
// import Layer2 from "../assets/Layer_2.png";

// import ball from "../assets/ball 1.png";

// const StyledImage = styled.img`
//   @media (min-width: 300px) {
//     /* Extra small devices (phones) */
//     position: absolute;
//     transform: translate(28px, -38px);
//     width: 50px;
//     height: 60px;
//   }
//   @media (min-width: 768px) {
//     /* Small devices (tablets) */
//     position: absolute;
//     transform: translate(28px, -38px);
//     width: 50px;
//     height: 60px;
//   }
//   @media (min-width: 992px) {
//     /* Medium devices (desktops) */
//     position: absolute;
//     transform: translate(28px, -38px);
//     width: 50px;
//     height: 60px;
//   }
//   @media (min-width: 1200px) {
//     /* Large devices (large desktops) */
//     position: absolute;
//     transform: translate(180px, -43px);
//     width: 82px;
//     height: 113px;
//   }
// `;
// const StyledImage1 = styled.img`
//   @media (min-width: 300px) {
//     /* Extra small devices (phones) */
//     position: absolute;
//     transform: translate(23rem, 49rem);
//     width: 37px;
//     height: 37px;
//   }
//   @media (min-width: 768px) {
//     /* Small devices (tablets) */
//     position: absolute;
//     transform: translate(24rem, 49rem);
//     width: 37px;
//     height: 37px;
//   }
//   @media (min-width: 992px) {
//     /* Medium devices (desktops) */
//     position: absolute;
//     transform: translate(24rem, 49rem);
//     width: 37px;
//     height: 37px;
//   }
//   @media (min-width: 1200px) {
//     /* Large devices (large desktops) */
//     position: absolute;
//     transform: translate(75rem, 30rem);
//     width: 37px;
//     height: 37px;
//   }
// `;
// const StyledImage2 = styled.img`
//   @media (min-width: 300px) {
//     /* Extra small devices (phones) */
//     position: absolute;
//     transform: translate(-0px, 104rem);
//     width: 37px;
//     height: 37px;
//   }
//   @media (min-width: 768px) {
//     /* Small devices (tablets) */
//     position: absolute;
//     transform: translate(-15px, 104rem);
//     width: 37px;
//     height: 37px;
//   }
//   @media (min-width: 992px) {
//     /* Medium devices (desktops) */
//     position: absolute;
//     transform: translate(-15px, 104rem);
//     width: 37px;
//     height: 37px;
//   }
//   @media (min-width: 1200px) {
//     /* Large devices (large desktops) */
//     position: absolute;
//     transform: translate(-14px, 62rem);
//     width: 37px;
//     height: 37px;
//   }
// `;
// const StyledImage3 = styled.img`
//   @media (min-width: 300px) {
//     /* Extra small devices (phones) */
//     position: absolute;
//     right: 147px;
//     width: 80px;
//     height: 80px;
//   }
//   @media (min-width: 768px) {
//     /* Small devices (tablets) */
//     position: absolute;
//     right: 147px;
//     width: 80px;
//     height: 80px;
//   }
//   @media (min-width: 992px) {
//     /* Medium devices (desktops) */
//     position: absolute;
//     right: 147px;
//     width: 80px;
//     height: 80px;
//   }
//   @media (min-width: 1200px) {
//     /* Large devices (large desktops) */
//     position: absolute;
//     right: 275px;
//     width: 100px;
//     height: 100px;
//   }
// `;
// const StyledImage4 = styled.img`
//   @media (min-width: 300px) {
//     /* Extra small devices (phones) */
//     position: absolute;
//     transform: translate(151%, 206%);
//     top: 100px;
//     width: 150px;
//     height: 150px;
//   }
//   @media (min-width: 768px) {
//     /* Small devices (tablets) */
//     position: absolute;
//     transform: translate(151%, 206%);
//     top: 100px;
//     width: 150px;
//     height: 150px;
//   }
//   @media (min-width: 992px) {
//     /* Medium devices (desktops) */
//     position: absolute;
//     transform: translate(151%, 206%);
//     top: 100px;
//     width: 150px;
//     height: 150px;
//   }
//   @media (min-width: 1200px) {
//     /* Large devices (large desktops) */
//     position: absolute;
//     transform: translate(385%, 102%);
//     top: 100px;
//     width: 250px;
//     height: 250px;
//   }
// `;
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
    top: -520px;
    transform: translate(0%, 4.7%);
  }
`;
// const StyledImage6 = styled.img`
//   @media (min-width: 300px) {
//     /* Extra small devices (phones) */
//     width: 100px;
//     height: 100px;
//     transform: scaleX(-1);
//     position: absolute;
//     left: 88px;
//   }
//   @media (min-width: 768px) {
//     /* Small devices (tablets) */
//     width: 100px;
//     height: 100px;
//     transform: scaleX(-1);
//     position: absolute;
//     left: 88px;
//   }
//   @media (min-width: 992px) {
//     /* Medium devices (desktops) */
//     width: 100px;
//     height: 100px;
//     transform: scaleX(-1);
//     position: absolute;
//     left: 88px;
//   }
//   @media (min-width: 1200px) {
//     /* Large devices (large desktops) */
//     width: 150px;
//     height: 150px;
//     transform: scaleX(-1);
//     position: absolute;
//     left: 225px;
//     }}
//   }
// `;
const StyledButton = styled(CustomButton)({
  fontSize: "20px",
  textTransform: "none",
  fontWeight: 600,
  position: "absolute",
  padding: "10px 20px",
});
const StyledTypo = styled(Typography)({
  color: Colors.WHITE,
  position: "absolute",
  top: "34%",
  left: "27%",
  fontSize: "3rem",
  textAlign: "center",
  zIndex: 1,
  overflow: "hidden",
  cursor: "pointer",
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
    transition: "transform 2s ease",
  },
});

const images = [Image3, Image4, Image5]; // List of images to loop through
const intervalTime = 5000; // Interval time in milliseconds

export default function HomePage() {
  const slideFromLeft = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

  const slideFromRight = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;
  interface StyledSpanProps {
    showText: boolean;
    initialLoad: boolean;
  }

  const StyledSpan = styled.span<StyledSpanProps>`
    opacity: ${({ showText }) => (showText ? 1 : 0)};
    transition: opacity 1s ease-in-out;
    &:first-child {
      ${({ initialLoad, showText }) =>
        initialLoad &&
        showText &&
        css`
          animation: ${slideFromLeft} 1s ease-out;
        `}
    }
    &:last-child {
      ${({ initialLoad, showText }) =>
        initialLoad &&
        showText &&
        css`
          animation: ${slideFromRight} 1s ease-out;
        `}
    }
  `;

  const [showText, setShowText] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowText(true);
    }, 1000);

    const timer2 = setTimeout(() => {
      // Set showText to true for the second timer
      setInitialLoad(false); // Move this line here to set initialLoad to false after animation
    }, 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  useEffect(() => {
    if (!initialLoad) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, intervalTime);

      return () => clearInterval(interval);
    }
  }, [initialLoad]);
  return (
    <Box width="100%">
      <Box>
        <CardMedia
          sx={{
            height: { xs: "800px", sm: "800px", md: "800px", lg: "640px" },
          }}
          component="img"
          image={images[currentImageIndex]}
          alt="Paella dish"
        />
      </Box>
      <StyledImage5 src={Image2} alt="background" />
      <StyledTypo
        variant="h3"
        fontWeight={600}
        fontFamily="Inter"
        fontSize={{ xs: "3rem", sm: "3rem", md: "3rem", lg: "7rem" }}
        textAlign={"center"}
      >
        <StyledSpan showText={showText} initialLoad={initialLoad}>
          Play Beyond
        </StyledSpan>

        <br />
        <StyledSpan showText={showText} initialLoad={initialLoad}>
          Boundaries
        </StyledSpan>
      </StyledTypo>
      <Typography
        style={{ transform: "translate(271%, -340%)" }}
        position={"absolute"}
        fontSize={"2.5rem"}
        fontWeight={"400"}
        color={Colors.WHITE}
      >
        #Let’s Playzo
      </Typography>
      <StyledButton
        style={{
          fontFamily: "Inter",
          fontWeight: 600,
          color: Colors.WHITE,
          border: "2px solid white",
          transform: "translate(459%, -235%)",
        }}
        variant="outlined"
      >
        Book Now
      </StyledButton>
      <Box sx={{ backgroundColor: "#f0f0f0" }}>
        <Typography
          pt={"90px"}
          fontSize={"42px"}
          textAlign={"center"}
          fontWeight={"600"}
          color={Colors.BLACK}
        >
          Our Services
        </Typography>
        <Box
          width="100%"
          maxWidth={1200}
          margin="0 auto"
          paddingTop={"20px"}
          pb={"20px"}
        >
          {/* <StyledImage src={Layer2} alt="Layer2" /> */}
          <Typography
            variant="h2"
            color={Colors.BLACK}
            textAlign="center"
            fontSize={{ xs: "18px", sm: "18px", md: "18px", lg: "20px" }}
            fontWeight={400}
            width={{ xs: "300px", sm: "300px", md: "300px", lg: "850px" }}
            margin="auto"
            sx={{ fontFamily: "Inter" }}
          >
            We offer a diverse range of{" "}
            <span style={{ color: Colors.BUTTON_COLOR }}>services</span> to
            cater to the varied interests of our community.
          </Typography>
        </Box>
        <Grid
          container
          width="100%"
          maxWidth={1300}
          margin="0 auto"
          spacing={3}
          flexDirection={{
            xs: "column",
            sm: "column",
            md: "column",
            lg: "row",
          }}
        >
          <Grid item xs={3}>
            <CardComponent
              buttonLabel="Know more"
              title={"Turf"}
              description={
                "Kick off your sports adventure on our two top-notch turfs, perfect for football, and a cricket selection."
              }
              image={turf}
            />
          </Grid>
          <Grid item xs={3}>
            <CardComponent
              buttonLabel="Know more"
              title={"Play Station"}
              description={
                "Immerse yourself in the ultimate gaming experience with the latest consoles and a wide game selection."
              }
              image={playstation}
            />
          </Grid>
          <Grid item xs={3}>
            <CardComponent
              buttonLabel="Know more"
              title={"Board Games"}
              description={
                "Explore timeless and modern board games, fostering laughter and friendly competition for a delightful time."
              }
              image={boardGames}
            />
          </Grid>
          {/* <StyledImage1 src={Layer1} alt="layer1" />
        <StyledImage2 src={Layer1} alt="layer1" /> */}
          <Grid item xs={3}>
            <CardComponent
              buttonLabel="Know more"
              title={"Badminton"}
              description={
                "Ace every shot on our professional Badminton courts, where passion meets a precision."
              }
              image={Badminton}
            />
          </Grid>
          {/* <Grid item xs={3}>
            <CardComponent
              buttonLabel="Know more"
              title={"Cricket Net"}
              description={
                "Refine your cricket prowess where every practice session is designed to elevate your game to new heights."
              }
              image={Cricket}
            />
          </Grid>
          <Grid item xs={3}>
            <CardComponent
              buttonLabel="Know more"
              title={"Bowling Machine"}
              description={
                "Precision meets practice – polish your cricket skills with our cutting-edge Bowling Machine selection."
              }
              image={Machine}
            />
          </Grid> */}
        </Grid>

        <Box
          width="100%"
          maxWidth={1200}
          margin="0 auto"
          pb={{ xs: "32px", sm: "32px", md: "32px", lg: "90px" }}
          pt={{ xs: "32px", sm: "32px", md: "32px", lg: "30px" }}
        >
          <Stack
            marginRight={{ xs: "25px", sm: "25px", md: "25px", lg: "0px" }}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            {/* <StyledImage3
            src={ball}
            alt="ball1"
          /> */}
            <Button
              sx={{
                
                color: Colors.BUTTON_COLOR,
                textTransform: "capitalize",
                border: "1px solid #15B5FC",
                padding: "10px 30px",
                borderRadius: "30px",
                ":hover": {
                  background: Colors.BUTTON_COLOR,
                  color: Colors.WHITE,
                },
              }} variant="outlined"
            > 
              see more services
            </Button>
          </Stack>
        </Box>
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
          {/* <StyledImage6 src={ball} alt="ball1" /> */}
        </Stack>
      </Box>
      <ComponentCarosel />
    </Box>
  );
}
