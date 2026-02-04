import { aboutData } from "../../data";
import { Box, Stack, Typography } from "@mui/material";

const AboutList = () => {
  return (
    <Stack spacing={1} sx={{ width: "100%" }}>
      {Object.entries(aboutData).map(([key, value]) => (
        <Box key={key} sx={{ display: "flex", gap: 1 }}>
          <Typography
            component="span"
            sx={{ textTransform: "capitalize", fontWeight: 600, color: "text.primary" }}
          >
            {key}:
          </Typography>
          <Typography component="span" color="text.primary">
            {value}
          </Typography>
        </Box>
      ))}
    </Stack>
  );
};
export default AboutList;
