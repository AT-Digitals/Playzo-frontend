import { Box, Typography } from "@mui/material";

import AppContainer from "../../CommonComponents/AppContainer";
import styled from "styled-components";
import Colors from "../../CommonComponents/Colors";
import { useEffect } from "react";
import assets from "../../assets";

const {"cookies.jpg": banner, "Layer.svg": layer} = assets

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
  max-height: 400px;
  object-fit: cover;
  position: absolute;
  transform: translate(1300%, 0px);
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
  transform: translate(1020%, -21px);
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
    top: 33%;
    left: 7%;
  }
  @media (min-width: 1200px) {
    top: 26%;
    left: 10%;
  }
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
        <BannerImage src={banner} alt="banner" />
        <Box sx={{
          background: Colors.BUTTON_COLOR,
          width:{xs: "800px", sm: "428px", md: "617px", lg: "800px"},
          height: {xs: "250px", sm: "282px", md: "380px", lg: "379px"},
          position: "absolute",
        }}> </Box>
        <StyledImage5 src={layer} alt="background" />
       
      </Container>
      <Box pt={"30px"}>
        <StyledTypography
          fontWeight={"900"}
          position={"absolute"}
           // top={{ xs: "26%", sm: "16%", md: "33%", lg: "28%" }}
          // left={{ xs: "14%", sm: "6%", md: "14%", lg: "11%" }}
          color={"white"}
          fontSize={{ xs: "56px", sm: "60px", md: "90px", lg: "92px" }}
          fontStyle={"italic"}
        >
          Terms & <Typography fontWeight={"900"}
          position={"absolute"}
          top={{ xs: "26%", sm: "16%", md: "14%", lg: "28%" }}
          left={"1%"}
          color={"white"}
          fontSize={{ xs: "56px", sm: "60px", md: "90px", lg: "92px" }}  fontStyle={"italic"} lineHeight={"3"}>Conditions</Typography>
        </StyledTypography>
      </Box>

      <AppContainer maxWidth={1180}>
        <Box>
          <Typography fontSize={"16px"} fontWeight={"400"} color={Colors.BLACK} width={"100%"} maxWidth={{xs: "320px", sm: "700px", md: "850px", lg: "1200px"}} paddingTop={{xs: "3px", sm: "0px", md: "0px", lg: "0px"}}>
            1. Playzo33 and the hosts of this website (also referred to as “site” accept no responsibility for and exclude all liability in connection with browsing this site, use of information on this site and downloading any material from it including but not limited to any liability for errors, inaccuracies, omissions or misleading or defamatory statements.
            <br />
            <br />
            2. Whilst we hope you find the contents of this website interesting and informative; the contents are for general information only. We believe the contents to be true and accurate as at the date of writing but can give no assurances or warranty regarding the accuracy, currency, or applicability of any of the contents in relation to specific situations and particular circumstances. As such, the contents should not be relied upon, and professional advice should be taken in specific cases. In addition, none of the content of this website will form any part of any contract between us or constitutes an offer by us. Specific disclaimers may apply in addition to certain content or parts of the site.
            <br />
            <br />
            3. The content and design of these pages are subject to copyright owned by Playzo or used under licence from third party copyright owners. Reproduction is prohibited other than in accordance with the Full Copyright Notice. The Full Copyright Notice forms part of these terms and conditions. Information may be changed or updated without notice.
            <br />
            <br />
            4. From time to time this website may also include links to other websites. These links are provided to give further information and are not intended to signify that Playzo endorses any such website and/or content. Playzo accepts no responsibility for the content of the linked website. Users must take their own precautions to ensure what is selected for use is free of such items as viruses, worms, trojan horses and other items of a destructive or malicious nature.
            <br />
            <br />
            5. As our websites often provide links to third party websites, such as those of our business partners and on-line advisers, users should review their respective privacy policies to learn more about, what, why and how they collect and use personal information.
            <br />
            <br />
            6. The service and materials on this website are provided “as is”. Playzo and the hosts of this site and each of the Playzo companies expressly disclaims any and all warranties, express or implied, to the extent permitted by law including but not limited to warranties of satisfactory quality, merchantability or fitness for a particular purpose, with respect to the service or any materials.
            <br />
            <br />
            7. Except in respect of death or personal injury arising from negligence, Playzo and the hosts of this site and each of the local enterprise companies hereby exclude liability for any claims, losses, demands or damages of any kind whatsoever with respect to any information and/or services provided on our website including but not limited to direct, indirect, incidental or consequential loss or damages, compensatory damages or loss of profits or data whether based on a breach of contract or warranty, delict or tort (including negligence), product liability or otherwise.
            <br />
            <br />
            8. Any discounts for Playzo products and services communicated in promotional literature can be removed or amended at any given time depending on availability.
            <br />
            <br />
            9. We offer a full refund on 24-hour notice period on all bookings for cancellations. If cancellation falls outside the 24-hour notice period, then full price will be applied. All refunds are processed as quickly as possible however, please allow up to 5-7 working days.
            <br />
            <br />
            10. <span style={{
              fontSize: "16px",
              fontWeight: 'bold'
            }}>Bookings:</span> We can only accept a re-arrangement requested 2 days in advance for block bookings.
            <br />
            <br />
            11. <span style={{
              fontSize: "16px",
              fontWeight: 'bold'
            }}>Functions:</span> We can only accept cancellations which are provided 7 days in advance of the event date.
            <br />
            <br />
            12. Management Discretion will be applied to all bookings at all times.
            <br />
            <br />
            <Typography fontSize={"18px"} fontWeight={"bold"}>If you need any further information, please write to us at:</Typography>
            <br />
           Playzo33,
           39/6 KCP Thottam, Kumalan Kuttai, Erode,
            <br />
            <br />
            <Typography fontSize={"18px"} fontWeight={"bold"}>Playzo</Typography>
            <br />
            1. The contents of these pages and all material on this site are the copyright of Playzo. Copying or incorporation of part or all of the contents in any form is prohibited save in accordance with the following:
            <br />
            <br />
            2. You may:
            <br />
            <br />
            1. Print or download to a local hard disk extracts for your personal non-
            commercial use.
            <br />
            <br />
            2. Copy the content to individual third parties for their personal non-
            commercial use provided:
            <br />
            <br />
            1. you acknowledge the website as the source of the
            material; and
            2. you inform the third party that these terms apply, and they
            agree to comply with them.
            <br />
            <br />
            3. You may provide a link (but not a framed link) to this site from any other business information or business service website, but not (save without prior agreement) in any way which gives the impression that we are associated with or have approved such other site.
            <br />
            <br />
            4. Without limiting the foregoing, no part of the website may be reproduced, transmitted, or stored in any other website or other form of electronic retrieval system.
            <br />
            <br />
            5. The above consents do not authorise you to incorporate any part of this site in any commercial document or in any materials sold or otherwise made available for profit without our prior consent.
          </Typography>
        </Box>
      </AppContainer>
    </Box>
  );
}
