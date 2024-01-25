import { Box, Breadcrumbs, Stack, Typography } from "@mui/material";

import Colors from "../CommonComponents/Colors";
import CustomDateCalendar from "../CommonComponents/CustomDateCalender/CustomDateCalender";
import CustomTable from "../CommonComponents/CustomDateCalender/CustomTable";
import { Link } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ball from "../assets/ball 4.png";
import cricketnet from "../assets/Image (1).png";
import grass from "../assets/Rectangle 679.png";
import routes from "../routes/routes";
import { useState } from "react";

// const CricketnetImages = [
//   {
//     image: cricketnet,
//     name: "Cricket 1",
//   },
//   {
//     image: cricketnet,
//     name: "Cricket 2",
//   },
//   {
//     image: cricketnet,
//     name: "Cricket 3",
//   },
// ];

export default function CricketnetBooking() {
  const [selectedBreadcrumb, setSelectedBreadcrumb] = useState("1");

  // Function to handle breadcrumb selection
  const handleBreadcrumbClick = (breadcrumbKey: any) => {
    setSelectedBreadcrumb(breadcrumbKey);
  };

  // const [selectedCricket, setSelectedCricket] = useState("");
  const [tableData, setTableData] = useState([]);

  // const handleCricketSelection = (playstationName: any) => {
  //   setSelectedCricket(playstationName);
  //   setSelectedBreadcrumb("2");
  // };

  const handleRemoveItem = (indexToRemove: any) => {
    const updatedTableData = tableData.filter(
      (_, index) => index !== indexToRemove
    );
    setTableData(updatedTableData);
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
        flexDirection={{xs: "column", sm: "column", ms: "column", lg: "row"}}
        margin={{
          xs: "0px",
          sm: "0px",
          md: "0px",
          lg: "30px 165px",
        }}
        pt={3}
      >
        <Box
            margin={{xs: "60px 38px", sm: "60px 38px", md: "60px 38px", lg: "60px 50px"}}
            width={"100%"}
            border={{xs: "1px solid #D9D9D9", sm: "1px solid #D9D9D9", md: "1px solid #D9D9D9", lg: "none"}}
            maxWidth={{xs: "270px", sm: "270px", md: "270px", lg: "300px"}}
            borderRadius={{xs: "17px", sm: "17px", md: "17px", lg: "10px"}}
            height={{xs: "100px", sm: "100px", md: "100px", lg: "300px"}}
        >
          <Box display={{xs: "flex", sm: "flex", md: "flex", lg: ""}} alignItems={{xs: "center", sm: "cemter", md: "center", lg: ""}} padding={{xs: "10px 10px", sm: "10px 10px", md: "10px 10px", lg:"20px 20px"}} width={{xs: "219px", sm: "219px", md: "219px", lg: "260px"}} height={{xs: "80px", sm: "80px", md: "80px", lg: "260px"}}>
            <img src={cricketnet} width={"100%"} height={"100%"} alt="turf" />
            <Typography
               display={{xs: "block", sm: "block", md: "block", lg: "none"}}
              textAlign={"center"}
              fontSize={"14px"}
              color={Colors.BLACK}
              fontWeight={"600"}
              paddingLeft={{xs: "30px", sm: "30px", md: "30px", lg: "0px"}}
            >
              Cricket Net
            </Typography>
          </Box>
        </Box>

        {/* 
        <Stack
          borderLeft={"1px solid #D9D9D9"}
          gap={"8px"}
          padding={"40px 37px"}
          flexDirection={"column"}
        >
          <Typography
            display={selectedCricket ? "none" : "block"}
            fontSize={"14px"}
            color={Colors.BLACK}
            fontWeight={"500"}
          >
            Choose Turf
          </Typography>
          {CricketnetImages.map((item) => (
            <Box
              display={selectedCricket ? "none" : "block"}
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
              onClick={() => handleCricketSelection(item.name)}
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
          {selectedCricket && (
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
                    CricketnetImages.find(
                      (item) => item.name === selectedCricket
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
                  {selectedCricket}
                </Typography>
              </Box>
            </Box>
          )} */}
        {/* </Stack> */}

        <Stack borderLeft={"1px solid #D9D9D9"}>
          <>
            <CustomDateCalendar
              tableData={tableData}
              setTableData={setTableData}
            />{" "}
          </>
        </Stack>
      </Box>
      <Box pt={2}>
        <>
          <CustomTable
            tableData={tableData}
            handleRemoveItem={handleRemoveItem}
            serviceName={"Tirf 1 & 2"}
            serviceType={undefined}
          />
        </>
      </Box>
      <Box display={"flex"} justifyContent={"end"}>
        <img src={ball} width={"150px"} alt="" />
      </Box>
      <img style={{ marginTop: "-40px" }} src={grass} alt="" />
    </>
  );
}
