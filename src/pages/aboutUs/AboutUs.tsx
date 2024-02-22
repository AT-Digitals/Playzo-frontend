import { Box, CardMedia, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

import BasicTimeline from "./VerticalTimeline";
import Image1 from "../../assets/Rectangle 67.png";
import Image2 from "../../assets/Rectangle 669.png";
import ImageClick from "./AboutImageSection";

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
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
          ref={timelineRef}
          sx={{
            position: "absolute",
            width: "100%",
            bottom: "0%",
            top: "-10%",
            right: "1%",
          }}
        >
          {showTimeline && window.innerWidth >= 600 && <BasicTimeline />}
          {/* {showTimeline && window.innerWidth >= 600 && <Timeline />} */}
        </Box>
        <Box position={"absolute"} top={"7%"} right={"66%"}>
          <Typography
            color={"white"}
            fontStyle={"italic"}
            fontSize={"82px"}
            fontWeight={"bold"}
            lineHeight={1}
          >
            <span style={{ display: "inline-block" }}>Playzo</span> <br />
            <span style={{ display: "inline-block", marginLeft: "12rem" }}>
              Journey
            </span>
          </Typography>
        </Box>
      </Box>

      <ImageClick />
    </>
  );
}
