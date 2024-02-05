import { Box, Breadcrumbs, Button, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import Colors from "../CommonComponents/Colors";
import CustomDateCalendar from "../CommonComponents/CustomDateCalender/CustomDateCalender";
import CustomTable from "../CommonComponents/CustomDateCalender/CustomTable";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import badminton from "../assets/Image (7).png";
import badminton1 from "../assets/Rectangle 685 (3).png";
import badminton2 from "../assets/Rectangle 685 (4).png";
import badminton3 from "../assets/Rectangle 685 (5).png";
import ball from "../assets/ball 4.png";
import boardgames from "../assets/board games.png";
import boardgames1 from "../assets/Rectangle 685 (11).png";
import boardgames2 from "../assets/Rectangle 685 (12).png";
import boardgames3 from "../assets/Rectangle 685 (9).png";
import bowling from "../assets/Image (2).png";
import cricketnet from "../assets/Image (1).png";
import grass from "../assets/Rectangle 679.png";
import playstation from "../assets/playstation.png";
import playstation1 from "../assets/Rectangle 685.png";
import playstation2 from "../assets/Rectangle 685 (1).png";
import playstation3 from "../assets/Rectangle 685 (2).png";
import styled from "@emotion/styled";
import turf from "../assets/turf.png";
import { useNavigate } from "react-router-dom";

const StyledImage = styled.img`
  @media (min-width: 300px) {
    width: 100px;
    height: 80px;
  }

  @media (min-width: 768px) {
    width: 130px;
    height: 130px;
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
  { image: turf, name: "Turf 1" },
  { image: turf, name: "Turf 2" },
  { image: turf, name: "Turf 3" },
];

const PlaystationImages = [
  { image: playstation1, name: "PS 1" },
  { image: playstation2, name: "PS 2" },
  { image: playstation3, name: "PS 3" },
];

const BadmintonImages = [
  {
    image: badminton1,
    name: "Court 1",
  },
  {
    image: badminton2,
    name: "Court 2",
  },
  {
    image: badminton3,
    name: "Court 3",
  },
];

const BoardgameImages = [
  {
    image: boardgames1,
    name: "Chess",
  },
  {
    image: boardgames2,
    name: "Monopoly",
  },
  {
    image: boardgames3,
    name: "Scrabble",
  },
];

type BookingType =
  | "turf"
  | "playstation"
  | "Badminton"
  | "Boardgames"
  | "BowlingMachine"
  | "cricketnet";

interface TableDataItem {
  type: BookingType;
  name: string;
  date: string;
  time: string;
}

const BookingParent: React.FC<{ type: BookingType }> = ({ type }) => {
  const [selectedService, setSelectedService] = useState("");
  const [tableData, setTableData] = useState<TableDataItem[]>(() => {
    const storedTableData = JSON.parse(
      localStorage.getItem("bookings") || "[]"
    );
    return storedTableData;
  });

  const images =
    type === "turf"
      ? TurfImages
      : type === "playstation"
      ? PlaystationImages
      : type === "Badminton"
      ? BadmintonImages
      : type === "Boardgames"
      ? BoardgameImages
      : type === "BowlingMachine"
      ? [{ image: bowling, name: "Bowling Machine" }]
      : type === "cricketnet"
      ? [{ image: cricketnet, name: "Cricket Net" }]
      : [];

  const handleServiceSelection = (serviceName: string) => {
    setSelectedService(serviceName);
    setTableData((prevTableData) => [
      ...prevTableData,
      // { type, name: serviceName, date: "", time: "" },
    ]);
  };

  const handleRemoveItem = (indexToRemove: number) => {
    const updatedTableData = tableData.filter(
      (_, index) => index !== indexToRemove
    );
    setTableData(updatedTableData);
  };

  const handleAddMoreItems = () => {
    if (selectedService) {
      const selectedDate = "29 Feb 2024";
      const selectedTime = "9.00AM-11.00AM";

      setTableData((prevTableData) => [
        ...prevTableData,
        {
          type,
          name: selectedService,
          date: selectedDate,
          time: selectedTime,
        },
      ]);
    }
  };
  const navigate = useNavigate();

  const handleProceedToPayment = () => {
    navigate("/payment-booking", { state: { allBookings } });

    console.log("Proceeding to Payment with allBookings:", allBookings);
  };

  useEffect(() => {
    localStorage.setItem("bookings", JSON.stringify(tableData));
  }, [tableData]);

  const allBookings = tableData.filter(
    (item) =>
      item.type === "turf" ||
      item.type === "playstation" ||
      item.type === "Badminton" ||
      item.type === "Boardgames" ||
      item.type === "BowlingMachine" ||
      item.type === "cricketnet"
  );

  const breadcrumbs = [
    <Typography
      fontSize={"16px"}
      fontWeight={"bold"}
      style={{ cursor: "pointer" }}
      key="1"
      color={Colors.BLACK}
    >
      Service
    </Typography>,
    <Typography
      fontSize={"16px"}
      fontWeight={"bold"}
      style={{ cursor: "pointer" }}
      key="2"
      color={Colors.BUTTON}
    >
      Date & Time
    </Typography>,
    <Typography
      fontSize={"16px"}
      fontWeight={"bold"}
      style={{ cursor: "pointer" }}
      key="3"
    >
      Payment
    </Typography>,
  ];

  return (
    <>
      <Stack
        marginRight={{ xs: "0px", sm: "0px", md: "0px", lg: "120px" }}
        marginTop={"50px"}
        spacing={2}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>
      <Box
        display={"flex"}
        flexDirection={{ xs: "column", sm: "column", ms: "column", lg: "row" }}
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
            display={{ xs: "flex", sm: "flex", md: "flex", lg: "" }}
            alignItems={{ xs: "center", sm: "cemter", md: "center", lg: "" }}
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
                type === "turf"
                  ? turf
                  : type === "playstation"
                  ? playstation
                  : type === "Badminton"
                  ? badminton
                  : type === "Boardgames"
                  ? boardgames
                  : type === "BowlingMachine"
                  ? bowling
                  : type === "cricketnet"
                  ? cricketnet
                  : undefined // Handle other cases or set to undefined
              }
              width={"100%"}
              height={"100%"}
              alt="booking"
            />
            <Typography
              display={{ xs: "block", sm: "block", md: "block", lg: "none" }}
              textAlign={"center"}
              fontSize={"14px"}
              color={Colors.BLACK}
              fontWeight={"600"}
              paddingLeft={{ xs: "30px", sm: "30px", md: "30px", lg: "0px" }}
            >
              {type === "turf"
                ? "Turf"
                : type === "playstation"
                ? "Playstation"
                : type === "Badminton"
                ? "Badminton"
                : type === "Boardgames"
                ? "Board Games"
                : type === "BowlingMachine"
                ? "Bowling Machine"
                : "Unknown Type"}
            </Typography>
          </Box>
        </Box>
        <Stack
          display={
            type === "BowlingMachine" || type === "cricketnet" ? "none" : "flex"
          }
          borderLeft={"1px solid #D9D9D9"}
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
            fontSize={"14px"}
            color={Colors.BLACK}
            fontWeight={"500"}
          >
            Choose{" "}
            {type === "turf"
              ? "Turf"
              : type === "playstation"
              ? "Playstation"
              : type === "Badminton"
              ? "Badminton"
              : type === "Boardgames"
              ? "Board Games"
              : "Unknown Type"}{" "}
            {/* Handle other cases */}
          </Typography>
          {images.map((item) => (
            <Box
              display={selectedService ? "none" : "block"}
              key={item.name}
              sx={{
                ":hover": {
                  backgroundColor: "#A1EBFF",
                },
              }}
              border={"1px solid #D9D9D9"}
              width={"100%"}
              maxWidth={{ xs: "215px", sm: "215px", md: "215px", lg: "200px" }}
              borderRadius={{ xs: "17px", sm: "17px", md: "17px", lg: "10px" }}
              height={"105px"}
              onClick={() => handleServiceSelection(item.name)}
            >
              <Box
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
                    type === "turf"
                      ? "Turf"
                      : type === "playstation"
                      ? "Playstation"
                      : type === "Badminton"
                      ? "Badminton"
                      : type === "Boardgames"
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
              border={"1px solid #D9D9D9"}
              width={"100%"}
              maxWidth={{ xs: "220px", sm: "220px", md: "220px", lg: "290px" }}
              borderRadius={{ xs: "17px", sm: "17px", md: "17px", lg: "10px" }}
              height={{ xs: "105px", sm: "105px", md: "105px", lg: "155px" }}
              marginTop={{ xs: "-40px", sm: "-40px", md: "-40px", lg: "24px" }}
            >
              <Box
                display={"flex"}
                gap={"16px"}
                alignItems={"center"}
                padding={"14px 12px"}
              >
                <StyledImage
                  src={
                    images.find((item) => item.name === selectedService)?.image
                  }
                  alt={`selected ${
                    type === "turf"
                      ? "Turf"
                      : type === "playstation"
                      ? "Playstation"
                      : type === "Badminton"
                      ? "Badminton"
                      : type === "Boardgames"
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
        <Stack borderLeft={selectedService ? "1px solid #D9D9D9" : "none"}>
          {(type === "BowlingMachine" ||
            type === "cricketnet" ||
            selectedService) && (
            <Box
              borderLeft={
                type === "BowlingMachine" || type === "cricketnet"
                  ? "1px solid #D9D9D9"
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
      <Box pt={2}>
        {(type === "BowlingMachine" ||
          type === "cricketnet" ||
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
              style={{
                margin: "auto",
                display: "block",
                marginTop: "2rem",
                background: Colors.BUTTON_COLOR,
                color: "white",
              }}
              onClick={handleProceedToPayment}
            >
              Proceed to Payment
            </Button>
          </>
        )}
      </Box>
      <Box display={"flex"} justifyContent={"end"}>
        <img src={ball} width={"150px"} alt="" />
      </Box>
      <img style={{ marginTop: "-40px" }} src={grass} alt="" />
    </>
  );
};

export default BookingParent;
