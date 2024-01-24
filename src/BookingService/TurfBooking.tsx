import { Box, Breadcrumbs, Stack, Typography } from "@mui/material";

import Colors from "../CommonComponents/Colors";
import CustomDateCalendar from "../CommonComponents/CustomDateCalender/CustomDateCalender";
import CustomTable from "../CommonComponents/CustomDateCalender/CustomTable";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import React from "react";
import ball from "../assets/ball 4.png";
import grass from "../assets/Rectangle 679.png";
import turf from "../assets/turf.png";
import { useState } from "react";

const TurfImages = [
  {
    image: turf,
    name: "Turf 1",
  },
  {
    image: turf,
    name: "Turf 2",
  },
  {
    image: turf,
    name: "Turf 3",
  },
];

interface TableDataItem {
  date: string;
  time: string;
}
export default function TurfBooking() {
  const [selectedBreadcrumb, setSelectedBreadcrumb] = useState("1");
  const [selectedTurf, setSelectedTurf] = useState(""); // Added state to track selected turf

  // Function to handle breadcrumb selection
  // const handleBreadcrumbClick = (breadcrumbKey: any) => {
  //   setSelectedBreadcrumb(breadcrumbKey);
  // };

  const handleTurfSelection = (turfName: string) => {
    setSelectedTurf(turfName);
    setSelectedBreadcrumb("2"); // Move to the next step (Date & Time) after turf selection
  };

  const breadcrumbs = [
    <Typography
      fontSize={"16px"}
      fontWeight={"bold"}
      style={{ cursor: "pointer" }}
      key="1"
      color={selectedBreadcrumb === "1" ? Colors.BUTTON : Colors.BLACK}
      // onClick={() => handleBreadcrumbClick("1")}
    >
      Service
    </Typography>,
    <Typography
      fontSize={"16px"}
      fontWeight={"bold"}
      style={{ cursor: "pointer" }}
      key="2"
      color={selectedBreadcrumb === "2" ? Colors.BUTTON : Colors.BLACK}
      // onClick={() => handleBreadcrumbClick("2")}
    >
      Date & Time
    </Typography>,
    <Typography
      fontSize={"16px"}
      fontWeight={"bold"}
      style={{ cursor: "pointer" }}
      key="3"
      color={selectedBreadcrumb === "3" ? Colors.BUTTON : Colors.BLACK}
      // onClick={() => handleBreadcrumbClick("3")}
    >
      Payment
    </Typography>,
  ];

  const [tableData, setTableData] = React.useState<TableDataItem[]>([]);

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
          lg: selectedTurf ? "30px auto" : "30px 110px",
        }}
      >
        <Box
          margin={"60px 50px"}
          border={selectedTurf ? "1px solid #D9D9D9" : "none"}
          width={"100%"}
          maxWidth={"300px"}
          borderRadius={"10px"}
          height={"300px"}
        >
          <Box padding={"20px 20px"}>
            <img src={turf} width={"100%"} height={"100%"} alt="turf" />
            <Typography
              display={selectedTurf ? "block" : "none"}
              textAlign={"center"}
              fontSize={"14px"}
              color={Colors.BLACK}
              fontWeight={"600"}
            >
              Turf
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
            display={selectedTurf ? "none" : "block"}
            fontSize={"14px"}
            color={Colors.BLACK}
            fontWeight={"500"}
          >
            Choose Turf
          </Typography>
          {TurfImages.map((item) => (
            <Box
              display={selectedTurf ? "none" : "block"}
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
              onClick={() => handleTurfSelection(item.name)}
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
          {selectedTurf && (
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
                    TurfImages.find((item) => item.name === selectedTurf)?.image
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
                  {selectedTurf}
                </Typography>
              </Box>
            </Box>
          )}
        </Stack>
        <Stack borderLeft={selectedTurf ? "1px solid #D9D9D9" : "none"}>
          {selectedTurf && (
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
        {selectedTurf && (
          <>
            <CustomTable
              tableData={tableData}
              handleRemoveItem={handleRemoveItem}
              serviceName={selectedTurf}
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
