import { Avatar, Box, Stack, styled } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import React, { useCallback, useEffect, useState } from "react";

import AppDrawer from "./AppDrawer";
import BookingParantmodal from "../BookingService/BookingParantmodal";
import Colors from "../CommonComponents/Colors";
import IconButton from "@mui/material/IconButton";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import UserLoginApi from "../api/UserLoginApi";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import booknow from "./Sports.svg";
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
    const phoneNumber = "7094460944";
    const whatsappLink = `https://wa.me/${phoneNumber}`;

    // Open WhatsApp link in a new window
    window.open(whatsappLink, "_blank");
  };
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const handleLogout = async (event: any) => {
  //   event.preventDefault();
  //   try {
  //     UserLoginApi.logoutUser();
  //     navigate(routes.ROOT);
  //     localStorage.clear();
  //     setOpen(false);
  //   } catch {
  //     console.log("Logout failed");
  //   }
  // };

  const [openModal, setOpenModal] = useState(false);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleConfirmLogout = async () => {
    try {
      await UserLoginApi.logoutUser();

      localStorage.clear();
      setIsLoggedIn(false);

      window.location.href = routes.ROOT;
    } catch {
      console.log("Logout failed");
    }
  };

  const handleLogout = async (event: any) => {
    event.preventDefault();

    // Check if local storage is empty
    const isLocalStorageEmpty =
      localStorage.getItem("bookings") == null ||
      localStorage.getItem("bookings") === undefined ||
      localStorage.getItem("bookings") === "[]";

    if (!isLocalStorageEmpty) {
      setOpenModal(true); // Open the modal instead of using window.confirm
      return;
    }

    try {
      // Logout user
      await UserLoginApi.logoutUser();

      localStorage.clear();
      setIsLoggedIn(false);

      window.location.href = routes.ROOT;
    } catch {
      console.log("Logout failed");
    }
  };

  interface User {
    name?: string;
  }

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    const parsedUserData = userData && JSON.parse(userData);

    if (parsedUserData) {
      setUser(parsedUserData);
      setIsLoggedIn(true); // Set to true if there is user data
    } else {
      setUser(null);
      setIsLoggedIn(false); // Set to false if there is no user data
    }
  }, []);

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
            <Box display={isLoggedIn ? "block" : "none"}>
              <Avatar sx={{ width: 40, height: 40 }} alt="Remy Sharp">
                {user ? user.name?.charAt(0).toUpperCase() : "U"}
              </Avatar>
            </Box>

            <IconButton size="large" onClick={handleDrawerOpen}>
              <MenuTwoToneIcon
                style={{ fontSize: 40, color: Colors.BUTTON_COLOR }}
              />
            </IconButton>
          </Box>
        </Stack>
      </Box>

      <AppDrawer
        handleLogout={handleLogout}
        user={user}
        open={open}
        onClose={handleDrawerClose}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
        isLoggedIn={isLoggedIn}
      />

      <BookingParantmodal
        open={openModal}
        handleClose={handleCloseModal}
        handleConfirmReset={handleConfirmLogout}
        text="Are you sure to log out?"
      />
    </>
  );
}
