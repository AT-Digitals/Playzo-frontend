import { Box, Typography } from "@mui/material";

import AppContainer from "../../CommonComponents/AppContainer";
import Colors from "../../CommonComponents/Colors";
import bg from "./cookies.jpg";
import layer from "./layer-cookies.svg";
import styled from "styled-components";

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
          textTransform={"uppercase"}
          position={"absolute"}
          top={{ xs: "28%", sm: "25%", md: "28%", lg: "24%" }}
          left={"12%"}
          fontSize={"16px"}
          color={"white"}
          fontWeight={600}
        >
          Playzo33
        </Typography>
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
          <Typography fontSize={"16px"} fontWeight={600}>
            Cookie policy
          </Typography>
          <br />

          <Typography fontSize={"16px"} fontWeight={400}>
            Cookies and Other Tracking Technologies:
            <br />
            Powerleague Fives Ltd uses cookies and tracking pixels to collect
            information that helps us enhance our service.
          </Typography>
        </Box>

        <Box>
          <Typography fontSize={"16px"} fontWeight={400}>
            For performance and analytics. These cookies and pixels collect
            information on how users
          </Typography>
          <Typography>
            interact with the Services and enable us to improve how we operate.
            For example, we use Google Analytics cookies to help us understand
            how visitors arrive at and browse our website to identify areas for
            improvement such as navigation, user experience, and marketing
            campaigns.
          </Typography>
        </Box>
        <Box>
          <Typography>
            Targeting Cookies or Advertising Cookies. These cookies collect
            information about your browsing habits in order to make advertising
            relevant to you and your interests. They remember the websites you
            have visited and that information is shared with other parties such
            as advertising technology service providers and advertisers.
          </Typography>
          <br />
          <Typography>
            Social media cookies. These cookies are used when you share
            information using a social media sharing button or “like” button on
            our websites or you link your account or engage with our content on
            or through a social media site. The social network will record that
            you have done this.
          </Typography>
        </Box>
        <Typography fontSize={"16px"} fontWeight={400}>
          This information may be linked to targeting/advertising activities.
          <br />
        </Typography>
        <Typography fontSize={"16px"} fontWeight={600}>
          How can you opt-out?
        </Typography>

        <Typography fontSize={"16px"} fontWeight={500}>
          To opt-out of our use of cookies, you can instruct your browser, by
          changing its options, to stop accepting cookies or to prompt you
          before accepting a cookie from websites you visit.
        </Typography>

        <br />

        <Typography>
          Please contact enquiries@powerleague.co.uk if you have any questions.
        </Typography>
      </AppContainer>
    </Box>
  );
}
