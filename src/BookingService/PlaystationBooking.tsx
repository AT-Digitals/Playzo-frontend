import { Box, Breadcrumbs, Stack, Typography } from "@mui/material";
import { useState } from "react";
import Colors from "../CommonComponents/Colors";
import playstation from "../assets/playstation.png"
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ball from "../assets/ball 4.png";
import grass from "../assets/Rectangle 679.png";
import playstation1 from "../assets/Rectangle 685.png";
import playstation2 from "../assets/Rectangle 685 (1).png";
import playstation3 from "../assets/Rectangle 685 (2).png";
import { Link } from "react-router-dom";
import routes from "../routes/routes";

const PlaystationImages = [
    {
        image: playstation1,
        name: "PS 1"
    },
    {
        image: playstation2,
        name: "PS 2"
    },
    {
        image: playstation3,
        name: "PS 3"
    },
]

export default function PlaystationBooking() {
    const [selectedBreadcrumb, setSelectedBreadcrumb] = useState("1");

    // Function to handle breadcrumb selection
    const handleBreadcrumbClick = (breadcrumbKey: any) => {
      setSelectedBreadcrumb(breadcrumbKey);
    };
      const breadcrumbs = [
          <Typography fontSize={"16px"} fontWeight={"bold"} style={{cursor: "pointer"}} key="1" color={selectedBreadcrumb === '1' ? Colors.BUTTON : Colors.BLACK}onClick={() => handleBreadcrumbClick('1')}>
          Service
          </Typography>,
          <Typography fontSize={"16px"} fontWeight={"bold"} style={{cursor: "pointer"}}
            key="2"
            color={selectedBreadcrumb === '2' ? Colors.BUTTON : Colors.BLACK}onClick={() => handleBreadcrumbClick('2')}
          >
          Date & Time
          </Typography>,
            <Link style={{textDecoration: "none"}} to={routes.PAYMENT_BOOKING}>
          <Typography fontSize={"16px"} fontWeight={"bold"} style={{cursor: "pointer"}} key="3" color={selectedBreadcrumb === '3' ? Colors.BUTTON : Colors.BLACK}onClick={() => handleBreadcrumbClick('3')}>
          Payment
          </Typography>
          </Link>
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
      <Box display={"flex"} margin={{xs: "0px", sm: "0px", md: "0px", lg: "30px 110px"}}>
      <Box margin={"60px 50px"} border={"1px solid #D9D9D9"} width={"100%"} maxWidth={"170px"} borderRadius={"10px"} height={"195px"}>
      <Box padding={"20px 20px"}>
      <img src={playstation} width={"130px"} height={"130px"} alt="turf" />
      <Typography textAlign={"center"} fontSize={"14px"} color={Colors.BLACK} fontWeight={"600"}>Playstation</Typography>
      </Box>
      </Box>
      <Stack borderLeft={"1px solid #D9D9D9"} width={"100%"} gap={"8px"} padding={"40px 37px"} flexDirection={"column"}>
      <Typography fontSize={"14px"} color={Colors.BLACK} fontWeight={"500"}>Choose play station</Typography>
      {PlaystationImages.map((item) => (
      <Box sx={{
        ":hover": {
         backgroundColor: "#A1EBFF",
        }
      }} border={"1px solid #D9D9D9"} width={"100%"} maxWidth={"200px"} borderRadius={"10px"} height={"105px"}>
      <Box display={"flex"} gap={"16px"} alignItems={"center"} padding={"14px 12px"}>
      <img src={item.image} width={"95px"} height={"75px"} alt="turf" />
      <Typography fontSize={"14px"} color={Colors.BLACK} fontWeight={"600"}>{item.name}</Typography>
      </Box>
      </Box>
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