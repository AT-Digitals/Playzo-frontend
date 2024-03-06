import { Box, Button, Stack, styled } from "@mui/material";
import React, { useCallback, useState } from "react";

import AppDrawer from "./AppDrawer";
import Colors from "../CommonComponents/Colors";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import MessageIcon from "@mui/icons-material/Message";
import booknow from "./booking (1).png";
import logoImage from "../assets/logo";
import routes from "../routes/routes";

const { "Playzo.svg": logo } = logoImage;

interface MobileHeaderProps {
  setActiveTab: (event: any) => void;
  activeTab: string;
}

const HeaderLink = styled("a")`
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
          <Link to={routes.HOME}>
            <img
              width={"100%"}
              style={{
                maxWidth: 110,
              }}
              src={logo}
              alt="alterknit"
              height={25}
            />
          </Link>
          <Box display={"flex"} alignItems={"center"}>
            <HeaderLink href={routes.BOOKING_SERVICE}>
              <IconButton
                style={{
                  maxWidth: "100px",
                  position: "fixed",
                  bottom: "10%",
                  right: "5%",
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
            >
              {isHovered ? (
                <EditIcon
                  style={{
                    color: Colors.BUTTON_COLOR,
                  }}
                />
              ) : (
                <MessageIcon />
              )}
            </IconButton>
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
