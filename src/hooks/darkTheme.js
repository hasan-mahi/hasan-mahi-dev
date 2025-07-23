import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#121212",
      paper: "#1d1d1d",
    },
    primary: { main: "#90caf9" },
    secondary: { main: "#f48fb1" },
    text: { primary: "#fff" },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif", // default for body, buttons, etc.
    h1: {
      fontFamily: "'Bitcount Single', monospace",
    },
    h2: {
      fontFamily: "'Bitcount Single', monospace",
    },
    h3: {
      fontFamily: "'Bitcount Single', monospace",
    },
    h4: {
      fontFamily: "'Bitcount Single', monospace",
    },
    h5: {
      fontFamily: "'Bitcount Single', monospace",
    },
    h6: {
      fontFamily: "'Bitcount Single', monospace",
    },
  },
});

export default darkTheme;
