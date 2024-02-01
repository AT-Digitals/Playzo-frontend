import { Box, Breadcrumbs, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import Colors from "../CommonComponents/Colors";
import CustomDateCalendar from "../CommonComponents/CustomDateCalender/CustomDateCalender";
import CustomTable from "../CommonComponents/CustomDateCalender/CustomTable";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ball from "../assets/ball 4.png";
import bowling from "../assets/Image (2).png";
import grass from "../assets/Rectangle 679.png";

// const BowlingmachineImages = [
//   {
//     image: bowling,
//     name: "Ball 1",
//   },
//   {
//     image: bowling,
//     name: "Ball 2",
//   },
//   {
//     image: bowling,
//     name: "Ball 3",
//   },
// ];

interface TableDataItem {
  date: string;
  time: string;
}

export default function BowlingmachineBooking() {
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
      color={Colors.BLACK}
      onClick={() => handleBreadcrumbClick("1")}
    >
      Service
    </Typography>,
    <Typography
      fontSize={"16px"}
      fontWeight={"bold"}
      style={{ cursor: "pointer" }}
      key="2"
      color={Colors.BUTTON}
      onClick={() => handleBreadcrumbClick("2")}
    >
      Date & Time
    </Typography>,
    <Typography
      fontSize={"16px"}
      fontWeight={"bold"}
      style={{ cursor: "pointer" }}
      key="3"
      color={selectedBreadcrumb === "3" ? Colors.BUTTON : Colors.BLACK}
      onClick={() => handleBreadcrumbClick("3")}
    >
      Payment
    </Typography>,
  ];

  // const [seletedBowling, setSelectedBowling] = useState("");
  const [tableData, setTableData] = useState<TableDataItem[]>(() => {
    // Retrieve tableData from local storage or use an empty array
    const storedTableData = JSON.parse(localStorage.getItem("bowling") || "[]");
    return storedTableData;
  });

  // const handleBowlingselection = (playstationName: any) => {
  //   setSelectedBowling(playstationName);
  //   setSelectedBreadcrumb("2");
  // };

  const handleRemoveItem = (indexToRemove: any) => {
    const updatedTableData = tableData.filter(
      (_, index) => index !== indexToRemove
    );
    setTableData(updatedTableData);
  };

  useEffect(() => {
    localStorage.setItem("bowling", JSON.stringify(tableData));
  }, [tableData]);

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
          lg: "30px 165px",
        }}
        pt={2}
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
            <img src={bowling} width={"100%"} height={"100%"} alt="turf" />
            <Typography
              display={{ xs: "block", sm: "block", md: "block", lg: "none" }}
              textAlign={"center"}
              fontSize={"14px"}
              color={Colors.BLACK}
              fontWeight={"600"}
              paddingLeft={{ xs: "30px", sm: "30px", md: "30px", lg: "0px" }}
            >
              Bowling Machine
            </Typography>
          </Box>
        </Box>

        {/* <Stack
          borderLeft={"1px solid #D9D9D9"}
          gap={"8px"}
          padding={"40px 37px"}
          flexDirection={"column"}
        >
          <Typography
            display={seletedBowling ? "none" : "block"}
            fontSize={"14px"}
            color={Colors.BLACK}
            fontWeight={"500"}
          >
            Choose Turf
          </Typography>
          {BowlingmachineImages.map((item) => (
            <Box
              display={seletedBowling ? "none" : "block"}
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
              onClick={() => handleBowlingselection(item.name)}
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
          {seletedBowling && (
            <Box
              border={"1px solid #D9D9D9"}
              width={"100%"}
              maxWidth={"290px"}
              borderRadius={"10px"}
              height={"155px"}
              marginTop={3}
            >
              {/* Render the selected turf */}
        {/* <Box
                display={"flex"}
                gap={"16px"}
                alignItems={"center"}
                padding={"14px 12px"}
              >
                <img
                  src={
                    BowlingmachineImages.find(
                      (item) => item.name === seletedBowling
                    )?.image
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
                  {seletedBowling}
                </Typography>
              </Box>
            </Box>
          )}
        </Stack>  */}

        <Stack borderLeft={"1px solid #D9D9D9"}>
          {/* {seletedBowling && ( */}
          <>
            <CustomDateCalendar
              tableData={tableData}
              setTableData={setTableData}
            />{" "}
          </>
          {/* )} */}
        </Stack>
      </Box>
      <Box pt={2}>
        {/* {seletedBowling && ( */}
        <>
          <CustomTable
            tableData={tableData}
            handleRemoveItem={handleRemoveItem}
            serviceName={"Turf 1 & 2"}
            serviceType={undefined}
            setTableData={setTableData}
          />
        </>
        {/* )} */}
      </Box>
      <Box display={"flex"} justifyContent={"end"}>
        <img src={ball} width={"150px"} alt="" />
      </Box>
      <img style={{ marginTop: "-40px" }} src={grass} alt="" />
    </>
  );
}
