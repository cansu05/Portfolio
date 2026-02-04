import { skillsData } from "../../data";
import { Box, Typography } from "@mui/material";

const SkillList = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: { xs: "1fr", lg: "repeat(3, 1fr)" },
        gap: { xs: 2, lg: 0 },
        mt: 1,
      }}
    >
      {skillsData.map((item, index) => (
        <Box key={index}>
          <Typography variant="h6" fontWeight={600} sx={{ mb: 1 }}>
            {item.category}
          </Typography>

          <Box
            component="ul"
            sx={{ pl: 3, m: 0, color: "text.primary", listStyle: "disc" }}
          >
            {item.skills.map((skill, idx) => (
              <Box component="li" key={idx} sx={{ mb: 0.5 }}>
                {skill}
              </Box>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default SkillList;
