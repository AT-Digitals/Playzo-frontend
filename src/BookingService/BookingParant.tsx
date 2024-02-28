import { Box, Breadcrumbs, Button, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

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
    width: 100%;
    max-height: 130px;
    height: 100%;
    max-width: 130px;
  }

  @media (min-width: 992px) {
    width: 130px;
    height: 130px;
  }

  @media (min-width: 1200px) {
    width: 145px;
    height: 105px;
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

  // const [tableData, setTableData] = useState<TableDataItem[]>([]);

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
      ? [{ image: bowling, name: "Bowling Machine" }]
      : type === BookingType.CricketNet
      ? [{ image: cricketnet, name: "Cricket Net" }]
      : [];

  const handleServiceSelection = (service: any) => {
    console.log("djcndj", service);
    setSelectedService(service.name);
    setSelectedCourt(service.value);
    setTableData((prevTableData) => [...prevTableData]);
  };

  console.log(tableData, "tableData new array");

  const handleRemoveItem = (indexToRemove: number) => {
    const updatedTableData = [...tableData];
    updatedTableData.splice(indexToRemove, 1);
    setTableData(updatedTableData);
    localStorage.setItem("bookings", JSON.stringify(updatedTableData));
    console.log(tableData, "after deleted");
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
      fontSize={"20px"}
      fontWeight={"bold"}
      style={{ cursor: "pointer" }}
      key="1"
      color={type ? Colors.BUTTON : Colors.BLACK}
    >
      Service
    </Typography>,
    <Typography
      fontSize={"20px"}
      fontWeight={"bold"}
      style={{ cursor: "pointer" }}
      key="2"
      color={selectedService ? Colors.BUTTON : Colors.BUTTON}
    >
      Service Type
    </Typography>,
    <Typography
      fontSize={"20px"}
      fontWeight={"bold"}
      style={{ cursor: "pointer" }}
      key="3"
      color={selectedService ? Colors.BUTTON : Colors.BLACK}
    >
      Date & Time
    </Typography>,
    <Typography
      fontSize={"20px"}
      fontWeight={"bold"}
      style={{ cursor: "pointer" }}
      key="4"
      color={Colors.BLACK}
    >
      Payment
    </Typography>,
  ];

  const handlegoBack = () => {
    if (selectedService) {
      setSelectedService("");
      setSelectedCourt(1);
    } else {
      navigate(-1);
    }

    localStorage.removeItem("selectedService");
  };

  const useBloger = () => {
    useEffect(() => {
      const cleanupLocalStorage = () => {
        localStorage.removeItem("bookings");
        localStorage.removeItem("selectedService");
      };

      const handleBeforeUnload = (event: any) => {
        cleanupLocalStorage();
        const message =
          "Are you sure you want to leave? Your selected service will be lost.";
        event.returnValue = message;
        return message;
      };

      const handleRouteChange = () => {
        cleanupLocalStorage();
        const confirmLeave = window.confirm(
          "You have unsaved changes. Are you sure you want to leave?"
        );

        if (!confirmLeave) {
          // Navigate back to the current location to prevent leaving
          window.history.pushState({}, "");
        }
      };

      window.addEventListener("beforeunload", handleBeforeUnload);
      window.addEventListener("popstate", handleRouteChange);

      return () => {
        window.removeEventListener("beforeunload", handleBeforeUnload);
        window.removeEventListener("popstate", handleRouteChange);
      };
    }, []);
  };

  useEffect(() => {
    // Read selected service from local storage
    const storedSelectedService = localStorage.getItem("selectedService");

    if (storedSelectedService) {
      setSelectedService(storedSelectedService);
    }
  }, []);

  console.log(tableData, "inital-mount");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  useBloger();

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
            width={{ xs: "90%", sm: "60%", md: "60%", lg: "100%" }}
            ml={{ xs: 0, sm: "3rem", md: 0, lg: "9rem" }}
            marginTop={"5rem"}
            direction={"row"}
            alignItems={"flex-start"}
          >
            <Button
              sx={{
                opacity: "1",
                padding: "8px 20px",
                textTransform: "none",
                fontSize: "16px",
                minWidth: "110px",
                fontWeight: "400",
                border: "2px solid #15B5FC",
                borderRadius: "30px",
                letterSpacing: "1.6px",
                background: Colors.BUTTON_COLOR,
                color: Colors.WHITE,
                ":hover": {
                  background: Colors.BUTTON_COLOR,
                },
              }}
              onClick={handlegoBack}
              variant="text"
              startIcon={<KeyboardBackspaceIcon />}
            >
              Back
            </Button>{" "}
            <Stack
              marginRight={{ xs: "0px", sm: "0px", md: "0px", lg: "0px" }}
              // marginTop={"50px"}
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
                xs: "60px 38px",
                sm: "60px 38px",
                md: "60px 38px",
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
                  sm: "cemter",
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
              borderLeft={"1px solid gray"}
              gap={"8px"}
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
                <Box
                  display={selectedService ? "none" : "block"}
                  key={item.name}
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
              ))}
              {selectedService && (
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
              )}
            </Stack>
            <Stack borderLeft={selectedService ? "1px solid gray" : "none"}>
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
      {/* <Box display={"flex"} justifyContent={"end"}>
        <img src={ball} width={"150px"} alt="" />
      </Box> */}
      <img src={grass} alt="" />
    </>
  );
};

export default BookingParent;
