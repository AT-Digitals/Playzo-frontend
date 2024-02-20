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
  const navigate = useNavigate();


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
      if (response) {
        localStorage.setItem('user', JSON.stringify(response));
        navigate(routes.BOOKING_SERVICE);
        navigate(0);
        handleClose?.();
        // setStatus({ success: true });
        // setSubmitting(true);
      } else {
        console.log('Login Failed');
      }
    } catch (err) {
      console.log("err", err)
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
              type="password"
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
