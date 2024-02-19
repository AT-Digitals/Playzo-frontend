import "intersection-observer";

import { Box, Typography } from "@mui/material";
import styled, { keyframes } from "styled-components";
import { useEffect, useRef, useState } from "react";

import Colors from "../../CommonComponents/Colors";
import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";

const data = [
  {
    title: "Video Gaming",
    disciption:
      " PlayStations are popular gaming consoles developed by Sony, providing immersive gaming experiences with advanced graphics and technology. These gaming. ",
    year: "2024",
    game: "Playstation",
  },
  {
    title: "Play Hard",
    disciption:
      " urf refers to artificial or natural grass surfaces, commonly used in sports, landscaping, or recreational areas, providing a lush, durable ground covering",
    year: "2023",
    game: "Turf",
  },
  {
    title: "Won Cup",
    disciption:
      " Cricket is a popular bat-and-ball sport, known for its excitement, strategy, and global appeal. Played professionally and recreationally worldwide.",
    year: "2022",
    game: "Cricket",
  },
  {
    title: "Mind Relax",
    disciption:
      " Board games bring joy, strategy, and social interaction. From classics like Monopoly to modern hits like Catan, endless entertainment awaits.",
    year: "2021",
    game: "Board Games",
  },
];

const slideInFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

// Create a styled component with the animation
const AnimatedTypographyWrapper = styled.div`
  animation: ${slideInFromRight} 1s ease-out; /* You can adjust the duration and timing function */
`;
export default function CustomTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const isInitialMount = useRef(true);

  const handleIntersect = (entries: any, observer: any) => {
    entries.forEach((entry: any) => {
      if (entry.isIntersecting) {
        const index = parseInt(entry.target.getAttribute("data-index"), 10);
        setActiveIndex(index);
      }
    });
  };

  useEffect(() => {
    const timelineElement = document.getElementById("custom-timeline");
    const timelineItems = document.querySelectorAll(".timeline-item");

    if (!timelineElement) {
      return; // Exit early if timelineElement is null
    }

    const observer = new IntersectionObserver(handleIntersect, {
      root: timelineElement,
      threshold: 0.5, // Adjust this threshold as needed
    });

    timelineItems.forEach((item, index) => {
      observer.observe(item);
      item.setAttribute("data-index", index.toString());
    });

    // Set the initial state based on the visibility of the items only on the initial mount
    if (isInitialMount.current) {
      let initialActiveIndex = 0;

      timelineItems.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const isVisible =
          rect.top <= timelineElement.clientHeight / 2 &&
          rect.bottom >= timelineElement.clientHeight / 2;

        if (isVisible) {
          initialActiveIndex = index;
        }
      });

      setActiveIndex(initialActiveIndex);
      isInitialMount.current = false;
    }

    // Add scroll event listener
    const handleScroll = () => {
      const updateActiveIndex = () => {
        let currentActiveIndex = activeIndex;

        // Check if user has scrolled to the top
        if (window.scrollY === 0) {
          currentActiveIndex = 0; // Set to the initial index (2024)
        } else {
          // Check the visibility of timeline items
          timelineItems.forEach((item, index) => {
            const rect = item.getBoundingClientRect();
            const isVisible =
              rect.top <= window.innerHeight / 2 &&
              rect.bottom >= window.innerHeight / 2;

            if (isVisible) {
              currentActiveIndex = index;
            }
          });
        }

        if (currentActiveIndex !== activeIndex) {
          setActiveIndex(currentActiveIndex);
        }
      };

      // Use requestAnimationFrame for smoother scrolling
      requestAnimationFrame(updateActiveIndex);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Timeline
        position="alternate"
        id="custom-timeline"
        style={{
          height: "100%",
          overflow: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "9rem",
          width: "100%",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
          scrollBehavior: "smooth",
        }}
      >
        <br />
        <br />
        <br />
        <br />

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <Box>
          {data.map((item, index) => (
            <TimelineItem
              key={index}
              style={{
                gap: "1rem",
                // alignItems:index === activeIndex ? "baseline" :"center"
              }}
              className={`timeline-item ${index === activeIndex ? "red" : ""}`}
            >
              <TimelineOppositeContent
                color={index === activeIndex ? "white" : "white"}
                fontSize={index === activeIndex ? "32px" : "15px"}
                sx={{
                  background: index === activeIndex ? "" : "",
                  marginTop: index === activeIndex ? "-1rem" : undefined,
                  padding: index === activeIndex ? "17px 16px" : "6px 16px",
                  fontWeight: index === activeIndex ? 900 : 600,
                  fontStyle: index === activeIndex ? "italic" : "italic",
                  fontSize: "28px",
                }}
              >
                {item.game}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot
                  sx={{
                    padding: index === activeIndex ? "12px" : "5px",
                    background:
                      index === activeIndex ? Colors.BUTTON_COLOR : "white",
                    color:
                      index === activeIndex ? "white" : Colors.BUTTON_COLOR,
                    border:
                      index === activeIndex
                        ? `1px solid ${Colors.WHITE}`
                        : `1px solid ${Colors.BUTTON_COLOR}`,

                    borderRadius: "50%",
                    margin: 0,

                    fontFamily: `'ESL Legend', sans-serif`,
                    fontSize: "16px",
                    fontWeight: 600,
                  }}
                >
                  {" "}
                  {item.year}
                </TimelineDot>
                <TimelineConnector
                  style={{
                    minHeight: 240,
                    background:
                      index === activeIndex ? Colors.BUTTON_COLOR : "white",
                    transition: "background-color 0.5s ease-out",
                  }}
                />
              </TimelineSeparator>
              <TimelineContent>
                <Box
                  display={index === activeIndex ? "flex" : "none"}
                  color={index === activeIndex ? "white" : "white"}
                  gap={"1rem"}
                  justifyContent={
                    index && (activeIndex === 1 || activeIndex === 3)
                      ? "flex-end"
                      : ""
                  }
                >
                  <Typography
                    maxWidth={300}
                    lineHeight={"1.7rem"}
                    fontSize={"18px"}
                  >
                    {/* {item.title} */}
                  </Typography>
                  <AnimatedTypographyWrapper>
                    <Typography
                      style={{
                        background: Colors.BUTTON_COLOR,
                        padding: "10px 20px",
                        borderRadius: "30px",
                      }}
                      maxWidth={300}
                      lineHeight={1.4}
                      fontSize={"16px"}
                    >
                      <span
                        style={{
                          fontSize: "22px",
                          fontFamily: `'ESL Legend', sans-serif`,
                          fontWeight: 600,
                        }}
                      >
                        {" "}
                        {item.title}
                      </span>{" "}
                      <br />
                      {item.disciption}
                    </Typography>
                  </AnimatedTypographyWrapper>
                </Box>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Box>
      </Timeline>
      {/* <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br /> */}
    </>
  );
}
