import { Box, Breadcrumbs, Stack, Typography } from "@mui/material";
import { useState } from "react";
import Colors from "../CommonComponents/Colors";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ball from "../assets/ball 4.png";
import grass from "../assets/Rectangle 679.png";
import badminton from "../assets/Image (7).png";
import badminton1 from "../assets/Rectangle 685 (3).png";
import badminton2 from "../assets/Rectangle 685 (4).png";
import badminton3 from "../assets/Rectangle 685 (5).png";
import { Link } from "react-router-dom";
import routes from "../routes/routes";

const BadmintonImages = [
    {
        image: badminton1,
        name: "Court 1"
    },
    {
        image: badminton2,
        name: "Court 2"
    },
    {
        image: badminton3,
        name: "Court 3"
    },
]

export default function BadmintonBooking() {
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
      <Box display={"flex"} margin={{xs: "0px", sm: "0px", md: "0px", lg: "30px 190px"}}>
      <Box margin={"60px 50px"} border={"1px solid #D9D9D9"} width={"100%"} maxWidth={"200px"} borderRadius={"10px"} height={"227px"}>
      <Box padding={"20px 20px"}>
      <img src={badminton} width={"160px"} height={"160px"} alt="turf" />
      <Typography textAlign={"center"} fontSize={"14px"} color={Colors.BLACK} fontWeight={"600"}>Badminton</Typography>
      </Box>
      </Box>
      <Stack borderLeft={"1px solid #D9D9D9"} width={"100%"} gap={"8px"} padding={"40px 37px"} flexDirection={"column"}>
      <Typography fontSize={"14px"} color={Colors.BLACK} fontWeight={"500"}>Choose Court</Typography>
      {BadmintonImages.map((item) => (
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