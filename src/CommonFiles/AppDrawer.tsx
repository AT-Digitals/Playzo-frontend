import {
  Avatar,
  Box,
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
import KeyboardArrowUpTwoToneIcon from "@mui/icons-material/KeyboardArrowUpTwoTone";
import assets from "../assets";
import routes from "../routes/routes";

const { "Image (6).png": Userprofile } = assets;

const HeaderLink = styled("a")`
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
}: AppDrawerProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <StyledDrawer
      variant="temporary"
      anchor="right"
      open={open}
      onClose={onClose}
      // onEscapeKeyDown={onClose}
    >
      <Stack
        direction={"column"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        height="100%"
      >
        <Stack padding={"0 20px"} mt={6} spacing={3} alignItems="self-start">
          <IconButton onClick={onClose}>
            <CloseIcon
              style={{
                color: "white",
              }}
            />
          </IconButton>
          <HeaderLink href={routes.ABOUTUS}>
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
                <HeaderLink key={index} href={""}>
                  <Box>
                    <Typography color={Colors.WHITE} fontSize="16px">
                      {item.label}
                    </Typography>
                  </Box>
                </HeaderLink>
              ))}
            </Stack>
          )}
          <HeaderLink href={routes.CONTACTUS}>
            <Typography color={Colors.WHITE} fontSize="16px">
              Contact Us
            </Typography>
          </HeaderLink>

          <Box width={"90%"} border={"1px solid white"}></Box>
          <HeaderLink href={routes.BOOKING_SERVICE}>
            <Typography color={Colors.WHITE} fontSize="16px" fontWeight={700}>
              Book now{" "}
            </Typography>
          </HeaderLink>
        </Stack>

        <Stack
          padding={"0 20px"}
          textAlign={"center"}
          direction={"row"}
          spacing={1}
          alignItems="center"
        >
          <Avatar
            src={Userprofile}
            style={{
              height: "48px",
              width: "100%",
              maxWidth: "48px",
            }}
          />

          <Typography fontSize={"16px"} color={"white"}>
            John Doe
          </Typography>
        </Stack>
      </Stack>
    </StyledDrawer>
  );
}
