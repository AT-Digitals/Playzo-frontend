import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  RadioProps,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import BookingApi from "../api/BookingApi";
import { BookingSubTypes } from "./BookingSubTypes";
import Colors from "../CommonComponents/Colors";
import CustomTextField from "../CommonComponents/CustomTextField";
import LockIcon from "@mui/icons-material/Lock";
import ModalComponent from "../CommonComponents/CustomDateCalender/ModalComponent";
import React from "react";
import TodayIcon from "@mui/icons-material/Today";
import ball from "../assets/ball 4.png";
import calendar from "../assets/Calendar.png";
import cardicons from "../assets/card icons.png";
import crediticon from "../assets/Icon.png";
import currency from "../assets/Frame 39554.png";
import grass from "../assets/Rectangle 679.png";
import routes from "../routes/routes";
import { useState } from "react";

// const PaymentDetails = [
//   {
//     name: "Turf 1",
//     date: "10 Jan 2024",
//     time: "9:00 - 10:00 AM",
//     amount: "750",
//   },
//   {
//     name: "Turf 1 & 2",
//     date: "10 Jan 2024",
//     time: "9:00 - 10:00 AM",
//     amount: "750",
//   },
// ];
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
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#000333",
  borderRadius: "15px",
  p: 4,
};

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
  const [open, setOpen] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);
  const handleClose = () => {setOpen(false)
    navigate(routes.BOOKING_SERVICE);
    localStorage.removeItem("bookings");
  };

  const handleCloseError = () => {
    setOpenError(false)
    
  };

  const location = useLocation();
  let allBookings = location.state?.bookingsWithTime || [];
  const selectedServiceFromState = location.state?.selectedService;

  const user = localStorage.getItem("user");
  const userData = user && JSON.parse(user);

  const navigate = useNavigate();

  const handlegoBack = () => {
    navigate(-1);
    console.log(selectedServiceFromState, "selectedServiceFromState");
  };

  const handlePayClick = () => {
    console.log(allBookings, "allbookings123");

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
          //   bookingId: response.razorpay_payment_id,
          court: BookingSubTypes[bookings.name as keyof typeof BookingSubTypes],
        });

        if (response) {
          
            setOpen(true);
       
        } else {
          console.log("Booking Failed");
        }
      } catch (err) {
        setOpenError(true);

        console.log("err", err);
      }
    });

  };
  const totalAmount = allBookings.reduce(
    (accumulator: number, booking: { amount: string }) =>
      accumulator + (parseFloat(booking.amount) || 0),
    0
  );

  console.log(allBookings, "payment allbooking when come this page");
  return (
    <>
      <Stack
        margin={{ xs: "0px", sm: "0px", md: "0px", lg: "50px 190px" }}
        flexDirection={{ xs: "column", sm: "column", md: "column", lg: "row" }}
      >
        <Box
          margin={{
            xs: "30px 30px",
            sm: "30px 30px",
            md: "30px 30px",
            lg: "50px",
          }}
          width={"100%"}
          maxWidth={{ xs: "313px", sm: "313px", md: "313px", lg: "330px" }}
          borderRadius={"10px"}
          border={"1px solid #D9D9D9"}
        >
          <Box
            padding={"27px 20px"}
            gap={"7px"}
            display={"flex"}
            alignItems={"center"}
          >
            <ArrowBackIosNewIcon
              style={{ fontSize: "20px", color: Colors.BUTTON }}
            />
            <Typography
              fontWeight={"600"}
              fontSize={"18px"}
              color={Colors.BUTTON}
            >
              Booking Summary
            </Typography>
          </Box>
          <Stack margin={"0px 25px"}>
            {allBookings.map(
              (
                item: {
                  type: string;
                  name: string;
                  startDate: string;
                  startTime: number;
                  endDate: string;
                  amount: string;
                  endTime: string;
                },
                index: any
              ) => {
                const startDateTime = new Date(item.startTime);
                const endDateTime = new Date(item.endTime);
                const formattedStartDate = startDateTime.toLocaleDateString(
                  "en-US",
                  {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  }
                );

                const formattedStartTime = startDateTime.toLocaleTimeString(
                  [],
                  { hour: "numeric", minute: "2-digit" }
                );
                const formattedEndTime = endDateTime.toLocaleTimeString([], {
                  hour: "numeric",
                  minute: "2-digit",
                });

                const formattedTimeRange = `${formattedStartTime} - ${formattedEndTime}`;
                return (
                  <Stack paddingBottom={"20px"}>
                    <Typography
                      fontWeight={"500"}
                      fontSize={"15px"}
                      color={Colors.BLACK}
                    >
                      {item.name}
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
            <Box borderBottom={"1px solid black"} pb={"20px"}>
              <Button
                style={{
                  border: "1px solid #15B5FC",
                  color: Colors.BUTTON,
                  width: "100%",
                  maxWidth: "60px",
                  height: "30px",
                  marginTop: "16px",
                  textTransform: "capitalize",
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
          </Stack>
        </Box>
        <Box
          padding={{
            xs: "17px 35px",
            sm: "17px 35px",
            md: "17px 35px",
            lg: "70px 45px",
          }}
          width={"100%"}
          maxWidth={{ xs: "295px", sm: "295px", md: "295px", lg: "379px" }}
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
          <Box
            mt={"5px"}
            width={"100%"}
            maxWidth={"140px"}
            height={"35px"}
            bgcolor={"#F9F9F9"}
          >
            <Typography
              pt={"7px"}
              textAlign={"center"}
              fontWeight={"500"}
              color={Colors.BLACK}
              fontSize={"15px"}
            >
              9876543210
            </Typography>
          </Box>
          <Typography
            pt={"30px"}
            fontWeight={"600"}
            color={Colors.BUTTON}
            fontSize={"19px"}
          >
            Payment Methods
          </Typography>
          <Box display={"flex"} alignItems={"center"}>
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
          <Box mt={"-10px"} gap={"42px"} display={"flex"} alignItems={"center"}>
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
            margin={"15px 35px"}
            width={"100%"}
            maxWidth={"340px"}
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
                Card Number
              </Typography>
              <img src={crediticon} alt="" width={"25px"} />
            </Stack>
          </Box>
          <Box
            width={"100%"}
            display={"flex"}
            margin={"15px 35px"}
            gap={"12px"}
          >
            <Box
              width={"100%"}
              maxWidth={"230px"}
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
              color={"#666666"}
              fontSize={"16px"}
              fontWeight={"bold"}
            >
              Direct Bank Transfer
            </Typography>
          </Box>
          <Typography
            pl={{ xs: "42px", sm: "42px", md: "42px", lg: "38px" }}
            color={"#666666"}
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
                <FormControlLabel value="male" control={<BpRadio />} label="" />
              </RadioGroup>
            </FormControl>
            <Typography
              pt={"9px"}
              color={"#666666"}
              fontSize={"16px"}
              fontWeight={"bold"}
            >
              Other Payment Methods
            </Typography>
          </Box>
          <Typography
            pl={{ xs: "42px", sm: "42px", md: "42px", lg: "38px" }}
            color={"#666666"}
            fontSize={{ xs: "12px", sm: "12px", md: "12px", lg: "16px" }}
            fontWeight={"500"}
          >
            Make payment through Gpay, Paytm etc
          </Typography>
          <Box mt={"10px"} display={"flex"} justifyContent={"end"}>
            <Button
              onClick={handlePayClick}
              style={{
                backgroundColor: Colors.BUTTON,
                width: "100%",
                maxWidth: "120px",
                height: "40px",
                textTransform: "capitalize",
                fontWeight: "bold",
              }}
              variant="contained"
            >
              Pay {totalAmount}
            </Button>
            <Button
              onClick={handlegoBack}
              style={{
                backgroundColor: Colors.BUTTON,
                width: "100%",
                maxWidth: "120px",
                height: "40px",
                textTransform: "capitalize",
                fontWeight: "bold",
              }}
              variant="contained"
            >
              back{" "}
            </Button>
          </Box>
        </Box>
      </Stack>
      <Box
        mt={{ xs: "50px", sm: "50px", md: "50px", g: "0px" }}
        display={"flex"}
        justifyContent={"end"}
      >
        <img src={ball} width={"150px"} alt="" />
      </Box>
      <img style={{ marginTop: "-40px" }} src={grass} alt="" />
      <ModalComponent open={open}
        handleClose={handleClose} text="Your booking is confirmed" subText="Thank you, your payment has been successfull." />
   <ModalComponent open={openError}
        handleClose={handleCloseError} text="User Not Found" />
    </>
  );
}
