
import { Box } from "@mui/material";
import Colors from "../CommonComponents/Colors";
import Header from "./Header";




export default function AppHeader() {
    return (
        <Box
            bgcolor={Colors.WHITE}
            position="sticky"
            top={0}
            zIndex={1000}
        >
            <Box bgcolor={Colors.WHITE}>
                <Header />
            </Box>
        </Box>
    );
}
