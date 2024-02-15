import { Box, Typography } from "@mui/material";
import image1 from "../../assets/pexels-photo-114296.jpeg"
import Image2 from "../../assets/Rectangle 669.png";
import styled from "@emotion/styled";
import Colors from "../../CommonComponents/Colors";
import AppContainer from "../../CommonComponents/AppContainer";

const StyledImage5 = styled.img`
  @media (min-width: 300px) {
    /* Extra small devices (phones) */
    position: absolute;
    top: -172px;
    width: 1240px;
    transform: translate(${0}, ${10.5}%);
  }
  @media (min-width: 768px) {
    /* Small devices (tablets) */
    position: absolute;
    top: -172px;
    width: 1240px;
    transform: translate(${0}, ${10.5}%);
  }
  @media (min-width: 992px) {
    /* Medium devices (desktops) */
    position: absolute;
    top: -172px;
    width: 1240px;
    transform: translate(${0}, ${10.5}%);
  }
  @media (min-width: 1200px) {
    /* Large devices (large desktops) */
    position: absolute;
    width: 100%;
    max-height: 560px;
    object-fit: cover;
  }
`;

export default function PrivacyPolicy() {
    return (
        <>
        <Box>
            <img width={"100%"} style={{maxHeight: "350px", objectFit: "cover"}} src={image1} alt="" />
        </Box>
        <StyledImage5 src={Image2} alt="background" />
       
        <Typography style={{position: "absolute", top: "68%", left: "11%"}} fontSize={"42px"} fontWeight={"bold"} color={Colors.WHITE}>Privacy Policy</Typography>
        <AppContainer maxWidth={1178}>
            <Box pt={"40px"} pb={"90px"}>
                <Typography fontWeight={"500"}>
                    This Privacy policy is subject to the terms of the Site Policy (User Agreement) of this website.
<br />
<br />
The personal information provided by the users to us will not be provided to third parties without previous consent of the concerned user. Information of a general nature
may however be revealed to external parties.
<br />
<br />
Every effort shall be made to keep the information provided by the users in a safe manner, the information will be displayed on the website will be done so only after
obtaining consent from the users.
<br />
<br />
You are solely responsible for maintaining confidentiality of the User password and user identification and all activities and transmission performed by the User through his
user identification and shall be solely responsible for carrying out any online or off-line transaction involving credit cards / debit cards or such other forms of instruments or
documents for making such transactions and FABO Properties assumes no responsibility or liability for their improper use of information relating to such usage of credit
cards / debit cards used by the subscriber online / off-line.
<br />
<br />
A user always has the option of not providing the information which is not mandatory In order to provide a personalized browsing experience, we may collect personal
information from you. 
<br />
<br />
Also, we may require you to complete a registration form or ask for some information seeking your preferences regarding the property you are looking for. Based on your
preferences, we will be able to deliver or allow you to access the most relevant information that meets your end.
<br />
<br />
To extend this personalized experience we may track the IP address of a User's computer / device and save certain information on your system in the form of cookies. A User
has the option of accepting or declining the cookies of this website by changing the settings of your browser.
<br />
<br />
Any User browsing this website, is not required to disclose his identity or provide any of his information every time. It is only at the time of registration, the User is required
to furnish the details in the registration form. You agree that FABO Properties may use personal information provided by you to improve its marketing and promotional efforts
to analyze site usage, improve the Site's content and product offerings, and customize the Site's content, layout, and services. This shall further improve the website content
and help us to tailor it to meet your needs, and to provide a smooth, efficient, safe and customized experience while using this website.
<br />
<br />
You agree that FABO Properties may use your personal information to contact you and deliver information to you that, are targeted to your interests, such as targeted
banner advertisements, administrative notices, product offerings, forum comments and reviews, your portfolio related updates, and communications relevant to your use of
this website. By accepting this Privacy Policy, you expressly agree to receive this information. If you do not wish to receive these communications, you may opt out of the
receipt of certain communications in your profile. You may make changes to your profile at any time. It is the belief of FABO Properties that privacy of a person can be best
guaranteed by working in conjunction with the Law enforcement authorities.
<br />
<br />
All FABO Properties websites including this website fully comply with all Indian Laws applicable. FABO Properties has always cooperated with all law enforcement inquiries.
FABO Properties may disclose all or part of your personal details in response to a request from the law enforcement authorities or in a case of bonafide requirement to
prevent an imminent breach of the law.
<br />
<br />
FABO Properties has taken all reasonable steps to ensure that all the information on this website is authentic. Users are advised to research independently the credential of
the advertisers provided on this website. FABO Properties shall not have any responsibility in this regard. We also recommend that you visit the link to User Agreement for
more comprehensive information on this aspect.
<br />
<br />
FABO Properties has implemented and uses Display Advertising. FABO Properties is using Remarketing with Google Analytics to advertise online. You can opt-out of Google
Analytics for Display Advertising and customize Google Display Network ads using the Ads Preferences Manager. Third-party vendors, including Google, show our ads on
sites across the Internet. We and third-party vendors, including Google, use first-party cookies (such as the Google Analytics cookies) and third-party cookies (such as the
DoubleClick cookie) together to inform, optimize, and serve ads based on someone's past visits to our website.

                </Typography>
                
            </Box>
            
        </AppContainer>
        </>
    )
}