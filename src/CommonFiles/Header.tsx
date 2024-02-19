import { Box, Stack, Typography, styled } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import AppContainer from "../CommonComponents/AppContainer";
import Colors from "../CommonComponents/Colors";
import CustomButton from "../CommonComponents/CustomButton";
import DropDown from "../CommonComponents/DropDown";
import LoginForm from "../pages/login/LoginForm";
import UserLoginApi from "../api/UserLoginApi";
import logo from "../assets/Playzo.png";
import routes from "../routes/routes";
import { useState } from "react";

const HeaderLink = styled("a")`
  text-decoration: none;
  position: relative;
  color: ${Colors.BUTTON_COLOR};
  transition: color 0.3s ease; /* Add transition for color change */

  &:hover {
    color: ${Colors.WHITE};
  }
`;

export default function Header() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  const userData = user && JSON.parse(user);
  const handleLogout = async () => {
    try {
      UserLoginApi.logoutUser();
      navigate(routes.ROOT);
      localStorage.clear();
    } catch {
      console.log("Logout failed");
    }
  };
  return (
    <Box width="100%" bgcolor={Colors.BLACK}>
      <AppContainer
        maxWidth={1200}
        display={{ xs: "none", sm: "none", md: "none", lg: "block" }}
      >
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
          paddingY={3}
        >
          <Box>
            <Link to={routes.ROOT}>
              <img width={172} height={34} src={logo} alt="alterknit" />
            </Link>
          </Box>

          <Stack direction="row" spacing={3} alignItems="center">
            <HeaderLink href={routes.ABOUTUS}>
              <Typography sx={{
                color: Colors.WHITE,
                transition: "color 0.5s ease",
                textTransform: "uppercase",
                ":hover": {
                  color: Colors.BUTTON_COLOR,
                 
                }
              }} fontWeight={"400"} fontSize="14px" letterSpacing={"1.6px"}>
                About Us
              </Typography>
            </HeaderLink>
            <DropDown />
            <HeaderLink href={routes.CONTACTUS}>
              <Typography sx={{
               color: Colors.WHITE,
                transition: "color 0.5s ease",
                textTransform: "uppercase",
                ":hover": {
                  color: Colors.BUTTON_COLOR,
                }
              }} fontWeight={"400"} fontSize="14px" letterSpacing={"1.6px"}>
                Contact Us
              </Typography>
            </HeaderLink>
           
          </Stack>
          <Stack direction="row" spacing={3} alignItems="center">
        
           
            <HeaderLink href={routes.BOOKING_SERVICE}>
              <Typography
                color={Colors.BUTTON_COLOR}
                fontSize="18px"
                fontWeight={600}
              >
                Book Now
              </Typography>
            </HeaderLink>
            <CustomButton
              variant="outlined"
              color={Colors.WHITE}
              bgColor={Colors.BUTTON}
              sx={{
                padding: "8px 20px",
                textTransform: "none",
                fontSize: "16px",
                minWidth: "100px",
                color: Colors.BUTTON_COLOR,
                fontWeight: "bold",
                border: "2px solid #15B5FC;",
              }}
              onClick={handleOpen}
            >
              Login
            </CustomButton>
           {userData && <CustomButton
              variant="outlined"
              color={Colors.WHITE}
              bgColor={Colors.BUTTON}
              sx={{
                padding: "8px 20px",
                textTransform: "none",
                fontSize: "16px",
                minWidth: "100px",
                color: Colors.BUTTON_COLOR,
                fontWeight: "bold",
                border: "2px solid #15B5FC;",
              }}
              onClick={handleLogout}
            >
              Logout
            </CustomButton>}
          </Stack>
        </Stack>

        <LoginForm handleClose={handleClose} open={open} />
      </AppContainer>
    </Box>
  );
}
