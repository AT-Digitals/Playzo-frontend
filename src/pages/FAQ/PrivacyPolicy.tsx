import { Box, Typography } from "@mui/material";

import AppContainer from "../../CommonComponents/AppContainer";
import banner from "../../assets/cookies.jpg";
import layer from "../../assets/Layer.svg";
import styled from "styled-components";
import Colors from "../../CommonComponents/Colors";
import { useEffect } from "react";

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


export default function PrivacyPolicy() {
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
          width: "800px",
          height: "400px",
          position: "absolute",
        }}> </Box>
        <StyledImage5 src={layer} alt="background" />
       
      </Container>
      <Box pt={"30px"}>
        <Typography
          fontWeight={"900"}
          position={"absolute"}
          top={{ xs: "28%", sm: "25%", md: "28%", lg: "28%" }}
          left={"11%"}
          color={"white"}
          fontSize={{ xs: "20px", sm: "20px", md: "42px", lg: "92px" }}
          fontStyle={"italic"}
          textTransform={"uppercase"}
        >
          Privacy <Typography fontWeight={"900"}
          position={"absolute"}
          top={{ xs: "28%", sm: "25%", md: "28%", lg: "28%" }}
          left={"1%"}
          color={"white"}
          textTransform={"uppercase"}
          fontSize={{ xs: "20px", sm: "20px", md: "42px", lg: "92px" }}  fontStyle={"italic"} lineHeight={"3"}>Policy</Typography>
        </Typography>
      </Box>

      <AppContainer maxWidth={1180}>
        <Box>
           <Typography fontSize={"16px"} fontWeight={"400"} color={Colors.BLACK}>
          <Typography paddingBottom={"3px"} fontSize={"18px"} fontWeight={"bold"}>Privacy statement</Typography> 
GDPR Privacy Statement
<br />
<br />
Who we are
<br />
<br />
This is the privacy statement of the Powerleague group of companies, comprising Powerleague Fives Ltd, Powerplay Team Sports Ltd, Champion Soccer Ltd, The Corporate Sports Company Ltd, Powerleague Fives (Ireland) Ltd and Powerleague Olympia (Holland) BV.
<br />
<br />
Types of personal information we collect
<br />
<br />
We may collect, use and store different types of personal information about you, which we have grouped together as follows:
<br />
<br />
Types of personal information
<br />
<br />
Description
Identity data
ID information including your name, title and date of birth.
Contact data
Home address, e-mail address and telephone number
Financial data
Payment card details
Transactional data
Details of payments to and from you and other details about services you purchase from us
Communications data
Information contained in letters, emails and other forms of electronic communications and conversations between us
Social relationships data
Details about your family, friends and other relationships
Marketing data
Details about your preferences in receiving marketing communications from us and our partners
Consents data
Any permissions, consents or preferences that you give us
Usage data
Information about how you use our website, products and services
Special category data
Some types of personal information are defined as special. We will only collect and use these types of information where we need to and if the law allows us to:
<br />
<br />
Racial or ethnic origin
Political opinions, religious or philosophical beliefs
Trade union membership
Genetic or biometric data used for ID purposes
Sexual orientation
Criminal convictions data
<br />
<br />
What we use your personal information for
<br />
<br />
We collect and use personal information to:
Deliver and improve our services, as set out in contracts and agreements with you
Properly manage our business in an effective manner
Contact you by post, email, telephone or social media to respond to your queries and provide you with information that you request of us
Understand your needs and how they may best be met
Send marketing communications to you
Manage events, to promote our business and its services
Manage your marketing preferences and keep our records up to date
Administer our website and internal operations, including troubleshooting, data analysis, testing, research, statistical and survey purposes
Improve our services and website and ensure that content is presented in the most effective manner for you and your device
Process financial transactions, e.g. payments for services we provide to you, or refunds due to you
Perform corporate activities such as the sale, merger or reorganisation of our business
Prevent and detect crime, fraud or corruption and protect our rights and interests
Meet our legal responsibilities to the police and other law enforcement agencies and government bodies
Implement our disciplinary code for applicable products
Support NHS Test & Trace (or local equivalent) – see relevant section below
Operate our Playermatch service – see relevant section below
Deliver our App payment service – see relevant section below
The lawful basis for processing your personal information depends on the type of information and the context in which you provide it. We rely on one or more of the following lawful grounds for processing your personal information:
Consent – where you have agreed to us processing your information for a specific reason (e.g. you have consented to receive marketing materials from us)
Contract – the processing is necessary to perform the agreement we have with you or to take steps to enter into an agreement with you
Legal obligation – the processing is necessary for compliance with a legal obligation we have such as keeping records for compliance with our obligations
Legitimate interests – the processing is necessary for our legitimate interests, such as:
to provide our services or information to you or any organisation you work for;
to prevent and detect theft, fraud and other criminal activity;
to protect our business interests;
to manage our business (including business planning and promotion)
to investigate complaints;
to evaluate, develop or improve our services or products; or
to keep you or our clients informed about relevant products and services and provide you with information, unless you have indicated at any time that you do not wish us to do so
To the extent that we process any special categories of data relating to you for any of the purposes outlined above, we will do so because:
you have given us your explicit consent to process that data;
we are required by law to process that data;
the processing is necessary to carry out our obligations under employment, social security or social protection law;
the processing is necessary for the establishment, exercise or defence of legal claims; or
you have made the data manifestly public.
<br />
<br />
Where we collect your personal information from
<br />
<br />
We may collect personal information about you from the following sources:
From you directly e.g. contact details provided by phone, email or when you create an account with us.
From your use of our services: e.g. your IP address, location, domain name, browser type, device ID, dates and times you access our services, number of website visits, navigation history within, to and from the site.
From third parties: e.g. Publicly available resources such as Companies House, internet social network sites such as LinkedIn, market researchers, marketing companies and events companies, analytics providers such as Google Analytics.
From CCTV footage.
From Sky WiFi when customers use WiFi at Powerleague clubs: Customers can connect to Sky WiFi at our clubhouses by registering the following items of personal data and accepting our terms and conditions: Name, email address, postal address, mobile phone number and date of birth. These data are then transferred to us by Sky WiFi. The purpose of capturing this personal data is to enable us to provide the WiFi service and offer products to customers who give separate consent to receive marketing communications from us.
From Pitch Side cameras. Video and audio personal data captured when the ‘Red Button’ is activated by a data subject; this records 30 seconds of footage which is held on the camera hard drive and transferred to Powerleague’s private Cloud storage facility. The purpose of processing this personal data is to provide players with the facility to view and listen to a memorable activity from their match. This personal data is retained for up to 6 months before being destroyed.
Who we share your information with
We may share your personal information with the following third parties:
Other companies owned or jointly owned by Powerleague Fives Ltd
Service providers, including providers of document analysis tools used by us in the course of providing our products and services
Commercial partners of ours, where you have opted in to receiving marketing information from them
The police and other law enforcement agencies and HMRC and other government bodies where we have a legal or regulatory obligation to do so
Our governing body (The FA) for the purpose of investigating breaches of our disciplinary code during affiliated competitions
Debt recovery agencies, to recover overdue amounts due to us
Potential or actual purchasers of any part of our business or assets, or other third parties in the context of a possible transfer or restructuring of our business
<br />
<br />
Paired users of our Playermatch service
<br />
<br />
Automated decisions
We do not take any decisions about you based solely on automated processing i.e. without human involvement) which have a legal or similarly significant effect on you.
If you choose not to give your personal information
If you choose not to give your personal information, it may delay or prevent us from meeting our obligations or lead to us cancelling the service we provide to you.
<br />
<br />
How long we keep your personal information
<br />
<br />
If you have previously opted in to receive communications from us, or are an active player, we will continue to hold your personal information. You may, at any time, exercise your right to stop receiving marketing and promotional information from us by unsubscribing or by contacting us at the email address provided below. At that point, we will delete your personal information from our central communication database and only contact you on matters concerning your live bookings.
<br />
<br />
Where we hold your personal information internationally
<br />
<br />
Personal information of customers in Republic of Ireland and The Netherlands is held on our database in the UK. Their personal information is subject to the same GDPR legislation as that of our UK customers and is therefore protected to the same standards.
<br />
<br />
Using our website
<br />
<br />
Our website may contain links that make it easy for you to visit other websites. If you use such links to leave the website and visit a website operated by a third party, we are not responsible for the protection and privacy of any personal information which you provide while visiting such websites. You should exercise caution and look at the privacy statement applicable to the website in question.
Cookies please click here to view our Cookies notice.
Your information will always be stored and used in compliance with the relevant data protection legislation.
The use of your information is covered by the General Data Protection Regulations Article 6 (1) (c) – a legal obligation to which we as an establishment are subject to. The legal obligation to which we’re subject means that we’re mandated by law, by a set of new regulations from the government, to cooperate with the NHS Test and Trace service (or local equivalent), in order to help maintain a safe operating environment and to help fight any local outbreak of coronavirus.
<br />
<br />
Using our App Payment Service
In processing payments for our products and services purchased via our App, Powerleague facilitates the transmission of your phone number and installed application information to our payment provider, Stripe SDK.
<br />
<br />
Your rights
<br />
<br />
Under data protection law you have the following rights in respect of the personal data about you that we process
Access to your information – You have the right to request a copy of the personal information about you that we hold.
Correcting your information – We want to make sure that your personal information is accurate, complete and up to date and you may ask us to correct any personal information about you that you believe does not meet these standards.
Deletion of your information – You have the right to ask us to delete personal information about you where:
You consider that we no longer require the information for the purposes for which it was obtained
We are using that information with your consent and you have withdrawn your consent – see Withdrawing consent to using your information below
You have validly objected to our use of your personal information – see Objecting to how we may use your information below
Our use of your personal information is contrary to law or our other legal obligations.
Objecting to how we use your information – You have the right at any time to require us to stop using your personal information for direct marketing purposes. In addition, where we use your personal information to perform tasks carried out in the public interest or pursuant to the legitimate interests of us or a third party then, if you ask us to, we will stop using that personal information unless there are overriding legitimate grounds to continue.
Restricting how we use your information – in some cases, you may ask us to restrict how we use your personal information. This right might apply, for example, where we are checking the accuracy of personal information about you that we hold or assessing the validity of any objection you have made to our use of your information. The right might also apply where this is no longer a basis for using your personal information but you don’t want us to delete the data. Where this right to validly exercised, we may only use the relevant personal information with your consent, for legal claims or where there are other public interest grounds to do so.
Transfer _–_ if we process personal information that you provide to us on the basis of consent or because it is necessary for the performance of a contract to which you are party, and in either case that processing is carried out by automated means, then you have the right to have that personal information transmitted to you in a machine readable format. Where technically feasible, you also have the right to have that personal information transmitted directly to another controller.
Withdrawing consent using your information – Where we use your personal information with your consent you may withdraw that consent at any time and we will stop using your personal information for the purpose(s) for which consent was given.
Please contact us using the email address in the Contact Information and Further Advice section if you wish to exercise any of these rights. You can also exercise your right to deletion of your information by selecting “Delete Account” from the “Account” section of our App.
Changes to our privacy statement
We keep this privacy statement under regular review and will place any updates on this website. Paper copies of the privacy statement may also be obtained by emailing us at privacy@powerleague.co.uk with your address.
<br />
<br />
This privacy statement was last updated on 2nd March 2022.
<br />
<br />
Contact information and further advice
<br />
<br />
Powerleague has appointed a data privacy manager. If you have any questions about this privacy statement or how we handle your personal information please contact the data privacy manager by emailing privacy@powerleague.co.uk
<br />
<br />
Complaints
<br />
<br />
We seek to resolve directly all complaints about how we handle personal information but you also have the right to lodge a complaint with the regulator in your jurisdiction:
For customers in the UK, please contact the Information Commissioner’s Office:
<br />
<br />
By phone: 0303 123 1113
<br />
<br />
By post: Information Commissioner’s Office, Wycliffe House, Water Lane, Wilmslow, SK9 5AF
<br />
<br />
Online: https://ico.org.uk/global/contact-us/email/
For customers in the Republic of Ireland, please contact the Data Protection Commissioner:
By phone: +353 (0)761 104 800
<br />
<br />
By fax: +353 57 868 4757
<br />
<br />
By post: Canal House, Station Road, Portarlington, Co. Laois, R32 AP23, Ireland.
<br />
<br />
By email: info@dataprotection.ie
For customers in The Netherlands, please contact the Dutch Data Protection Authority:
By phone: +31 (0)70 888 85 00
<br />
<br />
By fax: +31 (0)70 888 85 01
<br />
<br />
By post: Autoriteit Persoonsgegevens, Postbus 93374, 2509 AJ DEN HAAG
          </Typography>
        </Box>
      </AppContainer>
    </Box>
  );
}
