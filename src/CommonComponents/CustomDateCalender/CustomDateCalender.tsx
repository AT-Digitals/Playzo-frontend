/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

import * as React from "react";

import { Box, Button, IconButton, Stack, Typography } from "@mui/material";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import BookingApi from "../../api/BookingApi";
import { BookingSubTypes } from "../../BookingService/BookingSubTypes";
import { BookingType } from "../../CommonFiles/BookingType";
import Colors from "../Colors";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import DateUtils from "../../Utils/DateUtils";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import ModalComponent from "./ModalComponent";
import TimeUtlis from "../../Utils/TimeUtlis";
import leftarrow from "./left-arrow.svg";
import moment from "moment";
import rightarrow from "./right-arrow.svg";
import routes from "../../routes/routes";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Timings = [
  { name: "6:00-7:00 AM", disabled: false },
  { name: "7:00-8:00 AM", disabled: false },
  { name: "8:00-9:00 AM", disabled: false },
  { name: "9:00-10:00 AM", disabled: false },
  { name: "10:00-11:00 AM", disabled: false },
  { name: "11:00-12:00 PM", disabled: false },
  { name: "12:00-1:00 PM", disabled: false },
  { name: "1:00-2:00 PM", disabled: false },
  { name: "2:00-3:00 PM", disabled: false },
  { name: "3:00-4:00 PM", disabled: false },
  { name: "4:00-5:00 PM", disabled: false },
  { name: "5:00-6:00 PM", disabled: false },
  { name: "6:00-7:00 PM", disabled: false },
  { name: "7:00-8:00 PM", disabled: false },
  { name: "8:00-9:00 PM", disabled: false },
  { name: "9:00-10:00 PM", disabled: false },
  { name: "10:00-11:00 PM", disabled: false },
  { name: "11:00-12:00 AM", disabled: false },
  { name: "12:00-1:00 AM", disabled: false },
  { name: "1:00-2:00 AM", disabled: false },
];

interface CustomDateCalendarProps {
  tableData?: any;
  setTableData?: any;
  selctedname?: any;
  type?: any;
  selectedService?: any;
  setIsBackButtonVisible?: any;
}

interface datatype {
  startTime: number;
  endTime: number;
  type: String;
}

export default function CustomDateCalendar({
  tableData,
  setTableData,
  selctedname,
  type,
  selectedService,
  setIsBackButtonVisible,
}: CustomDateCalendarProps) {
  const [selectedDate, setSelectedDate] = React.useState<string>('');
  const user = localStorage.getItem("user");
  const userData = user && JSON.parse(user);

  const [calendarKey, setCalendarKey] = React.useState<string>(
    Date.now().toString()
  );

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

  const [selectedTimings, setSelectedTimings] = React.useState<string[]>([]);
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = React.useState(false);
  const [responseModalOpen, setResponseModalOpen] = React.useState(false);
  const [dateModalOpen, setDateModalOpen] = React.useState(false);
  const [disableData, setDisableData] = React.useState<datatype[]>([]);
  const [items, setItems] = useState([
    { name: "6:00-7:00 AM", disabled: false },
    { name: "7:00-8:00 AM", disabled: false },
    { name: "8:00-9:00 AM", disabled: false },
    { name: "9:00-10:00 AM", disabled: false },
    { name: "10:00-11:00 AM", disabled: false },
    { name: "11:00-12:00 PM", disabled: false },
    { name: "12:00-1:00 PM", disabled: false },
    { name: "1:00-2:00 PM", disabled: false },
    { name: "2:00-3:00 PM", disabled: false },
    { name: "3:00-4:00 PM", disabled: false },
    { name: "4:00-5:00 PM", disabled: false },
    { name: "5:00-6:00 PM", disabled: false },
    { name: "6:00-7:00 PM", disabled: false },
    { name: "7:00-8:00 PM", disabled: false },
    { name: "8:00-9:00 PM", disabled: false },
    { name: "9:00-10:00 PM", disabled: false },
    { name: "10:00-11:00 PM", disabled: false },
    { name: "11:00-12:00 AM", disabled: false },
    { name: "12:00-1:00 AM", disabled: false },
    { name: "1:00-2:00 AM", disabled: false },
  ]);

  const handleClose = () => {
    setModalOpen(false);
    navigate(routes.ROOT);
  };

  const handleCloseModal = () => {
    setResponseModalOpen(false);
  };

  const handleCloseDateModal = () => {
    setDateModalOpen(false);
  };


  const handleDateSelection = (newValue: any) => {
    let datedata = newValue.$d;
    const parsedDate = moment(datedata);
    const formattedDate = parsedDate.format("YYYY-MM-DD");

    setSelectedDate(formattedDate);
    ApiCall(formattedDate);





  };

  const ApiCall = async (dateValue: any) => {
    if (type === BookingType.BowlingMachine) {
      selectedService = "Bowling Machine"
    }
    if (type === BookingType.CricketNet) {
      selectedService = "Cricket Net"
    }
    if (dateValue && type && selectedService) {
      try {
        const response = await BookingApi.filter({
          startDate: dateValue,
          type: type,
          endDate: dateValue,
          court: type === BookingType.BowlingMachine || type === BookingType.CricketNet ? "1" : BookingSubTypes[selectedService as keyof typeof BookingSubTypes].toString(),
        });
        setDisableData(response);
      } catch (error: any) {
        console.error("Error:", error.message);
      }
    }
  };

  const MilisecondsToHours = () => {
    let combinedIntervals: any[] = [];
    disableData.forEach((item) => {
      const start = item.startTime;
      const end = item.endTime;
      const startTime = TimeUtlis.formatMillisecondsToTimeConvert(start).split(" ")
      const endTime = TimeUtlis.formatMillisecondsToTimeConvert(end)
      const finalTime = startTime[0].concat(`-${endTime}`)
      combinedIntervals = combinedIntervals.concat(finalTime);
    });

    let isBookingExists: any = [];
    switch (selectedService) {
      case "PS 1&2":
        isBookingExists = tableData.filter((booking: any) => {
          return (
            booking.date === selectedDate &&
            booking.type === type &&
            (booking.name === 'PS 1' || booking.name === 'PS 2' || booking.name === "PS 1&2")

          );
        });
        break;
      case 'PS 1':
        isBookingExists = tableData.filter((booking: any) => {
          return (
            booking.date === selectedDate &&
            booking.type === type &&
            (booking.name === 'PS 1' || booking.name === "PS 1&2")

          );
        });
        break;
      case 'PS 2':
        isBookingExists = tableData.filter((booking: any) => {
          return (
            booking.date === selectedDate &&
            booking.type === type &&
            (booking.name === 'PS 2' || booking.name === "PS 1&2")

          );
        });
        break;
      case 'Turf 1&2':
        isBookingExists = tableData.filter((booking: any) => {
          return (
            booking.date === selectedDate &&
            booking.type === type &&
            (booking.name === 'Turf 1' || booking.name === 'Turf 2' || booking.name === 'Turf 1&2')

          );
        });
        break;
      case 'Turf 1':
        isBookingExists = tableData.filter((booking: any) => {
          return (
            booking.date === selectedDate &&
            booking.type === type &&
            (booking.name === 'Turf 1' || booking.name === 'Turf 1&2')

          );
        });
        break;
      case 'Turf 2':
        isBookingExists = tableData.filter((booking: any) => {
          return (
            booking.date === selectedDate &&
            booking.type === type &&
            (booking.name === 'Turf 2' || booking.name === 'Turf 1&2')

          );
        });
        break;
      default:
        isBookingExists = tableData.filter((booking: any) => {

          return (
            booking.date === selectedDate &&
            booking.name === selectedService &&
            booking.type === type
          );
        });
    }

    isBookingExists.map((items: any) => combinedIntervals.push(...items.time));
    const uniqueArray = combinedIntervals.reduce((accumulator, currentValue) => {

      if (!accumulator.includes(currentValue)) {
        accumulator.push(currentValue);
      }
      return accumulator;
    }, []);
    if (uniqueArray.length > 0) {
      const updatedItems = items.map((item) =>
        uniqueArray.includes(item.name) ? { ...item, disabled: true } : { ...item, disabled: false }
      )

      setItems(updatedItems)
    } else {
      setItems(Timings)
    }


  };


  React.useEffect(() => {
    if (disableData || selectedDate) {
      MilisecondsToHours();
    }


  }, [disableData, selectedDate]);



  const handleTimeSelection = (time: string) => {
    setSelectedTimings((prevSelectedTimings) => {
      if (prevSelectedTimings.includes(time)) {
        return prevSelectedTimings.filter(
          (selectedTime) => selectedTime !== time
        );
      } else {
        return [...prevSelectedTimings, time];
      }
    });
  };

  const handleAddButtonClick = async (
    type: string,
    selectedService: string
  ) => {
    if (userData && userData.userType === "user") {
      if (selectedDate !== "" && selectedTimings.length > 0) {
        const totalDuration = selectedTimings.length;
        let ratePerHour = 0;
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
          const courtValue =
            type === BookingType.BowlingMachine || type === BookingType.CricketNet ? 1 : BookingSubTypes[bookings.name as keyof typeof BookingSubTypes];
          const response = await BookingApi.getBookingAmount(
            bookings.type,
            courtValue
          );
          if (response) {
            ratePerHour = response.bookingAmount;
            bookings.amount = totalDuration * ratePerHour;
          } else {
            console.log("amount fetch Failed");
          }
        } catch (err) {
          console.log("err", err);
        }
        let flag = false;
        for (const timeData of selectedTimings) {
          try {
            const newCourt = type === BookingType.BowlingMachine || type === BookingType.CricketNet ? 1 : BookingSubTypes[bookings.name as keyof typeof BookingSubTypes]
                
            const startDateTime = DateUtils.startTimeAddtoDate(timeData);
            const endDateTime = DateUtils.endTimeAddtoDate(timeData);
            const endMilli = DateUtils.joinDate(DateUtils.formatDate(
              new Date(selectedDate),
              "YYYY-MM-DD"
            ), endDateTime);
            const startMilli = DateUtils.joinDate(DateUtils.formatDate(
              new Date(selectedDate),
              "YYYY-MM-DD"
            ), startDateTime);
            const startMilliSec = new Date(startMilli).getTime();
            const endMilliSec = new Date(endMilli).getTime();
            await BookingApi.getBookedList({
              type: type,
              bookingtype: "online",
              startTime: startMilliSec,
              endTime: endMilliSec,
              user: userData.id,
              startDate: DateUtils.formatDate(
                new Date(selectedDate),
                "YYYY-MM-DD"
              ),
              endDate: DateUtils.formatDate(
                new Date(selectedDate),
                "YYYY-MM-DD"
              ),
              court:newCourt.toString()
            });
          } catch (error: any) {
            flag = true;
            if (error.message === "Please choose another date and slot") {
              setResponseModalOpen(true);
            }
          }
        };
        if (
          !tableData.some(
            (el: {
              type: string;
              name: string;
              date: string;
              time: string[];
              amount: number;
              duration: number;
            }) => el === bookings
          )
        ) {
          if (bookings.type === BookingType.BowlingMachine) {
            bookings.name = "Bowling Machine"
          }
          if (bookings.type === BookingType.CricketNet) {
            bookings.name = "Cricket Net"
          }
          if (!flag) {
            setTableData((prevTableData: any) => [...prevTableData, bookings]);
          }
        }

        // Reset selected date and timings
        setSelectedDate("");
        setSelectedTimings([]);
        setCalendarKey(Date.now().toString());
        setIsBackButtonVisible(false);
      } else {
        setDateModalOpen(true);
      }
    } else {
      setModalOpen(true);
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
          fontWeight={"600"}
        >
          Pick Date
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            key={calendarKey}
            components={{ CalendarHeader: CustomDateHeader }}
            sx={{
              border: "0.25px solid var(--black, #000)",
              borderRadius: "12px",
              width: "260px",
              height: "280px",
              margin: "0px",
              padding: 2,
              opacity: 1,
              "& .MuiPickersDay-root.Mui-selected": {
                color: "white !important",
                background: "#15B5FC !important",
                border: "1px solid #15B5FC  !important",
                borderRadius: "12px",
              },
              "& .MuiPickersDay-today": {
                border: "1px solid #15B5FC !important",

                borderRadius: "12px",

                background: "white !important",
                color: "#15B5FC !important",
              },
            }}
            onChange={(date) => handleDateSelection(date)}
            disablePast
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
          fontWeight={"600"}
        >
          Pick Time
        </Typography>
        <Box mb={2} display="flex" gap="2rem" flexWrap="wrap">
          {items.map((item, index) => (
            <Button
              disabled={item.disabled}
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
                background: item.disabled
                  ? ""
                  : selectedTimings.includes(item.name)
                    ? "#15B5FC"
                    : "none",
                ":hover": {
                  border: "2px solid #15B5FC",
                  color: "#15B5FC",
                },
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
                        ? "white"
                        : "black"
                  }
                  sx={{
                    ":hover": {
                      color: "#15B5FC",
                    },
                  }}
                  fontSize={{ xs: "14px", sm: "14px", md: "14px", lg: "18px" }}
                >
                  {item.name.replace("-", " - ")}
                </Typography>
              </Box>
            </Button>
          ))}
        </Box>
        <Box display="flex" justifyContent="end">
          <Button
            onClick={() => handleAddButtonClick(type, selectedService)}
            sx={{
              background: " #15B5FC",
              color: "white",
              textTransform: "none",
              border: "2px solid #15B5FC",

              "&:hover": {
                background: Colors.WHITE,
                color: Colors.BUTTON_COLOR,
                border: "2px solid #15B5FC",
              },
            }}
          >
            Add
          </Button>
        </Box>
      </Box>
      <ModalComponent
        open={modalOpen}
        handleClose={handleClose}
        text="Could not add your Bookings!"
        subText="Login to Your Account"
      />
      <ModalComponent
        open={responseModalOpen}
        handleClose={handleCloseModal}
        text="Please choose another date and slot"
      />
      <ModalComponent
        open={dateModalOpen}
        handleClose={handleCloseDateModal}
        text="Please choose date and slot"
      />
    </Stack>
  );
}
