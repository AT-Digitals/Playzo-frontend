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
import CustomLabel from "../../CommonComponents/CustomLabel";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import OTPModal from "./OTPModal";
import UserApi from "../../api/UserApi";
import { useState } from "react";

interface loginProps {
  handleClose?: () => void;
  open: any;
  setOpenForgetModal: any;
}

export default function ForgetPassword({
  handleClose,
  open,
  setOpenForgetModal,
}: loginProps) {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [showOTPModal, setShowOTPModal] = useState(false);
  const [emailValue, setEmailValue] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setIsValidEmail(false);
  };

  const validateEmail = (input: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  const onSubmit = () => {
    if (!validateEmail(email)) {
      setIsValidEmail(true);
      return;
    }
    try {
      const data = UserApi.sendOtp({ email: email })
        .then((dataVal) => {
          setEmailValue(dataVal.email);
          setShowOTPModal(true);
        })
        .catch((error) => {
          alert(error);
        });
      console.log("data", data);
    } catch (error) {
      alert(error);
      console.log("error", error);
    }
  };

  const handleOTPModalClose = () => {
    setShowOTPModal(false);
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
              Send Verification Link
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
        {showOTPModal && (
          <OTPModal
            open={showOTPModal}
            handleClose={handleOTPModalClose}
            setOpenForgetModal={setOpenForgetModal}
            email={emailValue}
          />
        )}
      </>
    </>
  );
}
