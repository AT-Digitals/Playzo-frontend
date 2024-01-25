import {
    Box,
    Divider,
    Grid,
    IconButton,
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

interface loginProps {
    handleClose?: () => void;
}

export default function LoginForm({ handleClose }: loginProps) {
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
        <Box margin="60px auto" width="100%" maxWidth={1200}>
            <Grid
                container
                alignItems="center"
                justifyContent="center"
            //columnSpacing={5}
            >
                <Grid
                    item
                    xs={12}
                    md={6}
                    padding={3}
                    bgcolor={{ xs: "none", md: Colors.BACKGROUND_COLOR }}
                    borderRadius={5}
                    marginLeft={{ xs: 3, md: 0 }}
                >
                    <Stack direction="row" justifyContent="end">
                        <IconButton><CloseIcon sx={{ color: Colors.WHITE, fontSize: "30px" }} onClick={handleClose} /></IconButton>
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
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "8px",
                                    },
                                }}
                                placeholder="Enter your email"
                                type="email"
                                required
                                value={email}
                                onChange={handleEmailChange}
                                error={!isValidEmail}
                                InputProps={{
                                    endAdornment: !isValidEmail && (
                                        <ErrorOutlineIcon
                                            color="error"
                                            style={{ marginRight: "8px" }}
                                        />
                                    ),
                                }}
                            />
                            <span style={{ color: "#d32f2f", fontSize: "12px" }}> {
                                !isValidEmail ? "Please enter valid email address" : ""
                            }</span>
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
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "8px",
                                    },
                                }}
                                placeholder="Enter your password"
                                onChange={handlePasswordChange}
                                value={password}
                                required
                                error={!isPasswordValid}
                                InputProps={{
                                    endAdornment: !isPasswordValid && (
                                        <ErrorOutlineIcon
                                            color="error"
                                            style={{ marginRight: "8px" }}
                                        />
                                    ),
                                }}
                            />
                            <span style={{ color: "#d32f2f", fontSize: "12px" }}>{
                                !isPasswordValid ? "Please enter valid password" : ""
                            }</span>
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
