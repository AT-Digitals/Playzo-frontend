import { Box, FormControl, Link, MenuItem, NativeSelect, Select, Stack, Typography, styled } from "@mui/material";
import Colors from "../CommonComponents/Colors";
import logo from "../assets/logo.png";
import AppContainer from "../CommonComponents/AppContainer";
import CustomDropdown from "../CommonComponents/CustomDropdown";
import CustomButton from "../CommonComponents/CustomButton";
import DropDown from "../CommonComponents/DropDown";


const HeaderLink = styled("a")`
  text-decoration: none;
  position: relative;
  color: ${Colors.BUTTON_COLOR};

  &:hover {
    color: ${Colors.WHITE};
  }
`;

const StyledButton = styled(CustomButton)({
    padding: "8px 20px",
    textTransform: "none",
    whiteSpace: "nowrap",
    border: `1px solid ${Colors.BUTTON_COLOR} !important`,
    minWidth: 0,
    fontSize: "16px",
    fontWeight: "bold",
});

export default function Header() {
    return (
        <Box
            borderBottom={`1px solid ${Colors.SHADOW}`}
            bgcolor={Colors.BLACK}
            position="sticky"
            top={0}
            zIndex={1000}
            padding={3}
        >
            <AppContainer>
                <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Box>
                        <Link>
                            <img width={172} height={34} src={logo} alt="alterknit" />
                        </Link>
                    </Box>
                    <Stack direction="row" spacing={3} alignItems="center">
                        <HeaderLink href="">
                            <Typography color={Colors.WHITE} fontSize="18px">About Us</Typography>
                        </HeaderLink>
                        <Link>
                            <DropDown />
                        </Link>
                        <HeaderLink href="">
                            <Typography color={Colors.WHITE} fontSize="18px">Contact Us</Typography>
                        </HeaderLink>
                    </Stack>
                    <Stack direction="row" spacing={3} alignItems="center">
                        <HeaderLink href="">
                            <Typography
                                color={Colors.BUTTON_COLOR}
                                fontWeight="bold"
                                variant="h6"
                            >
                                Book Now
                            </Typography>
                        </HeaderLink>
                        <StyledButton bgColor="none" color={Colors.BUTTON_COLOR}>
                            Login
                        </StyledButton>
                    </Stack>
                </Stack>
            </AppContainer>
        </Box>
    );
}
