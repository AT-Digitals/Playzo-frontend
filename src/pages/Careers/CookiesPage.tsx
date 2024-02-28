import { Box, Typography } from "@mui/material";

import AppContainer from "../../CommonComponents/AppContainer";
import Colors from "../../CommonComponents/Colors";
import aboutPage from "../../assets/AboutPageImages";
import styled from "styled-components";
import { useEffect } from "react";

const { "cookies.jpg": bg, "layer-cookies.svg": layer } = aboutPage;

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
`;
const BannerImage = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
`;
const StyledImage5 = styled.img`
  max-height: 400px;
  object-fit: cover;
  position: absolute;
  transform: translate(1300%, 0px);
`;
export default function TermsandConditions() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <Box mb={"90px"}>
      <Container>
        <BannerImage src={bg} alt="banner" />
        <Box
          sx={{
            background: Colors.BUTTON_COLOR,
            width: "800px",
            height: "400px",
            position: "absolute",
          }}
        >
          {" "}
        </Box>
        <StyledImage5 src={layer} alt="background" />
      </Container>
      <Box pt={"30px"}>
        <Typography
          fontWeight={"900"}
          position={"absolute"}
          top={{ xs: "28%", sm: "25%", md: "28%", lg: "24%" }}
          left={"11%"}
          color={"white"}
          fontSize={{ xs: "20px", sm: "20px", md: "42px", lg: "92px" }}
          fontStyle={"italic"}
        >
          COOKIES{" "}
          <Typography
            fontWeight={"900"}
            position={"absolute"}
            top={{ xs: "28%", sm: "25%", md: "28%", lg: "28%" }}
            left={"1%"}
            color={"white"}
            fontSize={{ xs: "20px", sm: "20px", md: "42px", lg: "92px" }}
            fontStyle={"italic"}
            lineHeight={"3"}
          >
            POLICY
          </Typography>
        </Typography>
      </Box>
      <AppContainer maxWidth={1180}>
        <Box>
          <Typography fontSize={"20px"} fontWeight={600}>
            Cookie policy
          </Typography>
          <br />

          <Typography mt={2} fontSize={"18px"} fontWeight={400}>
            Cookies and Other Tracking Technologies:
          </Typography>
          <Typography mt={2} fontSize={"18px"} fontWeight={400}>
            Playzo33 uses cookies and tracking pixels to collect information
            that helps us enhance our service.
          </Typography>
        </Box>

        <Box>
          <li
            style={{
              fontSize: "18px",
              fontWeight: 400,
            }}
          >
            For performance and analytics. These cookies and pixels collect
            information on how users
          </li>
          <Typography mt={2} fontSize={"18px"} fontWeight={400}>
            interact with the Services and enable us to improve how we operate.
            For example, we use Google Analytics cookies to help us understand
            how visitors arrive at and browse our website to identify areas for
            improvement such as navigation, user experience, and marketing
            campaigns.
          </Typography>
        </Box>
        <Box padding={"0 10px"}>
          <li
            style={{
              fontSize: "18px",
              fontWeight: 400,
            }}
          >
            Targeting Cookies or Advertising Cookies. These cookies collect
            information about your browsing habits in order to make advertising
            relevant to you and your interests. They remember the websites you
            have visited and that information is shared with other parties such
            as advertising technology service providers and advertisers.
          </li>
          <br />
          <li
            style={{
              fontSize: "18px",
              fontWeight: 400,
            }}
          >
            Social media cookies. These cookies are used when you share
            information using a social media sharing button or “like” button on
            our websites or you link your account or engage with our content on
            or through a social media site. The social network will record that
            you have done this.
          </li>
        </Box>
        <Typography padding={"0 10px"} fontSize={"18px"} fontWeight={400}>
          This information may be linked to targeting/advertising activities.
          <br />
        </Typography>
        <Typography padding={"0 10px"} fontSize={"18px"} fontWeight={600}>
          How can you opt-out?
        </Typography>

        <Typography padding={"0 10px"} fontSize={"18px"} fontWeight={400}>
          To opt-out of our use of cookies, you can instruct your browser, by
          changing its options, to stop accepting cookies or to prompt you
          before accepting a cookie from websites you visit.
        </Typography>

        <br />

        <Typography padding={"0 10px"} fontSize={"16px"} fontWeight={500}>
          Please contact playzo.erode@gmail.com if you have any questions.
        </Typography>
      </AppContainer>
    </Box>
  );
}
