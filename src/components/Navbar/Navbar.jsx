import { useState } from "react";
import NavLinks from "./NavLinks";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { LAYOUT } from "../../config/layout";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navBackground = "secondary.main";
  const sidebarWidth = `${LAYOUT.sidebarWidth}px`;

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          display: { xs: "block", lg: "none" },
          bgcolor: navBackground,
          color: "text.primary",
          boxShadow: "none",
        }}
      >
        <Toolbar sx={{ minHeight: LAYOUT.mobileNavbarHeight }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open navigation"
            onClick={handleOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="span" variant="h6" fontWeight={700} sx={{ ml: 1 }}>
            Menü
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={open} onClose={handleClose}>
        <Box
          sx={{
            width: 260,
            p: 3,
            bgcolor: navBackground,
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <NavLinks
            direction="column"
            align="center"
            onNavigate={handleClose}
          />
        </Box>
      </Drawer>

      <Box
        component="nav"
        sx={{
          display: { xs: "none", lg: "flex" },
          transition: "background-color 0.3s ease",
          bgcolor: navBackground,
          height: "100vh",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 1.5,
          px: 0,
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: (theme) => theme.zIndex.appBar,
          width: sidebarWidth,
        }}
      >
        <NavLinks direction="column" />
      </Box>
    </>
  );
};

export default Navbar;

