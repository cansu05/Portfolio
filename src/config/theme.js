import { createTheme, alpha } from "@mui/material/styles";
import "@mui/material/styles";
import { COLORS } from "./color";

export function getTheme(mode) {
  return createTheme({
    palette: {
      mode,

      primary: { main: COLORS.smoke },
      secondary: { main: COLORS.rhino },

      background: {
        paper: COLORS.fossil,
        default: COLORS.cream,
      },

      text: {
        primary: "#424242",
        secondary: "#ffffff",
      },

      divider: alpha("#0F172A", 0.1),

      icon: {
        main: "#424242",
        secondary: "#ffffff",
      },
    },

    typography: {
      fontFamily: `"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif`,
      subtitle1: { fontSize: 18, lineHeight: 1.7, textAlign: "justify" },
      button: { textTransform: "none", fontWeight: 500 },
    },

    shape: { borderRadius: 8 },

    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: { backgroundImage: "none" },
        },
      },
    },
  });
}
