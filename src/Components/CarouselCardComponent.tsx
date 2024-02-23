import {
    Box,
    Stack,
    Typography,
} from "@mui/material";
import Colors from "../CommonComponents/Colors";
import { FiberManualRecord as FiberManualRecordIcon } from '@mui/icons-material';
import styled from "@emotion/styled";
import { useEffect, useState } from "react";

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
  transition: transform 0.5s ease-in-out;
  width: 700px; /* Adjust width to fill the container */
  height: 350px; /* Maintain aspect ratio */
  border-radius: 10px;
}
`;
const CarouselContainer = styled(Stack)`
  transition: transform 0.9s ease-in-out;
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
    nextClick: (index: any) => void;
    prevClick: (index: any) => void;
    index: any;
}

export default function CarouselCardComponent({
    card,
    showDetails,
    nextClick,
    prevClick,
    index,
}: cardProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prevIndex) =>
                prevIndex === card.length - 1 ? 0 : prevIndex + 1
            );
        }, 6000);

        return () => clearInterval(timer);
    }, [card.length]);

    const handleIconClick = (index: number) => {
        setActiveIndex(index);
    };
    
    useEffect(() => {
        setActiveIndex(index);
    }, [showDetails, index]);
    const activeCard = card[activeIndex];

    return (
        <CarouselContainer
            direction="row"
            sx={{
                backgroundColor: Colors.BLACK,
                transform: showDetails ? "translateX(-100%, 0px)" : "translateX(100%, 0px)", // Apply dynamic transformation
                height: showDetails ? "auto" : "0",
                transition: showDetails ? "height 0.5s ease-in-out, transform 0.9s ease-in-out" : "height 0.5s ease-in-out",
            }}
        >
            {showDetails ? (
                <Stack margin={{xs: "30px -93px", sm: '30px -93px', md: "30px -93px", lg: ""}} direction={{xs: "column", sm: "column", md: "column", lg: "row"}} spacing={3}>
                    <StyledImage
                        src={activeCard.imageSrc}
                        alt="green iguana"
                        style={{
                            
                        }}
                    />
                    <Stack height={"100%"} sx={{transform: "translate(22%, 0px)"}} direction="column" spacing={2} py={2}>
                        <Typography width={"100%"} maxWidth={{xs: "322px", sm: "322px", md: '322px', lg: "550px"}} color={Colors.WHITE} fontSize={{xs: '15px', sm: "15px", md: '15px', lg: "16px"}} fontWeight={"400"}>
                            {activeCard.feedback}
                        </Typography>
                        <Stack alignItems={"end"} height={"100%"} direction="column" sx={{ backgroundColor: Colors.BLACK }}>
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
                <Stack style={{transform: "translate(-70%, 45px)", }} direction="row" spacing={0.5} justifyContent="center" mt={1}>
                    {card.map((card, index) => (
                            <FiberManualRecordIcon
                                key={index}
                                sx={{
                                    color: index === activeIndex ? Colors.WHITE : Colors.WHITE,
                                    cursor: 'pointer',
                                    fontSize: "14px",
                                    opacity: index === activeIndex ? "100%" : "40%",
                                    transition: "opacity 0.5s ease-in-out",
                                    
                                }} 
                                onClick={() => handleIconClick(index)}
                                
                            />
                        ))}
                    </Stack>
                    </Stack>
                </Stack>
            ) : (
                <Box>
                </Box>
            )}
        </CarouselContainer>
    );
}