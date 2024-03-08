import {
  Box,
  Breadcrumbs,
  Button,
  Stack,
  Typography,
  keyframes,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useBlocker, useLocation, useNavigate } from "react-router-dom";

import { BookingType } from "../CommonFiles/BookingType";
import Colors from "../CommonComponents/Colors";
import CustomDateCalendar from "../CommonComponents/CustomDateCalender/CustomDateCalender";
import CustomTable from "../CommonComponents/CustomDateCalender/CustomTable";
import DateUtils from "../Utils/DateUtils";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import assets from "../assets";
import backgroundimage from "./7692.jpg";
import styled from "@emotion/styled";

const {
  "Image (7).png": badminton,
  "Rectangle 685 (3).png": badminton1,
  "Rectangle 685 (4).png": badminton2,
  "Rectangle 685 (5).png": badminton3,
  "board games.png": boardgames,
  "Rectangle 685 (11).png": boardgames1,
  "Rectangle 685 (12).png": boardgames2,
  "Rectangle 685 (9).png": boardgames3,
  "Image (2).png": bowling,
  "Image (1).png": cricketnet,
  "Rectangle 679.png": grass,
  "playstation.png": playstation,
  "Rectangle 685.png": playstation1,
  "Rectangle 685 (1).png": playstation2,
  "Rectangle 685 (2).png": playstation3,
  "turf.png": turf,
} = assets;

const StyledImage = styled.img`
  @media (min-width: 300px) {
    width: 100px;
    height: 80px;
  }

  @media (min-width: 768px) {
    width: 130px;
    height: 80px;
  }

  @media (min-width: 992px) {
    width: 130px;
    height: 80px;
  }

  @media (min-width: 1200px) {
    width: 145px;
    height: 105px;
  }

  &.animate-zoom-in {
    animation: zoomInAnimation 0.5s ease-in-out;
  }

  @keyframes zoomInAnimation {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.2);
    }
  }
`;

const TurfImages = [
  { image: turf, name: "Turf 1", value: 1 },
  { image: turf, name: "Turf 2", value: 2 },
  { image: turf, name: "Turf 1&2", value: 3 },
];

const PlaystationImages = [
  { image: playstation1, name: "PS 1", value: 1 },
  { image: playstation2, name: "PS 2", value: 2 },
  { image: playstation3, name: "PS 1&2", value: 3 },
];

const BadmintonImages = [
  {
    image: badminton1,
    name: "Court 1",
    value: 1,
  },
  {
    image: badminton2,
    name: "Court 2",
    value: 2,
  },
  {
    image: badminton3,
    name: "Court 3",
    value: 3,
  },
  {
    image: badminton3,
    name: "Court 4",
    value: 4,
  },
];

const BoardgameImages = [
  {
    image: boardgames1,
    name: "Chess",
    value: 1,
  },
  {
    image: boardgames2,
    name: "Monopoly",
    value: 2,
  },
  {
    image: boardgames3,
    name: "Scrabble",
    value: 3,
  },
];

interface TableDataItem {
  type: BookingType;
  name: string;
  date: string;
  time: string;
  court: number;
  amount: any;
}

const BookingParent: React.FC<{ type: BookingType }> = ({ type }) => {
  const [selectedService, setSelectedService] = useState("");
  const [selectedCourt, setSelectedCourt] = useState(1);
  const [tableData, setTableData] = useState<TableDataItem[]>(() => {
    const storedTableData = JSON.parse(
      localStorage.getItem("bookings") || "[]"
    );
    return storedTableData;
  });
  const isBlocked = useRef<any>(true);

  const excutedBlocker = ["/payment-booking", "/service-booking"];
  // const rootLocal = "/";
  // Block navigating elsewhere when data has been entered into the input
  let blocker = useBlocker(({ currentLocation, nextLocation }) => {
    // const isLocalCleared =
    //   localStorage.getItem("bookings") !== null ||
    //   localStorage.getItem("bookings") !== undefined ||
    //   localStorage.getItem("bookings") !== "[]";
    // if (nextLocation.pathname === rootLocal && isLocalCleared) {
    //   return false;
    // }
    if (
      tableData.length !== 0 &&
      currentLocation.pathname !== nextLocation.pathname &&
      !excutedBlocker.includes(nextLocation.pathname)
    ) {
      isBlocked.current = true;
      return true;
    }
    return false;
  });
  const nextLocation = localStorage.getItem("nextLocation");

  //   let blocker = useBlocker(({ currentLocation, nextLocation }) => {
  //     const isLocalCleared =
  //       localStorage.getItem("bookings") == null ||
  //       localStorage.getItem("bookings") === undefined ||
  //       localStorage.getItem("bookings") === "[]";
  //     if (nextLocation.pathname === rootLocal && isLocalCleared) {
  // return false
  //     }{
  //     // if (nextLocation.pathname === rootLocal && isLocalCleared) {
  //     //   // Allow navigation if the pathname is the root and local storage is cleared
  //     // } else {
  //     //   // Block navigation and set isBlocked.current to true
  //     //   isBlocked.current = true;
  //     //   return true;
  //     // }

  //     // Allow navigation if none of the above conditions are met
  //     return false;
  //   });

  const images =
    type === BookingType.Turf
      ? TurfImages
      : type === BookingType.Playstaion
      ? PlaystationImages
      : type === BookingType.Badminton
      ? BadmintonImages
      : type === BookingType.BoardGame
      ? BoardgameImages
      : type === BookingType.BowlingMachine
      ? [{ image: bowling, name: "Bowling Machine", value: 1 }]
      : type === BookingType.CricketNet
      ? [{ image: cricketnet, name: "Cricket Net", value: 1 }]
      : [];

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

  const handleServiceSelection = (service: any) => {
    setSelectedService(service.name);
    setSelectedCourt(service.value);
    setTableData((prevTableData) => [...prevTableData]);
  };

  const handleRemoveItem = (indexToRemove: number) => {
    const updatedTableData = [...tableData];
    updatedTableData.splice(indexToRemove, 1);
    setTableData(updatedTableData);
    localStorage.setItem("bookings", JSON.stringify(updatedTableData));
    localStorage.removeItem("selectedService");
  };

  const handleAddMoreItems = () => {
    if (selectedService) {
      const selectedDate = "29 Feb 2024";
      const selectedTime = "9.00AM-11.00AM";
      const selectedAmount = "1500";

      // Check if the same item already exists in the tableData array
      const existingItem = tableData.find(
        (item) => item.type === type && item.name === selectedService
      );

      if (!existingItem) {
        // If the item doesn't exist, add it to the tableData array
        setTableData((prevTableData) =>
          prevTableData.concat({
            type,
            name: selectedService,
            date: selectedDate,
            time: selectedTime,
            court: selectedCourt,
            amount: selectedAmount,
          })
        );
      }
    }

    setSelectedService("");
    setSelectedCourt(1);
    localStorage.removeItem("selectedService");
  };

  const navigate = useNavigate();
  const location = useLocation();
  const [isBackButtonVisible, setIsBackButtonVisible] = useState(true);

  const handleProceedToPayment = async () => {
    if (allBookings.length === 0) {
      alert("Please make at least one booking before proceeding to payment");
      return;
    }

    const bookingsWithTime = allBookings.reduce(
      (
        acc: {
          type: BookingType;
          name: string;
          startDate: string;
          startTime: number;
          endDate: string;
          endTime: number;
          court: number;
          amount: any;
        }[],
        booking
      ) => {
        const boo = booking.time as any;

        const splitamount = booking.amount / boo.length;

        boo.forEach(function (item: any) {
          const startDateTime = DateUtils.startTimeAddtoDate(item);
          const endDateTime = DateUtils.endTimeAddtoDate(item);
          const endMilli = DateUtils.joinDate(booking.date, endDateTime);
          const startMilli = DateUtils.joinDate(booking.date, startDateTime);
          const startMilliSec = new Date(startMilli).getTime();
          const endMilliSec = new Date(endMilli).getTime();

          acc.push({
            type: booking.type,
            name: booking.name,
            startDate: DateUtils.formatDate(
              new Date(booking.date),
              "YYYY-MM-DD"
            ),
            startTime: startMilliSec,
            endDate: DateUtils.formatDate(new Date(booking.date), "YYYY-MM-DD"),
            endTime: endMilliSec,
            court: booking.court,
            amount: splitamount,
          });
        });

        return acc;
      },
      []
    );

    navigate("/payment-booking", {
      state: { selectedService, bookingsWithTime },
    });

    localStorage.setItem("selectedService", selectedService);
  };

  useEffect(() => {
    localStorage.setItem("bookings", JSON.stringify(tableData));
  }, [tableData]);

  useEffect(() => {
    const selectedServiceFromState = location.state?.selectedService;
    if (selectedServiceFromState) {
      setSelectedService(selectedServiceFromState);
    }
  }, [location.state?.selectedService]);

  const allBookings = tableData.filter(
    (item) =>
      item.type === BookingType.Turf ||
      item.type === BookingType.Playstaion ||
      item.type === BookingType.Badminton ||
      item.type === BookingType.BoardGame ||
      item.type === BookingType.BowlingMachine ||
      item.type === BookingType.CricketNet
  );

  const breadcrumbs = [
    <Typography
      fontSize={{ xs: "14px", sm: "16px", md: "16px", lg: "20px" }}
      fontWeight={"bold"}
      style={{ cursor: "pointer" }}
      key="1"
      color={type ? Colors.BUTTON : Colors.BLACK}
    >
      Service
    </Typography>,
    <Typography
      fontSize={{ xs: "14px", sm: "16px", md: "16px", lg: "20px" }}
      fontWeight={"bold"}
      style={{ cursor: "pointer" }}
      key="2"
      color={selectedService ? Colors.BUTTON : Colors.BUTTON}
    >
      Service Type
    </Typography>,
    <Typography
      fontSize={{ xs: "14px", sm: "16px", md: "16px", lg: "20px" }}
      fontWeight={"bold"}
      style={{ cursor: "pointer" }}
      key="3"
      color={selectedService ? Colors.BUTTON : Colors.BLACK}
    >
      Date & Time
    </Typography>,
    <Typography
      fontSize={{ xs: "14px", sm: "16px", md: "16px", lg: "20px" }}
      fontWeight={"bold"}
      style={{ cursor: "pointer" }}
      key="4"
      color={Colors.BLACK}
    >
      Payment
    </Typography>,
  ];

  const cleanupLocalStorage = () => {
    localStorage.removeItem("bookings");
    localStorage.removeItem("selectedService");
  };

  const handlegoBack = () => {
    if (selectedService) {
      setSelectedService("");
      setSelectedCourt(1);
    } else {
      navigate(-1);
    }

    localStorage.removeItem("selectedService");
  };

  useEffect(() => {
    // Read selected service from local storage
    const storedSelectedService = localStorage.getItem("selectedService");

    if (storedSelectedService) {
      setSelectedService(storedSelectedService);
    }
  }, []);

  // useEffect(() => {
  //   const handleBeforeUnload = (event: any) => {
  //     if (tableData.length !== 0) {
  //       event.preventDefault();
  //       cleanupLocalStorage();
  //       const message =
  //         "Are you sure you want to leave? Your selected service will be lost.";
  //       event.returnValue = message;
  //       return message;
  //     }
  //   };

  //   window.addEventListener("beforeunload", handleBeforeUnload);

  //   return () => {
  //     window.removeEventListener("beforeunload", handleBeforeUnload);
  //   };
  // }, [tableData.length]);

  const isLocalCleared =
    localStorage.getItem("bookings") == null ||
    localStorage.getItem("bookings") === undefined ||
    localStorage.getItem("bookings") === "[]";

  useEffect(() => {
    if (blocker.state === "blocked" && !isLocalCleared) {
      const val = window.confirm(
        "Are you sure you want to leave? Your selected service will be lost."
      );
      localStorage.removeItem("nextLocation");
      if (val) {
        localStorage.setItem("nextLocation", blocker.location.pathname);
        isBlocked.current = false;
        setTableData([]);
        cleanupLocalStorage();
      }
      blocker.reset();
    }
  }, [blocker, blocker.state]);

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
          // Ensure the height is 100%
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
            justifyContent={"space-between"}
            maxWidth={800}
            width={{ xs: "90%", sm: "72%", md: "73%", lg: "100%" }}
            ml={{ xs: 0, sm: "3rem", md: 0, lg: "9rem" }}
            marginTop={"5rem"}
            direction={"row"}
            alignItems={"flex-start"}
          >
            <Box display={"flex"}>
              <Button
                sx={{
                  opacity: "1",
                  padding: {
                    xs: "0px 0px",
                    sm: "0px 0px",
                    md: "0px 5px",
                    lg: "8px 20px",
                  },
                  textTransform: "none",
                  fontSize: { xs: "14px", sm: "14px", md: "14px", lg: "16px" },
                  width: "100%",
                  maxWidth: { xs: "70px", sm: "70px", md: "80px", lg: "115px" },
                  fontWeight: "400",
                  border: "2px solid #15B5FC",
                  marginLeft: { xs: "0px", sm: "-45px", md: "0px", lg: "0px" },
                  letterSpacing: "1.6px",
                  background: Colors.BUTTON_COLOR,
                  color: Colors.WHITE,
                  ":hover": {
                    background: Colors.BUTTON_COLOR,
                  },
                  display: isBackButtonVisible ? "block" : "none",
                  whiteSpace: "nowrap",
                }}
                onClick={handlegoBack}
                variant="text"
              >
                <span
                  style={{
                    display: "flex",
                    gap: "0.5rem",

                    alignItems: "center",
                  }}
                >
                  <KeyboardBackspaceIcon
                    style={{
                      color: "white",
                    }}
                  />
                  Back
                </span>
              </Button>{" "}
            </Box>
            <Stack
              marginRight={{ xs: "0px", sm: "0px", md: "0px", lg: "0px" }}
              spacing={2}
              justifyContent={"center"}
              alignItems={"center"}
              sx={{
                opacity: "1",
                marginLeft: { xs: "15px", sm: "11px", md: "11px", lg: "0px" },
              }}
            >
              <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
              >
                {breadcrumbs}
              </Breadcrumbs>
            </Stack>
          </Stack>
          <Box
            sx={{
              opacity: "1",
            }}
            display={"flex"}
            flexDirection={{
              xs: "column",
              sm: "column",
              ms: "column",
              lg: "row",
            }}
            margin={{
              xs: "0px",
              sm: "0px",
              md: "0px",
              lg: selectedService ? "30px auto" : "30px 110px",
            }}
          >
            <Box
              margin={{
                xs: "50px auto",
                sm: "60px auto",
                md: "60px auto",
                lg: "60px 50px",
              }}
              width={"100%"}
              border={{
                xs: "1px solid #D9D9D9",
                sm: "1px solid #D9D9D9",
                md: "1px solid #D9D9D9",
                lg: "none",
              }}
              maxWidth={{ xs: "270px", sm: "270px", md: "270px", lg: "300px" }}
              borderRadius={{ xs: "17px", sm: "17px", md: "17px", lg: "10px" }}
              height={{ xs: "100px", sm: "100px", md: "100px", lg: "300px" }}
            >
              <Box
                display={{ xs: "flex", sm: "flex", md: "flex", lg: "block" }}
                alignItems={{
                  xs: "center",
                  sm: "flex-start",
                  md: "center",
                  lg: "",
                }}
                padding={{
                  xs: "10px 10px",
                  sm: "10px 10px",
                  md: "10px 10px",
                  lg: "20px 20px",
                }}
                width={{ xs: "219px", sm: "219px", md: "219px", lg: "260px" }}
                height={{ xs: "80px", sm: "80px", md: "80px", lg: "260px" }}
              >
                <img
                  src={
                    type === BookingType.Turf
                      ? turf
                      : type === BookingType.Playstaion
                      ? playstation
                      : type === BookingType.Badminton
                      ? badminton
                      : type === BookingType.BoardGame
                      ? boardgames
                      : type === BookingType.BowlingMachine
                      ? bowling
                      : type === BookingType.CricketNet
                      ? cricketnet
                      : undefined // Handle other cases or set to undefined
                  }
                  width={"100%"}
                  height={"100%"}
                  alt="booking"
                />
                <Typography
                  display={{
                    xs: "block",
                    sm: "block",
                    md: "block",
                    lg: "block",
                  }}
                  textAlign={"center"}
                  fontSize={"18px"}
                  color={Colors.BLACK}
                  fontWeight={"600"}
                  marginTop={"5px"}
                  paddingLeft={{
                    xs: "30px",
                    sm: "30px",
                    md: "30px",
                    lg: "0px",
                  }}
                >
                  {type === BookingType.Turf
                    ? "Turf"
                    : type === BookingType.Playstaion
                    ? "Playstation"
                    : type === BookingType.Badminton
                    ? "Badminton"
                    : type === BookingType.BoardGame
                    ? "Board Games"
                    : type === BookingType.BowlingMachine
                    ? "Bowling Machine"
                    : type === BookingType.CricketNet
                    ? "Cricket Net"
                    : "Unknown Type"}
                </Typography>
              </Box>
            </Box>
            <Stack
              display={
                type === BookingType.BowlingMachine ||
                type === BookingType.CricketNet
                  ? "none"
                  : "flex"
              }
              borderLeft={{
                xs: "none",
                sm: "none",
                md: "none",
                lg: "1px solid gray",
              }}
              gap={"8px"}
              margin={{ xs: "0 auto", sm: "0 auto", md: "0 auto", lg: "0px" }}
              padding={{
                xs: "0px 37px",
                sm: "0px 37px",
                md: "0px 37px",
                lg: "40px 37px",
              }}
              flexDirection={"column"}
            >
              <Typography
                display={selectedService ? "none" : "block"}
                fontSize={"18px"}
                color={Colors.BLACK}
                fontWeight={"600"}
                paddingBottom={"4px"}
              >
                Choose{" "}
                {type === BookingType.Turf
                  ? "Turf"
                  : type === BookingType.Playstaion
                  ? "Playstation"
                  : type === BookingType.Badminton
                  ? "Badminton"
                  : type === BookingType.BoardGame
                  ? "Board Games"
                  : "Unknown Type"}{" "}
              </Typography>
              {images.map((item) => (
                <AnimatedZoomIn key={item.name}>
                  <Box
                    display={selectedService ? "none" : "block"}
                    sx={{
                      ":hover": {
                        backgroundColor: Colors.BUTTON_COLOR,
                      },
                    }}
                    border={"1px solid gray"}
                    width={"100%"}
                    maxWidth={{
                      xs: "215px",
                      sm: "215px",
                      md: "215px",
                      lg: "200px",
                    }}
                    borderRadius={{
                      xs: "17px",
                      sm: "17px",
                      md: "17px",
                      lg: "10px",
                    }}
                    height={"105px"}
                    onClick={() => handleServiceSelection(item)}
                    className={selectedService === item.name ? "selected" : ""}
                  >
                    <Box
                      sx={{
                        opacity: "1",
                      }}
                      display={"flex"}
                      gap={"16px"}
                      alignItems={"center"}
                      padding={"14px 12px"}
                    >
                      <img
                        src={item.image}
                        width={"95px"}
                        height={"75px"}
                        alt={
                          type === BookingType.Turf
                            ? "Turf"
                            : type === BookingType.Playstaion
                            ? "Playstation"
                            : type === BookingType.Badminton
                            ? "Badminton"
                            : type === BookingType.BoardGame
                            ? "Board Games"
                            : "Unknown Type"
                        }
                      />
                      <Typography
                        fontSize={"14px"}
                        color={Colors.BLACK}
                        fontWeight={"600"}
                      >
                        {item.name}
                      </Typography>
                    </Box>
                  </Box>
                </AnimatedZoomIn>
              ))}
              {selectedService && (
                <AnimatedZoomIn>
                  <Box
                    sx={{
                      opacity: "1",
                    }}
                    border={"1px solid gray"}
                    width={"100%"}
                    maxWidth={{
                      xs: "220px",
                      sm: "220px",
                      md: "220px",
                      lg: "290px",
                    }}
                    borderRadius={{
                      xs: "17px",
                      sm: "17px",
                      md: "17px",
                      lg: "10px",
                    }}
                    height={{
                      xs: "105px",
                      sm: "105px",
                      md: "105px",
                      lg: "155px",
                    }}
                    marginTop={{
                      xs: "-40px",
                      sm: "-40px",
                      md: "-40px",
                      lg: "24px",
                    }}
                  >
                    <Box
                      display={"flex"}
                      gap={"16px"}
                      alignItems={"center"}
                      padding={"14px 12px"}
                    >
                      <StyledImage
                        src={
                          images.find((item) => item.name === selectedService)
                            ?.image
                        }
                        alt={`selected ${
                          type === BookingType.Turf
                            ? "Turf"
                            : type === BookingType.Playstaion
                            ? "Playstation"
                            : type === BookingType.Badminton
                            ? "Badminton"
                            : type === BookingType.BoardGame
                            ? "Board Games"
                            : "Unknown Type"
                        }`}
                      />
                      <Typography
                        fontSize={"14px"}
                        color={Colors.BLACK}
                        fontWeight={"600"}
                      >
                        {selectedService}
                      </Typography>
                    </Box>
                  </Box>
                </AnimatedZoomIn>
              )}
            </Stack>
            <Stack
              sx={{
                borderLeft: selectedService ? "1px solid gray" : "none",
                "@media (max-width: 768px)": {
                  borderLeft: "none",
                },
                "@media (max-width: 820px)": {
                  borderLeft: "none",
                },
                "@media (max-width: 912px)": {
                  borderLeft: "none",
                },
                "@media (max-width: 1024px)": {
                  borderLeft: "none",
                },
              }}
            >
              {(type === BookingType.BowlingMachine ||
                type === BookingType.CricketNet ||
                selectedService) && (
                <Box
                  borderLeft={
                    type === BookingType.BowlingMachine ||
                    type === BookingType.CricketNet
                      ? "1px solid gray"
                      : "none"
                  }
                >
                  <CustomDateCalendar
                    tableData={tableData}
                    setTableData={setTableData}
                    selectedService={selectedService}
                    type={type}
                    setIsBackButtonVisible={setIsBackButtonVisible}
                  />
                </Box>
              )}
            </Stack>
          </Box>
          <Box
            sx={{
              opacity: "1",
            }}
            pt={2}
          >
            {(type === BookingType.BowlingMachine ||
              type === BookingType.CricketNet ||
              selectedService) && (
              <>
                <CustomTable
                  tableData={allBookings}
                  handleRemoveItem={handleRemoveItem}
                  serviceName={selectedService}
                  serviceType={type}
                  setTableData={setTableData}
                  handleAddmore={handleAddMoreItems}
                />
                <Button
                  sx={{
                    margin: "auto",
                    display: "block",
                    marginTop: "2rem",
                    background: Colors.BUTTON_COLOR,
                    color: "white",
                    border: "1px solid #15B5FC",
                    ":hover": {
                      background: Colors.WHITE,
                      color: Colors.BUTTON_COLOR,
                      border: "1px solid #15B5FC",
                    },
                  }}
                  onClick={handleProceedToPayment}
                >
                  Proceed to Payment
                </Button>
              </>
            )}
          </Box>
        </Box>
      </Box>

      <img src={grass} alt="" />
    </>
  );
};

export default BookingParent;
