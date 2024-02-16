import * as React from "react";

import { Box, Button, IconButton, Stack, Typography } from "@mui/material";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import BookingApi from "../../api/BookingApi";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import DateUtils from "../../Utils/DateUtils";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import ModalComponent from "./ModalComponent";
import leftarrow from "./left-arrow.svg";
import moment from 'moment';
import rightarrow from "./right-arrow.svg";
import routes from "../../routes/routes";
import { useNavigate } from "react-router-dom";

// import { BookingType } from "../../CommonFiles/BookingType";







const Timings = [
  { name: "6:00-7:00 AM" },
  { name: "7:00-8:00 AM" },
  { name: "8:00-9:00 AM" },
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

interface TimeSlot {
  startTime: string;
  endTime: string;
}


interface CustomDateCalendarProps {
  tableData?: any;
  setTableData?: any;
  selctedname?: any;
  type?: any;
  selectedService?: any;
}

interface datatype {
  startTime: number,
  endTime: number,
  type: String,
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
  const userData = user && JSON.parse(user);

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
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = React.useState(false);
  const [disableData, setDisableData] = React.useState<datatype[]>([]);

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

  const handleClose = () => {
    setModalOpen(false);
    navigate(routes.ROOT)
  }

  const handleDateSelection = (newValue: any) => {

    let datedata = newValue.$d;
    const parsedDate = moment(datedata);
    const formattedDate = parsedDate.format('YYYY-MM-DD');

    setSelectedDate(formattedDate);
    ApiCall(formattedDate);

  };

  const data = [{ startTime: 1709001000000, endTime: 1709008200000, type: 'badminton' }];
  const data2 = [{ startTime: 1708032600000, endTime: 1708047000000, type: "cricketNet" }];
  const data3 = [{ startTime: 1707438600000, endTime: 1707445800000, type: 'boardGame' }];
  const data4 = [{ startTime: 1709245800000, endTime: 1709253000000, type: 'turf' }];
  const data5 = [{ startTime: 1708482600000, endTime: 1708489800000, type: 'bowlingMachine' },
  { startTime: 1708497000000, endTime: 1708504200000, type: 'bowlingMachine' }];


  const ApiCall = async (dateValue: any) => {
    try {
      // const response = await BookingApi.filter({
      //   startDate: dateValue,
      //   type: type,
      //   endDate: dateValue
      // });
      setDisableData(data2);
      MilisecondsToHours();
    } catch (error: any) {
      console.error('Error:', error.message);
    }
  };


  const MilisecondsToHours = () => {
    if (disableData.length > 0) {
      return disableData.some((item) => {
        const value1 = convertTo24HourFormat(item.startTime);
        const value2 = convertTo24HourFormat(item.endTime);

        const TimeSlot = splitTimeRange(value1, value2)

        console.log("startTime", value1, value2, TimeSlot);
        return;
      })
    }
  }

  const convertTo24HourFormat = (milliseconds: number): string => {
    const date = new Date(milliseconds);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  };

  const splitTimeRange = (startTime: string, endTime: string): TimeSlot[] => {
    const timeSlots: TimeSlot[] = [];
    const startHour = parseInt(startTime.split(':')[0], 10);
    const endHour = parseInt(endTime.split(':')[0], 10);

    for (let hour = startHour; hour < endHour; hour++) {
      const startSlot = `${hour}:00`;
      const endSlot = `${hour + 1}:00`;
      timeSlots.push({ startTime: startSlot, endTime: endSlot });
    }

    return timeSlots;
  };

  React.useEffect(() => {
    if (disableData) {
      MilisecondsToHours();
    }
  }, [])

  console.log('date', selectedDate, type, disableData);

  const handleTimeSelection = (time: string) => {
    setSelectedTimings((prevSelectedTimings) => [...prevSelectedTimings, time]);
  };

  const handleAddButtonClick = async (type: string, selectedService: string) => {
    if (userData && userData.userType === "user") {
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
    console.log("selectedTimings",selectedTimings)
    if(selectedTimings.length>0){
      selectedTimings.map(async (timeData)=>{
try {
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
    await BookingApi.getBookedList({
          type: bookings.type,
          bookingtype: "online",
          startTime: startMilliseconds,
          endTime: endMilliseconds,
          user: userData.id,
          startDate: DateUtils.formatDate(new Date(selectedDate),"YYYY-MM-DD"),
          endDate: DateUtils.formatDate(new Date(selectedDate),"YYYY-MM-DD"),
          }
        );
  
    } catch (err) {
      console.log("err",err)
    }



      })
      setTableData((prevTableData: any) => [...prevTableData, bookings]);

      // Reset selected date and timings
      setSelectedDate("");
      setSelectedTimings([]);


    }
  
  }
}else{
  setModalOpen(true);

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
      <ModalComponent open={modalOpen} handleClose={handleClose} />
    </Stack>
  );
}


