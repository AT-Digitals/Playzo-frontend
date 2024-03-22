import {
  Avatar,
  Box,
  Button,
  Drawer,
  IconButton,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";

import CloseIcon from "@mui/icons-material/Close";
import Colors from "../CommonComponents/Colors";
import ExpandMoreTwoToneIcon from "@mui/icons-material/ExpandMoreTwoTone";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowUpTwoToneIcon from "@mui/icons-material/KeyboardArrowUpTwoTone";
import { Link } from "react-router-dom";
import LoginForm from "../pages/login/LoginForm";
import routes from "../routes/routes";

const HeaderLink = styled(Link)`
  text-decoration: none;
  position: relative;
  color: graytext;

  &:hover {
    color: black;
  }
`;

const StyledDrawer = styled(Drawer)({
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: "300px",
    boxSizing: "border-box",
    backgroundColor: Colors.BUTTON_COLOR,
    padding: "20px",
    "& .MuiListItemButton-root:hover": {
      backgroundColor: Colors.WHITE,
      color: Colors.WHITE,
    },
  },
});

interface AppDrawerProps {
  open: boolean;
  onClose?: () => void;
  setActiveTab: (event: any) => void;
  activeTab: string;
  isLoggedIn: any;
  user: any;
  handleLogout: any;
  setModalOpen?: any;
}

const MenuList = [
  {
    href: routes.SERVICE,
    label: "Badminton",
  },
  {
    href: routes.SERVICE,
    label: "CrossFit",
  },

  {
    href: routes.SERVICE,
    label: "Turf",
  },
  {
    href: routes.SERVICE,
    label: "Play Station",
  },

  {
    href: routes.SERVICE,
    label: "Board Games",
  },
  {
    href: routes.SERVICE,
    label: "Party Center",
  },
  {
    href: routes.SERVICE,
    label: "Cafeteria",
  },
];

export default function AppDrawer({
  open,
  onClose,
  setActiveTab,
  activeTab,
  isLoggedIn,
  user,
  handleLogout,
  setModalOpen,
}: AppDrawerProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [showoption, setShowOption] = useState(false);

  const handleUserToggle = () => {
    setShowOption(!showoption);
  };

  const LoginClick = () => {
    onClose?.();
    setModalOpen(true);
  };

  return (
    <StyledDrawer
      sx={{
        display: { xs: "block", sm: "block", md: "block", lg: "none" },
      }}
      variant="temporary"
      anchor="right"
      open={open}
      onClose={onClose}
    >
      <Box display={"flex"} justifyContent={"end"}>
        <IconButton onClick={onClose}>
          <CloseIcon
            style={{
              color: "white",
            }}
          />
        </IconButton>
      </Box>
      <Box display={isLoggedIn ? "flex" : "none"}>
        <Box
          display={"flex"}
          gap={"1rem"}
          alignItems={"center"}
          padding={"0 20px"}
        >
          <Avatar sx={{ width: 40, height: 40 }} alt="Remy Sharp">
            {user ? user.name?.charAt(0).toUpperCase() : "U"}
          </Avatar>
          <Typography
            fontSize={"16px"}
            color={"white"}
            textTransform={"capitalize"}
          >
            {" "}
            {user ? user.name : null}
          </Typography>
        </Box>
        <IconButton onClick={handleUserToggle}>
          {showoption ? (
            <KeyboardArrowUpIcon
              style={{
                color: "white",
              }}
            />
          ) : (
            <KeyboardArrowDownIcon style={{ color: "white" }} />
          )}
        </IconButton>
      </Box>

      {showoption && (
        <Stack padding={" 20px 80px 0"} direction="column" spacing={1}>
          <HeaderLink to={routes.USERPROFILE} onClick={onClose}>
            <Box>
              <Typography color={Colors.WHITE} fontSize="16px">
                My Profile
              </Typography>
            </Box>
          </HeaderLink>
        </Stack>
      )}

      <Stack
        direction={"column"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        height="100%"
      >
        <Stack padding={"0 20px"} mt={6} spacing={3} alignItems="self-start">
          <HeaderLink to={routes.ABOUTUS} onClick={onClose}>
            <Typography color={Colors.WHITE} fontSize="16px">
              About Us
            </Typography>
          </HeaderLink>
          <Box
            onClick={handleMenuToggle}
            display="flex"
            alignItems="center"
            gap="0.5rem"
          >
            <Typography
              color={Colors.WHITE}
              fontSize="16px"
              style={{ cursor: "pointer" }}
            >
              Services
            </Typography>
            {isMenuOpen ? (
              <KeyboardArrowUpTwoToneIcon
                style={{
                  color: Colors.WHITE,
                }}
              />
            ) : (
              <ExpandMoreTwoToneIcon
                style={{
                  color: Colors.WHITE,
                }}
              />
            )}
          </Box>

          {isMenuOpen && (
            <Stack padding={"0 20px"} direction="column" spacing={1}>
              {MenuList.map((item, index) => (
                <HeaderLink key={index} to={item.href} onClick={onClose}>
                  <Box>
                    <Typography color={Colors.WHITE} fontSize="16px">
                      {item.label}
                    </Typography>
                  </Box>
                </HeaderLink>
              ))}
            </Stack>
          )}
          <HeaderLink to={routes.CONTACTUS} onClick={onClose}>
            <Typography color={Colors.WHITE} fontSize="16px">
              Contact Us
            </Typography>
          </HeaderLink>

          <Box width={"90%"} border={"1px solid white"}></Box>
        </Stack>
        <Stack>
          {isLoggedIn ? (
            <Button
              sx={{
                whiteSpace: "nowrap",
                padding: "8px 20px",
                textTransform: "none",
                fontSize: "16px",
                minWidth: "150px",
                fontWeight: "400",
                border: "2px solid #15B5FC",
                borderRadius: "30px",
                letterSpacing: "1.6px",
                background: Colors.WHITE,
                color: Colors.BUTTON_COLOR,
                width: "100%",
              }}
              onClick={handleLogout}
            >
              Logout
            </Button>
          ) : (
            <Button
              onClick={LoginClick}
              sx={{
                whiteSpace: "nowrap",
                padding: "8px 20px",
                textTransform: "none",
                fontSize: "16px",
                minWidth: "150px",
                fontWeight: "400",
                border: "2px solid #15B5FC",
                borderRadius: "30px",
                letterSpacing: "1.6px",
                background: Colors.WHITE,
                color: Colors.BUTTON_COLOR,
                width: "100%",
              }}
            >
              Login
            </Button>
          )}
        </Stack>
      </Stack>
    </StyledDrawer>
  );
}
