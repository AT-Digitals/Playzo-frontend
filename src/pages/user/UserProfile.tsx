import { Box, Card, CardMedia, Grid, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import AppContainer from "../../CommonComponents/AppContainer";
import Colors from "../../CommonComponents/Colors";
import DateUtils from "../../Utils/DateUtils";
import Image6 from "../../assets/Image (6).png";
import ListCard from "./ListCard";
import RectangleImage from "../../assets/Rectangle 679.png";
import ball from "../../assets/ball 1.png";
import ball2 from "../../assets/ball 2.png";
import layer from "../../assets/Layer_1.png";

interface userType {
  bookingId: string;
  date: string;
  userName: string;
  bookingType: string;
  timings: string;
  comments: string;
  bookingCompleted: string;
  refundCompleted?: string;
  ratings?: number;
}

const userDetails: userType[] = [
  // {
  //   bookingId: "1234dff",
  //   date: "12-Jan-2024",
  //   userName: "John Doe",
  //   bookingType: "Turf1 & Turf2",
  //   timings: "3.30pm-4.30pm",
  //   comments: "",
  //   bookingCompleted: "no",
  //   refundCompleted: "no",
  //   ratings: 0,
  // },
  // {
  //   bookingId: "1234dff",
  //   date: "15-Jan-2024",
  //   userName: "John Doe",
  //   bookingType: "Turf1 & Turf2",
  //   timings: "2.30pm-4.30pm",
  //   comments: "",
  //   bookingCompleted: "no",
  //   refundCompleted: "yes",
  //   ratings: 0,
  // },
  // {
  //   bookingId: "1234dff",
  //   date: "10-Dec-2024",
  //   userName: "John Doe",
  //   bookingType: "Turf1 & Turf2",
  //   timings: "8.30pm-4.30pm",
  //   comments: "",
  //   bookingCompleted: "yes",
  //   ratings: 2,
  // },
  // {
  //   bookingId: "1234DFR",
  //   date: "15-Dec-2024",
  //   userName: "John Doe",
  //   bookingType: "Turf1 & Turf2",
  //   timings: "8.30pm-4.30pm",
  //   comments:
  //     "Great badminton experience! The court was well-maintained, and the booking process was smooth. Only suggestion would be to have more lighting. Overall, enjoyed the game",
  //   bookingCompleted: "yes",
  //   ratings: 5,
  // },
];
export default function UserProfile() {

  const [user, setUser] = useState(null);
  const [userBooking, setUserBooking] = useState([]);


  useEffect(() => {
    const user = localStorage.getItem('user');
      const userData =user && JSON.parse(user);
      setUser(userData);
  }, []);

  useEffect(() => {
    if(user){
    setUserBooking(user["bookingHistory"])
    }
   console.log("userr",user&&user["bookingHistory"])
  }, [user]);
  useEffect(() => {
    if(userBooking.length>0){
      userBooking.map((data) => {
     return userDetails.push( {
      bookingId: data["id"],
      date: DateUtils.formatDate(data["dateOfBooking"],"DD-MMM-YYYY"),
      userName: "John Doe",
      bookingType: "Turf1 & Turf2",
      timings: "3.30pm-4.30pm",
      comments: "",
      bookingCompleted: "no",
      refundCompleted: "no",
      ratings: 0,
    });
      })
    }
  }, [userBooking]);

  // const userDetails: userType[] = [
  //   {
  //     bookingId: "1234dff",
  //     date: "12-Jan-2024",
  //     userName: "John Doe",
  //     bookingType: "Turf1 & Turf2",
  //     timings: "3.30pm-4.30pm",
  //     comments: "",
  //     bookingCompleted: "no",
  //     refundCompleted: "no",
  //     ratings: 0,
  //   },
  
  return (
    <>
      <AppContainer p={0}>
        <Grid
          gap={{ xs: "2rem", sm: "2rem", md: 0 }}
          container
          py={{ xs: 3, sm: 3, md: 13 }}
          sx={{
            padding: "0 20px",
          }}
        >
          <Grid
            sx={
              {
                display: "flex",
                justifyContent: {
                  xs: "center",
                  sm: "center",
                  md: undefined,
                  lg: undefined,
                },
                height: "100%",
              } as any
            }
            item
            xs={12}
            sm={12}
            md={6}
          >
            <Card
              sx={{
                maxWidth: 404,
                width: "100%",
                boxShadow: `0 12px 14px 0 rgba(0,0,0,0.2)`,
                transition: "0.3s",
                height: "100%",
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  maxHeight: "404px",
                }}
                image={Image6}
                alt="green iguana"
              />
              <Stack
                direction="column"
                spacing={1}
                margin="0 auto"
                padding="20px 32px"
                sx={{ backgroundColor: Colors.WHITE }}
              >
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  fontWeight={600}
                >
                  Name
                </Typography>
                <Typography variant="body1">Badminton & Board games</Typography>
              </Stack>
            </Card>
          </Grid>
          <Grid
            sx={
              {
                maxWidth: { xs: "100%", sm: "100%", md: "100%" },
              } as any
            }
            item
            xs={12}
            sm={12}
            md={6}
          >
            <Stack direction="column" spacing={1}>
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography variant="body1" fontWeight={600}>
                  Email Address
                </Typography>
                <Typography variant="body1">email_id@gmail.com</Typography>
                <img src={layer} width={13} height={12} alt="edit" />
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography variant="body1" fontWeight={600}>
                  Phone Number
                </Typography>
                <Typography variant="body1">8956232515</Typography>
                <img src={layer} width={13} height={12} alt="edit" />
              </Stack>
            </Stack>
            <Stack direction="row" pt={5} pb={2}>
              <Typography
                gutterBottom
                variant="h6"
                color={Colors.BUTTON_COLOR}
                fontWeight={600}
              >
                Booking History
              </Typography>
              <img
                src={ball}
                width={53}
                height={53}
                alt="ball"
                style={{
                  position: "absolute",
                  transform: "rotate(165deg) translate(-135px, -18px)",
                }}
              />
            </Stack>
            <ListCard userDetails={userDetails} />
          </Grid>
        </Grid>
      </AppContainer>
      <Box
        component="img"
        src={ball2}
        width={200}
        height={200}
        alt="ball2"
        sx={{
          position: "absolute",
          transform: `translate(130px, 61rem)`,
          display: { xs: "none", sm: "none", md: "none", lg: "block" },
        }}
      />
      <img src={RectangleImage} width="100%" height={50} alt="bottom" />
    </>
  );
}
