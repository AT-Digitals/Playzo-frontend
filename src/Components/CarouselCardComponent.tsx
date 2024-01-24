import {
    Box,
    Button,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Rating,
    Stack,
    Typography,
} from "@mui/material";
import { title } from "process";
import Colors from "../CommonComponents/Colors";
import CustomButton from "../CommonComponents/CustomButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import icon from "../assets/img-4 1.png";

interface HotelCard {
    feedback: string;
    ratings: number;
    imageSrc: string;
    name: string;
    type: string;
    member: string;
}

interface cardProps {
    cardDetails: HotelCard;
    showDetails: boolean;
    nextClick: () => void;
    prevClick: () => void;
}

export default function CarouselCardComponent({
    cardDetails,
    showDetails,
    nextClick,
    prevClick,
}: cardProps) {
    return (
        <Stack
            direction="row"
            alignItems="flex-end"
            maxWidth={900}
            sx={{
                backgroundColor: Colors.BLACK,
            }}
        >
            {showDetails ? (
                <Stack direction="row" spacing={3}>
                    <img
                        height="492px"
                        src={cardDetails.imageSrc}
                        alt="green iguana"
                        width="327px !important"
                    />
                    <Stack direction="column" spacing={2} width="370px" py={2}>
                        <Rating value={cardDetails.ratings} readOnly />
                        <Typography color={Colors.WHITE} fontSize="18px">
                            {cardDetails.feedback}
                        </Typography>
                        <Stack direction="column" sx={{ backgroundColor: Colors.BLACK }}>
                            <Typography
                                gutterBottom
                                component="div"
                                fontSize="24px"
                                fontWeight={600}
                                color={Colors.BUTTON_COLOR}
                            >
                                {cardDetails.name}
                            </Typography>
                            <Typography
                                gutterBottom
                                fontSize="16px"
                                component="div"
                                color={Colors.BUTTON_COLOR}
                            >
                                {cardDetails.type}
                            </Typography>
                            <Typography
                                gutterBottom
                                fontSize="16px"
                                component="div"
                                color={Colors.BUTTON_COLOR}
                            >
                                <i> {cardDetails.member}</i>
                            </Typography>
                        </Stack>
                        <Stack direction="row" spacing={2}>
                            <Button onClick={prevClick} sx={{
                                padding: "15px 5px",
                                background: "#36454F",
                                borderRadius: "50%",
                                minWidth: "24px !important",
                                height: "24px",
                                alignItems: "center"

                            }}>
                                <ArrowBackIosIcon style={{
                                    color: Colors.WHITE, fontSize: "20px",
                                    textAlign: "center"
                                }} />
                            </Button>
                            <Button onClick={nextClick} sx={{
                                padding: "15px 5px",
                                background: "#36454F",
                                borderRadius: "50%",
                                minWidth: "24px !important",
                                height: "24px",
                                alignItems: "center"

                            }}>
                                <ArrowForwardIosIcon style={{
                                    color: Colors.WHITE, fontSize: "20px",
                                    textAlign: "center"
                                }} />
                            </Button>
                        </Stack>
                    </Stack>
                    <img src={icon} width={159} height={252} alt="carousel-Icon" style={{
                        position: "absolute",
                        transform: `translate(340%, 127%)`
                    }} />
                </Stack>
            ) : (
                <Box>
                    <img
                        height="290"
                        src={cardDetails.imageSrc}
                        alt="green iguana"
                        width="192"
                    />
                    <Stack
                        direction="column"
                        sx={{ backgroundColor: Colors.BLACK }}
                        paddingY={3}
                    >
                        <Typography
                            gutterBottom
                            variant="h5"
                            fontSize="16px"
                            component="div"
                            fontWeight={600}
                            color={Colors.WHITE}
                        >
                            {cardDetails.name}
                        </Typography>
                        <Typography
                            gutterBottom
                            fontSize="12px"
                            component="div"
                            color={Colors.WHITE}
                        >
                            {cardDetails.type}
                        </Typography>
                        <Typography
                            gutterBottom
                            fontSize="12px"
                            component="div"
                            color={Colors.WHITE}
                        >
                            <i>{cardDetails.member}</i>
                        </Typography>
                    </Stack>
                </Box>
            )}
        </Stack>
    );
}
