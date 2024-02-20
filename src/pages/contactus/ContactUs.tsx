import {
  Box,
  Button,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import AppContainer from "../../CommonComponents/AppContainer";
import Colors from "../../CommonComponents/Colors";
import CustomButton from "../../CommonComponents/CustomButton";
import CustomTextField from "../../CommonComponents/CustomTextField";
import DropDownComponent from "../../CommonComponents/DropdownComponent";
import EnquiryApi from "../../api/EnquiryApi";
import { Link } from "react-router-dom";
import banner from "./cUS.png";
import styled from "@emotion/styled";
import { useState } from "react";
import ballimage from "../../assets/ball-306073_960_720.webp"
import batimage from "../../assets/5360cd03c5ae030e6ab555508a65f614.jpg"
import shuttleimage from "../../assets/159415.svg"
import tennisimage from "../../assets/tennis-racket-equipment-svg-png-icon-download-32.png"
import playimage from "../../assets/playstation-4-logo-svg-4.png"
import basketimage from "../../assets/basketball-vector-graphics.png"
import { transform } from "typescript";
import ModalComponent from "../../CommonComponents/CustomDateCalender/ModalComponent";

// import GameIcon from "../../assets/doodl-5 1.png";

// import ball from "../../assets/ball 3.png";

// import bottomImage from "../../assets/Rectangle 679.png";

const DropDownData = [
  {
    value: "badminton",
    label: "Badminton",
  },
  {
    value: "crossFit",
    label: "CrossFit",
  },
  {
    value: "turf",
    label: "Turf",
  },
  {
    value: "playstation",
    label: "Play Station",
  },
  {
    value: "boardGame",
    label: "Board Game",
  },
  {
    value: "partycenter",
    label: "Party Center",
  },
  {
    value: "cafeteria",
    label: "Cafeteria",
  },
];


const StyledImage = styled.img`
  position: absolute;
  transform: translate(130px, 30px);
  /* Set a default width or adjust as needed */

  @media (min-width: 300px) {
    /* Extra small devices (phones) */
    width: 130px;
    height: 115px;
  }

  @media (min-width: 768px) {
    /* Small devices (tablets) */
    width: 130px;
    height: 130px;
  }

  @media (min-width: 992px) {
    /* Medium devices (desktops) */
    width: 150px;
    transform: translate(31%, 18%);
  }

   @media (min-width: 1200px) {
    /* Large devices (large desktops) */
    width: 150px;
    transform: translate(31%, 222%);
  }
  `;
const StyledImage1 = styled.img`
  position: absolute;
  transform: translate(130px, 30px);
  /* Set a default width or adjust as needed */

  @media (min-width: 300px) {
    /* Extra small devices (phones) */
    width: 130px;
    height: 115px;
  }

  @media (min-width: 768px) {
    /* Small devices (tablets) */
    width: 130px;
    height: 130px;
  }

  @media (min-width: 992px) {
    /* Medium devices (desktops) */
    width: 150px;
    transform: translate(31%, 18%);
  }

   @media (min-width: 1200px) {
    /* Large devices (large desktops) */
    width: 170px;
    height: 200px;
    transform: translate(14%, 401%);
  }
  `;
const StyledImage2 = styled.img`
  position: absolute;
  transform: translate(130px, 30px);
  /* Set a default width or adjust as needed */

  @media (min-width: 300px) {
    /* Extra small devices (phones) */
    width: 130px;
    height: 115px;
  }

  @media (min-width: 768px) {
    /* Small devices (tablets) */
    width: 130px;
    height: 130px;
  }

  @media (min-width: 992px) {
    /* Medium devices (desktops) */
    width: 150px;
    transform: translate(31%, 18%);
  }

   @media (min-width: 1200px) {
    /* Large devices (large desktops) */
    width: 100px;
    height: 100px;
    transform: rotate(29deg);
    top: 85%;
    left: 43.9%;
  }
  `;
const StyledImage3 = styled.img`
  position: absolute;
  transform: translate(130px, 30px);
  /* Set a default width or adjust as needed */

  @media (min-width: 300px) {
    /* Extra small devices (phones) */
    width: 130px;
    height: 115px;
  }

  @media (min-width: 768px) {
    /* Small devices (tablets) */
    width: 130px;
    height: 130px;
  }

  @media (min-width: 992px) {
    /* Medium devices (desktops) */
    width: 150px;
    transform: translate(31%, 18%);
  }

   @media (min-width: 1200px) {
    /* Large devices (large desktops) */
    width: 150px;
    transform: translate(880%, 688%);
  }
  `;
const StyledImage4 = styled.img`
  position: absolute;
  transform: translate(130px, 30px);
  /* Set a default width or adjust as needed */

  @media (min-width: 300px) {
    /* Extra small devices (phones) */
    width: 130px;
    height: 115px;
  }

  @media (min-width: 768px) {
    /* Small devices (tablets) */
    width: 130px;
    height: 130px;
  }

  @media (min-width: 992px) {
    /* Medium devices (desktops) */
    width: 150px;
    transform: translate(31%, 18%);
  }

   @media (min-width: 1200px) {
    /* Large devices (large desktops) */
   width: 150px;
   left: 86%;
   top: 47%;
   transform: rotate(36deg);
  }
  `;
const StyledImage5 = styled.img`
  position: absolute;
  transform: translate(130px, 30px);
  /* Set a default width or adjust as needed */

  @media (min-width: 300px) {
    /* Extra small devices (phones) */
    width: 130px;
    height: 115px;
  }

  @media (min-width: 768px) {
    /* Small devices (tablets) */
    width: 130px;
    height: 130px;
  }

  @media (min-width: 992px) {
    /* Medium devices (desktops) */
    width: 150px;
    transform: translate(31%, 18%);
  }

   @media (min-width: 1200px) {
    /* Large devices (large desktops) */
   width: 150px;
   left: 25%;
   top: 63%;
   transform: rotate(36deg);
  }
  `;



export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  // const [submitted, setSubmitted] = useState(false); // New state to track form submission

  const successNotification = () => {
    setSuccessMessage(false);
  }

  const errorNotification = () => {
    setErrorMessage(false);
  }

  const handleTypeChange = (event: SelectChangeEvent<string>) => {
    setType(event?.target.value);
  };

  const handleMessageChange = (event: any) => {
    setMessage(event?.target.value);
  };

  const onSubmit = async (event: any) => {
    event?.preventDefault();

    const data = {
      name: name,
      email: email,
      type: type,
      phoneNumber: phoneNumber,
      message: message,
    };
    console.log("data", data);
    try {
      const response = await EnquiryApi.createEnquiry({
        userName: data.name,
        userEmail: data.email,
        enquiryMessage: data.message,
        phoneNumber: data.phoneNumber,
        projectType: data.type,
      });
      if (response) {
        setSuccessMessage(true);
        setName('');
        setEmail('');
        setPhoneNumber('')
        setType('');
        setMessage('');
      }

    } catch (err) {
      setErrorMessage(true)
    }
  };

  // const StyledImage1 = styled.img`
  //   position: relative;
  //   margin: auto;
  //   display: block;
  //   transform: translate(-50%, -50%) rotate(0deg);
  //   width: 110px;
  //   height: 110px;
  //   animation: roll 2s linear infinite;
  //   margin-top: 1rem;

  //   @keyframes roll {
  //     0% {
  //       transform: translate(-50%, -50%) rotate(0deg);
  //     }
  //     100% {
  //       transform: translate(-50%, -50%) rotate(360deg);
  //     }
  //   }
  // `;

  const BannerImage = styled.img`
    width: 100%;
    max-height: 200px;
    object-fit: cover;
  `;

  return (
    <>
      <Box>
        <BannerImage src={banner} alt="banner" />
      </Box>
      {/* <StyledImage src={ballimage} alt="" />
      <StyledImage1 src={batimage} alt="" />
      <StyledImage2 src={shuttleimage} alt="" />
      <StyledImage3 src={tennisimage} alt="" />
      <StyledImage4 src={playimage} alt="" /> */}
      {/* <StyledImage5 src={basketimage} alt="" /> */}
      <AppContainer
        paddingRight={{ xs: "0px", sm: "0px", md: "32px" }}
        paddingLeft={{ xs: "0px", sm: "0px", md: "32px" }}
        maxWidth={1300}
      >
        <Typography pt={"20px"} color={Colors.BLACK} fontSize={"42px"} fontWeight={"900"} fontStyle={"italic"} textTransform={"uppercase"}>Reach Us!!!</Typography>
        <Stack style={{
          marginTop: "-35px",
          marginBottom: "20px"
        }}
          // height={"100%"}
          spacing={10}
          direction={{ xs: "column", sm: "column", md: "row" }}
          // container
          paddingTop={{ xs: "50px", sm: "60px", md: "60px", lg: "0px" }}
          paddingBottom={{ xs: "50px", sm: "60px", md: "60px", lg: "0px" }}
        >

          <Box flexDirection={"column"}
            display={"flex"}
            marginLeft={{ xs: "-14px", sm: "0px", md: "0px", lg: "0px" }}
            style={{
              paddingTop: "54px"
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15573.737649706532!2d80.1963331!3d12.6194818!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a53acac30ee8d5d%3A0xad2be778ecae5918!2sTina%20Blue%20View!5e0!3m2!1sen!2sin!4v1702554954296!5m2!1sen!2sin"
              width="700"
              height="640"
            ></iframe>
            <Typography
              sx={{
                fontSize: "22px",
                fontWeight: "bold",
                paddingTop: "12px",
              }}
            >
              Contact Us
            </Typography>
            <Typography fontSize="16px" pt={"8px"} fontWeight={400}>
              39/6 KCP Thottam, Kumalan Kuttai, Erode,
              <br />
              Tamil Nadu - 638011{" "}
            </Typography>
            <Typography fontSize="16px" fontWeight={400}>
              <span style={{
                fontSize: "18px",
                fontWeight: "bold",
              }}>Phone:</span> +91 70944 60944,  +91 91088 83555

            </Typography>
          </Box>

          <Box style={{ marginLeft: "110px" }} pt="30px" width={"100%"}>
            <form onSubmit={onSubmit}>
              <Stack
                margin={"0 auto"}
                // marginLeft={{ xs: "-6px", sm: "-6px", md: "-6px", lg: "0px" }}
                // marginTop={{ xs: "180px", sm: "180px", md: "180px", lg: "0px" }}
                border={{
                  xs: "1px solid grey",
                  sm: "1px solid grey",
                  md: "1px solid grey",
                  lg: "none",
                }}
                width={{ xs: "80%", sm: "90%", md: "90%", lg: "100%" }}
                borderRadius={{ xs: "10px", sm: "10px", md: "10px", lg: "0px" }}
                padding={{
                  xs: "21px 16px",
                  sm: "21px 16px",
                  md: "21px 16px",
                  lg: "0px",
                }}
                direction="column"
                spacing={3}
              >
                <CustomTextField
                  sx={{ maxWidth: 700, borderRadius: "8px" }}
                  label="Name"
                  required={false}
                  placeholder="Enter your name"
                  value={name}
                  onChange={setName}
                />
                <CustomTextField
                  sx={{ maxWidth: 700, borderRadius: "8px" }}
                  label="Email"
                  required={false}
                  placeholder="Enter your email address"
                  value={email}
                  onChange={setEmail}
                />
                <DropDownComponent
                  label="What service are you interested in"
                  options={DropDownData}
                  placeHolder="Select your service"
                  value={type}
                  onChange={handleTypeChange}
                />
                <CustomTextField
                  sx={{ maxWidth: 700, borderRadius: "8px" }}
                  label="Phone Number"
                  required={false}
                  placeholder="Enter your phone number"
                  value={phoneNumber}
                  onChange={setPhoneNumber}
                  type="number"
                />
                <Box margin={"30px"}>
                  <Typography
                    marginBottom={"10px"}
                    fontSize={"16px"}
                    fontWeight={"bold"}
                    color={Colors.BLACK}
                  >
                    Message
                  </Typography>

                  <TextField
                    placeholder="Enter your message..."
                    sx={{
                      borderRadius: "8px",
                      width: "100%",
                      maxWidth: "700px",
                      ".MuiOutlinedInput-input": {
                        marginBottom: "150px",
                      },
                      ".MuiFormHelperText-root": {
                        color: "red",
                      },
                      ".css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root": {
                        border: "1px solid lightgray",
                      },
                    }}
                    id="outlined-basic"
                    value={message}
                    onChange={handleMessageChange}
                    name="passage"
                    variant="outlined"
                  />
                </Box>

                <Button

                  sx={{
                    borderRadius: "30px",
                    textTransform: "none",
                    fontSize: "16px",
                    fontWeight: 400,
                    padding: "10px",
                    maxWidth: 700,
                    border: "1px solid #15B5FC",
                    background: Colors.BUTTON_COLOR,
                    color: Colors.WHITE,
                    ":hover": {
                      background: Colors.WHITE,
                      color: Colors.BUTTON_COLOR,
                      border: "1px solid #15B5FC",
                    }
                  }} variant="outlined"
                  type="submit"
                >
                  Submit
                </Button>
              </Stack>
            </form>
            <ModalComponent open={successMessage} handleClose={successNotification} text="Your Enquiry is Successfully added" />
            <ModalComponent open={errorMessage} handleClose={errorNotification} text="Please provide valid details in the form" />
          </Box>
        </Stack>
      </AppContainer>
      {/* <img src={bottomImage} alt="bottom" width="100%" height={50} /> */}
    </>
  );
}
