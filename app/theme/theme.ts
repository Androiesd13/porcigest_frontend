import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Quicksand", 
    button:{
        fontWeight: 600
    }
  },
  palette: {
    primary: {
      main: "#A5C9CA",
    },
    secondary: {
      main: "#395b64", // tu color secundario
    },
    background: {
      default: "#e7f6f2",
    },
  },
});

export default theme;
