import "./App.css";
import "swiper/css";
import "swiper/css/navigation";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import AppRouter from "./routes/AppRouter";
import { TableDataProvider } from "./CommonComponents/CustomDateCalender/TableDataReducer";
import { GoogleOAuthProvider } from "@react-oauth/google"

const theme = createTheme({
  typography: {
    fontFamily: `"Proxima Nova", sans-serif`,
  },
});

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID ?? "" 

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TableDataProvider>
        <GoogleOAuthProvider clientId={clientId}>
          <AppRouter />
        </GoogleOAuthProvider>
      </TableDataProvider>
    </ThemeProvider>
  );
}

export default App;
