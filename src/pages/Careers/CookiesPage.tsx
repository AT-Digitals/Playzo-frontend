import { Box, Typography, useMediaQuery } from "@mui/material";

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
  @media (min-width: 300px) {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

  @media (min-width: 768px) {
    width: 100%;
    height: 282px;
    object-fit: cover;
  }
  @media (min-width: 820px) {
    width: 100%;
    max-height: 400px;
    object-fit: cover;
  }

  @media (min-width: 912px) {
    height: 379px;
    width: 100%;
    object-fit: cover;
  }

  @media (min-width: 1200px) {
    width: 100%;
    max-height: 400px;
    object-fit: cover;
  }
`;

const StyledImage5 = styled.img`
  @media (min-width: 300px) {
    max-height: 250px;
    object-fit: cover;
    position: absolute;
    transform: translate(550%, 0px);
  }

  @media (min-width: 768px) {
    max-height: 400px;
    object-fit: cover;
    position: absolute;
    transform: translate(679%, -117px);
  }
  @media (min-width: 820px) {
    max-height: 400px;
    object-fit: cover;
    position: absolute;
    transform: translate(726%, -117px);
  }

  @media (min-width: 900px) {
    max-height: 400px;
    object-fit: cover;
    position: absolute;
    transform: translate(950%, -21px);
  }

  @media (min-width: 1200px) {
    max-height: 400px;
    object-fit: cover;
    position: absolute;
    transform: translate(1300%, -21px);
  }
`;

const StyledTypography = styled(Typography)`
  /* Media queries for different screen sizes */
  @media (min-width: 300px) {
    top: 23%;
    left: 6%;
  }

  @media (min-width: 414px) {
    top: 20%;
    left: 11%;
  }
  @media (min-width: 768px) {
    top: 18%;
    left: 7%;
  }

  @media (min-width: 820px) {
    top: 16%;
    left: 8%;
  }
  @media (min-width: 1024px) {
    top: 12%;
    left: 7%;
  }
  @media (min-width: 1200px) {
    top: 26%;
    left: 10%;
  }
`;
export default function TermsandConditions() {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);

  const isHideBannerImage = useMediaQuery(
    "(min-width: 280px) and (max-width: 900px)"
  );

  return (
    <Box mb={"90px"}>
      <Container>
        {isHideBannerImage ? null : <BannerImage src={bg} alt="banner" />}
        <Box
          sx={{
            background: Colors.BUTTON_COLOR,
            maxWidth: { xs: "100%", sm: "100%", md: "560px", lg: "800px" },
            width: { xs: "100%", sm: "100%" },
            height: { xs: "250px", sm: "282px", md: "380px", lg: "379px" },
            position: "absolute",
          }}
        >
          {" "}
        </Box>
        {isHideBannerImage ? null : (
          <StyledImage5 src={layer} alt="background" />
        )}
      </Container>
      <Box
        position={"absolute"}
        top={{ xs: "22%", sm: "15%", md: "17%", lg: "25%" }}
        left={"9%"}
        pt={"30px"}
      >
        <StyledTypography
          fontWeight={"900"}
          position={"absolute"}
          color={"white"}
          fontSize={{ xs: "50px", sm: "60px", md: "90px", lg: "92px" }}
          fontStyle={"italic"}
          lineHeight={1}
        >
          COOKIES <br />
          POLICY
        </StyledTypography>
      </Box>

      <AppContainer
        mt={{ xs: "18rem", sm: "20rem", md: "2rem" }}
        padding={0}
        maxWidth={1180}
      >
        <Box
          padding={"0 20px"}
          display={"flex"}
          flexDirection={"column"}
          gap={"3rem"}
        >
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
              interact with the Services and enable us to improve how we
              operate. For example, we use Google Analytics cookies to help us
              understand how visitors arrive at and browse our website to
              identify areas for improvement such as navigation, user
              experience, and marketing campaigns.
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
              information about your browsing habits in order to make
              advertising relevant to you and your interests. They remember the
              websites you have visited and that information is shared with
              other parties such as advertising technology service providers and
              advertisers.
            </li>
            <br />
            <li
              style={{
                fontSize: "18px",
                fontWeight: 400,
              }}
            >
              Social media cookies. These cookies are used when you share
              information using a social media sharing button or “like” button
              on our websites or you link your account or engage with our
              content on or through a social media site. The social network will
              record that you have done this.
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
        </Box>
      </AppContainer>
    </Box>
  );
}
