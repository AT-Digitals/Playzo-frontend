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
import CustomTextField from "../../CommonComponents/CustomTextField";
import DropDownComponent from "../../CommonComponents/DropdownComponent";
import EnquiryApi from "../../api/EnquiryApi";
import banner from "./cUS.png";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";

const DropDownData = [
  {
    value: "one",
    label: "Turf",
  },
  {
    value: "two",
    label: "PlayStation",
  },
  {
    value: "three",
    label: "Badminton",
  },
];

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");

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
      message: message,
    };
    console.log("data", data);
    try {
      const response = await EnquiryApi.createEnquiry({
        userName: data.name,
        userEmail: data.email,
        enquiryMessage: data.message,
        projectType: data.type,
      });
      if (response) {
        // Simulate an asynchronous operation (e.g., API call) with setTimeout
        setTimeout(() => {}, 5000);
      } else {
        console.log("Response Failed");
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  const BannerImage = styled.img`
    width: 100%;
    max-height: 200px;
    object-fit: cover;
  `;
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <Box>
        <BannerImage src={banner} alt="banner" />
      </Box>
      <Box sx={{
          background: `
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 1em,
              rgba(127, 215, 245, 0.05) 0,    /* Decreased opacity to 0.05 */
              rgba(127, 215, 245, 0.05) 0.5em,
              transparent 0,
              transparent 1em,
              rgba(127, 215, 245, 0.05) 0,
              rgba(127, 215, 245, 0.05) 4em,
              transparent 0,
              transparent 1em,
              rgba(192, 235, 250, 0.05) 0,
              rgba(192, 235, 250, 0.1) 0em
            ),
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 1em,
              rgba(127, 215, 245, 0.1) 0,
              rgba(127, 215, 245, 0.05) 0.5em,  /* Decreased opacity to 0.05 */
              transparent 0,
              transparent 1em,
              rgba(127, 215, 245, 0.05) 0,
              rgba(127, 215, 245, 0.05) 4em,
              transparent 0,
              transparent 1em,
              rgba(192, 235, 250, 0.05) 0,
              rgba(192, 235, 250, 0.05) 0em
            ),
            whitesmoke
          `,
          backgroundBlendMode: "multiply",
        }}>
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
          spacing={10}
          direction={{ xs: "column", sm: "column", md: "row" }}
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
                  color: Colors.BUTTON_COLOR
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
                  color: Colors.BUTTON_COLOR
                 }}>Phone:</span> +91 70944 60944,  +91 91088 83555
                 
                </Typography>
              </Box>
             
          <Box style={{marginLeft: "110px"}} pt="30px" width={"100%"}>
            <form onSubmit={onSubmit}>
              <Stack
                margin={"0 auto"}
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
          </Box>
        </Stack>
      </AppContainer>
      </Box>
    </>
  );
}