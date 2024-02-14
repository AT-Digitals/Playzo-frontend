import { Box, Card, CardMedia, Stack, Typography } from "@mui/material";
import Colors from "../CommonComponents/Colors";
import arrow from "../assets/Group.png";
import { useState } from "react";

interface cardProps {
  image: string;
  title: string;
  description: string;
  buttonLabel: string;
}

export default function CardComponent({
  image,
  title,
  description,
  buttonLabel,
}: cardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <Card
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        maxWidth: 400,
        boxShadow: "none",
        borderRadius: "0px",
        height: { xs: "400px", sm: '400px', md: "400px", lg: "440px" },
        width: { xs: "319px", sm: '319px', md: "319px", lg: "287px" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
        ":hover": {
          boxShadow: { xs: "none", sm: "none", md: "none", lg: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgb(200,200,200)" },
          cursor: "pointer",
        },
      }}
    >
      <Stack
        direction="column"
        spacing={2}
        margin="0 auto"
        padding={{ xs: "25px", sm: '25px', md: "25px", lg: '' }}
        sx={{ backgroundColor: Colors.WHITE }}
      >
        <Typography fontSize="20px" variant="h6" fontWeight={600} textAlign="start">
          {title}
        </Typography>
        <Typography fontSize="16px" textAlign="start">{description}</Typography>
        <Box paddingTop={"15px"}  display={"flex"} alignItems={"center"} gap={"5px"} sx={{
          position: "relative",
          overflow: "hidden",
         
        }}>
          <span
            style={{
              position: "absolute",
              left: hovered ? 0 : "-100%",
              transition: "left 0.5s ease",
              textDecoration: hovered ? "underline" : "none",
              color: hovered ? Colors.BUTTON_COLOR : Colors.WHITE
            }}
          >
            {buttonLabel}
          </span>
          <img src={arrow} style={{ marginTop: "5px", marginLeft: hovered ? "38%" : "-100%", transition: "margin-left 0.5s ease" }} width={"15px"} alt="" />
        </Box>
      </Stack>
      <CardMedia
        component="img"
        sx={{
          height: { xs: "180px", sm: "180px", md: "180px", lg: "195px" }
        }}
        image={image}
        alt="green iguana"
      />
    </Card>
  );
}