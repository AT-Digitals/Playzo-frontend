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

interface OTPModalProps {
  open: boolean;
  handleClose: () => void;
}

export default function ConfirmPasswordModal({
  open,
  handleClose,
}: OTPModalProps) {
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
            />
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
            // onClick={onSubmit}
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
