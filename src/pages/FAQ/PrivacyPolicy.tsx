import { Box, Typography, useMediaQuery } from "@mui/material";

import AppContainer from "../../CommonComponents/AppContainer";
import Colors from "../../CommonComponents/Colors";
import assets from "../../assets/index";
import styled from "styled-components";
import { useEffect } from "react";

const { "cookies.jpg": banner, "Layer.svg": layer } = assets;

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
    top: 26%;
    left: 12%;
  }
  @media (min-width: 390px) {
    top: 22%;
    left: 12%;
  }

  @media (min-width: 414px) {
    top: 20%;
    left: 12%;
  }
  @media (min-width: 768px) {
    top: 18%;
    left: 14%;
  }

  @media (min-width: 820px) {
    top: 16%;
    left: 14%;
  }
  @media (min-width: 1024px) {
    top: 33%;
    left: 14%;
  }
  @media (min-width: 1200px) {
    top: 30%;
    left: 14%;
  }
`;

export default function PrivacyPolicy() {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);
  const isHideBannerImage = useMediaQuery(
    "(min-width: 280px) and (max-width: 900px)"
  );
  return (
    <Box mb={"90px"}>
      <Container>
        {isHideBannerImage ? null : <BannerImage src={banner} alt="banner" />}
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
          // top={{ xs: "26%", sm: "16%", md: "33%", lg: "28%" }}
          // left={{ xs: "14%", sm: "6%", md: "14%", lg: "11%" }}
          color={"white"}
          fontSize={{ xs: "60px", sm: "60px", md: "90px", lg: "92px" }}
          fontStyle={"italic"}
          textTransform={"uppercase"}
          lineHeight={1}
        >
          Privacy{" "}
          <br />
            Policy
        </StyledTypography>
      </Box>

      <AppContainer width={"100%"} maxWidth={1180}>
        <Box
          width={"100%"}
          maxWidth={{ xs: "320px", sm: "700px", md: "850px", lg: "1200px" }}
          paddingTop={{ xs: "3px", sm: "0px", md: "0px", lg: "0px" }}
        >
          <Typography fontSize={"16px"} fontWeight={"400"} color={Colors.BLACK}>
            <Typography
              paddingBottom={"3px"}
              fontSize={"20px"}
              fontWeight={"bold"}
              pb={"20px"}
            >
              Privacy statement
            </Typography>
            This is the privacy statement of the Playzo33 (Partnership Concern).
            <br />
            <br />
            Types of personal information we collect
            <br />
            <br />
            We may collect, use and store different types of personal
            information about you, which we have grouped together as follows:
            <br />
            <br />
            <Typography fontSize={"18px"} fontWeight={"600"}>
              Types of personal information
            </Typography>
            <br />
            Description
            <br />
            Identity data
            <br />
            ID information including your name, title and date of birth.
            <br />
            Contact data
            <br />
            Home address, e-mail address and telephone number
            <br />
            Financial data
            <br />
            Payment card details
            <br />
            Transactional data
            <br />
            Details of payments to and from you and other details about services
            you purchase from us
            <br />
            Communications data
            <br />
            Information contained in letters, emails and other forms of
            electronic communications and conversations between us
            <br />
            Social relationships data
            <br />
            Details about your family, friends and other relationships
            <br />
            Marketing data
            <br />
            Details about your preferences in receiving marketing communications
            from us and our partners
            <br />
            Consents data
            <br />
            Any permissions, consents or preferences that you give us
            <br />
            Usage data
            <br />
            Information about how you use our website, products and services
            <br />
            Special category data
            <br />
            Some types of personal information are defined as special. We will
            only collect and use these types of information where we need to and
            if the law allows us.
            <br />
            <br />
            <Typography fontSize={"18px"} fontWeight={"600"}>
              What we use your personal information for
            </Typography>
            <br />
            We collect and use personal information to:
            <br />
            Deliver and improve our services, as set out in contracts and
            agreements with you
            <br />
            Properly manage our business in an effective manner
            <br />
            Contact you by post, email, telephone or social media to respond to
            your queries and provide you with information that you request of us
            <br />
            Understand your needs and how they may best be met
            <br />
            Send marketing communications to you
            <br />
            Manage events, to promote our business and its services
            <br />
            Manage your marketing preferences and keep our records up to date
            <br />
            Administer our website and internal operations, including
            troubleshooting, data analysis, testing, research, statistical and
            survey purposes
            <br />
            Improve our services and website and ensure that content is
            presented in the most effective manner for you and your device
            <br />
            Process financial transactions, e.g. payments for services we
            provide to you, or refunds due to you
            <br />
            Perform corporate activities such as the sale, merger or
            reorganisation of our business
            <br />
            Prevent and detect crime, fraud or corruption and protect our rights
            and interests
            <br />
            Meet our legal responsibilities to the police and other law
            enforcement agencies and government bodies
            <br />
            Implement our disciplinary code for applicable products
            <br />
            The lawful basis for processing your personal information depends on
            the type of information and the context in which you provide it. We
            rely on one or more of
            <br />
            the following lawful grounds for processing your personal
            information: Consent – where you have agreed to us processing your
            information for a specific reason (e.g. you have consented to
            receive marketing materials from us)
            <br />
            Contract – the processing is necessary to perform the agreement we
            have with you or to take steps to enter into an agreement with you
            <br />
            Legal obligation – the processing is necessary for compliance with a
            legal obligation we have such as keeping records for compliance with
            our obligations
            <br />
            Legitimate interests – the processing is necessary for our
            legitimate interests, such as:
            <br />
            to provide our services or information to you or any organisation
            you work for;
            <br />
            to prevent and detect theft, fraud and other criminal activity;
            <br />
            to protect our business interests;
            <br />
            to manage our business (including business planning and promotion)
            <br />
            to investigate complaints;
            <br />
            to evaluate, develop or improve our services or products; or
            <br />
            to keep you or our clients informed about relevant products and
            services and provide you with information, unless you have indicated
            at any time that you do not wish us to do so
            <br />
            To the extent that we process any special categories of data
            relating to you for any of the purposes outlined above, we will do
            so because:
            <br />
            you have given us your explicit consent to process that data;
            <br />
            we are required by law to process that data;
            <br />
            the processing is necessary to carry out our obligations under
            employment, social security or social protection law;
            <br />
            the processing is necessary for the establishment, exercise or
            defence of legal claims; or
            <br />
            you have made the data manifestly public.
            <br />
            <br />
            <Typography fontSize={"18px"} fontWeight={"600"}>
              Where we collect your personal information from
            </Typography>
            <br />
            We may collect personal information about you from the following
            sources:
            <br />
            From you directly e.g. contact details provided by phone, email or
            when you create an account with us.
            <br />
            From your use of our services: e.g. your IP address, location,
            domain name, browser type, device ID, dates and times you access our
            services, number of website visits, navigation history within, to
            and from the site.
            <br />
            From third parties: e.g. Publicly available resources such as
            Companies House, internet social network sites such as LinkedIn,
            market researchers,
            <br />
            marketing companies and events companies, analytics providers such
            as Google Analytics.
            <br />
            <br />
            <Typography fontSize={"18px"} fontWeight={"600"}>
              Who we share your information with
            </Typography>
            <br />
            We may share your personal information with the following third
            parties:
            <br />
            Other companies owned or jointly owned by Playzo Service providers,
            including providers of document analysis tools used by us in the
            course of providing our products and services
            <br />
            Commercial partners of ours, where you have opted in to receiving
            marketing information from them
            <br />
            <br />
            <Typography fontSize={"18px"} fontWeight={"600"}>
              Paired users of our service
            </Typography>
            <br />
            Automated decisions
            <br />
            We do not take any decisions about you based solely on automated
            processing i.e. without human involvement) which have a legal or
            similarly significant effect on you.
            <br />
            If you choose not to give your personal information
            <br />
            If you choose not to give your personal information, it may delay or
            prevent us from meeting our obligations or lead to us cancelling the
            service we provide to you.
            <br />
            <br />
            <Typography fontSize={"18px"} fontWeight={"600"}>
              How long we keep your personal information
            </Typography>
            <br />
            If you have previously opted in to receive communications from us,
            or are an active player, we will continue to hold your personal
            information. You may, at any time, exercise your right to stop
            receiving marketing and promotional information from us by
            unsubscribing or by contacting us at the email address provided
            below. At that point, we will delete your personal information from
            our central communication database and only contact you on matters
            concerning your live bookings.
            <br />
            <br />
            <Typography fontSize={"18px"} fontWeight={"600"}>
              Using our website
            </Typography>
            <br />
            Our website may contain links that make it easy for you to visit
            other websites. If you use such links to leave the website and visit
            a website operated by a third party, we are not responsible for the
            protection and privacy of any personal information which you provide
            while visiting such websites. You should exercise caution and look
            at the privacy statement applicable to the website in question.
            Cookies please click here to view our Cookies notice. Your
            information will always be stored and used in compliance with the
            relevant data protection legislation.
            <br />
            <br />
            Using our Website Payment Service In processing payments for our
            products and services purchased via our website, Playzo facilitates
            the transmission of your phone number and installed application
            information to our payment provider, Phone pe.
            <br />
            <br />
            <Typography fontSize={"18px"} fontWeight={"600"}>
              Your rights
            </Typography>
            <br />
            Under data protection law you have the following rights in respect
            of the personal data about you that we process
            <br />
            Access to your information – You have the right to request a copy of
            the personal information about you that we hold.
            <br />
            Correcting your information – We want to make sure that your
            personal information is accurate, complete and up to date and you
            may ask us to correct any
            <br />
            personal information about you that you believe does not meet these
            standards.
            <br />
            Deletion of your information – You have the right to ask us to
            delete personal information about you where:
            <br />
            You consider that we no longer require the information for the
            purposes for which it was obtained
            <br />
            We are using that information with your consent and you have
            withdrawn your consent – see Withdrawing consent to using your
            information below
            <br />
            You have validly objected to our use of your personal information –
            see Objecting to how we may use your information below
            <br />
            Our use of your personal information is contrary to law or our other
            legal obligations.
            <br />
            Objecting to how we use your information – You have the right at any
            time to require us to stop using your personal information for
            direct marketing purposes. In
            <br />
            addition, where we use your personal information to perform tasks
            carried out in the public interest or pursuant to the legitimate
            interests of us or a third party
            <br />
            then, if you ask us to, we will stop using that personal information
            unless there are overriding legitimate grounds to continue.
            <br />
            Restricting how we use your information – in some cases, you may ask
            us to restrict how we use your personal information. This right
            might apply, for example, where we are checking the accuracy of
            personal information about you that we hold or assessing the
            validity of any objection you have made to our use of your
            information. The right might also apply where this is no longer a
            basis for using your personal information but you don’t want us to
            delete the data. Where this right to validly exercised, we may only
            use the relevant personal information with your consent, for legal
            claims or where there are other public interest grounds to do so.
            <br />
            Transfer _–_ if we process personal information that you provide to
            us on the basis of consent or because it is necessary for the
            performance of a contract to which you are party, and in either case
            that processing is carried out by automated means, then you have the
            right to have that personal information transmitted to you in a
            machine readable format. Where technically feasible, you also have
            the right to have that personal information transmitted directly to
            another controller.
            <br />
            Withdrawing consent using your information – Where we use your
            personal information with your consent you may withdraw that consent
            at any time and we will stop using your personal information for the
            purpose(s) for which consent was given.
            <br />
            Please contact us using the email address in the Contact Information
            and Further Advice section if you wish to exercise any of these
            rights. You can also exercise your right to deletion of your
            information by selecting “Delete Account” from the “Account” section
            of our App. Changes to our privacy statement
            <br />
            We keep this privacy statement under regular review and will place
            any updates on this website. Paper copies of the privacy statement
            may also be obtained by emailing us at playzo@erode with your
            address.
            <br />
            <br />
            This privacy statement was last updated on 27th Feb 2024.
            <br />
            <br />
            Contact information and further advice
            <br />
            <br />
            Playzo has appointed a data privacy manager. If you have any
            questions about this privacy statement or how we handle your
            personal information please contact the data privacy manager by
            emailing playzo@erode.com
            <br />
            <br />
            By phone: +91 70944 60944
            <br />
            <br />
            By post: 39/6 KCP Thottam, Kumalan Kuttai, Erode, Tamil Nadu -
            638011
          </Typography>
        </Box>
      </AppContainer>
    </Box>
  );
}
