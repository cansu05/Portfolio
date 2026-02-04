import { Box } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DescriptionIcon from "@mui/icons-material/Description";

const iconMap = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  resume: DescriptionIcon,
};

const Icon = ({ name }) => {
  const Icon = iconMap[name];

  if (!Icon) {
    return null;
  }

  return (
    <Box
      component={Icon}
      sx={{
        fontSize: { xs: 30, md: 28 },
        color: "text.primary",
        transition: "color 0.2s ease",
        "&:hover": {
          color: "primary.main",
        },
      }}
    />
  );
};

export default Icon;
