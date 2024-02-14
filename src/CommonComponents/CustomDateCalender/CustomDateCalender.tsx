import * as React from "react";

import { Box, Button, IconButton, Stack, Typography } from "@mui/material";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import BookingApi from "../../api/BookingApi";
import { BookingType } from "../../CommonFiles/BookingType";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import leftarrow from "./left-arrow.svg";
import rightarrow from "./right-arrow.svg";
import routes from "../../routes/routes";
import { useNavigate } from "react-router-dom";

const Timings = [
  { name: "6:00-7:00 AM" },
  { name: "7:00-8:00 AM" },

  { name: "9:00-10:00 AM" },
  { name: "10:00-11:00 AM", disabled: true },
  { name: "11:00-12:00 PM", disabled: true },
  { name: "12:00-1:00 PM" },
  { name: "1:00-2:00 PM" },
  { name: "2:00-3:00 PM" },
  { name: "3:00-4:00 PM" },
  { name: "4:00-5:00 PM" },
  { name: "5:00-6:00 PM" },
  { name: "6:00-7:00 PM" },
  { name: "7:00-8:00 PM" },
  { name: "8:00-9:00 PM" },
  { name: "9:00-10:00 PM" },
  { name: "10:00-11:00 PM" },
  { name: "11:00-12:00 PM" },
  { name: "12:00-1:00 AM" },
  { name: "1:00-2:00 AM" },
];

interface CustomDateCalendarProps {
  tableData?: any;
  setTableData?: any;
  selctedname?: any;
  type?: any;
  selectedService?: any;
}

export default function CustomDateCalendar({
  tableData,
  setTableData,
  selctedname,
  type,
  selectedService,
}: CustomDateCalendarProps) {
  const [selectedDate, setSelectedDate] = React.useState<string>("");
  const user = localStorage.getItem('user');
  const userData = user&&JSON.parse(user);

  const CustomDateHeader = (props: any) => {
    const { currentMonth, onMonthChange } = props;

    const handleMonthChange = (amount: number) => {
      const newMonth = currentMonth.add(amount, "month");
      onMonthChange(newMonth);
    };

    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <IconButton
          style={{
            border: "1px solid var(--Gray-Light, #DDD)",
            borderRadius: "12px",
          }}
          onClick={() => handleMonthChange(-1)}
        >
          <img src={leftarrow} alt="" />
        </IconButton>
        <Typography variant="h6">
          {currentMonth ? currentMonth.format("MMMM") : ""}
        </Typography>
        <IconButton
          style={{
            border: "1px solid var(--Gray-Light, #DDD)",
            borderRadius: "12px",
          }}
          onClick={() => handleMonthChange(1)}
        >
          <img src={rightarrow} alt="" />
        </IconButton>
      </div>
    );
  };

  // const handleDateSelection = (date: string) => {
  //   if (date) {
  //     setSelectedDate(date);
  //   }
  // };

  const [selectedTimings, setSelectedTimings] = React.useState<string[]>([]);
  const [res, setRes] = React.useState<boolean>(false);
  const navigate = useNavigate();

  // const handleTimeSelection = (time: string) => {
  //   if (selectedTimings.includes(time)) {
  //     setSelectedTimings((prevSelectedTimings) =>
  //       prevSelectedTimings.filter((selectedTime) => selectedTime !== time)
  //     );
  //   } else {
  //     setSelectedTimings((prevSelectedTimings) => [
  //       ...prevSelectedTimings,
  //       time,
  //     ]);
  //   }
  // };

  // const handleAddButtonClick = () => {
  //   console.log("Before adding:", selectedDate, selectedTimings);

  //   if (selectedDate !== "" && selectedTimings.length > 0) {
  //     const totalDuration = selectedTimings.length;
  //     const ratePerHour = 1500;
  //     const totalAmount = totalDuration * ratePerHour;

  //     setTableData([
  //       ...tableData,
  //       {
  //         date: selectedDate,
  //         time: selectedTimings,
  //         duratoin: totalDuration,
  //         amount: totalAmount,
  //         name: selctedname,
  //       },
  //     ]);

  //     console.log("After adding:", selectedDate, selectedTimings);

  //     setSelectedDate("");
  //     setSelectedTimings([]);
  //   }
  // };

  const handleDateSelection = (date: string) => {
    setSelectedDate(date);
  };

  const handleTimeSelection = (time: string) => {
    setSelectedTimings((prevSelectedTimings) => [...prevSelectedTimings, time]);
  };

  const handleAddButtonClick = async (type: string, selectedService: string) => {
if(userData && userData.userType==="user"){
  if (selectedDate !== "" && selectedTimings.length > 0) {
    const totalDuration = selectedTimings.length;
    let ratePerHour = 0;

    // let totalAmount = 0;
    const bookings = {
      type,
      name: selectedService,
      date: selectedDate,
      time: selectedTimings,
      amount: 0,
      duration: totalDuration,
      // ... other properties
    };

    try {
      const response = await BookingApi.getBookingAmount(bookings.type);
      if (response) {
        console.log("response",response);
        ratePerHour = response.bookingAmount;
        bookings.amount = totalDuration * ratePerHour;
      } else {
        console.log('Booking Failed');
      }
    } catch (err) {
      console.log("err",err)
    }
    if(selectedTimings.length>0){
      selectedTimings.map(async (timeData)=>{
try {
  console.log(timeData)
  let startMilliseconds = 0;
  let endMilliseconds = 0;
  const [time, am] = timeData.split(" ");
  const [time1, am1] = time.split("-");
  const [hours, minutes] = time1.split(":");
  console.log("hours",hours,minutes)
        const startDateTime = new Date(selectedDate);
        startDateTime.setHours(Number(hours), Number(minutes));
        startMilliseconds = startDateTime.getTime(); // Start time in milliseconds

        const endDateTime = new Date(startDateTime);
        endDateTime.setHours(startDateTime.getHours() + 1); // Adding 1 hour, you can adjust this based on your requirement
        endMilliseconds = endDateTime.getTime(); // End time in milliseconds
        console.log("bookings.type",bookings.type)
        console.log("startMilliseconds",startMilliseconds)
        console.log("endMilliseconds",endMilliseconds)

      const response = await BookingApi.getBookedList({
        type,
        bookingtype: "online",
        startTime: startMilliseconds,
        endTime: endMilliseconds,
        user: userData.id,
        startDate: new Date(selectedDate).toISOString().split("T")[0],
        endDate: new Date(selectedDate).toISOString().split("T")[0],
      //   bookingId: response.razorpay_payment_id,
        // court: ,
      
        });
      if (response) {
        setRes(true);
      } else {
        console.log('Booking Failed');
      }
    } catch (err) {
      console.log("err",err)
    }

      })
      console.log("res",res)
   if(res)   {
        setTableData((prevTableData: any) => [...prevTableData, bookings]);

        // Reset selected date and timings
        setSelectedDate("");
        setSelectedTimings([]);
   }

    }


        //       setTableData((prevTableData: any) => [...prevTableData, bookings]);

        // // Reset selected date and timings
        // setSelectedDate("");
        // setSelectedTimings([]);
  
  }
}else{
  navigate(routes.ROOT)

  }
  };

  return (
    <Stack
      padding={{
        xs: "18px 0px",
        sm: "18px 0px",
        md: "18px 0px",
        lg: "0px 20px",
      }}
      display="flex"
      flexDirection="column"
      spacing={2}
      maxWidth={1146}
      alignItems="center"
      width="100%"
      margin="0 auto"
    >
      <Box>
        <Typography
          mb={2}
          fontSize={{ xs: "15px", sm: "15px", md: "15px", lg: "18px" }}
        >
          Pick Date
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            components={{ CalendarHeader: CustomDateHeader }}
            sx={{
              border: "0.25px solid var(--black, #000)",
              borderRadius: "12px",
              width: "260px",
              height: "280px",
              margin: "0px",
              padding: 2,
              "& .MuiPickersDay-root.Mui-selected": {
                border: "1px solid #15B5FC !important",
                color: "#15B5FC !important",
                borderRadius: "12px",
                background: "white !important",
              },
              "& .MuiPickersDay-today": {
                background: "#15B5FC !important",
                color: "white !important",
                border: "1px solid #15B5FC  !important",
              },
            }}
            onChange={(date) => handleDateSelection(date)}
          />
        </LocalizationProvider>
      </Box>
      <Box
        pl={{ xs: "26px", sm: "26px", md: "26px", lg: "0px" }}
        width="100%"
        maxWidth={330}
      >
        <Typography
          mb={2}
          fontSize={{ xs: "15px", sm: "15px", md: "15px", lg: "18px" }}
        >
          Pick Time
        </Typography>
        <Box mb={2} display="flex" gap="2rem" flexWrap="wrap">
          {Timings.map((item, index) => (
            <Button
              sx={{
                maxWidth: 147,
                width: "100%",
                height: "29px",
                border: item.disabled
                  ? "1px solid #9C9C9C"
                  : selectedTimings.includes(item.name)
                  ? "2px solid #15B5FC"
                  : "1px solid black",
                textAlign: "center",
                padding: "4px 0px 5px 0px",
                display: "flex",
                justifyContent: "center",
                borderRadius: "5px",
              }}
              key={index}
              onClick={() => handleTimeSelection(item.name)}
            >
              <Box>
                <Typography
                  color={
                    item.disabled
                      ? "#9C9C9C"
                      : selectedTimings.includes(item.name)
                      ? "#15B5FC"
                      : "black"
                  }
                  fontSize={{ xs: "14px", sm: "14px", md: "14px", lg: "18px" }}
                >
                  {item.name}
                </Typography>
              </Box>
            </Button>
          ))}
        </Box>
        <Box display="flex" justifyContent="end">
          <Button
            onClick={() => handleAddButtonClick(type, selectedService)}
            style={{
              background: "var(--primary-3, #15B5FC)",
              color: "white",
              textTransform: "none",
            }}
          >
            Add
          </Button>
        </Box>
      </Box>
    </Stack>
  );
}
