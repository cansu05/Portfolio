import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router";
import { getTheme } from "../config/theme";
import { LAYOUT } from "../config/layout";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";

const appTheme = getTheme("light");
const sidebarWidth = `${LAYOUT.sidebarWidth}px`;

const MainLayout = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          minHeight: "100vh",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", lg: sidebarWidth },
            position: "fixed",
            zIndex: 50,
          }}
        >
          <Navbar />
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            width: "100%",
            minWidth: 0,
            bgcolor: "background.default",
            ml: { xs: 0, lg: sidebarWidth },
            px: { xs: 2, md: 0 },
            boxSizing: "border-box",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default MainLayout;
