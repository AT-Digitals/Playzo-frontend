import * as React from "react";

import { Button, Stack, Typography } from "@mui/material";

import Box from "@mui/material/Box";
import Colors from "../../CommonComponents/Colors";
import CustomSlider from "./CustomSliderService";
import Grid from "@mui/material/Grid";
import LeftArrow from "../../assets/LeftArrow.svg";
import { useState } from "react";

interface serviceGridProps {
  carouselItems: any[];
  heading1: string;
  desc1: string;
  heading2: string;
  firstBullet1: string;
  firstBullet2: string;
  firstBullet3: string;
  heading3: string;
  secBullet1: string;
  secBullet2: string;
  secBullet3: string;
  buttonLabel: string;
  icon: string;
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
      <Grid container>
        <Grid item xs={12} sm={12} md={6}>
          {/* <CustomSwiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
            slides={props.carouselItems}
          /> */}
          <CustomSlider
            currentSlide={currentSlide}
            nextSlide={nextSlide}
            prevSlide={prevSlide}
            slides={props.carouselItems}
            handleBulletClick={handleBulletClick}
          />
          <Box
            display="flex"
            justifyContent="center"
            flexWrap="wrap" // Allow bullets to wrap to the next line on smaller screens
            mt={{ xs: 2, md: 0 }} // Adjust top margin for smaller screens
          >
            {/* {props.carouselItems.map((_, index) => (
              <FiberManualRecordIcon
                key={index}
                sx={{
                  fontSize: currentSlide === index ? "18px" : "14px",
                  color: currentSlide === index ? "#007bff" : "gray",
                  cursor: "pointer",
                  mx: 1,
                  my: 1, // Adjust margin for smaller screens
                }}
                onClick={() => handleBulletClick(index)}
              />
            ))} */}
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          sx={{
            backgroundColor: "#EBF5FF",
            // borderRadius: "8px",
            padding: "40px",
            maxHeight: { xs: undefined, sm: 670, md: 600, lg: 600 },
            marginTop: { xs: 3, sm: 3, md: 3, lg: 0 },
          }}
          alignItems="center"
          justifyContent="center"
        >
          <Stack direction={"column"} spacing={2}>
            <Stack spacing={3}>
              <Box>
                <Typography
                  gutterBottom
                  variant="h5"
                  style={{
                    fontSize: "20px",
                    fontStyle: "normal",
                    fontWeight: 700,
                  }}
                >
                  {props.heading1}
                </Typography>
                <Typography variant="body1">{props.desc1}</Typography>
              </Box>
            </Stack>

            <Stack spacing={3}>
              <Box>
                <Typography
                  gutterBottom
                  variant="h5"
                  style={{
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 700,
                  }}
                >
                  {props.heading2}
                </Typography>
                <Typography variant="body1">
                  <ul style={{ paddingInlineStart: "28px" }}>
                    <li>{props.firstBullet1}</li>
                    <li>{props.firstBullet2}</li>
                    <li>{props.firstBullet3}</li>
                  </ul>
                </Typography>
              </Box>
            </Stack>

            <Stack spacing={3}>
              <Box>
                <Typography
                  gutterBottom
                  variant="h5"
                  style={{
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 700,
                  }}
                >
                  {props.heading3}
                </Typography>
                <Typography variant="body1">
                  <ul style={{ paddingInlineStart: "28px" }}>
                    <li>{props.secBullet1}</li>
                    <li>{props.secBullet2}</li>
                    <li>{props.secBullet3}</li>
                  </ul>
                </Typography>

                <Box mt={5}>
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
                </Box>
              </Box>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
