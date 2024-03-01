import { Button, Card, CardMedia, Typography } from "@mui/material";
import Colors from "../CommonComponents/Colors";

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
  return (
    <>
    <Card
      sx={{
        width: {xs: "309px", sm: "340px", md: "390px", lg: "340px"},
        maxWidth: 400,
        borderRadius: "10px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      
      <CardMedia
        component="img"
        sx={{
          height: { xs: "330px", sm: "350px", md: "390px", lg: "450px" },
          borderRadius: "10px",
          transition: "transform 0.5s ease",
          cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
        
        image={image}
        alt="green iguana"
      />    
    </Card>
    <Button style={{
        background: Colors.WHITE,
        color: Colors.BLACK,
        width: "100%",
        maxWidth: "138px",
        position: "absolute",
        borderRadius: "21px",
        height: "45px",
        transform: "translate(18px, -64px)",
        fontSize: "16px",
        fontWeight: "bold",
        textTransform: "capitalize",
      }}>{title}</Button>
        <Typography width={{xs: "292px", sm: "310px", md: "400px", lg: "292px"}} paddingTop={"30px"} fontSize="15px" fontWeight={"400"} textAlign="start">{description}</Typography>
    </>
  );
}