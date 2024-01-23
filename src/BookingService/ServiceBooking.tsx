import { Box, Breadcrumbs, Stack, Typography } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Colors from "../CommonComponents/Colors";
import turf from "../assets/turf.png";
import playstation from "../assets/playstation.png";
import boardgames from "../assets/board games.png";
import badminton from "../assets/Image (7).png";
import cricketnet from "../assets/Image (1).png";
import bowling from "../assets/Image (2).png";
import ball from "../assets/ball 4.png";
import grass from "../assets/Rectangle 679.png";
import { SetStateAction, useState } from "react";
import routes from "../routes/routes";
import { Link } from "react-router-dom";


const TurfDetails = [
    {
        image: turf,
        name: "Turf",
        link: routes.TURF_BOOKING
    },
    {
        image: playstation,
        name: "Play station",
        link: routes.PLAYSTATION_BOOKING
    }
];
const BoardDetails = [
    {
        image: badminton,
        name: "Badminton",
        link: routes.BADMINTON_BOOKING
    },
    {
        image: boardgames,
        name: "Board Games",
        link: routes.BOARDGAME_BOOKING
    }
];
const CricketDetails = [
    {
        image: cricketnet,
        name: "Cricket Net",
        link: routes.CRICKETNET_BOOKING
    },
    {
        image: bowling,
        name: "Bowling Machine",
        link: routes.BOWLINGMACHINE_BOOKING
    }
]

export default function ServiceBooking() {
    const [selectedBreadcrumb, setSelectedBreadcrumb] = useState("1");

  // Function to handle breadcrumb selection
  const handleBreadcrumbClick = (breadcrumbKey: any) => {
    setSelectedBreadcrumb(breadcrumbKey);
  };
    const breadcrumbs = [
        <Typography fontSize={"16px"} fontWeight={"bold"} style={{cursor: "pointer"}} key="1" color={selectedBreadcrumb === '1' ? Colors.BUTTON : Colors.BLACK}onClick={() => handleBreadcrumbClick('1')}>
        Service
        </Typography>,
        <Typography fontSize={"16px"} fontWeight={"bold"} style={{cursor: "pointer"}} key="2" color={selectedBreadcrumb === '2' ? Colors.BUTTON : Colors.BLACK}onClick={() => handleBreadcrumbClick('2')}>
        Date & Time
        </Typography>,
        <Typography fontSize={"16px"} fontWeight={"bold"} style={{cursor: "pointer"}} key="3" color={selectedBreadcrumb === '3' ? Colors.BUTTON : Colors.BLACK}onClick={() => handleBreadcrumbClick('3')}>
        Payment
        </Typography>,
      ];

    return (
        <>
        <Stack marginRight={{xs: "0px", sm: "0px", md: "0px", lg: "120px"}} marginTop={"50px"} spacing={2} justifyContent={"center"} alignItems={"center"}>
         <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
      </Stack>
      <Box margin={{xs: "50px 50px", sm: "50px 50px", md: "50px 50px", lg: "50px 170px"}} width={"100%"} maxWidth={"290px"} borderRight={"1px solid #D9D9D9"}>
      <Typography fontSize={"14px"} paddingBottom={"7px"} color={Colors.BLACK}>Pick a service</Typography>
      <Stack alignItems={"baseline"} gap={"9px"} flexDirection={"row"}>
      {TurfDetails.map((item) => (
        <Link style={{textDecoration: "none"}} to={item.link}>
      <Box sx={{
        ":hover": {
         backgroundColor: "#A1EBFF",
        }
      }} width={"100%"} borderRadius={"10px"} maxWidth={"124px"} height={"135px"} border={"1px solid #D9D9D9"}>
      <Box padding={"12px 12px"}>
      <img src={item.image} width={"100px"} alt="turf" />
      <Typography fontSize={"12px"} fontWeight={"600"} textAlign={"center"} color={Colors.BLACK}>{item.name}</Typography>
      </Box>
      </Box>
      </Link>
      ))}
      </Stack>
      <Stack marginTop={"15px"} alignItems={"baseline"} gap={"9px"} flexDirection={"row"}>
      {BoardDetails.map((item) => (
         <Link style={{textDecoration: "none"}} to={item.link}>
      <Box sx={{
        ":hover": {
         backgroundColor: "#A1EBFF",
        }
      }} width={"100%"} borderRadius={"10px"} maxWidth={"124px"} height={"135px"} border={"1px solid #D9D9D9"}>
      <Box padding={"12px 12px"}>
      <img src={item.image} width={"100px"} height={"90px"} alt="board" />
      <Typography fontSize={"12px"} fontWeight={"600"} textAlign={"center"} color={Colors.BLACK}>{item.name}</Typography>
      </Box>
      </Box>
      </Link>
      ))}
      </Stack>
      <Stack marginTop={"15px"} alignItems={"baseline"} gap={"9px"} flexDirection={"row"}>
      {CricketDetails.map((item) => (
        <Link style={{textDecoration: "none"}} to={item.link}>
      <Box sx={{
        ":hover": {
         backgroundColor: "#A1EBFF",
        }
      }} width={"100%"} borderRadius={"10px"} maxWidth={"124px"} height={"135px"} border={"1px solid #D9D9D9"}>
      <Box padding={"12px 12px"}>
      <img src={item.image} width={"100px"} alt="cricket" />
      <Typography fontSize={"12px"} fontWeight={"600"} textAlign={"center"} color={Colors.BLACK}>{item.name}</Typography>
      </Box>
      </Box>
      </Link>
      ))}
      </Stack>
      </Box>
      <Box display={"flex"} justifyContent={"end"}>
      <img src={ball} width={"150px"} alt="" />
      </Box>
      <img style={{marginTop: "-40px"}} src={grass} alt="" />
        </>
    )
}