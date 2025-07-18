import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: { default: "#121212", paper: "#1d1d1d" },
    primary: { main: "#90caf9" },
    secondary: { main: "#f48fb1" },
    text: { primary: "#fff" },
  },
  typography: { fontFamily: "Roboto, sans-serif" },
});

export default darkTheme;
