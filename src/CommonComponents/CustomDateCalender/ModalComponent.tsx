import { Box, Button, Modal, Stack, Typography } from "@mui/material";

import Colors from "../Colors";
import MyDocument from "../../BookingService/BookingPDF";
import { PDFDownloadLink } from "@react-pdf/renderer";
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
  pdf?: any;
  data?: any;
}

export default function ModalComponent({
  open,
  handleClose,
  text,
  headingText,
  paymentText,
  pdf,
  data,
}: modalProps) {

  const handleBackdropClick = (event:any) => {
    // Prevent modal from closing when clicking on the backdrop
    event.stopPropagation();
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      BackdropProps={{ onClick: handleBackdropClick }}
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
          {paymentText ? (
            <Typography
              border={"1px solid white"}
              textAlign={"center"}
              textTransform={"none"}
              fontSize={"15px"}
              padding={"10px"}
              color={Colors.WHITE}
            >
              {paymentText}
            </Typography>
          ) : (
            ""
          )}
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
              onClick={handleClose}
            >
              OK
            </Button>

            {pdf ? (
              <Button
                variant="outlined"
                sx={{
                  padding: "8px 20px",
                  textTransform: "none",
                  fontSize: "14px",
                  maxWidth: "180px",
                  fontWeight: "400",
                  border: "2px solid #15B5FC",
                  borderRadius: "30px",
                  letterSpacing: "1.6px",
                  background: Colors.BUTTON_COLOR,
                  color: Colors.WHITE,
                  whiteSpace: "nowrap",
                  ":hover": {
                    background: Colors.WHITE,
                    color: Colors.BUTTON_COLOR,
                    border: "2px solid #15B5FC",
                  },
                }}
              >
                <div>
                  <PDFDownloadLink
                    style={{
                      color: "red",
                    }}
                    document={<MyDocument allBookings={data} />}
                    fileName="booking.pdf"
                  >
                    Download as PDF
                  </PDFDownloadLink>
                </div>
              </Button>
            ) : (
              ""
            )}
          </Stack>
        </Stack>
      </Box>
    </Modal>
  );
}
