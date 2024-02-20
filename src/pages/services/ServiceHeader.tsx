import { Box, Stack, Typography, keyframes, styled } from "@mui/material";

import Colors from "../../CommonComponents/Colors";
import ServicePara from "../../assets/ServicePara.svg";
import ServicePara1 from "../../assets/ServicePara1.svg";

const StyledTypo = styled(Typography)({
  // marginTop: "60px",
  // position: "absolute",
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
  maxWidth: "890px",
});
const slideInFromBottom = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

// Styled components
const AnimatedTextContainer = styled(Stack)`
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  flex-direction: ${({ theme }) =>
    theme.breakpoints.down("sm") ? "column" : "row"};
  gap: 0;

  & .animated-text {
    color: ${({ theme }) => theme.palette.text.primary};
    padding: 0 20px;
    text-align: ${({ theme }) =>
      theme.breakpoints.down("xs") ? "center" : "left"};
    font-size: 82px;
    font-style: italic;

    line-height: 1;
    animation: ${slideInFromBottom} 1s ease-out forwards;
  }
`;

const AnimatedTextBody = styled(Stack)`
  padding: 0 20px;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  flex-direction: ${({ theme }) =>
    theme.breakpoints.down("sm") ? "column" : "row"};
  gap: 0;
  margin-top: ${({ theme }) =>
    theme.breakpoints.down("sm") ? "1rem" : "1rem"};
  margin-right: ${({ theme }) =>
    theme.breakpoints.down("md") ? "none" : "8px"};

  & .animated-text {
    opacity: 0;
    animation: ${slideInFromBottom} 1s ease-out forwards;
  }
`;

export default function ServiceHeaders() {
  return (
    <>
      <AnimatedTextContainer>
        <StyledTypo variant="h4" className="animated-text">
          Your Gateway to Exciting <br />
          Experiences
        </StyledTypo>
      </AnimatedTextContainer>
      <AnimatedTextBody>
        <StyledTypoBody
          variant="body1"
          fontSize="18px"
          className="animated-text"
        >
          We offer a diverse range of services to cater to the varied interests
          of our community. Whether you're a sports enthusiast, a fitness buff,
          or someone looking for a great place to socialize, we have something
          special for you.
        </StyledTypoBody>
      </AnimatedTextBody>
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
