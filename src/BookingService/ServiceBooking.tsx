import { Box, Breadcrumbs, Stack, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import Colors from "../CommonComponents/Colors";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import backgroundimage from "./7692.jpg";
import routes from "../routes/routes";
import styled from "styled-components";
import assets from "../assets";

const {"Image (7).png": badminton, "board games.png": boardgames, "Image (2).png": bowling, "Image (1).png": cricketnet, "Rectangle 679.png": grass, "playstation.png": playstation, "turf.png": turf} = assets

const TurfDetails = [
  {
    image: turf,
    name: "Turf",
    link: routes.TURF_BOOKING,
  },
  {
    image: playstation,
    name: "Play station",
    link: routes.PLAYSTATION_BOOKING,
  },
];
const BoardDetails = [
  {
    image: badminton,
    name: "Badminton",
    link: routes.BADMINTON_BOOKING,
  },
  {
    image: boardgames,
    name: "Board Games",
    link: routes.BOARDGAME_BOOKING,
  },
];
const CricketDetails = [
  {
    image: cricketnet,
    name: "Cricket Net",
    link: routes.CRICKETNET_BOOKING,
  },
  {
    image: bowling,
    name: "Bowling Machine",
    link: routes.BOWLINGMACHINE_BOOKING,
  },
];

export default function ServiceBooking() {
  const [selectedBreadcrumb, setSelectedBreadcrumb] = useState("1");

  const handleBreadcrumbClick = (breadcrumbKey: any) => {
    setSelectedBreadcrumb(breadcrumbKey);
  };
  const breadcrumbs = [
    <Typography
      fontSize={"20px"}
      fontWeight={"bold"}
      style={{ cursor: "pointer" }}
      key="1"
      color={selectedBreadcrumb === "1" ? Colors.BUTTON : Colors.BLACK}
      onClick={() => handleBreadcrumbClick("1")}
    >
      Service
    </Typography>,
    <Typography
      fontSize={"20px"}
      fontWeight={"bold"}
      style={{ cursor: "pointer" }}
      key="2"
      color={selectedBreadcrumb === "2" ? Colors.BUTTON : Colors.BLACK}
      onClick={() => handleBreadcrumbClick("2")}
    >
      Service Type
    </Typography>,
    <Typography
      fontSize={"20px"}
      fontWeight={"bold"}
      style={{ cursor: "pointer" }}
      key="3"
      color={selectedBreadcrumb === "3" ? Colors.BUTTON : Colors.BLACK}
      onClick={() => handleBreadcrumbClick("3")}
    >
      Date & Time
    </Typography>,
    <Typography
      fontSize={"20px"}
      fontWeight={"bold"}
      style={{ cursor: "pointer" }}
      key="4"
      color={selectedBreadcrumb === "4" ? Colors.BUTTON : Colors.BLACK}
      onClick={() => handleBreadcrumbClick("4")}
    >
      Payment
    </Typography>,
  ];

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const ZoomedBox = styled(Box)<{ zoomedIn: boolean }>`
    transition: transform 1s ease-in-out;

    &:hover {
      background-color: ${Colors.BUTTON_COLOR};
      transform: ${({ zoomedIn }) => (zoomedIn ? "scale(1.2)" : "scale(1)")};
    }
  `;
  const [zoomedIn, setZoomedIn] = useState(false);
  const [zoomedTurf, setZoomedTurfn] = useState(false);
  const [zoomedCrick, setZoomedCrick] = useState(false);

  const navigate = useNavigate();
  const zoomedBoxRef = useRef<HTMLDivElement>(null);
  const zoomedBoxTurf = useRef<HTMLDivElement>(null);

  const zoomedBoxCrick = useRef<HTMLDivElement>(null);

  const handleBoardClick = (link: any) => {
    setZoomedIn(true);
    setZoomedCrick(true);
    setZoomedTurfn(true);

    // Navigate to the link after the delay
    setTimeout(() => {
      navigate(link);
    }, 2000);
  };

  useEffect(() => {
    const element = zoomedBoxRef.current;

    if (zoomedIn && element) {
      element.classList.add("zoomed");

      setTimeout(() => {
        setZoomedIn(false);
        setZoomedCrick(false);
        setZoomedTurfn(false);
        element.classList.remove("zoomed");
      }, 2000);
    }
  }, [zoomedIn]);
  return (
    <>
      <Box
        component={"image"}
        sx={{
          position: "relative",
          backgroundImage: `url(${backgroundimage})`,
          backgroundSize: "cover", // Fit the background image to cover the entire container
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          objectFit: "cover", // Set object-fit to cover
          height: "100%",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.9)", // Adjust the alpha value (0.5 for 50% opacity)
          }}
        />
        <Box
          sx={{
            position: "relative",
            zIndex: 1, // Ensure content appears above background
            padding: "20px", // Adjust padding as needed
            color: "black", // Set text color for content
          }}
        >
          <Stack
            marginRight={{ xs: "0px", sm: "0px", md: "0px", lg: "0px" }}
            marginTop={"50px"}
            spacing={2}
            justifyContent={"center"}
            alignItems={"center"}
            sx={{
              opacity: "1",
            }}
          >
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb"
            >
              {breadcrumbs}
            </Breadcrumbs>
          </Stack>
          <Box
            margin={{
              xs: "50px 50px",
              sm: "50px 50px",
              md: "50px 50px",
              lg: "50px 170px",
            }}
            width={"100%"}
            maxWidth={"310px"}
            borderRight={"1px solid gray"}
          >
            <Typography
              fontSize={"20px"}
              marginBottom={"10px"}
              fontWeight={"bold"}
              color={Colors.BLACK}
              sx={{
                opacity: "1",
              }}
            >
              Pick a service
            </Typography>
            <Stack
              sx={{
                opacity: "1",
              }}
              alignItems={"baseline"}
              gap={"2rem"}
              flexDirection={"row"}
            >
              {TurfDetails.map((item) => (
                <Link style={{ textDecoration: "none" }} to={""}>
                  <ZoomedBox
                    ref={zoomedBoxTurf}
                    zoomedIn={zoomedTurf}
                    sx={{
                      ":hover": {
                        backgroundColor: Colors.BUTTON_COLOR,
                      },
                    }}
                    width={"100%"}
                    borderRadius={"10px"}
                    maxWidth={"124px"}
                    height={"135px"}
                    border={"1px solid gray"}
                    onClick={() => handleBoardClick(item.link)}
                  >
                    <Box padding={"12px 12px"}>
                      <img src={item.image} width={"100px"} alt="turf" />
                      <Typography
                        fontSize={"12px"}
                        fontWeight={"600"}
                        textAlign={"center"}
                        color={Colors.BLACK}
                      >
                        {item.name}
                      </Typography>
                    </Box>
                  </ZoomedBox>
                </Link>
              ))}
            </Stack>
            <Stack
              sx={{
                opacity: "1",
              }}
              marginTop={"15px"}
              alignItems={"baseline"}
              gap={"2rem"}
              flexDirection={"row"}
            >
              {BoardDetails.map((item) => (
                <Link style={{ textDecoration: "none" }} to={""}>
                  <ZoomedBox
                    ref={zoomedBoxRef}
                    zoomedIn={zoomedIn}
                    width={"100%"}
                    borderRadius={"10px"}
                    maxWidth={"124px"}
                    height={"135px"}
                    border={"1px solid gray"}
                    onClick={() => handleBoardClick(item.link)}
                  >
                    <Box padding={"12px 12px"}>
                      <img
                        src={item.image}
                        width={"100px"}
                        height={"90px"}
                        alt="board"
                      />
                      <Typography
                        fontSize={"12px"}
                        fontWeight={"600"}
                        textAlign={"center"}
                        color={Colors.BLACK}
                      >
                        {item.name}
                      </Typography>
                    </Box>
                  </ZoomedBox>
                </Link>
              ))}
            </Stack>
            <Stack
              sx={{
                opacity: "1",
              }}
              marginTop={"15px"}
              alignItems={"baseline"}
              gap={"2rem"}
              flexDirection={"row"}
            >
              {CricketDetails.map((item) => (
                <Link style={{ textDecoration: "none" }} to={""}>
                  <ZoomedBox
                    ref={zoomedBoxCrick}
                    zoomedIn={zoomedCrick}
                    sx={{
                      ":hover": {
                        backgroundColor: Colors.BUTTON_COLOR,
                      },
                    }}
                    width={"100%"}
                    borderRadius={"10px"}
                    maxWidth={"124px"}
                    height={"135px"}
                    border={"1px solid gray"}
                    onClick={() => handleBoardClick(item.link)}
                  >
                    <Box padding={"12px 12px"}>
                      <img src={item.image} width={"100px"} alt="cricket" />
                      <Typography
                        fontSize={"12px"}
                        fontWeight={"600"}
                        textAlign={"center"}
                        color={Colors.BLACK}
                      >
                        {item.name}
                      </Typography>
                    </Box>
                  </ZoomedBox>
                </Link>
              ))}
            </Stack>
          </Box>
        </Box>

        <img
          width={"100%"}
          style={{
            opacity: "0.7",
          }}
          src={grass}
          alt=""
        />
      </Box>
    </>
  );
}
