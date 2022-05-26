import { createTheme, CssBaseline, ThemeProvider, } from '@mui/material';
import './App.css';
import Router from './router';

function App() {

  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  );
}

export default App;

