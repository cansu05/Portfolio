import { useEffect, useMemo, useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Typography,
} from "@mui/material";
import ProjectCard from "../components/project/ProjectCard";
import Seo from "../components/Seo";
import { LAYOUT } from "../config/layout";

const INITIAL_VISIBLE_COUNT = 4;
const LOAD_MORE_COUNT = 4;

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  useEffect(() => {
    let isMounted = true;

    import("../data/projects").then((module) => {
      if (!isMounted) return;
      setProjects(module.projects ?? []);
      setIsLoading(false);
    });

    return () => {
      isMounted = false;
    };
  }, []);

  const visibleProjects = useMemo(
    () => projects.slice(0, visibleCount),
    [projects, visibleCount],
  );

  const hasMore = visibleCount < projects.length;

  return (
    <>
      <Seo
        title="Projeler | Portföy"
        description="Cansu Uğur tarafından geliştirilen frontend projeleri."
      />
      <Container
        component="section"
        maxWidth="lg"
        sx={{ my: 10, mt: LAYOUT.sectionTopSpacing }}
      >
        <Typography component="h1" variant="h4" fontWeight={700} sx={{ mb: 4 }}>
          Projelerim
        </Typography>

        {isLoading ? (
          <Box sx={{ display: "flex", justifyContent: "center", py: 8 }}>
            <CircularProgress color="inherit" />
          </Box>
        ) : (
          <>
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
              {visibleProjects.map((project, index) => (
                <Box key={project.id} sx={{ height: { xs: "auto", sm: "100%" } }}>
                  <ProjectCard project={project} priority={index === 0} />
                </Box>
              ))}
            </Box>

            {hasMore && (
              <Box sx={{ mt: 5, display: "flex", justifyContent: "center" }}>
                <Button
                  onClick={() =>
                    setVisibleCount((prev) =>
                      Math.min(prev + LOAD_MORE_COUNT, projects.length),
                    )
                  }
                  variant="contained"
                  sx={{ bgcolor: "primary.main", px: 3, py: 1.25 }}
                >
                  Daha Fazla Göster
                </Button>
              </Box>
            )}
          </>
        )}
      </Container>
    </>
  );
};

export default Projects;
