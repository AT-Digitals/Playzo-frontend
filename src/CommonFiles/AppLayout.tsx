import { Box, BoxProps } from "@mui/material";

import AppHeader from "./AppHeader";
import Colors from "../CommonComponents/Colors";
import Footer from "../CommonComponents/footer/Footer";
import Layout from "../CommonComponents/Layout";
import { Outlet } from "react-router-dom";
import { useState } from "react";

export default function AppLayout({ children, ...props }: BoxProps) {
    const [activeTab, setActiveTab] = useState();


    return (
        <Layout {...props}>
            <AppHeader />
            <Box display="flex" flexDirection="column" width="100%" flexGrow={1}>
                <Box display="flex" flexDirection="column" flexGrow={1}>
                    <Box sx={{
                        backgroundColor: Colors.WHITE,
                    }} display="flex" flexDirection="column" flexGrow={1}>

<Outlet />
          <Footer />
                    </Box>
                </Box>
            </Box>
            <Footer />
        </Layout>
    );
}
