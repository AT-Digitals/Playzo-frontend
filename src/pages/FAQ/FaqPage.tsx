import { useState } from 'react';
import { Box, Typography } from "@mui/material";
import Colors from "../../CommonComponents/Colors";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ball from "../../assets/ball 4.png";
import grass from "../../assets/Rectangle 679.png";
const FaqItems = [
    {
        paragraph: "How do I book a turf or facility?"
    },
    {
        paragraph: "Can I make changes to my booking?"
    },
    {
        paragraph: "What is the cancellation policy?"
    },
    {
        paragraph: "How are refunds processed?",
        feedback: "Refunds are processed within 5-7 business days through the original payment method."
    }
]

export default function FaqPage() {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleToggle = (index: any) => {
        setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <>
            <Box width={"100%"} margin={{xs: "80px 30px", sm: '80px 30px', md: "80px 90px", lg: '80px 230px'}}>
                <Typography color={Colors.BUTTON_COLOR} fontSize={{xs: "18px", sm :'18px', md: "18px", lg: "22px"}} fontWeight={"600"}>Frequently Asked Questions</Typography>
                {FaqItems.map((item, index) => (
                    <Box key={index} width={"100%"} maxWidth={{xs: "323px", sm: "323px", md: '323px', lg: "1200px"}} mt={"25px"} borderRadius={"10px"} border={"1px solid grey"}>
                        <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                            <Typography color={Colors.BLACK} fontWeight={"600"} fontSize={{xs: "13px", sm :'13px', md: "13px", lg: "18px"}} padding={{xs: "12px 21px", sm: "12px 21px", md: "12px 21px", lg: "12px 25px"}}>
                                {item.paragraph}
                            </Typography>
                            <KeyboardArrowDownIcon
                                onClick={() => handleToggle(index)}
                                sx={{
                                    fontSize: "25px",
                                    margin: "10px 15px",
                                    transform: expandedIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                                    cursor: "pointer",
                                }}
                            />
                        </Box>
                        {expandedIndex === index && (
                            <Typography mb={"10px"} color={Colors.BLACK} fontWeight={"500"} fontSize={"15px"} padding={"0px 25px"}>
                                {item.feedback}
                            </Typography>
                        )}
                    </Box>
                ))}
            </Box>
            <Box display={"flex"} justifyContent={"end"}>
        <img src={ball} width={"150px"} alt="" />
      </Box>
      <img style={{ marginTop: "-40px" }} src={grass} alt="" />
        </>
    );
}