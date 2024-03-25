import { Box, Breadcrumbs, Stack, Typography } from "@mui/material";
import { Link, useBlocker, useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { useEffect, useRef, useState } from "react";

import BookingParantmodal from "./BookingParantmodal";
import Colors from "../CommonComponents/Colors";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import assets from "../assets";
import backgroundimage from "./7692.jpg";
import badmintonImg from "./badminton-type.jpg";
import routes from "../routes/routes";

const {
  "board games.png": boardgames,
  "Image (2).png": bowling,
  "Image (1).png": cricketnet,
  "Rectangle 679.png": grass,
  "playstation.png": playstation,
  "turf.png": turf,
} = assets;
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
    image: badmintonImg,
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
      fontSize={{ xs: "14px", sm: "16px", md: "16px", lg: "20px" }}
      fontWeight={"bold"}
      style={{ cursor: "pointer" }}
      key="1"
      color={selectedBreadcrumb === "1" ? Colors.BUTTON : Colors.BLACK}
      onClick={() => handleBreadcrumbClick("1")}
    >
      Service
    </Typography>,
    <Typography
      fontSize={{ xs: "14px", sm: "16px", md: "16px", lg: "20px" }}
      fontWeight={"bold"}
      style={{ cursor: "pointer" }}
      key="2"
      color={selectedBreadcrumb === "2" ? Colors.BUTTON : Colors.BLACK}
      onClick={() => handleBreadcrumbClick("2")}
    >
      Service Type
    </Typography>,
    <Typography
      fontSize={{ xs: "14px", sm: "16px", md: "16px", lg: "20px" }}
      fontWeight={"bold"}
      style={{ cursor: "pointer" }}
      key="3"
      color={selectedBreadcrumb === "3" ? Colors.BUTTON : Colors.BLACK}
      onClick={() => handleBreadcrumbClick("3")}
    >
      Date & Time
    </Typography>,
    <Typography
      fontSize={{ xs: "14px", sm: "16px", md: "16px", lg: "20px" }}
      fontWeight={"bold"}
      style={{ cursor: "pointer" }}
      margin={{ xs: "2px 3px", sm: "2px 3px", md: "2px 3px", lg: "0px" }}
      key="4"
      color={selectedBreadcrumb === "4" ? Colors.BUTTON : Colors.BLACK}
      onClick={() => handleBreadcrumbClick("4")}
    >
      Payment
    </Typography>,
  ];
  const isBlocked = useRef<any>(true);
  const excutedBlocker = [
    "/payment-booking",
    "/service-booking",
    routes.BADMINTON_BOOKING,
    routes.TURF_BOOKING,
    routes.PLAYSTATION_BOOKING,
    routes.BADMINTON_BOOKING,
    routes.CRICKETNET_BOOKING,
    routes.BOARDGAME_BOOKING,
  ];
  // Block navigating elsewhere when data has been entered into the input
  let blocker = useBlocker(({ currentLocation, nextLocation }) => {
    const isLocalCleared =
      localStorage.getItem("bookings") == null ||
      localStorage.getItem("bookings") === undefined ||
      localStorage.getItem("bookings") === "[]";
    if (
      !isLocalCleared &&
      currentLocation.pathname !== nextLocation.pathname &&
      !excutedBlocker.includes(nextLocation.pathname)
    ) {
      isBlocked.current = true;
      return true;
    }
    return false;
  });

  const cleanupLocalStorage = () => {
    localStorage.removeItem("bookings");
    localStorage.removeItem("selectedService");
  };
  const nextLocation = localStorage.getItem("nextLocation");
  const navigate = useNavigate();
  const [selectedModal, setSelectedModal] = useState(false);
  const isLocalCleared =
    localStorage.getItem("bookings") == null ||
    localStorage.getItem("bookings") === undefined ||
    localStorage.getItem("bookings") === "[]";
  useEffect(() => {
    if (blocker.state === "blocked" && !isLocalCleared) {
      setSelectedModal(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blocker, blocker.state]);
  const handleModalConfirm = () => {
    localStorage.removeItem("nextLocation");
    if (blocker.location) {
      localStorage.setItem("nextLocation", blocker.location.pathname);
    }
    isBlocked.current = false;
    //setTableData([]);
    cleanupLocalStorage();
    if (blocker.state === "blocked") {
      blocker.reset();
    }
    setSelectedModal(false); // Close the modal after confirmation
  };
  const handleModalCancel = () => {
    setSelectedModal(false); // Close the modal
  };
  useEffect(() => {
    if (nextLocation && !isBlocked.current) {
      localStorage.removeItem("nextLocation");
      navigate(nextLocation);
    }
  }, [nextLocation, navigate]);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const zoomInAnimation = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;
  const AnimatedZoomIn = styled.div`
    animation: ${zoomInAnimation} 1s ease-in-out;
  `;
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
            backgroundColor: "rgba(255, 255, 255, 0.96)", // Adjust the alpha value (0.5 for 50% opacity)
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
              marginLeft: { xs: "11px", sm: "11px", md: "11px", lg: "0px" },
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
              xs: "30px auto",
              sm: "50px auto",
              md: "50px auto",
              lg: "50px 170px",
            }}
            width={"100%"}
            maxWidth={"310px"}
            borderRight={{
              xs: "none",
              sm: "none",
              md: "none",
              lg: "1px solid gray",
            }}
          >
            <Typography
              fontSize={{ xs: "16px", sm: "16px", md: "16px", lg: "20px" }}
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
                <Link style={{ textDecoration: "none" }} to={item.link}>
                  <AnimatedZoomIn>
                    <Box
                      width={"100%"}
                      borderRadius={"10px"}
                      maxWidth={"124px"}
                      height={"135px"}
                      border={"1px solid gray"}
                      sx={{
                        ":hover": {
                          background: Colors.BUTTON_COLOR,
                        },
                      }}
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
                    </Box>
                  </AnimatedZoomIn>
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
                <Link style={{ textDecoration: "none" }} to={item.link}>
                  <AnimatedZoomIn>
                    <Box
                      width={"100%"}
                      borderRadius={"10px"}
                      maxWidth={"124px"}
                      height={"135px"}
                      border={"1px solid gray"}
                      sx={{
                        ":hover": {
                          background: Colors.BUTTON_COLOR,
                        },
                      }}
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
                    </Box>
                  </AnimatedZoomIn>
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
                <Link style={{ textDecoration: "none" }} to={item.link}>
                  <AnimatedZoomIn>
                    <Box
                      width={"100%"}
                      borderRadius={"10px"}
                      maxWidth={"124px"}
                      height={"135px"}
                      border={"1px solid gray"}
                      sx={{
                        ":hover": {
                          background: Colors.BUTTON_COLOR,
                        },
                      }}
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
                    </Box>
                  </AnimatedZoomIn>
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
      <BookingParantmodal
        open={selectedModal}
        handleClose={handleModalCancel}
        text={
          "Are you sure you want to leave? Your selected service will be lost."
        }
        handleConfirmReset={handleModalConfirm}
      />
    </>
  );
}
