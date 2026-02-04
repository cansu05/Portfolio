import { NavLink } from "react-router";
import { links } from "../../data";
import { Box, Stack } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

const iconMap = {
  home: HomeOutlinedIcon,
  person: PersonOutlineIcon,
  work: WorkOutlineIcon,
};

const NavLinks = ({ direction = "column", align = "flex-start", onNavigate }) => {
  return (
    <Stack
      component="ul"
      sx={{
        listStyle: "none",
        m: 0,
        p: 0,
        gap: 2,
        flexDirection: direction,
        alignItems: align,
      }}
    >
      {links.map((link) => {
        const { id, href, text, iconName } = link;
        const Icon = iconMap[iconName];
        return (
          <Box
            key={id}
            component="li"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Box
              component={NavLink}
              to={href}
              className={({ isActive }) => (isActive ? "active" : undefined)}
              onClick={onNavigate}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                width: direction === "row" ? "auto" : "160px",
                textDecoration: "none",
                color: "text.primary",
                fontSize: 18,
                fontWeight: 500,
                transition:
                  "transform 0.3s ease, letter-spacing 0.3s ease, color 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  letterSpacing: "0.08em",
                },
                "&.active": {
                  color: "text.primary",
                },
              }}
            >
              {Icon ? <Box component={Icon} sx={{ fontSize: 20 }} /> : null}
              <Box component="span">{text}</Box>
            </Box>
          </Box>
        );
      })}
    </Stack>
  );
};
export default NavLinks;
