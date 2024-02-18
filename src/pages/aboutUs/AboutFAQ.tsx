import { Box, Typography } from "@mui/material";

import Colors from "../../CommonComponents/Colors";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";

const FaqItems = [
  {
    paragraph: "How do I book a turf or facility?",
    feedback:
      "Refunds are processed within 5-7 business days through the original payment method.",
  },
  {
    paragraph: "Can I make changes to my booking?",
    feedback:
      "Refunds are processed within 5-7 business days through the original payment method.",
  },
  {
    paragraph: "What is the cancellation policy?",
    feedback:
      "Refunds are processed within 5-7 business days through the original payment method.",
  },
  {
    paragraph: "How are refunds processed?",
    feedback:
      "Refunds are processed within 5-7 business days through the original payment method.",
  },
];

export default function AbouFaQ() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index: any) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <Box mt={2} borderTop={"1px solid gray"}>
      {FaqItems.map((item, index) => (
        <Box
          key={index}
          width={"100%"}
          maxWidth={{ xs: "323px", sm: "323px", md: "323px", lg: "1200px" }}
          mt={"15px"}
          borderBottom={"1px solid grey"}
        >
          <Box
            mb="15px"
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography
              color={Colors.BLACK}
              fontWeight={"600"}
              fontSize={{ xs: "13px", sm: "13px", md: "13px", lg: "18px" }}
              padding={{
                xs: "12px 21px",
                sm: "12px 21px",
                md: "12px 21px",
                lg: "12px 25px",
              }}
            >
              {item.paragraph}
            </Typography>
            <KeyboardArrowDownIcon
              onClick={() => handleToggle(index)}
              sx={{
                fontSize: "25px",
                margin: "10px 15px",
                transform:
                  expandedIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                cursor: "pointer",
              }}
            />
          </Box>
          {expandedIndex === index && (
            <Typography
              mb={"10px"}
              color={Colors.BLACK}
              fontWeight={"500"}
              fontSize={"15px"}
              padding={"0px 25px"}
            >
              {item.feedback}
            </Typography>
          )}
        </Box>
      ))}
    </Box>
  );
}
