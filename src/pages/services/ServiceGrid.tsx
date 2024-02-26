import * as React from "react";

import { IconButton, Skeleton, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Colors from "../../CommonComponents/Colors";
import CustomSlider from "./CustomSliderService";
import LeftArrow from "../../assets/LeftArrow.svg";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import styled from "styled-components";

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
}

const SkeletonContainer = styled.div<{ showSkeleton: boolean }>`
  opacity: ${({ showSkeleton }) => (showSkeleton ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
`;

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
        height={"100%"}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        justifyContent="space-between"
        spacing={4}
        direction={props.direction}
        alignItems={"flex-start"}
      >
        <Stack width={"100%"}>
          <Box display={"flex"} flexDirection={"column"} gap={"1px"}>
            {/* {showSkeleton && (
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
            )} */}

            {/* {!showSkeleton && ( */}
            <CustomSlider
              currentSlide={currentSlide}
              slides={props.carouselItems}
              handleBulletClick={handleBulletClick}
              nextSlide={nextSlide}
              autoplayInterval={4000}
            />
            {/* )} */}
          </Box>
        </Stack>

        <Stack
          marginRight={"0px !important"}
          marginLeft={"0px !important"}
          bgcolor={"white"}
          padding={"0 30px"}
          width={"100%"}
          sx={{
            marginTop: { xs: 3, sm: 3, md: 3, lg: 0 },
            borderTopLeftRadius: props.radiusTopleft,
            borderBottomLeftRadius: props.radiusbottompleft,
            borderTopRightRadius: props.radiusTopright,
            borderBottomRightRadius: props.radiusbottompright,
          }}
          // maxHeight={400}
          height={400}
          // alignItems="center"
          justifyContent="space-between"
          spacing={4}
        >
          <Stack direction={"column"} spacing={2}>
            <Box>
              <Typography
                gutterBottom
                variant="h5"
                style={{
                  whiteSpace: "nowrap",
                  fontSize: "82px",
                  fontStyle: "italic",
                  fontWeight: 700,
                  color: isMouseOver ? Colors.BUTTON_COLOR : "black",
                  marginBottom: 0,
                }}
              >
                {props.heading1}
              </Typography>
              <Typography
                style={{
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
                  fontSize: "18px",
                  margin: 0,
                }}
              >
                {props.heading2}:
              </Typography>
              <Typography
                style={{
                  fontStyle: "normal",
                  fontSize: "16px",
                }}
                variant="body1"
              >
                {props.firstBullet1}
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
                }}
              >
                {props.heading3}:
              </Typography>
              <Typography
                style={{
                  fontStyle: "normal",
                  fontSize: "16px",
                }}
                variant="body1"
              >
                {props.secBullet1}
              </Typography>
            </Box>
          </Stack>
          <Box
            mb={2}
            sx={{
              marginTop: "2px !important",
            }}
            justifyContent={props.position}
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
    </Box>
  );
}
