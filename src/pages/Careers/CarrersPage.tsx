import {
  Box,
  Button,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

import AppContainer from "../../CommonComponents/AppContainer";
import Colors from "../../CommonComponents/Colors";
import CustomTextField from "../../CommonComponents/CustomTextField";
import DropDownComponent from "../../CommonComponents/DropdownComponent";
import EnquiryApi from "../../api/EnquiryApi";
import ModalComponent from "../../CommonComponents/CustomDateCalender/ModalComponent";
import banner from "./careers_banner.jpg";
import image from "./Career-Development-Template-1024x777.jpg";
import styled from "@emotion/styled";

const DropDownData = [
  {
    value: "turf",
    label: "Turf",
  },
  {
    value: "playstation",
    label: "PlayStation",
  },
  {
    value: "Badminton",
    label: "Badminton",
  },
  {
    value: "cricketNet",
    label: "CricketNet",
  },
  {
    value: "boardGame",
    label: "BoardGame",
  },
  {
    value: "bowlingMachine",
    label: "BowlingMachine",
  },
];
const StyledImage = styled.img`
  @media (min-width: 300px) {
    width: 340px;
    height: 340px;
    margin: auto;
  }
  @media (min-width: 414px) {
    width: 370px;
    height: 340px;
    margin: auto;
  }
  @media (min-width: 540px) {
    width: 490px;
    height: 340px;
    margin: auto;
  }

  @media (min-width: 768px) {
    width: 700px;
    height: 440px;
    margin: auto;
  }
  @media (min-width: 820px) {
    width: 730px;
    height: 440px;
    margin: auto;
  }
  @media (min-width: 912px) {
    width: 830px;
    height: 440px;
    margin: auto;
  }

  @media (min-width: 992px) {
    width: 840px;
    height: 440px;
    margin: auto;
  }
  @media (min-width: 1000px) {
    width: 940px;
    height: 440px;
    margin: auto;
  }

  @media (min-width: 1200px) {
    width: 700px;
    height: 515px;
  }
`;
export default function CareersPageNew() {
  const user = localStorage.getItem("user");
  const userData = user && JSON.parse(user);
  const [name, setName] = useState(userData ? userData["name"] : "");
  const [email, setEmail] = useState(userData ? userData["email"] : "");
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(
    userData ? userData["phone"] : ""
  );
  const [successMessage, setSuccessMessage] = useState(false);

  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidType, setIsValidType] = useState<boolean>(false);
  const [isValidName, setIsValidName] = useState(false);
  const [isValidPhone, setIsValidPhone] = useState(false);

  const handleNameChange = (event: any) => {
    setName(event);
    setIsValidName(false);
  };
  const handleEmailChange = (event: any) => {
    setEmail(event);
    setIsValidEmail(false);
  };

  const validateEmail = (input: any) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(input);
    return isValid;
  };

  const handleTypeChange = (event: SelectChangeEvent<string>) => {
    setType(event?.target.value);
    setIsValidType(false);
  };

  const handlePhoneChange = (event: any) => {
    setPhoneNumber(event);
    setIsValidPhone(false);
  };

  const successNotification = () => {
    setSuccessMessage(false);
  };

  const validatePhone = (input: any) => {
    const phonePattern = /^\d{10}$/;
    const isValid = phonePattern.test(input);
    return isValid;
  };

  const onSubmit = async (event: any) => {
    event?.preventDefault();

    if (!name) {
      setIsValidName(true);
    }
    if (!email) {
      setIsValidEmail(true);
    }
    if (!phoneNumber) {
      setIsValidPhone(true);
    }

    if (!type) {
      setIsValidType(true);
    }
    if (!validateEmail(email)) {
      setIsValidEmail(true);
      return;
    }
    if (!validatePhone(phoneNumber)) {
      setIsValidPhone(true);
      return;
    }
    if (name && email && phoneNumber && type) {
      const data = {
        name: name,
        email: email,
        type: type,
        phoneNumber: phoneNumber,
        message: message,
      };
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
          setName("");
          setEmail("");
          setPhoneNumber("");
          setType("");
          setMessage("");
        }
      } catch (err: any) {
        alert(err.message);
      }
    }
  };

  const BannerImage = styled.img`
    @media (min-width: 300px) {
      width: 100%;
      max-height: 100px;
      object-fit: cover;
    }
    @media (min-width: 414px) {
      width: 100%;
      max-height: 100px;
      object-fit: cover;
    }
    @media (min-width: 540px) {
      width: 490px;
      height: 340px;
      margin: auto;
    }

    @media (min-width: 768px) {
      width: 100%;
      max-height: 160px;
      object-fit: cover;
    }
    @media (min-width: 820px) {
      width: 100%;
      max-height: 160px;
      object-fit: cover;
    }
    @media (min-width: 912px) {
      width: 100%;
      max-height: 170px;
      object-fit: cover;
    }

    @media (min-width: 992px) {
      width: 100%;
      max-height: 170px;
      object-fit: cover;
    }
    @media (min-width: 1000px) {
      width: 100%;
      max-height: 170px;
      object-fit: cover;
    }

    @media (min-width: 1200px) {
      width: 100%;
      max-height: 270px;
      object-fit: cover;
    }
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
      <Box
        sx={{
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
        }}
      >
        <AppContainer
          paddingRight={{ xs: "0px", sm: "0px", md: "32px" }}
          paddingLeft={{ xs: "0px", sm: "0px", md: "0px", lg: "32px" }}
          maxWidth={1200}
        >
          <Typography
            pb={{ xs: "48px", sm: "48px", md: "48px", lg: "20px" }}
            pl={{ xs: "15px", sm: "28px", md: "28px", lg: "0px" }}
            pt={"20px"}
            color={Colors.BLACK}
            fontSize={{ xs: "32px", sm: "32px", md: "32px", lg: "42px" }}
            fontWeight={"900"}
            fontStyle={"italic"}
            textTransform={"uppercase"}
          >
            Careers!!!
          </Typography>
          <Stack
            style={{
              marginBottom: "20px",
              marginTop: "-28px",
            }}
            spacing={10}
            direction={{
              xs: "column-reverse",
              sm: "column-reverse",
              md: "column-reverse",
              lg: "row",
            }}
            paddingBottom={{ xs: "30px", sm: "60px", md: "60px", lg: "0px" }}
          >
            <Box
              flexDirection={"column"}
              display={"flex"}
              marginLeft={{ xs: "-14px", sm: "0px", md: "0px", lg: "0px" }}
              sx={{
                paddingTop: { xs: "0px", sm: "0px", md: "0px", lg: "0px" },
              }}
            >
              <StyledImage src={image} alt="" />
            </Box>

            <Box
              style={{ marginBottom: "40px" }}
              marginLeft={{ xs: "0px", sm: "0px", md: "0px", lg: "110px" }}
              pt={{ xs: "0px", sm: "0px", md: "0px", lg: "40px" }}
              width={"100%"}
            >
              <form onSubmit={onSubmit}>
                <Stack
                  margin={{
                    xs: "0 auto",
                    sm: "0 auto",
                    md: "0 auto",
                    lg: "0 auto",
                  }}
                  border={{
                    xs: "1px solid #d4ebf2",
                    sm: "1px solid #d4ebf2",
                    md: "1px solid #d4ebf2",
                    lg: "1px solid #d4ebf2",
                  }}
                  width={{ xs: "80%", sm: "90%", md: "90%", lg: "100%" }}
                  borderRadius={{
                    xs: "20px",
                    sm: "20px",
                    md: "20px",
                    lg: "20px",
                  }}
                  padding={{
                    xs: "21px 16px",
                    sm: "21px 16px",
                    md: "21px 16px",
                    lg: "10px 21px",
                  }}
                  direction="column"
                  spacing={3}
                  style={{
                    backgroundColor: "#d4ebf2",
                    boxShadow: "1px 7px 11px 2px dimgrey",
                  }}
                >
                  <CustomTextField
                    sx={{ maxWidth: 700, borderRadius: "8px" }}
                    label="Name"
                    required={false}
                    placeholder="Enter your name"
                    value={name}
                    onChange={handleNameChange}
                    error={!!isValidName}
                    helperText={isValidName ? "Please provide valid Name" : ""}
                  />
                  <CustomTextField
                    sx={{ maxWidth: 700, borderRadius: "8px" }}
                    label="Email"
                    required={false}
                    placeholder="Enter your email address"
                    value={email}
                    onChange={handleEmailChange}
                    error={!!isValidEmail}
                    helperText={
                      isValidEmail ? "Please provide valid Email" : ""
                    }
                  />
                  <DropDownComponent
                    label="Role you want to play"
                    options={DropDownData}
                    placeHolder="Select your game"
                    value={type}
                    onChange={handleTypeChange}
                    error={!!isValidType}
                    helperText={
                      isValidType ? "Please provide valid Service" : ""
                    }
                  />
                  <CustomTextField
                    sx={{ maxWidth: 700, borderRadius: "8px" }}
                    label="Phone Number"
                    required={false}
                    placeholder="Enter your phone number"
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    type="number"
                    error={!!isValidPhone}
                    helperText={
                      isValidPhone ? "Please provide valid phone number" : ""
                    }
                  />

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
                      },
                    }}
                    variant="outlined"
                    type="submit"
                  >
                    Submit
                  </Button>
                </Stack>
              </form>
              <ModalComponent
                open={successMessage}
                handleClose={successNotification}
                text="Your Enquiry is Successfully added"
                headingText="Enquiry Confirmation"
              />
            </Box>
          </Stack>
        </AppContainer>
      </Box>
    </>
  );
}
