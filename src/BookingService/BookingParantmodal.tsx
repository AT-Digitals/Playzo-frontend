import { Box, Button, Modal, Stack, Typography } from "@mui/material";

import Colors from "../CommonComponents/Colors";
import assets from "../assets";

const { "Playzo (1).svg": logo } = assets;

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "#000333",
  borderRadius: "15px",
  p: 5,
};

interface modalProps {
  open: boolean;
  handleClose: () => void;
  text: string;
  handleConfirmReset: any;
}

export default function ModalComponent({
  open,
  handleClose,
  text,
  handleConfirmReset,
}: modalProps) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Stack direction="column" alignItems="center" spacing={2}>
          <img width={150} height={50} src={logo} alt="alterknit" />

          <Typography
            textAlign={"center"}
            fontSize={"17px"}
            color={Colors.WHITE}
          >
            {text}
            <br />
          </Typography>

          <Stack
            direction={"row"}
            gap={"1rem"}
            justifyContent={"space-between"}
          >
            <Button
              variant="outlined"
              sx={{
                padding: "8px 20px",
                textTransform: "none",
                fontSize: "14px",
                maxWidth: "150px",
                fontWeight: "400",
                border: "2px solid #15B5FC",
                borderRadius: "30px",
                letterSpacing: "1.6px",
                background: Colors.BUTTON_COLOR,
                color: Colors.WHITE,
                ":hover": {
                  background: Colors.WHITE,
                  color: Colors.BUTTON_COLOR,
                  border: "2px solid #15B5FC",
                },
              }}
              onClick={handleConfirmReset}
            >
              OK
            </Button>
            <Button
              variant="outlined"
              sx={{
                padding: "8px 20px",
                textTransform: "none",
                fontSize: "14px",
                maxWidth: "150px",
                fontWeight: "400",
                border: "2px solid #15B5FC",
                borderRadius: "30px",
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
              Cancel
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Modal>
  );
}
