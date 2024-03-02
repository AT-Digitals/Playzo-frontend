import { Box, Skeleton } from "@mui/material";
import React, { ReactNode, useEffect, useState } from "react";

import Colors from "../../CommonComponents/Colors";
import styled from "styled-components";

interface CustomSliderProps {
  slides: ReactNode[];
  autoplayInterval: number;
  nextSlide: any;
  currentSlide: any;
  handleBulletClick: any;
}

const SkeletonContainer = styled.div<{ showSkeleton: boolean }>`
  opacity: ${({ showSkeleton }) => (showSkeleton ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
`;
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

  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    // After 4 seconds, set showSkeleton to false to display the actual images
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
          // height: "447px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            transform: `translateX(-${currentSlide * 100}%)`,
            height: "100%",
          }}
        >
          {showSkeleton && (
            <SkeletonContainer showSkeleton={showSkeleton}>
              <Skeleton
                sx={{
                  background: "white",
                }}
                variant="rounded"
                animation="pulse"
              />
              <Skeleton
                sx={{
                  background: "white",
                }}
                animation="wave"
              />

              <Skeleton
                variant="rectangular"
                sx={{
                  background: "white",
                }}
                width={650}
                height={300}
              />
              <Skeleton
                sx={{
                  background: "white",
                }}
                animation="wave"
              />
              <Skeleton
                sx={{
                  background: "white",
                }}
                animation="wave"
              />
              <Skeleton
                sx={{
                  background: "white",
                }}
                animation="wave"
              />
            </SkeletonContainer>
          )}

          {!showSkeleton && (
            <>
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
                      // height: "100%",
                      maxHeight: 447,
                    }}
                  >
                    {slide}
                  </Box>
                </Box>
              ))}
            </>
          )}
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
