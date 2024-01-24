import * as React from "react";

import Box from '@mui/material/Box';
import Colors from '../../CommonComponents/Colors';
import CustomButton from '../../CommonComponents/CustomButton';
import CustomSwiper from '../../CommonComponents/carousel/CustomSwiper';
import Grid from '@mui/material/Grid';
import LeftArrow from '../../assets/LeftArrow.svg'
import { Navigation } from 'swiper/modules';
import { Typography } from '@mui/material';

interface serviceGridProps {
  carouselItems: any[];
  heading1: string;
  desc1: string;
  heading2: string;
  firstBullet1: string;
  firstBullet2: string;
  firstBullet3: string;
  heading3: string;
  secBullet1: string;
  secBullet2: string;
  secBullet3: string;
  buttonLabel: string;
  icon:string;
}


export default function ServiceGrid(props:serviceGridProps) {

  return (
    <Box margin={7} sx={{
      ".mySwiper":{
      ".swiper-button-next" :{
        backgroundImage: LeftArrow,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% auto",
        backgroundPosition: "center",
      },
      
      ".swiper-button-next::after": {
        display: "none"
      }
    }
    }}>
        <Grid minHeight="100vh" container>
        <Grid item xs={12} sm={7}>
          <CustomSwiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
            slides={props.carouselItems}
          />
        </Grid>
      <Grid
        item
        xs={12}
        sm={5}
        sx={{backgroundColor:"#EBF5FF",borderRadius: "8px",padding:"40px"}}
        alignItems="center"
        justifyContent="center"

      >
        <Grid item xs container direction="column" spacing={3} marginBottom={6}>
            <Grid item xs>
              <Typography gutterBottom variant="h5" style={{fontSize: "20px",
fontStyle: "normal",
fontWeight: 700}} >
              {props.heading1}
              </Typography>
              <Typography variant="body1">
             {props.desc1}

        </Typography>
              </Grid>
              </Grid>
              <Grid item xs container direction="column" spacing={3} marginBottom={2}>
            <Grid item xs>
              <Typography gutterBottom variant="h5" style={{fontSize: "16px",
fontStyle: "normal",
fontWeight: 700}} >
              {props.heading2}
              </Typography>
              <Typography variant="body1">
  <ul style={{paddingInlineStart: "28px"}}>
    <li>{props.firstBullet1}</li>
    <li>{props.firstBullet2}</li>
    <li>{props.firstBullet3}</li>
  </ul>
</Typography>
             
              </Grid>
              </Grid>
              <Grid item xs container direction="column" spacing={3} marginBottom={2}>
            <Grid item xs>
              <Typography gutterBottom variant="h5" style={{fontSize: "16px",
fontStyle: "normal",
fontWeight: 700}} >
             {props.heading3}
              </Typography>
              <Typography variant="body1">
  <ul style={{paddingInlineStart: "28px"}}>
    <li>{props.secBullet1}</li>
    <li>{props.secBullet2}</li>
    <li>{props.secBullet3}</li>
  </ul>
</Typography>

<Box mt={5}>
        <CustomButton type="submit" style={{backgroundColor:Colors.BUTTON_COLOR, textTransform:"capitalize"}} >
          {props.buttonLabel}
        </CustomButton>
      </Box>


              </Grid>
              <Grid
  container
  direction="row"
  justifyContent="flex-end"
  alignItems="flex-end"
>
              <img
        // style={{ width:"100%" }}
        src={props.icon}
        alt={"icon"}
      />
      </Grid>
              </Grid>
      </Grid>
    </Grid>
     
    </Box>
  );
}
