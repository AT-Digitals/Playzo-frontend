import {
  Box,
  Button,
  Dialog,
  DialogContent,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import Colors from "../../CommonComponents/Colors";
import ConfirmPasswordModal from "./ConfirmPasswordModal";
import CustomLabel from "../../CommonComponents/CustomLabel";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import UserApi from "../../api/UserApi";
import { useState } from "react";

interface OTPModalProps {
  open: boolean;
  handleClose: () => void;
  setOpenForgetModal: any;
  email: string;
}

export default function OTPModal({
  open,
  handleClose,
  setOpenForgetModal,
  email,
}: OTPModalProps) {
  const [showPassModal, setShowPassModal] = useState(false);
  const [otp, setOtp] = useState("");
  const [isValidOTP, setIsValidOTP] = useState(false);

  const handlePassModalClose = () => {
    setShowPassModal(false);
  };

  const validateOTP = (input: string) => {
    const emailRegex = /^[0-9A-Za-z]{8}$/;
    return emailRegex.test(input);
  };

  const onSubmitOtp = () => {
    if (!validateOTP(otp)) {
      setIsValidOTP(true);
      return;
    }
    try {
      if (!email) {
        alert("Please give your email in website");
      }
      const response = UserApi.otpVerification(email, otp)
        .then((dataVal) => {
          setShowPassModal(true);
        })
        .catch((error) => {
          alert(error);
        });
      console.log(response);
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };

  const handleOTPChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newOTP = event.target.value;
    setOtp(newOTP);
    setIsValidOTP(false);
  };

  return (
    <>
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
                Enter OTP
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
                placeholder="Enter Otp"
                value={otp}
                onChange={handleOTPChange}
                required
                error={!!isValidOTP}
                InputProps={{
                  endAdornment: isValidOTP && (
                    <ErrorOutlineIcon
                      color="error"
                      style={{ marginRight: "8px" }}
                    />
                  ),
                }}
              />
              <span style={{ color: "#d32f2f", fontSize: "12px" }}>
                {isValidOTP ? "Please enter a valid email otp" : ""}
              </span>
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
              onClick={onSubmitOtp}
            >
              Enter Otp
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
      <>
        {showPassModal && (
          <ConfirmPasswordModal
            open={showPassModal}
            handleClose={handlePassModalClose}
            setShowOTPModal={handleClose}
            setOpenForgetModal={setOpenForgetModal}
            email={email}
          />
        )}
      </>
    </>
  );
}
