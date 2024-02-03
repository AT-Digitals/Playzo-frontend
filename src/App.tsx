import "./App.css";
import "swiper/css";
import "swiper/css/navigation";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import AppRouter from "./routes/AppRouter";
import { TableDataProvider } from "./CommonComponents/CustomDateCalender/TableDataReducer";

const theme = createTheme({
  typography: {
    fontFamily: `"Proxima Nova", sans-serif`,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TableDataProvider>
        <AppRouter />
      </TableDataProvider>
    </ThemeProvider>
  );
}

export default App;
