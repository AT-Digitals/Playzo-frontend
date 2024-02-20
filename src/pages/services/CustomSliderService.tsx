import React, { ReactNode, useEffect } from "react";

import { Box } from "@mui/material";
import Colors from "../../CommonComponents/Colors";

interface CustomSliderProps {
  slides: ReactNode[];
  autoplayInterval?: number;
  nextSlide: any;
  currentSlide: any;
  handleBulletClick: any;
}

const CustomSlider = ({
  slides,
  autoplayInterval = 3000,
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
  }, [currentSlide, autoplayInterval, nextSlide]);

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
            transition: "transform 0.5s ease",
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <Box
              key={index}
              sx={{
                flex: "0 0 100%",
                boxSizing: "border-box",
                width: "100%",
                maxHeight: 400,

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
                  overflow: "hidden",
                  // transition: "transform 0.3s ease",
                  // "&:hover": {
                  //   transform: "scale(1.1)", // Increase scale on hover
                  // },
                  // Add this line to fix the issue
                  display: "flex",
                }}
              >
                {" "}
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
              width: slides.length === 2 ? "100%" : "100%", // Adjust width dynamically
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
                width: slides.length === index ? "100%" : "100%", // Adjust width dynamically
              }}
            />
          </Box>
        ))}
      </Box>
    </>
  );
};

export default CustomSlider;
