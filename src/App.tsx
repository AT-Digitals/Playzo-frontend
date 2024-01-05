import './App.css';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppRouter from './routes/AppRouter';

const theme = createTheme({
  typography: {
    fontFamily: `"Proxima Nova", sans-serif`,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
