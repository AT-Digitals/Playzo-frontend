import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import Image1 from "../assets/pexels-karolina-grabowska-4966368.jpg";
import Image2 from "../assets/pexels-photo-8007500.webp";
import Image3 from "../assets/pexels-photo-2202685.webp";
import CarouselCardComponent from "./CarouselCardComponent";
import Colors from "../CommonComponents/Colors";

interface HotelCard {
    imageSrc: string;
    name: string;
    type: string;
    member: string;
    feedback: string;
    ratings: number;
    
}

const CardDetails: HotelCard[] = [
    {
        imageSrc: Image3,
        name: "Anand",
        type: "Badminton,",
        member: "Member since 2022",
        feedback:
            "I had a great experience playing badminton at Playzo33! The professional-level courts provided an excellent playing surface, and the well-lit environment made it easy to enjoy games even in the evening. The booking process was straightforward, and the overall atmosphere was friendly and inviting. I appreciate the attention to detail and the effort put into maintaining high-quality badminton facilities. Looking forward to my next game!",
        ratings: 4.5,
    },
    {
        imageSrc: Image2,
        name: "Shwetha",
        type: "Badminton,",
        member: "Member since 2022",
        feedback:
            "By far the two best features are the ease of use and the customer service. The app is SOOOO easy to use for everyone and customer service answers on the second ring EVERY.",
        ratings: 5,
    },
    {
        imageSrc: Image1,
        name: "Prakash",
        type: "Badminton,",
        member: "Member since 2022",
        feedback:
            "I also love how quick the Playground team is to support us when we have questions or need something fixed. I also love how quick the Playground team is to support us when we have questions or need something fixed.",
        ratings: 3,
    },
];

export default function CarouselComponent() {
    const initialCardsToShowMobile = 2;
    const initialCardsToShowWeb = 3;

    const [startIndex, setStartIndex] = useState(0);
    const [cardIndex, setCardIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const isWeb = useMediaQuery("(min-width:600px)");
    const initialCardsToShow = isWeb ? initialCardsToShowWeb : initialCardsToShowMobile;

    // Initialize visibleCards
    let visibleCards: HotelCard[] = [];

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setCardIndex((prevIndex) => (prevIndex + 1) % visibleCards.length);
    //         setLoading(false);
    //     }, 5000);
    //     return () => clearTimeout(timer);
    // }, [cardIndex, visibleCards.length]);


   const showNextCards = () => {
        const nextIndex = (cardIndex + 1) % CardDetails.length;
        setStartIndex((prevIndex) => Math.min(prevIndex + 1, CardDetails.length - initialCardsToShow));
        setCardIndex(nextIndex);
    };

    const showPreviousCards = () => {
        const prevIndex = (cardIndex - 1 + CardDetails.length) % CardDetails.length;
        setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
        setCardIndex(prevIndex);
    };


    if (isWeb) {
        visibleCards = CardDetails.slice(startIndex, startIndex + initialCardsToShow).map(
            (card, index) => {
                return { ...card, name: CardDetails[startIndex + index].name };
            }
        );
    } else {
        visibleCards = [
            { ...CardDetails[CardDetails.length - 1], name: "Anand" },
            { ...CardDetails[0], name: "Anand" },
        ];
    }

    return (
        <Box sx={{ backgroundColor: Colors.BLACK }} mb={"32px"} width="100%">
            <Typography
                pt={"60px"}
                textAlign={"center"}
                color={Colors.WHITE}
                fontSize={"42px"}
                fontWeight={"bold"}
            >
                Our Client Testimonials
            </Typography>
            <Stack
                flexDirection={{ xs: "row-reverse", sm: "row-reverse", md: "row-reverse", lg: "row" }}
                spacing={3}
                maxWidth={1400}
                margin="auto"
                pt={{ xs: '0px', sm: '0px', md: "0px", lg: "0px" }}
                pb={{ xs: '0px', sm: '0px', md: "0px", lg: "60px" }}
                alignItems={{ xs: "baseline", sm: 'baseline', md: "baseline", lg: "normal" }}
            >
                {visibleCards.map((card, index) => (
                    <CarouselCardComponent
                        key={index}
                        card={CardDetails}
                        showDetails={index === cardIndex}
                        nextClick={showNextCards}
                        prevClick={showPreviousCards} index={startIndex + index} />
                ))}
            </Stack>
        </Box>
    );
}