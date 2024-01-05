import { Typography, styled } from "@mui/material";

import Colors from "../../CommonComponents/Colors";
import Service from "./Service";

const StyledTypo = styled(Typography)({
    color: Colors.BLACK,
    fontSize: "4rem",
    textAlign: 'center',
})


export default function Badminton() {
    return <>
<Service />
        <StyledTypo variant="h3" fontWeight={600} >Badminton</StyledTypo>


    </>
}