import {
    Box,
    Grid,
    Link,
    Stack,
    Typography,
} from "@mui/material";

import Image1 from "../assets/Rectangle 67.png";
import Image2 from "../assets/Rectangle 669.png";
import Colors from "../CommonComponents/Colors";

import CardMedia from "@mui/material/CardMedia";

import turf from "../assets/turf.png";
import CustomButton from "../CommonComponents/CustomButton";
import CardComponent from "./CardComponent";
import playstation from "../assets/playstation.png";
import boardGames from "../assets/board games.png";
import ball from "../assets/ball 1.png";
import Image3 from "../assets/Image (3).png";
import Image4 from "../assets/Image (4).png";
import Image5 from "../assets/Image (5).png";
import ball3 from "../assets/ball 3.png";
import ComponentCarosel from "./ComponentCarosel";
import CarouselComponent from "./CarouselComponent";
import Badminton from "../assets/Image (8).png";
import Machine from "../assets/Image (7).png";
import Cricket from "../assets/Image (9).png";
import Layer2 from "../assets/Layer_2.png";
import Layer1 from "../assets/Layer_1 (1).png";
import styled from "styled-components";

const StyledTypo = styled(Typography)({
    color: Colors.WHITE,
    position: "absolute",
    top: "100px",
    // left: '50%',
    transform: "translate(128%, 258%)",
    fontSize: "5rem",
    textAlign: "center",
    zIndex: 1,
});

const items = [
    {
        title: "Special Weekday Rates",
        label: "Avail Now!",
        description:
            "Enjoy our exclusive weekday rates and make the most of your afternoons with friends. Book now and save!",
        image: Image3,
    },
    {
        title: "Playzo Membership",
        label: "Explore Now!",
        description:
            "Unlock a world of benefits with Playzo Membership. Enjoy discounts priority access, and member-only events!",
        image: Image4,
    },
    {
        title: "Celebration Package",
        label: "Book Now!",
        description:
            "Host your next celebration at Playzo! Our Celebration Package includes turf time, activities, and a dedicated party area.",
        image: Image5,
    },
    // {
    //     title: "Special Weekday Rates",
    //     label: 'Avail Now!',
    //     description: 'Enjoy our exclusive weekday rates and make the most of your afternoons with friends. Book now and save!',
    //     image: Image3,
    // },
    // {
    //     title: "Playzo Membership",
    //     label: 'Explore Now!',
    //     description: 'Unlock a world of benefits with Playzo Membership. Enjoy discounts priority access, and member-only events!',
    //     image: Image4,
    // },
    // {
    //     title: "Celebration Package",
    //     label: 'Book Now!',
    //     description: 'Host your next celebration at Playzo! Our Celebration Package includes turf time, activities, and a dedicated party area.',
    //     image: Image5,
    // },
];

const StyledButton = styled(CustomButton)({
    fontSize: "20px",
    textTransform: "none",
    fontWeight: 600,
    position: "absolute",
    top: "100px",
    transform: "translate(450%, -900%)",
    padding: "12px 20px !important",
    fontFamily: "Inter",
});

export default function HomePage() {
    return (
        <Box width="100%">
            <CardMedia
                component="img"
                //height="194"
                image={Image1}
                alt="Paella dish"
            />
            <img
                src={Image2}
                alt="background"
                style={{
                    position: "absolute",
                    top: 0,
                    width: "1240px",

                    transform: `translate(${0}, ${10.5}%)`,
                }}
            />

            <StyledTypo variant="h3" fontWeight={600} fontFamily="Inter" fontSize="4.5rem">
                Play Beyond <br /> Boundaries
            </StyledTypo>
            <img
                src={ball3}
                alt="banner"
                width={250}
                height={250}
                style={{
                    position: "absolute",
                    top: "100px",
                    transform: "translate(385%, 102%)",
                }}
            />
            <StyledButton
                bgColor={Colors.BUTTON_COLOR}
                variant="contained"
                color={Colors.WHITE}
                sx={{ fontFamily: "Inter", fontWeight: 600 }}
            >
                Book Now
            </StyledButton>
            <Box
                sx={{ backgroundColor: Colors.WHITE }}
                width="100%"
                maxWidth={1200}
                margin="0 auto"
                paddingTop={8}
                pb={4}
            >
                <img
                    src={Layer2}
                    width={82}
                    height={113}
                    alt="Layer2"
                    style={{ position: "absolute", transform: `translate(180px, -43px)` }}
                />
                <Typography
                    variant="h2"
                    color={Colors.BLACK}
                    textAlign="center"
                    fontSize="32px"
                    fontWeight={700}
                    width={700}
                    margin="auto"
                    sx={{ fontFamily: "Inter" }}
                >
                    We offer a diverse range of{" "}
                    <span style={{ color: Colors.BUTTON_COLOR }}>
                        <i>services</i>
                    </span>{" "}
                    to cater to the varied interests of our community.
                </Typography>
            </Box>
            <Grid
                container
                width="100%"
                maxWidth={1200}
                margin="0 auto"
                spacing={3}
                pb={3}
            >
                <Grid item xs={4}>
                    <CardComponent
                        buttonLabel="Know more.."
                        title={"Turf"}
                        description={
                            "Kick off your sports adventure on our two top-notch turfs, perfect for football, and cricket."
                        }
                        image={turf}
                    />
                </Grid>
                <Grid item xs={4}>
                    <CardComponent
                        buttonLabel="Know more.."
                        title={"Play Station"}
                        description={
                            "Immerse yourself in the ultimate gaming experience with the latest consoles and a wide game selection."
                        }
                        image={playstation}
                    />
                </Grid>
                <Grid item xs={4}>
                    <CardComponent
                        buttonLabel="Know more.."
                        title={"Board Games"}
                        description={
                            "Explore timeless and modern board games, fostering laughter and friendly competition for a delightful time."
                        }
                        image={boardGames}
                    />
                </Grid>
                <img
                    src={Layer1}
                    width={37}
                    height={37}
                    alt="layer1"
                    style={{
                        position: "absolute",
                        transform: "translate(74rem, 30rem)",
                    }}
                />
                <img
                    src={Layer1}
                    width={37}
                    height={37}
                    alt="layer1"
                    style={{
                        position: "absolute",
                        transform: "translate(10px, 62rem)",
                    }}
                />
                <Grid item xs={4}>
                    <CardComponent
                        buttonLabel="Know more.."
                        title={"Badminton"}
                        description={
                            "Ace every shot on our professional Badminton courts, where passion meets precision."
                        }
                        image={Badminton}
                    />
                </Grid>
                <Grid item xs={4}>
                    <CardComponent
                        buttonLabel="Know more.."
                        title={"Cricket Net"}
                        description={
                            "Refine your cricket prowess where every practice session is designed to elevate your game to new heights."
                        }
                        image={Cricket}
                    />
                </Grid>
                <Grid item xs={4}>
                    <CardComponent
                        buttonLabel="Know more.."
                        title={"Bowling Machine"}
                        description={
                            "Precision meets practice – polish your cricket skills with our cutting-edge Bowling Machine."
                        }
                        image={Machine}
                    />
                </Grid>
            </Grid>
            <Box width="100%" maxWidth={1200} margin="0 auto" paddingY={4}>
                <Stack direction="row" justifyContent="end" alignItems="center">
                    <img
                        src={ball}
                        alt="ball1"
                        width={100}
                        height={100}
                        style={{ position: "absolute", right: "275px" }}
                    />
                    <Link
                        href=""
                        sx={{
                            textDecoration: "none",
                            color: Colors.BUTTON_COLOR,
                            fontSize: "18px",
                            fontWeight: 600,
                            ".css-olvtuu-MuiTypography-root-MuiLink-root:hover": {
                                textDecoration: "underline",
                            },
                        }}
                    >
                        see more services
                    </Link>
                </Stack>
            </Box>
            <CarouselComponent />
            <Box width="100%" maxWidth={1200} margin="0 auto" paddingY={4}>
                <Stack direction="row" justifyContent="start" alignItems="center">
                    <Link
                        sx={{
                            textDecoration: "none",
                            color: Colors.BUTTON_COLOR,
                            fontSize: "40px",
                            fontWeight: 500,
                        }}
                    >
                        Offers
                    </Link>
                    <img
                        src={ball}
                        alt="ball1"
                        width={150}
                        height={150}
                        style={{
                            transform: "scaleX(-1)",
                            position: "absolute",
                            left: "225px",
                        }}
                    />
                </Stack>
            </Box>
            <ComponentCarosel />
        </Box>
    );
}
