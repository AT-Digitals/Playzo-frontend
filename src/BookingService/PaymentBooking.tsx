import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  IconButton,
  Radio,
  RadioGroup,
  RadioProps,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useBlocker, useLocation, useNavigate } from "react-router-dom";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import BookingApi from "../api/BookingApi";
import BookingParantmodal from "./BookingParantmodal";
import { BookingSubTypes } from "./BookingSubTypes";
import { BookingType } from "../CommonFiles/BookingType";
import Colors from "../CommonComponents/Colors";
import CustomTextField from "../CommonComponents/CustomTextField";
import LockIcon from "@mui/icons-material/Lock";
import ModalComponent from "../CommonComponents/CustomDateCalender/ModalComponent";
import TodayIcon from "@mui/icons-material/Today";
import UserApi from "../api/UserApi";
import assets from "../assets";
import backgroundimage from "./7692.jpg";
import routes from "../routes/routes";

const {
  "Calendar.png": calendar,
  "card icons.png": cardicons,
  "Icon.png": crediticon,
  "Frame 39554.png": currency,
  "Rectangle 679.png": grass,
} = assets;

const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: "50%",
  width: 16,
  height: 16,
  border: "1px solid #15B5FC",
  backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "#f5f8fa",
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "#15B5FC",
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  "&::before": {
    display: "block",
    width: 16,
    height: 16,
    backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "#15B5FC",
  },
});

function BpRadio(props: RadioProps) {
  return (
    <Radio
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}
export default function PaymentBooking() {
  const initialPaymentMethod = "female";
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState(initialPaymentMethod);

  const handlePaymentMethodChange = (event: any) => {
    setSelectedPaymentMethod(event.target.value);
  };

  const user = localStorage.getItem("user");
  const userData = user && JSON.parse(user);

  const [open, setOpen] = React.useState(false);
  const [phoneNumber, setPhoneNumber] = useState(
    userData.phone === 0 ? "" : userData.phone ?? ""
  );
  const [phoneNumberError, setPhoneNumberError] = useState("");

  const handleClose = () => {
    setOpen(false);
    navigate(routes.BOOKING_SERVICE);
    localStorage.removeItem("bookings");
    localStorage.removeItem("selectedService");
  };

  const location = useLocation();
  let allBookings = location.state?.bookingsWithTime || [];

  const navigate = useNavigate();

  const handlegoBack = () => {
    sampleref.current = true;

    navigate(-1);
  };

  const handlePayClick = () => {
    if (!phoneNumber) {
      setPhoneNumberError("Please enter your phone number.");
      return;
    }
    try {
      UserApi.updateById(userData.id, { phone: parseInt(phoneNumber) })
        .then()
        .catch((error) => {
          alert(error);
        });
    } catch (error) {
      console.log("phone number is not valid");
    }

    if (userData) {
      localStorage.setItem(
        "user",
        JSON.stringify({ ...userData, phone: phoneNumber })
      );
    }

    allBookings.map(async (bookings: any) => {
      try {
        const response = await BookingApi.createBooking({
          type: bookings.type,
          bookingtype: "online",
          startTime: parseInt(bookings.startTime),
          endTime: parseInt(bookings.endTime),
          user: userData.id,
          startDate: bookings.startDate,
          endDate: bookings.endDate,
          userBookingType: "online",
          //   bookingId: response.razorpay_payment_id,
          court:
            BookingSubTypes[
              bookings.name as keyof typeof BookingSubTypes
            ].toString(),
          numberOfPerson:
            bookings.numberOfPersons > 0 ? bookings.numberOfPersons : 0,
        });

        if (response) {
          setOpen(true);
        } else {
          console.log("Booking Failed");
        }
      } catch (err: any) {
        alert(err.message);
      }
    });
    sampleref.current = true;
    localStorage.removeItem("numberOfPersons");
  };

  const totalAmount = allBookings.reduce(
    (accumulator: number, booking: { amount: string }) =>
      accumulator + (parseFloat(booking.amount) || 0),
    0
  );

  console.log(allBookings, "payment allbooking when come this page");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const cleanupLocalStorage = () => {
    localStorage.removeItem("bookings");
    localStorage.removeItem("selectedService");
  };

  const nextLocation = localStorage.getItem("nextLocation");
  const sampleref = useRef(false);
  const isBlocked = useRef<any>(true);

  let blocker = useBlocker(({ currentLocation, nextLocation }: any) => {
    if (
      currentLocation.pathname !== nextLocation.pathname &&
      !sampleref.current
    ) {
      isBlocked.current = true;
      return true;
    }
    return false;
  });

  useEffect(() => {
    if (nextLocation && !isBlocked.current) {
      localStorage.removeItem("nextLocation");
      navigate(nextLocation);
    }
  }, [nextLocation, navigate]);

  const handlePhoneNumberChange = (e: any) => {
    const enteredPhoneNumber = e.target.value;
    setPhoneNumber(enteredPhoneNumber);

    // Clear the error when the user starts typing in the phone number field
    setPhoneNumberError("");

    // Phone number validation using a regex pattern (example: 10-digit US phone number)
    const phoneRegex = /^\d{10}$/;

    if (!phoneRegex.test(enteredPhoneNumber)) {
      setPhoneNumberError("Please enter a valid 10-digit phone number.");
    }
  };

  const [selectedModal, setSelectedModal] = useState(false);

  useEffect(() => {
    if (blocker.state === "blocked") {
      // Instead of window.alert, set showModal to true
      setSelectedModal(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blocker, blocker.state]);

  const handleConfirmation = () => {
    // Perform actions when the user confirms
    localStorage.removeItem("nextLocation");
    if (blocker.location) {
      localStorage.setItem("nextLocation", blocker.location.pathname);
    }
    isBlocked.current = false;
    sampleref.current = true;
    cleanupLocalStorage();
    setSelectedModal(false); // Close the modal
    if (blocker.state === "blocked") {
      blocker.reset();
    }
  };

  const handleModalCancel = () => {
    // Handle user cancellation
    setSelectedModal(false); // Close the modal
  };

  return (
    <>
      <Box
        component={"image"}
        sx={{
          position: "relative",
          backgroundImage: `url(${backgroundimage})`,
          backgroundSize: "cover", // Fit the background image to cover the entire container
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          objectFit: "cover", // Set object-fit to cover
          height: "100%",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.96)",
          }}
        />
        <Box
          sx={{
            position: "relative",
            zIndex: 1, // Ensure content appears above background
            padding: "20px 40px", // Adjust padding as needed
            color: "black", // Set text color for content
          }}
        >
          <Stack
            sx={{
              opacity: "1",
            }}
            margin={{ xs: "0px", sm: "0px", md: "0px", lg: "50px 190px" }}
            flexDirection={{
              xs: "column",
              sm: "column",
              md: "column",
              lg: "row",
            }}
          >
            <Box
              margin={{
                xs: "0px",
                sm: "30px 30px",
                md: "30px 30px",
                lg: "50px",
              }}
              width={"100%"}
              maxWidth={{ xs: "100%", sm: "313px", md: "313px", lg: "330px" }}
              borderRadius={"10px"}
              border={"1px solid gray"}
              maxHeight="600px"
            >
              <Box
                padding={"27px 20px"}
                gap={"7px"}
                display={"flex"}
                alignItems={"center"}
              >
                <IconButton onClick={handlegoBack}>
                  <ArrowBackIosNewIcon
                    style={{ fontSize: "20px", color: Colors.BUTTON }}
                  />
                </IconButton>
                <Typography
                  fontWeight={"600"}
                  fontSize={"18px"}
                  color={Colors.BUTTON}
                >
                  Booking Summary
                </Typography>
              </Box>
              <Stack
                overflow="auto"
                // sx={{

                // }}
                sx={{
                  opacity: "1",
                  scrollbarWidth: "none",
                  scrollBehavior: "smooth",
                  maxHeight: 350,
                  height: "50%",
                }}
                margin={"0px 25px"}
              >
                {allBookings.map(
                  (
                    item: {
                      type: string;
                      name: string;
                      startDate: string;
                      startTime: number;
                      endDate: string;
                      amount: string;
                      endTime: number;
                      numberOfPersons: string;
                    },
                    index: any
                  ) => {
                    const startDateTime = new Date(item.startTime);
                    const endDateTime = new Date(item.endTime);

                    const startHours = startDateTime.getHours();
                    const endHours = endDateTime.getHours();

                    const formattedStartDate = startDateTime.toLocaleDateString(
                      "en-US",
                      {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      }
                    );

                    // Format start and end times without minutes
                    const formattedStartTime = `${startHours % 12 || 12}:00`;
                    const formattedEndTime = `${endHours % 12 || 12}:00 ${
                      endHours < 12 ? "AM" : "PM"
                    }`;

                    const formattedTimeRange = ` ${formattedStartTime} - ${formattedEndTime}`;

                    console.log(formattedTimeRange);

                    return (
                      <Stack
                        sx={{
                          opacity: "1",
                        }}
                        paddingBottom={"20px"}
                      >
                        <Typography
                          display={"flex"}
                          gap={"0.5rem"}
                          fontWeight={"500"}
                          fontSize={"15px"}
                          color={Colors.BLACK}
                        >
                          {item.name}{" "}
                          <Typography
                            display={
                              item.type === BookingType.Badminton
                                ? "flex"
                                : "none"
                            }
                          >
                            / {item.numberOfPersons}
                          </Typography>
                        </Typography>
                        <Box
                          pt={"10px"}
                          gap={"8px"}
                          display={"flex"}
                          alignItems={"center"}
                        >
                          <img src={calendar} alt="" width={"25px"} />
                          <Typography
                            whiteSpace={"nowrap"}
                            fontWeight={"500"}
                            color={Colors.BLACK}
                            fontSize={"15px"}
                          >
                            {formattedStartDate}
                          </Typography>
                          <AccessTimeIcon
                            style={{
                              color: Colors.BLACK,
                              fontSize: "15px",
                              marginLeft: "10px",
                            }}
                          />
                          <Typography
                            whiteSpace={"nowrap"}
                            fontWeight={"500"}
                            color={Colors.BLACK}
                            fontSize={"15px"}
                          >
                            {formattedTimeRange}
                          </Typography>
                        </Box>
                        <Box
                          borderBottom={"1px solid black"}
                          pb={"20px"}
                          pt={"10px"}
                          gap={"8px"}
                          display={"flex"}
                          alignItems={"center"}
                        >
                          <img src={currency} alt="" width={"28px"} />
                          <Typography
                            fontWeight={"500"}
                            color={Colors.BLACK}
                            fontSize={"15px"}
                          >
                            {item.amount}
                          </Typography>
                        </Box>
                      </Stack>
                    );
                  }
                )}
              </Stack>
              <Box padding={"0 20px"}>
                <Typography
                  fontWeight={"500"}
                  color={Colors.BLACK}
                  fontSize={"15px"}
                >
                  Promo code
                </Typography>
                <CustomTextField
                  sx={{
                    width: "100%",
                    maxWidth: "300px",
                    height: "30px",
                    ".MuiOutlinedInput-root": {
                      width: "100%",
                      maxWidth: "300px",
                      height: "30px",
                    },
                  }}
                  id="outlined-password-input"
                />
                <Box
                  sx={{
                    opacity: "1",
                  }}
                  borderBottom={"1px solid black"}
                  pb={"20px"}
                >
                  <Button
                    sx={{
                      border: "1px solid #15B5FC",
                      width: "100%",
                      maxWidth: "60px",
                      height: "30px",
                      marginTop: "16px",
                      textTransform: "capitalize",
                      background: Colors.BUTTON_COLOR,
                      color: Colors.WHITE,
                      ":hover": {
                        background: Colors.WHITE,
                        color: Colors.BUTTON_COLOR,
                        border: "1px solid #15B5FC",
                      },
                    }}
                    variant="outlined"
                  >
                    Apply
                  </Button>
                </Box>
                <Box
                  pb={{ xs: "16px", sm: "16px", md: "16px", lg: "0px" }}
                  mt={"7px"}
                  display={"flex"}
                  justifyContent={"space-between"}
                >
                  <Typography
                    fontWeight={"500"}
                    color={Colors.BLACK}
                    fontSize={"15px"}
                  >
                    Total
                  </Typography>
                  <Typography
                    fontWeight={"500"}
                    color={Colors.BLACK}
                    fontSize={"15px"}
                  >
                    {totalAmount}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                opacity: "1",
              }}
              padding={{
                xs: "0px ",
                sm: "17px 35px",
                md: "17px 35px",
                lg: "40px 45px",
              }}
              width={"100%"}
              maxWidth={{ xs: "100%", sm: "295px", md: "295px", lg: "379px" }}
              display={"flex"}
              flexDirection={"column"}
            >
              <Typography
                fontWeight={"600"}
                color={Colors.BUTTON}
                fontSize={"19px"}
              >
                Phone Number
              </Typography>
              <Box mt={"5px"}>
                <TextField
                  sx={{
                    "& .MuiInputBase-input": {
                      height: "15px",
                    },
                  }}
                  fullWidth
                  value={phoneNumber ?? ""}
                  onChange={handlePhoneNumberChange}
                  error={phoneNumberError !== ""}
                  helperText={phoneNumberError}
                  type="number"
                />
              </Box>
              <Typography
                pt={"30px"}
                fontWeight={"600"}
                color={Colors.BUTTON}
                fontSize={"19px"}
              >
                Payment Methods
              </Typography>
              <Box
                sx={{
                  opacity: "1",
                }}
                display={"flex"}
                alignItems={"center"}
              >
                <FormControl>
                  <RadioGroup
                    style={{ marginTop: "10px" }}
                    defaultValue="female"
                    aria-labelledby="demo-customized-radios"
                    name="customized-radios"
                    value={selectedPaymentMethod}
                    onChange={handlePaymentMethodChange}
                  >
                    <FormControlLabel
                      value="female"
                      control={<BpRadio />}
                      label=""
                    />
                  </RadioGroup>
                </FormControl>
                <Typography
                  pt={"9px"}
                  fontWeight={"600"}
                  color={Colors.BLACK}
                  fontSize={"16px"}
                >
                  Credit/Debit Cards
                </Typography>
              </Box>
              <Box
                // mt={"-10px"}
                gap={"32px"}
                display={"flex"}
                alignItems={"center"}
              >
                <Typography
                  pl={"38px"}
                  fontWeight={"500"}
                  color={Colors.BLACK}
                  fontSize={"15px"}
                >
                  Pay with your Credit / Debit Card
                </Typography>
                <img src={cardicons} alt="" width={"80px"} />
              </Box>
              <Box
                margin={"15px "}
                width={"100%"}
                maxWidth={"340px"}
                height={"35px"}
                bgcolor={"#F9F9F9"}
              >
                <Stack
                  sx={{
                    opacity: "1",
                  }}
                  flexDirection={"row"}
                  justifyContent={"space-between"}
                  padding={"5px 25px"}
                >
                  <Typography
                    fontWeight={"500"}
                    color={Colors.BLACK}
                    fontSize={"15px"}
                  >
                    Card Number
                  </Typography>
                  <img src={crediticon} alt="" width={"25px"} />
                </Stack>
              </Box>
              <Box
                width={"100%"}
                display={"flex"}
                margin={"15px "}
                gap={"12px"}
              >
                <Box
                  width={"100%"}
                  maxWidth={"230px"}
                  height={"35px"}
                  bgcolor={"#F9F9F9"}
                >
                  <Stack
                    sx={{
                      opacity: "1",
                    }}
                    flexDirection={"row"}
                    justifyContent={"space-between"}
                    padding={"5px 25px"}
                  >
                    <Typography
                      fontWeight={"500"}
                      color={Colors.BLACK}
                      fontSize={"15px"}
                    >
                      MM / YY
                    </Typography>
                    <TodayIcon style={{ fontSize: "20px" }} />
                  </Stack>
                </Box>
                <Box
                  width={"100%"}
                  maxWidth={"100px"}
                  height={"35px"}
                  bgcolor={"#F9F9F9"}
                >
                  <Stack
                    flexDirection={"row"}
                    justifyContent={"space-between"}
                    padding={"5px 10px"}
                  >
                    <Typography
                      fontWeight={"500"}
                      color={Colors.BLACK}
                      fontSize={"15px"}
                    >
                      CVV
                    </Typography>
                    <LockIcon style={{ fontSize: "20px" }} />
                  </Stack>
                </Box>
              </Box>
              <Box display={"flex"} alignItems={"center"}>
                <FormControl>
                  <RadioGroup
                    style={{ marginTop: "10px" }}
                    defaultValue="other"
                    aria-labelledby="demo-customized-radios"
                    name="customized-radios"
                    value={selectedPaymentMethod}
                    onChange={handlePaymentMethodChange}
                  >
                    <FormControlLabel
                      value="other"
                      control={<BpRadio />}
                      label=""
                    />
                  </RadioGroup>
                </FormControl>
                <Typography
                  pt={"9px"}
                  color={"black"}
                  fontSize={"16px"}
                  fontWeight={"bold"}
                >
                  Direct Bank Transfer
                </Typography>
              </Box>
              <Typography
                pl={{ xs: "42px", sm: "42px", md: "42px", lg: "38px" }}
                color={"black"}
                fontSize={{ xs: "12px", sm: "12px", md: "12px", lg: "16px" }}
                fontWeight={"500"}
              >
                Make payment directly through bank account.
              </Typography>
              <Box display={"flex"} alignItems={"center"}>
                <FormControl>
                  <RadioGroup
                    style={{ marginTop: "10px" }}
                    defaultValue="male"
                    aria-labelledby="demo-customized-radios"
                    name="customized-radios"
                    value={selectedPaymentMethod}
                    onChange={handlePaymentMethodChange}
                  >
                    <FormControlLabel
                      value="male"
                      control={<BpRadio />}
                      label=""
                    />
                  </RadioGroup>
                </FormControl>
                <Typography
                  pt={"9px"}
                  color={"black"}
                  fontSize={"16px"}
                  fontWeight={"bold"}
                >
                  Other Payment Methods
                </Typography>
              </Box>
              <Typography
                pl={{ xs: "42px", sm: "42px", md: "42px", lg: "38px" }}
                color={"black"}
                fontSize={{ xs: "12px", sm: "12px", md: "12px", lg: "16px" }}
                fontWeight={"500"}
              >
                Make payment through Gpay, Paytm etc
              </Typography>

              <Box mt={"20px"}>
                <Typography color={Colors.BUTTON_COLOR} fontSize={"16px"}>
                  You are paying 30% in online, remaining in premises.
                </Typography>
              </Box>
              <Box
                sx={{
                  opacity: "1",
                }}
                mt={"20px"}
                display={"flex"}
                justifyContent={"space-between"}
              >
                <Button
                  onClick={handlePayClick}
                  sx={{
                    width: "100%",
                    maxWidth: "120px",
                    height: "40px",
                    textTransform: "capitalize",
                    fontWeight: "bold",
                    background: Colors.BUTTON_COLOR,
                    color: Colors.WHITE,
                    ":hover": {
                      background: Colors.WHITE,
                      color: Colors.BUTTON_COLOR,
                      border: "1px solid #15B5FC",
                    },
                  }}
                  variant="contained"
                >
                  Pay {totalAmount}
                </Button>
                <Button
                  onClick={handlegoBack}
                  sx={{
                    width: "100%",
                    maxWidth: "120px",
                    height: "40px",
                    textTransform: "capitalize",
                    fontWeight: "bold",
                    background: Colors.BUTTON_COLOR,
                    color: Colors.WHITE,
                    ":hover": {
                      background: Colors.WHITE,
                      color: Colors.BUTTON_COLOR,
                      border: "1px solid #15B5FC",
                    },
                  }}
                  variant="contained"
                >
                  back{" "}
                </Button>
              </Box>
            </Box>
          </Stack>
        </Box>
      </Box>
      <Box
        mt={{ xs: "50px", sm: "50px", md: "50px", lg: "0px" }}
        display={"flex"}
        justifyContent={"end"}
      ></Box>
      <img src={grass} alt="" />
      <ModalComponent
        open={open}
        handleClose={handleClose}
        pdf={true}
        data={allBookings}
        text="Thank you, Your booking is confirmed"
        headingText="Booking Confirmation"
        paymentText="You have paid 30% in online remaining you have to pay in the court"
      />

      <BookingParantmodal
        open={selectedModal}
        handleClose={handleModalCancel}
        text={
          "Are you sure you want to leave? Your selected service will be lost."
        }
        handleConfirmReset={handleConfirmation}
      />
    </>
  );
}
