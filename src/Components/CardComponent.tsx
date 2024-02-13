import { Box, Card, CardMedia, Stack, Typography } from "@mui/material";

import Colors from "../CommonComponents/Colors";
import arrow from "../assets/Group.png";
import { Link } from "react-router-dom";

interface cardProps {
  image: string;
  title: string;
  description: string;
  //link: string,
  buttonLabel: string;
}

export default function CardComponent({
  image,
  title,
  description,
  buttonLabel,
}: cardProps) {
  return (
    <Card sx={{
      maxWidth: 400, boxShadow: "none", borderRadius: "0px", height: { xs: "400px", sm: '400px', md: "400px", lg: "360px" }, width: { xs: "319px", sm: '319px', md: "319px", lg: "374px" }, display: "flex", flexDirection: "column", justifyContent: "space-between",
      ":hover": {
        boxShadow: { xs: "none", sm: "none", md: "none", lg: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgb(173,173,173)" },
        cursor: "pointer",
      }
    }} >
      <CardMedia
        component="img"
        sx={{
          height: { xs: "180px", sm: "180px", md: "180px", lg: "150px" }
        }}
        image={image}
        alt="green iguana"
      />

      <Stack direction="column" spacing={2} margin="0 auto" padding={{ xs: "25px", sm: '25px', md: "25px", lg: '' }} sx={{ backgroundColor: Colors.WHITE }}>
        <Typography fontSize="20px" variant="h6" fontWeight={600} textAlign="start">
          {title}
        </Typography>
        <Typography fontSize="16px" textAlign="start">{description}</Typography>
        <Box  paddingTop= {"15px"} display={"flex"} alignItems={"center"} gap={"5px"}>
        <Link  style={{ fontWeight: 600, textDecoration: "underline", color: Colors.BUTTON_COLOR, }} to={""}        >
          {buttonLabel}
        </Link>
        <img src={arrow} style={{marginTop: "5px"}} width={"15px"} alt="" />
        </Box>
      </Stack>
    </Card>
  );
}
