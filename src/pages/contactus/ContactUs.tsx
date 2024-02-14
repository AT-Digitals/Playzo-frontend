import {
  Box,
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

// import GameIcon from "../../assets/doodl-5 1.png";

// import ball from "../../assets/ball 3.png";

// import bottomImage from "../../assets/Rectangle 679.png";

const DropDownData = [
  {
    value: "one",
    label: "one",
  },
  {
    value: "two",
    label: "two",
  },
  {
    value: "three",
    label: "three",
  },
];

// const StyledImage = styled.img`
//   position: absolute;
//   transform: translate(130px, 30px);
//   /* Set a default width or adjust as needed */

//   @media (min-width: 300px) {
//     /* Extra small devices (phones) */
//     width: 130px;
//     height: 115px;
//   }

//   @media (min-width: 768px) {
//     /* Small devices (tablets) */
//     width: 130px;
//     height: 130px;
//   }

//   @media (min-width: 992px) {
//     /* Medium devices (desktops) */
//     width: 130px;
//     height: 130px;
//   }

//   @media (min-width: 1200px) {
//     /* Large devices (large desktops) */
//     width: 230px;
//     height: 215px;
//   }

//   animation: shake 2s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite;

//   @keyframes shake {
//     0%,
//     100% {
//       transform: translate(130px, 30px);
//     }
//     10%,
//     30%,
//     50%,
//     70%,
//     90% {
//       transform: translate(140px, 30px);
//     }
//     20%,
//     40%,
//     60%,
//     80% {
//       transform: translate(120px, 30px);
//     }
//   }
// `;

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");

  // const [submitted, setSubmitted] = useState(false); // New state to track form submission

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
      <AppContainer
        paddingRight={{ xs: "0px", sm: "0px", md: "32px" }}
        paddingLeft={{ xs: "0px", sm: "0px", md: "32px" }}
        maxWidth={1200}
      >
        <Stack
          // height={"100%"}
          spacing={10}
          direction={{ xs: "column", sm: "column", md: "row" }}
          // container
          paddingTop={{ xs: "50px", sm: "60px", md: "60px", lg: "60px" }}
          paddingBottom={{ xs: "50px", sm: "60px", md: "60px", lg: "90px" }}
        >
          <Box padding={"0 20px"}>
            <Stack
              bgcolor={"aliceblue"}
              padding={{ xs: "20px 20px", md: "30px 30px", lg: "30px 30px" }}
              // width={"100%"}
              direction="column"
              height={"100%"}
              maxHeight={600}
              spacing={2}
            >
              <Typography
                fontSize={{ xs: "19px", sm: "19px", md: "19px", lg: "30px" }}
                fontWeight={700}
                color={Colors.BLACK}
              >
                For More Details Contact Us!
              </Typography>
              <Typography
                color={Colors.BLACK}
                fontSize={{ xs: "15px", sm: "15px", md: "16px", lg: "18px" }}
                // width={{ xs: "310px", sm: "100%", md: "310px", lg: "433px" }}
              >
                Send our team a quick message with your question, and we’ll get
                back to you as soon as possible. We’re pretty responsive and
                will try to respond in a few hours 🙂
              </Typography>

              <Link
                style={{
                  textDecoration: "none",
                  color: Colors.BUTTON_COLOR,
                  fontWeight: 600,
                  fontSize: "18px",
                }}
                to="mailto:orders@alterknitnewyork.com"
              >
                playzo.erode@gmail.com
              </Link>
            </Stack>
            {/* <Box>
              <StyledImage src={GameIcon} alt="contact-us" />
            </Box> */}
          </Box>
          <Box pt="30px" width={"100%"}>
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
                  sx={{ maxWidth: 700 }}
                  label="Name"
                  required={false}
                  placeholder="Enter your name"
                  value={name}
                  onChange={setName}
                />
                <CustomTextField
                  sx={{ maxWidth: 700 }}
                  label="Email"
                  required={false}
                  placeholder="Enter your email address"
                  value={email}
                  onChange={setEmail}
                />
                <DropDownComponent
                  label="What service are you interested in"
                  options={DropDownData}
                  placeHolder="Select project type"
                  value={type}
                  onChange={handleTypeChange}
                />
                <Box margin={"30px"}>
                  <Typography
                    marginBottom={"4px"}
                    fontSize={"18px"}
                    fontWeight={700}
                    color={Colors.BLACK}
                  >
                    Message
                  </Typography>

                  <TextField
                    sx={{
                      width: "100%",
                      maxWidth: "700px",
                      ".MuiOutlinedInput-input": {
                        marginBottom: "130px",
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

                <CustomButton
                  bgColor={Colors.BUTTON_COLOR}
                  sx={{
                    borderRadius: "30px",
                    textTransform: "none",
                    fontSize: "20px",
                    fontWeight: 700,
                    padding: "10px",
                    maxWidth: 700,
                  }}
                  type="submit"
                >
                  Submit
                </CustomButton>
              </Stack>
            </form>
          </Box>
        </Stack>
      </AppContainer>
      {/* <img src={bottomImage} alt="bottom" width="100%" height={50} /> */}
    </>
  );
}
