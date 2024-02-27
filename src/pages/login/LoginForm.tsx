import {
  Box,
  Button,
  Dialog,
  DialogContent,
  Divider,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import CloseIcon from "@mui/icons-material/Close";
import Colors from "../../CommonComponents/Colors";
import CustomButton from "../../CommonComponents/CustomButton";
import CustomLabel from "../../CommonComponents/CustomLabel";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import Icon from "../../assets/Variant10.png";
import SignUpForm from "./SignUpForm";
import UserLoginApi from "../../api/UserLoginApi";
import routes from "../../routes/routes";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface loginProps {
  handleClose?: () => void;
  open: any;
}

export default function Form({ handleClose, open }: loginProps) {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(true);
  const [openModal, setOpenModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleEmailChange = (event: any) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    validateEmail(newEmail);
  };

  const signUpOnClickChange = () => {
    setOpenModal(true);
  }

  const handleCloseModal = () => {
    setOpenModal(false);
  }

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

    try {
      const response = await UserLoginApi.loginUser({
        email: data.email,
        password: data.password
      });
      const resData = await response;
      if (resData) {
        localStorage.setItem('user', JSON.stringify(response));
        navigate(routes.BOOKING_SERVICE);
        navigate(0);
        handleClose?.();
      }
    } catch (err:any) {
      console.log("err", err.message)
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
            <span style={{ color: "#d32f2f", fontSize: "12px" }}>
              {!isValidEmail ? "Please enter a valid email address" : ""}
            </span>
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
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              onChange={handlePasswordChange}
              value={password}
              required
              error={!isPasswordValid}
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
          <Link
            sx={{
              color: Colors.WHITE,
              textDecoration: "none",
              textAlign: "end",
            }}
          >
            Forgot Password?
          </Link>
          <Button
            sx={{
              borderRadius: "8px",
              padding: "14px 14px",
              textTransform: "none",
              fontSize: "18px",
              background: Colors.BUTTON_COLOR,
                color: Colors.WHITE,
                ":hover": {
                  background: Colors.WHITE,
                  color: Colors.BUTTON_COLOR,
                }
            }}
            onClick={onSubmit}
          >
            Login
          </Button>
          <Stack direction="row" alignItems="center" spacing={1} justifyContent="center">
            <Typography
              color={Colors.WHITE}
            >Dosen't have an account yet?</Typography>
            <Link onClick={signUpOnClickChange} sx={{ color: Colors.BUTTON, cursor: "pointer" }}>Sign Up</Link>
          </Stack>
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
            fullWidth
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
              // style={{
              //   position: "absolute",
              //   transform: `translate(-135px, -20px)`,
              // }}
              />
            }
          >
            Sign in with Google
          </CustomButton>
        </Stack>
        <SignUpForm open={openModal} handleClose={handleCloseModal} />
      </DialogContent>
    </Dialog>
  );
}
