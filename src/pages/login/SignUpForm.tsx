import {
    Box,
    Button,
    Dialog,
    DialogContent,
    IconButton,
    InputAdornment,
    Stack,
    TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import Checkbox from "@mui/material/Checkbox";
import CloseIcon from "@mui/icons-material/Close";
import Colors from "../../CommonComponents/Colors";
import CustomLabel from "../../CommonComponents/CustomLabel";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import ModalComponent from "../../CommonComponents/CustomDateCalender/ModalComponent";
import Select from "@mui/material/Select";
import TextFieldComponent from "./TextFieldComponent";
import UserApi from "../../api/UserApi";
import routes from "../../routes/routes";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface signUpProps {
    handleClose?: () => void;
    open: any;
}

const names = ["BoardGames", "Cricket", "Badminton", "Playstation"];

export default function SignUpForm({ handleClose, open }: signUpProps) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false);
    const [isValidName, setIsValidName] = useState(false);
    const [isValidPhone, setIsValidPhone] = useState(false);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [sportsName, setSportsName] = useState<string[]>([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalErrorOpen, setModalErrorOpen] = useState(false);
    const [errorText, setErrorText] = useState("");

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        navigate(routes.BOOKING_SERVICE);
        handleClose?.();
    };

    const handleErrorModal = () => {
        setModalErrorOpen(false);
        setErrorText("");
    };

    const handleEmailChange = (event: any) => {
        const newEmail = event.target.value;
        setEmail(newEmail);
        setIsValidEmail(false);
    };

    const handleNameChange = (event: any) => {
        setName(event.target.value);
        setIsValidName(false);
    };

    const handleSportsChange = (event: { target: { value: any } }) => {
        const {
            target: { value },
        } = event;
        setSportsName(
            // On autofill we get a stringified value.
            typeof value === "string" ? value.split(",") : value
        );
    };

    const handlePhoneChange = (event: any) => {
        setPhoneNumber(event.target.value);
        setIsValidPhone(false);
    };
    const validateEmail = (input: any) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(input);
        return isValid;
    };

    const handlePasswordChange = (event: any) => {
        setPassword(event.target.value);
        setIsPasswordValid(false);
    };

    const onSubmit = async (event: any) => {
        event?.preventDefault();
        if (!name) {
            setIsValidName(true);
        }

        if (!email) {
            setIsValidEmail(true);
        }

        if (!phoneNumber) {
            setIsValidPhone(true);
        }

        if (!password) {
            setIsPasswordValid(true);
        }

        if (!validateEmail(email)) {
            setIsValidEmail(true);
            return;
        }
        if (phoneNumber.length < 10) {
            setIsValidPhone(true);
            return;
        }
        if (password.length <= 8) {
            setIsPasswordValid(true);
            return;
        }

        const data = {
            name,
            email,
            phoneNumber,
            password,
            sportsName,
        };
        if (name && email && phoneNumber && password) {
            try {
                const response = await UserApi.createUser({
                    email: data.email,

                    password: data.password,
                    name: data.name,

                    phone: data.phoneNumber,
                    interestedSports:data.sportsName
                });
                if (response) {
                    setModalOpen(true);
                    setName("");
                    setEmail("");
                    setPassword("");
                    setPhoneNumber("");
                    setSportsName([]);
                } else {
                    console.log("Register Failed");
                }
            } catch (error: any) {
                setModalErrorOpen(true);
                setErrorText(error.message);
            }
        }
    };

    const ModlaCloseChange = () => {
        handleClose?.();
        setName('');
        setEmail('');
        setPassword('')
        setPhoneNumber("");
        setSportsName([]);
        setIsValidEmail(false);
        setIsPasswordValid(false);
        setIsValidName(false);
        setIsValidPhone(false);
    }
    return (
        <Dialog
            open={open}
            onClose={ModlaCloseChange}
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
                    <IconButton onClick={ModlaCloseChange}>
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
                        placeholdertext="Enter your name"
                    />
                    <TextFieldComponent
                        label="Email"
                        value={email}
                        onChange={handleEmailChange}
                        validationtext={isValidEmail}
                        type="email"
                        errorText="Please enter a valid email address"
                        placeholdertext="Enter your email"
                    />
                    <TextFieldComponent
                        label="Phone Number"
                        value={phoneNumber}
                        onChange={handlePhoneChange}
                        validationtext={isValidPhone}
                        type="number"
                        errorText="Please enter a valid phone number"
                        placeholdertext="Enter your phone number"
                    />
                    <Box>
                        <CustomLabel color={Colors.WHITE} mb={1}>
                            Interested Sports
                        </CustomLabel>
                        <Select
                            labelId="demo-multiple-checkbox-label"
                            id="demo-multiple-checkbox"
                            multiple
                            value={sportsName}
                            onChange={handleSportsChange}
                            // input={<OutlinedInput label="Tag" />}
                            renderValue={(selected) => selected.join(", ")}
                            //MenuProps={MenuProps}
                            sx={{
                                backgroundColor: Colors.WHITE,
                                width: "100%",
                                borderRadius: "8px",
                                "& .MuiOutlinedInput-root": {
                                    borderRadius: "8px",
                                },
                            }}
                            placeholder="Enter your interest"
                        >
                            {names.map((name) => (
                                <MenuItem key={name} value={name}>
                                    <Checkbox checked={sportsName.indexOf(name) > -1} />
                                    <ListItemText primary={name} />
                                </MenuItem>
                            ))}
                        </Select>
                    </Box>
                    <Box>
                        <CustomLabel color={Colors.WHITE} mb={1}>
                            {"Password"}
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
                            // label="Password"
                            value={password}
                            onChange={handlePasswordChange}
                            placeholder="Enter your password"
                            // validationtext={isPasswordValid}
                            type={showPassword ? "text" : "password"}
                            // errorText="Please enter a valid password"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>

                                        {isPasswordValid && (
                                            <ErrorOutlineIcon
                                                sx={{ ml: "5px" }}
                                                color="error"
                                                style={{ marginRight: "8px" }}
                                            />
                                        )}
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <span style={{ color: "#d32f2f", fontSize: "12px" }}>
                            {isPasswordValid ? "Please enter a valid password" : ""}
                        </span>
                    </Box>
                    <Button
                        sx={{
                            padding: "12px 20px",
                            textTransform: "none",
                            fontSize: "16px",
                            minWidth: "110px",
                            fontWeight: "400",
                            border: "2px solid #15B5FC",
                            borderRadius: "50px",
                            letterSpacing: "1.6px",
                            background: Colors.BUTTON_COLOR,
                            color: Colors.WHITE,
                            ":hover": {
                                background: Colors.WHITE,
                                color: Colors.BUTTON_COLOR,
                                border: "1px solid #15B5FC",
                            },
                        }}
                        onClick={onSubmit}
                    >
                        Create Account
                    </Button>
                </Stack>
                <ModalComponent
                    open={modalOpen}
                    handleClose={handleCloseModal}
                    text={"Congratulations!"}
                    subText="Your account has been successfully registered"
                />
                <ModalComponent
                    open={modalErrorOpen}
                    handleClose={handleErrorModal}
                    text={errorText}
                />
            </DialogContent>
        </Dialog>
    );
}
