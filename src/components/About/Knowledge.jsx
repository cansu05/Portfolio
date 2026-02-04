import SkillList from "./SkillList";
import { Container, Typography } from "@mui/material";

const Knowledge = () => {
  return (
    <Container
      component="section"
      maxWidth="xl"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        mt: 5,
      }}
    >
      <Typography
        variant="h5"
        fontWeight={700}
        sx={{ letterSpacing: "0.04em" }}
      >
        Yeteneklerim
      </Typography>
      <SkillList />
    </Container>
  );
};
export default Knowledge;
