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
  width: 330px;
  height: 180px;
  border-radius: 10px; /* Maintain aspect ratio */
}

@media (min-width: 768px) {
    transition: transform 0.5s ease-in-out;
    width: 600px;
    height: 350px;
    border-radius: 10px;
}

@media (min-width: 912px) {
    transition: transform 0.5s ease-in-out;
    width: 710px;
    height: 400px;
    border-radius: 10px;
}
@media (min-width: 1024px) {
    transition: transform 0.5s ease-in-out;
    width: 800px;
    height: 450px;
    border-radius: 10px;
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
const StyledStack = styled(Stack)`
  /* Media queries for different screen sizes */
  @media (min-width: 300px) {
    transform: translate(-24px, 10px);
  }

  @media (min-width: 414px) {
    transform: translate(-61px, 10px);
  }
  @media (min-width: 390px) {
    transform: translate(-43px, 10px);
  }

  @media (min-width: 430px) {
    transform: translate(-74px, 10px);
  }
  @media (min-width: 360px) {
    transform: translate(-23px, 10px);
  }
  @media (min-width: 412px) {
    transform: translate(-59px, 10px);
  }
  @media (min-width: 768px) {
    transform: translate(-149px, 10px);
  }
  @media (min-width: 820px) {
    transform: translate(-177px, 10px);
  }
  @media (min-width: 1024px) {
    transform: translate(-200px, 10px);
  }
  @media (min-width: 1200px) {
    transform: translate(2px, 10px);
  }
`;
const StyledStack1 = styled(Stack)`
  @media (min-width: 1280px) {
    transform: translate(0%, 0px);
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
                height: showDetails ? "auto" : "0",
                transition: showDetails ? "height 0.5s ease-in-out, transform 0.9s ease-in-out" : "height 0.5s ease-in-out",
            }}
        >
            {showDetails ? (
                <StyledStack margin={{xs: "30px 0px", sm: '30px 0px', md: "30px 0px", lg: "20px 32px"}} direction={{xs: "column", sm: "column", md: "column", lg: "row"}} spacing={3}>
                    <StyledImage
                        src={activeCard.imageSrc}
                        alt="green iguana"
                        style={{
                            
                        }}
                    />
                    <StyledStack1 height={"100%"} sx={{transform: {xs: "translate(2%, 0px)", sm: "translate(1%, 0px)", md: "translate(1%, 0px)", lg: "translate(17%, 0px)"}}} direction="column" spacing={2} pb={{xs: '0px', sm: "0px", md: "0px", lg: "16px"}}>
                        <Typography width={"100%"} maxWidth={{xs: "300px", sm: "600px", md: '650px', lg: "550px"}} color={Colors.WHITE} fontSize={{xs: '14px', sm: "14px", md: '14px', lg: "16px"}} fontWeight={"400"}>
                            {activeCard.feedback}
                        </Typography>
                        <Stack alignItems={{xs: "flex-start", sm: "flex-start", md: "flex-start", lg: "end"}} height={"100%"} direction="column" sx={{ backgroundColor: Colors.BLACK }}>
                            <Typography mb={"0px"}
                                gutterBottom
                                component="div"
                                fontSize={{xs: "16px", sm: "16px", md: '16px', lg: "20px"}}
                                fontWeight={600}
                                color={Colors.WHITE}
                            >
                                {activeCard.name}
                            </Typography>
                            <Stack fontStyle={"italic"} direction={"row"} display={"flex"} gap={"5px"}>
                            <Typography
                                gutterBottom
                                fontSize={{xs: '14px', sm: "14px", md: '14px', lg: "16px"}}
                                component="div"
                                color={Colors.WHITE}
                            >
                                {activeCard.type}
                            </Typography>
                            <Typography
                                gutterBottom
                                fontSize={{xs: '14px', sm: "14px", md: '14px', lg: "16px"}}
                                component="div"
                                color={Colors.WHITE}
                            >
                                <i> {activeCard.member}</i>
                            </Typography>
                            </Stack>
                        </Stack>
                <Stack sx={{transform: {xs: "translate(1%, 10px)", sm: "translate(12%, 10px)", md: "translate(10%, 10px)", lg: "translate(-50%, 45px)"}}} direction="row" spacing={0.5} justifyContent="center" mt={1}>
                    {card.map((card, index) => (
                            <FiberManualRecordIcon
                                key={index}
                                sx={{
                                    color: index === activeIndex ? Colors.WHITE : Colors.WHITE,
                                    cursor: 'pointer',
                                    fontSize: {xs: "12px", sm: "12px", md: "12px", lg: "14px"},
                                    opacity: index === activeIndex ? "100%" : "40%",
                                    transition: "opacity 0.5s ease-in-out",
                                    
                                }} 
                                onClick={() => handleIconClick(index)}
                                
                            />
                        ))}
                    </Stack>
                    </StyledStack1>
                </StyledStack>
            ) : (
                <Box>
                </Box>
            )}
        </CarouselContainer>
    );
}