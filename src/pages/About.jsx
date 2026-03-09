import { Box } from "@mui/material";
import CareerPath from "../components/About/CareerPath";
import Knowledge from "../components/About/Knowledge";
import PersonalDetails from "../components/About/PersonalDetails";
import Seo from "../components/Seo";
import { LAYOUT } from "../config/layout";

const About = () => {
  return (
    <>
      <Seo
        title="Hakkımda | Portföy"
        description="Cansu Uğur hakkında bilgiler, kariyer yolu ve yetkinlikler."
      />
      <Box sx={{ my: 10, mt: LAYOUT.sectionTopSpacing }}>
        <PersonalDetails />
        <CareerPath />
        <Knowledge />
      </Box>
    </>
  );
};

export default About;
