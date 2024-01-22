import {
    Box,
    Divider,
    Grid,
    Link,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import Colors from "../../CommonComponents/Colors";
import CloseIcon from "@mui/icons-material/Close";
import CustomTextField from "../../CommonComponents/CustomTextField";
import CustomLabel from "../../CommonComponents/CustomLabel";
import CustomButton from "../../CommonComponents/CustomButton";
import Icon from "../../assets/Variant10.png";
import { useState } from "react";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [password, setPassword] = useState("");
    const [isPasswordValid, setIsPasswordValid] = useState<boolean>(true);

    const handleEmailChange = (event: any) => {
        const newEmail = event.target.value;
        setEmail(newEmail);
        validateEmail(newEmail);
    };

    const validateEmail = (input: any) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(input);
        setIsValidEmail(isValid);
    };

    const handlePasswordChange = (event: any) => {
        setPassword(event.target.value);
        validatePassword(event.target.value);
    };

    const validatePassword = (value: string) => {
        setIsPasswordValid(value.length >= 8);
    };

    const onSubmit = (event: any) => {
        event.preventDefault();
        if (isValidEmail) {
            setIsValidEmail(false);
        }
        if (isPasswordValid) {
            setIsPasswordValid(false);
        }

        const data = {
            email: email,
            password: password,
        };
        console.log("data", data);
    };
    return (
        <Box margin="100px auto" width="100%" maxWidth={1200}>
            <Grid
                container
                alignItems="center"
                justifyContent="center"
                columnSpacing={5}
            >
                <Grid
                    item
                    xs={12}
                    md={6}
                    padding={5}
                    bgcolor={{ xs: "none", md: Colors.BACKGROUND_COLOR }}
                    borderRadius={5}
                    marginLeft={{ xs: 3, md: 0 }}
                >
                    <Stack direction="row" justifyContent="end">
                        <CloseIcon sx={{ color: Colors.WHITE, fontSize: "30px" }} />
                    </Stack>
                    <Stack direction="column" spacing={3} padding={6}>
                        <Box>
                            <CustomLabel color={Colors.WHITE} mb={1}>
                                Email
                            </CustomLabel>
                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                sx={{
                                    backgroundColor: Colors.WHITE,
                                    width: "100%",
                                    borderRadius: "8px",
                                    ".css-bn26lx-MuiFormHelperText-root": {
                                        backgroundColor: Colors.BACKGROUND_COLOR,
                                        margin: "0px",
                                    },
                                    // borderBottomLeftRadius: "33px",
                                    // borderBottomRightRadius: "33px"
                                }}
                                placeholder="Enter your email"
                                type="email"
                                required
                                value={email}
                                onChange={handleEmailChange}
                                error={!isValidEmail}
                                helperText={
                                    !isValidEmail ? "Please enter valid email address" : ""
                                }
                                InputProps={{
                                    endAdornment: !isValidEmail && (
                                        <ErrorOutlineIcon
                                            color="error"
                                            style={{ marginRight: "8px" }}
                                        />
                                    ),
                                }}
                            />
                        </Box>
                        <Box>
                            <CustomLabel color={Colors.WHITE} mb={1}>
                                Password
                            </CustomLabel>
                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                sx={{
                                    backgroundColor: Colors.WHITE,
                                    width: "100%",
                                    borderRadius: "8px",
                                    ".css-bn26lx-MuiFormHelperText-root": {
                                        backgroundColor: Colors.BACKGROUND_COLOR,
                                        margin: "0px",
                                    },
                                }}
                                placeholder="Enter your password"
                                onChange={handlePasswordChange}
                                value={password}
                                required
                                error={!isPasswordValid}
                                helperText={
                                    !isPasswordValid ? "Please enter valid password" : ""
                                }
                                InputProps={{
                                    endAdornment: !isPasswordValid && (
                                        <ErrorOutlineIcon
                                            color="error"
                                            style={{ marginRight: "8px" }}
                                        />
                                    ),
                                }}
                            />
                        </Box>
                        <Link
                            sx={{
                                color: Colors.WHITE,
                                textDecoration: "none",
                                textAlign: "end",
                            }}
                        >
                            Forgot Password?
                        </Link>
                        <CustomButton
                            color={Colors.WHITE}
                            bgColor={Colors.BUTTON}
                            sx={{
                                borderRadius: "8px",
                                padding: "14px 14px",
                                textTransform: "none",
                                fontSize: "20px",
                            }}
                            onClick={onSubmit}
                        >
                            Login
                        </CustomButton>
                        <Divider
                            variant="middle"
                            sx={{
                                color: Colors.WHITE,
                                width: "200px",
                                margin: "24px auto 0 auto !important",
                                "&::before, &::after": {
                                    borderColor: Colors.WHITE,
                                },
                            }}
                        >
                            Or
                        </Divider>
                        <CustomButton
                            color={Colors.WHITE}
                            bgColor={Colors.BUTTON_ONE}
                            sx={{
                                borderRadius: "8px",
                                padding: "14px 14px",
                                textTransform: "none",
                                fontSize: "16px",
                                fontWeight: 700,
                            }}
                            startIcon={
                                <img
                                    src={Icon}
                                    alt="button"
                                    width={40}
                                    height={40}
                                    style={{
                                        position: "absolute",
                                        transform: `translate(-135px, -20px)`,
                                    }}
                                />
                            }
                        >
                            Sign in with Google
                        </CustomButton>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
}
