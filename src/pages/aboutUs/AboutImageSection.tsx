// App.js

import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import React, { useRef, useState } from "react";

import AbouFaQ from "./AboutFAQ";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Colors from "../../CommonComponents/Colors";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import imageBg from "../../assets/AboutPageImages/about-us-bg.jpg";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 650px;
  overflow: hidden;
`;

const LeftSide = styled.div`
  flex: 1;
  overflow: hidden;
  animations: transform 8s ease-in-out;
`;

const RightSide = styled.div`
  flex: 1;
  overflow-y: scroll;
`;

const Paragraph = styled.p`
  /* Add your styles for paragraphs */
`;

const ImageClick = () => {
  const [expanded, setExpanded] = useState(true);
  const [activeSection, setActiveSection] = useState("");

  const heading1Ref = useRef(null);
  const heading2Ref = useRef(null);
  const heading3Ref = useRef(null);

  const toggleImageSize = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  const scrollToHeading = (ref: any) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const [activeButton, setActiveButton] = useState("ABOUT");

  return (
    <Container>
      <LeftSide>
        <Box position="relative" display="flex" width={"100%"} height="100%">
          <Box
            position="absolute"
            right={expanded ? "2%" : "10px"}
            zIndex={2}
            top={"40%"}
            style={{ cursor: "pointer", transition: "right 0.5s ease" }}
          >
            {expanded ? (
              <IconButton
                style={{
                  background: Colors.BUTTON_COLOR,
                }}
                onClick={toggleImageSize}
              >
                <ArrowForwardIcon fontSize="large" style={{ color: "white" }} />
              </IconButton>
            ) : (
              <IconButton
                style={{
                  background: Colors.BUTTON_COLOR,
                }}
                onClick={toggleImageSize}
              >
                <KeyboardBackspaceIcon
                  fontSize="large"
                  style={{ color: "white" }}
                />
              </IconButton>
            )}
          </Box>
          <Box
            width={"100%"}
            height={"100%"}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <img
              src={imageBg}
              alt=""
              style={{
                maxWidth: "100%",
                height: "100%",
                maxHeight: expanded ? "100%" : 800,
                objectFit: "cover",
                animation: " 8s ease-in-out",
                width: "100%",
              }}
            />
          </Box>
        </Box>
      </LeftSide>
      <RightSide
        style={{
          display: expanded ? "block" : "none",
          scrollbarWidth: "none",
          scrollBehavior: "smooth",
        }}
      >
        <Box
          style={{ position: "sticky", top: 0, zIndex: 1, background: "white" }}
        >
          <Box display={"flex"}>
            <Button
              onClick={() => {
                scrollToHeading(heading1Ref);
                setActiveButton("ABOUT");
                setActiveSection("ABOUT");
              }}
              variant="contained"
              color="primary"
              style={{
                width: "100%",
                background:
                  activeButton && activeSection === "ABOUT"
                    ? Colors.BUTTON_COLOR
                    : "white",
                color:
                  activeButton && activeSection === "ABOUT"
                    ? Colors.WHITE
                    : Colors.BUTTON_COLOR,
                height: "50px",
                fontSize: "16px",
                fontWeight: 600,
              }}
            >
              ABOUT
            </Button>
            <Button
              onClick={() => {
                scrollToHeading(heading2Ref);
                setActiveButton("GOAL");
                setActiveSection("GOAL");
              }}
              variant="contained"
              color="primary"
              style={{
                width: "100%",
                background:
                  activeButton === "GOAL" ? Colors.BUTTON_COLOR : "white",
                color:
                  activeButton === "GOAL" ? Colors.WHITE : Colors.BUTTON_COLOR,
                height: "50px",
                fontSize: "16px",
                fontWeight: 600,
              }}
            >
              GOAL
            </Button>
            <Button
              onClick={() => {
                scrollToHeading(heading3Ref);
                setActiveButton("FAQ");
                setActiveSection("FAQ");
              }}
              variant="contained"
              color="primary"
              style={{
                width: "100%",
                background:
                  activeButton && activeSection === "FAQ"
                    ? Colors.BUTTON_COLOR
                    : "white",
                color:
                  activeButton && activeSection === "FAQ"
                    ? Colors.WHITE
                    : Colors.BUTTON_COLOR,
                height: "50px",
                fontSize: "16px",
                fontWeight: 600,
              }}
            >
              FAQ
            </Button>
          </Box>
        </Box>

        <Box
          padding={"40px 40px"}
          display={"flex"}
          flexDirection={"column"}
          gap={"1rem"}
        >
          <Box mb={"2rem"} ref={heading1Ref}>
            <Typography fontSize="32px" fontWeight={700}>
              ABOUT
            </Typography>
            <Box
              border={`1px solid ${Colors.BUTTON_COLOR}`}
              width={"15%"}
            ></Box>

            <Paragraph style={{ fontSize: "16px", lineHeight: 1.6 }}>
              At Playzo33, we extend beyond being a turf booking platform; we're
              a community-driven destination designed for sports enthusiasts and
              those seeking the perfect blend of recreation and entertainment.
              Our journey commenced with a simple dream: to establish a haven
              where people could gather, connect, and stay active.
            </Paragraph>
          </Box>

          <Box mb={"2rem"} ref={heading2Ref}>
            <Typography fontSize="32px" fontWeight={700}>
              GOAL
            </Typography>
            <Box
              border={`1px solid ${Colors.BUTTON_COLOR}`}
              width={"15%"}
            ></Box>

            <Paragraph>
              <Stack direction={"column"} spacing={4}>
                <Box>
                  <Typography
                    marginTop={"1rem"}
                    fontSize={"18px"}
                    variant={"h4"}
                    style={{
                      fontStyle: "normal",
                      fontWeight: "700",
                      marginBottom: "10px",
                    }}
                  >
                    MISSION
                  </Typography>
                  <Typography
                    fontSize={{
                      xs: "15px",
                      sm: "15px",
                      md: "15px",
                      lg: "16px",
                    }}
                    style={{
                      fontStyle: "normal",
                      fontWeight: "400",
                      marginRight: "20px",
                      lineHeight: 1.6,
                    }}
                    variant={"body1"}
                  >
                    At Playzo33, our mission is to cultivate a vibrant community
                    by providing premier sports and recreation facilities. We
                    aim to nurture a passion for physical activity and social
                    interaction, where individuals and groups can come together,
                    stay active, and enjoy memorable experiences.
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    fontSize={"18px"}
                    variant={"h4"}
                    style={{
                      fontStyle: "normal",
                      fontWeight: "700",
                      marginBottom: "10px",
                    }}
                  >
                    VISION
                  </Typography>
                  <Typography
                    fontSize={{
                      xs: "15px",
                      sm: "15px",
                      md: "15px",
                      lg: "16px",
                    }}
                    style={{
                      fontStyle: "normal",
                      fontWeight: "400",
                      marginRight: "27px",
                      lineHeight: 1.6,
                    }}
                    variant={"body1"}
                  >
                    We envision Playzo33 as the premier choice for individuals
                    and groups in search of top-quality turf, sports, and
                    entertainment services. Our vision is to set the standard in
                    providing outstanding facilities, establishing a dynamic
                    environment where the delight of sports and recreation is
                    within everyone's reach.
                  </Typography>
                </Box>
              </Stack>
            </Paragraph>
          </Box>

          <Box mb={"2rem"} ref={heading3Ref}>
            <Typography fontSize="32px" fontWeight={700}>
              FREQUENTLY ASKED QUESTIONS
            </Typography>
            <Box
              border={`1px solid ${Colors.BUTTON_COLOR}`}
              width={"25%"}
            ></Box>

            <AbouFaQ />
          </Box>
        </Box>
      </RightSide>
    </Container>
  );
};

export default ImageClick;
