import React, { ReactNode, useEffect } from "react";

import { Box } from "@mui/material";
import Colors from "../../CommonComponents/Colors";

interface CustomSliderProps {
  slides: ReactNode[];
  autoplayInterval: number;
  nextSlide: any;
  currentSlide: any;
  handleBulletClick: any;
}

const CustomSlider = ({
  slides,
  autoplayInterval,
  nextSlide,
  currentSlide,
  handleBulletClick,
}: CustomSliderProps) => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, autoplayInterval);

    return () => {
      clearInterval(intervalId);
    };
  }, [autoplayInterval, nextSlide]);

  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            transform: `translateX(-${currentSlide * 100}%)`,
            height: "100%", // Make sure the height is 100% for the images to fill the container
          }}
        >
          {slides.map((slide, index) => (
            <Box
              key={index}
              sx={{
                flex: "0 0 100%",
                boxSizing: "border-box",
                width: "100%",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Box
                component={"image"}
                sx={{
                  backgroundImage: `url(${slide})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  objectFit: "cover", // Set object-fit to cover
                  overflow: "hidden",
                  display: "flex",
                  height: "100%", // Ensure the height is 100%
                  maxHeight: 400,
                }}
              >
                {slide}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <Box
        mt={1}
        border="1px solid black"
        display="flex"
        justifyContent="center"
        bgcolor="black"
      >
        {slides.map((_, index) => (
          <Box
            key={index}
            sx={{
              position: "relative",
              fontSize: "14px",
              color: currentSlide === index ? "red" : "gray",
              cursor: "pointer",
              width: slides.length === 2 ? "100%" : "100%",
            }}
            onClick={() => handleBulletClick(index)}
          >
            <Box
              sx={{
                fontSize: "14px",
                color: currentSlide === index ? "red" : "gray",
                cursor: "pointer",
                position: "absolute",
                border:
                  currentSlide === index ? `2px solid ${Colors.BLACK}` : "none",
                width: slides.length === index ? "100%" : "100%",
              }}
            />
          </Box>
        ))}
      </Box>
    </>
  );
};

export default CustomSlider;
