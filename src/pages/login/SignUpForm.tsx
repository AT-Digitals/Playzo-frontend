import {
    Box,
    Dialog,
    DialogContent,
    Divider,
    IconButton,
    Link,
    Stack,
    TextField,
    Typography,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import Colors from "../../CommonComponents/Colors";
import CustomButton from "../../CommonComponents/CustomButton";
import CustomLabel from "../../CommonComponents/CustomLabel";
import CustomTextField from "../../CommonComponents/CustomTextField";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import Icon from "../../assets/Variant10.png";
import TextFieldComponent from "./TextFieldComponent";
import UserApi from "../../api/UserApi";
import UserLoginApi from "../../api/UserLoginApi";
import routes from "../../routes/routes";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface signUpProps {
    handleClose?: () => void;
    open: any;
}

export default function SignUpForm({ handleClose, open }: signUpProps) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState<boolean>(true);
    const [isValidName, setIsValidName] = useState(true);
    const [isValidPhone, setIsValidPhone] = useState(true);
    const navigate = useNavigate();

    const handleEmailChange = (event: any) => {
        const newEmail = event.target.value;
        setEmail(newEmail);
        validateEmail(newEmail);
    };
    const validateName = (value: string) => {
        setIsValidName(value.length >= 6);
    }

    const handleNameChange = (event: any) => {
        setName(event.target.value);
        validateName(event.target.value)
    };

    const validatePhone = (value: string) => {
        setIsValidPhone(value.length >= 10);
    }

    const handlePhoneChange = (event: any) => {
        setPhoneNumber(event.target.value);
        validatePhone(event.target.value);
    };
    const validateEmail = (input: any) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(input);
        setIsValidEmail(isValid);
    };

    const validatePassword = (value: string) => {
        setIsPasswordValid(value.length >= 8);
    };

    const handlePasswordChange = (event: any) => {
        setPassword(event.target.value);
        validatePassword(event.target.value);
    };

    const onSubmit = async (event: any) => {
        event.preventDefault();
        if (email) {
            setIsValidEmail(true);
        }
        if (password) {
            setIsPasswordValid(true);
        }
        if (name) {
            setIsValidName(true)
        }
        if (phoneNumber) {
            setIsValidPhone(true)
        }

        const data = {
            name,
            email,
            phoneNumber,
            password,

        };

        try {
            const response = await UserApi.createUser({
                email: data.email,

                password: data.password,
                name: data.name,

                phone: data.phoneNumber
              });
            if (response) {
                navigate(routes.BOOKING_SERVICE);
                handleClose?.();
                // setStatus({ success: true });
                // setSubmitting(true);
            } else {
                console.log("Register Failed");
            }
        } catch (err) {
            console.log("err", err);
        }
        console.log("data", data);
    };
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            maxWidth="xs"
            fullWidth
            sx={{
                borderRadius: "42px !important",
                "& .MuiDialog-paper": {
                    borderRadius: "42px !important",
                },
            }}
        >
            <DialogContent
                style={{
                    background: Colors.BACKGROUND_COLOR,
                }}
            >
                <Stack direction="row" justifyContent="end">
                    <IconButton onClick={handleClose}>
                        <CloseIcon sx={{ color: Colors.WHITE, fontSize: "30px" }} />
                    </IconButton>
                </Stack>
                <Stack direction="column" spacing={3} padding={2}>
                    <TextFieldComponent
                        label="Name"
                        value={name}
                        onChange={handleNameChange}
                        validationtext={isValidName}
                        errorText="Please enter a valid name"
                    />
                    <TextFieldComponent
                        label="Email"
                        value={email}
                        onChange={handleEmailChange}
                        validationtext={isValidEmail}
                        type="email"
                        errorText="Please enter a valid email address"
                    />
                    <TextFieldComponent
                        label="Phone Number"
                        value={phoneNumber}
                        onChange={handlePhoneChange}
                        validationtext={isValidPhone}
                        type="number"
                        errorText="Please enter a valid phone number"
                    />
                    <TextFieldComponent
                        label="Password"
                        value={password}
                        onChange={handlePasswordChange}
                        validationtext={isPasswordValid}
                        type="password"
                        errorText="Please enter a valid password"
                    />
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
                        Create Account
                    </CustomButton>
                </Stack>
            </DialogContent>
        </Dialog>
    );
}
