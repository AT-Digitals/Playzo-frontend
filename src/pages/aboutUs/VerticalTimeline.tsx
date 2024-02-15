import "intersection-observer";

import { Box, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";

const data = [
  {
    title: " Lorem Ipsum",
    disciption:
      " Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua.",
    year: "2024",
  },
  {
    title: " Lorem Ipsum",
    disciption:
      " Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua.",
    year: "2023",
  },
  {
    title: " Lorem Ipsum",
    disciption:
      " Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua.",
    year: "2022",
  },
  {
    title: " Lorem Ipsum",
    disciption:
      " Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua.",
    year: "2021",
  },
];

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
                  fontWeight: index === activeIndex ? 900 : 400,
                  fontStyle: index === activeIndex ? "italic" : "italic",
                }}
              >
                {item.year}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot
                  sx={{
                    padding: index === activeIndex ? "10px" : "5px",
                    borderRadius: "0px",
                  }}
                />
                <TimelineConnector style={{ minHeight: 240 }} />
              </TimelineSeparator>
              <TimelineContent>
                <Box
                  maxWidth={400}
                  display={index === activeIndex ? "flex" : "none"}
                  color={index === activeIndex ? "white" : "white"}
                  flexDirection={"column"}
                  gap={"1rem"}
                >
                  <Typography
                    fontSize={"26px"}
                    fontWeight={index === activeIndex ? 600 : "400"}
                  >
                    {item.title}
                  </Typography>

                  <Typography lineHeight={"1.7rem"} fontSize={"18px"}>
                    {item.disciption}
                  </Typography>
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
