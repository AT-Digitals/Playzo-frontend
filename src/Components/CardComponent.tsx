import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
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
        <Card sx={{ maxWidth: 400, boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }} >
            <CardMedia
                component="img"
                height="300"
                image={image}
                alt="green iguana"
            />

            <Stack direction="column" spacing={2} margin="0 auto" padding="32px" sx={{ backgroundColor: Colors.WHITE }}>
                <Typography fontSize="20px" variant="h6" fontWeight={600} textAlign="start">
                    {title}
                </Typography>
                <Typography fontSize="16px" textAlign="start">{description}</Typography>
                <CustomButton
                    color={Colors.BUTTON_COLOR}
                    variant="outlined"
                    bgColor={Colors.BUTTON_COLOR}
                    sx={{ textTransform: "none", fontWeight: 600, maxWidth: "100px" }}
                >
                    {buttonLabel}
                </CustomButton>
            </Stack>
        </Card>
    );
}
