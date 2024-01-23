import * as React from "react";

import {
  Box,
  Button,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CloseIcon from "@mui/icons-material/Close";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { format } from "date-fns";
import leftarrow from "./left-arrow.svg";
import rightarrow from "./right-arrow.svg";
import styled from "styled-components";

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

const StyledCell = styled(TableCell)({
  " &.MuiTableCell-root": {
    borderBottom: "none",
    fontSize: "18px",
  },
});

const StyledCellTitle = styled(TableCell)({
  " &.MuiTableCell-root": {
    borderBottom: "none",
    fontWeight: "bold",
    fontSize: "16px",
  },
});

interface TableDataItem {
  date: string;
  time: string;
}

export default function CustomDateCalendar() {
  const [selectedDate, setSelectedDate] = React.useState<string>("");
  const [selectedTime, setSelectedTime] = React.useState<string | null>(null);
  const [tableData, setTableData] = React.useState<TableDataItem[]>([]);

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

  const handleDateSelection = (date: string) => {
    if (date) {
      setSelectedDate(date);
    }
  };

  const handleTimeSelection = (time: string) => {
    setSelectedTime(time);
  };

  const handleAddButtonClick = () => {
    if (selectedDate !== null && selectedTime !== null) {
      setTableData([...tableData, { date: selectedDate, time: selectedTime }]);
      setSelectedDate("");
      setSelectedTime(null);
    }
  };

  const handleRemoveItem = (indexToRemove: any) => {
    const updatedTableData = tableData.filter(
      (_, index) => index !== indexToRemove
    );
    setTableData(updatedTableData);
  };

  return (
    <Stack
      p="0 40px 20px"
      display="flex"
      flexDirection="column"
      spacing={2}
      maxWidth={1146}
      alignItems="center"
      width="100%"
      margin="0 auto"
    >
      <Box>
        <Typography mb={2} fontSize="18px">
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
      <Box width="100%" maxWidth={330}>
        <Typography mb={2} fontSize="18px">
          Pick Time
        </Typography>
        <Box mb={2} display="flex" gap="2rem" flexWrap="wrap">
          {Timings.map((item, index) => (
            <Button
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
              key={index}
              onClick={() => handleTimeSelection(item.name)}
            >
              <Box>
                <Typography
                  color={item.disabled ? "#9C9C9C" : "black"}
                  fontSize="18px"
                >
                  {item.name}
                </Typography>
              </Box>
            </Button>
          ))}
        </Box>
        <Box display="flex" justifyContent="end">
          <Button
            onClick={handleAddButtonClick}
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

      <Box
        border="1px solid black"
        borderRadius="12px"
        display="flex"
        alignItems="center"
        width="100%"
        justifyContent="center"
      >
        <TableContainer
          style={{
            width: "85%",
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <StyledCellTitle>Items</StyledCellTitle>
                <StyledCellTitle>Type</StyledCellTitle>
                <StyledCellTitle>Date</StyledCellTitle>
                <StyledCellTitle>Time</StyledCellTitle>
                <StyledCellTitle>Qty</StyledCellTitle>
                <StyledCellTitle>Rate</StyledCellTitle>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((data, index) => (
                <TableRow key={index}>
                  <StyledCell>Turf</StyledCell>
                  <StyledCell>Turf 1</StyledCell>
                  <StyledCell>
                    {format(new Date(data.date), "dd MMM yyyy")}
                  </StyledCell>

                  <StyledCell>{String(data.time)}</StyledCell>
                  <StyledCell>2 hours</StyledCell>
                  <StyledCell>1500</StyledCell>
                  <StyledCell>
                    <IconButton onClick={() => handleRemoveItem(index)}>
                      <CloseIcon
                        style={{
                          color: "black",
                        }}
                      />
                    </IconButton>
                  </StyledCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Button
        style={{
          background: "var(--primary-3, #15B5FC)",
          color: "white",
          textTransform: "none",
          maxWidth: 247,
          width: "100%",
        }}
      >
        Proceed to payment{" "}
      </Button>
    </Stack>
  );
}
