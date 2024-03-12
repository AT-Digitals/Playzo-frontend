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
import { useState } from "react";

interface loginProps {
  handleClose?: () => void;
  open: any;
}

export default function ForgetPassword({ handleClose, open }: loginProps) {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);

  const handleEmailChange = (event: any) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setIsValidEmail(false);
  };

  const validateEmail = (input: any) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(input);
    return isValid;
  };

  const onSubmit = () => {
    if (!validateEmail(email)) {
      setIsValidEmail(true);
      return;
    }
    console.log(email);
    handleClose?.();
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
            Send otp
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
