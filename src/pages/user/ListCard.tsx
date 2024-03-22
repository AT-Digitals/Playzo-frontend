/* eslint-disable jsx-a11y/alt-text */

import { Box, Button, Divider, Stack, Typography } from "@mui/material";

import { BookingNameTypes } from "../../BookingService/BookingSubTypes";
import Colors from "../../CommonComponents/Colors";
import DateUtils from "../../Utils/DateUtils";
import TimeUtlis from "../../Utils/TimeUtlis";

interface dataProps {
  userDetails: any[];
  userName: string;
}

export default function ListCard({ userDetails, userName }: dataProps) {
  const CapitalizeFirstLetter = (str: any) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  return (
    <>
      {userDetails.map((user, index) => (
        <Stack direction="column" spacing={2} key={index} py={2}>
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            justifyContent="space-between"
          >
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography variant="body2">Booking id.</Typography>
              <Typography variant="body2" fontWeight={600}>
                {user.id}
              </Typography>
            </Stack>
          </Stack>
          <Typography variant="body2" fontWeight={600}>
            {DateUtils.formatDate(user.startDate, "DD-MMM-YYYY")}
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row", md: "row", lg: "row" }}
            spacing={{ xs: 2, sm: 5, md: 5, lg: 5 }}
            alignItems="start"
          >
            <Box display={"flex"} justifyContent={"space-between"} gap={"2rem"}>
              <Typography variant="body2">{userName}</Typography>
              <Typography variant="body2">
                {CapitalizeFirstLetter(user.type)}
              </Typography>
              {user.type === "Badminton" ? (
                <Typography>/{user.numberOfPersons}</Typography>
              ) : (
                ""
              )}
            </Box>
            <Box display={"flex"} justifyContent={"space-between"} gap={"2rem"}>
              <Typography variant="body2">
                {CapitalizeFirstLetter(
                  BookingNameTypes[
                    (user.type + user.court) as keyof typeof BookingNameTypes
                  ]
                )}
              </Typography>

              <Typography variant="body2">{`${TimeUtlis.formatMillisecondsToTimeConvert(
                user.startTime
              )} - ${TimeUtlis.formatMillisecondsToTimeConvert(
                user.endTime
              )}`}</Typography>
            </Box>
          </Stack>
          <Stack
            direction="row"
            spacing={1}
            alignItems="flex-end"
            justifyContent="flex-end"
          >
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={3}
              alignItems="center"
              sx={{
                display: "flex",

                flexWrap: "wrap", // Add flexWrap property
              }}
            >
              <Stack direction="row" spacing={1} alignItems="center">
                <Button
                  variant="outlined"
                  sx={{
                    padding: "8px 20px",
                    textTransform: "none",
                    fontSize: {
                      xs: "12px",
                      sm: "16px",
                      md: "16px",
                      lg: "16px",
                    },
                    maxWidth: "110px",
                    fontWeight: "400",
                    border: "2px solid #15B5FC",
                    borderRadius: "30px",
                    letterSpacing: "1.6px",
                    background: Colors.BUTTON_COLOR,
                    color: Colors.WHITE,
                    "&:hover": {
                      background: Colors.WHITE,
                      color: Colors.BUTTON_COLOR,
                      border: "2px solid #15B5FC",
                    },
                  }}
                >
                  Refund
                </Button>
              </Stack>
            </Stack>
          </Stack>
          <Divider variant="fullWidth" sx={{ borderColor: Colors.BLACK }} />
        </Stack>
      ))}
    </>
  );
}
