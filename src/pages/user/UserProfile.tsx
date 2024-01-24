import {
    Card,
    CardActionArea,
    Stack,
    CardMedia,
    Grid,
    Typography,
} from "@mui/material";
import AppContainer from "../../CommonComponents/AppContainer";
import Image6 from "../../assets/Image (6).png";
import Colors from "../../CommonComponents/Colors";
import RectangleImage from "../../assets/Rectangle 679.png";
import layer from "../../assets/Layer_1.png";
import ball from "../../assets/ball 1.png";
import ListCard from "./ListCard";

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
    {
        bookingId: "1234dff",
        date: "12-Jan-2024",
        userName: "John Doe",
        bookingType: "Turf1 & Turf2",
        timings: "3.30pm-4.30pm",
        comments: "",
        bookingCompleted: "no",
        refundCompleted: "no",
        ratings: 0,
    },
    {
        bookingId: "1234dff",
        date: "15-Jan-2024",
        userName: "John Doe",
        bookingType: "Turf1 & Turf2",
        timings: "2.30pm-4.30pm",
        comments: "",
        bookingCompleted: "no",
        refundCompleted: "yes",
        ratings: 0,
    },
    {
        bookingId: "1234dff",
        date: "10-Dec-2024",
        userName: "John Doe",
        bookingType: "Turf1 & Turf2",
        timings: "8.30pm-4.30pm",
        comments: "",
        bookingCompleted: "yes",
        ratings: 2,
    },
    {
        bookingId: "1234DFR",
        date: "15-Dec-2024",
        userName: "John Doe",
        bookingType: "Turf1 & Turf2",
        timings: "8.30pm-4.30pm",
        comments:
            "Great badminton experience! The court was well-maintained, and the booking process was smooth. Only suggestion would be to have more lighting. Overall, enjoyed the game",
        bookingCompleted: "yes",
        ratings: 5,
    },
];
export default function UserProfile() {
    return (
        <>
            <AppContainer>
                <Grid container py={13}>
                    <Grid item xs={5}>
                        <Card
                            sx={{
                                maxWidth: 404,
                                boxShadow: `0 12px 14px 0 rgba(0,0,0,0.2)`,
                                transition: "0.3s",
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="404"
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
                    <Grid item xs={7}>
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
            <img src={RectangleImage} width="100%" height={50} alt="bottom" />
        </>
    );
}
