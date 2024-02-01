import { Box, Stack, Typography, styled } from "@mui/material";

import AppContainer from "../CommonComponents/AppContainer";
import Colors from "../CommonComponents/Colors";
import CustomButton from "../CommonComponents/CustomButton";
import DropDown from "../CommonComponents/DropDown";
import { Link } from "react-router-dom";
import LoginForm from "../pages/login/LoginForm";
import logo from "../assets/logo.png";
import routes from "../routes/routes";
import { useState } from "react";

const HeaderLink = styled("a")`
  text-decoration: none;
  position: relative;
  color: ${Colors.BUTTON_COLOR};

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
      <AppContainer display={{ xs: "none", xl: "flex" }}>
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
              <Typography color={Colors.WHITE} fontSize="18px">
                About Us
              </Typography>
            </HeaderLink>
            <DropDown />
            <HeaderLink href={routes.CONTACTUS}>
              <Typography color={Colors.WHITE} fontSize="18px">
                Contact Us
              </Typography>
            </HeaderLink>
          </Stack>
          <Stack direction="row" spacing={3} alignItems="center">
            <HeaderLink href={routes.BOOKING_SERVICE}>
              <Typography
                color={Colors.BUTTON_COLOR}
                fontWeight="bold"
                variant="h6"
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
                fontSize: "20px",
                minWidth: "100px",
                color: Colors.BUTTON_COLOR,
                fontWeight: "bold",
              }}
              onClick={handleOpen}
            >
              Login
            </CustomButton>
          </Stack>
        </Stack>

        <LoginForm handleClose={handleClose} open={open} />
      </AppContainer>
    </Box>
  );
}
