import { Box, Grid, Stack, Typography } from "@mui/material";

import Aboutus from '../../assets/Aboutus.svg'
import Colors from "../../CommonComponents/Colors";

export default function AboutUs() {


    return <>
    <Box margin="10px 20px" >
    <Grid container margin={6} justifyContent="center"
  alignItems="center">
            <Grid item xs={4} justifyContent="center"
  alignItems="center">
                    <Typography style={{maxWidth: "438px",
height: "284px", fontSize: "20px",
fontStyle: "normal",
fontWeight: "700"}}>
                    At Playzo33, we extend beyond being a turf booking platform; we're a community driven destination designed for sports enthusiasts and those seeking the perfect blend of recreation and entertainment. Our journey commenced with a simple dream: to establish a haven where people could gather, connect, and stay active.

</Typography>
            </Grid>
            <Grid item xs={8}>
            <img
            height= "846px"
        style={{ width:"100%",minWidth:"728px" }}
        src={Aboutus}
        alt={"title"}
      />
            </Grid>
        </Grid>
</Box>
<Box style={{ backgroundColor:Colors.BACK_BLACK,color:Colors.WHITE,
height: "402px"}}>
  <Grid container margin={"100px 100px"}>
            <Grid item xs={6}>
      <Typography variant={"h4"} style={{
fontSize: "32px",
fontStyle: "normal",
fontWeight: "700", marginBottom:"5px"}}>
                    Mission

</Typography>
                    <Typography style={{
 fontSize: "20px",
fontStyle: "normal",
fontWeight: "400", maxWidth: "516px",
height: "168px"}} variant={"body1"}>
                    At Playzo33, we extend beyond being a turf booking platform; we're a community driven destination designed for sports enthusiasts and those seeking the perfect blend of recreation and entertainment. Our journey commenced with a simple dream: to establish a haven where people could gather, connect, and stay active.

</Typography>
            </Grid>
            <Grid item xs={6}>
      <Typography variant={"h4"} style={{
fontSize: "32px",
fontStyle: "normal",
fontWeight: "700", marginBottom:"5px"}} >
                    Vision

</Typography>
                    <Typography style={{
 fontSize: "20px",
fontStyle: "normal",
fontWeight: "400", maxWidth: "516px",
height: "168px"}} variant={"body1"}>
                    We envision Playzo33 as the premier choice for individuals and groups in search of top-quality turf, sports, and entertainment services. Our vision is to set the standard in providing outstanding facilities, establishing a dynamic environment where the delight of sports and recreation is within everyone's reach. 

</Typography>
            </Grid>
        </Grid>
</Box>
    </>
}