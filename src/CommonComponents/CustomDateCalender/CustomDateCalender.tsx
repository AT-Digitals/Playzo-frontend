import * as React from "react";

import { Box, Button, IconButton, Stack, Typography } from "@mui/material";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import leftarrow from "./left-arrow.svg";
import rightarrow from "./right-arrow.svg";

const Timings = [
  { name: "9:00-10:00 AM" },
  { name: "10:00-11:00 AM", disabled: true },
  { name: "11:00-12:00 PM", disabled: true },
  { name: "12:00-1:00 PM" },
  { name: "1:00-2:00 PM" },
  { name: "2:00-3:00 PM" },
  { name: "3:00-4:00 PM" },
  { name: "4:00-5:00 PM" },
];

export default function CustomDateCalendar() {
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

  return (
    <Stack
      p={"0 40px 20px"}
      display={"flex"}
      flexDirection={"column"}
      spacing={2}
      maxWidth={500}
      margin={"0 auto"}
    >
      <Box>
        <Typography mb={2} fontSize={"18px"}>
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
          />
        </LocalizationProvider>
      </Box>
      <Box width={"100%"} maxWidth={330}>
        <Typography mb={2} fontSize={"18px"}>
          Pick Time
        </Typography>
        <Box mb={2} display={"flex"} gap={"2rem"} flexWrap={"wrap"}>
          {Timings.map((item, index) => (
            <Box
              key={index}
              sx={{
                maxWidth: 147,
                width: "100%",
                height: "29px",
                border: item.disabled ? "1px solid #9C9C9C" : "1px solid black",
                textAlign: "center",
                padding: "4px 0px 5px 0px",
                display: "flex",
                justifyContent: "center",
                borderRadius: "5px",
              }}
            >
              <Typography
                color={item.disabled ? "#9C9C9C" : "black"}
                fontSize={"18px"}
              >
                {item.name}
              </Typography>
            </Box>
          ))}
        </Box>
        <Box display={"flex"} justifyContent={"end"}>
          <Button
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
