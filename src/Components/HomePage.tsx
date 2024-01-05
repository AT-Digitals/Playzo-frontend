import { CardMedia, Typography, styled } from "@mui/material";
import Header from "../CommonFiles/Header";
import Image1 from "../assets/Rectangle 67.png"
import Image2 from "../assets/Rectangle 669.png"
import Colors from "../CommonComponents/Colors";

const StyledTypo = styled(Typography)({
    color: Colors.WHITE,
    position: "absolute",
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, 250%)',
    fontSize: "4rem",
    textAlign: 'center',
    zIndex: 1,
})


export default function HomePage() {
    return <>
        <CardMedia
            component="img"
            //height="194"
            image={Image1}
            alt="Paella dish"
        />
        <img src={Image2} alt="background" style={{
            position: "absolute",
            top: 0,
            width: "1240px",
            height: "1084px"
        }} />

        <StyledTypo variant="h3" fontWeight={600} >Play Beyond <br /> Boundaries</StyledTypo>


    </>
}