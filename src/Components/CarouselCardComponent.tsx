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
import Layer3 from "../assets/Layer_3.png";
import styled from "@emotion/styled";

const StyledImage = styled.img`

  @media (min-width: 300px) {
    /* Extra small devices (phones) */
    width: 264px;
    height: 350px;
  }

  @media (min-width: 768px) {
    /* Small devices (tablets) */
    width: 264px;
    height: 350px;
  }

  @media (min-width: 992px) {
    /* Medium devices (desktops) */
    width: 264px;
    height: 350px;
  }

  @media (min-width: 1200px) {
    /* Large devices (large desktops) */
    width: 327px;
    height: 492px;
  }
`;
const StyledImage1 = styled.img`

  @media (min-width: 300px) {
    /* Extra small devices (phones) */
    width: 55px;
    height: 80px;
    margin-right: 9px;
  }

  @media (min-width: 768px) {
    /* Small devices (tablets) */
    width: 55px;
    height: 80px;
    margin-right: 9px;
  }

  @media (min-width: 992px) {
    /* Medium devices (desktops) */
    width: 55px;
    height: 80px;
    margin-right: 9px;
  }

  @media (min-width: 1200px) {
    /* Large devices (large desktops) */
    width: 192px;
    height: 290px;
  }
`;
const StyledImage2 = styled.img`

  @media (min-width: 300px) {
    /* Extra small devices (phones) */
    width: 150px;
    height: 220px;
    position: absolute;
    transform: translate(116%, 294%);
  }

  @media (min-width: 768px) {
    /* Small devices (tablets) */
    width: 150px;
    height: 220px;
    position: absolute;
    transform: translate(116%, 294%);
  }

  @media (min-width: 992px) {
    /* Medium devices (desktops) */
    width: 150px;
    height: 220px;
    position: absolute;
    transform: translate(116%, 294%);
  }

  @media (min-width: 1200px) {
    /* Large devices (large desktops) */
    width: 159px;
    height: 252px;
    position: absolute;
    transform: translate(340%, 127%);
  }
`;
const StyledImage3 = styled.img`

  @media (min-width: 300px) {
    /* Extra small devices (phones) */
    width: 50px;
    height: 50px;
    position: absolute;
    transform: translate(-24px, -6px);
  }

  @media (min-width: 768px) {
    /* Small devices (tablets) */
    width: 50px;
    height: 50px;
    position: absolute;
    transform: translate(-24px, -6px);
  }

  @media (min-width: 992px) {
    /* Medium devices (desktops) */
    width: 50px;
    height: 50px;
    position: absolute;
    transform: translate(-24px, -6px);
  }

  @media (min-width: 1200px) {
    /* Large devices (large desktops) */
    width: 50px;
    height: 50px;
    position: absolute;
    transform: translate(0px, -28px);
  }
`;

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
                <Stack margin={{xs: "30px -93px", sm: '30px -93px', md: "30px -93px", lg: "30px 30px"}} direction={{xs: "column", sm: "column", md: "column", lg: "row"}} spacing={3}>
                    <StyledImage3 src={Layer3} alt="layer3" />
                    <StyledImage
                        src={cardDetails.imageSrc}
                        alt="green iguana"
                    />
                    <Stack direction="column" spacing={2} width="370px" py={2}>
                        <Rating value={cardDetails.ratings} readOnly />
                        <Typography maxWidth={{xs: "322px", sm: "322px", md: '322px', lg: "350px"}} color={Colors.WHITE} fontSize={{xs: '15px', sm: "15px", md: '15px', lg: "18px"}}>
                            {cardDetails.feedback}
                        </Typography>
                        <Stack  direction="column" sx={{ backgroundColor: Colors.BLACK }}>
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
                                <ArrowBackIosIcon sx={{
                                    color: Colors.WHITE, fontSize: {xs: "15px", sm: "15px", md: "15px", lg: "20px"},
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
                                <ArrowForwardIosIcon sx={{
                                    color: Colors.WHITE, fontSize: {xs: "15px", sm: "15px", md: "15px", lg: "20px"},
                                    textAlign: "center"
                                }} />
                            </Button>
                        </Stack>
                    </Stack>
                    <StyledImage2 src={icon} alt="carousel-Icon" />
                </Stack>
            ) : (
                <Box>
                    <StyledImage1
                        src={cardDetails.imageSrc}
                        alt="green iguana"
                       
                    />
                    <Stack
                        direction="column"
                        sx={{ backgroundColor: Colors.BLACK }}
                        paddingY={3}
                        display={{xs: "none", sm: 'none', md: 'none', lg: 'flex'}}
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
