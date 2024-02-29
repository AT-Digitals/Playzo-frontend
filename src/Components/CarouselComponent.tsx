import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import { useState } from "react";
import CarouselCardComponent from "./CarouselCardComponent";
import Colors from "../CommonComponents/Colors";
import assets from "../assets";

const {"pexels-photo-3660204.jpeg": Image1, "pexels-photo-4966378.jpeg": Image2, "pexels-photo-13710137.jpeg": Image3, "pexels-photo-187329.webp": Image4, "pexels-photo-8007173.jpeg": Image5} = assets

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
            "The app is SOOOO easy to use for everyone and customer service answers on the second ring EVERY. I also love how quick the Playground team is to support us when we have questions or need something fixed. I also love how quick the Playground team is to support us when we have questions or need something fixed.",
        ratings: 3,
    },
    {
        imageSrc: Image4,
        name: "Ananya",
        type: "Badminton,",
        member: "Member since 2022",
        feedback:
            "I also love how quick the Playground team is to support us when we have questions or need something fixed and team is to support us when we have questions or need something fixed.",
        ratings: 3,
    },
    {
        imageSrc: Image5,
        name: "Kamesh",
        type: "Badminton,",
        member: "Member since 2022",
        feedback:
            "I also love how quick the Playground team is to support us by far the two best features are the ease of use and the customer service is to support us when we have questions or need something fixed and team is to support us when we have questions or need something fixed.",
        ratings: 3,
    },
];

export default function CarouselComponent() {
    const initialCardsToShowMobile = 2;
    const initialCardsToShowWeb = 5;

    const [startIndex, setStartIndex] = useState(0);
    const [cardIndex, setCardIndex] = useState(0);
    const isWeb = useMediaQuery("(min-width:600px)");
    const initialCardsToShow = isWeb ? initialCardsToShowWeb : initialCardsToShowMobile;

    // Initialize visibleCards
    let visibleCards: HotelCard[] = [];

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
             <Stack  pt={{xs: "30px", sm: "30px", md: "30px", lg: "60px"}}>
            <Box
              width={"24%"}
              border={`2px solid ${Colors.BUTTON_COLOR}`}
              marginLeft={{xs: "20px", sm: "20px", md: '20px', lg: "49px"}}
              marginBottom={"10px"}
            ></Box>
            <Typography
                fontSize={{xs: "22px", sm: '22px', md: "22px", lg: "42px"}}
                marginLeft={{xs: "16px", sm: "16px", md: "16px", lg: "36px"}}
                fontWeight={"600"}
                color={Colors.WHITE}
                fontStyle={"italic"}
                textTransform={"uppercase"}
            >
                WHAT OUR CUSTOMER SAYS?
            </Typography>
            </Stack>
            <Stack
                flexDirection={{ xs: "row-reverse", sm: "row-reverse", md: "row-reverse", lg: "row" }}
                spacing={3}
                width={"100%"}
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