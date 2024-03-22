import {
  Box,
  Button,
  Dialog,
  DialogContent,
  IconButton,
  Stack,
} from "@mui/material";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseIcon from "@mui/icons-material/Close";
import Colors from "../../CommonComponents/Colors";
import CustomLabel from "../../CommonComponents/CustomLabel";
import assets from "../../assets";

const { "Playzo (1).svg": logo } = assets;

interface OTPModalProps {
  open: boolean;
  handleClose: () => void;
}

export default function SucessfullyModal({ open, handleClose }: OTPModalProps) {
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
            <IconButton onClick={handleClose}>
              <CloseIcon sx={{ color: Colors.WHITE, fontSize: "30px" }} />
            </IconButton>
          </Stack>
          <Stack
            alignItems={"center"}
            direction="column"
            spacing={3}
            padding={2}
          >
            <img width={150} height={50} src={logo} alt="alterknit" />

            <Box display={"flex"} gap={"10px"}>
              <CustomLabel color={Colors.WHITE} mb={1}>
                Your password has been changes Sucessfully
              </CustomLabel>
              <CheckCircleIcon style={{ color: "white" }} />
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
              onClick={handleClose}
            >
              Ok
            </Button>
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  );
}
