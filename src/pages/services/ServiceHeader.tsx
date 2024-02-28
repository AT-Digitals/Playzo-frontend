import { Box, Typography, keyframes } from "@mui/material";
import { useEffect, useState } from "react";

import Colors from "../../CommonComponents/Colors";
import styled from "@emotion/styled";
import assets from "../../assets";

const {"ServicePara.svg": ServicePara, "ServicePara1.svg": ServicePara1} = assets

const StyledTypoBody = styled(Typography)({
  color: Colors.BLACK,
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: 400,
  maxWidth: "890px",
});

interface StyledTextRevealProps {
  reveal: boolean;
}

const revealAnimation = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
`;

const blurAnimation = keyframes`
  0% {
    filter: blur(10px);
  }
  100% {
    filter: blur(0);
  }
`;

const StyledTextReveal = styled.div<StyledTextRevealProps>`
  overflow: hidden;
  white-space: nowrap;
  animation: ${revealAnimation} 2s ease-in-out, ${blurAnimation} 3s ease-in-out; // Adjust the durations as needed
  animation-play-state: ${(props) => (props.reveal ? "running" : "paused")};
`;

export default function ServiceHeaders() {
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setReveal(true);
    }, 1000); // Adjust the timing as needed
  }, []);

  return (
    <>
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <StyledTextReveal
          style={{
            fontSize: "82px",
            textAlign: "center",
            fontStyle: "italic",
            fontWeight: 700,
            lineHeight: 1.2,
          }}
          reveal={reveal}
        >
          Your Gateway to Exciting <br />
          Experiences
        </StyledTextReveal>

        <StyledTypoBody
          marginTop={1}
          variant="body1"
          fontSize="18px"
          className="animated-text"
        >
          We offer a diverse range of services to cater to the varied interests
          of our community. Whether you're a sports enthusiast, a fitness buff,
          or someone looking for a great place to socialize, we have something
          special for you.
        </StyledTypoBody>
      </Box>
      <>
        <Box
          component="img"
          src={ServicePara}
          alt="ball"
          sx={{
            position: "absolute",
            transform: {
              xs: "translate(0px,-200px)",
              sm: "translate(0px,-200px)",
              md: "translate(180px,-180px)",
              lg: "translate(90px,-150px)",
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
              lg: "translate(110px,10px)",
            },
            right: { xs: "14%", sm: "5%", md: "22%" },
            maxWidth: { xs: "15px", sm: "60px" },
          }}
        />
      </>
    </>
  );
}
