import { Box, Button, Modal, Stack, Typography } from "@mui/material";

import Colors from "../Colors";
import assets from "../../assets";

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
  headingText: string;
  paymentText?: string;
}

export default function ModalComponent({
  open,
  handleClose,
  text,
  headingText,
  paymentText,
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
            fontSize={"20px"}
            color={Colors.WHITE}
            fontWeight={600}
          >
            {headingText}
          </Typography>
          <Typography
            textAlign={"center"}
            fontSize={"17px"}
            color={Colors.WHITE}
          >
            {text}
            <br />
          </Typography>
          <Typography
            border={"1px solid white"}
            textAlign={"center"}
            textTransform={"capitalize"}
            fontSize={"15px"}
            padding={"10px"}
            color={Colors.WHITE}
          >
            {paymentText}
          </Typography>
          <Button
            variant="outlined"
            sx={{
              padding: "8px 20px",
              textTransform: "none",
              fontSize: "16px",
              minWidth: "150px",
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
            OK
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
}
