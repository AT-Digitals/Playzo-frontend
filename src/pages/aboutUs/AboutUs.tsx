import { Box, CardMedia, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

import BasicTimeline from "./VerticalTimeline";
import ImageClick from "./AboutImageSection";
import assets from "../../assets";

const { "Rectangle 67.png": Image1, "Rectangle 669.png": Image2 } = assets;

export default function AboutUs() {
  const ballRef = useRef<HTMLImageElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const lastScrollTop = useRef(0);
  const [showTimeline, setShowTimeline] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ballRef.current) {
        const ball = ballRef.current;
        const scrollTop = window.scrollY || window.pageYOffset;

        if (scrollTop > lastScrollTop.current) {
          // Scrolling down
          ball.style.transform = `rotate(${scrollTop * 0.1}deg)`;
          ball.style.left = `${parseFloat(ball.style.left || "50%") + 1.3}px`;
          // Adjust the movement speed by changing the value after '-'
          if (window.innerWidth >= 600) {
            // Only adjust margins on desktop view
            ball.style.marginTop = "-92px";
          }
        } else {
          // Scrolling up
          ball.style.transform = `rotate(-${scrollTop * 0.1}deg)`;
          ball.style.left = `${parseFloat(ball.style.left || "50%") - 1.3}px`;
          // Adjust the movement speed by changing the value after '+'
          if (window.innerWidth <= 600) {
            // Only adjust margins on desktop view
            ball.style.marginTop = "-74px"; // Reset margin top
            ball.style.marginLeft = "87px";
            ball.style.width = "93px";
            ball.style.height = "93px"; // Reset margin left
          }
        }
        lastScrollTop.current = scrollTop;
      }

      if (timelineRef.current) {
        const timelineRect = timelineRef.current.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;

        if (timelineRect.top < windowHeight * 0.8) {
          setShowTimeline(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check on mount
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);
  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          maxHeight: 650,
          overflow: "hidden",
        }}
        id="custom-timeline"
      >
        <CardMedia
          component="img"
          image={Image1}
          alt="Background Image"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <img
          src={Image2}
          alt="Overlay-1Image"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        <Box
          top={{
            xs: "-52%",
            sm: "-10%",
            md: "-10%",
            lg: "-5%",
          }}
          ref={timelineRef}
          sx={{
            position: "absolute",
            width: "100%",
            bottom: "0%",
            // top: "-10%",
            right: "1%",
          }}
        >
          {showTimeline && window.innerWidth >= 600 && <BasicTimeline />}
        </Box>
        <Box
          display={{ xs: "none", sm: "none", md: "none", lg: "block" }}
          position={"absolute"}
          top={"7%"}
          right={{ xs: "60%", sm: "67%", md: "68%", lg: "66%" }}
        >
          <Typography
            color={"white"}
            fontStyle={"italic"}
            fontSize={{ xs: "30px", sm: "40px", md: "78px" }}
            fontWeight={"bold"}
            lineHeight={1}
          >
            <span style={{ display: "inline-block" }}>Playzo</span> <br />
            <Typography
              fontSize={{ xs: "30px", sm: "40px", md: "78px" }}
              fontWeight={"bold"}
              sx={
                {
                  // display: "inline-block",
                  marginLeft: { xs: "2rem", sm: "5rem", md: "8rem" },
                } as any
              }
            >
              Journey
            </Typography>
          </Typography>
        </Box>
      </Box>

      <ImageClick />
    </>
  );
}
