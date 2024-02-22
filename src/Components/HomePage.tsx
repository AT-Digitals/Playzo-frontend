import {
  Box,
  Button,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import Badminton from "../assets/pexels-ben-muk-5488874 (1).jpg";
import CardComponent from "./CardComponent";
import CarouselComponent from "./CarouselComponent";
import Colors from "../CommonComponents/Colors";
import Image3 from "../assets/pexels-guduru-ajay-bhargav-863988.jpg";
import Image4 from "../assets/pexels-pixabay-209977.jpg";
import Image5 from "../assets/pexels-pixabay-46798.jpg";
import boardGames from "../assets/pexels-pixabay-269630.jpg";
import playstation from "../assets/pexels-vazhnik-7864443.jpg";
import turf from "../assets/pexels-thiago-kai-9381737.jpg";
import EastIcon from '@mui/icons-material/East';
import videoFile from "../assets/playzo.mp4";
import { Link } from "react-router-dom";
import routes from "../routes/routes";
import logo from "../assets/Playzo.png";
import insta from "../assets/instagram-ico.png";
import pic1 from "../assets/278453372_302010395428882_1782198866577334663_n.jpg";
import pic2 from "../assets/292237898_605074144217428_6740391706468899652_n.jpg";
import pic3 from "../assets/296017376_1229442621218307_3144906300765873571_n.jpg";
import pic4 from "../assets/307209848_504498594836255_6289868240102465405_n.jpg";

const images = [Image3, Image4, Image5]; // List of images to loop through
const intervalTime = 5000; // Interval time in milliseconds

export default function HomePage() {
  const [showText, setShowText] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowText(true);
    }, 1000);

    const timer2 = setTimeout(() => {
      // Set showText to true for the second timer
      setInitialLoad(false); // Move this line here to set initialLoad to false after animation
    }, 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  useEffect(() => {
    if (!initialLoad) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, intervalTime);

      return () => clearInterval(interval);
    }
  }, [initialLoad]);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <Box width="100%">
      <video width="100%" autoPlay loop muted controls={false}>
        <source src={videoFile} type="video/mp4" />
      </video>
      <Box sx={{ backgroundColor: "#f0f0f0" }}>
        <Stack  pt={"60px"}>
       <Box
              width={"24%"}
              border={`2px solid ${Colors.BUTTON_COLOR}`}
              marginLeft={"59px"}
              marginBottom={"10px"}
            ></Box>
        <Typography
          fontSize={"42px"}
          marginLeft={"50px"}
          fontWeight={"600"}
          color={Colors.BLACK}
          fontStyle={"italic"}
          textTransform={"uppercase"}
        >
          Our Services
        </Typography>
        <Box
          width="100%"
          maxWidth={1200}
          paddingTop={"20px"}
          pb={"20px"}
        >
          {/* <StyledImage src={Layer2} alt="Layer2" /> */}
          <Typography
            variant="h2"
            color={Colors.BLACK}
            fontSize={{ xs: "18px", sm: "18px", md: "18px", lg: "20px" }}
            fontWeight={400}
            width={{ xs: "300px", sm: "300px", md: "300px", lg: "850px" }}
            marginLeft={"57px"}
            sx={{ fontFamily: "Inter" }}
          >
            We offer a diverse range of{" "}
            <Link to={routes.SERVICE} style={{textDecoration: "none"}}>
            <span style={{ color: Colors.BUTTON_COLOR }}>services</span></Link> to
            cater to the varied interests of our community.
          </Typography>
          
        </Box>
        </Stack>
        <Grid
          container
          width="100%"
          maxWidth={1480}
          margin="0 auto"
          spacing={3}
          flexDirection={{
            xs: "column",
            sm: "column",
            md: "column",
            lg: "row",
          }}
        >
          <Grid item xs={3}>
            <CardComponent
              buttonLabel="Know more"
              title={"Turf"}
              description={
                "Kick off your sports adventure on our two top-notch turfs, perfect for football, and a cricket selection for your sports."
              }
              image={turf}
            />
          </Grid>
          <Grid item xs={3}>
            <CardComponent
              buttonLabel="Know more"
              title={"Play Station"}
              description={
                "Immerse yourself in the ultimate gaming experience with the latest consoles and a wide game selection for your sports."
              }
              image={playstation}
            />
          </Grid>
          <Grid item xs={3}>
            <CardComponent
              buttonLabel="Know more"
              title={"Board Games"}
              description={
                "Explore timeless and modern board games, fostering laughter and friendly competition for a delightful time for your sports."
              }
              image={boardGames}
            />
          </Grid>
          <Grid item xs={3}>
            <CardComponent
              buttonLabel="Know more"
              title={"Badminton"}
              description={
                "Ace every shot on our professional Badminton courts, where passion meets a wide game and precision for your sports."
              }
              image={Badminton}
            />
          </Grid>
        </Grid>
        <Box
          width="100%"
          maxWidth={1470}
          margin="0 auto"
          pb={{ xs: "32px", sm: "32px", md: "32px", lg: "50px" }}
          pt={{ xs: "32px", sm: "32px", md: "32px", lg: "50px" }}
        >
          <Stack
            marginRight={{ xs: "25px", sm: "25px", md: "25px", lg: "0px" }}
            direction="row"
            justifyContent="end"
            alignItems="center"
            gap="20px"
          >
            <Button
              sx={{
                
                color: Colors.BUTTON_COLOR,
                textTransform: "capitalize",
                border: "1px solid #15B5FC",
                padding: "10px 10px",
                borderRadius: "30px",
                fontSize: "14px",
                fontWeight: "400",
                ":hover": {
                  background: Colors.BUTTON_COLOR,
                  color: Colors.WHITE,
                },
              }} variant="outlined"
            > 
              see more services
            </Button>
            <EastIcon style={{
              color: Colors.BUTTON_COLOR,
              fontSize: "34px",
            }} />
          </Stack>
        </Box>
      </Box>
      <CarouselComponent />
      <Box width="100%" maxWidth={1480} paddingY={4}>
        <Box display={"flex"} justifyContent={"center"}>
      <img src={logo} width={340} height={100} alt="22" />
      </Box>
      <Typography fontSize={"54px"}
          fontWeight={"600"}
          color={Colors.BLACK}
          textAlign={"center"}
          fontStyle={"italic"}
          textTransform={"uppercase"}>@INSTA FEEDS</Typography>
          <Box
              width={"9%"}
              border={`2px solid ${Colors.BUTTON_COLOR}`}
              margin={"auto"}
            ></Box>
            <Typography pt={"15px"} textAlign={"center"} fontSize={"20px"} fontWeight={"400"} color={Colors.BLACK}>Relentless is more than a brand</Typography>
             <Box mt={"20px"} display={"flex"} justifyContent={"center"}>
             <Link to={"https://www.instagram.com/"}>
            <img src={insta} width={"70px"} height={"70px"} alt="22" />
            </Link>
            </Box>
            <Grid
          container
          width="100%"
          maxWidth={1460}
          margin="0 auto"
          spacing={3}
          paddingTop={"20px"}
          flexDirection={{
            xs: "column",
            sm: "column",
            md: "column",
            lg: "row",
          }}
        >
          <Grid item xs={3}>
            <Link to={"https://www.instagram.com/p/CcZ6CBzJoOD/?igsh=MWFjOGltaWJ5NXBraA%3D%3D"}>
            <img style={{borderRadius: "10px"}} src={pic1} width={"345px"} height={"345px"} alt="" />
            </Link>
          </Grid>
          <Grid item xs={3}>
          <Link to={"https://www.instagram.com/p/CfwI533r_-c/?igsh=MTFjbnIxcjY0bmZ1dw%3D%3D"}>
            <img style={{borderRadius: "10px"}} src={pic2} width={"345px"} height={"345px"} alt="" />
            </Link>
          </Grid>
          <Grid item xs={3}>
          <Link to={"https://www.instagram.com/p/Cgln7h6JH7Y/?igsh=MWZrMDg2cncxYXV2dg%3D%3D"}>
            <img style={{borderRadius: "10px"}} src={pic3} width={"345px"} height={"345px"} alt="" />
            </Link>
          </Grid>
          <Grid item xs={3}>
          <Link to={"https://www.instagram.com/p/CimdLmRJBfn/?igsh=MXBtem1iNm15cmhxZg%3D%3D"}>
            <img style={{borderRadius: "10px"}} src={pic4} width={"345px"} height={"345px"} alt="" />
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}