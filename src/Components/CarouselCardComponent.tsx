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
import { FiberManualRecord as FiberManualRecordIcon, West as WestIcon, East as EastIcon } from '@mui/icons-material';
import icon from "../assets/img-4 1.png";
import Layer3 from "../assets/Layer_3.png";
import styled from "@emotion/styled";
import { useState } from "react";

const StyledImage = styled.img`

@media (min-width: 300px) {
  /* Extra small devices (phones) */
  width: 100%; /* Adjust width to fill the container */
  height: auto; /* Maintain aspect ratio */
}

@media (min-width: 768px) {
  /* Small devices (tablets) */
  width: 100%; /* Adjust width to fill the container */
  height: auto; /* Maintain aspect ratio */
}

@media (min-width: 992px) {
  /* Medium devices (desktops) */
  width: 100%; /* Adjust width to fill the container */
  height: auto; /* Maintain aspect ratio */
}

@media (min-width: 1200px) {
  /* Large devices (large desktops) */
  width: 700px; /* Adjust width to fill the container */
  height: 350px; /* Maintain aspect ratio */
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
    transform: translate(727%, 117%);
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
    card: HotelCard[];
    showDetails: boolean;
    nextClick: () => void;
    prevClick: () => void;
}

export default function CarouselCardComponent({
    card,
    showDetails,
    nextClick,
    prevClick,
}: cardProps) {
    const [activeIndex, setActiveIndex] = useState(0); // State to keep track of active card index

    const handleIconClick = (index: number) => {
        setActiveIndex(index);
    };
    const activeCard = card[activeIndex];

    return (
        <Stack
            direction="row"
            
            sx={{
                backgroundColor: Colors.BLACK,
            }}
        >
            {showDetails ? (
                <Stack margin={{xs: "30px -93px", sm: '30px -93px', md: "30px -93px", lg: ""}} direction={{xs: "column", sm: "column", md: "column", lg: "row"}} spacing={3}>
                    {/* <StyledImage3 src={Layer3} alt="layer3" /> */}
                    <StyledImage
                        src={activeCard.imageSrc}
                        alt="green iguana"
                    />
                    <Stack height={"100%"} sx={{transform: "translate(22%, 84px)"}} direction="column" spacing={2} py={2}>
                        <Rating value={activeCard.ratings} readOnly />
                        <Typography width={"100%"} maxWidth={{xs: "322px", sm: "322px", md: '322px', lg: "550px"}} color={Colors.WHITE} fontSize={{xs: '15px', sm: "15px", md: '15px', lg: "16px"}}>
                            {activeCard.feedback}
                        </Typography>
                        <Stack height={"100%"} direction="column" sx={{ backgroundColor: Colors.BLACK }}>
                            <Typography mb={"0px"}
                                gutterBottom
                                component="div"
                                fontSize="20px"
                                fontWeight={600}
                                color={Colors.WHITE}
                            >
                                {activeCard.name}
                            </Typography>
                            <Stack fontStyle={"italic"} direction={"row"} display={"flex"} gap={"5px"}>
                            <Typography
                                gutterBottom
                                fontSize="16px"
                                component="div"
                                color={Colors.WHITE}
                            >
                                {activeCard.type}
                            </Typography>
                            <Typography
                                gutterBottom
                                fontSize="16px"
                                component="div"
                                color={Colors.WHITE}
                            >
                                <i> {activeCard.member}</i>
                            </Typography>
                            </Stack>
                        </Stack>
                        <Stack  style={{ marginTop: "0px", width: "56px", transform: "translate(-1150%, -30px)" }} direction="row" spacing={2}>
                        <Button onClick={prevClick} sx={{
                      padding: "18px 7px",
                      borderRadius: "50%",
                      minWidth: "24px !important",
                      height: "24px",
                      alignItems: "center",
                          }}>
                    <WestIcon sx={{
                       color: Colors.WHITE,
                       fontSize: { xs: "15px", sm: "15px", md: "15px", lg: "28px" },
                        textAlign: "center",
                        marginLeft: "4px"
        }} />
    </Button>
    <Button onClick={nextClick} sx={{
        padding: "18px 7px",
        borderRadius: "50%",
        minWidth: "24px !important",
        height: "24px",
        alignItems: "center"
    }}>
        <EastIcon sx={{
            color: Colors.WHITE,
            fontSize: { xs: "15px", sm: "15px", md: "15px", lg: "28px" },
            textAlign: "center",
            marginLeft: "4px"
        }} />
    </Button>
</Stack>
<Stack style={{transform: "translate(39%, -70px)"}} direction="row" spacing={0.5} justifyContent="center" mt={1}>
{card.map((card, index) => (
                            <FiberManualRecordIcon
                                key={index}
                                sx={{
                                    color: index === activeIndex ? Colors.WHITE : Colors.WHITE,
                                    cursor: 'pointer',
                                    fontSize: "14px",
                                    opacity: index === activeIndex ? "100%" : "40%"
                                    
                                }} 
                                onClick={() => handleIconClick(index)}
                                
                            />
                        ))}
                    </Stack>
                    </Stack>
                    {/* <StyledImage2 src={icon} alt="carousel-Icon" /> */}
                </Stack>
            ) : (
                <Box>
                    {/* <StyledImage1
                        src={cardDetails.imageSrc}
                        alt="green iguana"
                       
                    /> */}
                    {/* <Stack
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
                        </Typography> */}
                    {/* </Stack> */}
                </Box>
            )}
        </Stack>
    );
}
