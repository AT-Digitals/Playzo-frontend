import {
    Box,
    Dialog,
    DialogContent,
    IconButton,
    InputAdornment,
    Stack,
    TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useEffect, useState } from "react";

import CloseIcon from "@mui/icons-material/Close";
import Colors from "../../CommonComponents/Colors";
import CustomButton from "../../CommonComponents/CustomButton";
import CustomLabel from "../../CommonComponents/CustomLabel";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import TextFieldComponent from "./TextFieldComponent";
import UserApi from "../../api/UserApi";
import routes from "../../routes/routes";
import { useNavigate } from "react-router-dom";

interface signUpProps {
    handleClose?: () => void;
    open: any;
}

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
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
      };
    const handleEmailChange = (event: any) => {
        const newEmail = event.target.value;
        setEmail(newEmail);
        validateEmail(newEmail);
    };
    const validateName = (value: string) => {
        setIsValidName(value.length >= 16);
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
        setIsValidEmail(isValid?false:true);
    };

    const validatePassword = (value: string) => {
        setIsPasswordValid(value.length >= 8);
    };

    const handlePasswordChange = (event: any) => {
        setPassword(event.target.value);
        validatePassword(event.target.value);
    };
    useEffect(() => {
        if (name==="") {
          setIsValidName(true)
      }
        if (email!=="") {
          validateEmail(email);
        }else{
          setIsValidEmail(true)
        }
        if (phoneNumber==="") {
          setIsValidPhone(true);
        }
      
        if (password==="") {
            setIsPasswordValid(true);
        }
      }, [email, name, phoneNumber, password]);
    
    const onSubmit = async (event: any) => {
        event?.preventDefault();
        if (email!=="") {
            validateEmail(email);
          }else{
            setIsValidEmail(true)
          }
        if (password==="") {
            setIsPasswordValid(true);
        }
       
  if (name==="") {
    setIsValidName(true)
}
        if (phoneNumber==="") {
            setIsValidPhone(true)
        }

        const data = {
            name,
            email,
            phoneNumber,
            password,

        };
        if(name && email && phoneNumber && password){
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
    }
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
                        // validationtext={isPasswordValid}
                        type={showPassword ? "text" : "password"}
                        // errorText="Please enter a valid password"
                        InputProps={{
                            endAdornment: ( <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              edge="end"
                            >
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                            
                            {!isPasswordValid && 
                            <ErrorOutlineIcon sx={{ml:"5px"}}
                              color="error"
                              style={{ marginRight: "8px" }}
                            />
                            }
                          </InputAdornment>
                          
                          ),
                          
                            
                          }}

                    />
                     <span style={{ color: "#d32f2f", fontSize: "12px" }}>
              {!isPasswordValid ? "Please enter a valid password" : ""}
            </span>
                    </Box>
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
