import { Box, BoxProps } from "@mui/material";

import AppHeader from "./AppHeader";
import Colors from "../CommonComponents/Colors";
import Footer from "../CommonComponents/footer/Footer";
import Layout from "../CommonComponents/Layout";
import { Outlet } from "react-router-dom";
import routes from "../routes/routes";
import { useState } from "react";

export default function AppLayout({ children, ...props }: BoxProps) {
  const [activeTab, setActiveTab] = useState(
    localStorage.getItem("activeTab") || routes.HOME
  );

  const handleSelectMenu = (menu: string) => {
    console.log("menu", menu);
    setActiveTab(menu);
    localStorage.setItem("activeTab", menu);
  };

  return (
    <Layout {...props}>
      <AppHeader setActiveTab={handleSelectMenu} activeTab={activeTab} />
      <Box display="flex" flexDirection="column" width="100%" flexGrow={1}>
        <Box display="flex" flexDirection="column" flexGrow={1}>
          <Box
            sx={{
              backgroundColor: Colors.WHITE,
            }}
            display="flex"
            flexDirection="column"
            flexGrow={1}
          >
            <Outlet />
          </Box>
        </Box>
      </Box>
      <Footer />
    </Layout>
  );
}
