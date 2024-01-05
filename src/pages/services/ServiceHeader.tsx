import { Stack, Typography, styled } from "@mui/material";

import Colors from "../../CommonComponents/Colors";
import CustomSvgIcon from "../../CommonComponents/CustomSvgIcon";
import ServiceHeader from "../../assets/ServiceHeader.svg";
import ServicePara from "../../assets/ServicePara.svg";
import ServicePara1 from "../../assets/ServicePara1.svg";

const StyledTypo = styled(Typography)({
    color: Colors.BUTTON_COLOR,
    marginTop:"60px",
    position: "absolute",
    fontSize: "32px",
    fontStyle: "normal",
    fontWeight:700
})
const StyledTypoBody = styled(Typography)({
    color: Colors.BLACK,
    // marginTop:"60px",
    // position: "absolute",
    justifyContent:"center",
    alignItems:"center",
    textAlign:"center",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight:400,
    maxWidth: "710px",
    
})


export default function ServiceHeaders() {

    return <>

<Stack
  justifyContent="center"
  alignItems="center"
  marginTop="40px"
  direction={{ xs: 'column', sm: 'row' }}
  spacing={0}
>
<CustomSvgIcon icon={ServiceHeader}  style={{
            position: "relative",
            top: 0,
            right:"19%"
        }}  />

<StyledTypo variant="h4">Your Gateway to Exciting Experiences</StyledTypo>

</Stack>
<Stack
  justifyContent="center"
  alignItems="center"
  marginTop="15px"
  direction={{ xs: 'column', sm: 'row' }}
  spacing={0}
  marginRight={8}
>

<StyledTypoBody variant="body1">We offer a diverse range of services to cater to the varied interests of our community. Whether you're a sports enthusiast, a fitness buff, or someone looking for a great place to socialize, we have something special for you.</StyledTypoBody>

</Stack>
<>
<CustomSvgIcon icon={ServicePara} style={{
            position: "absolute",
            top: 120,
            right:"15%"
        }} />
        <CustomSvgIcon icon={ServicePara1} style={{
            position: "absolute",
            top: 329,
            right:"20%",
        }} />
</>

    </>
}