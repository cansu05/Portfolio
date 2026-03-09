import CareerPath from "../components/About/CareerPath ";
import PersonalDetails from "../components/About/PersonalDetails";
import Knowledge from "../components/About/Knowledge";
import Seo from "../components/Seo";
import { Box } from "@mui/material";

const About = () => {
  return (
    <>
      <Seo
        title="Hakkimda | Portfoy"
        description="Cansu Ugur hakkinda bilgiler, kariyer yolu ve yetkinlikler."
      />
      <Box sx={{ my: { xs: 10, lg: 10 }, mt: { xs: 16, lg: 10 } }}>
        <PersonalDetails />
        <CareerPath />
        <Knowledge />
      </Box>
    </>
  );
};

export default About;
