import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router";
import { getTheme } from "../config/theme";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";

const appTheme = getTheme("light");

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
            width: { xs: "100%", lg: "288px" },
            position: "fixed",
            zIndex: 50,
          }}
        >
          <Navbar />
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            width: "100%",
            minWidth: 0,
            bgcolor: "background.default",
            ml: { xs: 0, lg: "288px" },
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
