import { Box, IconButton } from "@mui/material";
import React, { ReactNode, useEffect } from "react";

import Colors from "../../CommonComponents/Colors";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

interface CustomSliderProps {
  slides: ReactNode[];
  autoplayInterval?: number;
  nextSlide: any;
  prevSlide: any;
  currentSlide: any;
  handleBulletClick: any;
}

const CustomSlider = ({
  slides,
  autoplayInterval = 6000,
  nextSlide,
  prevSlide,
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
          height: "100%",
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
                maxHeight: 600,
                height: "100%",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Box
                component={"image"}
                sx={{
                  width: "100%",
                  height: "100%",
                  maxHeight: 600,
                  backgroundImage: `url(${slide})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  overflow: "hidden",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.1)", // Increase scale on hover
                  },
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
        <IconButton
          sx={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            left: "15px",
            background: Colors.WHITE,
            "&:hover": {
              background: Colors.WHITE, // Set the same background color on hover
            },
          }}
          onClick={prevSlide}
        >
          <NavigateBeforeIcon
            style={{
              color: Colors.BUTTON_COLOR,
            }}
          />
        </IconButton>
        <IconButton
          sx={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            right: "15px",
            background: Colors.WHITE,
            "&:hover": {
              background: Colors.WHITE, // Set the same background color on hover
            },
          }}
          onClick={nextSlide}
        >
          <NavigateNextIcon
            style={{
              color: Colors.BUTTON_COLOR,
            }}
          />
        </IconButton>
      </Box>
      <Box display="flex" justifyContent="center">
        {slides.map((_, index) => (
          <FiberManualRecordIcon
            key={index}
            sx={{
              fontSize: currentSlide === index ? "18px" : "14px",
              color: currentSlide === index ? "#007bff" : "gray",
              cursor: "pointer",
              mx: 1,
            }}
            onClick={() => handleBulletClick(index)}
          />
        ))}
      </Box>
      {/* <Stack direction={"row"} justifyContent={"space-between"}>
        <IconButton
          sx={{
            // position: "absolute",
            // top: "50%",
            // transform: "translateY(-50%)",
            // left: "15px",
            background: Colors.BUTTON_COLOR,
            "&:hover": {
              background: Colors.BUTTON_COLOR, // Set the same background color on hover
            },
          }}
          onClick={prevSlide}
        >
          <NavigateBeforeIcon
            style={{
              color: "white",
            }}
          />
        </IconButton>
        <Box display="flex" justifyContent="center">
          {slides.map((_, index) => (
            <FiberManualRecordIcon
              key={index}
              sx={{
                fontSize: currentSlide === index ? "18px" : "14px",
                color: currentSlide === index ? "#007bff" : "gray",
                cursor: "pointer",
                mx: 1,
              }}
              onClick={() => handleBulletClick(index)}
            />
          ))}
        </Box>
        <IconButton
          sx={{
            // position: "absolute",
            // top: "50%",
            // transform: "translateY(-50%)",
            // right: "15px",
            background: Colors.BUTTON_COLOR,
            "&:hover": {
              background: Colors.BUTTON_COLOR, // Set the same background color on hover
            },
          }}
          onClick={nextSlide}
        >
          <NavigateNextIcon
            style={{
              color: "white",
            }}
          />
        </IconButton>
      </Stack> */}
    </>
  );
};

export default CustomSlider;
