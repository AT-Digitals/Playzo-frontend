import { Box, Stack, Typography, styled } from "@mui/material";

import Colors from "../../CommonComponents/Colors";
import ServicePara from "../../assets/ServicePara.svg";
import ServicePara1 from "../../assets/ServicePara1.svg";

const StyledTypo = styled(Typography)({
  marginTop: "60px",
  // position: "absolute",
  fontStyle: "normal",
  fontWeight: 700,
});

const StyledTypoBody = styled(Typography)({
  color: Colors.BLACK,
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: 400,
  maxWidth: "710px",
});

export default function ServiceHeaders() {
  return (
    <>
      <Stack
        justifyContent="center"
        alignItems="center"
        marginTop="40px"
        direction={{ xs: "column", sm: "row" }}
        spacing={0}
      >
        {/* <Box
          component="img"
          src={ServiceHeader}
          sx={
            {
              position: "relative",
              top: { xs: "5px", md: "7px" },
              right: isMdScreen
                ? { xs: "26%", md: "20%" }
                : { xs: "21%", sm: "38%", md: "32%", lg: "19%" },
              maxWidth: { xs: "45px", sm: "60px", md: "100%" },
            } as any
          }
        /> */}

        <StyledTypo
          color={Colors.BLACK}
          padding={"0 20px"}
          textAlign={{ xs: "center" }}
          fontSize={{ xs: "20px", sm: "32px" }}
          variant="h4"
          maxWidth={{ xs: "210px", sm: "none" }}
        >
          Your Gateway to Exciting Experiences
        </StyledTypo>
      </Stack>
      <Stack
        padding={"0 20px"}
        justifyContent="center"
        alignItems="center"
        marginTop="15px"
        direction={{ xs: "column", sm: "row" }}
        spacing={0}
        mt={{ xs: "4rem", sm: "4rem", md: "1rem" }}
        marginRight={{ xs: "none", sm: "none", md: 8 }}
      >
        <StyledTypoBody variant="body1" fontSize={{ xs: "16px", sm: "18px" }}>
          We offer a diverse range of services to cater to the varied interests
          of our community. Whether you're a sports enthusiast, a fitness buff,
          or someone looking for a great place to socialize, we have something
          special for you.
        </StyledTypoBody>
      </Stack>
      <>
        <Box
          component="img"
          src={ServicePara}
          alt="ball"
          sx={{
            position: "absolute",
            // top: { xs: 172, sm: "118px", md: 130 },
            transform: {
              xs: "translate(0px,-200px)",
              sm: "translate(0px,-200px)",
              md: "translate(180px,-180px)",
              lg: "translate(-30px,-180px)",
            },
            right: { xs: "10%", sm: 0, md: "16%" },
            maxWidth: { xs: "60px", sm: 117, md: "250px", lg: "199px" },
          }}
        />
        <Box
          component="img"
          src={ServicePara1}
          alt=""
          sx={{
            position: "absolute",
            transform: {
              xs: "translate(-3px,-150px)",
              sm: "translate(20px,-120px)",
              md: "translate(150px,30px)",
              lg: "translate(-10px,-10px)",
            },
            right: { xs: "14%", sm: "5%", md: "22%" },
            maxWidth: { xs: "15px", sm: "60px" },
          }}
        />
      </>
    </>
  );
}
