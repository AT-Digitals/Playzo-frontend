import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import AppContainer from "../CommonComponents/AppContainer";
import Colors from "../CommonComponents/Colors";
import DropDown from "../CommonComponents/DropDown";
import LoginForm from "../pages/login/LoginForm";
import { Logout } from "@mui/icons-material";
import UserComponent from "./UserComponent";
import UserLoginApi from "../api/UserLoginApi";
import assets from "../assets";
import routes from "../routes/routes";

const { "Playzo (1).svg": logo } = assets;

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
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const [userData, serUserData] = useState();

  const [anchorEl, setAnchorEl] = useState(null);
  const openvalue = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleChange = () => {
    navigate(routes.USERPROFILE);
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    try {
      UserLoginApi.logoutUser();
      navigate(routes.ROOT);
      navigate(0);
      localStorage.clear();
      setAnchorEl(null);
    } catch {
      console.log("Logout failed");
    }
  };

  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const user = localStorage.getItem("user");
  //   const userData = user && JSON.parse(user);
  //   setUser(userData);
  // }, []);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    const parsedUserData = userData && JSON.parse(userData);

    if (parsedUserData) {
      setUser(parsedUserData);
      setIsLoggedIn(true);
    } else {
      setUser(null);
      setIsLoggedIn(false);
    }
  }, []);

  useEffect(() => {
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [user]);

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
              <Typography
                sx={{
                  color: Colors.WHITE,
                  transition: "color 0.5s ease",
                  textTransform: "uppercase",
                  ":hover": {
                    color: Colors.BUTTON_COLOR,
                  },
                }}
                fontWeight={"400"}
                fontSize="14px"
                letterSpacing={"1.6px"}
              >
                About Us
              </Typography>
            </HeaderLink>
            <DropDown />
            <HeaderLink href={routes.CONTACTUS}>
              <Typography
                sx={{
                  color: Colors.WHITE,
                  transition: "color 0.5s ease",
                  textTransform: "uppercase",
                  ":hover": {
                    color: Colors.BUTTON_COLOR,
                  },
                }}
                fontWeight={"400"}
                fontSize="14px"
                letterSpacing={"1.6px"}
              >
                Contact Us
              </Typography>
            </HeaderLink>
          </Stack>
          <Stack direction="row" spacing={3} alignItems="center">
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
                  "&:hover": {
                    background: Colors.WHITE,
                    color: Colors.BUTTON_COLOR,
                    border: "2px solid #15B5FC",
                  },
                }}
              >
                Book Now
              </Button>
            </HeaderLink>
            {isLoggedIn ? (
              <Box>
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={openvalue ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={openvalue ? "true" : undefined}
                >
                  <Avatar
                    sx={{ width: 40, height: 40 }}
                    alt="Remy Sharp"
                    // src={headerProfileLogo}
                  >
                    M
                  </Avatar>
                </IconButton>

                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={openvalue}
                  onClose={handleMenuClose}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      "&::before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <MenuItem onClick={handleChange}>
                    <Avatar /> My Profile
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={handleLogout}>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </Box>
            ) : (
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
                    border: "2px solid #15B5FC",
                  },
                  display: isLoggedIn ? "none" : "flex",
                }}
                onClick={handleOpen}
              >
                Login
              </Button>
            )}{" "}
          </Stack>
        </Stack>

        <LoginForm handleClose={handleClose} open={open} />
      </AppContainer>
    </Box>
  );
}
