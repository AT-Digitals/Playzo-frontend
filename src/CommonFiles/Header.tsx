import { Box, FormControl, MenuItem, NativeSelect, Select, Stack, Typography, styled } from "@mui/material";

import AppContainer from "../CommonComponents/AppContainer";
import Colors from "../CommonComponents/Colors";
import CustomButton from "../CommonComponents/CustomButton";
import CustomDropdown from "../CommonComponents/CustomDropdown";
import DropDown from "../CommonComponents/DropDown";
import logo from "../assets/logo.png";
import routes from "../routes/routes";
import { Link } from "react-router-dom";

const HeaderLink = styled("a")`
  text-decoration: none;
  position: relative;
  color: ${Colors.BUTTON_COLOR};

  &:hover {
    color: ${Colors.WHITE};
  }
`;

const StyledLink = styled(Link)({
    padding: "8px 20px",
    textTransform: "none",
    whiteSpace: "nowrap",
    border: `1px solid ${Colors.BUTTON_COLOR} !important`,
    minWidth: 0,
    fontSize: "16px",
    fontWeight: "bold",
    textDecoration: "none",
    color: Colors.BUTTON_COLOR,
    borderRadius: "20px"
});

export default function Header() {
    return (
        <Box
            width="100%"
            bgcolor={Colors.BLACK}

        >
            <AppContainer>
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
                            <Typography color={Colors.WHITE} fontSize="18px">About Us</Typography>
                        </HeaderLink>
                        <DropDown />
                        <HeaderLink href={routes.CONTACTUS}>
                            <Typography color={Colors.WHITE} fontSize="18px">Contact Us</Typography>
                        </HeaderLink>
                    </Stack>
                    <Stack direction="row" spacing={3} alignItems="center">
                        <HeaderLink>
                            <Typography
                                color={Colors.BUTTON_COLOR}
                                fontWeight="bold"
                                variant="h6"
                            >
                                Book Now
                            </Typography>
                        </HeaderLink>
                        <StyledLink to={routes.LOGIN}>Login</StyledLink>
                    </Stack>
                </Stack>
            </AppContainer>
        </Box>
    );
}
