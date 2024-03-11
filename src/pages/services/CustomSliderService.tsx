import { Backdrop, Box, CircularProgress, Skeleton } from "@mui/material";
import React, { ReactNode, useEffect, useState } from "react";

import Colors from "../../CommonComponents/Colors";
import styled, { keyframes } from "styled-components";

interface CustomSliderProps {
  slides: ReactNode[];
  autoplayInterval: number;
  nextSlide: any;
  currentSlide: any;
  handleBulletClick: any;
}

const shineAnimation = keyframes`
  to {
    background-position: right -40px top 0;
  }
`;

const SkeletonContainer = styled.div<{ showSkeleton: boolean }>`
  opacity: ${({ showSkeleton }) => (showSkeleton ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;

  .skeleton {
    background-color: #d4ebf2;
    background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0)
    );
    background-size: 40px 100%;
    background-repeat: no-repeat;
    background-position: left -40px top 0;
    animation: ${shineAnimation} 1s ease infinite;
  }
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
  const [loading, setLoading] = useState(true); // Set initial loading state to true

  useEffect(() => {
    // Simulate loading delay with setTimeout
    const timer = setTimeout(() => {
      setLoading(false); // After timeout, set loading state to false
    }, 3000); // Adjust timeout duration as needed

    return () => clearTimeout(timer); // Cleanup function to clear the timer
  }, []);

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
          height: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            transform: `translateX(-${currentSlide * 100}%)`,
            height: "100%",
          }}
        >
          {/* {showSkeleton && (
            <SkeletonContainer showSkeleton={showSkeleton}>
              <Skeleton
                className="skeleton"
                sx={{
                  background: "white",
                }}
                variant="rounded"
                animation="wave"
              />
              <Skeleton
                className="skeleton"
                sx={{
                  background: "white",
                }}
                animation="pulse"
              />

              <Skeleton
                className="skeleton"
                variant="rectangular"
                sx={{
                  background: "white",
                }}
                width={650}
                height={400}
                animation="wave"
              />
              <Skeleton
                className="skeleton"
                sx={{
                  background: "white",
                }}
                animation="pulse"
                variant="rectangular"
              />
              <Skeleton
                className="skeleton"
                sx={{
                  background: "white",
                }}
                animation="wave"
                variant="rectangular"
              />
              <Skeleton
                className="skeleton"
                sx={{
                  background: "white",
                }}
                animation="pulse"
                variant="rectangular"
              />
            </SkeletonContainer>
          )} */}

          {/* {!showSkeleton && ( */}
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
                    height: "100%",
                    objectFit: "cover",
                  }}
                >
                  <Backdrop open={loading} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, color: '#fff' }}>
        <CircularProgress color="inherit" />
      </Backdrop>
                  <Box
                    component={"image"}
                    sx={{
                      backgroundImage: `url(${slide})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      objectFit: "cover",
                      overflow: "hidden",
                      display: "flex",
                      height: "100%",
                    }}
                  >
                    {slide}
                  </Box>
                </Box>
              ))}
            </>
          {/* )} */}
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