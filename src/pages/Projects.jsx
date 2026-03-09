import ProjectCard from "../components/project/ProjectCard";
import Seo from "../components/Seo";
import { projects } from "../data";
import { Box, Container, Typography } from "@mui/material";

const Projects = () => {
  return (
    <>
      <Seo
        title="Projeler | Portfoy"
        description="Cansu Ugur tarafindan gelistirilen frontend projeleri."
      />
      <Container
        component="section"
        maxWidth="xl"
        sx={{ my: 10, mt: { xs: 16, lg: 10 } }}
      >
        <Typography variant="h4" fontWeight={900} sx={{ mb: 4 }}>
          Projelerim
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, minmax(0, 1fr))",
            },
            alignItems: "stretch",
            gridAutoRows: { xs: "auto", sm: "1fr" },
            columnGap: { xs: 1.5, sm: 6 },
            rowGap: { xs: 3.5, sm: 6 },
          }}
        >
          {projects.map((project) => {
            return (
              <Box key={project.id} sx={{ height: { xs: "auto", sm: "100%" } }}>
                <ProjectCard project={project} />
              </Box>
            );
          })}
        </Box>
      </Container>
    </>
  );
};
export default Projects;
