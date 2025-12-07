import { createTheme } from '@mui/material/styles';

export default createTheme({
  palette: {
    primary: { main: '#01143D' },
    secondary: { main: '#43B3EF' },
    background: { default: '#E8ECEF', paper: '#FFFFFF' },
    text: { primary: '#1E2A39', secondary: '#A9AEB4' },
    success: { main: '#1DAA6F' },
    error: { main: '#E53535' },
  },
  typography: { fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" },
});