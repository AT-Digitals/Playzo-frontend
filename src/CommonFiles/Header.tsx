import { Box, Button, Stack, Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";

import AppContainer from "../CommonComponents/AppContainer";
import Colors from "../CommonComponents/Colors";
import DropDown from "../CommonComponents/DropDown";
import LoginForm from "../pages/login/LoginForm";
import logo from "../assets/Playzo (1).svg";
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
              <img width={200} height={50} src={logo} alt="alterknit" />
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
            <Button
              variant="outlined"
              sx={{
                padding: "8px 20px",
                textTransform: "none",
                fontSize: "16px",
                minWidth: "110px",
                fontWeight: "400",
                border: "2px solid #15B5FC",
                borderRadius: "30px",
                letterSpacing: "1.6px",
                background: Colors.BUTTON_COLOR,
                color: Colors.WHITE,
                ":hover": {
                  background: Colors.WHITE,
                  color: Colors.BUTTON_COLOR,
                  border: "1px solid #15B5FC",
                }
              }}
              onClick={handleOpen}
            >
              Login
            </Button>
            
            <HeaderLink href={routes.BOOKING_SERVICE}>
            <Button
              variant="outlined"
              sx={{
                padding: "8px 20px",
                textTransform: "none",
                fontSize: "16px",
                minWidth: "110px",
                fontWeight: "400",
                border: "2px solid #15B5FC",
                borderRadius: "30px",
                letterSpacing: "1.6px",
                background: Colors.BUTTON_COLOR,
                color: Colors.WHITE,
                ":hover": {
                  background: Colors.WHITE,
                  color: Colors.BUTTON_COLOR,
                  border: "1px solid #15B5FC",
                }
              }}>
                Book Now
                </Button>
            </HeaderLink>
          </Stack>
        </Stack>

        <LoginForm handleClose={handleClose} open={open} />
      </AppContainer>
    </Box>
  );
}