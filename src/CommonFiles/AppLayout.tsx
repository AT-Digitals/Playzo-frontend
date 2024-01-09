import { Box, BoxProps } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import routes from "../routes/routes";
import Colors from "../CommonComponents/Colors";
import Layout from "../CommonComponents/Layout";
import Header from "./Header";
import AppHeader from "./AppHeader";
import Footer from "./Footer";


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
                    </Box>
                </Box>
            </Box>
            <Footer />
        </Layout>
    );
}
