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
import ForgetPassword from "./ForgetPasswordModal";
import ModalComponent from "../../CommonComponents/CustomDateCalender/ModalComponent";
import SignUpForm from "./SignUpForm";
import UserLoginApi from "../../api/UserLoginApi";
import assets from "../../assets";
import routes from "../../routes/routes";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const { "Variant10.png": Icon } = assets;

interface loginProps {
  handleClose?: () => void;
  open: any;
}

export default function Form({ handleClose, open }: loginProps) {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState(false);
  const [openForgetModal, setOpenForgetModal] = useState(false);

  const [authModal, setAuthModal] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleEmailChange = (event: any) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setIsValidEmail(false);
  };

  const signUpOnClickChange = () => {
    setOpenModal(true);
    setEmail("");
    setPassword("");
  };

  const handleCloseModal = () => {
    setOpenModal(false);
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
    event.preventDefault();
    if (!email) {
      setIsValidEmail(true);
      return;
    }

    if (!validateEmail(email)) {
      setIsValidEmail(true);
      return;
    }

    if (!password) {
      setIsPasswordValid(true);
      return;
    }

    if (password.length < 8) {
      setIsPasswordValid(true);
      return;
    }
    const data = {
      email: email,
      password: password,
    };
    if (email && password) {
      try {
        const response = await UserLoginApi.loginUser({
          email: data.email,
          password: data.password,
        });
        if (response) {
          localStorage.setItem("user", JSON.stringify(response));
          setEmail("");
          setPassword("");
          setIsValidEmail(false);
          setIsPasswordValid(false);
          navigate(routes.BOOKING_SERVICE);
          navigate(0);
          handleClose?.();
          setShowPassword(false);
        }
      } catch (err: any) {
        setAuthModal(true);
      }
    }
  };

  const ModlaCloseChange = () => {
    handleClose?.();
    setEmail("");
    setPassword("");
    setIsValidEmail(false);
    setIsPasswordValid(false);
    setShowPassword(false);
  };

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const user = await UserLoginApi.getGoogleToken(tokenResponse.code);
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        navigate(routes.BOOKING_SERVICE);
        navigate(0);
      }
    },
    flow: "auth-code",
  });

  const ForgetpOnClickChange = () => {
    setOpenForgetModal(true);
  };

  const handleCloseForgetModal = () => {
    setOpenForgetModal(false);
  };

  return (
    <>
      <Dialog
        open={open}
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
                error={!!isValidEmail}
                InputProps={{
                  endAdornment: isValidEmail && (
                    <ErrorOutlineIcon
                      color="error"
                      style={{ marginRight: "8px" }}
                    />
                  ),
                }}
              />
              <span style={{ color: "#d32f2f", fontSize: "12px" }}>
                {isValidEmail ? "Please enter a valid email address" : ""}
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
                error={!!isPasswordValid}
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
            <Typography
              onClick={ForgetpOnClickChange}
              sx={{
                color: Colors.WHITE,
                textDecoration: "underline",
                textAlign: "end",
                cursor: "pointer",
              }}
            >
              Forgot Password?
            </Typography>
            <Button
              type="button"
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
                  border: "2px solid #15B5FC",
                },
              }}
              onClick={onSubmit}
            >
              Login
            </Button>
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              justifyContent="center"
              whiteSpace={"nowrap"}
            >
              <Typography color={Colors.WHITE}>
                Dosen't have an account yet?
              </Typography>
              <Link
                onClick={signUpOnClickChange}
                sx={{ color: Colors.BUTTON, cursor: "pointer" }}
              >
                Sign Up
              </Link>
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
                padding: "14px 14px",
                textTransform: "none",
                fontSize: "16px",
                fontWeight: 700,
              }}
              startIcon={<img src={Icon} alt="button" width={30} height={30} />}
              onClick={() => googleLogin()}
            >
              Sign in with Google
            </CustomButton>
          </Stack>
          <SignUpForm open={openModal} handleClose={handleCloseModal} />
          <ForgetPassword
            handleClose={handleCloseForgetModal}
            open={openForgetModal}
            setOpenForgetModal={handleCloseForgetModal}
          />
        </DialogContent>
      </Dialog>
      <ModalComponent
        handleClose={() => setAuthModal(false)}
        open={authModal}
        text={"Authentication failed"}
        headingText={"Login error!!"}
      />
    </>
  );
}
