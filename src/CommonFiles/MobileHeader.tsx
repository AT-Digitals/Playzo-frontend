import { Box, Button, Stack, styled } from "@mui/material";
import React, { useCallback, useState } from "react";

import AppDrawer from "./AppDrawer";
import Colors from "../CommonComponents/Colors";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import booknow from "./booking (1).png";
import logoImage from "../assets/logo";
import routes from "../routes/routes";

const { "Playzo.svg": logo } = logoImage;

interface MobileHeaderProps {
  setActiveTab: (event: any) => void;
  activeTab: string;
}

const HeaderLink = styled(Link)`
  text-decoration: none;
  position: relative;
  color: graytext;

  &:hover {
    color: black;
  }
`;
export default function MoblieHeader({
  activeTab,
  setActiveTab,
}: MobileHeaderProps) {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = useCallback(() => setOpen(true), []);
  const handleDrawerClose = useCallback(() => setOpen(false), []);
  const [isHovered, setIsHovered] = useState(false);
  const handleButtonClick = () => {
    // Replace the phone number with the desired one
    const phoneNumber = "7094460944";
    const whatsappLink = `https://wa.me/${phoneNumber}`;

    // Open WhatsApp link in a new window
    window.open(whatsappLink, "_blank");
  };
  return (
    <>
      <Box
        alignItems="center"
        display={{ xs: "block", sm: "block", md: "block", lg: "none" }}
        paddingY={3}
        paddingX={3}
        width="100%"
        bgcolor={"black"}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
        >
          <HeaderLink to={"/"}>
            <img
              width={"100%"}
              style={{
                maxWidth: 110,
              }}
              src={logo}
              alt="alterknit"
              height={25}
            />
          </HeaderLink>
          <Box display={"flex"} alignItems={"center"}>
            <HeaderLink to={routes.BOOKING_SERVICE}>
              <IconButton
                style={{
                  maxWidth: "100px",
                  position: "fixed",
                  bottom: "10%",
                  right: "3%",
                }}
              >
                <img width={"100%"} src={booknow} alt="book" />
              </IconButton>
            </HeaderLink>
            <IconButton
              style={{
                maxWidth: "60px",
                position: "fixed",
                bottom: "12%",
                left: "5%",
                background: isHovered ? Colors.WHITE : Colors.BUTTON_COLOR, // Change color on hover
                color: "white",
                borderRadius: "50%",
                height: "60px",
                width: "100%",
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={handleButtonClick}
            >
              {isHovered ? (
                <WhatsAppIcon
                  style={{
                    color: Colors.BUTTON_COLOR,
                  }}
                />
              ) : (
                <WhatsAppIcon
                  style={{
                    color: Colors.WHITE,
                  }}
                />
              )}
            </IconButton>

            <Button>Login</Button>
            <IconButton size="large" onClick={handleDrawerOpen}>
              <MenuTwoToneIcon
                style={{ fontSize: 40, color: Colors.BUTTON_COLOR }}
              />
            </IconButton>
          </Box>
        </Stack>
      </Box>

      <AppDrawer
        open={open}
        onClose={handleDrawerClose}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
      />
    </>
  );
}
