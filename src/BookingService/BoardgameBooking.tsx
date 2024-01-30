import { Box, Breadcrumbs, Stack, Typography } from "@mui/material";

import Colors from "../CommonComponents/Colors";
import CustomDateCalendar from "../CommonComponents/CustomDateCalender/CustomDateCalender";
import CustomTable from "../CommonComponents/CustomDateCalender/CustomTable";
import { Link } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ball from "../assets/ball 4.png";
import boardgames from "../assets/board games.png";
import boardgames1 from "../assets/Rectangle 685 (11).png";
import boardgames2 from "../assets/Rectangle 685 (12).png";
import boardgames3 from "../assets/Rectangle 685 (9).png";
import grass from "../assets/Rectangle 679.png";
import routes from "../routes/routes";
import { useState } from "react";
import styled from "@emotion/styled";

const StyledImage = styled.img`

  @media (min-width: 300px) {
    /* Extra small devices (phones) */
    width: 100px;
    height: 80px;
  }

  @media (min-width: 768px) {
    /* Small devices (tablets) */
    width: 130px;
    height: 130px;
  }

  @media (min-width: 992px) {
    /* Medium devices (desktops) */
    width: 130px;
    height: 130px;
  }

  @media (min-width: 1200px) {
    /* Large devices (large desktops) */
    width: "145px";
    height "105px";
  }
`;


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

export default function BoardgameBooking() {
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

  const [selectedCBoard, setSelectedBoard] = useState("");
  const [tableData, setTableData] = useState([]);

  const handleBoardSelection = (playstationName: any) => {
    setSelectedBoard(playstationName);
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
        flexDirection={{xs: "column", sm: "column", ms: "column", lg: "row"}}
        margin={{
          xs: "0px",
          sm: "0px",
          md: "0px",
          lg: selectedCBoard ? "30px auto" : "30px 110px",
        }}
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
            <img src={boardgames} width={"100%"} height={"100%"} alt="turf" />
            <Typography
              display={{xs: "block", sm: "block", md: "block", lg: "none"}}
              textAlign={"center"}
              fontSize={"14px"}
              color={Colors.BLACK}
              fontWeight={"600"}
              paddingLeft={{xs: "30px", sm: "30px", md: "30px", lg: "0px"}}
            >
              Board Games
            </Typography>
          </Box>
        </Box>
        <Stack
          borderLeft={"1px solid #D9D9D9"}
          gap={"8px"}
          padding={{xs: "0px 37px", sm: "0px 37px", md: "0px 37px", lg: "40px 37px"}}
          flexDirection={"column"}
        >
          <Typography
            display={selectedCBoard ? "none" : "block"}
            fontSize={"14px"}
            color={Colors.BLACK}
            fontWeight={"500"}
          >
            Choose board games
          </Typography>
          {BoardgameImages.map((item) => (
            <Box
              display={selectedCBoard ? "none" : "block"}
              key={item.name}
              sx={{
                ":hover": {
                  backgroundColor: "#A1EBFF",
                },
              }}
              border={"1px solid #D9D9D9"}
              width={"100%"}
              maxWidth={{xs: "215px", sm: "215px", md: "215px", lg: "200px"}}
              borderRadius={{xs: "17px", sm: "17px", md: "17px", lg: "10px"}}
              height={"105px"}
              onClick={() => handleBoardSelection(item.name)}
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
          {selectedCBoard && (
            <Box
              border={"1px solid #D9D9D9"}
              width={"100%"}
              maxWidth={{xs: "220px", sm: "220px", md: "220px", lg: "290px"}}
              borderRadius={{xs: "17px", sm: "17px", md: "17px", lg: "10px"}}
              height={{xs: "105px", sm: "105px", md: "105px", lg: "155px"}}
              marginTop={{xs: "-40px", sm: "-40px", md: "-40px", lg: "24px"}}
            >
              {/* Render the selected turf */}
              <Box
                display={"flex"}
                gap={"16px"}
                alignItems={"center"}
                padding={"14px 12px"}
              >
                <StyledImage
                  src={
                    BoardgameImages.find((item) => item.name === selectedCBoard)
                      ?.image
                  }
                  alt="selected turf"
                />
                <Typography
                  fontSize={"14px"}
                  color={Colors.BLACK}
                  fontWeight={"600"}
                >
                  {selectedCBoard}
                </Typography>
              </Box>
            </Box>
          )}
        </Stack>
        <Stack borderLeft={selectedCBoard ? "1px solid #D9D9D9" : "none"}>
          {selectedCBoard && (
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
        {selectedCBoard && (
          <>
            <CustomTable
              tableData={tableData}
              handleRemoveItem={handleRemoveItem}
              serviceName={selectedCBoard}
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
