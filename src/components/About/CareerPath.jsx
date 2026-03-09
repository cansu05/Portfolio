import { experienceData } from "../../data";
import { Box, Container, Stack, Typography } from "@mui/material";

const CareerPath = () => {
  return (
    <Container
      component="section"
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        py: 5,
        mt: 2,
      }}
    >
      <Typography component="h2" variant="h5" fontWeight={700}>
        Deneyimlerim
      </Typography>
      {experienceData.map((exp, index) => (
        <Stack
          key={`${exp.company}-${exp.year}`}
          direction="row"
          alignItems="center"
          spacing={2}
          sx={{ mt: 2 }}
        >
          <Box
            sx={{
              position: "relative",
              width: 24,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: 6,
                height: 6,
                bgcolor: "text.primary",
                borderRadius: "50%",
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />
            {index !== experienceData.length - 1 && (
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  width: "1px",
                  bgcolor: "grey.300",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              />
            )}
          </Box>

          <Stack direction="row" alignItems="center" spacing={3}>
            <Box
              sx={{
                bgcolor: "background.paper",
                color: "text.secondary",
                px: 1.5,
                py: 0.5,
                borderRadius: 1,
                fontSize: 14,
                minWidth: 150,
                textAlign: "center",
              }}
            >
              {exp.year}
            </Box>
            <Box>
              <Typography fontWeight={600}>{exp.company}</Typography>
              <Typography variant="body2" color="text.primary">
                {exp.position}
              </Typography>
            </Box>
          </Stack>
        </Stack>
      ))}
    </Container>
  );
};

export default CareerPath;
