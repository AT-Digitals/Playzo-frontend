import { Box, styled } from "@mui/material";
import { useEffect, useState } from "react";

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

  const handleScroll = () => {
    const timelineElement = document.getElementById("custom-timeline");
    if (timelineElement) {
      const timelineRect = timelineElement.getBoundingClientRect();
      const timelineTop = timelineRect.top + window.scrollY;
      const timelineBottom = timelineTop + timelineRect.height;

      const timelineItems = document.querySelectorAll(".timeline-item");
      let currentActiveIndex = 0;

      timelineItems.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const itemTop = rect.top + window.scrollY;
        const itemBottom = itemTop + rect.height;

        if (
          (itemTop >= timelineTop && itemTop <= timelineBottom) ||
          (itemBottom >= timelineTop && itemBottom <= timelineBottom)
        ) {
          currentActiveIndex = index;
        }
      });

      setActiveIndex(currentActiveIndex);
    }
  };

  useEffect(() => {
    const timelineElement = document.getElementById("custom-timeline");
    if (timelineElement) {
      timelineElement.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (timelineElement) {
        timelineElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);
  return (
    <Timeline
      id="custom-timeline"
      style={{
        height: "100%",
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        gap: "10rem",
        width: "100%",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        WebkitOverflowScrolling: "touch",
      }}
    >
      {data.map((item, index) => (
        <TimelineItem
          key={index}
          style={{
            gap: "5rem",
          }}
          className={`timeline-item ${index === activeIndex ? "red" : ""}`}
        >
          <TimelineOppositeContent
            color={index === activeIndex ? "red" : "white"}
            fontSize={"40px"}
            sx={{
              background: index === activeIndex ? "#e9673f" : "",
            }}
          >
            {item.year}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector style={{ minHeight: 150 }} />
          </TimelineSeparator>
          <TimelineContent>
            <Box
              maxWidth={350}
              display={"flex"}
              color={index === activeIndex ? "red" : "white"}
              flexDirection={"column"}
              gap={"2rem"}
              fontSize={"16px"}
            >
              {item.title}
              <br />
              {item.disciption}
            </Box>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
