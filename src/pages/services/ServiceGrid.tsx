import * as React from "react";

import { IconButton, Stack, Typography } from "@mui/material";

import Box from "@mui/material/Box";
import Colors from "../../CommonComponents/Colors";
import CustomSlider from "./CustomSliderService";
import Grid from "@mui/material/Grid";
import LeftArrow from "../../assets/LeftArrow.svg";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useState } from "react";

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
  marginTop?: any;
  direction?: any;
}

export default function ServiceGrid(props: serviceGridProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

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

  return (
    <Box
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
      <Stack
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        justifyContent="space-between"
        spacing={4}
        direction={props.direction}
      >
        <Stack width={"100%"}>
          <CustomSlider
            currentSlide={currentSlide}
            slides={props.carouselItems}
            handleBulletClick={handleBulletClick}
            nextSlide={nextSlide}
          />
          <Box
            display="flex"
            justifyContent="center"
            flexWrap="wrap" // Allow bullets to wrap to the next line on smaller screens
            mt={{ xs: 2, md: 0 }} // Adjust top margin for smaller screens
          ></Box>
        </Stack>
        <Stack
          width={"100%"}
          sx={{
            // padding: "40px",
            maxHeight: { xs: undefined, sm: 670, md: 600, lg: 600 },
            marginTop: { xs: 3, sm: 3, md: 3, lg: 0 },
          }}
          alignItems="center"
          justifyContent="center"
        >
          <Stack mt={props.marginTop} direction={"column"} spacing={1}>
            <Box>
              <Typography
                gutterBottom
                variant="h5"
                style={{
                  fontSize: "50px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  fontFamily: `"manorope,sans-serif"`,
                  color: isMouseOver ? Colors.BUTTON_COLOR : "black",
                }}
              >
                {props.heading1}
              </Typography>
              <Typography
                style={{
                  fontFamily: `"manorope,sans-serif"`,
                  fontSize: "16px",
                }}
                variant="body1"
              >
                {props.desc1}
              </Typography>
            </Box>

            <Box display={"flex"} gap={"10px"}>
              <Typography
                gutterBottom
                variant="h5"
                style={{
                  fontStyle: "normal",
                  fontWeight: 700,
                  fontFamily: `"manorope,sans-serif"`,
                  fontSize: "18px",
                  margin: 0,
                }}
              >
                {props.heading2}:
              </Typography>
              <Typography
                style={{
                  fontStyle: "normal",
                  fontFamily: `"manorope,sans-serif"`,
                  fontSize: "16px",
                }}
                variant="body1"
              >
                {/* <ul style={{ paddingInlineStart: "28px" }}>
                  <li
                    style={{
                      fontStyle: "normal",
                      fontFamily: `"manorope,sans-serif"`,
                      fontSize: "16px",
                    }}
                  > */}
                {props.firstBullet1}
                {/* </li>
                </ul> */}
              </Typography>
            </Box>

            <Box display={"flex"} gap={"10px"}>
              <Typography
                gutterBottom
                variant="h5"
                style={{
                  fontSize: "18px",
                  margin: 0,
                  fontStyle: "normal",
                  fontWeight: 700,
                  fontFamily: `"manorope,sans-serif"`,
                }}
              >
                {props.heading3}:
              </Typography>
              <Typography
                style={{
                  fontStyle: "normal",
                  fontFamily: `"manorope,sans-serif"`,
                  fontSize: "16px",
                }}
                variant="body1"
              >
                {/* <ul style={{ paddingInlineStart: "28px" }}>
                  <li
                    style={{
                      fontStyle: "normal",
                      fontFamily: `"manorope,sans-serif"`,
                      fontSize: "16px",
                    }}
                  > */}
                {props.secBullet1}
                {/* </li>
                </ul> */}
              </Typography>

              {/* <Box mt={5}>
                  <Button
                    sx={{
                      boxShadow: "none",
                      background: Colors.WHITE,
                      color: Colors.BUTTON_COLOR,
                      textTransform: "capitalize",
                      border: "1px solid #15B5FC",
                      padding: "10px 30px",
                      transition: "background 0.3s",
                      borderRadius: "30px",
                      "&:hover": {
                        background: Colors.BUTTON_COLOR,
                        color: Colors.WHITE,
                      },
                    }}
                  >
                    see more services
                  </Button>
                </Box> */}
            </Box>
            <Box
              style={{
                fontFamily: `"manorope,sans-serif"`,
              }}
              display={"flex"}
              alignItems={"center"}
            >
              <IconButton onClick={prevSlide}>
                <NavigateBeforeIcon
                  style={{
                    color: Colors.BUTTON_COLOR,
                  }}
                />
              </IconButton>
              0{currentSlide + 1} /0{props.carouselItems.length}{" "}
              <IconButton onClick={nextSlide}>
                <NavigateNextIcon
                  style={{
                    color: Colors.BUTTON_COLOR,
                  }}
                />
              </IconButton>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
