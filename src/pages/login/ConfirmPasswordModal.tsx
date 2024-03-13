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

import CloseIcon from "@mui/icons-material/Close";
import Colors from "../../CommonComponents/Colors";
import CustomLabel from "../../CommonComponents/CustomLabel";
import UserApi from "../../api/UserApi";
import { useState } from "react";

interface OTPModalProps {
  open: boolean;
  handleClose: () => void;
  setShowOTPModal: any;
  setOpenForgetModal: any;
  email: string;
}

export default function ConfirmPasswordModal({
  open,
  handleClose,
  setShowOTPModal,
  setOpenForgetModal,
  email,
}: OTPModalProps) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleConfirmClose = () => {
    // Check if both password fields are not empty
    if (!password || !confirmPassword) {
      setPasswordError("Please fill in both password fields");
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      setPasswordError("Passwords and Confirm password do not match");
      return;
    }

    try {
      const data = UserApi.forgotPassword(email, { password: password })
        .then((dataVal) => {
          setPasswordError("");
          setShowOTPModal(false); // Close the ShowOTPModal
          setOpenForgetModal(false); // Close the OpenForgetModal
          handleClose();
        })
        .catch((error) => {
          alert(error);
        });
      console.log("data", data);
    } catch (error) {
      alert(error);
      console.log("error", error);
    }

    // If everything is valid, reset the error and close the modal
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <Dialog
      open={open}
      // onClose={ModlaCloseChange}
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
              New Password
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
              placeholder="Enter new Password"
              required
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <CustomLabel mt={2} color={Colors.WHITE} mb={1}>
              Confirm Password
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
              placeholder="Enter Confirm Password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type={showConfirmPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowConfirmPassword}
                      edge="end"
                    >
                      {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            {passwordError && (
              <CustomLabel mt={1} color="red">
                {passwordError}
              </CustomLabel>
            )}
          </Box>

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
            onClick={handleConfirmClose}
          >
            Confirm
          </Button>

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
            onClick={handleClose}
          >
            Back
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}
