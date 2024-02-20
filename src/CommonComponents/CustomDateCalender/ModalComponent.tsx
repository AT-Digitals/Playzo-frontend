import { Box, IconButton, Modal, Typography } from "@mui/material";
import Colors from "../Colors";

import CloseIcon from "@mui/icons-material/Close";

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#000333",
    borderRadius: "15px",
    p: 4,
};

interface modalProps {
    open: boolean,
    handleClose: () => void;
    text: string;
    subText?: string;
}

export default function ModalComponent({ open, handleClose, text, subText }: modalProps) {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Box display={"flex"} justifyContent={"end"} marginTop={"-12px"}>
                    <IconButton>
                        <CloseIcon
                            onClick={handleClose}
                            style={{ fontSize: "25px", color: Colors.WHITE }}
                        />
                    </IconButton>
                </Box>
                <Typography
                    marginTop={"20px"}
                    textAlign={"center"}
                    fontSize={"17px"}
                    color={Colors.WHITE}
                >
                    {text}
                </Typography>
                <Typography
                    mb={"20px"}
                    textAlign={"center"}
                    fontSize={"15px"}
                    marginTop={"8px"}
                    color={Colors.WHITE}
                >
                    {subText}
                </Typography>
            </Box>
        </Modal>

    )
}