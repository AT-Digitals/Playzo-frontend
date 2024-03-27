import * as React from "react";
import { Button, IconButton, Stack, Typography, useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import Colors from "../../CommonComponents/Colors";
import CustomSlider from "./CustomSliderService";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import assets from "../../assets";
import { useState } from "react";

const { "LeftArrow.svg": LeftArrow } = assets;

interface serviceGridProps {
  carouselItems: any[];
  heading1: string;
  desc1: string;
  heading2: string;
  firstBullet1: string;
  heading3: string;
  secBullet1: string;
  buttonLabel: string;
  icon: string;
  direction?: any;
  position?: any;
  radiusTopright?: any;
  radiusbottompright?: any;
  radiusTopleft?: any;
  radiusbottompleft?: any;
  content1?: any;
}

export default function ServiceGrid(props: serviceGridProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isContentVisible, setContentVisibility] = useState(true); // State to manage content visibility
  const [showDummyText, setShowDummyText] = useState(false); // State to manage dummy text visibility

  const nextSlide = () => {
    const nextIndex = (currentSlide + 1) % props.carouselItems.length;
    setCurrentSlide(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex =
      (currentSlide - 1 + props.carouselItems.length) %
      props.carouselItems.length;
    setCurrentSlide(prevIndex);
  };

  const handleBulletClick = (index: number) => {
    setCurrentSlide(index);
  };

  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleMouseEnter = () => {
    setIsMouseOver(true);
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
  };

  const isMediumScreen = useMediaQuery("(min-width: 900px) and (max-width: 1280px)");

  const toggleContentVisibility = () => {
    setContentVisibility(!isContentVisible);
    setShowDummyText(!showDummyText); // Hide dummy text when content is toggled
  };

  return (
    <Box
      height={"100%"}
      margin={{ xs: "30px", md: 7 }}
      sx={{
        ".mySwiper": {
          ".swiper-button-next": {
            backgroundImage: LeftArrow,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% auto",
            backgroundPosition: "center",
          },
          ".swiper-button-next::after": {
            display: "none",
          },
        },
      }}
    >
      <Box
        height={{
          xs: "100%",
          md: isMediumScreen ? "none" : "480px",
          lg: "480px",
        }}
      >
        <Stack
          height={"100%"}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          justifyContent="space-between"
          spacing={4}
          direction={props.direction}
          alignItems={"flex-start"}
        >
          {isContentVisible && ( 
          <Box width={"100%"} height={"100%"}>
            <CustomSlider
              currentSlide={currentSlide}
              slides={props.carouselItems}
              handleBulletClick={handleBulletClick}
              nextSlide={nextSlide}
              autoplayInterval={4000}
            />
          </Box>
          )}
          <Box
            height={"100%"}
            display={"flex"}
            flexDirection={"column"}
            marginRight={"0px !important"}
            marginLeft={"0px !important"}
            bgcolor={"white"}
            width={"100%"}
            sx={{
              marginTop: { xs: 3, sm: 3, md: 3, lg: 0 },
              borderTopLeftRadius: props.radiusTopleft,
              borderBottomLeftRadius: props.radiusbottompleft,
              borderTopRightRadius: props.radiusTopright,
              borderBottomRightRadius: props.radiusbottompright,
            }}
            justifyContent="space-between"
          >
            {isContentVisible && ( // Conditionally render content based on visibility state
              <Stack padding={{ xs: "20px 22px", sm: "0 22px" }} direction={"column"} spacing={2}>
                <Box>
                  <Typography
                    fontSize={{ xs: "35px", sm: "70px", md: "74px" }}
                    gutterBottom
                    variant="h5"
                    style={{
                      whiteSpace: "nowrap",
                      fontStyle: "italic",
                      fontWeight: 700,
                      color: isMouseOver ? Colors.BUTTON_COLOR : "black",
                      marginBottom: 0,
                    }}
                  >
                    {props.heading1}
                  </Typography>
                  <Typography style={{ fontSize: "16px" }} variant="body1">
                    {props.desc1}
                  </Typography>
                </Box>
                <Box display={"flex"} gap={"10px"} flexDirection={{ xs: "column", sm: "column", md: "row" }}>
                  <Typography gutterBottom variant="h5" style={{ fontStyle: "normal", fontWeight: 700, fontSize: "18px", margin: 0 }}>
                    {props.heading2}:
                  </Typography>
                  <Typography style={{ fontStyle: "normal", fontSize: "16px" }} variant="body1">
                    {props.firstBullet1}
                  </Typography>
                </Box>
                <Box display={"flex"} gap={"10px"} flexDirection={{ xs: "column", sm: "column", md: "row" }}>
                  <Typography gutterBottom variant="h5" style={{ fontSize: "18px", margin: 0, fontStyle: "normal", fontWeight: 700 }}>
                    {props.heading3}:
                  </Typography>
                  <Typography style={{ fontStyle: "normal", fontSize: "16px" }} variant="body1">
                    {props.secBullet1}
                  </Typography>
                </Box>
                <Button
                  onClick={toggleContentVisibility} // Toggle content visibility on button click
                  sx={{
                    width: "100%",
                    maxWidth: "150px",
                    fontSize: "18px",
                    color: Colors.BUTTON_COLOR,
                    background: "white",
                    border: "1px solid #15B5FC",
                    textTransform: "capitalize",
                    borderRadius: "30px",
                    ":hover": {
                      color: "white",
                      background: Colors.BUTTON_COLOR,
                    },
                  }}
                >
                  See More
                </Button>
              </Stack>
            )}
            {showDummyText && ( // Render dummy text based on visibility state
              <Box padding={2}>
                <Typography color={"black"} fontSize={"18px"}>{props.content1}</Typography>
              </Box>
            )}
              {isContentVisible && ( 
            <Box justifyContent={props.position} display={"flex"} alignItems={"center"}>
              <IconButton onClick={prevSlide}>
                <NavigateBeforeIcon style={{ color: Colors.BUTTON_COLOR }} />
              </IconButton>
              0{currentSlide + 1} /0{props.carouselItems.length}{" "}
              <IconButton onClick={nextSlide}>
                <NavigateNextIcon style={{ color: Colors.BUTTON_COLOR }} />
              </IconButton>
            </Box>
              )}
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}