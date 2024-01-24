import { Box, Breadcrumbs, Stack, Typography } from "@mui/material";

import Colors from "../CommonComponents/Colors";
import CustomDateCalendar from "../CommonComponents/CustomDateCalender/CustomDateCalender";
import CustomTable from "../CommonComponents/CustomDateCalender/CustomTable";
import { Link } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import badminton from "../assets/Image (7).png";
import badminton1 from "../assets/Rectangle 685 (3).png";
import badminton2 from "../assets/Rectangle 685 (4).png";
import badminton3 from "../assets/Rectangle 685 (5).png";
import ball from "../assets/ball 4.png";
import grass from "../assets/Rectangle 679.png";
import routes from "../routes/routes";
import { useState } from "react";

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

export default function BadmintonBooking() {
  const [selectedBreadcrumb, setSelectedBreadcrumb] = useState("1");

  // Function to handle breadcrumb selection
  const handleBreadcrumbClick = (breadcrumbKey: any) => {
    setSelectedBreadcrumb(breadcrumbKey);
  };
  const breadcrumbs = [
    <Typography
      fontSize={"16px"}
      fontWeight={"bold"}
      style={{ cursor: "pointer" }}
      key="1"
      color={selectedBreadcrumb === "1" ? Colors.BUTTON : Colors.BLACK}
      onClick={() => handleBreadcrumbClick("1")}
    >
      Service
    </Typography>,
    <Typography
      fontSize={"16px"}
      fontWeight={"bold"}
      style={{ cursor: "pointer" }}
      key="2"
      color={selectedBreadcrumb === "2" ? Colors.BUTTON : Colors.BLACK}
      onClick={() => handleBreadcrumbClick("2")}
    >
      Date & Time
    </Typography>,
    <Link style={{ textDecoration: "none" }} to={routes.PAYMENT_BOOKING}>
      <Typography
        fontSize={"16px"}
        fontWeight={"bold"}
        style={{ cursor: "pointer" }}
        key="3"
        color={selectedBreadcrumb === "3" ? Colors.BUTTON : Colors.BLACK}
        onClick={() => handleBreadcrumbClick("3")}
      >
        Payment
      </Typography>
    </Link>,
  ];

  const [selectedBad, setSelectedBad] = useState("");
  const [tableData, setTableData] = useState([]);

  const handleBadSelection = (playstationName: any) => {
    setSelectedBad(playstationName);
    setSelectedBreadcrumb("2");
  };

  const handleRemoveItem = (indexToRemove: any) => {
    const updatedTableData = tableData.filter(
      (_, index) => index !== indexToRemove
    );
    setTableData(updatedTableData);
  };

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
        margin={{
          xs: "0px",
          sm: "0px",
          md: "0px",
          lg: selectedBad ? "30px auto" : "30px 110px",
        }}
      >
        <Box
          margin={"60px 50px"}
          border={selectedBad ? "1px solid #D9D9D9" : "none"}
          width={"100%"}
          maxWidth={"300px"}
          borderRadius={"10px"}
          height={"300px"}
        >
          <Box padding={"20px 20px"}>
            <img src={badminton} width={"100%"} height={"100%"} alt="turf" />
            <Typography
              display={selectedBad ? "block" : "none"}
              textAlign={"center"}
              fontSize={"14px"}
              color={Colors.BLACK}
              fontWeight={"600"}
            >
              Badminton
            </Typography>
          </Box>
        </Box>
        <Stack
          borderLeft={"1px solid #D9D9D9"}
          gap={"8px"}
          padding={"40px 37px"}
          flexDirection={"column"}
        >
          <Typography
            display={selectedBad ? "none" : "block"}
            fontSize={"14px"}
            color={Colors.BLACK}
            fontWeight={"500"}
          >
            Choose Badminton
          </Typography>
          {BadmintonImages.map((item) => (
            <Box
              display={selectedBad ? "none" : "block"}
              key={item.name}
              sx={{
                ":hover": {
                  backgroundColor: "#A1EBFF",
                },
              }}
              border={"1px solid #D9D9D9"}
              width={"100%"}
              maxWidth={"200px"}
              borderRadius={"10px"}
              height={"105px"}
              onClick={() => handleBadSelection(item.name)}
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
                  alt="turf"
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
          {selectedBad && (
            <Box
              border={"1px solid #D9D9D9"}
              width={"100%"}
              maxWidth={"290px"}
              borderRadius={"10px"}
              height={"155px"}
              marginTop={3}
            >
              {/* Render the selected turf */}
              <Box
                display={"flex"}
                gap={"16px"}
                alignItems={"center"}
                padding={"14px 12px"}
              >
                <img
                  src={
                    BadmintonImages.find((item) => item.name === selectedBad)
                      ?.image
                  }
                  width={"145px"}
                  height={"105px"}
                  alt="selected turf"
                />
                <Typography
                  fontSize={"14px"}
                  color={Colors.BLACK}
                  fontWeight={"600"}
                >
                  {selectedBad}
                </Typography>
              </Box>
            </Box>
          )}
        </Stack>
        <Stack borderLeft={selectedBad ? "1px solid #D9D9D9" : "none"}>
          {selectedBad && (
            <>
              <CustomDateCalendar
                tableData={tableData}
                setTableData={setTableData}
              />{" "}
            </>
          )}
        </Stack>
      </Box>
      <Box pt={2}>
        {selectedBad && (
          <>
            <CustomTable
              tableData={tableData}
              handleRemoveItem={handleRemoveItem}
              serviceName={selectedBad}
              serviceType={undefined}
            />
          </>
        )}
      </Box>
      <Box display={"flex"} justifyContent={"end"}>
        <img src={ball} width={"150px"} alt="" />
      </Box>
      <img style={{ marginTop: "-40px" }} src={grass} alt="" />
    </>
  );
}
