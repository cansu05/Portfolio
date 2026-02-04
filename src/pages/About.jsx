import CareerPath from "../components/About/CareerPath ";
import PersonalDetails from "../components/About/PersonalDetails";
import Knowledge from "../components/About/Knowledge";
import { Box } from "@mui/material";

const About = () => {
  return (
    <Box sx={{ my: { xs: 10, lg: 10 }, mt: { xs: 16, lg: 10 } }}>
      <PersonalDetails />
      <CareerPath />
      <Knowledge />
    </Box>
  );
};

export default About;
