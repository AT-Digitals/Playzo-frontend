import AppContainer from "../CommonComponents/AppContainer";
import { Box } from "@mui/material";
import Colors from "../CommonComponents/Colors";
import Header from "./Header";
import MoblieHeader from "./MobileHeader";

interface AppHeaderProps {
  setActiveTab: (event: any) => void;
  activeTab: string;
}

export default function AppHeader({ activeTab, setActiveTab }: AppHeaderProps) {
  return (
    <Box bgcolor={Colors.WHITE} position="sticky" top={0} zIndex={1000}>
      <AppContainer
        maxWidth={1520}
        direction="row"
        alignItems="center"
        spacing={1}
        padding={0}
      >
        <MoblieHeader setActiveTab={setActiveTab} activeTab={activeTab} />
      </AppContainer>
      <Box bgcolor={Colors.WHITE}>
        <Header />
      </Box>
    </Box>
  );
}
