import {
    Card,
    CardMedia,
    Typography,
    Stack,
} from "@mui/material";
import Colors from "../CommonComponents/Colors";
import CustomButton from "../CommonComponents/CustomButton";

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
    description, buttonLabel
}: cardProps) {
    return (
        <Card sx={{ maxWidth: 400, height: { xs: "400px", sm: '400px', md: "400px", lg: "525px" }, width: { xs: "319px", sm: '319px', md: "319px", lg: "374px" },
        ":hover": {
            boxShadow: { xs: "none", sm: "none", md: "none", lg: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgb(173,173,173)" },
            cursor: "pointer",
            "& .title": {
                color: Colors.BUTTON_COLOR // Change to your desired color
            }
           } }} >
            <CardMedia
                component="img"
                sx={{
                    height: { xs: "180px", sm: "180px", md: "180px", lg: "300px" }
                }}
                image={image}
                alt="green iguana"
            />

            <Stack direction="column" spacing={2} margin="0 auto" padding={{ xs: "25px", sm: '25px', md: "25px", lg: '32px' }} sx={{ backgroundColor: Colors.WHITE }}>
                <Typography className="title" fontSize="20px" variant="h6" fontWeight={600} textAlign="start">
                    {title}
                </Typography>
                <Typography fontSize="16px" textAlign="start">{description}</Typography>
                <CustomButton
                    color={Colors.BUTTON_COLOR}
                    variant="outlined"
                    bgColor={Colors.BUTTON_COLOR}
                    sx={{ textTransform: "none", fontWeight: 600, maxWidth: "100px", display: "none" }}
                >
                    {buttonLabel}
                </CustomButton>
            </Stack>
        </Card>
    );
}
