import {
    Box,
    Stack,
} from "@mui/material";

import Image1 from "../assets/Rectangle 678.png";
import Image2 from "../assets/Rectangle 677.png";
import Image3 from "../assets/Rectangle 673.png";
import CarouselCardComponent from "./CarouselCardComponent";
import Colors from "../CommonComponents/Colors";
import Image5 from "../assets/Image (5).png";
import Image4 from "../assets/Image (3).png";

import { useState } from "react";

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
        imageSrc: Image1, // Replace with your actual image paths
        name: "Prakash",
        type: "Badminton",
        member: "Member since 2022",
        feedback: "I also love how quick the Playground team is to support us when we have questions or need something fixed. I also love how quick the Playground team is to support us when we have questions or need something fixed.",
        ratings: 3,
    },
    {
        imageSrc: Image2,
        name: "Shwetha",
        type: "Badminton",
        member: "Member since 2022",
        feedback: "By far the two best features are the ease of use and the customer service. The app is SOOOO easy to use for everyone and customer service answers on the second ring EVERY.",
        ratings: 5,
    },
    {
        imageSrc: Image3, // Replace with your actual image paths
        name: "Prakash",
        type: "Badminton",
        member: "Member since 2022",
        feedback: "I had a great experience playing badminton at Playzo33! The professional-level courts provided an excellent playing surface, and the well-lit environment made it easy to enjoy games even in the evening. The booking process was straightforward, and the overall atmosphere was friendly and inviting. I appreciate the attention to detail and the effort put into maintaining high-quality badminton facilities. Looking forward to my next game!",
        ratings: 4.5
    },
    {
        imageSrc: Image4,
        name: "Anand",
        type: "Badminton",
        member: "Member since 2022",
        feedback: "The playground staff is very helpful especially with them sending vides to help us figure out how to do something we haven't before.The playground staff is very helpful especially with them sending vides to help us figure out how to do something we haven't before.",
        ratings: 3.5,
    },
    {
        imageSrc: Image5,
        name: "Shwetha",
        type: "Badminton",
        member: "Member since 2022",
        feedback: "I went from doing everything the paper way to now everything is electronic from check in and out to all of the children files and mine on the Playground app. Love love the all the payment options.",
        ratings: 2.5,
    },
    {
        imageSrc: Image1,
        name: "Anand",
        type: "Badminton",
        member: "Member since 2022",
        feedback: "The statement dates were not correct and caused a lot of confusion for parents. Assigning the charges takes a lot of time for us as a large center with multiple age groups and price points.",
        ratings: 4,
    },
    // Add more hotel cards as needed
];

export default function CarouselComponent() {


    const initialCardsToShow = 3;

    const [startIndex, setStartIndex] = useState(0);

    const showNextCards = () => {
        setStartIndex((prevIndex) => Math.min(prevIndex + 1, CardDetails.length - initialCardsToShow));
    };

    const showPreviousCards = () => {
        setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };
    const visibleCards = CardDetails.slice(startIndex, startIndex + initialCardsToShow);

    return (
        <Box sx={{ backgroundColor: Colors.BLACK }} marginY={4} width="100%">
            <Stack
                direction="row"
                spacing={3}
                maxWidth={1200}
                margin="auto"
                paddingY={12}
            >
                {visibleCards.map((card, index) => (
                    <CarouselCardComponent key={index} cardDetails={card} showDetails={index === 2} nextClick={showNextCards} prevClick={showPreviousCards} />
                ))}
            </Stack>
        </Box>
    );
}

//sx={{ backgroundColor: Colors.LIGHT_GRAY, borderRadius: "50%" }} sx={{ fontSize: "22px" }}