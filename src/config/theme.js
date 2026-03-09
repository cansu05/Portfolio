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
        primary: COLORS.charcoal,
        secondary: COLORS.white,
      },

      divider: alpha(COLORS.charcoal, 0.12),

      icon: {
        main: COLORS.charcoal,
        secondary: COLORS.white,
      },
    },

    typography: {
      fontFamily: `"Montserrat", "Segoe UI", "Roboto", "Helvetica", "Arial", sans-serif`,
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
